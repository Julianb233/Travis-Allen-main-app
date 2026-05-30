# Travis-Allen-main-app
Replit app

## Project Status / GSD

Start every TBT work block with the repo-level GSD operating docs:

- `docs/gsd/project-operating-system.md`: source order, workflow, completion
  rules, and agent expectations.
- `docs/gsd/current-sprint.md`: active goal, priorities, blockers, and next
  action.
- `docs/gsd/decision-log.md`: durable product decisions.
- `docs/gsd/agent-handoff.md`: Codex/Claude handoff and verification format.
- `docs/gsd/blockers-and-assets.md`: missing assets and source confirmations.

Current delivery sequence:

1. Phase 1: responsive web portal MVP.
2. Phase 2: Expo iOS/Android app using shared data patterns.
3. Phase 3: media upload, visual analysis, and embeddings.

## TBT Racing Source Data

The latest TBT Racing Google Drive bike/service files are archived in
`docs/source/tbt-drive/`.

Use `src/data/tbt-service-catalog.json` as the first app-ready catalog source
for bike brands, rider skill levels, bike use categories, service types,
service pricing, TBT locations, and brand colors.

Implementation notes and open questions are in
`docs/project/tbt-drive-import-next-steps.md`.

The controlled franchise onboarding asset hub is tracked in
`src/data/tbt-onboarding-asset-hub.json`, with access-control notes in
`docs/project/tbt-franchise-asset-access-control.md`.
