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
date: "Month DD, YYYY"
description: "One sentence description shown as pull-quote"
category: "Baby Gear"  # or: Baby Sleep, Breastfeeding, Baby Care, New Parents, App Reviews
readTime: "X min read"
featured: true  # optional — marks as featured post on blog index
affiliate: true  # optional — shows affiliate disclosure in header
---
```
