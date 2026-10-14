# Amali Owner App — interactive prototype

Everything lives in this one folder — no subfolders, no build step. Open `index.html` through any web server, or deploy the folder as-is to Vercel (Framework preset: **Other**, no build command, output directory: the project root).

## Files
- `index.html` — page markup
- `theme-dark.css`, `theme-light.css` — the two colour themes (moon/sun toggle)
- `shared-ui.css` — shared UI, sidebar and iPhone Duo layout
- `password-gate.css`, `password-gate.js` — password screen
- `app.js` — all screens, data and interactions (post-sales, post-possession, phone + iPhone Duo views)
- `*.jpg`, `*.png` — photos and logos, named by the key used in `app.js` (e.g. `IMG.tower` → `tower.jpg`)
- `montserrat-*.woff2` — fonts
- `splashVideo.mp4`, `splashWebm.webm` — splash video

## Password
The password is not stored in these files, only a salted PBKDF2-SHA256 hash (`SALT` / `HASH` in `password-gate.js`).
To change it, generate a new salt + hash with 210,000 iterations and replace both values.
Once unlocked, a browser tab stays unlocked until it is closed.

The screen keeps out casual visitors, but the files themselves are public once deployed. For server-side protection, turn on Vercel's Password Protection (Deployment Protection) for the project.
