# Project memory

## Product intent & audience

- Eyewear/fashion product catalog app (frames section with multiple products)
- Displays a "Frames" section featuring sunglass/eyeglass frame products
- Key featured products: Bold Square, Classic Wayfarer, Flat-Top Gold Bar (referred to as "real-photo frames")
- Also includes four additional frames shown after the top three

## Brand personality & voice

- Direct, practical tone; focused on product presentation
- Minimal conversational fluff in UI; emphasis on product names and visuals

## Visual design & UX direction

- Product ordering is user-controllable; featured/real-photo frames are prioritized at top
- Frames section displays products in a grid or list layout (exact styling TBD)
- Three "real-photo" frame products should appear as the first three items in the Frames section
- Remaining four frames follow after the top three
- Vite + React stack for frontend

## Decisions, constraints & rationale

- Package manager: Bun (project has `bun.lock` and `bunfig.toml`); npm install causes peer dependency resolution bugs
- Build runs successfully with Bun
- Reordering: moved Bold Square, Classic Wayfarer, and Flat-Top Gold Bar to positions 1–3 in Frames section
- Vite used as build tool

## Open questions & assumptions

- Full product list and data source (hardcoded vs. CMS/API) unknown
- Whether other product categories exist beyond Frames
- Responsive layout specifics and component library (if any) not yet determined
- Image assets: only three frames confirmed as "real-photo"; status of other four frames' imagery unclear