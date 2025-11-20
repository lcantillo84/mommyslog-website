# Mommy's Log - Landing Page

Landing page for Mommy's Log baby tracking app.

## Tech Stack

- **Next.js 15** - React framework with SEO optimization
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Hosting (free)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import this repository
5. Click "Deploy"

### Connect Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add domain: `mommyslog.com`
4. Follow DNS instructions to point your domain to Vercel

## Adding Screenshots

Replace the placeholder divs in `app/page.tsx` with actual screenshots:

1. Add screenshot images to `public/screenshots/` folder
2. Update the screenshots section:

```tsx
<Image
  src="/screenshots/feeding.png"
  alt="Feeding screen"
  width={300}
  height={650}
  className="rounded-3xl shadow-xl"
/>
```

## SEO Features

- Meta tags for search engines
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast loading with Next.js optimizations
- Mobile responsive design

## Structure

```
├── app/
│   ├── layout.tsx    # Root layout with SEO metadata
│   ├── page.tsx      # Landing page content
│   └── globals.css   # Global styles
├── public/           # Static assets (add screenshots here)
├── package.json      # Dependencies
└── README.md         # This file
```

## Support

Email: lilianne.cantillo@gmail.com
