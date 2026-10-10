# Mir Athfan Ali portfolio

Next.js portfolio with responsive section navigation, project case studies,
inspectable app screenshots, and optional motion that respects reduced-motion.

## Run locally

Use a Node.js version supported by Next.js 15 (Node 20 or newer recommended).

```sh
npm ci
npm run build
npm run start -- --hostname 0.0.0.0 --port 3011
```

For development, use `npm run dev -- --port 3011`.

## Verify

```sh
npm run typecheck
npm run build
```

Browser QA scripts in `qa/` use Playwright if it is installed in the environment.
They expect a running preview on `http://127.0.0.1:3011` and do not modify the site.

```sh
node qa/portfolio-check.cjs
node qa/motion-check.cjs
```

Set `PLAYWRIGHT_MODULE` to an available Playwright module path or
`CHROME_EXECUTABLE` to an installed Chrome executable when needed.
The production app has no browser automation dependency.
