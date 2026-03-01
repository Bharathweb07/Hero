# Scroll-Driven Hero Section Animation

A premium hero section with scroll-based animations, inspired by [paraschaturvedi.github.io/car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation).

## Features

- **Letter-spaced headline**: "W E L C O M E   I T Z   F I Z Z" with staggered reveal on load
- **Impact statistics**: Four metrics with subtle staggered animation
- **Scroll-driven car animation**: Main visual (car) moves smoothly based on scroll position using GSAP ScrollTrigger
- **Initial load animation**: Fade + movement for headline and stats
- **Performance**: Uses `transform` (translate, scale, rotate) for GPU-accelerated animations

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS
- GSAP + ScrollTrigger
- TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the animation.

## Deployment (GitHub Pages)

### Option 1: GitHub Actions (recommended)

1. Push your code to GitHub
2. Go to **Settings → Pages**
3. Under "Build and deployment", set **Source** to "GitHub Actions"
4. Push to `main` or `master` – the workflow will build and deploy automatically

Your site will be live at `https://<username>.github.io/<repo-name>/`

### Option 2: Manual deploy

```bash
npm run build
```

The static files will be in the `out/` directory. For project pages, configure `basePath` in `next.config.js` before building:

```js
const nextConfig = {
  output: "export",
  basePath: "/your-repo-name",
  assetPrefix: "/your-repo-name/",
};
```

## License

MIT
