# CLAUDE.md

Rules to obey when working in this repository. This file is behavior;
`OVERVIEW.md` is the map of what exists. Read OVERVIEW.md for orientation,
obey this file for conduct. If a rule here conflicts with a pattern you see
in the code, this file wins — surface the conflict, don't silently follow
the code.

## Project root — read this first

The real project root is `my-portfolio/`, NOT the outer repo root. The outer
root contains only that subfolder and `.claude/`. Every npm command runs from
inside `my-portfolio/`. If a command fails with "no package.json," you are in
the wrong directory.

Stack: Vite + React 19 + TypeScript, react-router-dom v7 (`BrowserRouter`),
framer-motion, react-icons. Personal portfolio SPA, four routes, all content
static.

## Deployment — violating these breaks the live site

Production is a manual upload of `dist/` over FTP to an Apache host. There is
no CI, no server runtime, no build step on the host. **A broken build ships
silently — nothing catches it but you.**

- No SSR, API routes, serverless functions, or anything needing a runtime.
- `base` in `vite.config.ts` is intentionally left unset/commented — the site
  deploys at domain root. Do not change it, do not "fix" it.
- Client-side routing works in production via the Apache rewrite in
  `public/.htaccess`. `BrowserRouter` is correct. Do NOT migrate to
  `HashRouter` — that rewrite already handles deep links.
- No runtime environment variables. The codebase currently reads zero env
  vars. Anything added to `.env` is inlined into the public bundle at build
  time. Never put a secret there; if a task seems to need one, stop and ask.
- Never commit `dist/`.

## Do not touch

**`public/`** — never modify, rename, move, or delete anything inside it.
It holds `.htaccess` (deployment-critical routing), the resume PDF, and
favicons. Editing it can take the live site down.

**`src/assets/`** — never modify. One carve-out: you may DELETE files here
if I have explicitly named them in that message. Never add, rename, or edit.

If a task appears to require changing either, stop and tell me what you'd
need to change and why. Do not work around it by creating a parallel folder.

**`src/components/background/splashCursor.tsx`** — ~1500 lines of vendored
WebGL fluid-simulation code. Treat as a black box. Do not refactor, rename
variables in, reformat, lint-fix, or "clean up" this file. It is exempt from
every code standard below. Touch it only to change the props/interface at its
boundary, and only if I ask directly.

## Styling — read before writing any CSS

The codebase uses **plain, co-located CSS files**: `Component/Component.tsx`
imports `./Component.css`. No CSS Modules, no CSS-in-JS, no theme variables.
Class names are kebab-case, loosely BEM-ish (`.portfolio-header`,
`.header-top`).

Tailwind v4 IS installed via `@tailwindcss/vite` and its utilities are
globally available. **This is legacy, not the pattern.** Do not add Tailwind
classes to existing components. New components use the co-located `.css`
file convention. Do not create a `tailwind.config.js`. If you think a task
genuinely calls for Tailwind, ask first.

Shared subpage styles live in `src/pages/SubPage.css` (Student, Developer,
Musician). Home has its own `Home.css`. Global reset and the fixed background
layer live in `src/index.css`.

There is no design-token file. Colors and spacing are hardcoded per CSS file.
Before introducing any new color or spacing value, grep neighboring CSS and
reuse an existing one. Do not invent a new shade.

## Content changes

`src/components/Data/data.ts` is the single source of truth for all
user-facing content. Never hardcode content into a page component.

**Known trap:** the Home-page preview arrays (`currentCourseHome`,
`projectsHome`, `musicianHome`) hand-duplicate entries from the full arrays
(`currentCourse`, `currentProjects`, `currentEnsembles`) rather than deriving
from them. Changing an entry in one does NOT update the other. Any content
edit must be checked against both. If you edit a full array, tell me whether
the matching `*Home` array also needs updating.

## Code standards

**Naming — non-negotiable** (exempt: `splashCursor.tsx`)

- No single-letter variable names. Ever. Not in loops, not in callbacks, not
  in `catch` blocks, not in map/filter/reduce.
  - `t` → `time`, `e` → `event` or `error`, `i` → `index`, `d` → `data`,
    `el` → `element`, `res` → `response`, `req` → `request`
  - Exception: TypeScript generic type parameters (`<T>`) are fine.
- Names describe the thing, not its type. `courseList` not `arr`.
- Booleans read as assertions: `isOpen`, `hasLink`, `showCursor`.
- Event handlers: `handleX`. Callback props: `onX`.

**Structure**

- Prefer object-oriented modeling where it earns its place: state plus
  behavior that belong together, logic repeated across call sites, or a
  domain concept with real invariants.
- Do NOT use classes for React components. Function components with hooks.
- Do NOT wrap a single pure function in a class.

**Existing conventions — match them**

- `export default function ComponentName()`. No named component exports.
- Props typed via a local `interface XProps` declared above the component.
- Relative imports (`../../components/...`). No path aliases are configured;
  do not add one without asking.
- Each component gets its own folder with a co-located `.css` file.

**TypeScript**

- Strict mode is on, including `noUnusedLocals` and `noUnusedParameters` —
  an unused variable is a build failure, not a warning.
- No `any`. If you can't type it, use `unknown`, narrow, and tell me.
- No non-null assertions (`!`) to silence the compiler. Handle the null case.
- Type props explicitly on every component.

## Workflow

- **Plan before editing.** Anything touching more than one file: state the
  plan — files, what changes in each — and wait. Single-file obvious fixes:
  just do it.
- **No new dependencies without asking.** Name the package, why, and the
  bundle cost. Prefer 30 lines of code over a package. Note: `three`,
  `@react-three/fiber`, and `@types/three` are already installed but
  completely unused — do not build on them assuming they're intentional.
- **No new files without asking**, unless an approved plan included them.
- **After any change, run `npm run build`.** It runs `tsc -b` before
  `vite build`, so it is the real type-check. A task is not done until the
  build passes. Run `npm run lint` too if you touched more than one file.
- **There are no tests.** Do not claim anything is "verified" or "tested."
  If a change needs manual checking in the browser, say exactly what to click.
- **Do not commit.** NO `git commit`, `git push`, `git checkout`, no staging.
  I handle version control.
- **Do not modify** `package.json`, `tsconfig*.json`, `vite.config.ts`,
  `eslint.config.js`, or `.htaccess` without flagging it as its own decision
  and waiting.
- **After any structural change** (files added/moved/deleted, new feature,
  new route), tell me OVERVIEW.md is now stale.

## Commands

Run from `my-portfolio/`.

| Command           | Use                                                         |
| ----------------- | ----------------------------------------------------------- |
| `npm run dev`     | Vite dev server                                             |
| `npm run build`   | `tsc -b` + `vite build` — must pass before any task is done |
| `npm run lint`    | ESLint flat config across the project                       |
| `npm run preview` | Serve built `dist/` locally to sanity-check before upload   |

Do not invent scripts. If a command you need doesn't exist, say so.

## Known gaps — do not "helpfully" fix these unasked

These are documented and intentional-until-I-say-otherwise. Fix only if I ask.

- `src/components/background/CursorToggle.tsx` is dead code and imports a
  nonexistent `./ThemeToggle.css`. It would break the build if imported.
- The Facebook link in `Header.tsx` is a placeholder `href="#"`.
- There is no 404/catch-all route; unmatched paths render an empty `<main>`.
- `key={index}` is used for all mapped lists.
- Several unused images and icons sit in `src/assets/` (see OVERVIEW.md §11).
- No Prettier config exists. Match surrounding file formatting; do not
  reformat files you aren't otherwise editing.

## Communication

- Terse. Show the diff, one line on what it does. No restating my request,
  no preamble about what you're about to do, no closing pleasantries.
- Flag uncertainty explicitly rather than picking silently. Two defensible
  options: name both in one line, pick one, move on.
- If you didn't do part of what I asked, say so plainly at the top. Never let
  an incomplete task read as complete.
