// Bridge between the C# calculator and riichi-score (vendored in ../lib/riichi-score).
// C# sends a ScoreRequest; this returns a ScoreResponse with the best reading of the hand.
// Payments and honba are worked out in C#, because riichi-score ignores honba.
import { calculate, createGameState, createMeld, KAMICHA } from "../lib/riichi-score/riichi-score.js";

// Mahjong Soul rules.
const MAHJONG_SOUL = {
    openTanyao: true,
    doubleWindPairFu: 4,
    openPinfuMinimumFu: 30,
    kiriageMangan: false,
    kazoeYakuman: true,
    kansaiChiitoitsu: false,
    doubleYakuman: { daisuushii: true, kokushi13Wait: true, suuankouTanki: true, junseiChuuren: true },
    akaDora: { manzu: 1, pinzu: 1, souzu: 1 },
};

export function score(request) {
    // Seats aren't tracked, so every called tile comes "from the left". Only chi checks the
    // source seat, and chi can only be called from the left anyway.
    const left = KAMICHA[request.seatWind];
    try {
        const result = calculate({
            closedTiles: request.closedTiles,
            openMelds: [
                ...request.calledSets.map(set => createMeld({ type: set.type, tiles: set.tiles, from: left })),
                ...request.concealedKans.map(tiles => createMeld({ type: "ankan", tiles })),
            ],
            winningTile: request.isTsumo
                ? { tile: request.winningTile, isTsumo: true }
                : { tile: request.winningTile, isTsumo: false, from: left },
            gameState: createGameState({
                roundWind: request.roundWind,
                seatWind: request.seatWind,
                doraIndicators: request.doraIndicators,
                uradoraIndicators: request.uraDoraIndicators,
                isRiichi: request.isRiichi,
                isDoubleRiichi: request.isDoubleRiichi,
                isIppatsu: request.isIppatsu,
                isHaitei: request.isHaitei,
                isHoutei: request.isHoutei,
                isRinshan: request.isRinshan,
                isChankan: request.isChankan,
                isTenhou: request.isTenhou,
                isChiihou: request.isChiihou,
                honbaCount: 0,
                ruleset: MAHJONG_SOUL,
            }),
        });

        const best = result.handInterpretations[0];
        if (!result.valid || !best) return invalid(result.errors);

        return {
            isValid: true,
            errors: [],
            han: best.han,
            fu: best.fu,
            rawFu: best.rawFu,
            basicPoints: best.basicPoints,
            yaku: best.yaku.map(y => ({ name: y.name, han: y.han })),
            fuLines: best.fuList.map(f => ({ reason: f.reason, value: f.value })),
            dora: best.dora,
            redFives: best.akadora,
            uraDora: best.uradora,
        };
    } catch (error) {
        return invalid([String(error?.message ?? error)]);
    }
}

function invalid(errors) {
    return { isValid: false, errors: errors?.length ? errors : ["This hand can't win as entered."] };
}
