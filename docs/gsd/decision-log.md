# TBT Decision Log

## 2026-05-29: Web App First

Decision: Build the web portal before the mobile app.

Reason: This is the quickest and least costly path to a usable controlled access
point. It lets TBT validate service data, onboarding resources, and missing asset
work before investing in native packaging.

Impact: Phase 1 is a responsive web app MVP. It should be structured so the same
data model and screen logic can inform the Expo app later.

## 2026-05-29: Expo Mobile Second

Decision: Build the iOS/Android app with Expo after the web portal MVP.

Reason: Expo is the fastest practical path for shared iOS and Android delivery
once the portal flows are proven.

Impact: Do not build native-only workflows in Phase 1. Keep data contracts and
screen concepts portable.

## 2026-05-29: Visual Analysis Later

Decision: Defer Google/Vertex multimodal embeddings and video/image analysis to
Phase 3.

Reason: The AI media layer will be more valuable after the portal has real media
capture patterns and enough service images/videos to analyze. Deferring it keeps
the first build faster and cheaper.

Impact: Phase 1 may reserve space for future photo/video upload and review, but
it should not require paid embedding infrastructure to work.

## 2026-05-29: Drive Manifest As Asset Access Layer

Decision: Use `src/data/tbt-onboarding-asset-hub.json` as the app-facing asset
inventory.

Reason: TBT wants one controlled access point. The app should expose the curated
hub and section structure instead of scattered source folders.

Impact: Agents should update the manifest when hub structure changes, then render
UI from the manifest.

## 2026-05-29: Missing Assets Are Follow-Ups

Decision: Missing logo package and editable trailer art do not block the service
catalog or portal implementation.

Reason: The available Drive source package is enough to build the core portal,
service catalog, training links, marketing links, and admin warning states.

Impact: The app should visibly flag missing logo/trailer assets in admin and
resource views while allowing the rest of the portal to ship.
