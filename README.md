# Ashwin E — Personal Portfolio

> A high-performance, accessible, and recruiter-focused developer portfolio website built with React 19, Vite, and Framer Motion. Features a signature "Dark Luxe Noir" design with fiery sunset orange accents, seamless light/dark mode switching, WCAG AA accessibility compliance, and ultra-fast load times.

---

## ⚡ Tech Stack

- **Framework**: React 19 + Vite 7
- **Animations**: Framer Motion (streamlined section entrances, smooth interactions)
- **Styling**: Pure CSS Design System (`src/professional.css`, `src/index.css`) powered by fluid design tokens (`clamp()`, CSS variables)
- **Typography**: Outfit, Plus Jakarta Sans, JetBrains Mono
- **Deployment**: Vercel / Netlify ready
- **Form Handling**: Formspree API with seamless mailto fallback & honeypot spam protection

---

## 📁 Project Structure

```text
ashwin_portfolio/
├── public/
│   ├── certificates/          # Verified internship and course certificates
│   ├── ASHWIN_Resume.pdf      # Direct downloadable resume PDF
│   ├── favicon.svg            # Custom branded vector favicon
│   ├── robots.txt             # Search engine crawling directives
│   └── sitemap.xml            # XML sitemap for SEO indexation
├── src/
│   ├── assets/                # Optimized static assets & profile image
│   ├── components/            # Modular React components
│   │   ├── Header.jsx         # Sticky navigation with focus-trapped mobile drawer
│   │   ├── Hero.jsx           # High-impact introduction with status badges & photo
│   │   ├── About.jsx          # Background, core pillars & focus areas
│   │   ├── Education.jsx      # Chronological degree cards with animated CGPA bars
│   │   ├── Skills.jsx         # Categorized tech stack with keyboard-accessible tabs
│   │   ├── Projects.jsx       # Problem/Solution/Result structured project cards & modal
│   │   ├── Experience.jsx     # Professional internship timeline & certificates
│   │   ├── Contact.jsx        # Validated contact form + direct WhatsApp/Phone/Email
│   │   ├── Footer.jsx         # Semantic footer landmark with quick links
│   │   ├── ErrorBoundary.jsx  # Graceful runtime error recovery
│   │   ├── CustomCursor.jsx   # Interactive cursor (disabled on touch & reduced motion)
│   │   └── BackgroundAura.jsx # Ambient constellation canvas particle grid
│   ├── data/                  # Decoupled data models
│   │   ├── projects.js        # Project definitions, problems, architecture & results
│   │   ├── skills.js          # Technical skills & category groupings
│   │   ├── experience.js      # Internship history, roles & certificates
│   │   ├── education.js       # Academic milestones & scores
│   │   └── about.js           # Core professional pillars
│   ├── index.css              # Theme variables and base tokens
│   ├── professional.css       # Responsive layer, component classes & polish
│   ├── App.jsx                # Main scroll-spy layout & navigation controller
│   └── main.jsx               # React entry point with ErrorBoundary
├── .env.example               # Environment variables template
├── package.json               # Clean dependencies & scripts
└── vite.config.js             # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ashwinash08/ashwin_portfolio.git
   cd ashwin_portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Add your Formspree form ID to receive contact form messages directly in your inbox:
   ```env
   VITE_FORMSPREE_FORM_ID=your_form_id_here
   ```
   *(If left blank, the form automatically falls back to pre-filled `mailto:` client dispatch).*

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New** $\rightarrow$ **Project**.
3. Import your `ashwin_portfolio` repository.
4. Framework preset will automatically detect **Vite**.
5. Under **Environment Variables**, add:
   - `VITE_FORMSPREE_FORM_ID`: Your Formspree Form ID
6. Click **Deploy**. Vercel will build and deploy your site in ~30 seconds.

### Deploy to Netlify

1. Push your repository to GitHub.
2. Go to [Netlify](https://www.netlify.com/) and click **Add new site** $\rightarrow$ **Import an existing project**.
3. Connect your GitHub repository.
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Under **Site configuration** $\rightarrow$ **Environment variables**, add `VITE_FORMSPREE_FORM_ID`.
6. For single-page app routing support, create a `public/_redirects` file with:
   ```text
   /*    /index.html   200
   ```
7. Click **Deploy Site**.

---

## ♿ Accessibility & Performance Standards

- **WCAG AA Compliant**: All normal text contrast $\ge 4.5:1$, large text $\ge 3:1$ in both dark and light modes.
- **Full Keyboard Navigation**: Visible `:focus-visible` rings on all interactive elements, logical tab order, skip-to-content bypass, and arrow-key accessible tabs.
- **Accessible Landmarks**: Semantic `<header>`, `<nav>`, `<main>`, `<section aria-labelledby="...">`, and `<footer>`.
- **Zero Heavy Bloat**: Optimized sub-550 KB total production payload, eliminating heavy 3D bundles and large video files.
- **SEO & Social Graph**: Schema.org JSON-LD `Person` metadata, Open Graph, Twitter Cards, canonical tags, `sitemap.xml`, and `robots.txt`.

---

## 📄 License

This project is personal portfolio work created by **Ashwin E**. Feel free to use the structure as inspiration for your own portfolio.
