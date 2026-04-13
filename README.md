# Apple App Store — Privacy Policy (hosted)

This repository hosts the developer privacy policy for App Store submissions. The canonical text is `PRIVACY_POLICY.md`.

**Live site (after Pages is enabled):** `https://waleedrana777.github.io/apple-privacy-policy/`

## Setup on GitHub

1. Repository **Settings → Pages → Build and deployment**: set **Source** to **GitHub Actions**.
2. Push to `main`; the workflow builds static files to GitHub Pages.

## Local build

```bash
npm install
npm run build
```

Output: `dist/` (`index.html` + `PRIVACY_POLICY.md`).

## App Store

Use the GitHub Pages URL as the **Privacy Policy URL** in App Store Connect.
