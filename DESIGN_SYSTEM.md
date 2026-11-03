# Midnight Violet Design System

**Ashwin E — Personal Developer Portfolio**  
Audience: Technical recruiters, engineering hiring managers, and founders in Software Engineering & AI/ML.  
Design Goal: Trust, clarity, and readability in 10 seconds. Built with pure CSS variables, semantic HTML, and Framer Motion. Zero UI framework dependencies.

---

## 1. Color Palette & Tokens

All tokens are defined in [`src/styles/tokens.css`](file:///c:/Users/Ashh/OneDrive/Pictures/College/ashwin_portfolio/src/styles/tokens.css).

### Dark Theme (Default)
Surfaces use a deep, architectural midnight-violet base with high-contrast neutral text and violet accents.

| Token | Value | Role | WCAG Contrast vs Background |
| :--- | :--- | :--- | :--- |
| `--bg` | `#0b0a14` | Primary viewport background | — |
| `--surface-1` | `#131226` | Cards, modals, containers | — |
| `--surface-2` | `#1a1933` | Inputs, chips, secondary buttons | — |
| `--surface-3` | `#221f40` | Hover states, progress tracks | — |
| `--border-subtle` | `rgba(196, 181, 253, 0.10)` | Card borders, dividers | — |
| `--border-strong` | `rgba(196, 181, 253, 0.22)` | Interactive borders, focus boundaries | — |
| `--text-primary` | `#f0eefc` | Headings, active text | **17.6:1** (AAA) |
| `--text-secondary` | `#a9a5c8` | Body copy, subtitles | **8.8:1** (AAA) |
| `--text-muted` | `#8f8ab0` | Captions, metadata, hints | **6.2:1** (AA) |
| `--accent` | `#a78bfa` | Primary violet accent | **7.8:1** (AAA) |
| `--accent-hover` | `#c4b5fd` | Hover state for accent buttons | **10.4:1** (AAA) |
| `--accent-strong` | `#8b5cf6` | Active state / boundary accent | — |
| `--accent-soft` | `rgba(167, 139, 250, 0.14)` | Badges, tinted pill backgrounds | — |
| `--on-accent` | `#1a1033` | Text on `--accent` buttons | **8.1:1** (AAA) |
| `--accent-2` | `#60a5fa` | Blue accent (hero highlight & ambient orb only) | **7.2:1** (AAA) |
| `--success` | `#4ade80` | Status indicators, completed items | **11.2:1** (AAA) |
| `--warning` | `#fbbf24` | Alerts, warnings | **10.5:1** (AAA) |
| `--danger` | `#f87171` | Form validation errors | **6.4:1** (AA) |

> **Contrast Note**: White text (`#ffffff`) on `#a78bfa` achieves only a 2.6:1 ratio (failing WCAG AA). Therefore, primary buttons use `--on-accent` (`#1a1033`), which yields an **8.1:1 AAA** contrast ratio.

### Light Theme (`[data-theme="light"]`)
Clean, crisp paper with soft lavender undertones and deep violet accents.

| Token | Value | Role | WCAG Contrast vs Background |
| :--- | :--- | :--- | :--- |
| `--bg` | `#faf9ff` | Viewport background | — |
| `--surface-1` | `#ffffff` | Elevated cards, dialogs | — |
| `--surface-2` | `#f3f1fb` | Input controls, chip backgrounds | — |
| `--surface-3` | `#e9e6f7` | Hover states, tracks | — |
| `--border-subtle` | `rgba(26, 21, 48, 0.09)` | Subtle boundaries | — |
| `--border-strong` | `rgba(26, 21, 48, 0.20)` | Active borders | — |
| `--text-primary` | `#1a1530` | Headings, main text | **16.5:1** (AAA) |
| `--text-secondary` | `#5b5578` | Body copy | **6.8:1** (AAA) |
| `--text-muted` | `#6a6488` | Metadata, captions | **5.1:1** (AA) |
| `--accent` | `#6d28d9` | Primary violet accent | **6.9:1** (AAA) |
| `--accent-hover` | `#5b21b6` | Button hover | **8.6:1** (AAA) |
| `--accent-strong` | `#4c1d95` | Button active | **10.8:1** (AAA) |
| `--accent-soft` | `rgba(109, 40, 217, 0.09)` | Badges, highlights | — |
| `--on-accent` | `#ffffff` | Text on `--accent` buttons | **6.9:1** (AAA) |
| `--accent-2` | `#2563eb` | Secondary blue | **5.2:1** (AA) |
| `--success` | `#15803d` | Success states | **5.4:1** (AA) |
| `--warning` | `#b45309` | Warning states | **4.9:1** (AA) |
| `--danger` | `#b91c1c` | Error messages | **5.8:1** (AA) |

---

## 2. Typography Scale

Fonts are preconnected and loaded asynchronously via Google Fonts in `index.html`:
- **Headings**: `Outfit` / `Sora` (weights 600, 700, 800)
- **Body**: `Plus Jakarta Sans` (weights 400, 500, 600, 700)
- **Code & Dates**: `JetBrains Mono` (weights 500, 600)

| Token | Value | Recommended Usage |
| :--- | :--- | :--- |
| `--fs-xs` | `0.78rem` (12.5px) | Badges, date tags, mono labels |
| `--fs-sm` | `0.875rem` (14px) | Form labels, secondary button text, hints |
| `--fs-base` | `1rem` (16px) | Standard body copy, inputs |
| `--fs-lg` | `1.125rem` (18px) | Subheadings, section leads |
| `--fs-xl` | `1.35rem` (21.6px) | Card titles, modal headers |
| `--fs-2xl` | `clamp(1.6rem, 1.2rem + 1.6vw, 2.2rem)` | Section subtitles, project modal titles |
| `--fs-3xl` | `clamp(2rem, 1.4rem + 2.6vw, 3.2rem)` | Section headings |
| `--fs-hero` | `clamp(2.75rem, 1.4rem + 6vw, 5.75rem)` | Hero display name |

### Typography Rules
1. **Headings**: `line-height: 1.1–1.2`, `letter-spacing: -0.02em`, `text-wrap: balance`. Solid colors (`var(--text-primary)`), zero text clipping gradients.
2. **Body**: `line-height: 1.7`, `letter-spacing: 0` (zero negative letter-spacing), `max-width: 65ch`, `text-wrap: pretty`.
3. **Mono**: Reserved strictly for dates, numeric scores, and code tokens (`JetBrains Mono`).

---

## 3. Spacing & Radius Scales

### 4px Base Spacing Scale
```css
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
--space-5: 20px;  --space-6: 24px;  --space-7: 32px;  --space-8: 40px;
--space-9: 48px;  --space-10: 64px; --space-11: 80px; --space-12: 96px;
```

### Corner Radius
```css
--radius-sm: 8px;     /* Inputs, tags, chips */
--radius-md: 14px;    /* Cards, containers */
--radius-lg: 20px;    /* Modals, hero inner frame */
--radius-pill: 999px; /* Buttons, pill tabs, status indicators */
```

---

## 4. Elevation & Shadows

```css
/* Dark Theme */
--shadow-1: 0 1px 3px rgba(0, 0, 0, 0.45), 0 1px 2px rgba(0, 0, 0, 0.35);
--shadow-2: 0 8px 24px -4px rgba(0, 0, 0, 0.65), 0 2px 6px -1px rgba(0, 0, 0, 0.45);
--shadow-3: 0 20px 48px -8px rgba(0, 0, 0, 0.85), 0 4px 12px -2px rgba(0, 0, 0, 0.55);
--glow-accent: 0 0 0 1px var(--accent), 0 8px 24px -6px rgba(167, 139, 250, 0.45);
```

Shadow rule: Cards use `--shadow-2`. Card hover rule is strictly: `border-color: var(--border-strong)` and `transform: translateY(-2px)`.

---

## 5. Motion Tokens

All transitions are defined in `src/styles/tokens.css` and `src/motion.js`:
```javascript
export const MOTION_DURATIONS = {
  fast: 0.15, // 150ms
  base: 0.25, // 250ms
  slow: 0.45, // 450ms
};

export const MOTION_EASINGS = {
  easeOut: [0.22, 1, 0.36, 1],
  easeInOut: [0.65, 0, 0.35, 1],
};
```

### Reduced Motion Compliance
- CSS `@media (prefers-reduced-motion: reduce)` zeroes animations and sets `scroll-behavior: auto`.
- Framer Motion components inspect `useReducedMotion()` and omit translation/scale transforms when active.

---

## 6. UI Components Library (`src/components/ui/`)

### Button
```jsx
import { Button } from './components/ui';

// Primary Action
<Button variant="primary" size="md" onClick={handleSave}>
  Explore Projects
</Button>

// Link button
<Button as="a" href="#contact" variant="secondary" size="md">
  Get in touch
</Button>
```

### Card
```jsx
import { Card } from './components/ui';

<Card variant="interactive">
  <h3>Card Title</h3>
  <p>Clean surface with 1px border and subtle lift on hover.</p>
</Card>
```

### Tabs (Keyboard Accessible)
```jsx
import { Tabs } from './components/ui';

<Tabs
  tabs={[
    { id: 'all', label: 'All Projects', count: 4 },
    { id: 'ml', label: 'Machine Learning', count: 1 }
  ]}
  activeTab={selected}
  onChange={setSelected}
  ariaLabel="Filter projects by domain"
/>
```

### ProgressBar
```jsx
import { ProgressBar } from './components/ui';

<ProgressBar value={84} max={100} label="MCA Score" showLabel />
```

### Field (Accessible Form Control)
```jsx
import { Field } from './components/ui';

<Field
  id="user-email"
  label="Email Address"
  type="email"
  required
  error={errors.email}
  hint="We'll never share your email with third parties."
/>
```

---

## 7. Performance & Code Splitting

1. **Lazy Loading**: Below-the-fold components (`About`, `Education`, `Skills`, `Projects`, `Experience`, `Contact`) are code-split using `React.lazy` and wrapped with a progressive `<Suspense>` fallback in [`src/App.jsx`](file:///c:/Users/Ashh/OneDrive/Pictures/College/ashwin_portfolio/src/App.jsx).
2. **Zero Layout Shifts**: Heights and containers use CSS `min-height` and CSS Grid to guarantee CLS = 0.
3. **No-Flash Theme Execution**: Synchronous `<script>` in `<head>` sets `data-theme` and `colorScheme` before first paint.
4. **Visibility Listener**: `BackgroundAura` stops canvas rendering and particle loops when `document.hidden` is true.

---

## 8. Customization TODOs

| Location | Description | Current Fallback |
| :--- | :--- | :--- |
| `src/components/Contact.jsx` | Formspree Endpoint ID | Set your Formspree ID or `.env` variable (`VITE_FORMSPREE_ID`). Falls back to `mailto:` |
| `public/ASHWIN_Resume.pdf` | Resume PDF file | Verify latest version is placed in `public/ASHWIN_Resume.pdf` |
| `src/data/projects.js` | GitHub repository URLs | Point to live GitHub repository URLs |

