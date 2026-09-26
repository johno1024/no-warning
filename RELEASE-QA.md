# NO WARNING — Release Candidate QA

Release gate for the production chemistry test.

## Core flow
- [x] Home → Player 1 name → 40-question test → lock flow remains present.
- [x] Single-choice and multi-select questions remain supported.
- [x] Back/next navigation and question progress remain present.
- [x] In-progress answers persist locally and Resume / Start Over is available.

## Two-person flow
- [x] Player 1 creates a server-backed Share Link and private Reveal Link.
- [x] Player 2 opens the Share Link and completes a private test.
- [x] Waiting reveal state is present before Player 2 completion.
- [x] Reveal status and final reveal remain server-backed.
- [x] Invalid, expired, completed, and network error states have user-facing handling.

## Results
- [x] Results/reveal layer remains loaded.
- [x] Low-score PLAY IT OUT challenges remain loaded.
- [x] QA mode remains available.

## PWA / resilience
- [x] Web manifest and branded icon are present.
- [x] Service worker and offline app shell are present.
- [x] Install/Add to Home Screen UX is present.
- [x] Offline banner explains that sharing/reveal needs internet.
- [x] PWA QA presets cover interrupted resume, offline banner, invalid/expired link, and clearing saved state.

## Release gate
Build must deploy successfully on Vercel with no build errors. Production runtime-error check must be clean immediately after release. Manual device smoke testing remains recommended for OS-native install prompts and share sheets because those behaviors are controlled by the browser/OS.