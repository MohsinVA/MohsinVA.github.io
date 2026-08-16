# Grow With Mohsin — Website

Static site: HTML + CSS + JS. No build step, no framework. Free to host.

## Go Live — GitHub Pages (free, no separate signup needed)

1. Create a repo on GitHub named exactly `yourusername.github.io` (e.g. `MohsinVA.github.io`).
2. Upload every file and folder from this project to that repo (root level — `index.html` should sit directly in the repo, not inside a sub-folder).
3. Go to the repo's **Settings → Pages**, set Branch to `main`, folder to `/ (root)`, click **Save**.
4. Within a minute or two, your site is live at `https://yourusername.github.io/`.

Whenever you want to update anything, edit the file on GitHub (or upload a replacement) and commit — the live site updates automatically within a minute.

## Things to replace before/after going live (all marked as placeholders)

| What | Where | Find |
|---|---|---|
| WhatsApp number | Every page | `href="https://wa.me/YOUR_NUMBER"` |
| Social media links | Footer, every page | `<a href="#" class="soc"` |
| Fiverr / Upwork links | Footer + about.html | `class="hire-chip"` and `class="hire-card"` |
| "Other Links" (affiliate) | Footer, every page | `Placeholder Link 1/2/3` |
| Prices | pricing.html, services.html, service-*.html, index.html | `$X` |
| Contact info | contact.html | phone/email/location |
| About page story | about.html | `<div class="story">` section |
| Images | All pages | currently custom illustrations — swap with your own photos in `/images/` when ready |
| Real portfolio screenshots | portfolio.html | replace the illustration blocks with your real analytics/results screenshots |

## Adding a new blog post (manual — no CMS needed)

Since the site stays on GitHub Pages, blog posts are added by duplicating a page — no login panel required:

1. On GitHub, open any existing post (e.g. `blog-smm.html`), click the copy/download icon, or just click into it and copy all the code.
2. Create a new file (e.g. `blog-mynewpost.html`), paste the code in, then edit: the `<title>`, the `<h1>`, the category, and the body paragraphs.
3. Open `blog.html`, copy one of the `<a href="blog-smm.html" class="blog-card">...</a>` blocks, paste it as a new entry, and point the `href` to your new file.
4. Commit both changes — the new post is live within a minute.

It's a bit more manual than a CMS, but works entirely within GitHub, with nothing else to set up or pay for.

## File structure

```
/
├── index.html            Home
├── about.html
├── services.html          (5-card scroll-stack)
├── service-smm.html
├── service-ecommerce.html
├── service-ea.html
├── service-pa.html
├── service-ops.html
├── portfolio.html          (case-study scroll-stack)
├── pricing.html
├── blog.html
├── blog-smm.html, blog-ecommerce.html, blog-ea.html, blog-pa.html, blog-ops.html
├── contact.html
├── css/style.css           shared design system
└── js/main.js              cursor, glow, back-to-top, mobile nav
```

## Design system quick reference

- Base: white/off-white background, dark hero section
- Brand name: 3-color wordmark ("Grow" / "With" / "Mohsin")
- Primary color: green `#5C8A2E` (buttons, links, CTAs)
- Category accents (icons): SMM = blue, eCommerce = green, Assistant roles = amber, Operations = coral
- Fonts: Space Grotesk (headings), Inter (body) — loaded from Google Fonts
- Custom cursor + glow effect: desktop only, auto-disabled on mobile/touch
