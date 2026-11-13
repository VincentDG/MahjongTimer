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

    public string Label => IsTsumo ? "Tsumo" : "Ron";

    private static string Points(int points) => points.ToString("N0", CultureInfo.InvariantCulture);
}

/// <summary>One line of the breakdown: English name, Japanese name (romaji), and its han or fu.</summary>
public sealed record ScoreLine(string Name, string Japanese, int Value);

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

        var hanLines = (response.Yaku ?? []).Select(yaku => Line(YakuNames, yaku.Name, yaku.Han)).ToList();
        if (!isYakuman)
        {
            if (response.Dora > 0) hanLines.Add(new ScoreLine("Dora", "Dora", response.Dora));
            if (response.RedFives > 0) hanLines.Add(new ScoreLine("Red five", "Aka dora", response.RedFives));
            if (response.UraDora > 0) hanLines.Add(new ScoreLine("Ura-dora", "Ura dora", response.UraDora));
        }

        // Fu doesn't change a yakuman's value, and riichi-score's fu is wrong for some yakuman.
        var fuLines = isYakuman
            ? []
            : (response.FuLines ?? []).Select(fu => Line(FuNames, fu.Reason, fu.Value)).ToList();

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

    /// <summary>A breakdown line for a riichi-score id, falling back to the id itself if it's unknown.</summary>
    public static ScoreLine Line(IReadOnlyDictionary<string, (string English, string Japanese)> names, string id, int value) =>
        names.TryGetValue(id, out var name)
            ? new ScoreLine(name.English, name.Japanese, value)
            : new ScoreLine(Capitalise(id.Replace('-', ' ')), "", value);

    /// <summary>riichi-score yaku ids → (English, Japanese) names.</summary>
    public static readonly IReadOnlyDictionary<string, (string English, string Japanese)> YakuNames =
        new Dictionary<string, (string, string)>
        {
            ["riichi"] = ("Ready hand", "Riichi"),
            ["double-riichi"] = ("Double ready hand", "Double riichi"),
            ["ippatsu"] = ("One shot", "Ippatsu"),
            ["menzen-tsumo"] = ("Concealed self-draw", "Menzen tsumo"),
            ["pinfu"] = ("No-points hand", "Pinfu"),
            ["tanyao"] = ("All simples", "Tanyao"),
            ["iipeiko"] = ("Pure double sequence", "Iipeikou"),
            ["ryanpeikou"] = ("Twice pure double sequence", "Ryanpeikou"),
            ["haitei"] = ("Last tile draw", "Haitei raoyue"),
            ["houtei"] = ("Last tile discard", "Houtei raoyui"),
            ["rinshan-kaihou"] = ("After a kan", "Rinshan kaihou"),
            ["chankan"] = ("Robbing a kan", "Chankan"),
            ["haku"] = ("White dragon", "Haku"),
            ["hatsu"] = ("Green dragon", "Hatsu"),
            ["chun"] = ("Red dragon", "Chun"),
            ["round-wind"] = ("Round wind", "Bakaze"),
            ["seat-wind"] = ("Seat wind", "Jikaze"),
            ["chiitoitsu"] = ("Seven pairs", "Chiitoitsu"),
            ["sanankou"] = ("Three concealed triplets", "Sanankou"),
            ["toitoi"] = ("All triplets", "Toitoi"),
            ["sanshoku"] = ("Mixed triple sequence", "Sanshoku doujun"),
            ["sanshoku-doukou"] = ("Triple triplets", "Sanshoku doukou"),
            ["ittsuu"] = ("Pure straight", "Ittsuu"),
            ["chanta"] = ("Half outside hand", "Chanta"),
            ["junchan"] = ("Fully outside hand", "Junchan"),
            ["honroutou"] = ("All terminals and honours", "Honroutou"),
            ["shousangen"] = ("Little three dragons", "Shousangen"),
            ["sankantsu"] = ("Three kans", "Sankantsu"),
            ["honitsu"] = ("Half flush", "Honitsu"),
            ["chinitsu"] = ("Full flush", "Chinitsu"),
            ["kokushi-musou"] = ("Thirteen orphans", "Kokushi musou"),
            ["suuankou"] = ("Four concealed triplets", "Suuankou"),
            ["daisangen"] = ("Big three dragons", "Daisangen"),
            ["shousuushii"] = ("Little four winds", "Shousuushii"),
            ["daisuushii"] = ("Big four winds", "Daisuushii"),
            ["tsuuiisou"] = ("All honours", "Tsuuiisou"),
            ["chinroutou"] = ("All terminals", "Chinroutou"),
            ["ryuuiisou"] = ("All green", "Ryuuiisou"),
            ["chuuren-poutou"] = ("Nine gates", "Chuuren poutou"),
            ["suukantsu"] = ("Four kans", "Suukantsu"),
            ["tenhou"] = ("Blessing of heaven", "Tenhou"),
            ["chiihou"] = ("Blessing of earth", "Chiihou"),
        };

    /// <summary>riichi-score fu reasons → (English, Japanese) names.</summary>
    public static readonly IReadOnlyDictionary<string, (string English, string Japanese)> FuNames =
        new Dictionary<string, (string, string)>
        {
            ["base"] = ("Base", "Fuutei"),
            ["chiitoitsu"] = ("Seven pairs", "Chiitoitsu"),
            ["closed ron"] = ("Concealed ron", "Menzen kafu"),
            ["tsumo"] = ("Self-draw", "Tsumo"),
            ["open triplet of simples"] = ("Open triplet, simples", "Minkou"),
            ["closed triplet of simples"] = ("Closed triplet, simples", "Ankou"),
            ["open triplet of terminals/honors"] = ("Open triplet, terminals/honours", "Minkou yaochuu"),
            ["closed triplet of terminals/honors"] = ("Closed triplet, terminals/honours", "Ankou yaochuu"),
            ["open kan of simples"] = ("Open kan, simples", "Minkan"),
            ["closed kan of simples"] = ("Closed kan, simples", "Ankan"),
            ["open kan of terminals/honors"] = ("Open kan, terminals/honours", "Minkan yaochuu"),
            ["closed kan of terminals/honors"] = ("Closed kan, terminals/honours", "Ankan yaochuu"),
            ["yakuhai pair"] = ("Value pair", "Yakuhai jantou"),
            ["double wind pair"] = ("Double wind pair", "Renpuuhai jantou"),
            ["kanchan wait"] = ("Middle wait", "Kanchan"),
            ["penchan wait"] = ("Edge wait", "Penchan"),
            ["tanki wait"] = ("Pair wait", "Tanki"),
        };

    private static string Capitalise(string text) =>
        text.Length == 0 ? text : char.ToUpperInvariant(text[0]) + text[1..];
}
