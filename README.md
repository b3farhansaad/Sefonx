# Sefonx — Portfolio

React + TypeScript + Vite + Tailwind portfolio site, bilingual (EN/AR, full RTL support in Arabic), dark/light themes, and a Discord-backed contact form.

## What changed in this pass

- **Design**: deeper crimson palette, Space Grotesk / Plus Jakarta Sans / IBM Plex Sans Arabic type pairing, a 3D tilt effect on the hero portrait and on project/service cards, a cursor-reactive spotlight in the hero, a subtle grain texture, and `prefers-reduced-motion` support.
- **RTL fix**: the Arabic version now actually sets `dir="rtl"` (it didn't before).
- **Security fix**: the Discord webhook URL was hardcoded directly in the client source — anyone could open dev tools and grab it to spam your channel. It's now called through a serverless function (`api/contact.js`) so the secret never reaches the browser. See "Contact form & the webhook secret" below — this is the one part of the setup you should read before deploying.

The content (bio, projects, testimonials, stats) is still placeholder — update it in `src/App.tsx` (`translations`, `projects`, `testimonials`, `services` objects) whenever you're ready.

## Contact form & the webhook secret

The contact form no longer calls Discord directly. It posts to `/api/contact`, a small serverless function that holds the real webhook URL and forwards the message. This matters because **a purely static site (no server) can never truly hide a secret that's called from the browser** — Vite bakes any `VITE_`-prefixed variable straight into the shipped JS, so putting the webhook in `import.meta.env` would leak it exactly the same way. Only a server-side step (like the function in `api/contact.js`) keeps it private.

- **Local dev**: copy `.env.example` to `.env` and fill in `DISCORD_WEBHOOK_URL` (no `VITE_` prefix — that's intentional). The form only works locally when running through the Vercel CLI (`vercel dev`), since a plain `vite dev` server doesn't execute `/api` functions.
- **Vercel**: add `DISCORD_WEBHOOK_URL` in Project Settings → Environment Variables. Vercel auto-detects the Vite build and the `api/` folder — no extra config needed.
- **GitHub Pages**: it's a static host, so it can't run `api/contact.js` at all. If you deploy the site there, either (a) also deploy this same repo to Vercel and point the GitHub Pages build at it by setting `VITE_CONTACT_API_URL` to `https://your-project.vercel.app/api/contact`, or (b) accept that the contact form won't work on the GitHub Pages copy.

## Deploying

### Vercel (recommended — supports the contact form)
1. Import the repo at vercel.com.
2. Set `DISCORD_WEBHOOK_URL` under Environment Variables.
3. Deploy — Vercel builds the Vite app and the `/api` function automatically.

### GitHub Pages (static only)
A workflow is included at `.github/workflows/deploy-gh-pages.yml`:
1. In repo Settings → Pages, set the source to "GitHub Actions".
2. If this is a project page (`username.github.io/repo-name`), the workflow already sets the correct base path from the repo name automatically. If it's a user/organization page instead, edit the workflow's `BASE_PATH` to an empty string.
3. Optionally add a repo variable `CONTACT_API_URL` (Settings → Secrets and variables → Actions → Variables) pointing at your Vercel deployment's `/api/contact` URL, so the contact form works from the GitHub Pages copy too.
4. Push to `main` — the workflow builds and publishes `dist/`.

## Local development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm run build      # outputs to dist/
```
