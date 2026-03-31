# Architecture

## Rendering model

The homepage is a static HTML shell populated by JavaScript from a single data module.

## Files

- `index.html` defines the page frame and summary sections.
- `styles.css` provides the shared design system for the homepage and project pages.
- `scripts/projects.js` stores the archive data.
- `scripts/main.js` renders the timeline and summary metrics.
- `projects/*.html` provide individual project destinations and can be customized independently.
- `assets/images/` stores project media used by expanded project pages.

## Extensibility

The easiest way to add a new year is to insert a new object at the top of `scripts/projects.js`.
Titles and timeline card numbering are also derived from that centralized data.
