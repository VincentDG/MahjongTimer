// Runs every ported case in cases.mjs against the vendored riichi-score bundle.
// Usage (from the repo root):  node tests/scoring-check/check.mjs [--verbose] [--only <id-substring>]
// Prints one line per failing case (expected vs actual), then "N passed, M failed, K skipped".
// Exit code 1 if any case failed.

import { calculate, createGameState, createMeld } from "../../src/MahjongTimer/wwwroot/lib/riichi-score/riichi-score.js";
import { cases, skipped } from "./cases.mjs";

const args = process.argv.slice(2);
const verbose = args.includes("--verbose");
const onlyIdx = args.indexOf("--only");
const only = onlyIdx >= 0 ? args[onlyIdx + 1] : null;

const LIMIT_MULT = { yakuman: 1, "double-yakuman": 2, "triple-yakuman": 3, "quadruple-yakuman": 4 };

// riichi-score fu reasons -> Python FuCalculator reasons. Python folds the 10 fu for a
// closed ron into BASE (30) and lists chiitoitsu as BASE 25; handled in pythonFuDetails.
const FU_REASON = {
  tsumo: "tsumo",
  "kanchan wait": "kanchan",
  "penchan wait": "penchan",
  "tanki wait": "pair_wait",
  "yakuhai pair": "valued_pair",
  "double wind pair": "double_valued_pair",
  "open triplet of simples": "open_pon",
  "closed triplet of simples": "closed_pon",
  "open triplet of terminals/honors": "open_terminal_pon",
  "closed triplet of terminals/honors": "closed_terminal_pon",
  "open kan of simples": "open_kan",
  "closed kan of simples": "closed_kan",
  "open kan of terminals/honors": "open_terminal_kan",
  "closed kan of terminals/honors": "closed_terminal_kan",
};

// Python yaku attribute (YakuConfig) -> predicate on a riichi-score yaku listing.
// null = riichi-score has no such yaku.
const PY_YAKU = {
  kokushi: (y) => y.name === "kokushi-musou" && y.limit === "yakuman",
  daburu_kokushi: (y) => y.name === "kokushi-musou" && y.limit === "double-yakuman",
  tenhou: (y) => y.name === "tenhou",
  chiihou: (y) => y.name === "chiihou",
  renhou_yakuman: null,
  sashikomi: null,
  paarenchan: null,
};

// riichi-score yaku -> Python display name, for assertions on yaku names.
function pyDisplayName(y) {
  const single = y.limit === "yakuman";
  switch (y.name) {
    case "suuankou": return single ? "Suu Ankou" : "Suu Ankou Tanki";
    case "kokushi-musou": return single ? "Kokushi Musou" : "Kokushi Musou Juusanmen Matchi";
    default: return y.name;
  }
}

function yakumanCount(hi) {
  return hi.yaku.reduce((n, y) => n + (LIMIT_MULT[y.limit] ?? 0), 0);
}

function pythonFuDetails(hi) {
  if (hi.fuList.some((f) => f.reason === "chiitoitsu")) return [{ fu: 25, reason: "base" }];
  let base = 0;
  const out = [];
  for (const f of hi.fuList) {
    if (f.reason === "base" || f.reason === "closed ron") base += f.value;
    else out.push({ fu: f.value, reason: FU_REASON[f.reason] ?? `?${f.reason}` });
  }
  // riichi-score lifts an open 20-fu ron hand to 30 without an itemised entry;
  // Python lists it as HAND_WITHOUT_FU 2.
  if (hi.isStandardHand && hi.groups.some((g) => g.open) && hi.rawFu === 20 && hi.fu === 30) {
    out.push({ fu: 2, reason: "hand_without_fu" });
  }
  return [{ fu: base, reason: "base" }, ...out];
}

function buildInput(c) {
  const i = c.input;
  return {
    closedTiles: [...i.closedTiles],
    openMelds: i.openMelds.map((m) => createMeld({ type: m.type, tiles: [...m.tiles], from: m.from })),
    winningTile: { ...i.winningTile },
    gameState: createGameState(structuredClone(i.gameState)),
  };
}

// Pick the reading Python would report: highest basic points (Python: highest total),
// then on a tie a real yakuman, then more han, then more fu, then more raw fu.
function pick(c, r) {
  let his = r.handInterpretations;
  if (c.select?.waitType) his = his.filter((h) => h.waitType === c.select.waitType);
  if (!his.length) return { hi: null, ambiguous: false };
  const key = (h) => [h.basicPoints, yakumanCount(h) > 0 ? 1 : 0, h.han, h.fu, h.rawFu];
  const sorted = [...his].sort((a, b) => {
    const ka = key(a), kb = key(b);
    for (let k = 0; k < ka.length; k++) if (ka[k] !== kb[k]) return kb[k] - ka[k];
    return 0;
  });
  const fus = new Set(his.map((h) => h.fu));
  return { hi: sorted[0], ambiguous: c.kind === "fu" && !c.select?.waitType && fus.size > 1 };
}

function payments(c, hi) {
  const seat = c.input.gameState.seatWind;
  const ps = hi.seatPayments;
  if (!c.input.winningTile.isTsumo) return { main: ps[0]?.value ?? 0, additional: 0, total: hi.totalWinnings };
  if (seat === "east") return { main: ps[0].value, additional: ps[0].value, total: hi.totalWinnings };
  return {
    main: ps.find((p) => p.seat === "east").value,
    additional: ps.find((p) => p.seat !== "east").value,
    total: hi.totalWinnings,
  };
}

function actualFor(e, c, r, hi) {
  const w = e.what;
  if (w === "error") return r.valid ? null : "error";
  if (!hi) return undefined;
  const ym = yakumanCount(hi);
  switch (w) {
    case "han": return ym > 0 ? Math.min(13 * ym, c.hanCap ?? Infinity) : hi.han;
    case "fu": return hi.fu;
    case "precondition_han": return hi.han;
    case "precondition_fu": return hi.fu;
    case "len_yaku":
      return ym > 0
        ? hi.yaku.filter((y) => y.limit).length
        : hi.yaku.length + (hi.dora > 0) + (hi.akadora > 0) + (hi.uradora > 0);
    case "len_fu_details": return pythonFuDetails(hi).length;
    case "fu_detail": return pythonFuDetails(hi);
    case "yaku": return hi.yaku;
    case "yaku_names": return (ym > 0 ? hi.yaku.filter((y) => y.limit) : hi.yaku).map(pyDisplayName);
    case "cost.main": return payments(c, hi).main;
    case "cost.additional": return payments(c, hi).additional;
    case "cost.total": return payments(c, hi).total;
    default:
      if (w.startsWith("yaku_name[")) {
        const idx = Number(w.slice(10, -1));
        const list = ym > 0 ? hi.yaku.filter((y) => y.limit) : hi.yaku;
        return list[idx] ? pyDisplayName(list[idx]) : undefined;
      }
      throw new Error(`unknown expectation ${w}`);
  }
}

function judge(e, actual) {
  const fmt = (v) => JSON.stringify(v);
  switch (e.what) {
    case "error": {
      const wantError = e.op === "IsNot" || (e.op === "Eq" && e.value !== null);
      const gotError = actual !== null;
      return { ok: wantError === gotError, exp: wantError ? "invalid hand" : "valid hand", act: gotError ? "invalid hand" : "valid hand" };
    }
    case "fu_detail": {
      if (actual === undefined) return { ok: false, exp: fmt(e.value), act: "no interpretation" };
      const has = actual.some((d) => d.fu === e.value.fu && d.reason === e.value.reason);
      const ok = e.op === "In" ? has : !has;
      return { ok, exp: `${e.op === "In" ? "" : "no "}${e.value.reason} ${e.value.fu}`, act: actual.map((d) => `${d.reason} ${d.fu}`).join(", ") };
    }
    case "yaku": {
      if (actual === undefined) return { ok: false, exp: `${e.op} ${e.value}`, act: "no interpretation" };
      const pred = PY_YAKU[e.value];
      const has = pred ? actual.some(pred) : false;
      const ok = e.op === "In" ? has : !has;
      return {
        ok,
        exp: `${e.op === "In" ? "has" : "lacks"} ${e.value}${pred ? "" : " (no riichi-score equivalent)"}`,
        act: actual.map((y) => y.name + (y.limit ? `(${y.limit})` : "")).join(", "),
      };
    }
    default: {
      let ok;
      if (e.op === "Eq") ok = JSON.stringify(actual) === JSON.stringify(e.value);
      else if (e.op === "NotEq") ok = JSON.stringify(actual) !== JSON.stringify(e.value);
      else throw new Error(`op ${e.op}`);
      return { ok, exp: (e.op === "NotEq" ? "!= " : "") + fmt(e.value), act: actual === undefined ? "no interpretation" : fmt(actual) };
    }
  }
}

let passed = 0;
let failed = 0;
for (const c of cases) {
  if (only && !c.id.includes(only)) continue;
  let r;
  try {
    r = calculate(buildInput(c));
  } catch (err) {
    failed++;
    console.log(`FAIL ${c.id}: threw ${err.message}`);
    continue;
  }
  const { hi, ambiguous } = pick(c, r);
  const problems = [];
  for (const e of c.expect) {
    const res = judge(e, actualFor(e, c, r, hi));
    if (!res.ok) problems.push(`${e.what} expected ${res.exp} got ${res.act}`);
  }
  if (verbose) {
    const y = hi ? hi.yaku.map((x) => `${x.name}${x.limit ? "(" + x.limit + ")" : ""}:${x.han}`).join(" ") : "-";
    const extra = hi
      ? ` han=${hi.han} fu=${hi.fu} raw=${hi.rawFu} wait=${hi.waitType} dora=${hi.dora}/${hi.akadora}/${hi.uradora} yaku=[${y}] pay=${JSON.stringify(hi.seatPayments)}`
      : ` valid=${r.valid} errors=${JSON.stringify(r.errors)}`;
    console.log(`${problems.length ? "FAIL" : "ok  "} ${c.id}${extra}${ambiguous ? " [fu-ambiguous]" : ""}`);
  }
  if (problems.length) {
    failed++;
    const tags = c.unsupported.length ? `  [python-only: ${c.unsupported.join("; ")}]` : "";
    console.log(`FAIL ${c.id}: ${problems.join("; ")}${tags}`);
  } else {
    passed++;
  }
}
const k = only ? 0 : skipped.length;
console.log(`${passed} passed, ${failed} failed, ${k} skipped`);
process.exit(failed ? 1 : 0);
