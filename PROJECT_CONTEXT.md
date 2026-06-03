# Project Context

This file is the living handoff for future Codex sessions in this portfolio project. Read it before making changes, and update it after meaningful work.

## Current Status

Portfolio v1 has been migrated from static HTML/CSS/JS to an Astro, TypeScript, and Tailwind CSS static site.

The site is published from GitHub Pages using GitHub Actions and is configured for the custom domain:

```text
https://www.helminenkalle.fi
```

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Static GitHub Pages deployment
- No backend, database, authentication, CMS, or server-side features

## Important Commands

If `node` or `npm` are not on PATH in the shell, check the local Node.js installation path before running npm commands.

Common commands:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Repository And Deployment

- GitHub repo: `https://github.com/Helmikalle/portfolio`
- Branch: `main`
- GitHub Pages source: GitHub Actions
- Build command: `npm run build`
- Static output: `dist`
- Deploy workflow: `.github/workflows/deploy.yml`
- Custom domain file: `public/CNAME`

`astro.config.mjs` is configured with:

```js
site: "https://www.helminenkalle.fi",
base: "/",
output: "static",
```

## DNS Notes

The custom domain is managed outside this repository. Keep `public/CNAME` aligned with the GitHub Pages custom domain setting.

For DNS troubleshooting, use GitHub Pages documentation as the source of truth. Avoid storing provider account details or unnecessary DNS troubleshooting history in this public repo.

## Content Structure

Editable content is stored in `src/data`:

- `src/data/profile.ts`
- `src/data/skills.ts`
- `src/data/projects.ts`
- `src/data/productivity.ts`
- `src/data/experience.ts`

Main page sections are components in `src/components`:

- `Header.astro`
- `Hero.astro`
- `About.astro`
- `Skills.astro`
- `Projects.astro`
- `Productivity.astro`
- `Experience.astro`
- `Contact.astro`
- `Footer.astro`

## Content And Privacy Notes

- Experience content should stay generic enough to avoid identifying confidential clients or past employers where anonymization is intended.
- Do not add private client names, private employer details, account details, API keys, tokens, or credentials to this repository.
- Keep the current bright visual theme unless the user explicitly asks for dark-first styling.
- The project card category labels were adjusted to be clearer on mobile.

## Last Known Good State

- Astro migration complete.
- GitHub Pages workflow added and pushed.
- Custom domain configured with `public/CNAME`.
- Mobile project card labels improved.
- `npm run build` passed with 0 errors and 0 warnings after the mobile card label change.

## Next Likely Tasks

- Add SEO metadata improvements.
- Add JSON-LD structured data for `Person` and `ProfilePage`.
- Add sitemap and `robots.txt`.
- Add Google Search Console verification.
- Consider adding a professional portrait.
- Review mobile spacing and typography after the site has real traffic/device testing.
