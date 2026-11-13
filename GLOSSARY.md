# Riichi Table Clock

A turn timer and hand calculator for a four-player riichi mahjong table sharing one phone. Running scores are kept with physical sticks, not in the app.

## Time

**Turn**:
The stretch during which one seat is expected to act, from receiving the turn until passing it on.

**Base time**:
The seconds a seat gets at the start of every turn that cost nothing to use.
_Avoid_: Turn time, free time

**Bank**:
A seat's reserve of seconds for one hand, spent only once base time runs out.
_Avoid_: Time bank, extra time, reserve

**Call**:
A seat taking the turn out of order by claiming another seat's discard (chi, pon, kan).

## Table

**Seat**:
One of the four player positions at the table, fixed for the whole game.
_Avoid_: Player, position, zone

**Dealer**:
The seat that starts the current hand and pays and receives more on wins.
_Avoid_: Oya, East player

## Structure

**Hand**:
One deal, from the first discard until someone wins or it ends in a draw.
_Avoid_: Kyoku, deal

**Round**:
The East round or the South round, each made of four or more hands.
_Avoid_: Wind round, ba

**Game**:
A full hanchan: the East round and the South round.
_Avoid_: Match, hanchan, session

**Round wind**:
The wind of the current round (East or South), which makes that wind's tiles valuable to every seat.
_Avoid_: Prevalent wind, bakaze

**Seat wind**:
A seat's own wind for the current hand, East for the dealer; it changes as the dealer moves.
_Avoid_: Own wind, jikaze

## Hand value

**Winning hand**:
The tiles of the seat that won: its concealed tiles, its called sets, and the winning tile.
_Avoid_: Agari, hand (on its own, "hand" means the deal)

**MPSZ notation**:
The standard way of writing tiles as text: digits followed by a suit letter (m, p, s, or z for honours), with 0 for a red five, e.g. `123m11z`.
_Avoid_: Tile code, hand string

**Closed tiles**:
The tiles of a winning hand held in the hand: not part of a called set or a concealed kan, and not the winning tile.
_Avoid_: Concealed tiles, closed part

**Called set**:
A chi, pon or kan made by claiming another seat's discard, or a concealed kan; it sits face-up.
_Avoid_: Meld, open meld

**Ron**:
Winning on another seat's discard; that seat pays the whole value.

**Tsumo**:
Winning on a self-drawn tile; every other seat pays a share.
_Avoid_: Self-draw, zimo

**Yaku**:
A named scoring pattern a winning hand must contain at least one of, each worth some han.
_Avoid_: Yaku list, combo

**Han**:
The count of value from yaku and dora that sets a winning hand's size.
_Avoid_: Fan, doubles

**Fu**:
Minipoints from the hand's shape, wait and win type, which refine the value below mangan.
_Avoid_: Minipoints

**Dora**:
A bonus tile worth one han each, found from the dora indicator tiles or as a red five.
_Avoid_: Bonus tile

**Honba**:
The repeat counter that rises after a dealer repeat or a draw and adds a bonus to the next win.
_Avoid_: Counter, repeat sticks
