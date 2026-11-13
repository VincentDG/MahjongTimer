namespace MahjongTimer.Game;

public enum CalledSetKind { Chi, Pon, Kan }

/// <summary>A chi, pon or kan made by claiming another seat's discard.</summary>
public sealed record CalledSet(CalledSetKind Kind, IReadOnlyList<Tile> Tiles);

/// <summary>A complete, checked winning hand, ready to be scored.</summary>
public sealed record WinningHand(
    IReadOnlyList<Tile> ClosedTiles,
    Tile WinningTile,
    IReadOnlyList<CalledSet> CalledSets,
    IReadOnlyList<IReadOnlyList<Tile>> ConcealedKans,
    IReadOnlyList<Tile> DoraIndicators,
    IReadOnlyList<Tile> UraDoraIndicators);

/// <summary>
/// The calculator's text fields, exactly as typed. Called sets in <see cref="Open"/> are
/// separated by commas; each concealed kan has its own field.
/// </summary>
public sealed record HandEntry
{
    public const int TilesInWinningHand = 14;
    public const int MaxIndicators = 5;

    public string Closed { get; init; } = "";
    public string Winning { get; init; } = "";
    public string Open { get; init; } = "";
    public IReadOnlyList<string> ConcealedKans { get; init; } = [];
    public string Dora { get; init; } = "";
    public string UraDora { get; init; } = "";

    /// <summary>
    /// Tiles typed so far, counted the way a winning hand counts to 14: a kan counts as 3,
    /// because its fourth tile is replaced by an extra draw.
    /// </summary>
    public int TileCount =>
        Mpsz.Read(Closed).Tiles.Count
        + Mpsz.Read(Winning).Tiles.Count
        + OpenGroups().Sum(group => Math.Min(Mpsz.Read(group).Tiles.Count, 3))
        + ConcealedKans.Sum(kan => Math.Min(Mpsz.Read(kan).Tiles.Count, 3));

    /// <summary>The checked winning hand, or null if it's unfinished or anything is wrong.</summary>
    public WinningHand? Read() => Check(isFinished: true, out var hand) ? hand : null;

    /// <summary>
    /// Something typed is wrong, as opposed to just not finished yet: a bad code, a group that
    /// can't become a set, more than 14 tiles, a fifth copy of a tile, or two red fives of one suit.
    /// </summary>
    public bool HasMistake => !Check(isFinished: false, out _);

    /// <summary>
    /// Runs every check. With <paramref name="isFinished"/> false, anything that typing more could
    /// still fix is allowed: half-typed digits, too few tiles, a set or kan that's only partly typed.
    /// </summary>
    private bool Check(bool isFinished, out WinningHand? hand)
    {
        hand = null;
        var closed = Mpsz.Read(Closed);
        var winning = Mpsz.Read(Winning);
        var dora = Mpsz.Read(Dora);
        var uraDora = Mpsz.Read(UraDora);

        if (!Fine(closed, isFinished) || !Fine(winning, isFinished) || !Fine(dora, isFinished) || !Fine(uraDora, isFinished)) return false;
        if (winning.Tiles.Count > 1 || (isFinished && winning.Tiles.Count == 0)) return false;
        if (dora.Tiles.Count > MaxIndicators || uraDora.Tiles.Count > MaxIndicators) return false;

        var calledSets = new List<CalledSet>();
        var openTiles = new List<Tile>();
        foreach (var group in OpenGroups())
        {
            var text = Mpsz.Read(group);
            if (!Fine(text, isFinished)) return false;
            openTiles.AddRange(text.Tiles);

            var kind = KindOf(text.Tiles);
            // Fewer than 3 tiles may still become a set; 3 or 4 tiles must already be one.
            if (kind is null && (isFinished || text.Tiles.Count >= 3)) return false;
            if (kind is { } setKind) calledSets.Add(new CalledSet(setKind, text.Tiles));
        }

        var concealedKans = new List<IReadOnlyList<Tile>>();
        foreach (var kan in ConcealedKans)
        {
            var text = Mpsz.Read(kan);
            if (!Fine(text, isFinished)) return false;
            var isKan = KindOf(text.Tiles) == CalledSetKind.Kan;
            var couldBecomeKan = text.Tiles.Count < 4 && text.Tiles.All(tile => tile.Plain == text.Tiles[0].Plain);
            if (!isKan && (isFinished || !couldBecomeKan)) return false;
            concealedKans.Add(text.Tiles);
        }

        if (isFinished ? TileCount != TilesInWinningHand : TileCount > TilesInWinningHand) return false;

        // Indicators are physical tiles too, so they count toward the four copies of each tile.
        var everyTile = closed.Tiles
            .Concat(winning.Tiles)
            .Concat(openTiles)
            .Concat(concealedKans.SelectMany(kan => kan))
            .Concat(dora.Tiles)
            .Concat(uraDora.Tiles)
            .ToList();
        if (everyTile.GroupBy(tile => tile.Plain).Any(copies => copies.Count() > 4)) return false;
        if (everyTile.Where(tile => tile.IsRed).GroupBy(tile => tile.Suit).Any(reds => reds.Count() > 1)) return false;

        if (isFinished) hand = new WinningHand(closed.Tiles, winning.Tiles[0], calledSets, concealedKans, dora.Tiles, uraDora.Tiles);
        return true;
    }

    /// <summary>A field has no bad codes, and when finished, no half-typed digits either.</summary>
    private static bool Fine(MpszText text, bool isFinished) =>
        !text.HasError && (!isFinished || text.PendingDigits.Count == 0);

    /// <summary>The comma-separated groups in the Open field; none when it's blank.</summary>
    private IEnumerable<string> OpenGroups() =>
        string.IsNullOrWhiteSpace(Open) ? [] : Open.Split(',');

    /// <summary>Chi (a run of three in one suit), pon (three of a tile), kan (four of a tile), or null.</summary>
    public static CalledSetKind? KindOf(IReadOnlyList<Tile> tiles)
    {
        if (tiles.Count is not (3 or 4)) return null;

        var plain = tiles.Select(tile => tile.Plain).ToList();
        var allSame = plain.All(tile => tile == plain[0]);

        if (tiles.Count == 4) return allSame ? CalledSetKind.Kan : null;
        if (allSame) return CalledSetKind.Pon;

        var ranks = plain.Select(tile => tile.Rank).Order().ToList();
        var isRun = !plain[0].IsHonour
            && plain.All(tile => tile.Suit == plain[0].Suit)
            && ranks[1] == ranks[0] + 1
            && ranks[2] == ranks[1] + 1;
        return isRun ? CalledSetKind.Chi : null;
    }
}
