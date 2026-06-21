# Ethereum Institute

The website for the Ethereum Institute — an independent hub for research and
education in the Ethereum ecosystem. Built with [Astro](https://astro.build),
deployed to GitHub Pages, and served at **[ethereuminstitutional.org](https://ethereuminstitutional.org)**.

## Develop

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
site and publishes it to GitHub Pages. The custom domain is pinned via
[`public/CNAME`](public/CNAME).
