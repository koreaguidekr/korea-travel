# 🇰🇷 Discover Korea — Travel Website

A modern, production-ready travel website introducing South Korea to international visitors.
Built with **Next.js 14**, **Tailwind CSS**, and best-practice SEO.

---

## 📁 Project Structure

```
korea-travel/
├── pages/
│   ├── _app.js          # App wrapper + global CSS import
│   ├── _document.js     # Custom HTML shell (lang, charset, font preconnect)
│   └── index.js         # Main page with all SEO meta tags
├── components/
│   ├── Navbar.js         # Sticky glass navbar + mobile hamburger menu
│   ├── Hero.js           # Full-screen hero with Ken Burns animation
│   ├── About.js          # Korea intro + stats row
│   ├── DestinationCard.js # Reusable city card component
│   ├── Destinations.js   # Seoul, Busan, Jeju section
│   ├── Food.js           # Korean cuisine showcase
│   ├── Culture.js        # K-pop, K-drama, traditional culture
│   ├── TravelTips.js     # Transportation, currency, etiquette
│   ├── CTA.js            # Call-to-action with background image
│   └── Footer.js         # Site footer with nav links
├── styles/
│   └── globals.css       # Tailwind directives + custom animations
├── public/               # Static assets (favicon, OG image, etc.)
├── tailwind.config.js    # Extended colors, fonts, animations
├── postcss.config.js
├── next.config.js        # Image domain whitelist
└── package.json
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Install & Run

```bash
# 1. Navigate to project folder
cd korea-travel

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## ☁️ Deploy to Vercel (Recommended)

Vercel is made by the creators of Next.js and offers the easiest deployment experience.

### Option A — Deploy via Vercel CLI

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. From inside the project folder, run:
vercel

# 3. Follow the prompts:
#    - Link to your Vercel account (or create one free)
#    - Confirm project name
#    - Framework: Next.js (auto-detected)
#    - Root directory: ./ (default)

# 4. For production deployment:
vercel --prod
```

### Option B — Deploy via GitHub (Recommended for Teams)

1. Push your project to a GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit: Discover Korea website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/korea-travel.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live in ~60 seconds at `https://your-project.vercel.app`

### Automatic Deployments
After connecting GitHub, every `git push` to `main` triggers a new production deployment automatically.

---

## 🌐 Connecting a Custom Domain

### On Vercel Dashboard:

1. Go to your project → **Settings** → **Domains**
2. Type your domain (e.g., `discoverkorea.travel`) → **Add**
3. Vercel will show you DNS records to add

### DNS Configuration (at your domain registrar):

| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

4. Wait 5–60 minutes for DNS propagation
5. Vercel automatically provisions a **free SSL certificate** (HTTPS)

### Popular Domain Registrars:
- [Namecheap](https://namecheap.com) — affordable, beginner-friendly
- [Cloudflare Registrar](https://cloudflare.com) — at-cost pricing, great DNS management
- [Google Domains](https://domains.google) — clean UI, easy setup

---

## 🔍 SEO Features Included

| Feature | Implementation |
|---------|----------------|
| Meta title & description | `<Head>` in `pages/index.js` |
| Open Graph tags | Facebook/LinkedIn sharing preview |
| Twitter Card | Twitter sharing preview |
| JSON-LD Structured Data | TravelGuide + Country schema |
| Semantic HTML | `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` |
| Heading hierarchy | Single `<h1>` → `<h2>` sections → `<h3>` cards |
| Image alt attributes | All images have descriptive alt text |
| Canonical URL | Prevents duplicate content issues |
| Lang attribute | `<html lang="en">` in `_document.js` |

---

## 🎨 Design System

### Color Palette

```js
korea: {
  red:     '#C8102E',   // Primary CTA, accents
  blue:    '#003478',   // Secondary accent
  cream:   '#FAF7F2',   // Page background
  stone:   '#E8E0D5',   // Section dividers, borders
  charcoal:'#1A1A1A',  // Text, dark sections
  gold:    '#C9A84C',   // Hero eyebrow, decorative
}
```

### Typography

| Role | Font | Use |
|------|------|-----|
| Display | Playfair Display | Section headings, hero title |
| Body | DM Sans | Paragraphs, labels, UI |
| Accent | Noto Serif KR | Korean characters |

### Animations
- **Ken Burns** — Hero background slow pan/zoom
- **Reveal on scroll** — IntersectionObserver triggers `fadeUp` with staggered delays
- **Hover lifts** — Cards translate Y on hover with shadow
- **Float** — Decorative circles gently bob
- **Hamburger morph** — Mobile menu icon transforms to X

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| Mobile | < 768px | Single column, hamburger nav |
| Tablet | 768px+ | 2-column grids, full nav |
| Desktop | 1280px+ | 3-column grids, max-w-7xl container |

---

## ⚡ Performance Tips

1. **Images**: All images use Unsplash CDN with `?w=800&q=80` query params for optimal sizing
2. **Fonts**: Google Fonts loaded with `preconnect` for faster DNS resolution
3. **Animations**: CSS-based animations (no JS libraries) for minimal bundle size
4. **Lazy loading**: Browser-native lazy loading on all below-fold images (add `loading="lazy"` attribute for further optimization)

### To further optimize images, replace Unsplash URLs with Next.js `<Image>` component:

```jsx
import Image from 'next/image';

<Image
  src="https://images.unsplash.com/..."
  alt="Description"
  width={800}
  height={600}
  priority={false}  // set true for hero image
/>
```

---

## 🔧 Customization Guide

### Adding a New Destination

In `components/Destinations.js`, add to the `DESTINATIONS` array:

```js
{
  city: 'Gyeongju',
  tag: 'Ancient Capital',
  description: 'The open-air museum of Korea...',
  image: 'https://images.unsplash.com/photo-XXXXXXX?w=800&q=80',
}
```

### Adding a New Food Item

In `components/Food.js`, add to the `FOODS` array:

```js
{
  name: 'Galbi',
  korean: '갈비',
  description: 'Tender grilled beef short ribs...',
  image: 'https://images.unsplash.com/photo-XXXXXXX?w=600&q=80',
  emoji: '🍖',
}
```

### Changing the Accent Color

In `tailwind.config.js`:
```js
korea: {
  red: '#YOUR_COLOR',  // Change primary accent
}
```

---

## 📄 License

MIT — Free to use and modify for personal and commercial projects.

---

*Built with passion for Korea 🇰🇷*
