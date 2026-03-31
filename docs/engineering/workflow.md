# Workflow

## Change process

- Keep changes in English.
- Update documentation together with code changes.
- Commit only when explicitly requested.
- Never push to GitHub without direct user approval.

## Deployment

- GitHub Pages deployment is handled by `.github/workflows/deploy-pages.yml`.
- The workflow runs on pushes to `main` and can also be started manually.
- The repository should use `GitHub Actions` as the Pages source in repository settings.

## Future expansion

To add a new year:

1. Create a new year object in `scripts/projects.js`.
2. Add project placeholder pages in `projects/`.
3. Update `docs/product/content-model.md` if the list of projects changes.
4. Update `README.md` if the repository structure or maintenance flow changes.
