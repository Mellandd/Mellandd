# Personal academic website

The website and academic CV share the structured data in `src/data`. Updating a
publication, project, course, activity, or profile entry updates both outputs.

## Local development

```sh
npm ci
npm run dev
```

Useful checks:

```sh
npm test
npm run typecheck
npm run build
npm run lint
```

## CV

Generate the LaTeX section files:

```sh
npm run cv:generate
```

With [Tectonic](https://tectonic-typesetting.github.io/) installed, compile the
PDF locally:

```sh
npm run cv:build
```

The source template lives at `cv/template.tex`; generated section files and
PDFs are intentionally ignored by Git. GitHub Actions regenerates and compiles
the CV for every pull request targeting `main`, making LaTeX errors visible
before merge. Pushes to `main` additionally copy the PDF into the Vite site,
upload it as a standalone workflow artifact, and deploy the site to GitHub
Pages.
