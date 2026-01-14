# Copilot instructions — Heardle Base

Short, actionable guidance for AI coding agents working in this repo.

1. Big picture
- This is a client-only Vue 3 + Vite single-page app. Entry points: `index.html`, `src/main.js`, and `src/App.vue`.
- Major surface: UI components in `src/components` (grouped by feature), audio players in `src/players` (player interface + implementations), and runtime settings in `src/settings`.
- Audio integrations: `src/players/PlayerBase.ts` defines the player contract; implementations are `SoundcloudPlayer.ts` and `YoutubePlayer.ts`. Use that contract when adding players or switching playback logic.

2. Developer workflows (explicit commands)
- Install: `npm install` (see README).
- Dev server (hot reload): `npm run dev` (uses Vite).
- Expose host for device testing: `npm run dev-host`.
- Build for production: `npm run build`.
- Preview production build: `npm run preview`.

3. Project-specific conventions & patterns
- File layout: component features grouped inside `src/components` (example: `Modals/` for modal components, `icons/` for small SVG-based Vue icon components).
- Component naming: Single-file components use PascalCase filenames (e.g., `MainGame.vue`, `GuessBar.vue`) and are intended to be imported by name.
- Styling: global CSS lives in `src/assets` (`base.css`, `main.css`). Prefer existing classes rather than adding inline styles.
- Config files: runtime content (music list, settings, themes) is JSON under `src/settings` — e.g., to add songs update `src/settings/music.json`.
- TypeScript: only the player layer uses `.ts` files (`src/players`). Treat `PlayerBase.ts` as the interface to satisfy.

4. Integration points & cross-component communication
- Playback control: components trigger playback via whatever player instance is wired through `MainGame.vue` / `TransportBar.vue`. Search for `PlayerBase` to find usage sites.
- Shared state: the app is small and uses local component props/emits — check `MainGame.vue` for the top-level game state and how it passes props to `GuessBar`, `TransportBar`, and `EndGame`.

5. Where to make common changes (examples)
- Add a new track source: update `src/settings/music.json` and ensure a player exists in `src/players` that can load it.
- Update UI copy: edit the relevant component in `src/components` (e.g., header text in `Header.vue`).
- Add an icon: create a new component in `src/components/icons` following existing icon components.

6. Helpful code-search patterns
- Find playback hooks: search for `PlayerBase`, `play`, `pause`, `seek` in `src/players` and `src/components`.
- Find settings: open `src/settings/*.json`.
- Find component wiring: search imports of `MainGame.vue` and `App.vue` to trace prop chains.

7. Do / Don't (concrete)
- Do: preserve the `PlayerBase` contract when changing playback logic — other components expect it.
- Do: use `npm run dev-host` when testing on other devices.
- Don't: add build scripts that deviate from Vite without updating `package.json` and README.

If anything here is unclear or you want deeper examples (component prop flow, player contract methods), tell me which area and I'll expand with code snippets and file links.
