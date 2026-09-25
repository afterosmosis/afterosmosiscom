# afterosmosis.com

source for [afterosmosis.com](https://afterosmosis.com) — my music project site.
static html / css / js. no build step.

## structure

```
index.html        landing
blog.html         post reader (loads posts/ via fetch)
gear.html         current + archived rig
player.html       music player
posts/            one html fragment per post + index.json manifest
images/           covers, gear photos
redesign.css      desert palette, responsive landing + interior styles
home.js           featured audio error message
theme.css         retained interior component styles
theme.js          legacy theme toggle (not loaded by redesigned pages)
eggs.js           small interactive bits
image-slot.js     <image-slot> custom element used on gear.html
```

## local preview

any static server works. e.g.:

```
python3 -m http.server 8000
```

then open http://localhost:8000.

## adding a blog post

1. write the post body as `posts/YYYYMMDD.html` — just content (`<p>`, `<h2>`), no html shell.
2. prepend an entry to `posts/index.json`:
   ```json
   {"id": "20260601", "title": "post title", "date": "2026.06.01"}
   ```
3. commit + push.

## deploy (github pages)

- pages source: `main` branch, `/` (root).
- `CNAME` pins the custom domain to `afterosmosis.com`.
- The redesign keeps the existing Pages configuration and has no build step or server runtime.

DNS remains managed in Cloudflare. Keep the existing DNS records and custom domain configuration; no hosting migration is needed.

## redesign review

The desert redesign is plain HTML, CSS, and browser JavaScript. The review branch does not deploy; merging into `main` uses the existing GitHub Pages publication flow. Do not merge until the design is approved.

- Uses the supplied desert landscape, optimized as a 174 KB JPEG, and the existing release artwork and audio files.
- Reuses `brand-wordmark.png` verbatim. The supplied notes mention a vector wordmark, but no vector is present in the repository; replace this asset only when the approved vector is available.
- Supporting text uses Avenir Next when installed, with Avenir / Segoe UI / sans-serif fallbacks. No font service or new font license is required.
- Existing `player.html`, `blog.html`, `gear.html`, post hashes, and media URLs remain available. Release links select an album without starting playback.
- Featured audio has native keyboard-accessible controls, `preload="none"`, and no autoplay.

### review locally

Run the static server above, open the home page, and check desktop and narrow mobile widths. Follow all three release links; each should open the corresponding album without playing. Choose a track to test play/pause, next, previous, and volume. Check the journal and gear archive. All site assets and audio are local to the repository; outgoing social links keep their existing destinations.
