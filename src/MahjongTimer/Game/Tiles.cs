namespace MahjongTimer.Game;

/// <summary>
/// One tile in MPSZ notation: a rank and a suit letter. The suits m, p and s use ranks 1–9,
/// with 0 for a red five. Honours use suit z with ranks 1–7: East, South, West, North,
/// White, Green, Red.
/// </summary>
public readonly record struct Tile(int Rank, char Suit)
{
    /// <summary>A red five, written with rank 0.</summary>
    public bool IsRed => Rank == 0;

    public bool IsHonour => Suit == 'z';

    /// <summary>The same tile with a red five read as a normal five, for comparing tiles.</summary>
    public Tile Plain => IsRed ? this with { Rank = 5 } : this;

    public override string ToString() => $"{Rank}{Suit}";
}

/// <summary>What was read from one MPSZ text field.</summary>
/// <param name="Tiles">Every complete tile, in typed order.</param>
/// <param name="PendingDigits">Digits typed after the last suit letter, still waiting for one.</param>
/// <param name="HasError">The text contained something that isn't MPSZ (the rest is still read).</param>
public sealed record MpszText(IReadOnlyList<Tile> Tiles, IReadOnlyList<int> PendingDigits, bool HasError)
{
    /// <summary>Valid MPSZ with nothing left half-typed.</summary>
    public bool IsComplete => !HasError && PendingDigits.Count == 0;
}

/// <summary>Reads MPSZ text such as <c>123m055p11z</c>.</summary>
public static class Mpsz
{
    /// <summary>
    /// Reads every tile it can. Errors are a character other than 0–9 or m/p/s/z, a suit letter
    /// with no digits before it, and an honour outside 1z–7z. Spaces are ignored.
    /// </summary>
    public static MpszText Read(string text)
    {
        var tiles = new List<Tile>();
        var pendingDigits = new List<int>();
        var hasError = false;

        foreach (var c in text)
        {
            if (char.IsWhiteSpace(c)) continue;

            if (c is >= '0' and <= '9')
            {
                pendingDigits.Add(c - '0');
                continue;
            }

            if (c is not ('m' or 'p' or 's' or 'z') || pendingDigits.Count == 0)
            {
                hasError = true;
                continue;
            }

            foreach (var rank in pendingDigits)
            {
                if (c == 'z' && rank is (< 1 or > 7)) hasError = true;
                else tiles.Add(new Tile(rank, c));
            }
            pendingDigits.Clear();
        }

        return new MpszText(tiles, pendingDigits, hasError);
    }

    /// <summary>Writes tiles in short MPSZ form, grouping runs of one suit: 2m, 3m, 4p → "23m4p".</summary>
    public static string Write(IEnumerable<Tile> tiles)
    {
        var text = new System.Text.StringBuilder();
        char? suit = null;
        foreach (var tile in tiles)
        {
            if (suit is { } current && current != tile.Suit) text.Append(current);
            text.Append(tile.Rank);
            suit = tile.Suit;
        }
        if (suit is { } last) text.Append(last);
        return text.ToString();
    }

    /// <summary>
    /// The text with the tile at <paramref name="index"/> (in typed order) taken out, rewritten in
    /// short form. Digits still waiting for a suit are kept at the end.
    /// </summary>
    public static string RemoveTile(string text, int index)
    {
        var read = Read(text);
        if (index < 0 || index >= read.Tiles.Count) return text;
        var kept = read.Tiles.Where((_, i) => i != index);
        return Write(kept) + string.Concat(read.PendingDigits);
    }
}
