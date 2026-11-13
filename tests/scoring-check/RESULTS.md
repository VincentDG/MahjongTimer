# riichi-score vs the Python `mahjong` test suite

Library under test: riichi-score 3.0.0, vendored at
`src/MahjongTimer/wwwroot/lib/riichi-score/riichi-score.js`.

Reference: the four `tests/hand_calculating/` files of
[MahjongRepository/mahjong](https://github.com/MahjongRepository/mahjong) (MIT), taken from `master` on
2026-11-13: `tests_fu_calculation.py`, `tests_yaku_calculation.py`, `tests_yakuman_calculation.py`,
`tests_scores_calculation.py`.

Run it from the repo root:

```
node tests/scoring-check/check.mjs            # one line per failure + summary, exit 1 if any fail
node tests/scoring-check/check.mjs --verbose  # also prints the chosen reading for every case
node tests/scoring-check/check.mjs --only yakuman:test_is_kokushi
```

## Summary

```
226 passed, 29 failed, 123 skipped
```

| Class | Count |
|---|---|
| (a) porting mistake I could not resolve | 0 |
| (b) rules difference (Python option/condition riichi-score does not support) | 28 |
| (c) apparent riichi-score bug | 1 (affects the reported fu only, not the payment) |

Every score that riichi-score was asked to compute under rules it supports matched Python: all
han, fu, yaku counts and payments in the fu, yaku and score files, and every standard yakuman
(including tenhou + tsuuiisou + daisuushii + suuankou tanki = 6x, and suukantsu stacks). That is
the main result.

## How the cases were ported

- **Extraction.** A small static extractor (my own Python, run with `-I`) parsed the test files
  with `ast` and walked each test body. It did not execute any code from the test files. It
  understood only the helpers the tests use (`TilesConverter.string_to_136_array` and
  `one_line_string_to_136_array`, `_string_to_136_tile`, `_make_meld`, `_make_hand_config`,
  `HandConfig`, `OptionalRules`, `Meld(...)`, `pytest.mark.parametrize`), which I reimplemented from
  `mahjong/tile.py` and `tests/utils_for_tests.py`. Each `estimate_hand_value` /
  `calculate_fu` / `calculate_scores` call became one case. The asserts after it became that
  case's `expect` list, with the original assert text kept in `src`. The extractor and converter
  are not part of the repo. They are in the session scratchpad (`scripts/extract.py`,
  `scripts/convert.py`). `cases.mjs` is plain data and can be edited by hand.
- **Tile notation.** Python's honours `1`–`7` are East, South, West, North, Haku, Hatsu, Chun
  (`mahjong/constants.py`: EAST=27 … CHUN=33). That is the same order as riichi-score's
  `1z`–`7z`, so no remapping was needed. Python's `tiles` holds all 14 tiles plus the extra kan
  tiles, melds and winning tile included. `closedTiles` = tiles − meld tiles − winning tile.
  Python's 136-id red fives (16/52/88) become `0m/0p/0s` only when the case's `has_aka_dora`
  is on. This matches Python, which counts them only then.
- **Rules mapping** (Python `OptionalRules` defaults → riichi-score `RulesetOptions`, set on
  every case):

  | Python | riichi-score |
  |---|---|
  | `has_open_tanyao` (default **False**) | `openTanyao` (riichi-score defaults to true, so it is always set explicitly) |
  | `has_double_yakuman` (default True) | `doubleYakuman.{daisuushii, kokushi13Wait, suuankouTanki, junseiChuuren}` all = that value |
  | `kazoe_limit` LIMITED / SANBAIMAN / NO_LIMIT | `kazoeYakuman` true / false / true (NO_LIMIT has no equivalent beyond 13 han) |
  | `kiriage` | `kiriageMangan` |
  | `fu_for_open_pinfu` | `openPinfuMinimumFu` 30 / 20 |
  | `DOUBLE_VALUED_PAIR` = 4 fu (fixed) | `doubleWindPairFu: 4` |
  | `has_aka_dora` | `akaDora` 1 per suit (or more if the test hand has more, since Python has no supply limit); 0 when off |
  | (no equivalent) | `kansaiChiitoitsu: false` |

- **Winds.** `player_wind=None` in Python means a non-dealer with no seat-wind yaku or fu.
  `round_wind=None` means no round wind at all. riichi-score always needs both, so I picked
  winds whose tiles are not in the hand. The seat is never East when Python's is None. The only
  hands where that was impossible contain all four winds (kokushi, tsuuiisou, shousuushii,
  daisuushii). There the extra wind value cannot change a yakuman's payment, and none of those
  cases failed on han.
- **Ron source and chi source.** A ron comes from the winner's kamicha (the seat to their
  left). Every called meld also comes from the kamicha, which keeps chi legal. Python
  `Meld.KAN` with `opened=True` becomes `daiminkan`, `opened=False` becomes `ankan`, and
  `SHOUMINKAN` becomes `shouminkan`. The fu tests pass 3-tile KAN melds to `FuCalculator`; those
  are ported as 4-tile kans.
- **FuCalculator tests** score a hand with no yaku check. riichi-score drops yaku-less hands, so
  each one gets a yaku that never changes fu: riichi if the hand is closed, houtei (ron) or
  haitei (tsumo) if it is open. The one test that picks a specific win group
  (`test_fu_based_on_win_group`) selects the riichi-score reading with the same wait (ryanmen for
  `win_groups[0]`, tanki for `win_groups[1]`). No other fu case had readings with different fu.
- **Fu itemisation mapping** (riichi-score → Python, compared as a list):

  | riichi-score `fuList` | Python `fu_details` |
  |---|---|
  | `base` 20 + `closed ron` 10 | `base` 30 (Python folds closed ron into base) |
  | `base` 20 | `base` 20 |
  | `chiitoitsu` 25 | `base` 25 |
  | (no item; open 20-fu hand lifted to 30) | `hand_without_fu` 2 |
  | `tsumo` / `kanchan wait` / `penchan wait` / `tanki wait` | `tsumo` / `kanchan` / `penchan` / `pair_wait` |
  | `yakuhai pair` / `double wind pair` | `valued_pair` / `double_valued_pair` |
  | `open/closed triplet of simples` | `open_pon` / `closed_pon` |
  | `open/closed triplet of terminals/honors` | `open_terminal_pon` / `closed_terminal_pon` |
  | `open/closed kan of simples` | `open_kan` / `closed_kan` |
  | `open/closed kan of terminals/honors` | `open_terminal_kan` / `closed_terminal_kan` |

- **Which reading.** riichi-score sorts readings by `basicPoints` only. Python takes the
  highest total, then on a tie prefers a real yakuman, then more han, then more fu. The runner
  applies Python's tie-break among riichi-score's equal-`basicPoints` readings. No case depended
  on it.
- **Yakuman.** Python reports yakuman as `han = 13 × multiplier` (capped at 78 under
  `limit_to_sextuple_yakuman`) and lists only the yakuman. The runner compares that against
  13 × the sum of riichi-score's yaku `limit` multipliers, and counts only the `limit` yaku.
  For non-yakuman hands, Python lists Dora / Aka Dora / Ura Dora as yaku entries, so the
  runner adds one entry for each of riichi-score's `dora` / `akadora` / `uradora` counts that is
  non-zero.
- **Score tests** (`ScoresCalculator.calculate_scores(han, fu)`) have no hand.
  `calculateBasicPoints` is not exported from the bundle, so each (han, fu, dealer, tsumo)
  became a constructed hand with exactly that han and fu: pinfu ron (30 fu), kanchan ron
  (40), terminal-triplet + simple-ankan kanchan ron (60), kanchan tsumo (30), and terminal-ankan
  kanchan tsumo (60). Han is topped up with riichi, ippatsu and dora indicators. Each case
  first checks the hand really has that han and fu (`precondition_*`), and all of them did.
  Payments map Python `main` = the ron payer, or East on a non-dealer tsumo; `additional` = a
  non-dealer on tsumo.
- **Honba and riichi deposits.** Python reports honba separately (`main_bonus`,
  `additional_bonus`) and adds deposits into `total`. The runner folds honba into what each seat
  pays, and leaves riichi deposits out of the total, because riichi-score has no deposit input.

## Skipped (123)

| Count | What | Why |
|---|---|---|
| 73 | `config.<yaku>.is_condition_met(...)` asserts in `tests_yaku_calculation.py` / `tests_yakuman_calculation.py` (whole `test_is_chuuren_poutou`, `test_is_not_chuuren_poutou`; the helper half of most `test_is_<yaku>` tests and of the `test_kokushi_with_extra_tiles_is_rejected` cases) | They test one yaku class on a 34-count array without a winning tile. There is no full-hand equivalent. The full-hand halves of those same tests were ported. |
| 4 | `TestYakuBaseClass.*` | Tests the Python `Yaku` base class (str/repr/abstract instantiation). |
| 24 | `test_nuki_dora_*` with nuki > 0 (18), `test_three_player_man_one_dora_indicator[True]`, `test_suuankou_wins_over_kazoe_yakuman_with_same_cost[0]` (3-player), `test_calculate_scores_with_bonus_three_player` (4) | riichi-score is 4-player only. It has no nuki dora and no 3-player payments. The 4-player / 0-nuki variants of the same tests were ported and pass. |
| 20 | `test_calculate_scores_*` rows with han 26, 39, 52, 65, 78 | Python runs these under `KAZOE_NO_LIMIT` (26 counted han = double yakuman, and so on). riichi-score has no multi-kazoe option, and no legal hand reaches 39+ han from regular yaku and dora. The one constructible example is `test_kazoe_settings[no_limit]` (28 han), which is ported and listed below under (b). |
| 1 | `test_calculate_scores_and_ron[1]` (1 han 110 fu = 3600) | I could not build a legal 1-han 110-fu hand. Without a third kan the most I found was 100 fu, and a third kan adds sankantsu (2 han). The payment formula would give 110×2⁵×4 = 3520 → 3600. |
| 1 | `test_is_nagashi_mangan` | Python scores it with `win_tile=None`. riichi-score has no nagashi mangan and needs a complete winning hand. Under (b) this would be a rules difference. |

Ported cases with intentionally malformed input still run and pass as "invalid hand" on both
sides: the three `test_kokushi_with_extra_tiles_is_rejected` hands and
`test_kokushi_with_closed_kan_is_rejected` (16–18 tiles; riichi-score rejects them on tile count,
Python as not winning) and `test_is_agari_and_closed_kan` (a closed-kan 6666m meld when the hand
holds only three 6m).

## Failures

### (a) Porting mistakes: none

All earlier porting issues were fixed. They were a `**kwargs` call, an `if … else` inside an
assert, and the meld tile in `test_is_agari_and_closed_kan` that is not in the hand.

### (b) Rules differences (28)

| Case(s) | Python rule / condition | Effect in riichi-score |
|---|---|---|
| `fu:test_tsumo_hand_and_disabled_pinfu#1` | `fu_for_pinfu_tsumo=True` (2 tsumo fu even with pinfu) | No such option; pinfu tsumo is always 20 fu (the standard rule). |
| `yaku:test_is_renhou#1` | renhou as 5-han mangan | No renhou. The hand has no other yaku, so it is invalid. |
| `yakuman:test_is_renhou_yakuman#1`, `test_kokushi_musou_multiple_yakuman#7`, `test_septuple_yakuman_disabled#1` | renhou as yakuman (`renhou_as_yakuman`) | No renhou; one yakuman fewer. |
| `yaku:test_is_open_riichi#1`, `yaku:test_is_daburu_open_riichi#1` | open riichi (+1 han) | No open riichi; 1 han fewer. |
| `yakuman:test_is_open_riichi_sashikomi#1`, `test_kokushi_musou_multiple_yakuman#8`, `test_kokushi_sashikomi_with_daburu_riichi_and_open_riichi#1`, `test_septuple_yakuman_enabled#1`, `test_sextuple_yakuman_limit#1` | sashikomi yakuman (dealing into an open riichi), plus renhou in some; `limit_to_sextuple_yakuman=False` in one | No sashikomi / renhou; fewer yakuman. Once those are removed, every remaining yakuman matches (for example tsuuiisou + daisuushii×2 + suuankou tanki×2 = 5×, 160000). |
| `yakuman:test_paarenchan[0]`, `[1]`, `test_paarenchan_no_yaku_allowed#1`, `test_kokushi_with_paarenchan#1` | paarenchan (8 consecutive dealer wins) | Not modelled; no game history input. |
| `yakuman:test_is_daisharin#1`, `test_is_daichikurin#1`, `test_is_daisuurin#1` | daisharin family (local yakuman, `has_daisharin`) | Not supported. Scored normally as 11 han (pinfu, tanyao, ryanpeikou, chinitsu), which matches Python's own `test_is_not_daisharin`. |
| `yakuman:test_is_tsuisou_and_daichisei#1` | daichisei (local yakuman, `has_daichisei`) | Not supported; single yakuman. |
| `yaku:test_kazoe_settings[no_limit]#1` | `KAZOE_NO_LIMIT` (28 counted han = double yakuman) | `kazoeYakuman` caps counted han at one yakuman (32000). The `limited` (32000) and `sanbaiman` (24000) variants pass. |
| `scores:test_calculate_scores_with_bonus#1`–`#4` | honba: +300 per honba (100 per payer on tsumo) | riichi-score **accepts `GameState.honbaCount` but `seatPayments` ignore it**. Base payments match exactly (2000/2000, 3900/2000, 12000, 12000). Riichi deposits have no input at all. The README does not promise honba in payments, so I count this as a scope difference, not a bug. **For the app: any honba must be added outside riichi-score.** |
| `yakuman:test_is_kokushi#1`, `#2`, `test_disabled_double_yakuman#1` | Fu reporting for kokushi: Python reports `fu = 0` | riichi-score reports 30 (base 20 + tanki 2, rounded). Fu has no defined value for kokushi and does not affect a yakuman payment. Han, yakuman multiplier (single vs 13-sided double, and single when doubles are disabled) and yaku all match, so this is a reporting convention. |

### (c) Apparent riichi-score bugs (1, reported fu only)

**`yakuman:test_is_tsuisou#1`: tsuuiisou in seven-pairs shape reports 30 fu instead of 25.**

- Hand: `11223344556677z` (East through Chun pairs), ron on 7z, non-dealer. riichi-score input:
  closed `1z1z2z2z3z3z4z4z5z5z6z6z7z`, winning `7z` by ron.
- Python: tsuuiisou, 13 han, **25 fu**. riichi-score: tsuuiisou (yakuman, 32000, which is correct),
  **fu 30** (`fuList` = base 20 + tanki 2 → rounded to 30).
- Correct per standard rules: a seven-pairs hand is always a flat 25 fu, and riichi-score's own
  `parseFu` says so ("chiitoi is always 25 fu"). The cause is in `yaku/index.js`: when a
  yakuman is present, it replaces the yaku list with only the yakuman
  (`yaku.filter(y => y.limit)`). That removes `chiitoitsu` before `parseFu` runs. `parseFu`
  detects the seven-pairs shape by looking for the `chiitoitsu` yaku name, so it falls through
  to the generic base + tanki path. I ruled out a porting cause: it is the only reading
  riichi-score produced (`isStandardHand: false`, wait `tanki`), and seven-pairs hands without
  a yakuman score 25 fu correctly (`fu:test_chitoitsu_fu`, `yaku:test_is_chitoitsu_hand#1`,
  `yaku:test_is_honroto#2`).
- Impact: none on payment. Yakuman ignore fu, and `basicPoints` / `seatPayments` are correct.
  Only the displayed fu is wrong. It could matter only if the app showed fu for yakuman hands.

## Other observations (not failures)

- For kokushi, declared yaku stay in riichi-score's `yaku` list next to the yakuman (for
  example `kokushi-musou(double-yakuman), riichi` and `…, double-riichi`). That makes `han` 1 or
  2 instead of 0. Payments are unaffected, because yakuman payment uses only the `limit`
  multipliers. Standard hands filter these out, so the two paths are inconsistent. Display
  code should follow the README ("use `limit` and `basicPoints` for limit hands").
- riichi-score has no checks on condition combinations that Python rejects (riichi with an open
  hand, rinshan without a kan, haitei with rinshan, and so on). No ported case relied on them.
