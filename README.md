# Kalle Helminen Portfolio

Static portfolio built with Astro, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20 or newer
- npm

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

The production files are generated in `dist/`.

## Editing Content

Most portfolio content is stored in simple TypeScript data files:

- `src/data/profile.ts`
- `src/data/skills.ts`
- `src/data/projects.ts`
- `src/data/productivity.ts`
- `src/data/experience.ts`

Page structure lives in `src/components/`, with one component per main section.

## GitHub Pages Deployment

This project is configured for a repository named `portfolio` served at:

```text
https://helmikalle.github.io/portfolio/
```

If the repository name changes, update `base` in `astro.config.mjs`.

### Deploy With GitHub Actions

Create `.github/workflows/deploy.yml` with:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

In GitHub, go to repository settings, open **Pages**, and set the source to **GitHub Actions**.
