# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page marketing/landing-page app ("Startuperio") built with Vite, React 18, TypeScript, and Tailwind CSS 3. It currently renders one animated hero section (`Hero31`). There is no backend, router, state management, or test framework — the app is a static front-end driven entirely by Vite.

## Commands

```bash
npm run dev       # Start the Vite dev server (http://localhost:5173, falls back to 5174 if in use)
npm run build     # Type-check with `tsc -b` then produce a production bundle in dist/
npm run preview   # Serve the built dist/ bundle locally
```

There are no lint or test scripts. `npm run build` is the only validation step (it runs `tsc -b` with `strict`, `noUnusedLocals`, and `noUnusedParameters` enabled, so unused imports/vars fail the build).

## Architecture

- **`src/main.tsx`** — React entry point; mounts `<App />` into `#root` inside `<StrictMode>`, imports `src/index.css`.
- **`src/App.tsx`** — Renders `<Demo />` (the only page).
- **`components/ui/`** — Reusable UI components. `index.tsx` exports the `Hero31` hero section; `demo.tsx` (`Demo`) is a wrapper that renders `Hero31` with concrete props. New visual components belong here.
- **`src/assets/`** — Local assets like the `LogoIcon` SVG component.
- **`src/index.css`** — Tailwind directives only (`@tailwind base/components/utilities`) plus a full-height root reset. No custom utility classes or theme tokens are defined here.

### Module resolution / aliases

`vite.config.ts` and `tsconfig.json` define two path aliases, so imports must use them rather than relative paths:
- `@/...` → `./src/*`
- `@/components/...` → `./components/*`

Example: `import Demo from '@/components/ui/demo'` and `import LogoIcon from '@/assets/logo-icon'`.

### Styling

Tailwind 3 with PostCSS/autoprefixer. The Tailwind config scans `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`, and `./components/**/*.{js,ts,jsx,tsx}`. Arbitrary values (e.g. `shadow-[inset_0_2px_0px_...]`) are used heavily for one-off styling. The only theme extension is `fontFamily` (`sans: Inter`, `serif: Georgia`).

### Animation approach

The `Hero31` component uses the **`motion`** library (the `motion/react` entry point, v11). Entrance animations are built from `motion` + `AnimatePresence` with timed `Variants` (container/item stagger patterns with `delayChildren` offsets). `lucide-react` provides the icon set. Animations are orchestrated purely via these variants — there is no global animation config or provider.

### Component conventions

`Hero31` is a controlled, prop-driven component: all visible text and the `backgroundImage` URL are optional props with defaults (currently the "Watermelon" demo content). Keep components prop-driven and defaulted this way so `Demo`/future pages can compose different content without forking the component.
