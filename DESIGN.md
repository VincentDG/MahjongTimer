# Riichi Mahjong Turn Timer — Design (v2)

## Purpose
A real table tool first; C# practice second.

## Platform
- Blazor WebAssembly (.NET 10), installable as a PWA and usable offline.
- Hosted on GitHub Pages. Every push to `main` runs the tests and redeploys
  (`.github/workflows/deploy.yml`).

## Device setup
- One shared phone, flat in the middle of the table.
- Portrait (set in the web manifest). The screen is kept awake with the browser
  Wake Lock API where the browser allows it.

## Clock rules
- **Base time** per turn. Acting within it costs nothing.
- **Time bank** per player. Drains only after base time runs out.
- Every turn start gives a fresh base time, including turns started by a call.
- Banks refill to full at the start of each hand.
- Time is chosen from presets (base + bank): **5 + 20** (default), 5 + 10, 3 + 5.
  Changing the preset starts a new hand.
- The preset and the sound on/off setting are saved in the browser (`localStorage`).

## Turns
- Hand start: whoever goes first taps their own section.
- Current player taps own section → turn passes counter-clockwise
  (near → right → across → left → near).
- Any other player taps their section → call; turn jumps to them.
- **Undo** steps back one tap at a time, restoring everyone's time. It never reaches
  into the previous hand.
- Taps are ignored while paused.
- If the app leaves the screen (app switch, screen off, tab change), the clock
  auto-pauses. It stays paused until someone taps Resume.

## Centre controls
- **Pause / Resume** — only available once a hand has started.
- **Undo** — disabled when there is nothing to undo.
- **New hand** — refills all banks. Mid-hand it needs a second tap within 3 seconds,
  so a stray tap cannot wipe the banks.
- **Settings** — the button shows the current preset (e.g. `5 + 20`). Opening it
  pauses a running hand.

## Warnings
- When the bank reaches zero: one double beep plus vibration, once.
- The section turns red and shows "tap when done" until the turn moves on.
- No enforced penalty — the table decides.
- The beep can be turned off and plays at media volume; vibration always fires
  (on phones that support it).

## Layout
```
 ┌───────────────────────────┐
 │      (across, upside-down)│
 ├──────┬─────────────┬──────┤
 │      │ Pause       │      │
 │ left │ Undo        │ right│
 │      │ New hand    │      │
 │      │ 5 + 20      │      │
 ├──────┴─────────────┴──────┤
 │  near   your turn  5      │
 │         bank 20  ▓▓▓▓▓░   │
 └───────────────────────────┘
```
- Each section's text is rotated to face its seat (across 180°, left 90°, right −90°).
- Seats are positions (near, right, across, left), not winds; no player names.
- Active section shows base seconds left and the bank underneath; once base time is
  used it shows the bank draining. Inactive sections show their bank.

## Code structure
- `Game/TableClock.cs` — all clock rules, no UI. `TimeSetting` holds the presets.
  Seats are numbered 0–3 counter-clockwise from the near edge, so the next seat is
  `seat + 1`.
- `Pages/Home.razor` — the screen, centre controls, settings sheet, and the 100 ms
  tick loop that drives `TableClock.Tick`.
- `Pages/SeatPanel.razor` — one player's section.
- `wwwroot/js/table.js` — browser features C# cannot reach directly: wake lock,
  sound, vibration, saved settings.
- `tests/MahjongTimer.Tests` — xUnit tests for `TableClock`.

## Changed from v1 (MAUI)
- Web app instead of an Android-only MAUI app; no USB install needed.
- Fixed presets instead of free-form base/bank values.
- Seats are positions instead of winds.
- One alarm at zero instead of a beep each second for the last 5 seconds.
- "End hand" became "New hand" with a confirm tap.

## Out of scope
Scores, riichi sticks, honba, round tracking, multi-phone sync.
