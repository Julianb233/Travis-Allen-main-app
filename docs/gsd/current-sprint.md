# TBT Current Sprint

## Sprint Goal

Ship the Phase 1 TBT web portal MVP as the controlled access point for
franchisees, service data, training, marketing resources, and admin follow-up.

## Priorities

1. Implement the web app framework and responsive portal shell.
2. Render the Service Catalog from `src/data/tbt-service-catalog.json`.
3. Render the Franchise Asset Hub from `src/data/tbt-onboarding-asset-hub.json`.
4. Add Bike + Service Intake using brand, rider skill, bike use, service type,
   location, and pricing selections.
5. Add Training, Marketing, and Admin/Missing Assets views.

## Current Status

`PASS`: The Phase 1 local web portal MVP exists, builds successfully, and has a
Playwright smoke test covering dashboard data, intake state, and missing asset
warnings.

## Verified Inputs

- Service catalog manifest parses successfully.
- Asset hub manifest parses successfully.
- Service catalog currently includes 20 bike brands, 7 service types, and 21
  locations.
- Asset hub manifest currently includes 6 sections and 25 Drive shortcut assets.
- The controlled Drive hub is
  `https://drive.google.com/drive/folders/1cp0hjl1V10rvZDwzho-Pym2jXlgW-9ul`.

## Known Blockers

- Clean TBT logo package is missing from the available Drive source package.
- Editable trailer wrap/art source files are missing from the available Drive
  source package.
- Public/customer pricing status still needs TBT confirmation before pricing is
  promoted as final public pricing.
- Location visibility still needs TBT confirmation before all locations are shown
  as active customer-facing options.

## Next Action

Review the local portal at `http://localhost:3033/`, then confirm whether to
ship/deploy the web MVP, start the Expo mobile app, or continue polishing portal
workflows first.
