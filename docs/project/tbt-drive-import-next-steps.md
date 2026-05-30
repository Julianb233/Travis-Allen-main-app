# TBT Drive Import Next Steps

## What Was Added

- Downloaded the latest TBT Racing Google Drive source files into `docs/source/tbt-drive/`.
- Extracted readable markdown from each PDF beside the raw source file.
- Added normalized app-ready data in `src/data/tbt-service-catalog.json`.

## Drive Evidence

The TBT Racing Drive folder contains the requested bike and service information:

- `SERVICE COST - Sheet1.pdf` includes service pricing.
- `BIKE_RIDER_USE_SERVICE_LOCATIONS_TRAINING.... - Sheet1.pdf` includes bike brands, rider skill levels, bike use categories, service types, TBT locations, and brand colors.
- `BIKE BRANDS AND MODELS - Sheet1.pdf` includes a large brand/model matrix.

## Implementation Path

1. Wire `src/data/tbt-service-catalog.json` into the app as the first local catalog source.
2. Build UI filters for brand, rider skill level, bike use, service type, and location.
3. Show service pricing from `servicePricing` anywhere the app asks users to select suspension work.
4. Validate the bike model matrix from `bike-brands-and-models-sheet.extracted.md` against the original spreadsheet/PDF before exposing model-level search in production.
5. Ask TBT/TPFS whether pricing should be customer-facing retail pricing or internal estimate pricing before publishing it publicly.
6. Confirm whether each TBT location is active, coming soon, or franchise-only before showing it on the live site.
7. After ShipStation/warehouse answers arrive, add fulfillment requirements to this same source package so products, SKUs, service orders, and warehouse handoff rules stay together.

## Client Source Notes

- Client SSOT identifies TBT Racing as a paid-active motorcycle suspension tuning and service franchise.
- Current public domain is `tbtracing.com` on Shopify.
- The canonical website repo is listed as `/opt/agency-workspace/tbt-racing-website`, but that repo was not present on this Mac during this import.
- This source package was added to the available local app repo at `/Users/julianbradley/repos/Travis-Allen-main-app` so the data is ready to move or wire into the canonical website repo when it is available.

## Open Questions For TBT

- Should users select bike brand only, or exact bike model too?
- Are service prices current public prices as of May 26, 2026?
- Which locations should be visible to customers right now?
- Should `Full Bike Prep` create a different workflow from fork/shock-only services?
- Do service requests need parts add-ons, customer notes, or upload photos during checkout/intake?
