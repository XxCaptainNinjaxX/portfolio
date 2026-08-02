# Portfolio — Repository Overview

> Canonical map of this repository. Written for a fresh Claude Code session with no prior context, and for the repo owner returning after time away. All claims below cite the file they were verified against.

## 1. What This Is

This is Robert Rodriguez's personal portfolio website — a single-page React application presenting him across three facets: Student, Developer, and Musician ([my-portfolio/src/App.tsx](my-portfolio/src/App.tsx), [my-portfolio/src/components/Data/data.ts](my-portfolio/src/components/Data/data.ts)). The `README.md` lists a live deployment at `https://robriguez.com/` ([my-portfolio/README.md](my-portfolio/README.md)). Content (current/past courses, projects, and music ensembles) is hand-authored data, not pulled from any external API ([my-portfolio/src/components/Data/data.ts](my-portfolio/src/components/Data/data.ts)). The project is **in-progress/shipped**: it is a working, deployed SPA, but contains leftover dead code and unused assets (see §11), and course data reflects a specific in-progress semester ("Current Courses (Spring 2026)" in [my-portfolio/src/pages/Student/Student.tsx:34](my-portfolio/src/pages/Student/Student.tsx)), meaning content needs periodic manual updates.

The actual project root is the `my-portfolio/` subfolder — the outer repo root (`c:\Users\capta\OneDrive\Desktop\portfolio`) contains only that subfolder plus an untracked `.claude/` directory; there is no code at the true repo root.

## 2. Stack & Tooling

| Layer | Technology | Version | Where configured |
|---|---|---|---|
| Framework | React (SPA, client-side routing) | ^19.2.0 | [my-portfolio/package.json](my-portfolio/package.json) |
| Router | react-router-dom (`BrowserRouter`) | ^7.12.0 | [my-portfolio/src/main.tsx](my-portfolio/src/main.tsx), [my-portfolio/src/App.tsx](my-portfolio/src/App.tsx) |
| Language | TypeScript | ~5.9.3 | [my-portfolio/tsconfig.json](my-portfolio/tsconfig.json), [my-portfolio/tsconfig.app.json](my-portfolio/tsconfig.app.json), [my-portfolio/tsconfig.node.json](my-portfolio/tsconfig.node.json) |
| Build tool | Vite | ^7.2.4 | [my-portfolio/vite.config.ts](my-portfolio/vite.config.ts) |
| Styling | Tailwind CSS (via `@tailwindcss/vite` plugin) + plain co-located CSS files | ^4.1.18 | [my-portfolio/vite.config.ts](my-portfolio/vite.config.ts) (no separate `tailwind.config.js`/`postcss.config.js` exists — Tailwind v4 configures itself through the Vite plugin) |
| Animation | framer-motion | ^12.29.0 | used in [my-portfolio/src/components/background/Animation.tsx](my-portfolio/src/components/background/Animation.tsx), [my-portfolio/src/components/Pop-up/Pop-up.tsx](my-portfolio/src/components/Pop-up/Pop-up.tsx) |
| Icons | react-icons | ^5.5.0 | [my-portfolio/src/components/Header/Header.tsx](my-portfolio/src/components/Header/Header.tsx) |
| Declared but unused | three, @react-three/fiber, @types/three | ^0.182.0 / ^9.5.0 | listed in [my-portfolio/package.json](my-portfolio/package.json); no import of either package found anywhere in `src/` |
| Lint | ESLint flat config (js recommended + typescript-eslint + react-hooks + react-refresh) | eslint ^9.39.1 | [my-portfolio/eslint.config.js](my-portfolio/eslint.config.js) |
| Format | UNVERIFIED: no Prettier config file found in the repo; formatting conventions are whatever the editor/author applied manually |
| Package manager | npm | — | [my-portfolio/package-lock.json](my-portfolio/package-lock.json) present; no yarn.lock/pnpm-lock |
| Deploy target | Apache-hosted static SPA (mod_rewrite fallback to index.html) | — | [my-portfolio/public/.htaccess](my-portfolio/public/.htaccess) |
| External services | None (no backend, no API routes, no auth, no analytics found in source) | — | confirmed by reading all `src/pages` and `src/components` |

## 3. Directory Map

```
portfolio/                          # outer repo root — contains only the project subfolder
└── my-portfolio/                   # actual project root
    ├── public/                     # static assets served as-is at the site root (favicons, manifest, resume PDF, .htaccess)
    └── src/
        ├── main.tsx                # React root entry; wraps <App/> in <BrowserRouter>
        ├── App.tsx                 # top-level layout, route table, PopupProvider, splash-cursor toggle state
        ├── index.css                # global reset + fixed background-image layer
        ├── assets/
        │   ├── icons/               # PNG skill/course icons + a license PDF + one unrelated backup.txt file; rule: any small icon referenced by src/components/Data/data.ts or a page lives here
        │   └── images/               # JPG/PNG photos referenced by data.ts or pages (hero photo, ensemble/project photos, background images); several files here are unused (see §11)
        ├── components/               # reusable, non-route-specific UI pieces; each lives in its own folder with a co-located .css file
        │   ├── Card/                 # generic clickable image+caption card that opens the global popup
        │   ├── Data/                 # data.ts — the single source of truth for all page content arrays
        │   ├── Header/               # site-wide nav bar / header
        │   ├── PageHeader/           # small reusable <h2> section-title wrapper used on subpages
        │   ├── Pop-up/               # modal component + React Context/provider that renders it globally
        │   ├── ScrollToTop/          # route-change scroll-reset utility, no UI
        │   ├── Waves/                # decorative inline-SVG section dividers used on Home
        │   └── background/           # full-viewport visual effects (fade-in-on-scroll wrapper, WebGL cursor trail, one dead toggle component)
        └── pages/                    # one folder per route, each with its own .tsx + (for subpages) shared SubPage.css
            ├── Home/                 # "/" — landing page combining hero, skills strip, and preview sections for the other three pages
            ├── Student/              # "/student"
            ├── Developer/            # "/developer"
            ├── Musician/             # "/musician"
            └── SubPage.css           # shared grid/intro styles for Student, Developer, Musician (not Home, which has its own Home.css)
```

## 4. Feature Inventory

### Home hero / name intro
What it does: Displays the name "Robert Rodriguez" split across two lines next to a clickable hero photo; clicking the photo opens a full-screen image lightbox (ESC or overlay-click to close).
Entry point: [my-portfolio/src/pages/Home/Home.tsx:51-69](my-portfolio/src/pages/Home/Home.tsx)
Supporting files: [my-portfolio/src/pages/Home/Home.css](my-portfolio/src/pages/Home/Home.css), image `src/assets/images/main1.jpg`
Data source: static (hardcoded JSX + one imported image)
Current state: complete

### Home skills strip
What it does: Row of technology icons (HTML, CSS, Tailwind, JS, React, Java, Figma, Git) between `<skills>`/`</skills>` code-style tags.
Entry point: [my-portfolio/src/pages/Home/Home.tsx:71-94](my-portfolio/src/pages/Home/Home.tsx)
Supporting files: local PNGs in `src/assets/icons/png/`, external SVGs from `cdn.jsdelivr.net/gh/devicons/devicon`
Data source: static, hardcoded list of `<img>` tags (not driven by data.ts)
Current state: complete

### Home category preview sections (Student/Developer/Musician teasers)
What it does: Three scroll-reveal sections on the Home page, each showing a Card grid of a subset of content (courses, projects, ensembles) and linking to the corresponding full subpage.
Entry point: [my-portfolio/src/pages/Home/Home.tsx:99-165](my-portfolio/src/pages/Home/Home.tsx)
Supporting files: [my-portfolio/src/components/background/Animation.tsx](my-portfolio/src/components/background/Animation.tsx) (Reveal), [my-portfolio/src/components/Card/Card.tsx](my-portfolio/src/components/Card/Card.tsx), [my-portfolio/src/components/Waves/DownWaves.tsx](my-portfolio/src/components/Waves/DownWaves.tsx)/[UpWaves.tsx](my-portfolio/src/components/Waves/UpWaves.tsx), data arrays `currentCourseHome`/`projectsHome`/`musicianHome` in [my-portfolio/src/components/Data/data.ts:208-266](my-portfolio/src/components/Data/data.ts)
Data source: static (data.ts arrays)
Current state: complete

### Student page
What it does: Full page listing current (Spring 2026), next-semester (Fall 2026), and past courses as Card grids, each opening a popup with course code and description; includes an intro bio paragraph.
Entry point: [my-portfolio/src/pages/Student/Student.tsx](my-portfolio/src/pages/Student/Student.tsx)
Supporting files: [my-portfolio/src/pages/SubPage.css](my-portfolio/src/pages/SubPage.css), [my-portfolio/src/components/PageHeader/PageHeader.tsx](my-portfolio/src/components/PageHeader/PageHeader.tsx), [my-portfolio/src/components/Card/Card.tsx](my-portfolio/src/components/Card/Card.tsx), data arrays `currentCourse`/`nextCourses`/`pastCourses` in [my-portfolio/src/components/Data/data.ts:98-204](my-portfolio/src/components/Data/data.ts)
Data source: static (data.ts)
Current state: complete (content is time-bound and will need manual updates as semesters change)

### Developer page
What it does: Full page listing current and past software projects as Card grids, each opening a popup with description and an outbound link to the live project; includes an intro paragraph.
Entry point: [my-portfolio/src/pages/Developer/Developer.tsx](my-portfolio/src/pages/Developer/Developer.tsx)
Supporting files: [my-portfolio/src/pages/SubPage.css](my-portfolio/src/pages/SubPage.css), [my-portfolio/src/components/PageHeader/PageHeader.tsx](my-portfolio/src/components/PageHeader/PageHeader.tsx), [my-portfolio/src/components/Card/Card.tsx](my-portfolio/src/components/Card/Card.tsx), data arrays `currentProjects`/`pastProjects` in [my-portfolio/src/components/Data/data.ts:27-49](my-portfolio/src/components/Data/data.ts)
Data source: static (data.ts)
Current state: complete. Note: one "past project" entry is this portfolio site itself, linking to `/` ([my-portfolio/src/components/Data/data.ts:37-42](my-portfolio/src/components/Data/data.ts))

### Musician page
What it does: Full page listing current and past music ensembles as Card grids, each opening a popup with description and (for some entries) a link to a video/photo; includes an intro paragraph and an Instagram link.
Entry point: [my-portfolio/src/pages/Musician/Musician.tsx](my-portfolio/src/pages/Musician/Musician.tsx)
Supporting files: [my-portfolio/src/pages/SubPage.css](my-portfolio/src/pages/SubPage.css), [my-portfolio/src/components/PageHeader/PageHeader.tsx](my-portfolio/src/components/PageHeader/PageHeader.tsx), [my-portfolio/src/components/Card/Card.tsx](my-portfolio/src/components/Card/Card.tsx), data arrays `currentEnsembles`/`pastEnsembles` in [my-portfolio/src/components/Data/data.ts:53-94](my-portfolio/src/components/Data/data.ts)
Data source: static (data.ts)
Current state: complete. One entry (EHS Marching Band) uses an optional `popupImage` override distinct from its grid thumbnail ([my-portfolio/src/components/Data/data.ts:88-93](my-portfolio/src/components/Data/data.ts))

### Global popup/modal system
What it does: Clicking any Card opens a shared, app-wide animated modal (title, description, linked image, close button); closes on ESC key or overlay click. Implemented as React Context so any component can trigger it via `usePopup()`.
Entry point: [my-portfolio/src/components/Pop-up/Pop-upContext.tsx](my-portfolio/src/components/Pop-up/Pop-upContext.tsx)
Supporting files: [my-portfolio/src/components/Pop-up/Pop-up.tsx](my-portfolio/src/components/Pop-up/Pop-up.tsx), [my-portfolio/src/components/Pop-up/Pop-up.css](my-portfolio/src/components/Pop-up/Pop-up.css), [my-portfolio/src/components/Card/Card.tsx](my-portfolio/src/components/Card/Card.tsx)
Data source: props passed at call time
Current state: complete

### Site header / navigation
What it does: Sticky header with logo/name/tagline, a "Contact Me" mailto link, nav links to all four routes, a Facebook icon link (placeholder, `href="#"`), a LinkedIn icon link, a Resume download link, and a checkbox to toggle the splash-cursor effect.
Entry point: [my-portfolio/src/components/Header/Header.tsx](my-portfolio/src/components/Header/Header.tsx)
Supporting files: [my-portfolio/src/components/Header/Header.css](my-portfolio/src/components/Header/Header.css)
Data source: static, hardcoded (not from data.ts)
Current state: partial — Facebook link is a non-functional placeholder ([my-portfolio/src/components/Header/Header.tsx:53-61](my-portfolio/src/components/Header/Header.tsx))

### Resume download
What it does: Downloads a PDF resume via a direct link/`download` attribute on the header's "Resume" button.
Entry point: [my-portfolio/src/components/Header/Header.tsx:72-80](my-portfolio/src/components/Header/Header.tsx)
Supporting files: `my-portfolio/public/Roberto Rodriguez's Resume.pdf`
Data source: static file
Current state: complete

### Splash-cursor visual effect (WebGL fluid simulation)
What it does: Full-screen, mouse/touch-reactive fluid-simulation background effect rendered behind all page content; can be toggled on/off via the Header checkbox (on by default).
Entry point: [my-portfolio/src/components/background/splashCursor.tsx](my-portfolio/src/components/background/splashCursor.tsx)
Supporting files: rendered conditionally from [my-portfolio/src/App.tsx:17-29](my-portfolio/src/App.tsx), toggled from [my-portfolio/src/components/Header/Header.tsx:83-94](my-portfolio/src/components/Header/Header.tsx)
Data source: n/a (self-contained WebGL2 canvas component, ~1500 lines, ported fluid-sim algorithm)
Current state: complete and wired up

### Scroll-to-top on navigation
What it does: Resets window scroll position to the top whenever the route changes.
Entry point: [my-portfolio/src/components/ScrollToTop/ScrollToTop.tsx](my-portfolio/src/components/ScrollToTop/ScrollToTop.tsx)
Supporting files: mounted in [my-portfolio/src/App.tsx:25](my-portfolio/src/App.tsx)
Data source: n/a
Current state: complete

### Dead/unused: `ThemeToggle` component
What it does (as written): A standalone checkbox-toggle UI component, functionally near-identical to the inline toggle already built into Header.
Entry point: [my-portfolio/src/components/background/CursorToggle.tsx](my-portfolio/src/components/background/CursorToggle.tsx)
Supporting files: imports `./ThemeToggle.css`, which does **not exist** in the repo
Data source: n/a
Current state: **broken/stubbed** — not imported anywhere in the app; would fail to build if ever imported, since its CSS file is missing

## 5. Routes / Pages

| Route | File path | Purpose | Dynamic params | Notes |
|---|---|---|---|---|
| `/` | [my-portfolio/src/pages/Home/Home.tsx](my-portfolio/src/pages/Home/Home.tsx) | Landing page: hero, skills, preview sections for the other three pages | none | |
| `/student` | [my-portfolio/src/pages/Student/Student.tsx](my-portfolio/src/pages/Student/Student.tsx) | Full course listing (current/next/past) | none | |
| `/developer` | [my-portfolio/src/pages/Developer/Developer.tsx](my-portfolio/src/pages/Developer/Developer.tsx) | Full project listing (current/past) | none | |
| `/musician` | [my-portfolio/src/pages/Musician/Musician.tsx](my-portfolio/src/pages/Musician/Musician.tsx) | Full ensemble listing (current/past) | none | |

Route table defined in [my-portfolio/src/App.tsx:35-40](my-portfolio/src/App.tsx). There is **no catch-all/404 route** — an unmatched path renders nothing inside `<Routes>`. Client-side routing depends on the Apache rewrite rule in [my-portfolio/public/.htaccess](my-portfolio/public/.htaccess) to serve `index.html` for any non-file path in production.

## 6. Shared Components & Utilities

| Name | Path | Used by | Purpose |
|---|---|---|---|
| `Card` | [my-portfolio/src/components/Card/Card.tsx](my-portfolio/src/components/Card/Card.tsx) | Home.tsx, Student.tsx, Developer.tsx, Musician.tsx | Clickable image+caption tile; opens the global popup on click via `usePopup()` |
| `Header` | [my-portfolio/src/components/Header/Header.tsx](my-portfolio/src/components/Header/Header.tsx) | App.tsx | Site-wide nav/header, rendered once above all routes |
| `PageHeader` | [my-portfolio/src/components/PageHeader/PageHeader.tsx](my-portfolio/src/components/PageHeader/PageHeader.tsx) | Student.tsx, Developer.tsx, Musician.tsx | Renders a section `<h2>{title}</h2>` |
| `Modal` (Pop-up) + `PopupProvider`/`usePopup` | [my-portfolio/src/components/Pop-up/Pop-up.tsx](my-portfolio/src/components/Pop-up/Pop-up.tsx), [my-portfolio/src/components/Pop-up/Pop-upContext.tsx](my-portfolio/src/components/Pop-up/Pop-upContext.tsx) | App.tsx (provider wraps the whole app); Card.tsx (consumer) | Global modal/detail popup triggered from any Card |
| `ScrollToTop` | [my-portfolio/src/components/ScrollToTop/ScrollToTop.tsx](my-portfolio/src/components/ScrollToTop/ScrollToTop.tsx) | App.tsx | Resets scroll on route change |
| `Reveal` (default export of Animation.tsx) | [my-portfolio/src/components/background/Animation.tsx](my-portfolio/src/components/background/Animation.tsx) | Home.tsx (3 sections) | Framer-motion fade/slide-in-on-scroll wrapper |
| `DownWaves` / `UpWaves` | [my-portfolio/src/components/Waves/DownWaves.tsx](my-portfolio/src/components/Waves/DownWaves.tsx), [UpWaves.tsx](my-portfolio/src/components/Waves/UpWaves.tsx) | Home.tsx (multiple places) | Static decorative SVG section dividers |
| `SplashCursor` | [my-portfolio/src/components/background/splashCursor.tsx](my-portfolio/src/components/background/splashCursor.tsx) | App.tsx | Full-screen WebGL cursor-trail effect |
| `data.ts` exports (`currentProjects`, `pastProjects`, `currentEnsembles`, `pastEnsembles`, `currentCourse`, `nextCourses`, `pastCourses`, `currentCourseHome`, `projectsHome`, `musicianHome`) | [my-portfolio/src/components/Data/data.ts](my-portfolio/src/components/Data/data.ts) | Home.tsx, Student.tsx, Developer.tsx, Musician.tsx | Single source of truth for all page content |

`CursorToggle`/`ThemeToggle` ([my-portfolio/src/components/background/CursorToggle.tsx](my-portfolio/src/components/background/CursorToggle.tsx)) is **not** included above because it is unused (see §4, §11).

## 7. Styling System

- **Global styles**: [my-portfolio/src/index.css](my-portfolio/src/index.css) — sets `html`/`body` base styles (font-family `Elms Sans`, dark `#242424` background), defines `.app-container`, a fixed full-viewport `.background-layer` using `src/assets/images/bg2.jpg`, and `.content-layer` for stacking above it via `z-index`.
- **Theming mechanism**: no CSS-variable theme file, no dark/light mode switch, no CSS-in-JS, no `.module.css` files anywhere in the repo. Styling is entirely plain CSS files co-located with their component/page, imported directly (e.g. `import "./Header.css"` in [my-portfolio/src/components/Header/Header.tsx:3](my-portfolio/src/components/Header/Header.tsx)), plus ad hoc Tailwind utility classes available via the `@tailwindcss/vite` plugin ([my-portfolio/vite.config.ts:7](my-portfolio/vite.config.ts)) — no dedicated Tailwind config file exists to inspect for customized tokens.
- **Naming convention**: BEM-ish/kebab-case class names per component (e.g. `.portfolio-header`, `.header-top`, `.contact-info` in [my-portfolio/src/components/Header/Header.css](my-portfolio/src/components/Header/Header.css)); not strictly enforced (see §10).
- **Fonts**: loaded via Google Fonts `<link>` tags in [my-portfolio/index.html:10-21](my-portfolio/index.html) — Comfortaa, Elms Sans, Inter, Slabo 13px. `index.css` applies `Elms Sans` globally.
- **Design tokens**: no dedicated tokens file (no `theme.ts`/`tokens.css`/Tailwind config with custom colors). Colors and spacing are hardcoded per-component CSS file (UNVERIFIED: exact palette/spacing scale, since no single source of truth exists — would require reading every `.css` file individually to enumerate).
- Shared page-level styles for the three subpages live in [my-portfolio/src/pages/SubPage.css](my-portfolio/src/pages/SubPage.css) (imported by Student.tsx, Developer.tsx, Musician.tsx); Home has its own [my-portfolio/src/pages/Home/Home.css](my-portfolio/src/pages/Home/Home.css).

## 8. Configuration & Environment

| Config file | Path | Controls |
|---|---|---|
| Vite config | [my-portfolio/vite.config.ts](my-portfolio/vite.config.ts) | React + Tailwind Vite plugins; `server.allowedHosts: true`; commented-out `base` path for subpath deploys |
| TypeScript (solution) | [my-portfolio/tsconfig.json](my-portfolio/tsconfig.json) | References app/node configs |
| TypeScript (app) | [my-portfolio/tsconfig.app.json](my-portfolio/tsconfig.app.json) | ES2022 target, `react-jsx`, strict mode, `noUnusedLocals`/`noUnusedParameters` |
| TypeScript (node) | [my-portfolio/tsconfig.node.json](my-portfolio/tsconfig.node.json) | Compiler options for `vite.config.ts` itself |
| ESLint | [my-portfolio/eslint.config.js](my-portfolio/eslint.config.js) | Flat config: JS recommended, typescript-eslint recommended, react-hooks recommended, react-refresh vite preset; ignores `dist` |
| Apache rewrite | [my-portfolio/public/.htaccess](my-portfolio/public/.htaccess) | SPA fallback routing for the Apache-hosted production deployment |
| Git ignore | [my-portfolio/.gitignore](my-portfolio/.gitignore) | Excludes `node_modules`, `dist`, `dist-ssr`, `Portfolio_Build.zip`, logs, editor dirs (implies a manual zip-based build/deploy step exists outside plain `vite build`) |

**Environment variables**: none. Grepped for `process.env` and `import.meta.env` across `my-portfolio/src/` — no matches found in any source file.

## 9. Commands

| Command | What it does | When to use it |
|---|---|---|
| `npm run dev` | Starts the Vite dev server | Local development |
| `npm run build` | Runs `tsc -b` (type-check/build references) then `vite build` | Producing a production `dist/` bundle |
| `npm run lint` | Runs ESLint across the project | Before committing / checking code quality |
| `npm run preview` | Serves the built `dist/` output locally | Sanity-checking a production build before deploy |

Source: [my-portfolio/package.json:6-11](my-portfolio/package.json). All commands must be run from inside `my-portfolio/`, not the outer repo root.

## 10. Conventions Observed

- **Component structure**: every component/page lives in its own folder with a co-located `.css` file of the same base name, imported at the top of the `.tsx` file (e.g. `Card/Card.tsx` + `Card/Card.css`). Applied consistently except pages, where Student/Developer/Musician share one `SubPage.css` instead of individual files ([my-portfolio/src/pages/SubPage.css](my-portfolio/src/pages/SubPage.css)), while Home has its own ([my-portfolio/src/pages/Home/Home.css](my-portfolio/src/pages/Home/Home.css)) — inconsistent by design (shared vs. page-specific), not an oversight.
- **Default exports**: all components use `export default function ComponentName(...)`, consistently.
- **Props typing**: each component declares a local `interface XProps`/`interface xProp` above the component, consistently (see Card.tsx, Header.tsx, Pop-up.tsx, PageHeader.tsx).
- **Import style**: relative imports throughout (`../../components/...`), no path aliases configured in `tsconfig.app.json`.
- **File naming inconsistency**: most component folders are PascalCase (`Card`, `Header`) but `Pop-up` uses a hyphen, and its default export inside `Pop-up.tsx` is named `Modal` while the folder/file is called "Pop-up" — naming is not fully consistent between file name and exported symbol.
- **Data-driven content pattern**: every subpage imports typed arrays from `src/components/Data/data.ts` rather than defining content inline; Home.tsx reuses a curated subset of the same arrays (`*Home` variants) rather than slicing the full arrays at render time — this duplicates data between e.g. `currentProjects`/`projectsHome` ([my-portfolio/src/components/Data/data.ts:27-34](my-portfolio/src/components/Data/data.ts) vs. [232-238](my-portfolio/src/components/Data/data.ts)) instead of deriving one from the other.
- **`key={index}`** is used for all `.map()`-rendered lists (Card grids) rather than a stable unique id — consistent across Home/Student/Developer/Musician.

## 11. Known Gaps

- **Dead component**: [my-portfolio/src/components/background/CursorToggle.tsx](my-portfolio/src/components/background/CursorToggle.tsx) imports `./ThemeToggle.css`, which does not exist anywhere in the repo, and the component is never imported by any other file — it is unused and would fail to build if it were ever wired in.
- **Unused dependencies**: `three`, `@react-three/fiber`, `@types/three` are declared in [my-portfolio/package.json](my-portfolio/package.json) but no import of either package appears anywhere in `my-portfolio/src/`.
- **Non-functional link**: the Facebook icon in Header links to `href="#"` rather than a real profile ([my-portfolio/src/components/Header/Header.tsx:53-61](my-portfolio/src/components/Header/Header.tsx)).
- **No 404/catch-all route**: an unmatched client-side path renders an empty `<main>` since `<Routes>` in [my-portfolio/src/App.tsx:35-40](my-portfolio/src/App.tsx) has no wildcard route.
- **Unused image assets** present in `my-portfolio/src/assets/images/` but not imported by any `.tsx`/`.ts` file: `bg1.jpg`, `bg3.jpg` (only `bg2.jpg` is used, in [my-portfolio/src/index.css:25](my-portfolio/src/index.css)), `main2.jpg` (only `main1.jpg` is used, in [my-portfolio/src/pages/Home/Home.tsx:22](my-portfolio/src/pages/Home/Home.tsx)), `one.jpg`, `two.jpg`, `three.jpg`, `four.jpg`, `jazzEnsTitles.jpg`, `LearneantSketch.jpg`.
- **Unused icon assets**: `my-portfolio/src/assets/icons/png/html-5.png`, `atom.png`, and `typescript.png` are not imported anywhere in `src/` (Home.tsx's HTML5 icon comes from an external CDN URL instead — [my-portfolio/src/pages/Home/Home.tsx:75-77](my-portfolio/src/pages/Home/Home.tsx)).
- **Leftover non-app file**: `my-portfolio/src/assets/icons/backup.txt` is a large base64-like blob (appears to be an exported bookmark/icon-collection dump), unrelated to any imported asset.
- **Unused default Vite asset**: `my-portfolio/public/vite.svg` is the stock Vite template logo and is not referenced anywhere in the app.
- **Naming/content duplication**: `currentProjects`/`projectsHome`, `currentCourse`/`currentCourseHome`, and the musician home subset in [my-portfolio/src/components/Data/data.ts](my-portfolio/src/components/Data/data.ts) hand-duplicate entries between the full subpage lists and the Home-page preview lists rather than deriving one from the other — a change to one requires manually updating the other to stay in sync.
- **No formatter config**: no Prettier (or equivalent) config file found; formatting consistency depends entirely on the editor/author, not enforced by tooling.
- **No tests**: no test files, test runner, or test script found anywhere in the repo (no `*.test.*`/`*.spec.*` files, nothing in `package.json` scripts).
- **Manual zip build step implied**: `.gitignore` excludes `Portfolio_Build.zip` ([my-portfolio/.gitignore:13](my-portfolio/.gitignore)), suggesting a manual zip-and-upload deployment step exists alongside/instead of an automated CI deploy — UNVERIFIED: no CI config (e.g. `.github/workflows`) exists in the repo to confirm or deny an automated pipeline.

## 12. Where To Start

For a fresh Claude session, read in this order:

1. [my-portfolio/src/App.tsx](my-portfolio/src/App.tsx) — the whole app's shape in one file: routes, providers, and the splash-cursor toggle state.
2. [my-portfolio/src/components/Data/data.ts](my-portfolio/src/components/Data/data.ts) — every piece of user-facing content lives here; understand this before touching any page.
3. [my-portfolio/src/components/Card/Card.tsx](my-portfolio/src/components/Card/Card.tsx) — the core reusable UI primitive every page grid is built from.
4. [my-portfolio/src/components/Pop-up/Pop-upContext.tsx](my-portfolio/src/components/Pop-up/Pop-upContext.tsx) — how the global modal system works, since every Card click flows through it.
5. [my-portfolio/src/pages/Home/Home.tsx](my-portfolio/src/pages/Home/Home.tsx) — the most complex page, showing how Reveal/Waves/Card/data.ts all compose together.
6. [my-portfolio/src/pages/SubPage.css](my-portfolio/src/pages/SubPage.css) — shared layout/grid styles used by three of the four routes.
7. [my-portfolio/package.json](my-portfolio/package.json) — dependencies, scripts, and confirms the project root is `my-portfolio/`, not the outer repo.
8. [my-portfolio/README.md](my-portfolio/README.md) — the only pre-existing project documentation; short but notes the live URL and a past debugging incident.
