# Riichi Table Clock

A turn timer for 4-player Riichi mahjong, played on one phone lying in the middle of the table.
Each player's section of the screen faces them.

Built with Blazor WebAssembly (.NET 10) as an installable, offline-capable web app (PWA).

## How it works

- **Mahjong Soul–style time**: every turn gets a few base seconds. Once those run out, the
  player's bank starts draining. Banks refill at the start of each hand. Presets: 5 + 20 (default), 5 + 10, 3 + 5.
- **Tap your own section** after you discard. The turn passes counterclockwise.
- **Tap someone else's section** to call (pon, chi, kan). They take the turn and play continues from them.
- **New hand** refills every bank. Whoever goes first taps their section to start.
- **Pause**, **Undo** (within the current hand) and settings sit in the center.
- When a bank runs out, the phone beeps and vibrates once and the section stays red until the player taps.

## Run locally

```
dotnet run --project src/MahjongTimer
dotnet test MahjongTimer.slnx
```

## Deploy

Every push to `main` runs the tests and publishes to GitHub Pages via
[.github/workflows/deploy.yml](.github/workflows/deploy.yml).
In the repository's **Settings → Pages**, set **Source** to **GitHub Actions** once.
