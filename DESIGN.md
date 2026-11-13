# Riichi Mahjong Turn Timer — Design (v2)

## Purpose
A real table tool first; C# practice second.

## Platform
- Blazor WebAssembly (.NET 10), installable as a PWA and usable offline.
- Hosted on GitHub Pages. Every push to `main` runs the tests and redeploys
  (`.github/workflows/deploy.yml`).

## Device setup
- One shared phone, flat in the middle of the table.
- Portrait (set in the web manifest). The screen is kept awake with the browser
  Wake Lock API where the browser allows it.

## Clock rules
- **Base time** per turn. Acting within it costs nothing.
- **Time bank** per player. Drains only after base time runs out.
- Every turn start gives a fresh base time, including turns started by a call.
- Banks refill to full at the start of each hand.
- Time is chosen from presets (base + bank): **5 + 20** (default), 5 + 10, 3 + 5.
  Changing the preset starts a new hand.
- The preset and the sound on/off setting are saved in the browser (`localStorage`).

## Turns
- Hand start: whoever goes first taps their own section.
- Current player taps own section → turn passes counter-clockwise
  (near → right → across → left → near).
- Any other player taps their section → call; turn jumps to them.
- **Undo** steps back one tap at a time, restoring everyone's time. It never reaches
  into the previous hand.
- Taps are ignored while paused.
- If the app leaves the screen (app switch, screen off, tab change), the clock
  auto-pauses. It stays paused until someone taps Resume.

## Centre controls
- **Pause / Resume** — only available once a hand has started.
- **Undo** — disabled when there is nothing to undo.
- **New hand** — refills all banks. Mid-hand it needs a second tap within 3 seconds,
  so a stray tap cannot wipe the banks.
- **Settings** — the button shows the current preset (e.g. `5 + 20`). Opening it
  pauses a running hand.

## Warnings
- When the bank reaches zero: one double beep plus vibration, once.
- The section turns red and shows "tap when done" until the turn moves on.
- No enforced penalty — the table decides.
- The beep can be turned off and plays at media volume; vibration always fires
  (on phones that support it).

## Layout
```
 ┌───────────────────────────┐
 │      (across, upside-down)│
 ├──────┬─────────────┬──────┤
 │      │ Pause       │      │
 │ left │ Undo        │ right│
 │      │ New hand    │      │
 │      │ 5 + 20      │      │
 ├──────┴─────────────┴──────┤
 │  near   your turn  5      │
 │         bank 20  ▓▓▓▓▓░   │
 └───────────────────────────┘
```
- Each section's text is rotated to face its seat (across 180°, left 90°, right −90°).
- Seats are positions (near, right, across, left), not winds; no player names.
- Active section shows base seconds left and the bank underneath; once base time is
  used it shows the bank draining. Inactive sections show their bank.

## Code structure
- `Game/TableClock.cs` — all clock rules, no UI. `TimeSetting` holds the presets.
  Seats are numbered 0–3 counter-clockwise from the near edge, so the next seat is
  `seat + 1`.
- `Pages/Home.razor` — the screen, centre controls, settings sheet, and the 100 ms
  tick loop that drives `TableClock.Tick`.
- `Pages/SeatPanel.razor` — one player's section.
- `wwwroot/js/table.js` — browser features C# cannot reach directly: wake lock,
  sound, vibration, saved settings.
- `tests/MahjongTimer.Tests` — xUnit tests for `TableClock`.

## Changed from v1 (MAUI)
- Web app instead of an Android-only MAUI app; no USB install needed.
- Fixed presets instead of free-form base/bank values.
- Seats are positions instead of winds.
- One alarm at zero instead of a beep each second for the last 5 seconds.
- "End hand" became "New hand" with a confirm tap.

## Out of scope
Score tracking (points, riichi sticks, placements): the table keeps scores with
physical sticks.

## Planned: round tracking + hand calculator (calculator built; round tracking not)
Mockups: https://claude.ai/artifact/CYQ5trABeNhGfxr1P63VEE
Terms: see GLOSSARY.md.

**Decided**
- No score tracking in the app. The app helps *work out* a winning hand's value.
- Calculator input: type the winning hand as MPSZ text on the app's own keypad
  (`0`–`9`, `m`, `p`, `s`, `z`), not the phone keyboard. The parsed tiles show as
  pictures underneath for checking. The app finds yaku and fu itself. (Replaces the
  earlier tile-picker decision: one person does the typing and knows MPSZ, and a
  picker isn't fewer taps.)
- Notation: standard MPSZ, so hands can be pasted from other tools and test cases.
- Called sets go in one Open row, separated by commas, e.g. `777z,123s`. The app
  works out chi, pon or kan from each group. (Commas, because `111222333m` could be
  three pons or three chis.)
- Each concealed kan gets its own small "Kan" field, added with a (+) beside the
  Closed field (up to 4, each removable). The Kan fields sit on their own row
  under Closed, which appears with the first kan (four never fit beside Closed). One kan per field, no commas. Kans are
  never inferred from four tiles in the Closed field. (Four of a tile can be kept
  in the hand without declaring a kan.)
- The winning tile has its own row, separate from the concealed tiles; tapping a
  tile in the preview can also mark it as the winning tile.
- Dora and ura-dora indicators are their own rows, typed on the same keypad.
- A live tile count ("13 / 14 tiles") shows at the top. Any problem (bad code, a set
  that isn't chi/pon/kan, more than 4 copies of a tile) shows one generic "Invalid
  hand" message, not per-row detail, and "Calculate value" stays disabled.
- Paste works per row. There is no single-line format for a whole hand.
- Keypad layout, like keyboard rows: `1`–`9`, `0`, backspace (top-right) on the
  top row; `m` `p` `s` `z` and `,` (wider keys) on the row below.
- An honour strip above the keypad shows East, South, West, North, White, Green, Red
  (`1z`–`7z`); tapping one types its code.
- Screen layout is landscape (portrait made the tiles too small): tiles across
  the full width on top, text fields bottom left, keypad and "Calculate value"
  bottom right.
- The app stays portrait-locked. The calculator screen is drawn rotated 90° and
  the user turns the phone. (Unlocking would let the clock flip when the phone is
  bumped on the table, and iPhones can't lock a single screen to landscape. This
  only works because the keypad is the app's own; the phone keyboard never opens.)
- Tiles are visual feedback only. Top line: "Dora" and "Ura" indicators, 5 slots
  each, side by side. Below: the hand on one line that never wraps (tiles shrink to
  fit, centred): concealed tiles, called sets, concealed kans, a gap, then the
  winning tile. The dora line stays left-aligned.
- Fields have their label above, never beside. Layout: Dora | Ura (one field each,
  no (+); each starts short and grows with its text up to half the width; Ura
  starts at the midpoint), then
  Closed, any Kan fields, (+), and a narrow one-tile Winning field, then Open across
  the full width. One Open field.
- Tile art: FluffyStuff/riichi-mahjong-tiles (CC0, public domain).
- No pao and no called-tile orientation: liability only matters when points are
  tracked, and the group keeps points with sticks. Called tiles are drawn upright.
- Mockup of the input screen: https://claude.ai/artifact/5arPXkpU8aCEWDR7YQHPMu
- Every calculator screen fills the whole phone screen: rows and columns share the
  available width and height, with no fixed-size boxes leaving dead space. (Phones
  in landscape range from about 640 to 930 CSS px wide.)
- First build: the calculator alone, opened from a placeholder "Hand value" button
  in the centre (pauses the clock). No round tracking yet; "New hand" unchanged.
- Until round tracking exists, seat wind, round wind and honba are picked on the
  calculator (defaults: round East, seat South, 0 honba). Dealer = seat wind East.
- Payments are shown without seat names, honba included: "Ron 8,000" or
  "Tsumo 2,000 / 4,000". Riichi sticks on the table aren't counted.
- Its own full screen, opened from Hand over → Win; the clock pauses while open.
  Also opens from settings on its own to check a hand without touching the round.
- Rules: Mahjong Soul standard — red fives, open tanyao, no kiriage mangan,
  counted yakuman at 13+ han.
- Result shows yaku with han, fu with a breakdown, and who pays what.
- Scoring code: riichi-score (npm, MIT; source in github.com/cwebley/kotenho),
  called from C# through JS interop. It must first pass a check against known
  hands from the Python `mahjong` library's tests. Chosen over RiichiSharp, whose
  fu breakdown lumps all set fu together and whose source has bugs (honba 3× too
  high, duplicate dora indicators counted once, dora undercounted in seven pairs).
- The check: port the Python library's fu tests (24), score tests (7) and the
  yaku/yakuman tests that apply to Mahjong Soul rules, and run them against
  riichi-score in Node. Every case must pass; a failure is either a noted rules
  difference or a real bug, which reopens the choice. The script lives in
  `tests/scoring-check/`.
- riichi-score's built file is vendored into `wwwroot/lib/riichi-score/` with its
  licence and version. No npm in the app's build.
- Check result: 226 passed, 29 failed, 123 skipped (details in
  `tests/scoring-check/RESULTS.md`). All failures are local rules Mahjong Soul
  doesn't use, plus two gaps the app handles itself: riichi-score ignores honba in
  payments (the app adds +300 ron / +100 per payer on tsumo), and it shows wrong fu
  on some yakuman (kokushi, all-honours seven pairs). The result hides fu for
  yakuman hands, since fu doesn't change their value.
- Only the highest-scoring reading of a hand is shown.
- C# parses and checks the MPSZ text (tiles, count, invalid hand) and is tested
  with xUnit like `TableClock`. Only the finished hand goes to riichi-score.
- Win conditions go on a second screen: conditions on the left (Ron/Tsumo,
  Riichi, Ippatsu, seat wind, round wind, honba; rare ones behind "More"), and the
  result on the right, updating live. Back returns to the tiles. Details are
  good enough as mocked; refine later.
- Dora: enter the indicator tiles as seen (plus ura-dora); red fives are `0`.
- Common extras up front (riichi, ippatsu, tsumo/ron); rare ones behind "More".
  Honba, seat wind and round wind come from round tracking.
- Rounds are tracked. The first seat to tap in a new game is the East 1 dealer.
- Settings can set round, dealer and honba by hand.

**Open**
- Q23: "New hand" becomes "Hand over" → Win (pick winner, open calculator) or
  Draw (was the dealer tenpai?), then the app moves to the next hand. User wants
  to think of a better solution. Until then the flow mockup uses a placeholder
  "Hand value" button in the centre: https://claude.ai/artifact/HKnUScYr5LAVZsuW1Ci76U
- Q25: game end — recommended: "Game over" after South 4 with a Continue button;
  early endings via New game in settings.
- Q26: centre shows "East 2 · 1 honba", dealer seat shows a Dealer badge. Mocked up;
  waiting for review.
- Possible later add-on: photo input that fills the tile list. Not researched yet
  (would need a tile-recognition model that runs in the browser).

## Planned: multi-phone sync (v3, draft — not built)
Mockups: https://claude.ai/artifact/SVYRZiUCu3Ea8xDasosoqj
Open question: final sign-off on the mockups (sizes, top row, layout).

**Backend**
- Firebase Realtime Database, free Spark plan. The app stays on GitHub Pages.
- Phones share taps stamped with Firebase server time; each phone works out the
  remaining time itself. `TableClock` stays the single home of the rules.
- Every phone needs internet (Wi-Fi or mobile data).
- Real security rules from day one (no "test mode").
- Tables are temporary and deleted after a few hours unused. History may come later.

**Devices and flow**
- One phone per player; no shared screen.
- Single phone mode stays, as a smaller "Single phone mode" link on the title screen.
- Title screen: display name (asked once, remembered), Host table, Join table.
- Join by 4-letter code, or by a shareable link that skips the code screen.
- Setup screen: joined players appear by name; anyone assigns names to winds
  (tap a name, then a wind) and picks the time preset. Start unlocks only when all
  four winds are filled.
- Seats are the four starting winds; turn order E → S → W → N.
- No going back to setup. A different group of players makes a new table.
- Reopening the app returns the phone to its table and seat.
- The host has no special powers after creating the table.

**Playing**
- Your turn: tap anywhere on your clock to end it.
- Someone else's turn: your clock ignores taps; only the **Call** button takes the turn.
- Any phone can Pause, Undo or start a New hand; every phone briefly shows who did it
  (e.g. "Mika paused").
- No auto-pause in sync mode when a phone leaves the screen.
- A phone that loses connection: the clock keeps running, that seat shows as offline.
- Bank hits zero: only that player's phone beeps and vibrates; the others show the
  seat in red.

**Look**
- Fonts: Kosugi Maru for the timer numbers (italic); M PLUS Rounded 1c for everything else.
- Time shown as base + bank (`5 + 20`), with the `+` and bank in yellow.
- Your phone: your clock large; the other three seats (name, wind, time) in a top row.
- No call-type buttons (chi/pon/kan) and no soundboard.
