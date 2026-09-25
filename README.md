# IT Cyberspace

Website presenting IT support, networking, cybersecurity and web-development services, with service pages, navigation and a contact form.

[Website](https://it-cyberspace.com) · [Email backend](https://github.com/Lenin-Miranda/Cyberspace-backend)

## Stack and layout

The React 19/Vite frontend lives in [client/](client/), with React Router, Bootstrap and Framer Motion. This repository does not contain the Express email backend.

## Local development

Requires Node.js and npm.

```bash
git clone https://github.com/Lenin-Miranda/IT-CyberSpace.git
cd IT-CyberSpace/client
npm install
npm run dev
```

Open the URL printed by Vite, configured on port 3000.

## Commands

Run from `client/`:

```bash
npm run lint
npm run build
npm run preview
```

The build output is `client/dist/`.

## Contact form

The request URL is defined in [client/src/email.js](client/src/email.js) and currently points to the hosted email service. To develop against the separate backend, configure that URL to your local server's `/send-email` route. The current client does not read an environment variable for this URL. Form submissions can send real email.

## Content changes

Update the appropriate components under `client/src/`, preserving service information and working navigation links. Check desktop/mobile layouts, contact validation and route refreshes. A static host must handle client-side routes appropriately.

See the [client guide](client/README.md) for package-level instructions.
