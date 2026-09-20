# Gajendra Silks — Premium Indian Silk Saree Brand Website

A production-ready Next.js 14 (App Router) + TypeScript + Tailwind CSS website for **Gajendra Silks**, a premium traditional Indian silk saree brand.

## Pages
- `/` — Home (hero, brand intro, featured sarees, collections, bestsellers, brand story, testimonials, CTAs)
- `/about` — About Us (story, heritage, artisans, values, timeline)
- `/shop` — Shop (search, category filters, price filter, sorting, product modal with WhatsApp enquiry)
- `/craft` — Our Craft (weaving process, artisans, silk & zari, techniques)
- `/contact` — Contact (validated form, WhatsApp CTA, map, business hours)

## Tech Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (custom maroon/gold/ivory heritage palette)
- Google Fonts: Cormorant Garamond (display) + Jost (body)
- lucide-react icons
- No backend required — all product data is local (`data/products.ts`)

## Run Locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Production Build

```bash
npm run build
npm run start
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Gajendra Silks website"
git branch -M main
git remote add origin https://github.com/<your-username>/gajendra-silks.git
git push -u origin main
```

## Deploy to Vercel

1. Go to https://vercel.com and sign in (GitHub login recommended).
2. Click **Add New → Project**.
3. Import the `gajendra-silks` GitHub repository.
4. Framework preset: Vercel auto-detects **Next.js** — no changes needed.
5. Build command: `next build` (default). Output: `.next` (default).
6. No environment variables are required.
7. Click **Deploy**. Vercel will build and deploy automatically.
8. Every future push to `main` redeploys automatically.

## Notes
- Images are served from Unsplash via `next/image` (remote patterns already configured in `next.config.js`).
- The "View Details" product interaction uses a modal (no 6th page), as required.
- Contact form includes client-side validation (name, email format, phone format, message length) and a success state — no backend/API needed for this demo; wire it to an email service or API route when ready for real submissions.
