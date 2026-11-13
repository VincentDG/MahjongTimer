using MahjongTimer.Game;

namespace MahjongTimer.Tests;

public class MpszTests
{
    [Fact]
    public void Reads_suits_honours_and_red_fives()
    {
        var text = Mpsz.Read("120m 7z");

        Assert.True(text.IsComplete);
        Assert.Equal([new Tile(1, 'm'), new Tile(2, 'm'), new Tile(0, 'm'), new Tile(7, 'z')], text.Tiles);
        Assert.True(text.Tiles[2].IsRed);
        Assert.Equal(new Tile(5, 'm'), text.Tiles[2].Plain);
    }

    [Fact]
    public void Digits_without_a_suit_yet_are_pending_not_an_error()
    {
        var text = Mpsz.Read("23m45");

        Assert.Equal(2, text.Tiles.Count);
        Assert.Equal([4, 5], text.PendingDigits);
        Assert.False(text.HasError);
        Assert.False(text.IsComplete);
    }

    [Theory]
    [InlineData("8z")]  // honours stop at 7z
    [InlineData("0z")]  // no red honours
    [InlineData("m")]   // suit letter with no digits
    [InlineData("12k")] // not a suit
    public void Bad_text_is_an_error(string input) => Assert.True(Mpsz.Read(input).HasError);
}

public class HandEntryTests
{
    // The example hand from the mockup: open pon of Red dragon, won on 4m.
    private static readonly HandEntry Example = new()
    {
        Closed = "23m456p678p11z",
        Winning = "4m",
        Open = "777z",
        Dora = "3p",
    };

    [Fact]
    public void Reads_a_complete_hand()
    {
        var hand = Example.Read();

        Assert.NotNull(hand);
        Assert.Equal(10, hand.ClosedTiles.Count);
        Assert.Equal(new Tile(4, 'm'), hand.WinningTile);
        Assert.Equal(CalledSetKind.Pon, Assert.Single(hand.CalledSets).Kind);
        Assert.Equal([new Tile(3, 'p')], hand.DoraIndicators);
    }

    [Fact]
    public void Tile_count_counts_a_kan_as_three()
    {
        var entry = new HandEntry { Closed = "23m456p11z", Winning = "4m", Open = "777z", ConcealedKans = ["1111s"] };

        Assert.Equal(14, entry.TileCount);
        Assert.NotNull(entry.Read());
    }

    [Theory]
    [InlineData("123m", CalledSetKind.Chi)]
    [InlineData("312m", CalledSetKind.Chi)] // order doesn't matter
    [InlineData("406p", CalledSetKind.Chi)] // red five is a five
    [InlineData("777z", CalledSetKind.Pon)]
    [InlineData("5055s", CalledSetKind.Kan)]
    public void Called_set_kind_comes_from_its_tiles(string tiles, CalledSetKind expected) =>
        Assert.Equal(expected, HandEntry.KindOf(Mpsz.Read(tiles).Tiles));

    [Theory]
    [InlineData("124m")] // not a run
    [InlineData("123z")] // honours can't make a run
    [InlineData("12m3p")] // mixed suits
    [InlineData("11m")]  // too short
    public void Other_groups_are_not_called_sets(string tiles) =>
        Assert.Null(HandEntry.KindOf(Mpsz.Read(tiles).Tiles));

    [Fact]
    public void Thirteen_tiles_is_invalid() =>
        Assert.Null((Example with { Closed = "23m456p678p1z" }).Read());

    [Fact]
    public void Winning_tile_must_be_exactly_one_tile() =>
        Assert.Null((Example with { Closed = "23m456p678p1z", Winning = "41z" }).Read());

    [Fact]
    public void A_half_typed_field_is_invalid() =>
        Assert.Null((Example with { Dora = "3" }).Read());

    [Fact]
    public void A_trailing_comma_in_open_is_invalid() =>
        Assert.Null((Example with { Open = "777z," }).Read());

    [Fact]
    public void A_concealed_kan_must_be_four_of_one_tile() =>
        Assert.Null(new HandEntry { Closed = "23m456p11z", Winning = "4m", Open = "777z", ConcealedKans = ["1112s"] }.Read());

    [Fact]
    public void A_fifth_copy_of_a_tile_is_invalid_even_as_a_dora_indicator() =>
        Assert.Null((Example with { Closed = "23m456p678p77z", Dora = "7z", Open = "777z" }).Read());

    [Fact]
    public void Two_red_fives_of_one_suit_is_invalid() =>
        Assert.Null((Example with { Closed = "23m406p608p11z" }).Read());

    [Fact]
    public void More_than_five_dora_indicators_is_invalid() =>
        Assert.Null((Example with { Dora = "123456s" }).Read());
}
