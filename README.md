# NO WARNING — The Chemistry Test

A bold, mobile-first private two-person chemistry test inspired by the NO WARNING card game.

## Production status

**v1.0 — production-ready.** The app has completed its release-candidate regression gate. See `RELEASE-QA.md` for the permanent QA matrix.

## Experience

1. Player 1 enters a name and completes the 40-question chemistry test.
2. Answers are locked privately.
3. The app creates a server-backed Share Link for Player 2 and a separate Private Reveal Link.
4. Player 2 completes the test without seeing Player 1's answers.
5. Results unlock through the private reveal flow after both sides are complete.
6. Results highlight chemistry patterns and feed **PLAY IT OUT** activities toward the lowest-scoring categories.

## Included

- 40-question private two-person test
- Single-choice and multi-select questions
- Server-backed Share Link + Private Reveal Link
- Results & Reveal 2.0
- Score-driven PLAY IT OUT activities
- Mobile-first interaction polish
- Installable PWA with offline app shell
- Interrupted-test Resume / Start Over support
- Connectivity and invalid/expired-link handling
- Integrated QA mode and PWA regression presets

## Privacy and connectivity

The two players' test-taking experience is intentionally separated. Sharing, session status, and reveal synchronization require an internet connection; the local app shell and supported in-progress state can remain available offline.

## QA

Use the repository QA entry point / QA mode for rapid scenario testing. `RELEASE-QA.md` is the release gate and should be updated whenever a future change affects a checked flow.

## Version

Current production milestone: **1.0.0**.
