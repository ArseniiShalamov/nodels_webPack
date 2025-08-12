# nodels_webPack

A small **Webpack + JavaScript** starter used for practice: bundling, dev server, and a simple app structure.

**Live demo:** <LIVE_DEMO_URL>

> Get the URL from the repo sidebar: **Deployments → github-pages → View deployment**.

---

## Features
- ⚙️ Webpack 5 setup (production build)
- 🚀 Optional dev server (hot reload) if configured in `package.json`
- 🧩 Supports JS, CSS, and HTML via loaders/plugins
- 📦 Output to `dist/` with cache-friendly filenames

---

## Tech stack
- JavaScript (ES6+)
- Webpack 5
- HTML / CSS

---

## Getting started

> Requirements: Node.js 18+ and npm.

```bash
# 1) Install dependencies
npm install

# 2) Development server (if present in package.json)
npm run dev

# 3) Build production bundle
npm run build

# 4) Preview a static build (any static server)
npx http-server dist
# or
python3 -m http.server 8080 --directory dist
