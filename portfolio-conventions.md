# Portfolio conventions audit

Scope: `my-portfolio/src`, excluding `assets/`. Read-only, no files touched.

## 1. Naming

- **Folders**: PascalCase per component/page, one folder per unit.
  `src/components/Card/`, `src/pages/Home/`, `src/pages/Experience/`.
  Exception: `src/components/background/` and `src/components/Data/` — lowercase
  folder names, ⚠️ INFERRED no rule, looks like drift not policy (`background/`
  holds `Animation.tsx`, `CursorToggle.tsx`, `splashCursor.tsx`; `Data/` holds
  only `data.ts`).
- **Component files**: PascalCase, same name as the exported function.
  `Card/Card.tsx` → `export default function Card(...)`.
  `PageHeader/PageHeader.tsx` → `export default function PageHeader(...)`.
- **CSS files**: PascalCase, same base name as the component file it's
  co-located with. `Header.tsx` + `Header.css`, `Card.tsx` + `Card.css`.
  Exception: `src/pages/SubPage.css` — no matching `.tsx`, it's a shared
  stylesheet three pages import directly (see §4).
- **Data file**: lowercase, singular purpose. `components/Data/data.ts`.
- **Exported consts (data.ts)**: camelCase plural nouns for arrays —
  `export const currentProjects = [...]`, `export const pastEnsembles = [...]`.
  Home-page duplicate arrays get a `Home` suffix: `currentCourseHome`,
  `projectsHome`, `musicianHome` (`data.ts:360-411`).
- **Types/interfaces**: local `interface <Name>Prop(s)` declared directly
  above the component that uses it, not exported, not in a separate file.
  `Card.tsx:6` — `interface cardProp { ... }` (⚠️ inconsistent casing — this
  one is lowercase-leading; `Header.tsx:5` uses `HeaderProps`,
  `PageHeader.tsx:3` uses `HeaderProp` singular, `Pop-up.tsx:5` uses
  `ModalProps`. No single casing/pluralization rule actually holds — pick one
  when porting, e.g. `interface <Name>Props` PascalCase-plural.)
- **CSS classes**: kebab-case, loosely BEM-ish, scoped by prefix rather than
  by a namespacing convention. `.portfolio-header`, `.header-top`,
  `.course-image`, `.popup-box`.

## 2. Page anatomy

A page folder contains exactly two files: `<Page>.tsx` and `<Page>.css` (Home
only — other pages have no page-local CSS, see §4). It does NOT contain
subcomponents, icons, or tests. All markup for the page lives directly in
`<Page>.tsx`; nothing is split into page-local subcomponents. Shared pieces
(`Card`, `PageHeader`, `Waves`, `Animation`/`Reveal`) are imported from
`src/components/`.

Reference case, `src/pages/Home/`:
```
Home/
  Home.css   # page-scoped rules only (name-split, icons, section layout)
  Home.tsx   # all markup: hero, skills list, 4 "Reveal" sections, image modal
```
`Home.tsx` imports 4 shared components (`Reveal`, `Card`, `DownWaves`,
`UpWaves`), pulls 5 named arrays from `data.ts`, and owns one piece of local
state (`isImageOpen`) plus an Escape-key effect — the image-modal-open pattern
is hand-duplicated here even though `Pop-up.tsx` already implements the same
Escape-to-close behavior for the card popup (`Home.tsx:21-31` vs.
`Pop-up.tsx:14-22`). ⚠️ Not a rule, a repeated accident — see §8.

The other four pages (`Experience`, `Developer`, `Musician`, `Student`) skip
page-local CSS entirely and import `../SubPage.css` instead
(`Experience.tsx:1`).

## 3. Shared vs. page-local

`src/components/` contents and their importers:

| Component | Imported by |
|---|---|
| `Card/Card.tsx` | Home, Experience, Developer, Student, Musician (all 5 pages) |
| `PageHeader/PageHeader.tsx` | Experience, Developer, Student, Musician (4 of 5 — not Home) |
| `Pop-up/Pop-up.tsx`, `Pop-up/Pop-upContext.tsx` | `App.tsx` (provider) + `Card.tsx` (consumer via `usePopup()`) |
| `Preloader/Preloader.tsx`, `criticalImages.ts`, `useImagePreloader.ts` | `App.tsx` only |
| `ScrollBlur/ScrollBlur.tsx` | `App.tsx` only |
| `ScrollToTop/ScrollToTop.tsx` | `App.tsx` only |
| `Header/Header.tsx` | `App.tsx` only |
| `Waves/DownWaves.tsx`, `Waves/UpWaves.tsx` | `Home.tsx` only |
| `background/Animation.tsx` (exports `Reveal`) | `Home.tsx` only |
| `background/splashCursor.tsx` | `App.tsx` only |
| `background/CursorToggle.tsx` | nothing — dead code, imports a nonexistent CSS file |
| `Data/data.ts` | all 5 pages |

**Rule, from the actual import graph, not the folder name:** a component
lives in `src/components/` once it's used by ≥2 pages (`Card`, `PageHeader`)
OR once it's a singleton mounted directly by `App.tsx` regardless of reuse
count (`Header`, `Preloader`, `ScrollBlur`, `ScrollToTop`, the popup system,
the splash cursor). `Waves` and `Reveal`/`Animation` break this rule — they're
single-page-only (`Home.tsx`) but still live in `src/components/` rather than
`src/pages/Home/`. ⚠️ INFERRED this is a "reserved for future reuse" call, not
a documented policy — when porting, either enforce "single-consumer →
page-local" strictly, or explicitly carve out an exception for pieces judged
likely to be reused later.

## 4. CSS architecture

Plain, co-located `.css` files, imported directly in the `.tsx` that uses
them (`import "./Card.css"`). No CSS Modules, no CSS-in-JS, no scoping —
class names are global and collision-avoidance is done by hand via prefixing
(`.course-*`, `.popup-*`, `.wave1`).

**`SubPage.css`** (`src/pages/SubPage.css`) is a shared stylesheet for the
four non-Home pages. Imported verbatim by `Experience.tsx:1`,
`Developer.tsx:1`, `Musician.tsx:1`, `Student.tsx:1` — always as `"../SubPage.css"`.
It owns: the `<h1>` page title style, the four grid layouts these pages use
(`.currentGrid, .nextGrid, .pastGrid, .grid`), and `.page-intro` (the intro
paragraph block). It does NOT define anything Home-specific.

**Layering, by what's actually global vs. shared vs. page-scoped:**
- `index.css` — true global layer. `html`/`body` resets, `.app-container`,
  `.background-layer` (fixed bg image), `.content-layer`. Imported once, in
  `App.tsx:1`.
- `SubPage.css` — cross-page shared layer, but only shared across a subset
  (the 4 non-Home pages). Redeclares its own `:root { --mainColor: #ffffff }`
  rather than pulling from a shared token source (see §5).
- `Home.css` — page-scoped, Home only. Also redeclares its own
  `:root { --mainColor: #ffffff }` (`Home.css:1-3`), duplicating `SubPage.css`'s
  block verbatim.
- Component CSS (`Card.css`, `Header.css`, `Pop-up.css`, `Waves.css`,
  `PageHeader.css`) — scoped to that one component by convention (prefixed
  class names), each also redeclaring `--mainColor` locally where it needs
  the value (`Header.css:2`, `PageHeader.css:2`).

**What decides the layer:** consumer count. One `.css` file per page or
component; if a rule is needed by every page (page title, grids, intro text)
it goes in `SubPage.css`; if truly site-wide (background, layout shell) it
goes in `index.css`; everything else stays local. There is no build-level
enforcement (no Modules, no linting for unused/duplicate selectors) — it's
discipline only.

## 5. Design tokens

No centralized token file. `:root` custom properties are declared
independently, per-file, wherever a file happens to need one — the same
`--mainColor: #ffffff` block is copy-pasted verbatim into **four** files:
`SubPage.css:1-3`, `Home.css:1-3`, `Header.css:1-4` (alongside a second var
here), `PageHeader.css:1-3`.

All custom properties found, verbatim:

| Var | Value | Declared in | Used in |
|---|---|---|---|
| `--mainColor` | `#ffffff` | `SubPage.css`, `Home.css`, `Header.css`, `PageHeader.css` (4 duplicate declarations) | text color across headings, nav, grids |
| `--iconBox` | `#c6c6c6` | `Header.css:3` | `Header.css:140` background |
| `--bgColor` | `#1e003c` | `Pop-up.css:2` | popup background |
| `--textColor` | `#ffffff` | `Pop-up.css:3` | popup text |
| `--waveColor` | `#af2fa4` | `Waves.css:2` | SVG wave fill |

No spacing scale, no type scale, no radius scale, no shadow scale, no
breakpoint tokens — all hardcoded per rule (`border-radius: 60px` in
`Card.css:11` vs. `24px`/`12px`/`8px` all in `Pop-up.css`, no shared value).
Breakpoints are ad hoc pixel values inlined per file:
`Waves.css:49` `767px`, `ScrollBlur.css:78` `900px`, `Header.css:206` `900px`,
`Home.css:181` `1100px` — no shared breakpoint constant, values just happen to
coincide sometimes.

**If porting: this is the piece most worth fixing, not copying.** Collapse
the 4 duplicate `--mainColor` blocks into one `:root` declared once in
`index.css`; there's zero reason it's redeclared per-file since the value
never varies.

## 6. Data layer

Single file, `src/components/Data/data.ts` (464 lines). Every page's content
is a flat array of object literals with no shared TS type/interface — shape
is implicit and inconsistent field-by-field:

```ts
// data.ts:36-48
export const currentProjects = [
  {
    title: "StudyNeant App",
    desc: "...",
    image: studyNeantImg,
    imageLink: "https://robriguez.com/projects/Studyneant/",
  },
  ...
];
```

Common shape is `{ title, desc, image, imageLink? }`; the Student/course
arrays add `code`; one entry in `pastEnsembles` adds `popupImage`
(`data.ts:134`). None of this is declared as a TS type — every array is
inferred, so an inconsistent object (missing `desc`, wrong key) still
compiles.

Consumption is direct array access + `.map()` in the page component — no
accessor/selector functions, no derivation. Pages import the exact arrays
they render:
```ts
// Student.tsx:3
import { currentCourse } from "../../components/Data/data";
...
{currentCourse.map((course, index) => (
  <Card key={index} desc={course.title} ... />
))}
```

**Known duplication, not derivation:** the Home-page preview arrays
(`experience`, `currentCourseHome`, `projectsHome`, `musicianHome`,
`data.ts:351-411`) are hand-copied subsets of the full arrays
(`currentCourse`, `currentProjects`, `currentEnsembles`) — literal duplicate
object literals, not `.slice()`/`.filter()` of the source array. Editing one
doesn't update the other. ⚠️ Documented as intentional-for-now in this repo's
CLAUDE.md, but it's a data-consistency footgun, not a pattern to port as-is —
if porting, derive the Home previews instead (e.g. `currentCourse.slice(0,2)`).

Two arrays (`internship2`, `internship3`, `data.ts:307-347`) exist as
placeholder data with bracketed dummy values (`"[Company Name]"`) and are
commented out at the only call site (`Experience.tsx:40-69`) — dead data kept
in sync with dead JSX.

## 7. Composition pattern

```
main.tsx
  StrictMode
    BrowserRouter                    ← react-router-dom v7, no basename
      App.tsx
```

`main.tsx` owns only the router wrapper and StrictMode; all app structure
lives in `App.tsx`. `App.tsx` composition, top to bottom
(`App.tsx:30-60`):

- `PopupProvider` — outermost, context for the card-click modal, wraps
  everything so any descendant can call `usePopup()`.
- `ScrollToTop` — route-change side-effect component, renders nothing.
- `.app-container` div → `.background-layer` div (fixed bg, pure CSS) →
  conditionally `<SplashCursor />` (WebGL layer, gated on a preload-complete
  flag) → `<Header />` (always mounted, outside `<Routes>`, so nav persists
  across pages) → `<main className="content-layer"><Routes>...</Routes></main>`
  (only the routed page swaps) → `<ScrollBlur />` (fixed overlay, outside
  routes) → `<AnimatePresence>` gating `<Preloader />` until images are ready.

Routing: flat, no nested routes, no layout route component — `Header` plays
the role of persistent layout chrome by being a sibling of `<Routes>` rather
than a wrapping `<Route element>`. Five routes, five page components, 1:1.
No route-level code splitting (`lazy()`), no catch-all/404 route (unmatched
paths render an empty `<main>`).

## 8. What I'd drop

- **`--mainColor` redeclared in 4 files** (§5) — pure copy-paste, no reason
  not to hoist to one `:root` in `index.css`. Actively risks drift (someone
  changes it in one file, forgets the other three).
- **Escape-to-close modal logic implemented twice** — `Home.tsx:23-31`
  duplicates the exact `keydown`/`Escape` effect already in `Pop-up.tsx:14-22`
  for a second, separate image-lightbox feature. Should be one hook
  (`useEscapeKey(onClose)`) if porting.
- **Home-preview arrays as hand-duplicated data, not derived** (§6) — silent
  drift risk, flagged as a known trap in this repo's own CLAUDE.md. Don't
  port the duplication; port a `.slice()` instead.
- **`background/` and `Data/` lowercase folder names** — every other
  component folder is PascalCase; these two are the only exceptions and
  there's no functional reason for it.
- **Inconsistent Props-interface naming**: `cardProp` (lowercase, singular),
  `HeaderProp` (PascalCase, singular), `HeaderProps`/`ModalProps` (PascalCase,
  plural) all coexist for the same kind of declaration. Pick one convention
  before porting.
- **Dead code left in place rather than deleted**: `CursorToggle.tsx`
  (imports a `.css` file that doesn't exist — would break the build if ever
  imported), `internship2`/`internship3` placeholder data paired with
  commented-out JSX in `Experience.tsx`. Fine as "not yet built," not fine to
  copy into a fresh project — start clean instead.
- **No shape/type for data.ts entries** — every content array is an inferred
  object literal; a typo'd or missing field compiles silently. Worth adding a
  real `interface CardData { title: string; desc: string; image: string;
  imageLink?: string }` when porting, since the data layer is the one thing
  likely to grow.
- **No spacing/radius/breakpoint scale at all** (§5) — every value is a
  one-off hardcoded number chosen per file. If the target project cares about
  visual consistency at scale, this is the one convention here actively worth
  *not* repeating.
