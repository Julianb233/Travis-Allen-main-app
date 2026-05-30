# TBT Franchise Asset Access Control

## Goal

Create one controlled access point for franchisee/onboarding materials so TBT can grant access during onboarding and remove access quickly if a relationship ends.

## Live Hub

- Hub: `TBT Franchise Onboarding Asset Hub`
- Drive folder: https://drive.google.com/drive/folders/1cp0hjl1V10rvZDwzho-Pym2jXlgW-9ul
- Parent source folder: `TBT Racing`

## Folder Structure

- `00_START_HERE`: access rules and orientation notes.
- `01_Brand_Logo_Art`: logo, trailer art, brand marks, source files.
- `02_Trailer_Sticker_Marketing`: trailer, sticker, race-day, sponsorship, stunt-video, and campaign materials.
- `03_Service_Bike_Info`: bike brands/models, service costs, service types, locations, and technical references.
- `04_Training_Playbooks`: franchisee training and playbooks.
- `05_Franchise_Admin`: franchise pricing and opportunity/admin docs.

## Access Rule

Give franchisees/onboarding users access to the hub folder, not the scattered source folders. When they should lose access, remove them from the hub folder first.

This keeps TBT's operational leverage in one place:

1. Invite person or franchisee to the hub.
2. Keep source documents owned by TBT/AI Acrobatics.
3. Use Drive shortcuts inside the hub so files can stay canonical.
4. Revoke hub access when needed.
5. Avoid direct sharing of underlying folders unless the person is an internal admin.

## App Direction

The app should treat `src/data/tbt-onboarding-asset-hub.json` as the asset access manifest. Build the onboarding/resource screen from this manifest instead of hardcoding random Drive links.

Recommended app behavior:

- Show a single "Franchise Asset Hub" entry point.
- Separate assets by the same sections as Drive.
- Track each user's access status inside the app.
- Disable or hide the hub link when a user is removed, paused, or no longer approved.
- Keep a small internal admin view for missing assets, especially logo and trailer art source files.

## Current Gap

The TBT Drive folders did not contain a clean TBT logo package or editable trailer art source files during this pass. The hub has a `01_Brand_Logo_Art` folder ready for them, but those files still need to be uploaded or requested from TBT.
