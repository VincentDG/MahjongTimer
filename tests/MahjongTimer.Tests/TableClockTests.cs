using MahjongTimer.Game;

namespace MahjongTimer.Tests;

public class TableClockTests
{
    private const int Near = 0, Right = 1, Across = 2, Left = 3;

    private static TableClock NewClock() => new(new TimeSetting(5, 20));

    private static void Run(TableClock clock, double seconds) => clock.Tick(TimeSpan.FromSeconds(seconds));

    [Fact]
    public void New_hand_waits_for_the_first_tap()
    {
        var clock = NewClock();
        Run(clock, 10);

        Assert.Null(clock.ActiveSeat);
        Assert.All(Enumerable.Range(0, 4), seat => Assert.Equal(20, clock.BankLeft(seat)));
    }

    [Fact]
    public void First_tap_starts_that_players_clock()
    {
        var clock = NewClock();
        clock.Tap(Across);

        Assert.Equal(Across, clock.ActiveSeat);
        Assert.Equal(5, clock.BaseLeft);
    }

    [Fact]
    public void Tapping_your_own_seat_passes_the_turn_counterclockwise()
    {
        var clock = NewClock();
        clock.Tap(Near);
        clock.Tap(Near);
        Assert.Equal(Right, clock.ActiveSeat);

        clock.Tap(Right);
        clock.Tap(Across);
        clock.Tap(Left);
        Assert.Equal(Near, clock.ActiveSeat);
    }

    [Fact]
    public void Tapping_another_seat_is_a_call_and_play_continues_from_the_caller()
    {
        var clock = NewClock();
        clock.Tap(Near);
        clock.Tap(Across);
        Assert.Equal(Across, clock.ActiveSeat);

        clock.Tap(Across);
        Assert.Equal(Left, clock.ActiveSeat);
    }

    [Fact]
    public void Base_time_is_spent_before_the_bank()
    {
        var clock = NewClock();
        clock.Tap(Near);
        Run(clock, 3);

        Assert.Equal(2, clock.BaseLeft, precision: 6);
        Assert.Equal(20, clock.BankLeft(Near));
        Assert.False(clock.IsInBank);

        Run(clock, 4);
        Assert.Equal(0, clock.BaseLeft);
        Assert.Equal(18, clock.BankLeft(Near), precision: 6);
        Assert.True(clock.IsInBank);
    }

    [Fact]
    public void Base_time_resets_every_turn_but_the_bank_does_not()
    {
        var clock = NewClock();
        clock.Tap(Near);
        Run(clock, 8);
        clock.Tap(Near);
        clock.Tap(Right);
        clock.Tap(Across);
        clock.Tap(Left);

        Assert.Equal(Near, clock.ActiveSeat);
        Assert.Equal(5, clock.BaseLeft);
        Assert.Equal(17, clock.BankLeft(Near), precision: 6);
    }

    [Fact]
    public void Running_out_raises_one_alert_and_holds_at_zero_until_tapped()
    {
        var clock = NewClock();
        var alerts = 0;
        clock.TimeExpired += () => alerts++;
        clock.Tap(Near);

        Run(clock, 30);
        Run(clock, 5);

        Assert.Equal(1, alerts);
        Assert.True(clock.IsExpired);
        Assert.Equal(0, clock.BankLeft(Near));
        Assert.Equal(Near, clock.ActiveSeat);

        clock.Tap(Near);
        Assert.False(clock.IsExpired);
        Assert.Equal(Right, clock.ActiveSeat);
    }

    [Fact]
    public void A_player_with_an_empty_bank_still_gets_base_time_then_expires()
    {
        var clock = NewClock();
        var alerts = 0;
        clock.TimeExpired += () => alerts++;
        clock.Tap(Near);
        Run(clock, 25);
        clock.Tap(Near);
        clock.Tap(Right);
        clock.Tap(Across);
        clock.Tap(Left);

        Run(clock, 4);
        Assert.False(clock.IsExpired);
        Run(clock, 2);
        Assert.True(clock.IsExpired);
        Assert.Equal(2, alerts);
    }

    [Fact]
    public void Pause_freezes_the_clock_and_ignores_taps()
    {
        var clock = NewClock();
        clock.Tap(Near);
        clock.TogglePause();
        Run(clock, 10);
        clock.Tap(Right);

        Assert.Equal(5, clock.BaseLeft);
        Assert.Equal(Near, clock.ActiveSeat);

        clock.TogglePause();
        Run(clock, 1);
        Assert.Equal(4, clock.BaseLeft, precision: 6);
    }

    [Fact]
    public void Pause_does_nothing_before_the_hand_starts()
    {
        var clock = NewClock();
        clock.TogglePause();

        Assert.False(clock.IsPaused);
    }

    [Fact]
    public void Pause_keeps_the_clock_paused_when_called_twice()
    {
        var clock = NewClock();
        clock.Tap(Near);
        clock.Pause();
        clock.Pause();
        Run(clock, 10);

        Assert.True(clock.IsPaused);
        Assert.Equal(5, clock.BaseLeft);
    }

    [Fact]
    public void Pause_before_the_hand_starts_does_nothing()
    {
        var clock = NewClock();
        clock.Pause();

        Assert.False(clock.IsPaused);
    }

    [Fact]
    public void Undo_returns_the_turn_with_time_restored()
    {
        var clock = NewClock();
        clock.Tap(Near);
        Run(clock, 7);
        clock.Tap(Across);
        Run(clock, 2);

        clock.Undo();

        Assert.Equal(Near, clock.ActiveSeat);
        Assert.Equal(0, clock.BaseLeft);
        Assert.Equal(18, clock.BankLeft(Near), precision: 6);
        Assert.Equal(20, clock.BankLeft(Across));
    }

    [Fact]
    public void Undo_steps_back_several_taps_to_the_start_of_the_hand()
    {
        var clock = NewClock();
        clock.Tap(Near);
        clock.Tap(Near);
        clock.Tap(Right);

        clock.Undo();
        clock.Undo();
        clock.Undo();

        Assert.Null(clock.ActiveSeat);
        Assert.False(clock.CanUndo);
    }

    [Fact]
    public void Undo_does_not_reach_into_the_previous_hand()
    {
        var clock = NewClock();
        clock.Tap(Near);
        clock.NewHand();

        Assert.False(clock.CanUndo);
    }

    [Fact]
    public void New_hand_refills_every_bank()
    {
        var clock = NewClock();
        clock.Tap(Near);
        Run(clock, 15);
        clock.TogglePause();

        clock.NewHand();

        Assert.Null(clock.ActiveSeat);
        Assert.False(clock.IsPaused);
        Assert.Equal(20, clock.BankLeft(Near));
    }

    [Fact]
    public void Changing_the_setting_starts_a_new_hand_with_the_new_times()
    {
        var clock = NewClock();
        clock.Tap(Near);

        clock.ChangeSetting(new TimeSetting(3, 5));
        clock.Tap(Left);

        Assert.Equal(3, clock.BaseLeft);
        Assert.Equal(5, clock.BankLeft(Left));
    }
}
