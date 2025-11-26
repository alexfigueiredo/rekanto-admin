# Repository Guidelines

## Project Structure & Module Organization
- Source lives in `src/app`; `layout.tsx` wires shared providers and `globals.css`, while `page.tsx` is the main entry. Add route segments as folders (e.g., `src/app/dashboard/page.tsx`).
- Use colocated styles like `page.module.css` for route-scoped CSS. Global tokens and resets belong in `globals.css`.
- Static assets belong in `public/` and are served from the root (`/images/foo.png`).
- Radix Themes is applied in `src/app/layout.tsx` via the `<Theme>` wrapper; global theme styles are imported once with `@radix-ui/themes/styles.css` (do not re-import per page).

## Build, Test, and Development Commands
- Install deps with `bun install` (preferred) or `npm install`.
- Start dev server: `bun run dev` → Next.js at http://localhost:3000.
- Production build: `bun run build`; serve locally with `bun run start`.
- Lint/format: `bun run lint` (Biome check) and `bun run format` (Biome write).

## Coding Style & Naming Conventions
- TypeScript-first. Prefer explicit types at module boundaries and React component props.
- Always import types with the `type` keyword, and import React types from `react` instead of relying on the global UMD React object.
- Formatting enforced by Biome (2-space indent, semicolons off by default). Run lint/format before commits.
- Components and hooks: PascalCase (`UserCard.tsx`), hooks start with `useX`. CSS modules match the route (`page.module.css`).
- Keep React components small and server-first where possible; favor server components unless client hooks are required. Use Radix layout primitives (e.g., `Flex`, `Grid`, `Box`) instead of custom divs when possible.
- Build UI with Radix Themes components; nest Next.js links inside Radix buttons using `asChild` to avoid invalid anchors. Prefer Radix design tokens (colors, spacing, radii, fonts) via CSS variables when styling.
- Icons come from `lucide-react`; import named icons per usage (tree-shaken) inside client components.

## Testing Guidelines
- Bun is the test runner; run suites with `bun test`. Prefer colocated `*.test.tsx` or `src/__tests__/` for broader coverage.
- Use descriptive test names (`it('renders error state')`) and keep fixtures in `__fixtures__` alongside tests.
- Aim for meaningful coverage on data transforms and client components; snapshot sparingly.

## Commit & Pull Request Guidelines
- Git history is minimal; follow short, imperative subjects (`Add dashboard route`) with optional scope (`feat: add dashboard route`).
- Keep commits focused and runnable; include lint/format in the same change.
- Before committing, run `bun test`, `bun run lint`, and `bun run format` to keep CI green and consistent.
- Pull requests should describe the change, testing performed (`bun run lint`, manual flows), and screenshots/recordings for UI updates. Link issues when available.
- When adding core libraries (routing, state, data, UI, auth), update both `README.md` and `AGENTS.md` with usage notes and commands.

## Security & Configuration Tips
- Store secrets in `.env.local`; never commit `.env*` files. Use Next.js `process.env.MY_KEY` in server components only.
- Review `next.config.ts` before adding plugins; prefer framework defaults to reduce surface area.
