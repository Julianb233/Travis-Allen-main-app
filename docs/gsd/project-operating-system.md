# TBT GSD Project Operating System

## Purpose

This is the shared execution layer for the TBT portal. Codex, Claude, and any
future agent should start here before changing the app, docs, Drive manifests,
or client-facing portal behavior.

The working goal is to build one controlled TBT access point for franchisees,
service information, training, marketing assets, and admin follow-up.

## Source Order

1. Read `docs/gsd/current-sprint.md` for the active goal and next action.
2. Read `docs/gsd/agent-handoff.md` for the latest status and proof.
3. Check `docs/gsd/blockers-and-assets.md` before claiming asset work is done.
4. Use app-facing manifests as the source for UI data:
   - `src/data/tbt-service-catalog.json`
   - `src/data/tbt-onboarding-asset-hub.json`
5. Use `docs/project/` for source import notes and access-control rationale.
6. Use raw files in `docs/source/tbt-drive/` only when validating source data.

Do not hardcode Drive links or catalog values in UI if the values already exist
in the manifests.

## GSD Workflow

1. Define the single work block outcome.
2. Check the current sprint, decision log, blockers, and handoff.
3. Make the smallest complete change that moves the outcome forward.
4. Verify the change with commands, visual QA, or source inspection.
5. Update `docs/gsd/current-sprint.md` and `docs/gsd/agent-handoff.md`.
6. Mark the result with `PASS`, `PARTIAL`, or `BLOCKED`.

## Completion Rules

- `PASS`: The intended result is usable now, tested, and verified.
- `PARTIAL`: Usable work exists, but a known client, platform, or asset blocker
  remains.
- `BLOCKED`: Progress requires a specific missing file, credential, approval,
  platform state, or human reply.

Do not call a task complete because documentation exists. The deliverable is the
user-visible result or the repo state another agent can reliably continue from.

## Product Phases

1. Phase 1: Web portal MVP for the controlled franchise/resource hub.
2. Phase 2: Expo iOS/Android app reusing the same data patterns and flows.
3. Phase 3: Media upload, visual analysis, and embeddings after enough real
   service media exists to justify the cost.

## Agent Rules

- Keep `AGENTS.md` and `CLAUDE.md` untouched unless the user explicitly approves
  edits to those files.
- Preserve imported raw source files in `docs/source/tbt-drive/`.
- Treat missing logo and trailer art files as follow-up blockers for brand and
  trailer sections only. They do not block the web portal MVP.
- Before final handoff, update the handoff with status, proof, blockers, and the
  next concrete action.
