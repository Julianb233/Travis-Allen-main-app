# TBT Agent Handoff

## Status

`PASS`: The TBT source manifests, Drive import notes, access-control notes, GSD
operating docs, and Phase 1 local web portal MVP are present. The app builds and
the core portal smoke test passes.

## Current Goal

Build the Phase 1 web portal MVP, then use it as the foundation for the later
Expo mobile app.

## Source Of Truth

- Operating system: `docs/gsd/project-operating-system.md`
- Sprint status: `docs/gsd/current-sprint.md`
- Decisions: `docs/gsd/decision-log.md`
- Blockers/assets: `docs/gsd/blockers-and-assets.md`
- Service data: `src/data/tbt-service-catalog.json`
- Asset hub data: `src/data/tbt-onboarding-asset-hub.json`
- Source import notes: `docs/project/tbt-drive-import-next-steps.md`
- Access-control notes: `docs/project/tbt-franchise-asset-access-control.md`

## Next Concrete Action

Review or deploy the first portal pass:

- Dashboard
- Service Catalog
- Bike + Service Intake
- Franchise Asset Hub
- Training + Playbooks
- Marketing + Trailer/Sticker Resources
- Admin / Missing Assets

The local dev server is expected at `http://localhost:3033/` when running
`npm run dev -- --port 3033`.

## Verification Expected

- Both JSON manifests parse successfully.
- Portal sections render from manifest data, not hardcoded lists.
- Service pricing and service types appear from `tbt-service-catalog.json`.
- Asset sections match `tbt-onboarding-asset-hub.json`.
- Missing logo and trailer art warnings appear in admin/resource views.
- `AGENTS.md` and `CLAUDE.md` remain untouched unless explicitly approved.
- If a dev server is available, run it and visually verify desktop and mobile
  portal layouts.

## Blockers To Preserve

- Clean TBT logo source package is missing.
- Editable trailer wrap/art source files are missing.
- TBT still needs to confirm public pricing usage.
- TBT still needs to confirm location visibility/status.

## 2026-05-29 14:46 PT

Status: `PARTIAL`

Completed:
- Added the repo-level GSD operating system docs.
- Added README pointers so Codex and Claude start from the same project source.
- Preserved the web-first, Expo-second, visual-analysis-later sequence.

Verified:
- All five GSD docs exist.
- Both JSON manifests parse successfully.
- README points to the GSD workflow.
- `AGENTS.md` and `CLAUDE.md` were not edited.

Blockers:
- Clean TBT logo source package is still missing.
- Editable trailer wrap/art source files are still missing.
- Public pricing and location visibility still need TBT confirmation.

Next action:
- Create the web app framework and build the Phase 1 portal screens from the
  existing manifests.

## 2026-05-29 15:01 PT

Status: `PASS`

Completed:
- Created a React + Vite web app framework for the TBT portal.
- Built Dashboard, Service Catalog, Bike Intake, Franchise Asset Hub, Training,
  Marketing, and Admin/Missing Assets views.
- Wired portal UI to `src/data/tbt-service-catalog.json` and
  `src/data/tbt-onboarding-asset-hub.json`.
- Added Playwright config and an e2e smoke test for the core portal flow.
- Added `.gitignore` entries for generated app/test artifacts.

Verified:
- `npm run build` passed.
- `npm run test:e2e` passed.
- Both JSON manifests parse successfully.
- Desktop and mobile screenshots were captured from `http://localhost:3033/`.
- Intake interaction was verified by selecting KTM and Fork Re-Build.
- Admin warnings show the missing logo package and trailer art source files.
- `AGENTS.md` and `CLAUDE.md` were not edited.

Blockers:
- Clean TBT logo source package is still missing.
- Editable trailer wrap/art source files are still missing.
- Public pricing and location visibility still need TBT confirmation before a
  production public launch.

Next action:
- Decide whether to deploy the web MVP, polish portal workflows, or start the
  Expo mobile app using the same data model.

## Handoff Update Template

Use this format before ending any substantial work block:

```md
## YYYY-MM-DD HH:MM PT

Status: PASS | PARTIAL | BLOCKED

Completed:
- ...

Verified:
- ...

Blockers:
- ...

Next action:
- ...
```
