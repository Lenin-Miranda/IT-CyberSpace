# IT Cyberspace Client

React/Vite frontend for the [IT Cyberspace website](../README.md).

## Start

From this directory:

```bash
npm install
npm run dev
```

Use the URL printed by Vite. Run `npm run lint`, `npm run build` and `npm run preview` to check source, produce `dist/` and inspect the production output.

## Integration

[src/email.js](src/email.js) sends contact requests to a separately hosted Express service. Its backend URL is hardcoded; configure it explicitly for local development. Email delivery credentials belong to the backend.

## Structure

- `src/components/`: page sections and navigation.
- `src/`: routes, styling and app entry points.
- [package.json](package.json): dependency versions and scripts.

There is no automated test script. After changes, inspect the relevant route and contact-form behavior in a browser.
