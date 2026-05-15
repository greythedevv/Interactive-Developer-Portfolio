# YOUR NAME — Developer Portfolio

A highly interactive, animated developer portfolio built with SvelteKit. Designed to feel like an experience, not just a page.

🔗 **Live Site:** [yourname.vercel.app](https://yourname.vercel.app)  
📁 **Repo:** [github.com/you/my-portfolio](https://github.com/you/my-portfolio)

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Clone the repo
git clone https://github.com/you/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment
No environment variables required for the base setup.  
For contact form email sending, create a free account at [formspree.io](https://formspree.io) and replace `YOUR_FORM_ID` in `Contact.svelte`.

---

## 🏗️ Architecture
src/
├── lib/
│   ├── components/       # All UI components (Navbar, Hero, Projects, etc.)
│   ├── data/
│   │   └── projects.js   # Centralized project data — edit this to add projects
│   └── stores/
│       └── theme.js      # Svelte writable store for dark/light theme
└── routes/
├── +layout.svelte    # App shell — Navbar, Footer, page transitions
├── +page.svelte      # Home page — composes all section components
└── projects/[slug]/
└── +page.svelte  # Dynamic individual project pages

### Key Design Decisions
- **Data-driven UI** — all project content lives in `projects.js`. Adding a project = adding one object.
- **CSS Variables** — the entire design system (colors, fonts, spacing) is controlled via `app.css` variables. Theming is a single attribute change on `<html>`.
- **Component composition** — each section is a self-contained component. The home page is just imports.

---

## 🎬 Animation Decisions

| Animation | Technique | Why |
|---|---|---|
| Hero entrance | CSS opacity + translateY on mount | Simple, no dependencies, smooth |
| Scroll reveals | IntersectionObserver + CSS transitions | No GSAP needed, performant, lazy |
| Staggered cards | `delay={i * 120}` on ScrollReveal | Creates natural reading rhythm |
| Hover effects | CSS transform + transition | GPU-accelerated, 60fps |
| Page transitions | CSS opacity on layout | Minimal, doesn't distract |
| Theme switch | CSS variable swap | Instant, no flash |

All animations respect `prefers-reduced-motion` — users who prefer reduced motion see instant transitions.

---

## ⚡ Performance Optimization

- **Lazy loading** — all project images use `loading="lazy"`
- **Font subsetting** — `@fontsource` packages only load used character sets
- **IntersectionObserver** — scroll animations don't run JS on every scroll event
- **CSS transitions** — all animations use `transform` and `opacity` (compositor-only properties, no layout reflow)
- **SvelteKit adapter-auto** — enables static generation for zero-JS pages where possible
- **No animation libraries** — zero GSAP/Motion One bundle cost; native CSS handles everything

---

## ♿ Accessibility Considerations

- Semantic HTML throughout (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Skip navigation link — keyboard users can jump straight to content
- All interactive elements have visible `:focus-visible` styles
- `aria-label` on icon-only buttons (theme toggle, hamburger)
- `aria-expanded` on hamburger button reflects open/closed state
- `aria-live="polite"` on contact form status — screen readers announce success/error
- `alt` text on all images
- Color contrast meets WCAG AA across both dark and light themes
- `prefers-reduced-motion` media query disables all animations for users who need it

---

## ⚖️ Trade-offs Made

| Decision | Trade-off |
|---|---|
| Native CSS animations over GSAP | Smaller bundle, but less timeline control |
| CSS variables for theming over a library | More manual work, but zero dependency |
| Formspree for contact | Relies on third-party, but avoids backend setup |
| IntersectionObserver for scroll reveal | Slightly less browser support than scroll events, but far more performant |
| SvelteKit over plain Svelte | Adds routing complexity, but enables SSR and dynamic project pages |
| Mobile menu slide-in over dropdown | More screen real-estate on mobile, slightly more complex CSS |

---

## 🛠️ Tech Stack

- **Framework:** SvelteKit
- **Styling:** Native CSS with CSS Variables
- **Fonts:** Space Mono (body), Syne (display) via @fontsource
- **Contact:** Formspree
- **Deployment:** Vercel
- **Icons:** CSS text icons (no icon library dependency)