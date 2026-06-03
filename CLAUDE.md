# Mommy's Log Website — Claude Instructions

## CRITICAL: Design System Lock

**NEVER change, override, or "clean up" the design system tokens or visual styling without explicit confirmation from the user.**

The design has been broken before by well-intentioned refactors. Always ask before touching anything color, font, spacing, or border-radius related.

---

## Design System — Match the iOS App Exactly

This website must visually match the Mommy's Log iOS app. All styles use the `ml-*` Tailwind tokens defined in `tailwind.config.ts`.

### Colors — Always use `ml-*` tokens, never raw hex or Tailwind defaults

| Token | Hex | Usage |
|---|---|---|
| `ml-cream` | `#FFF9F4` | Page background — NEVER use `bg-white` |
| `ml-card` | `#FFFCF9` | Card / section background |
| `ml-teal` | `#5BA89F` | Primary color: buttons, links, accents |
| `ml-text` | `#252220` | Primary text — NEVER use `text-black` or `text-gray-900` |
| `ml-secondary` | `#7A7470` | Secondary text — NEVER use `text-gray-600/700` |
| `ml-alert` | `#C85A5A` | Destructive / error states |
| `ml-blue` | `#B8D4E0` | Dusty sky accent (bottle/sky feature) |
| `ml-sand` | `#EED8B4` | Warm sand accent (formula feature) |
| `ml-caramel` | `#C4A07A` | Caramel accent (diaper/poop feature) |

**Accent colors not in tailwind.config.ts** (use inline style or extend config if needed):
- Sand rose: `#E8D0C4` (breastfeeding)
- Slate blue: `#C0C4DC` (mixed)

### What is FORBIDDEN

- `bg-white` → use `bg-ml-cream` or `bg-ml-card`
- `text-black` or `text-gray-900` → use `text-ml-text`
- `text-gray-600`, `text-gray-700` → use `text-ml-secondary`
- `text-gray-500` → use `text-ml-secondary`
- `mommy-pink`, `mommy-lavender`, `mommy-rose` — these are the OLD wrong design, never use them
- Gradients on backgrounds (except category hero banners which intentionally use them)
- Drop shadows on text
- Pure white or pure black anywhere
- Sharp square buttons (always use rounded corners, min `rounded-xl`)
- Serif fonts anywhere

### Typography

- Font: `Nunito` (loaded via Google Fonts in `globals.css`) — this is the web equivalent of SF Pro Rounded
- Body: `font-family: 'Nunito', system-ui, -apple-system, sans-serif` (set in `globals.css`)
- Line height: `leading-relaxed` (1.6) for body text
- Headings: `font-bold`, rounded feel — no geometric/sharp fonts

Font sizes:
- Hero/display: `text-5xl md:text-7xl`
- Page title: `text-3xl md:text-4xl`
- Section title: `text-2xl`
- Body: `text-base` (16px)
- Labels/captions: `text-xs` or `text-sm`

### Cards

```
rounded-[20px]
bg-ml-card
shadow-[0_4px_8px_rgba(0,0,0,0.09)]    ← standard
shadow-[0_8px_24px_rgba(0,0,0,0.09)]   ← featured/prominent
border border-ml-teal/10
```

No harsh borders — the shadow does the work.

### Buttons

Primary:
```
bg-ml-teal text-white rounded-xl font-bold hover:opacity-90 transition
```

Secondary:
```
bg-ml-teal/10 text-ml-teal rounded-xl font-bold
```

Never square, never `bg-gray-*`, never `text-gray-*`.

### Spacing

- Tight: `gap-2` / `p-2` (4–8px)
- Standard: `p-4` / `gap-4` (16px)
- Section gaps: `py-6 md:py-8` (24–32px)
- Large section gaps: `py-20 md:py-28` (48px+)

### Category Hero Banners (blog post headers / thumbnails)

These intentionally use gradients to visually distinguish categories. This is the ONE place gradients are allowed:

```ts
"Baby Gear":     "linear-gradient(135deg,#5BA89F 0%,#3d7a72 100%)"
"Baby Sleep":    "linear-gradient(135deg,#7c6fa0 0%,#4a3f6b 100%)"
"Breastfeeding": "linear-gradient(135deg,#e8a0b4 0%,#c4607a 100%)"
"Baby Care":     "linear-gradient(135deg,#C4A07A 0%,#8c6d4f 100%)"
"New Parents":   "linear-gradient(135deg,#B8D4E0 0%,#5a8fa3 100%)"
"App Reviews":   "linear-gradient(135deg,#252220 0%,#5BA89F 100%)"
```

### Overall Vibe

Spa-calm wellness. Clean, soft, gender-neutral. Designed for tired moms — nothing loud, nothing harsh. High-end wellness app feel, not a medical tool.

---

## Links

- All external links: `target="_blank" rel="noopener noreferrer"`
- Amazon affiliate links: use `amzn.to` short format (user provides these — never guess Amazon URLs)
- The `<a>` component in ReactMarkdown is already configured to open links in new tabs

---

## File Structure

```
app/
  page.tsx          ← Homepage
  layout.tsx        ← Root layout (loads Nunito font, Google Analytics)
  globals.css       ← Base styles, font import, body background
  blog/
    page.tsx        ← Blog listing page
    [slug]/
      page.tsx      ← Individual blog post page
content/
  blog/             ← Markdown blog posts (.md files)
lib/
  blog.ts           ← Blog post parsing utilities
tailwind.config.ts  ← ml-* color tokens — DO NOT remove tokens
```

---

## Tailwind Config — DO NOT MODIFY without user approval

The `ml-*` tokens in `tailwind.config.ts` are the design system foundation. Never remove, rename, or change hex values without explicit user request.

Current tokens:
```ts
'ml-teal':      '#5BA89F'
'ml-cream':     '#FFF9F4'
'ml-card':      '#FFFCF9'
'ml-text':      '#252220'
'ml-secondary': '#7A7470'
'ml-alert':     '#C85A5A'
'ml-blue':      '#B8D4E0'
'ml-sand':      '#EED8B4'
'ml-caramel':   '#C4A07A'
```

---

## Common Mistakes to Avoid

1. **Do not replace ml-* classes with Tailwind defaults** (`gray-*`, `white`, `black`) — this breaks the iOS app match
2. **Do not add gradients to page/section backgrounds** — only category banners use gradients
3. **Do not change border-radius to sharp values** — everything is rounded
4. **Do not change the font** — Nunito is intentional, it matches SF Pro Rounded from the app
5. **Do not use `bg-white`** — always `bg-ml-cream` or `bg-ml-card`
6. **Do not add new color variables** without updating `tailwind.config.ts`

---

## Blog Post Frontmatter

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
description: "One sentence description shown as pull-quote"
category: "Baby Gear"  # or: Baby Sleep, Breastfeeding, Baby Care, New Parents, App Reviews
readTime: "X min read"
featured: true        # optional — marks as featured post on blog index
affiliate: true       # optional — shows affiliate disclosure in header
image: "https://images.unsplash.com/photo-XXXXX?w=1200&h=600&fit=crop&q=80"
keywords: ["primary keyword", "secondary keyword", "tertiary keyword"]
faqs:                  # optional — add for articles with Q&A sections (drives FAQ rich results in Google)
  - question: "Question text exactly as it appears in the article"
    answer: "Plain text only — no markdown, no bullet lists. Just prose sentences."
---
```

**Note on `updated`:*** Do NOT add this manually. `lib/blog.ts` automatically derives `dateModified` from git history. Just commit your changes — the date updates itself.

**Note on title years:** If the title contains a year (e.g., "(2026)"), update the year whenever you edit the article. The SLUG never changes — only the `title` field.

---

## Rules When Updating Existing Articles

1. **`dateModified` is fully automatic** — `lib/blog.ts` reads `git log -1` for each file. Committing any change to an article automatically updates its `dateModified` in JSON-LD. No manual date field needed.

2. **Update the year in the title** if the article has "(2025)" or similar and you're editing it in a later year. Change just the `title` field. The slug stays the same forever.

3. **Add `faqs:` field** if the article has an explicit Q&A section (H3 questions or bold inline questions with paragraph answers). Use plain prose for answers — no markdown syntax inside the YAML strings.

---

## Minimum Content Standards — DO NOT publish below these

| Article type | Min words | Required sections |
|---|---|---|
| Affiliate/product roundup | 1,200 | Intro story, product picks with pros/cons, comparison table, tips/troubleshooting, FAQ, app CTA |
| How-to / educational | 1,000 | Intro hook, body sections with H2/H3, pro tips callouts, bottom line, app CTA |
| App comparison (listicle) | 1,400 | Intro, criteria section, 5–7 apps reviewed, comparison table, verdict, FAQ, app CTA |

**Money pages (articles with affiliate links) must hit 1,200+ words.** Google treats sub-1,000-word affiliate articles as thin content and will not rank them for commercial queries. Every product recommendation needs: what it is, why it's right for THIS reader, honest cons, and a buy link. A 2-sentence blurb is not enough.

**Comparison tables are required on all affiliate articles.** They trigger featured snippet eligibility and make the article scannable for readers who are ready to buy.

---

## Related Articles Section

Every blog post automatically shows 3 related articles (same category, or recent articles as fallback) between the Author block and the footer. This is rendered server-side in `app/blog/[slug]/page.tsx` using `getAllPosts()` — no markdown changes needed. New articles appear in related sections automatically once published.

---

## GA4 Conversion Tracking (User dashboard task — not code)

The code already fires `app_store_click` and `affiliate_click` events on every click. To see them as conversions in GA4:
> GA4 → Admin → Events → find `app_store_click` → toggle "Mark as conversion" ON
> Repeat for `affiliate_click`

Without this dashboard step, the events fire but won't appear in conversion reports.

## CRITICAL: Always add this disclaimer at the end of every blog post

*Disclaimer: This article is for informational purposes only and does not replace medical advice. If you have concerns about [topic], please consult with your healthcare provider or a certified lactation consultant.*

---

## SEO Setup — What Is Already Done (DO NOT redo or duplicate)

All of the following is already implemented and working as of May 2026:

- **Google Analytics:** GA4 tag `G-0TV051EP9P` in `app/layout.tsx` — firing correctly
- **Google Search Console:** Verified with tag `PBGzHMfSRU7zDmJgY0YVTmpVSpRFA_fhr2DFv9GscvE` in `app/layout.tsx`
- **Sitemap:** Auto-generated at `https://mommyslog.com/sitemap.xml` — scans `content/blog/` automatically. Every new `.md` file is picked up without code changes.
- **Robots.txt:** Live at `https://mommyslog.com/robots.txt`
- **Canonical URLs:** Set on every page and blog post
- **JSON-LD structured data:** Article schema + BreadcrumbList on every blog post. Organization + WebSite + SearchAction schema in root layout. SoftwareApplication schema on homepage. FAQPage schema on 5 articles with Q&A sections.
- **`dateModified` auto-derived from git:** `lib/blog.ts` runs `git log -1` per file — no manual `updated` field needed. Just commit changes.
- **Reading progress bar:** Live on every article page (`ReadingProgress` client component in `app/blog/[slug]/`).
- **Staggered card animations:** Blog listing uses `animate-fade-in-up` with per-card delay for smooth entrance.
- **Open Graph + Twitter cards:** On all pages with image dimensions declared
- **Keywords per article:** Every article has a `keywords` array in frontmatter parsed by `lib/blog.ts`

**Domain setup (finalized May 2026):**
- Primary domain: `https://mommyslog.com` (no www)
- `www.mommyslog.com` → 308 permanent redirect → `mommyslog.com`
- Hosted on Vercel, domain registered on GoDaddy
- GoDaddy DNS: A record `@` → `76.76.21.21` AND `216.198.79.1` (both Vercel IPs, keep both)
- GoDaddy DNS: CNAME `www` → `cname.vercel-dns.com`

**DO NOT add another verification meta tag, another GA script, another sitemap entry, or another canonical tag — they are already there.**

---

## Content Strategy — Learned from Analytics (updated continuously)

### What works (drives real traffic)
- **"Best [X] apps" listicle format** — the ONLY format currently driving organic Google search traffic
- Top article: `best-baby-feeding-tracker-apps-2025` — 14 views, 36s avg time, primary traffic driver
- App Store link in every article: `https://apps.apple.com/us/app/mommys-log/id6755473620`

### What does NOT work yet
- Broad educational how-to content ("breastfeeding tips") — ranking at position 84 on Google (page 8-9), zero clicks
- These articles exist but need time + more site authority to rank — do not delete them

### Google Search Console insights (May 2026)
- Top query: "breastfeeding tips for new moms" — 22 impressions, 0 clicks, position 84.6
- App queries appearing: "baby feeding and diaper log app", "mommy's log baby feeding diaper tracker app"
- Strategy: target LOW competition keywords (app-specific, niche baby tracking) not broad parenting terms

### Keyword targeting priority
1. "baby feeding tracker app" — primary target, moderate competition
2. "baby tracker no subscription" — low competition, high intent, Mommy's Log wins this
3. "free baby tracker app" — broad but relevant
4. Avoid: broad breastfeeding/parenting terms — too competitive for a new site

### Article format rules (learned from data)
- Every article MUST link to the App Store at least twice (once mid-article, once at the end)
- Use the real App Store URL: `https://apps.apple.com/us/app/mommys-log/id6755473620`
- Never use `#` as a placeholder link — always use the real URL
- Cross-link between articles — especially link TO `best-baby-feeding-tracker-apps-2025` from new articles (it's the top performer)

---

## Article Pipeline — Agreed and Queued

Articles to write next, in order (agreed with user):
1. **Baby wake windows by age (0–6 months)** — Category: Baby Sleep. When to put baby down based on awake time. Massive search volume, different from white noise machines article.
2. **Newborn weight gain week by week** — Category: Baby Care. What's normal, what doctors check, ties into feeding/diaper tracking logs.

Do not suggest other topics first — write these in order when asked for the next article.

---

## Existing Articles (DO NOT duplicate these topics)

| File | Topic | Category |
|---|---|---|
| `best-baby-feeding-tracker-apps-2025.md` | App comparison — feeding trackers | App Reviews |
| `best-baby-diaper-tracker-apps-2026.md` | App comparison — diaper trackers | App Reviews |
| `best-baby-bottles-for-breastfed-babies.md` | Product review — bottles | Baby Gear |
| `best-white-noise-machines-for-babies.md` | Product review — white noise | Baby Sleep |
| `breastfeeding-tips-first-time-moms.md` | How-to — breastfeeding technique | Breastfeeding |
| `cluster-feeding-survival-guide.md` | Deep dive — cluster feeding | Breastfeeding |
| `first-pediatrician-visit-what-to-expect.md` | How-to — pediatrician visit | New Parents |
| `how-to-track-newborn-feedings.md` | How-to — feeding tracking habit | New Parents |
| `newborn-diaper-guide-what-is-normal.md` | Guide — diaper output norms | Baby Care |
| `newborn-essentials-checklist-2025.md` | Checklist — what to buy | Baby Gear |

---

## Tools & Access

| Tool | URL | Purpose |
|---|---|---|
| Google Analytics | analytics.google.com | Track page views, sessions, events |
| Google Search Console | search.google.com/search-console | Track keyword rankings, indexing |
| Vercel | vercel.com | Hosting, domain config, deployments |
| GoDaddy | dcc.godaddy.com | DNS records for mommyslog.com |

**Search Console → Performance = the Queries report.** This shows what keywords people search to find the site and what position each article ranks. Check this weekly to guide content decisions.