using System.Globalization;

namespace MahjongTimer.Game;

/// <summary>A called set as riichi-score expects it: "run", "triplet" or "daiminkan", plus its tiles.</summary>
public sealed record ScoreRequestSet(string Type, IReadOnlyList<string> Tiles);

/// <summary>What C# sends to wwwroot/js/scoring.js. Tiles are MPSZ codes ("5m", "0p", "7z").</summary>
public sealed record ScoreRequest(
    IReadOnlyList<string> ClosedTiles,
    IReadOnlyList<ScoreRequestSet> CalledSets,
    IReadOnlyList<IReadOnlyList<string>> ConcealedKans,
    string WinningTile,
    bool IsTsumo,
    string SeatWind,
    string RoundWind,
    IReadOnlyList<string> DoraIndicators,
    IReadOnlyList<string> UraDoraIndicators,
    bool IsRiichi,
    bool IsDoubleRiichi,
    bool IsIppatsu,
    bool IsHaitei,
    bool IsHoutei,
    bool IsRinshan,
    bool IsChankan,
    bool IsTenhou,
    bool IsChiihou)
{
    public static ScoreRequest From(WinningHand hand, WinConditions conditions)
    {
        static IReadOnlyList<string> Codes(IEnumerable<Tile> tiles) => tiles.Select(tile => tile.ToString()).ToList();
        static string WindName(Wind wind) => wind.ToString().ToLowerInvariant();
        static string SetType(CalledSetKind kind) => kind switch
        {
            CalledSetKind.Chi => "run",
            CalledSetKind.Pon => "triplet",
            _ => "daiminkan",
        };

        return new ScoreRequest(
            Codes(hand.ClosedTiles),
            hand.CalledSets.Select(set => new ScoreRequestSet(SetType(set.Kind), Codes(set.Tiles))).ToList(),
            hand.ConcealedKans.Select(kan => Codes(kan)).ToList(),
            hand.WinningTile.ToString(),
            conditions.IsTsumo,
            WindName(conditions.SeatWind),
            WindName(conditions.RoundWind),
            Codes(hand.DoraIndicators),
            // Ura-dora only count with riichi; riichi-score enforces that too.
            Codes(hand.UraDoraIndicators),
            conditions.IsRiichi,
            conditions.IsDoubleRiichi,
            conditions.IsIppatsu,
            conditions.IsHaitei,
            conditions.IsHoutei,
            conditions.IsRinshan,
            conditions.IsChankan,
            conditions.IsTenhou,
            conditions.IsChiihou);
    }
}

public sealed record ScoreResponseYaku(string Name, int Han);

public sealed record ScoreResponseFu(string Reason, int Value);

/// <summary>What wwwroot/js/scoring.js returns: the best reading of the hand, or why it can't win.</summary>
public sealed record ScoreResponse(
    bool IsValid,
    IReadOnlyList<string> Errors,
    int Han,
    int Fu,
    int RawFu,
    int BasicPoints,
    IReadOnlyList<ScoreResponseYaku>? Yaku,
    IReadOnlyList<ScoreResponseFu>? FuLines,
    int Dora,
    int RedFives,
    int UraDora);

/// <summary>Who pays what. Honba is added here, because riichi-score leaves it out.</summary>
public sealed record Payment(bool IsTsumo, bool IsDealer, int Ron, int EachNonDealer, int Dealer)
{
    public const int HonbaPerRon = 300;
    public const int HonbaPerTsumoPayer = 100;

    public static Payment For(int basicPoints, bool isDealer, bool isTsumo, int honba)
    {
        static int RoundUp(int points) => (points + 99) / 100 * 100;

        if (!isTsumo)
            return new Payment(false, isDealer, RoundUp(basicPoints * (isDealer ? 6 : 4)) + HonbaPerRon * honba, 0, 0);

        var extra = HonbaPerTsumoPayer * honba;
        return isDealer
            ? new Payment(true, true, 0, RoundUp(basicPoints * 2) + extra, 0)
            : new Payment(true, false, 0, RoundUp(basicPoints) + extra, RoundUp(basicPoints * 2) + extra);
    }

    /// <summary>"8,000" for ron, "2,000 / 4,000" for a non-dealer tsumo, "4,000 all" for a dealer tsumo.</summary>
    public string Amount =>
        !IsTsumo ? Points(Ron)
        : IsDealer ? $"{Points(EachNonDealer)} all"
        : $"{Points(EachNonDealer)} / {Points(Dealer)}";

    public string Label => !IsTsumo ? "Ron" : IsDealer ? "Tsumo" : "Tsumo · non-dealers / dealer";

    private static string Points(int points) => points.ToString("N0", CultureInfo.InvariantCulture);
}

public sealed record ScoreLine(string Name, int Value);

/// <summary>A scored hand, ready to show: headline, yaku and fu lines, and payment.</summary>
public sealed record HandScore(
    int Han,
    int Fu,
    int RawFu,
    string? LimitName,
    bool IsYakuman,
    IReadOnlyList<ScoreLine> HanLines,
    IReadOnlyList<ScoreLine> FuLines,
    Payment Payment)
{
    public const int YakumanBasicPoints = 8000;

    /// <summary>"2 han 30 fu", "5 han 30 fu · Mangan", or for yakuman just "Yakuman" / "Double yakuman".</summary>
    public string Headline =>
        IsYakuman ? LimitName!
        : LimitName is { } limit ? $"{Han} han {Fu} fu · {limit}"
        : $"{Han} han {Fu} fu";

    public static HandScore From(ScoreResponse response, WinConditions conditions)
    {
        var isYakuman = response.BasicPoints >= YakumanBasicPoints;

        var hanLines = (response.Yaku ?? []).Select(yaku => new ScoreLine(YakuName(yaku.Name), yaku.Han)).ToList();
        if (!isYakuman)
        {
            if (response.Dora > 0) hanLines.Add(new ScoreLine("Dora", response.Dora));
            if (response.RedFives > 0) hanLines.Add(new ScoreLine("Red five", response.RedFives));
            if (response.UraDora > 0) hanLines.Add(new ScoreLine("Ura-dora", response.UraDora));
        }

        // Fu doesn't change a yakuman's value, and riichi-score's fu is wrong for some yakuman.
        var fuLines = isYakuman
            ? []
            : (response.FuLines ?? []).Select(fu => new ScoreLine(Capitalise(fu.Reason), fu.Value)).ToList();

        return new HandScore(
            response.Han,
            response.Fu,
            response.RawFu,
            LimitFor(response.BasicPoints),
            isYakuman,
            hanLines,
            fuLines,
            Payment.For(response.BasicPoints, conditions.IsDealer, conditions.IsTsumo, conditions.Honba));
    }

    /// <summary>The named limit for a hand's basic points, or null below mangan.</summary>
    public static string? LimitFor(int basicPoints) => basicPoints switch
    {
        >= YakumanBasicPoints => (basicPoints / YakumanBasicPoints) switch
        {
            1 => "Yakuman",
            2 => "Double yakuman",
            3 => "Triple yakuman",
            var n => $"{n}× yakuman",
        },
        >= 6000 => "Sanbaiman",
        >= 4000 => "Baiman",
        >= 3000 => "Haneman",
        >= 2000 => "Mangan",
        _ => null,
    };

    /// <summary>riichi-score's yaku id as a readable name: "rinshan-kaihou" → "Rinshan kaihou".</summary>
    public static string YakuName(string id) => id switch
    {
        "haku" => "White dragon",
        "hatsu" => "Green dragon",
        "chun" => "Red dragon",
        "round-wind" => "Round wind",
        "seat-wind" => "Seat wind",
        "chiitoitsu" => "Seven pairs",
        _ => Capitalise(id.Replace('-', ' ')),
    };

    private static string Capitalise(string text) =>
        text.Length == 0 ? text : char.ToUpperInvariant(text[0]) + text[1..];
}
