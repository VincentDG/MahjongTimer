using MahjongTimer.Game;

namespace MahjongTimer.Tests;

public class PaymentTests
{
    // 2 han 30 fu has basic points 30 × 2^(2+2) = 480.
    private const int TwoHanThirtyFu = 480;
    private const int Mangan = 2000;

    [Theory]
    [InlineData(TwoHanThirtyFu, false, "2,000")]
    [InlineData(TwoHanThirtyFu, true, "2,900")]
    [InlineData(Mangan, false, "8,000")]
    [InlineData(Mangan, true, "12,000")]
    public void Ron(int basicPoints, bool isDealer, string expected) =>
        Assert.Equal(expected, Payment.For(basicPoints, isDealer, isTsumo: false, honba: 0).Amount);

    [Theory]
    [InlineData(TwoHanThirtyFu, false, "500 / 1,000")]
    [InlineData(TwoHanThirtyFu, true, "1,000 all")]
    [InlineData(Mangan, false, "2,000 / 4,000")]
    [InlineData(Mangan, true, "4,000 all")]
    public void Tsumo(int basicPoints, bool isDealer, string expected) =>
        Assert.Equal(expected, Payment.For(basicPoints, isDealer, isTsumo: true, honba: 0).Amount);

    [Fact]
    public void Honba_adds_300_to_a_ron() =>
        Assert.Equal("2,600", Payment.For(TwoHanThirtyFu, isDealer: false, isTsumo: false, honba: 2).Amount);

    [Fact]
    public void Honba_adds_100_per_payer_on_tsumo() =>
        Assert.Equal("600 / 1,100", Payment.For(TwoHanThirtyFu, isDealer: false, isTsumo: true, honba: 1).Amount);
}

public class HandScoreTests
{
    private static ScoreResponse Response(int han, int fu, int basicPoints, params string[] yaku) => new(
        IsValid: true, Errors: [], Han: han, Fu: fu, RawFu: fu, BasicPoints: basicPoints,
        Yaku: yaku.Select(name => new ScoreResponseYaku(name, han)).ToList(),
        FuLines: [new ScoreResponseFu("base", 20)],
        Dora: 1, RedFives: 0, UraDora: 0);

    [Fact]
    public void Below_mangan_shows_han_and_fu_with_dora_as_a_line()
    {
        var score = HandScore.From(Response(2, 30, 480, "chun"), new WinConditions());

        Assert.Equal("2 han 30 fu", score.Headline);
        Assert.Equal([new ScoreLine("Red dragon", 2), new ScoreLine("Dora", 1)], score.HanLines);
        Assert.Equal([new ScoreLine("Base", 20)], score.FuLines);
    }

    [Fact]
    public void A_yakuman_hides_fu_and_dora()
    {
        var score = HandScore.From(Response(0, 50, 8000, "daisangen"), new WinConditions());

        Assert.True(score.IsYakuman);
        Assert.Equal("Yakuman", score.Headline);
        Assert.Empty(score.FuLines);
        Assert.Equal([new ScoreLine("Daisangen", 0)], score.HanLines);
        Assert.Equal("32,000", score.Payment.Amount);
    }

    [Theory]
    [InlineData(1920, null)]
    [InlineData(2000, "Mangan")]
    [InlineData(3000, "Haneman")]
    [InlineData(4000, "Baiman")]
    [InlineData(6000, "Sanbaiman")]
    [InlineData(16000, "Double yakuman")]
    public void Limit_names(int basicPoints, string? expected) =>
        Assert.Equal(expected, HandScore.LimitFor(basicPoints));

    [Theory]
    [InlineData("rinshan-kaihou", "Rinshan kaihou")]
    [InlineData("seat-wind", "Seat wind")]
    [InlineData("chiitoitsu", "Seven pairs")]
    public void Yaku_names_are_readable(string id, string expected) =>
        Assert.Equal(expected, HandScore.YakuName(id));
}

public class ScoreRequestTests
{
    [Fact]
    public void Maps_the_hand_and_conditions_to_riichi_score_terms()
    {
        var hand = new HandEntry
        {
            // 1 + 1 + 3 called sets × 3 + 1 kan × 3 = 14 tiles. The pair is a red 5m and a 5m.
            Closed = "0m",
            Winning = "5m",
            Open = "777z,123s,1111p",
            ConcealedKans = ["9999s"],
        }.Read();
        Assert.NotNull(hand);

        var request = ScoreRequest.From(hand, new WinConditions { SeatWind = Wind.East, IsTsumo = true });

        Assert.Equal(["0m"], request.ClosedTiles);
        Assert.Equal("5m", request.WinningTile);
        Assert.Equal(["triplet", "run", "daiminkan"], request.CalledSets.Select(set => set.Type));
        Assert.Equal(["9s", "9s", "9s", "9s"], Assert.Single(request.ConcealedKans));
        Assert.Equal("east", request.SeatWind);
        Assert.Equal("east", request.RoundWind);
        Assert.True(request.IsTsumo);
    }
}
