// package/dist/esm/models/hand-input.js
function createMeld({ type, tiles, from, calledIndex = 0 }) {
  if (type === "ankan") {
    return { type, tiles };
  }
  if (!from) {
    throw new Error(`A ${type} meld is formed by calling a tile, so it needs a \`from\` seat.`);
  }
  return { type, tiles, from, calledIndex };
}
function flattenInputTiles(handInput) {
  if (!handInput.openMelds) {
    handInput.openMelds = [];
  }
  const meldTiles = handInput.openMelds.reduce((acc, meld) => {
    acc.push(...meld.tiles);
    return acc;
  }, []);
  return [...handInput.closedTiles, handInput.winningTile.tile, ...meldTiles];
}

// package/dist/esm/models/standard-group.js
function createStandardGroup({ tiles, type, open = false, from, calledIndex, isFinalWait = false }) {
  return {
    tiles,
    type,
    open,
    from,
    // remains undefined if omitted
    calledIndex,
    // remains undefined for concealed groups
    isFinalWait
  };
}

// package/dist/esm/utils/append-melds-to-groups.js
function appendMeldsToGroups(melds, handInterpretation) {
  if (!melds || !handInterpretation.isStandardHand) {
    return handInterpretation;
  }
  melds.forEach((meld) => {
    if (!handInterpretation.groups) {
      handInterpretation.groups = [];
    }
    handInterpretation.groups.push(createStandardGroup(
      // Concealed kans do not break menzen and use concealed-kan fu, and
      // they carry neither a source seat nor a called tile.
      meld.type === "ankan" ? { tiles: [...meld.tiles], type: meld.type, open: false } : {
        tiles: [...meld.tiles],
        type: meld.type,
        open: true,
        from: meld.from,
        calledIndex: meld.calledIndex
      }
    ));
  });
  return handInterpretation;
}

// package/dist/esm/utils/rehydrate-red-fives.js
function rehydrateRedFives(redFives, handInterpretation) {
  redFives.forEach((redFiveTile) => {
    const redFiveTileSuit = redFiveTile[redFiveTile.length - 1];
    const regular5ForReplacing = `5${redFiveTileSuit}`;
    if (handInterpretation.isStandardHand) {
      const redFiveTileIndex = handInterpretation.pair.tiles.indexOf(regular5ForReplacing);
      if (redFiveTileIndex !== -1) {
        handInterpretation.pair.tiles[redFiveTileIndex] = redFiveTile;
        return;
      }
      let redFiveRestored = false;
      handInterpretation.groups.forEach((parsedGroup) => {
        if (redFiveRestored) {
          return;
        }
        const redFiveTileIndex2 = parsedGroup.tiles.indexOf(regular5ForReplacing);
        if (redFiveTileIndex2 !== -1) {
          parsedGroup.tiles[redFiveTileIndex2] = redFiveTile;
          redFiveRestored = true;
        }
      });
    } else {
      const redFiveTileIndex = handInterpretation.tiles.indexOf(regular5ForReplacing);
      handInterpretation.tiles[redFiveTileIndex] = redFiveTile;
    }
  });
  return handInterpretation;
}

// package/dist/esm/models/ruleset.js
var TENHOU_RULESET = Object.freeze({
  openTanyao: true,
  doubleWindPairFu: 4,
  openPinfuMinimumFu: 30,
  kiriageMangan: false,
  kazoeYakuman: true,
  kansaiChiitoitsu: false,
  doubleYakuman: Object.freeze({
    daisuushii: false,
    kokushi13Wait: false,
    suuankouTanki: false,
    junseiChuuren: false
  }),
  akaDora: Object.freeze({ manzu: 1, pinzu: 1, souzu: 1 })
});
function createRuleset(options = {}) {
  return {
    ...TENHOU_RULESET,
    ...options,
    doubleYakuman: { ...TENHOU_RULESET.doubleYakuman, ...options.doubleYakuman },
    akaDora: { ...TENHOU_RULESET.akaDora, ...options.akaDora }
  };
}

// package/dist/esm/models/game-state.js
function createGameState({ roundWind = "east", seatWind = "south", doraIndicators = [], uradoraIndicators = [], isRiichi = false, isDoubleRiichi = false, isIppatsu = false, isHaitei = false, isHoutei = false, isRinshan = false, isChankan = false, isTenhou = false, isChiihou = false, honbaCount = 0, ruleset } = {}) {
  return {
    roundWind,
    seatWind,
    doraIndicators,
    uradoraIndicators,
    isRiichi,
    isDoubleRiichi,
    isIppatsu,
    isHaitei,
    isHoutei,
    isRinshan,
    isChankan,
    isTenhou,
    isChiihou,
    honbaCount,
    ruleset: createRuleset(ruleset)
  };
}

// package/dist/esm/models/direction.js
var KAMICHA = {
  east: "north",
  south: "east",
  west: "south",
  north: "west"
};

// package/dist/esm/models/hand-interpretation.js
function createHandInterpretation(hio) {
  if (hio.isStandardHand) {
    return {
      ...hio,
      isStandardHand: true,
      pair: hio.pair,
      groups: hio.groups,
      basicPoints: hio.basicPoints ?? 0,
      seatPayments: hio.seatPayments ?? [],
      totalWinnings: hio.totalWinnings ?? 0,
      isTsumo: hio.isTsumo ?? false,
      yaku: hio.yaku ?? [],
      fuList: hio.fuList ?? [],
      rawFu: hio.rawFu ?? 0,
      fu: hio.fu ?? 0,
      han: hio.han ?? 0,
      limit: hio.limit,
      dora: hio.dora ?? 0,
      akadora: hio.akadora ?? 0,
      uradora: hio.uradora ?? 0
    };
  } else {
    return {
      ...hio,
      isStandardHand: false,
      tiles: hio.tiles,
      basicPoints: hio.basicPoints ?? 0,
      seatPayments: hio.seatPayments ?? [],
      totalWinnings: hio.totalWinnings ?? 0,
      isTsumo: hio.isTsumo ?? false,
      yaku: hio.yaku ?? [],
      fuList: hio.fuList ?? [],
      rawFu: hio.rawFu ?? 0,
      fu: hio.fu ?? 0,
      han: hio.han ?? 0,
      limit: hio.limit,
      dora: hio.dora ?? 0,
      akadora: hio.akadora ?? 0,
      uradora: hio.uradora ?? 0
    };
  }
}

// package/dist/esm/models/hand-analysis.js
function createHandAnalysis() {
  return {
    valid: true,
    errors: [],
    handInterpretations: [],
    finalWait: {
      tiles: [],
      sideCount: 0
    }
  };
}

// package/dist/esm/utils/is-suit-tile.js
function isSuitTile(tile) {
  const suit = tile[tile.length - 1];
  return suit === "m" || suit === "p" || suit === "s";
}

// package/dist/esm/utils/is-valid-tile.js
function isValidTile(tile) {
  const rank = parseInt(tile);
  const suit = tile[tile.length - 1];
  const validSuits = ["m", "p", "s", "z"];
  if (validSuits.indexOf(suit) === -1) {
    return false;
  }
  if (suit === "z") {
    if (rank > 7 || rank < 0) {
      return false;
    }
  }
  if (rank > 9 || rank < 0) {
    return false;
  }
  return true;
}

// package/dist/esm/utils/next-rank.js
function nextRank(tile) {
  const rank = parseInt(tile);
  const suit = tile[tile.length - 1];
  return `${rank + 1}${suit}`;
}

// package/dist/esm/utils/replace-akadora.js
function replaceAkadora(tiles) {
  return tiles.map((t) => {
    let rank = parseInt(t);
    const suit = t[t.length - 1];
    if (rank === 0) {
      rank = 5;
    }
    return `${rank}${suit}`;
  });
}

// package/dist/esm/utils/tile-compare.js
function tileCompare(a, b) {
  const suitOrder = { m: 0, p: 1, s: 2, z: 3 };
  const rawRankA = parseInt(a);
  const rawRankB = parseInt(b);
  const rankA = rawRankA === 0 ? 5 : rawRankA;
  const rankB = rawRankB === 0 ? 5 : rawRankB;
  const suitA = a[a.length - 1];
  const suitB = b[b.length - 1];
  if (suitOrder[suitA] !== suitOrder[suitB]) {
    return suitOrder[suitA] - suitOrder[suitB];
  }
  if (rankA !== rankB)
    return rankA - rankB;
  return rawRankA - rawRankB;
}

// package/dist/esm/utils/is-valid-meld.js
function isValidMeld(meld) {
  const invalidTiles = meld.tiles.filter((t) => !isValidTile(t));
  if (invalidTiles.length) {
    return false;
  }
  if (meld.type !== "ankan") {
    if (!Number.isInteger(meld.calledIndex) || meld.calledIndex < 0 || meld.calledIndex >= meld.tiles.length) {
      return false;
    }
  }
  const normalizedTiles = replaceAkadora(meld.tiles);
  if (meld.type === "run") {
    if (meld.tiles.length !== 3) {
      return false;
    }
    if (!normalizedTiles.every((tile) => isSuitTile(tile))) {
      return false;
    }
    const sortedTiles = normalizedTiles.sort(tileCompare);
    if (sortedTiles[1] === nextRank(sortedTiles[0]) && sortedTiles[2] === nextRank(sortedTiles[1])) {
      return true;
    }
  }
  if (meld.type === "triplet") {
    if (normalizedTiles.length !== 3) {
      return false;
    }
    if (normalizedTiles[1] === normalizedTiles[0] && normalizedTiles[2] === normalizedTiles[1]) {
      return true;
    }
  }
  if (meld.type === "daiminkan") {
    if (normalizedTiles.length !== 4) {
      return false;
    }
    if (normalizedTiles[1] === normalizedTiles[0] && normalizedTiles[2] === normalizedTiles[1] && normalizedTiles[3] === normalizedTiles[2]) {
      return true;
    }
  }
  if (meld.type === "shouminkan") {
    if (normalizedTiles.length !== 4) {
      return false;
    }
    if (normalizedTiles[1] === normalizedTiles[0] && normalizedTiles[2] === normalizedTiles[1] && normalizedTiles[3] === normalizedTiles[2]) {
      return true;
    }
  }
  if (meld.type === "ankan") {
    if (normalizedTiles.length !== 4) {
      return false;
    }
    if (normalizedTiles[1] === normalizedTiles[0] && normalizedTiles[2] === normalizedTiles[1] && normalizedTiles[3] === normalizedTiles[2]) {
      return true;
    }
  }
  return false;
}

// package/dist/esm/yaku/kokushi.js
function createKokushiListing(doubleYakuman = false) {
  return {
    name: "kokushi-musou",
    han: 0,
    limit: doubleYakuman ? "double-yakuman" : "yakuman"
  };
}
function detectKokushiWait(closedTiles, winningTile) {
  if (closedTiles.length !== 14) {
    return false;
  }
  const kokushiTiles = [
    "1m",
    "9m",
    "1p",
    "9p",
    "1s",
    "9s",
    "1z",
    "2z",
    "3z",
    "4z",
    "5z",
    "6z",
    "7z"
  ];
  const hasAllOrphans = kokushiTiles.every((kokushiTile) => {
    return closedTiles.indexOf(kokushiTile) !== -1;
  });
  if (!hasAllOrphans) {
    return false;
  }
  let kokushiPairTile;
  for (let i = 0; i < closedTiles.length - 1; i++) {
    if (closedTiles[i] === closedTiles[i + 1]) {
      kokushiPairTile = closedTiles[i];
      break;
    }
  }
  if (!kokushiPairTile) {
    return false;
  }
  return kokushiPairTile === winningTile.tile ? "kokushi-wide" : "kokushi-single";
}

// package/dist/esm/models/yaku.js
var LIMIT_BY_COUNT = [
  "yakuman",
  "double-yakuman",
  "triple-yakuman",
  "quadruple-yakuman"
];
function yakumanMultiplier(limit) {
  switch (limit) {
    case "quadruple-yakuman":
      return 4;
    case "triple-yakuman":
      return 3;
    case "double-yakuman":
      return 2;
    case "yakuman":
      return 1;
    default:
      return 0;
  }
}

// package/dist/esm/yaku/chiitoi.js
function createChiitoiListing() {
  return {
    name: "chiitoitsu",
    han: 2
  };
}
function detectChiitoi(closedTiles, kansaiChiitoitsu = false) {
  if (closedTiles.length !== 14) {
    return false;
  }
  const freqMap = /* @__PURE__ */ new Map();
  for (const tile of closedTiles) {
    freqMap.set(tile, (freqMap.get(tile) || 0) + 1);
  }
  if (!kansaiChiitoitsu && freqMap.size !== 7)
    return false;
  return [...freqMap.values()].every((count) => count === 2 || kansaiChiitoitsu && count === 4);
}

// package/dist/esm/utils/remove-tiles.js
function removeTiles(parentArray, tilesToRemove) {
  const result = [...parentArray];
  for (const tile of tilesToRemove) {
    const index = result.indexOf(tile);
    if (index !== -1) {
      result.splice(index, 1);
    }
  }
  if (result.length === parentArray.length - tilesToRemove.length) {
    return result;
  }
  return null;
}

// package/dist/esm/parsing/parse-groups.js
function parseGroups(tiles) {
  if (tiles.length === 0) {
    return [[]];
  }
  if (tiles.length < 3) {
    return [];
  }
  const firstTile = tiles[0];
  const setCandidate = [firstTile, firstTile, firstTile];
  const remainingAfterSet = removeTiles(tiles, setCandidate);
  const canStartRun = isSuitTile(firstTile) && parseInt(firstTile, 10) <= 7;
  const runCandidate = canStartRun ? [firstTile, nextRank(firstTile), nextRank(nextRank(firstTile))] : null;
  const remainingAfterRun = runCandidate ? removeTiles(tiles, runCandidate) : null;
  const results = [];
  if (remainingAfterSet) {
    const group = createStandardGroup({
      tiles: setCandidate,
      type: "triplet",
      open: false
    });
    const subInterpretations = parseGroups(remainingAfterSet);
    for (const sub of subInterpretations) {
      results.push([group, ...sub]);
    }
  }
  if (runCandidate && remainingAfterRun) {
    const group = createStandardGroup({
      tiles: runCandidate,
      type: "run",
      open: false
    });
    const subInterpretations = parseGroups(remainingAfterRun);
    for (const sub of subInterpretations) {
      results.push([group, ...sub]);
    }
  }
  return results;
}

// package/dist/esm/models/standard-pair.js
function createStandardPair({ tiles, isFinalWait = false }) {
  return {
    tiles,
    isFinalWait
  };
}

// package/dist/esm/parsing/standard-hand-combinations.js
function parseStandardHandCombinations(sortedClosedTiles) {
  const allParsedInterpretations = [];
  for (let i = 0; i < sortedClosedTiles.length - 1; i++) {
    if (i > 0 && sortedClosedTiles[i] === sortedClosedTiles[i - 1]) {
      continue;
    }
    if (sortedClosedTiles[i] === sortedClosedTiles[i + 1]) {
      const remainingTiles = [
        ...sortedClosedTiles.slice(0, i),
        ...sortedClosedTiles.slice(i + 2)
      ];
      const parsedPair = createStandardPair({
        tiles: [sortedClosedTiles[i], sortedClosedTiles[i + 1]]
      });
      const parsedGroupInterpretations = parseGroups(remainingTiles);
      const waitlessHandInterpretations = parsedGroupInterpretations.map((parsedGroupInterpretation) => {
        return {
          pair: parsedPair,
          groups: parsedGroupInterpretation
        };
      });
      allParsedInterpretations.push(...waitlessHandInterpretations);
    }
  }
  return allParsedInterpretations;
}

// package/dist/esm/utils/is-terminal-tile.js
function isTerminalTile(tile) {
  const rank = parseInt(tile);
  const suit = tile[tile.length - 1];
  if (suit === "z") {
    return false;
  }
  return rank === 1 || rank === 9;
}

// package/dist/esm/parsing/interpret-waits-from-groups.js
function interpretWaitsFromGroups(waitlessHandInterpretations, handInput) {
  const allHandInterpretations = [];
  const winningTile = handInput.winningTile.tile[0] === "0" ? `5${handInput.winningTile.tile[1]}` : handInput.winningTile.tile;
  waitlessHandInterpretations.forEach((whi) => {
    if (whi.pair.tiles[0] === winningTile) {
      allHandInterpretations.push(createHandInterpretation({
        isStandardHand: true,
        waitType: "tanki",
        pair: createStandardPair({ ...whi.pair, isFinalWait: true }),
        groups: [...whi.groups],
        winningTile: handInput.winningTile,
        gameState: createGameState(handInput.gameState)
      }));
    }
    whi.groups.forEach((parsedGroup, i) => {
      if (parsedGroup.tiles.includes(winningTile)) {
        if (parsedGroup.tiles[0] === parsedGroup.tiles[1]) {
          allHandInterpretations.push(createHandInterpretation({
            isStandardHand: true,
            waitType: "shanpon",
            pair: { ...whi.pair },
            groups: [
              ...whi.groups.slice(0, i),
              createStandardGroup({
                ...parsedGroup,
                isFinalWait: true
              }),
              ...whi.groups.slice(i + 1)
            ],
            winningTile: handInput.winningTile,
            gameState: createGameState(handInput.gameState)
          }));
          return;
        }
        if (parsedGroup.tiles[1] === winningTile) {
          allHandInterpretations.push(createHandInterpretation({
            isStandardHand: true,
            waitType: "kanchan",
            pair: { ...whi.pair },
            groups: [
              ...whi.groups.slice(0, i),
              createStandardGroup({
                ...parsedGroup,
                isFinalWait: true
              }),
              ...whi.groups.slice(i + 1)
            ],
            winningTile: handInput.winningTile,
            yaku: [],
            fuList: [],
            gameState: createGameState(handInput.gameState),
            dora: 0,
            akadora: 0,
            uradora: 0
          }));
          return;
        }
        if ((isTerminalTile(parsedGroup.tiles[0]) || isTerminalTile(parsedGroup.tiles[2])) && !isTerminalTile(winningTile)) {
          allHandInterpretations.push(createHandInterpretation({
            isStandardHand: true,
            waitType: "penchan",
            pair: { ...whi.pair },
            groups: [
              ...whi.groups.slice(0, i),
              createStandardGroup({
                ...parsedGroup,
                isFinalWait: true
              }),
              ...whi.groups.slice(i + 1)
            ],
            winningTile: handInput.winningTile,
            yaku: [],
            fuList: [],
            gameState: createGameState(handInput.gameState),
            dora: 0,
            akadora: 0,
            uradora: 0
          }));
          return;
        }
        allHandInterpretations.push(createHandInterpretation({
          isStandardHand: true,
          waitType: "ryanmen",
          pair: { ...whi.pair },
          groups: [
            ...whi.groups.slice(0, i),
            createStandardGroup({
              ...parsedGroup,
              isFinalWait: true
            }),
            ...whi.groups.slice(i + 1)
          ],
          winningTile: handInput.winningTile,
          yaku: [],
          fuList: [],
          gameState: createGameState(handInput.gameState),
          dora: 0,
          akadora: 0,
          uradora: 0
        }));
      }
    });
  });
  return allHandInterpretations;
}

// package/dist/esm/utils/is-honor-tile.js
function isHonorTile(tile) {
  const suit = tile[tile.length - 1];
  return suit === "z";
}

// package/dist/esm/yaku/chanta.js
var isYaochu = (tile) => isHonorTile(tile) || isTerminalTile(tile);
function createChantaListing(closed) {
  return { name: "chanta", han: closed ? 2 : 1 };
}
function createJunchanListing(closed) {
  return { name: "junchan", han: closed ? 3 : 2 };
}
function createHonroutouListing() {
  return { name: "honroutou", han: 2 };
}
function isMenzen(handInterpretation) {
  return handInterpretation.isStandardHand !== true || handInterpretation.groups.every((group) => !group.open);
}
function detectChanta(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    if (handInterpretation.tiles.every(isYaochu)) {
      handInterpretation.yaku.push(createHonroutouListing());
    }
    return handInterpretation;
  }
  const sets = [
    handInterpretation.pair.tiles,
    ...handInterpretation.groups.map((group) => group.tiles)
  ];
  if (!sets.every((tiles) => tiles.some(isYaochu))) {
    return handInterpretation;
  }
  const allTiles3 = sets.flat();
  if (allTiles3.every(isYaochu)) {
    handInterpretation.yaku.push(createHonroutouListing());
    return handInterpretation;
  }
  const closed = isMenzen(handInterpretation);
  handInterpretation.yaku.push(allTiles3.some(isHonorTile) ? createChantaListing(closed) : createJunchanListing(closed));
  return handInterpretation;
}

// package/dist/esm/yaku/chuuren.js
var BASE = [3, 1, 1, 1, 1, 1, 1, 1, 3];
function createChuurenListing(doubleYakuman = false) {
  return { name: "chuuren-poutou", han: 0, limit: doubleYakuman ? "double-yakuman" : "yakuman" };
}
function isJunseiChuuren(tiles, winningTile) {
  const ranks = tiles.map((tile) => tile[0] === "0" ? 5 : Number(tile[0]));
  const winningRank = winningTile[0] === "0" ? 5 : Number(winningTile[0]);
  const winningIndex = ranks.indexOf(winningRank);
  if (winningIndex === -1)
    return false;
  ranks.splice(winningIndex, 1);
  const counts = new Array(9).fill(0);
  for (const rank of ranks)
    counts[rank - 1] += 1;
  return counts.every((count, rank) => count === BASE[rank]);
}
function detectChuuren(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    return handInterpretation;
  }
  if (handInterpretation.groups.some((group) => group.open)) {
    return handInterpretation;
  }
  const tiles = [
    ...handInterpretation.pair.tiles,
    ...handInterpretation.groups.flatMap((group) => group.tiles)
  ];
  if (tiles.length !== 14 || tiles.some((tile) => isHonorTile(tile))) {
    return handInterpretation;
  }
  if (new Set(tiles.map((tile) => tile[1])).size !== 1) {
    return handInterpretation;
  }
  const counts = new Array(9).fill(0);
  for (const tile of tiles)
    counts[(tile[0] === "0" ? 5 : Number(tile[0])) - 1] += 1;
  let surplus = 0;
  for (let rank = 0; rank < 9; rank++) {
    const extra = counts[rank] - BASE[rank];
    if (extra < 0)
      return handInterpretation;
    surplus += extra;
  }
  if (surplus !== 1)
    return handInterpretation;
  handInterpretation.yaku.push(createChuurenListing(isJunseiChuuren(tiles, handInterpretation.winningTile.tile) && handInterpretation.gameState.ruleset?.doubleYakuman.junseiChuuren));
  return handInterpretation;
}

// package/dist/esm/utils/is-dragon-tile.js
function isDragonTile(tile) {
  const suit = tile[tile.length - 1];
  if (suit !== "z") {
    return false;
  }
  const rank = parseInt(tile);
  return rank >= 5;
}

// package/dist/esm/yaku/dragons.js
function createShousangenListing() {
  return { name: "shousangen", han: 2 };
}
function createDaisangenListing() {
  return { name: "daisangen", han: 0, limit: "yakuman" };
}
function detectDragons(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    return handInterpretation;
  }
  const dragonTriplets = handInterpretation.groups.filter((group) => group.type !== "run" && isDragonTile(group.tiles[0])).length;
  if (dragonTriplets >= 3) {
    handInterpretation.yaku.push(createDaisangenListing());
  } else if (dragonTriplets === 2 && isDragonTile(handInterpretation.pair.tiles[0])) {
    handInterpretation.yaku.push(createShousangenListing());
  }
  return handInterpretation;
}

// package/dist/esm/yaku/honitsu.js
function createHonitsuListing(closed) {
  return {
    name: "honitsu",
    han: closed ? 3 : 2
  };
}
function createChinitsuListing(closed) {
  return {
    name: "chinitsu",
    han: closed ? 6 : 5
  };
}
function allTiles(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    return handInterpretation.tiles;
  }
  return [
    ...handInterpretation.pair.tiles,
    ...handInterpretation.groups.flatMap((group) => group.tiles)
  ];
}
function isMenzen2(handInterpretation) {
  return handInterpretation.isStandardHand !== true || handInterpretation.groups.every((group) => !group.open);
}
function detectHonitsu(handInterpretation) {
  const tiles = allTiles(handInterpretation);
  const suits = new Set(tiles.filter((tile) => !isHonorTile(tile)).map((tile) => tile[1]));
  if (suits.size !== 1) {
    return handInterpretation;
  }
  const closed = isMenzen2(handInterpretation);
  const hasHonors = tiles.some((tile) => isHonorTile(tile));
  handInterpretation.yaku.push(hasHonors ? createHonitsuListing(closed) : createChinitsuListing(closed));
  return handInterpretation;
}

// package/dist/esm/yaku/kantsu.js
var KAN_TYPES = ["ankan", "daiminkan", "shouminkan"];
function createSankantsuListing() {
  return { name: "sankantsu", han: 2 };
}
function createSuukantsuListing() {
  return { name: "suukantsu", han: 0, limit: "yakuman" };
}
function detectKantsu(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    return handInterpretation;
  }
  const kans = handInterpretation.groups.filter((group) => KAN_TYPES.includes(group.type)).length;
  if (kans >= 4) {
    handInterpretation.yaku.push(createSuukantsuListing());
  } else if (kans === 3) {
    handInterpretation.yaku.push(createSankantsuListing());
  }
  return handInterpretation;
}

// package/dist/esm/yaku/purity.js
var GREEN = ["2s", "3s", "4s", "6s", "8s", "6z"];
function createTsuuiisouListing() {
  return { name: "tsuuiisou", han: 0, limit: "yakuman" };
}
function createChinroutouListing() {
  return { name: "chinroutou", han: 0, limit: "yakuman" };
}
function createRyuuiisouListing() {
  return { name: "ryuuiisou", han: 0, limit: "yakuman" };
}
function allTiles2(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    return handInterpretation.tiles;
  }
  return [
    ...handInterpretation.pair.tiles,
    ...handInterpretation.groups.flatMap((group) => group.tiles)
  ];
}
function detectPurity(handInterpretation) {
  const tiles = allTiles2(handInterpretation);
  if (tiles.every((tile) => isHonorTile(tile))) {
    handInterpretation.yaku.push(createTsuuiisouListing());
    return handInterpretation;
  }
  if (tiles.every((tile) => isTerminalTile(tile))) {
    handInterpretation.yaku.push(createChinroutouListing());
    return handInterpretation;
  }
  if (tiles.every((tile) => GREEN.includes(tile))) {
    handInterpretation.yaku.push(createRyuuiisouListing());
  }
  return handInterpretation;
}

// package/dist/esm/yaku/winds.js
var isWindTile = (tile) => isHonorTile(tile) && Number(tile[0]) <= 4;
function createShousuushiiListing() {
  return { name: "shousuushii", han: 0, limit: "yakuman" };
}
function createDaisuushiiListing(doubleYakuman = false) {
  return { name: "daisuushii", han: 0, limit: doubleYakuman ? "double-yakuman" : "yakuman" };
}
function detectWinds(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    return handInterpretation;
  }
  const windTriplets = handInterpretation.groups.filter((group) => group.type !== "run" && isWindTile(group.tiles[0])).length;
  if (windTriplets >= 4) {
    handInterpretation.yaku.push(createDaisuushiiListing(handInterpretation.gameState.ruleset?.doubleYakuman.daisuushii));
  } else if (windTriplets === 3 && isWindTile(handInterpretation.pair.tiles[0])) {
    handInterpretation.yaku.push(createShousuushiiListing());
  }
  return handInterpretation;
}

// package/dist/esm/yaku/iipeiko.js
function createIipeikoListing() {
  return {
    name: "iipeiko",
    han: 1
  };
}
function createRyanpeikouListing() {
  return {
    name: "ryanpeikou",
    han: 3
  };
}
function detectIipeiko(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    return handInterpretation;
  }
  if (handInterpretation.groups.some((group) => group.open)) {
    return handInterpretation;
  }
  const runCounts = /* @__PURE__ */ new Map();
  handInterpretation.groups.forEach((group) => {
    if (group.type !== "run") {
      return;
    }
    const key = group.tiles.join("");
    runCounts.set(key, (runCounts.get(key) ?? 0) + 1);
  });
  let duplicatedPairs = 0;
  runCounts.forEach((count) => {
    duplicatedPairs += Math.floor(count / 2);
  });
  if (duplicatedPairs >= 2) {
    handInterpretation.yaku.push(createRyanpeikouListing());
  } else if (duplicatedPairs === 1) {
    handInterpretation.yaku.push(createIipeikoListing());
  }
  return handInterpretation;
}

// package/dist/esm/utils/run-start.js
function runStart(group) {
  const ranks = group.tiles.map((tile) => Number(tile[0]));
  return `${Math.min(...ranks)}${group.tiles[0][1]}`;
}

// package/dist/esm/yaku/ittsuu.js
var SUITS = ["m", "p", "s"];
function createIttsuuListing(closed) {
  return { name: "ittsuu", han: closed ? 2 : 1 };
}
function detectIttsuu(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    return handInterpretation;
  }
  const starts = new Set(handInterpretation.groups.filter((group) => group.type === "run").map(runStart));
  const closed = handInterpretation.groups.every((group) => !group.open);
  for (const suit of SUITS) {
    const straight = [1, 4, 7].every((rank) => starts.has(`${rank}${suit}`));
    if (straight) {
      handInterpretation.yaku.push(createIttsuuListing(closed));
      return handInterpretation;
    }
  }
  return handInterpretation;
}

// package/dist/esm/utils/translate-wind-to-tile.js
function translateWindToTile(wind) {
  const windMap = {
    east: "1z",
    south: "2z",
    west: "3z",
    north: "4z"
  };
  return windMap[wind];
}

// package/dist/esm/yaku/pinfu.js
function createPinfuListing() {
  return {
    name: "pinfu",
    han: 1
  };
}
function detectPinfu(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    return handInterpretation;
  }
  if (handInterpretation.waitType !== "ryanmen") {
    return handInterpretation;
  }
  const roundWindTile = translateWindToTile(handInterpretation.gameState.roundWind);
  const seatWindTile = translateWindToTile(handInterpretation.gameState.seatWind);
  const pinfuGroups = handInterpretation.groups.filter((group) => !group.open && group.type === "run");
  if (pinfuGroups.length !== 4) {
    return handInterpretation;
  }
  if (handInterpretation.pair.tiles[0] === seatWindTile || handInterpretation.pair.tiles[0] === roundWindTile) {
    return handInterpretation;
  }
  if (handInterpretation.pair.tiles[0] === "5z" || handInterpretation.pair.tiles[0] === "6z" || handInterpretation.pair.tiles[0] === "7z") {
    return handInterpretation;
  }
  handInterpretation.yaku.push(createPinfuListing());
  return handInterpretation;
}

// package/dist/esm/yaku/sanankou.js
function createSanankouListing() {
  return {
    name: "sanankou",
    han: 2
  };
}
function createSuuankouListing(doubleYakuman = false) {
  return {
    name: "suuankou",
    han: 0,
    limit: doubleYakuman ? "double-yakuman" : "yakuman"
  };
}
function detectSanankou(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    return handInterpretation;
  }
  const concealed = handInterpretation.groups.filter((group) => {
    if (group.type === "run")
      return false;
    if (group.open)
      return false;
    if (!handInterpretation.winningTile.isTsumo && group.isFinalWait) {
      return false;
    }
    return true;
  }).length;
  if (concealed >= 4) {
    handInterpretation.yaku.push(createSuuankouListing(handInterpretation.waitType === "tanki" && handInterpretation.gameState.ruleset?.doubleYakuman.suuankouTanki));
  } else if (concealed === 3) {
    handInterpretation.yaku.push(createSanankouListing());
  }
  return handInterpretation;
}

// package/dist/esm/yaku/sanshoku.js
var SUITS2 = ["m", "p", "s"];
function createSanshokuListing(closed) {
  return { name: "sanshoku", han: closed ? 2 : 1 };
}
function createSanshokuDoukouListing() {
  return { name: "sanshoku-doukou", han: 2 };
}
function isMenzen3(handInterpretation) {
  return handInterpretation.isStandardHand !== true || handInterpretation.groups.every((group) => !group.open);
}
function detectSanshoku(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    return handInterpretation;
  }
  const runs = handInterpretation.groups.filter((group) => group.type === "run");
  const triplets = handInterpretation.groups.filter((group) => group.type !== "run");
  const closed = isMenzen3(handInterpretation);
  const runStarts = new Set(runs.map(runStart));
  for (let rank = 1; rank <= 7; rank++) {
    if (SUITS2.every((suit) => runStarts.has(`${rank}${suit}`))) {
      handInterpretation.yaku.push(createSanshokuListing(closed));
      return handInterpretation;
    }
  }
  const tripletTiles = new Set(triplets.map((group) => group.tiles[0]));
  for (let rank = 1; rank <= 9; rank++) {
    if (SUITS2.every((suit) => tripletTiles.has(`${rank}${suit}`))) {
      handInterpretation.yaku.push(createSanshokuDoukouListing());
      return handInterpretation;
    }
  }
  return handInterpretation;
}

// package/dist/esm/yaku/toitoi.js
function createToitoiListing() {
  return {
    name: "toitoi",
    han: 2
  };
}
function detectToitoi(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    return handInterpretation;
  }
  if (handInterpretation.groups.some((group) => group.type === "run")) {
    return handInterpretation;
  }
  handInterpretation.yaku.push(createToitoiListing());
  return handInterpretation;
}

// package/dist/esm/utils/is-simple-tile.js
function isSimpleTile(tile) {
  const rank = parseInt(tile);
  const suit = tile[tile.length - 1];
  if (suit === "z") {
    return false;
  }
  return rank !== 1 && rank !== 9;
}

// package/dist/esm/yaku/tanyao.js
function createTanyaoListing() {
  return {
    name: "tanyao",
    han: 1
  };
}
function detectTanyao(handInterpretation) {
  const allTiles3 = handInterpretation.isStandardHand ? [
    ...handInterpretation.pair.tiles,
    ...handInterpretation.groups.flatMap((group) => group.tiles)
  ] : handInterpretation.tiles;
  if (!allTiles3.every((t) => isSimpleTile(t))) {
    return handInterpretation;
  }
  if (handInterpretation.isStandardHand && handInterpretation.groups.some((group) => group.open) && handInterpretation.gameState.ruleset?.openTanyao === false) {
    return handInterpretation;
  }
  handInterpretation.yaku.push(createTanyaoListing());
  return handInterpretation;
}

// package/dist/esm/yaku/tsumo.js
function createTsumoListing() {
  return {
    name: "menzen-tsumo",
    han: 1
  };
}
function detectMenzenTsumo(handInterpretation) {
  if (!handInterpretation.winningTile.isTsumo) {
    return handInterpretation;
  }
  if (handInterpretation.isStandardHand && handInterpretation.groups.some((group) => group.open)) {
    return handInterpretation;
  }
  handInterpretation.yaku.push(createTsumoListing());
  return handInterpretation;
}

// package/dist/esm/yaku/yakuhai.js
function createYakuhaiListing(name) {
  return {
    name,
    han: 1
  };
}
function detectYakuhai(handInterpretation) {
  if (!handInterpretation.isStandardHand) {
    return handInterpretation;
  }
  const groups = handInterpretation.groups || [];
  const roundWindTile = translateWindToTile(handInterpretation.gameState.roundWind);
  const seatWindTile = translateWindToTile(handInterpretation.gameState.seatWind);
  groups.forEach((group) => {
    if (group.type === "run") {
      return;
    }
    if (group.tiles[0] === roundWindTile) {
      handInterpretation.yaku.push(createYakuhaiListing("round-wind"));
    }
    if (group.tiles[0] === seatWindTile) {
      handInterpretation.yaku.push(createYakuhaiListing("seat-wind"));
    }
    if (group.tiles[0] === "5z") {
      handInterpretation.yaku.push(createYakuhaiListing("haku"));
    }
    if (group.tiles[0] === "6z") {
      handInterpretation.yaku.push(createYakuhaiListing("hatsu"));
    }
    if (group.tiles[0] === "7z") {
      handInterpretation.yaku.push(createYakuhaiListing("chun"));
    }
  });
  return handInterpretation;
}

// package/dist/esm/yaku/index.js
function detectStandardYaku(handInterpretation) {
  if (handInterpretation.isStandardHand !== true) {
    if (handInterpretation.yaku.some((y) => y.name === "chiitoitsu")) {
      detectMenzenTsumo(handInterpretation);
      detectTanyao(handInterpretation);
      detectHonitsu(handInterpretation);
      detectChanta(handInterpretation);
      detectPurity(handInterpretation);
      if (handInterpretation.yaku.some((yaku) => yaku.limit)) {
        handInterpretation.yaku = handInterpretation.yaku.filter((yaku) => yaku.limit);
      }
    }
    return handInterpretation;
  }
  detectYakuhai(handInterpretation);
  detectMenzenTsumo(handInterpretation);
  detectPinfu(handInterpretation);
  detectTanyao(handInterpretation);
  detectIipeiko(handInterpretation);
  detectSanankou(handInterpretation);
  detectToitoi(handInterpretation);
  detectHonitsu(handInterpretation);
  detectChanta(handInterpretation);
  detectSanshoku(handInterpretation);
  detectIttsuu(handInterpretation);
  detectKantsu(handInterpretation);
  detectDragons(handInterpretation);
  detectWinds(handInterpretation);
  detectPurity(handInterpretation);
  detectChuuren(handInterpretation);
  if (handInterpretation.yaku.some((yaku) => yaku.limit)) {
    handInterpretation.yaku = handInterpretation.yaku.filter((yaku) => yaku.limit);
  }
  return handInterpretation;
}

// package/dist/esm/yaku/declared.js
function isMenzen4(handInterpretation) {
  return !handInterpretation.isStandardHand || handInterpretation.groups.every((group) => !group.open);
}
function addYaku(handInterpretation, name, han) {
  handInterpretation.yaku.push({ name, han });
}
function detectDeclaredYaku(handInterpretation) {
  const { gameState, winningTile } = handInterpretation;
  const menzen = isMenzen4(handInterpretation);
  const riichi = gameState.isRiichi || gameState.isDoubleRiichi;
  if (menzen && gameState.isDoubleRiichi) {
    addYaku(handInterpretation, "double-riichi", 2);
  } else if (menzen && gameState.isRiichi) {
    addYaku(handInterpretation, "riichi", 1);
  }
  if (menzen && riichi && gameState.isIppatsu) {
    addYaku(handInterpretation, "ippatsu", 1);
  }
  if (winningTile.isTsumo && gameState.isHaitei) {
    addYaku(handInterpretation, "haitei", 1);
  }
  if (!winningTile.isTsumo && gameState.isHoutei) {
    addYaku(handInterpretation, "houtei", 1);
  }
  if (winningTile.isTsumo && gameState.isRinshan) {
    addYaku(handInterpretation, "rinshan-kaihou", 1);
  }
  if (!winningTile.isTsumo && gameState.isChankan) {
    addYaku(handInterpretation, "chankan", 1);
  }
  if (menzen && winningTile.isTsumo) {
    const dealer = gameState.seatWind === "east";
    if (dealer && gameState.isTenhou) {
      handInterpretation.yaku.push({
        name: "tenhou",
        han: 0,
        limit: "yakuman"
      });
    } else if (!dealer && gameState.isChiihou) {
      handInterpretation.yaku.push({
        name: "chiihou",
        han: 0,
        limit: "yakuman"
      });
    }
  }
  return handInterpretation;
}

// package/dist/esm/utils/round-fu.js
function roundFu(miniPoints) {
  return Math.ceil(miniPoints / 10) * 10;
}

// package/dist/esm/parsing/parse-fu.js
function finalizeFu(handInterpretation) {
  handInterpretation.rawFu = handInterpretation.fuList.reduce((total, listing) => total + listing.value, 0);
  if (handInterpretation.yaku.some((yaku) => yaku.name === "chiitoitsu")) {
    handInterpretation.fu = 25;
  } else if (handInterpretation.rawFu === 20 && handInterpretation.isStandardHand && handInterpretation.groups.some((group) => group.open)) {
    handInterpretation.fu = handInterpretation.gameState.ruleset?.openPinfuMinimumFu ?? 30;
  } else {
    handInterpretation.fu = roundFu(handInterpretation.rawFu);
  }
  return handInterpretation;
}
function findKokushiPairTile(tiles) {
  const seen = /* @__PURE__ */ new Set();
  for (const tile of tiles) {
    if (seen.has(tile)) {
      return tile;
    } else {
      seen.add(tile);
    }
  }
  return null;
}
function parseFu(handInterpretation) {
  const validatedYakuNames = handInterpretation.yaku.map((y) => y.name);
  if (validatedYakuNames.indexOf("chiitoitsu") !== -1) {
    handInterpretation.fuList.push({
      reason: "chiitoitsu",
      value: 25
    });
    return finalizeFu(handInterpretation);
  }
  handInterpretation.fuList.push({
    reason: "base",
    value: 20
  });
  const roundWindTile = translateWindToTile(handInterpretation.gameState.roundWind);
  const seatWindTile = translateWindToTile(handInterpretation.gameState.seatWind);
  if (!handInterpretation.isStandardHand) {
    if (validatedYakuNames.indexOf("kokushi-musou") !== -1) {
      const pairTile = findKokushiPairTile(handInterpretation.tiles);
      if (!pairTile) {
        console.error(`invalid kokushi hand found. tiles: ${handInterpretation.tiles}`);
        return finalizeFu(handInterpretation);
      }
      if (roundWindTile === seatWindTile && roundWindTile === pairTile) {
        handInterpretation.fuList.push({
          reason: "double wind pair",
          value: handInterpretation.gameState.ruleset?.doubleWindPairFu ?? 4
        });
      } else if (pairTile === roundWindTile || pairTile === seatWindTile || isDragonTile(pairTile)) {
        handInterpretation.fuList.push({
          reason: "yakuhai pair",
          value: 2
        });
      }
    }
  } else {
    if (roundWindTile === seatWindTile && roundWindTile === handInterpretation.pair.tiles[0]) {
      handInterpretation.fuList.push({
        reason: "double wind pair",
        value: handInterpretation.gameState.ruleset?.doubleWindPairFu ?? 4
      });
    } else if (handInterpretation.pair.tiles[0] === roundWindTile || handInterpretation.pair.tiles[0] === seatWindTile || isDragonTile(handInterpretation.pair.tiles[0])) {
      handInterpretation.fuList.push({
        reason: "yakuhai pair",
        value: 2
      });
    }
  }
  if (handInterpretation.waitType === "tanki" || handInterpretation.waitType === "kokushi-wide" || handInterpretation.waitType === "kokushi-single") {
    handInterpretation.fuList.push({ reason: "tanki wait", value: 2 });
  }
  if (handInterpretation.waitType === "kanchan") {
    handInterpretation.fuList.push({ reason: "kanchan wait", value: 2 });
  }
  if (handInterpretation.waitType === "penchan") {
    handInterpretation.fuList.push({ reason: "penchan wait", value: 2 });
  }
  if (handInterpretation.isStandardHand !== true) {
    return finalizeFu(handInterpretation);
  }
  const groups = handInterpretation.groups || [];
  groups.forEach((group) => {
    if (group.type === "run") {
      return;
    }
    if (group.type === "triplet") {
      const isOpenForFu = group.open || !handInterpretation.winningTile.isTsumo && group.isFinalWait;
      if (isSimpleTile(group.tiles[0])) {
        if (isOpenForFu) {
          handInterpretation.fuList.push({
            reason: "open triplet of simples",
            value: 2
          });
          return;
        }
        handInterpretation.fuList.push({
          reason: "closed triplet of simples",
          value: 4
        });
      }
      if (isTerminalTile(group.tiles[0]) || isHonorTile(group.tiles[0])) {
        if (isOpenForFu) {
          handInterpretation.fuList.push({
            reason: "open triplet of terminals/honors",
            value: 4
          });
          return;
        }
        handInterpretation.fuList.push({
          reason: "closed triplet of terminals/honors",
          value: 8
        });
      }
      return;
    }
    if (isSimpleTile(group.tiles[0])) {
      if (group.open) {
        handInterpretation.fuList.push({
          reason: "open kan of simples",
          value: 8
        });
        return;
      }
      handInterpretation.fuList.push({
        reason: "closed kan of simples",
        value: 16
      });
    }
    if (isTerminalTile(group.tiles[0]) || isHonorTile(group.tiles[0])) {
      if (group.open) {
        handInterpretation.fuList.push({
          reason: "open kan of terminals/honors",
          value: 16
        });
        return;
      }
      handInterpretation.fuList.push({
        reason: "closed kan of terminals/honors",
        value: 32
      });
    }
  });
  if (!handInterpretation.winningTile.isTsumo && handInterpretation.groups.filter((g) => g.open).length === 0) {
    handInterpretation.fuList.push({ reason: "closed ron", value: 10 });
  }
  if (handInterpretation.winningTile.isTsumo && handInterpretation.yaku.map((y) => y.name).indexOf("pinfu") === -1) {
    handInterpretation.fuList.push({ reason: "tsumo", value: 2 });
  }
  return finalizeFu(handInterpretation);
}

// package/dist/esm/utils/flatten-tiles.js
function flattenTiles(handInterpretation) {
  if (!handInterpretation.isStandardHand) {
    return handInterpretation.tiles;
  }
  const pairTiles = handInterpretation.pair.tiles;
  const groupTiles = handInterpretation.groups.reduce((acc, group) => {
    acc.push(...group.tiles);
    return acc;
  }, []);
  return [...pairTiles, ...groupTiles];
}

// package/dist/esm/utils/determine-dora-tile.js
function determineDoraTile(tile) {
  const rank = parseInt(tile);
  const suit = tile[tile.length - 1];
  let nextRank2 = rank + 1;
  if (nextRank2 > 9) {
    nextRank2 = 1;
  }
  if (suit === "z" && nextRank2 === 5) {
    nextRank2 = 1;
  }
  if (suit === "z" && nextRank2 > 7) {
    nextRank2 = 5;
  }
  return `${nextRank2}${suit}`;
}

// package/dist/esm/utils/count-dora.js
function countDora(doraIndicator, tiles) {
  const doraTile = determineDoraTile(doraIndicator);
  const doraMatches = tiles.filter((t) => t === doraTile);
  return doraMatches.length;
}

// package/dist/esm/utils/count-red-fives.js
function countRedFives(tiles) {
  return tiles.filter((t) => t === "0m" || t === "0p" || t === "0s").length;
}

// package/dist/esm/utils/calculate-basic-points.js
function calculateBasicPoints(han, fu, yakumanCount = 0, ruleset = TENHOU_RULESET) {
  if (yakumanCount > 0) {
    return 8e3 * yakumanCount;
  }
  if (han >= 13 && ruleset.kazoeYakuman) {
    return 8e3;
  }
  if (han >= 11) {
    return 6e3;
  }
  if (ruleset.kiriageMangan && (han === 4 && fu === 30 || han === 3 && fu === 60)) {
    return 2e3;
  }
  if (han >= 8) {
    return 4e3;
  }
  if (han >= 6) {
    return 3e3;
  }
  if (han >= 5) {
    return 2e3;
  }
  const calculatedBasicPoints = fu * 2 ** (2 + han);
  return Math.min(calculatedBasicPoints, 2e3);
}

// package/dist/esm/utils/calculate-seat-payments.js
function calcaulateSeatPayments(handInterpretation) {
  const ALL_DIRECTIONS = ["east", "south", "west", "north"];
  const otherSeats = ALL_DIRECTIONS.filter((dir) => dir !== handInterpretation.gameState.seatWind);
  let seatPayments = [];
  if (handInterpretation.gameState.seatWind === "east") {
    if (handInterpretation.winningTile.isTsumo) {
      seatPayments = otherSeats.map((seat) => {
        return {
          seat,
          value: Math.ceil(2 * handInterpretation.basicPoints / 100) * 100
        };
      });
    } else {
      seatPayments.push({
        seat: handInterpretation.winningTile.from,
        value: Math.ceil(6 * handInterpretation.basicPoints / 100) * 100
      });
    }
  }
  if (handInterpretation.gameState.seatWind !== "east") {
    if (handInterpretation.winningTile.isTsumo) {
      return otherSeats.map((seat) => {
        if (seat === "east") {
          return {
            seat,
            value: Math.ceil(2 * handInterpretation.basicPoints / 100) * 100
          };
        }
        return {
          seat,
          value: Math.ceil(1 * handInterpretation.basicPoints / 100) * 100
        };
      });
    } else {
      seatPayments.push({
        seat: handInterpretation.winningTile.from,
        value: Math.ceil(4 * handInterpretation.basicPoints / 100) * 100
      });
    }
  }
  return seatPayments;
}

// package/dist/esm/parsing/parse-final-wait.js
var FINAL_WAIT_CANDIDATES = [
  "1m",
  "2m",
  "3m",
  "4m",
  "5m",
  "6m",
  "7m",
  "8m",
  "9m",
  "1p",
  "2p",
  "3p",
  "4p",
  "5p",
  "6p",
  "7p",
  "8p",
  "9p",
  "1s",
  "2s",
  "3s",
  "4s",
  "5s",
  "6s",
  "7s",
  "8s",
  "9s",
  "1z",
  "2z",
  "3z",
  "4z",
  "5z",
  "6z",
  "7z"
];
function hasFourCopies(tileCounts, tile) {
  return (tileCounts.get(tile) ?? 0) >= 4;
}
function completesHand(closedTiles, openMelds, candidate, ruleset) {
  const completedClosedTiles = [...closedTiles, candidate].sort(tileCompare);
  if (parseStandardHandCombinations(completedClosedTiles).length > 0) {
    return true;
  }
  if (openMelds.length > 0) {
    return false;
  }
  if (detectChiitoi(completedClosedTiles, ruleset.kansaiChiitoitsu)) {
    return true;
  }
  return Boolean(detectKokushiWait(completedClosedTiles, {
    tile: candidate,
    isTsumo: true
  }));
}
function parseFinalWait(closedTiles, openMelds, ruleset) {
  const normalizedClosedTiles = replaceAkadora(closedTiles);
  const normalizedMeldTiles = replaceAkadora(openMelds.flatMap((meld) => meld.tiles));
  const tileCounts = /* @__PURE__ */ new Map();
  for (const tile of [...normalizedClosedTiles, ...normalizedMeldTiles]) {
    tileCounts.set(tile, (tileCounts.get(tile) ?? 0) + 1);
  }
  return FINAL_WAIT_CANDIDATES.filter((candidate) => !hasFourCopies(tileCounts, candidate) && completesHand(normalizedClosedTiles, openMelds, candidate, ruleset));
}

// package/dist/esm/calculate.js
function calculate(handInput) {
  const handAnalysis = createHandAnalysis();
  const gameState = createGameState(handInput.gameState);
  const ruleset = gameState.ruleset ?? createRuleset();
  if (!handInput.winningTile?.tile) {
    handAnalysis.valid = false;
    handAnalysis.errors.push("options.winningTile is not defined");
  }
  if (!handInput.winningTile.from && !handInput.winningTile.isTsumo) {
    handAnalysis.valid = false;
    handAnalysis.errors.push("options.winningTile is neither a `ron` nor a `tsumo`");
  }
  if (!handInput.openMelds) {
    handInput.openMelds = [];
  }
  const numberOfTiles = handInput.closedTiles.length + handInput.openMelds.length * 3 + 1;
  if (numberOfTiles !== 14) {
    handAnalysis.valid = false;
    handAnalysis.errors.push(`Number of tiles is incorrect. Found ${numberOfTiles}.`);
  }
  const invalidClosedTiles = handInput.closedTiles.filter((tile) => !isValidTile(tile));
  if (invalidClosedTiles.length) {
    handAnalysis.valid = false;
    handAnalysis.errors.push(`Some closed tiles are invalid. Invalid tiles: ${invalidClosedTiles}.`);
  }
  if (!isValidTile(handInput.winningTile.tile)) {
    handAnalysis.valid = false;
    handAnalysis.errors.push(`Winning tile is invalid. Tile: ${handInput.winningTile.tile}.`);
  }
  const invalidMelds = handInput.openMelds.filter((meld) => !isValidMeld(meld));
  if (invalidMelds.length) {
    handAnalysis.valid = false;
    invalidMelds.forEach((invalidMeld) => {
      handAnalysis.errors.push(`Invalid meld of type ${invalidMeld.type}. Tiles: ${invalidMeld.tiles}`);
    });
  }
  const expectedRunSource = KAMICHA[gameState.seatWind];
  const misSourcedRuns = handInput.openMelds.filter((meld) => meld.type === "run" && meld.from !== expectedRunSource);
  if (misSourcedRuns.length) {
    handAnalysis.valid = false;
    misSourcedRuns.forEach((meld) => {
      handAnalysis.errors.push(`A run was called from ${meld.from}, but a ${gameState.seatWind} seat can only chi from ${expectedRunSource}. Tiles: ${meld.tiles}`);
    });
  }
  const normalizedInputTiles = replaceAkadora([
    ...flattenInputTiles(handInput),
    ...handInput.gameState?.doraIndicators ?? [],
    ...handInput.gameState?.uradoraIndicators ?? []
  ]);
  const redBySuit = { manzu: 0, pinzu: 0, souzu: 0 };
  for (const tile of [
    ...flattenInputTiles(handInput),
    ...handInput.gameState?.doraIndicators ?? [],
    ...handInput.gameState?.uradoraIndicators ?? []
  ]) {
    if (tile === "0m")
      redBySuit.manzu++;
    if (tile === "0p")
      redBySuit.pinzu++;
    if (tile === "0s")
      redBySuit.souzu++;
  }
  for (const suit of ["manzu", "pinzu", "souzu"]) {
    if (redBySuit[suit] > ruleset.akaDora[suit]) {
      handAnalysis.valid = false;
      handAnalysis.errors.push(`Too many red fives in ${suit}: ${redBySuit[suit]} exceeds the ruleset limit of ${ruleset.akaDora[suit]}.`);
    }
  }
  const tileCounts = /* @__PURE__ */ new Map();
  normalizedInputTiles.forEach((tile) => {
    tileCounts.set(tile, (tileCounts.get(tile) ?? 0) + 1);
  });
  const overrepresentedTiles = [...tileCounts].filter(([, count]) => count > 4);
  if (overrepresentedTiles.length) {
    handAnalysis.valid = false;
    handAnalysis.errors.push(`A tile appears more than four times: ${overrepresentedTiles.map(([tile, count]) => `${tile} (${count})`).join(", ")}.`);
  }
  if (handAnalysis.errors.length) {
    return handAnalysis;
  }
  handAnalysis.finalWait.tiles = parseFinalWait(handInput.closedTiles, handInput.openMelds, ruleset);
  handAnalysis.finalWait.sideCount = handAnalysis.finalWait.tiles.length;
  const normalizedClosedTiles = replaceAkadora([
    ...handInput.closedTiles,
    handInput.winningTile.tile
  ]);
  const sortedClosedTiles = normalizedClosedTiles.sort(tileCompare);
  if (sortedClosedTiles.length === 14) {
    const kokushiWaitType = detectKokushiWait(sortedClosedTiles, handInput.winningTile);
    if (kokushiWaitType) {
      handAnalysis.handInterpretations.push(createHandInterpretation({
        isStandardHand: false,
        tiles: sortedClosedTiles,
        winningTile: handInput.winningTile,
        waitType: kokushiWaitType,
        gameState,
        yaku: [
          createKokushiListing(kokushiWaitType === "kokushi-wide" && gameState.ruleset?.doubleYakuman.kokushi13Wait)
        ]
      }));
    }
    const isChiitoi = detectChiitoi(sortedClosedTiles, gameState.ruleset?.kansaiChiitoitsu);
    if (isChiitoi) {
      handAnalysis.handInterpretations.push(createHandInterpretation({
        isStandardHand: false,
        tiles: sortedClosedTiles,
        winningTile: handInput.winningTile,
        waitType: "tanki",
        // chiitoi waits are always tanki
        gameState,
        yaku: [createChiitoiListing()]
      }));
    }
  }
  const waitlessParsedClosedHands = parseStandardHandCombinations(sortedClosedTiles);
  const standardHandInterpretations = interpretWaitsFromGroups(waitlessParsedClosedHands, handInput);
  handAnalysis.handInterpretations.push(...standardHandInterpretations);
  if (!handAnalysis.handInterpretations.length) {
    handAnalysis.valid = false;
    handAnalysis.errors.push("Tiles do not form a winning hand: no valid grouping completes with the winning tile.");
    return handAnalysis;
  }
  const closedRedFives = [
    ...handInput.closedTiles,
    handInput.winningTile.tile
  ].filter((t) => t === "0m" || t === "0p" || t === "0s");
  handAnalysis.handInterpretations.forEach((hi) => {
    rehydrateRedFives(closedRedFives, hi);
  });
  handAnalysis.handInterpretations.forEach((hi) => {
    appendMeldsToGroups(handInput.openMelds, hi);
  });
  handAnalysis.handInterpretations.forEach((hi) => {
    detectDeclaredYaku(hi);
    detectStandardYaku(hi);
    parseFu(hi);
    const flattenedTiles = flattenTiles(hi);
    hi.gameState.doraIndicators.forEach((doraIndicator) => {
      hi.dora += countDora(doraIndicator, flattenedTiles);
    });
    if (hi.gameState.isRiichi || hi.gameState.isDoubleRiichi) {
      hi.gameState.uradoraIndicators.forEach((uradoraIndicator) => {
        hi.uradora += countDora(uradoraIndicator, flattenedTiles);
      });
    }
    const flattendHandInputTiles = flattenInputTiles(handInput);
    hi.akadora += countRedFives(flattendHandInputTiles);
    hi.han = hi.dora + hi.uradora + hi.akadora + hi.yaku.reduce((acc, yaku) => acc += yaku.han, hi.han);
    const yakumanCount = hi.yaku.reduce((count, yaku) => count + yakumanMultiplier(yaku.limit), 0);
    hi.limit = yakumanCount > 0 ? LIMIT_BY_COUNT[Math.min(yakumanCount, LIMIT_BY_COUNT.length) - 1] : void 0;
    hi.basicPoints = calculateBasicPoints(hi.han, hi.fu, yakumanCount, hi.gameState.ruleset ?? ruleset);
    hi.seatPayments = calcaulateSeatPayments(hi);
    hi.totalWinnings = hi.seatPayments.reduce((acc, seat) => acc += seat.value, 0);
  });
  handAnalysis.handInterpretations = handAnalysis.handInterpretations.filter((hi) => hi.yaku.length > 0);
  handAnalysis.valid = handAnalysis.handInterpretations.length > 0;
  if (!handAnalysis.valid) {
    handAnalysis.errors.push("Hand has no yaku, so it is not a winning hand. Dora alone cannot win.");
  }
  handAnalysis.handInterpretations.sort((hiA, hiB) => hiB.basicPoints - hiA.basicPoints);
  if (!handAnalysis.valid) {
    return handAnalysis;
  }
  return handAnalysis;
}

// package/dist/esm/utils/tile-notation.js
var SUITS3 = ["m", "p", "s", "z"];
function sortTiles(tiles) {
  return [...tiles].sort(tileCompare);
}
function formatTiles(tiles) {
  const sorted = sortTiles(tiles);
  return SUITS3.map((suit) => {
    const ranks = sorted.filter((tile) => tile[1] === suit).map((tile) => tile[0]).join("");
    return ranks ? `${ranks}${suit}` : "";
  }).join("");
}
function parseTiles(notation) {
  const tiles = [];
  let ranks = "";
  for (const character of notation) {
    if (character >= "0" && character <= "9") {
      ranks += character;
      continue;
    }
    if (!SUITS3.includes(character) || !ranks) {
      throw new Error(`Invalid tile notation: ${notation}`);
    }
    for (const rank of ranks) {
      const valid = character === "z" ? rank >= "1" && rank <= "7" : rank === "0" || rank >= "1" && rank <= "9";
      if (!valid)
        throw new Error(`Invalid tile notation: ${notation}`);
      tiles.push(`${rank}${character}`);
    }
    ranks = "";
  }
  if (ranks)
    throw new Error(`Invalid tile notation: ${notation}`);
  return tiles;
}
export {
  KAMICHA,
  TENHOU_RULESET,
  calculate,
  createGameState,
  createMeld,
  createRuleset,
  formatTiles,
  parseTiles,
  sortTiles
};
