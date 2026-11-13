namespace MahjongTimer.Game;

public enum Wind { East, South, West, North }

/// <summary>
/// Everything about a win that the tiles don't show. Until round tracking exists, the winds
/// and honba are picked by hand on the calculator.
/// </summary>
public sealed record WinConditions
{
    public bool IsTsumo { get; init; }
    public bool IsRiichi { get; init; }
    public bool IsDoubleRiichi { get; init; }
    public bool IsIppatsu { get; init; }
    public bool IsRinshan { get; init; }
    public bool IsChankan { get; init; }
    public bool IsHaitei { get; init; }
    public bool IsHoutei { get; init; }
    public bool IsTenhou { get; init; }
    public bool IsChiihou { get; init; }
    public Wind SeatWind { get; init; } = Wind.South;
    public Wind RoundWind { get; init; } = Wind.East;
    public int Honba { get; init; }

    /// <summary>The dealer is the seat whose wind is East.</summary>
    public bool IsDealer => SeatWind == Wind.East;

    /// <summary>
    /// Clears any condition that can't apply, so a stale toggle never reaches the score.
    /// <paramref name="isClosed"/>: no called sets. <paramref name="hasKan"/>: any kan, called or concealed.
    /// </summary>
    public WinConditions FitTo(bool isClosed, bool hasKan)
    {
        var riichi = isClosed && (IsRiichi || IsDoubleRiichi);
        return this with
        {
            IsRiichi = riichi && IsRiichi,
            IsDoubleRiichi = riichi && IsDoubleRiichi,
            IsIppatsu = riichi && IsIppatsu,
            IsRinshan = IsRinshan && hasKan && IsTsumo,
            IsChankan = IsChankan && !IsTsumo,
            IsHaitei = IsHaitei && IsTsumo,
            IsHoutei = IsHoutei && !IsTsumo,
            IsTenhou = IsTenhou && IsTsumo && isClosed && IsDealer,
            IsChiihou = IsChiihou && IsTsumo && isClosed && !IsDealer,
            Honba = Math.Max(0, Honba),
        };
    }
}
