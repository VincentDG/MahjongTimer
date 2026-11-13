# riichi-score (vendored)

- Package: riichi-score 3.0.0 (npm), MIT licence — see LICENSE.
- Source: https://github.com/cwebley/kotenho/tree/main/packages/riichi-score
- `riichi-score.js` is `dist/esm/index.js` bundled into one ES module with
  `npx esbuild@0.24.0 package/dist/esm/index.js --bundle --format=esm`.
- Checked against known hands from the Python `mahjong` library:
  `tests/scoring-check/` (rerun it after updating this file).
