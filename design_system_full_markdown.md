# 🎨 Complete Design System & Branding Package (Markdown Version)
This document contains **everything you need to upload into Vercel v0 or include in your project repo**, fully formatted in Markdown.

It includes:
- Unified Design System
- Color Tokens
- Typography Scale
- Spacing System
- Motion / Interaction Rules
- Icons
- Branding / Wordmark
- Example Components
- Example Card Layout
- Optional Hero Illustrations (SVG)
- Theme File (CSS Variables)
- Tailwind Config Extensions

You can download this file and upload directly into v0.

---

# 🏥 **1. Design System Overview**
A modern, healthcare-ready UI kit optimized for **Next.js + Tailwind + shadcn/ui**.

Purpose:
- Clean, clinical SaaS feel
- Consistent color and spacing
- Accessible typography
- Minimal, elegant motion
- Modular components for rapid iteration

---

# 🎨 **2. Color Tokens**
These are the core brand colors.

```css
:root {
  --color-primary: #2A7FBA;      /* Healthcare Blue */
  --color-secondary: #5FB49C;    /* Modern Green */
  --color-accent: #F4B942;       /* Alert Amber */
  --color-error: #E5625E;        /* Risk/Error Red */
  --color-neutral: #EEF2F6;      /* Light Gray */
  --color-slate: #475569;        /* UI Chrome + Text */
}
```

Use via Tailwind extend or with `var(--color-primary)` inside custom classes.

---

# 🔡 **3. Typography Scale**
Use a clear, accessible hierarchy.

- **Display / Hero:** `text-5xl font-bold tracking-tight`
- **Page Titles:** `text-3xl font-semibold`
- **Section Titles:** `text-xl font-semibold`
- **Body Text:** `text-base text-muted-foreground`
- **KPI Numbers:** `text-4xl font-bold`
- **Button Text:** `text-sm font-medium`

---

# 📏 **4. Spacing System**
Consistent rhythm improves scanability.

- **Page padding:** `px-8 py-6`
- **Section spacing:** `space-y-6`
- **Card padding:** `p-6`
- **Dense tables:** `py-3 px-4`

---

# ✨ **5. Motion & Micro-Interactions**
Minimal, tasteful motion.

Use these classes globally:

```md
transition-all duration-200 ease-out
hover:shadow-md
hover:scale-[1.01]
focus-visible:ring-2 focus-visible:ring-primary
```

For table rows:
```md
hover:bg-neutral cursor-pointer
```

For risk indicators:
```md
hover:brightness-110
```

---

# 🧩 **6. Iconography (Lucide Icons)**
Recommended icons:

- Automation / AI → `Sparkles`, `Binary`, `Cpu`
- Healthcare → `Heartbeat`
- Risk → `AlertTriangle`, `Shield`, `CircleCheck`
- Workflow → `Workflow`, `Layers`
- Actions → `ArrowRight`, `CheckCircle2`, `Timer`
- Profile / About → `UserCog`, `Lightbulb`
- Navigation → `LayoutGrid`, `FileSpreadsheet`

Example import:
```tsx
import { Cpu, Layers, Timer } from "lucide-react";
```

---

# 🪪 **7. Branding & Wordmark**
Simple text-based logo (recommended for prototypes):

```
Automation Assistant
A product concept by Jerusha Gray
```

Or compact version:

```
AA — Automation Assistant
Healthcare Claims Automation Prototype
```

---

# 📦 **8. Tailwind Config (Extend Section)**
Add the following to `tailwind.config.js`:

```js
extend: {
  colors: {
    primary: "#2A7FBA",
    secondary: "#5FB49C",
    accent: "#F4B942",
    error: "#E5625E",
    neutral: "#EEF2F6",
    slate: "#475569",
  },
  borderRadius: {
    xl: "1rem",
    "2xl": "1.5rem",
  },
}
```

---

# 🧱 **9. Example Enhanced Card Component**

```tsx
<Card className="p-6 rounded-xl shadow-sm border bg-gradient-to-br from-white to-neutral transition-all hover:shadow-md hover:scale-[1.01]">
  <div className="flex items-start justify-between">
    <div>
      <h3 className="text-xl font-semibold tracking-tight">Card Title</h3>
      <p className="text-muted-foreground mt-1 text-sm">Supporting description text goes here.</p>
    </div>
    <Cpu className="w-10 h-10 text-slate opacity-20" />
  </div>
</Card>
```

---

# 📝 **10. Example Card for Value Pillars (Landing Page)**

```tsx
<Card className="p-6 rounded-xl border transition-all hover:shadow-md hover:scale-[1.01]">
  <div className="flex flex-col space-y-4">
    <Cpu className="w-8 h-8 text-primary" />
    <h3 className="text-lg font-semibold">Automation-First Workflows</h3>
    <p className="text-muted-foreground text-sm">
      Streamline pre-submission review with automated checks that reduce manual effort and increase first-pass acceptance.
    </p>
  </div>
</Card>
```

---

# 🖼️ **11. Hero Illustrations (SVG)**
Minimal line-art illustrations for landing page.

### Claims Automation SVG
```svg
<svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="14" height="14" rx="2" ry="2" />
  <line x1="3" y1="9" x2="17" y2="9" />
  <line x1="9" y1="21" x2="21" y2="9" />
</svg>
```

### Risk Scoring SVG
```svg
<svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="3 17 9 11 13 15 21 7" />
  <polyline points="14 7 21 7 21 14" />
</svg>
```

---

# 🧭 **12. Layout Guidance (Apply Across All Pages)**

### Page Wrapper
```html
<div class="px-8 py-6 space-y-6">
```

### Two-Column Layout
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
```

### Four-Column KPI Grid
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
```

---

# 🚀 **13. Ready for v0**
This Markdown file contains **all branding, style rules, tokens, spacing, motion guidelines, and example components** needed for Vercel v0 to:

- Enhance the full app visually
- Apply consistent design system
- Improve all page layouts
- Add iconography + motion
- Apply global polish

You can upload this file directly into v0 or include it in your repo.

If you'd like, I can also generate:
- A dedicated `/styles/design-system.css` file
- A `.mdx` page for the design system
- A JSON token file for future theming
- A visual brand board (colors, typography, logos)

Just tell me!