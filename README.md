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
theme.css         shared styles (light/dark)
theme.js          theme toggle
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
- `.nojekyll` disables jekyll so all files (including `_*`) are served as-is.

dns: at the registrar, point an `A` record for the apex at github pages' ips (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and a `CNAME` for `www` at `<your-username>.github.io`. enable "enforce https" once the cert provisions.
