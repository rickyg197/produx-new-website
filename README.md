# PRODUX — Fractional Product Leadership & Product Architecture

A modern, responsive website for PRODUX built with React 19, Tailwind CSS 4, and Vite.

## Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS 4** with custom design tokens
- **Vite 7** for bundling and dev server
- **Framer Motion** for animations
- **Wouter** for client-side routing
- **shadcn/ui** component library (Radix UI primitives)

## Getting Started

### Prerequisites

- Node.js 22+ (see `.nvmrc`)
- npm 10+

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

Output goes to `dist/public/`.

### Preview Production Build

```bash
npm run preview
```

### Type Check

```bash
npm run check
```

## Deploy to Vercel

### Option A: Vercel CLI

```bash
npm i -g vercel
vercel
```

Vercel will auto-detect the configuration from `vercel.json`.

### Option B: Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel will auto-detect settings from `vercel.json`:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `npm install`
5. Click **Deploy**

### SPA Routing

The `vercel.json` includes a rewrite rule that routes all paths to `index.html`, enabling client-side routing to work correctly on Vercel.

## Project Structure

```
client/
  public/
    assets/          ← Images, logos, and static files
  src/
    pages/           ← Page components (Home, Services, About, etc.)
    components/      ← Reusable UI components (Navbar, Footer, etc.)
    components/ui/   ← shadcn/ui primitives
    contexts/        ← React contexts (Theme)
    hooks/           ← Custom React hooks
    lib/             ← Utility helpers
    App.tsx          ← Routes & layout
    main.tsx         ← React entry point
    index.css        ← Global styles & design tokens
shared/              ← Shared constants
vercel.json          ← Vercel deployment config
vite.config.ts       ← Vite build config
```

## Pages

| Route          | Page         | Description                                      |
|----------------|--------------|--------------------------------------------------|
| `/`            | Home         | Hero, value props, methodology preview, CTA      |
| `/services`    | Services     | Executive Advisory, Fractional Leadership, etc.   |
| `/about`       | About        | Company story, team, values, client logos         |
| `/methodology` | Methodology  | 5-Phase Framework, Tri-Party Venn Diagram         |
| `/faq`         | FAQ          | Common questions about PRODUX services            |
| `/contact`     | Contact      | Contact form and booking CTA                      |
