# TBT Blockers And Assets

## Controlled Asset Hub

- Hub name: `TBT Franchise Onboarding Asset Hub`
- Hub URL:
  `https://drive.google.com/drive/folders/1cp0hjl1V10rvZDwzho-Pym2jXlgW-9ul`
- App manifest: `src/data/tbt-onboarding-asset-hub.json`
- Access rule: grant and revoke access at the hub folder instead of scattering
  direct folder/file access.

## Current Hub Sections

- `00_START_HERE`: access rules and orientation notes.
- `01_Brand_Logo_Art`: logo, trailer art, brand marks, and design source files.
- `02_Trailer_Sticker_Marketing`: trailer, sticker, race-day, sponsorship,
  stunt-video, and campaign materials.
- `03_Service_Bike_Info`: bike brands/models, rider/use/service/location sheets,
  service costs, and technical references.
- `04_Training_Playbooks`: franchisee training and service workflow playbooks.
- `05_Franchise_Admin`: franchise pricing, opportunity, and admin docs.

## Available App-Ready Data

- `src/data/tbt-service-catalog.json`
  - 20 bike brands
  - 7 service types
  - 21 locations
  - rider skill levels
  - bike use categories
  - service pricing
  - brand color guidance
- `src/data/tbt-onboarding-asset-hub.json`
  - 6 hub sections
  - 25 Drive shortcut assets
  - missing asset list

## Missing Assets

### Clean TBT Logo Package

Needed formats:

- SVG
- transparent PNG
- black/white variants
- print-ready vector

Current note: Search found unrelated logo files and campaign PDFs, but no clean
TBT logo source package in the TBT Drive folders.

### Trailer Wrap/Art Source Files

Needed formats:

- editable design source
- print-ready PDF
- PNG/JPG previews

Current note: Marketing briefs related to sticker, trailer, and race-day
campaigns were added, but editable trailer artwork source files were not found.

## Product Confirmation Needed

- Confirm whether service pricing is current public customer pricing or internal
  estimate pricing.
- Confirm which locations are active, coming soon, or franchise-only.
- Confirm whether exact bike model selection is required for v1 intake or if
  brand-level selection is enough.
- Confirm whether `Full Bike Prep` needs a distinct workflow from fork/shock-only
  services.

## Implementation Rule

Missing brand/trailer source files should be shown as admin follow-up warnings.
They should not block the Phase 1 portal, service catalog, intake flow, training
resources, or marketing resource links that already exist.
