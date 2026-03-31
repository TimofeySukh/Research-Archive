# Projects Website

A static project archive with summary cards, a vertical timeline, year-grouped entries, and dedicated project pages that can evolve from placeholders into full writeups with links and media.

## Structure

- `index.html`: Main archive page.
- `styles.css`: Shared visual system and layout styles.
- `scripts/projects.js`: Centralized project data grouped by year.
- `scripts/main.js`: Timeline rendering logic.
- `projects/`: Individual project placeholder pages.
- `docs/product/`: Product requirements and content structure.
- `docs/engineering/`: Technical notes and workflow rules.
- `AGENTS.md`: Repository-level working rules for future changes.

## Local usage

Open `index.html` directly in a browser, or serve the directory with any static file server.

## Content updates

Project years, titles, ordering, and entries are managed in `scripts/projects.js`. Add a new year object or append a new project to an existing year to update the archive.

## Documentation rule

When the code changes, update the relevant files in `docs/` and this `README.md` in the same round of work.
