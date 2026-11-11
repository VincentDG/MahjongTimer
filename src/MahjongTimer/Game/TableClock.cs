namespace MahjongTimer.Game;

/// <summary>Base seconds per turn plus bank seconds per hand, Mahjong Soul style.</summary>
public sealed record TimeSetting(int BaseSeconds, int BankSeconds)
{
    public static readonly TimeSetting Default = new(5, 20);

    public static readonly IReadOnlyList<TimeSetting> Presets = [Default, new(5, 10), new(3, 5)];

    public override string ToString() => $"{BaseSeconds} + {BankSeconds}";
}

/// <summary>
/// Turn clock for four players sharing one phone.
/// Seats are numbered counterclockwise from the near edge: 0 near, 1 right, 2 across, 3 left,
/// so the next seat in turn order is always <c>seat + 1</c>.
/// </summary>
public sealed class TableClock
{
    public const int SeatCount = 4;

    private readonly double[] _banks = new double[SeatCount];
    private readonly Stack<Snapshot> _history = new();

    public TableClock(TimeSetting setting)
    {
        Setting = setting;
        NewHand();
    }

    /// <summary>Raised once when the active player's bank reaches zero.</summary>
    public event Action? TimeExpired;

    public TimeSetting Setting { get; private set; }

    /// <summary>The seat whose clock is running, or null while waiting for the first tap of a hand.</summary>
    public int? ActiveSeat { get; private set; }

    public double BaseLeft { get; private set; }

    public bool IsExpired { get; private set; }

    public bool IsPaused { get; private set; }

    public bool CanUndo => _history.Count > 0;

    public bool IsHandInProgress => ActiveSeat is not null;

    public bool IsInBank => ActiveSeat is not null && BaseLeft <= 0;

    private bool IsRunning => ActiveSeat is not null && !IsPaused && !IsExpired;

    public double BankLeft(int seat) => _banks[seat];

    public static int NextSeat(int seat) => (seat + 1) % SeatCount;

    public void ChangeSetting(TimeSetting setting)
    {
        Setting = setting;
        NewHand();
    }

    /// <summary>Refills every bank and waits for whoever goes first to tap.</summary>
    public void NewHand()
    {
        Array.Fill(_banks, Setting.BankSeconds);
        ActiveSeat = null;
        BaseLeft = Setting.BaseSeconds;
        IsExpired = false;
        IsPaused = false;
        _history.Clear();
    }

    /// <summary>
    /// The active player tapping their own seat ends their turn; anyone else tapping takes the turn (a call).
    /// The first tap of a hand starts that player's clock. Ignored while paused.
    /// </summary>
    public void Tap(int seat)
    {
        ArgumentOutOfRangeException.ThrowIfNegative(seat);
        ArgumentOutOfRangeException.ThrowIfGreaterThanOrEqual(seat, SeatCount);
        if (IsPaused) return;

        _history.Push(new Snapshot((double[])_banks.Clone(), ActiveSeat, BaseLeft, IsExpired));
        StartTurn(seat == ActiveSeat ? NextSeat(seat) : seat);
    }

    public void TogglePause()
    {
        if (ActiveSeat is null) return;
        IsPaused = !IsPaused;
    }

    /// <summary>Steps back one tap within the current hand, restoring everyone's time as it was.</summary>
    public void Undo()
    {
        if (!_history.TryPop(out var snapshot)) return;

        snapshot.Banks.CopyTo(_banks, 0);
        ActiveSeat = snapshot.ActiveSeat;
        BaseLeft = snapshot.BaseLeft;
        IsExpired = snapshot.IsExpired;
        if (ActiveSeat is null) IsPaused = false;
    }

    public void Tick(TimeSpan elapsed)
    {
        if (!IsRunning) return;

        var remaining = elapsed.TotalSeconds;
        var fromBase = Math.Min(BaseLeft, remaining);
        BaseLeft -= fromBase;
        remaining -= fromBase;
        if (BaseLeft > 0) return;

        var seat = ActiveSeat!.Value;
        _banks[seat] = Math.Max(0, _banks[seat] - remaining);
        if (_banks[seat] > 0) return;

        IsExpired = true;
        TimeExpired?.Invoke();
    }

    private void StartTurn(int seat)
    {
        ActiveSeat = seat;
        BaseLeft = Setting.BaseSeconds;
        IsExpired = false;
    }

    private sealed record Snapshot(double[] Banks, int? ActiveSeat, double BaseLeft, bool IsExpired);
}
