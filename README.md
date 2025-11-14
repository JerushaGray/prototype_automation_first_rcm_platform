# Automation-First RCM Platform

A prototype Next.js application that demonstrates how automation, AI-supported risk scoring, and structured intake workflows can modernize healthcare revenue cycle management. The project powers the [live demo on Vercel](https://jerusha-for-hp-automation-po.vercel.app) and serves as a foundation for further experimentation.

## Highlights

- **Multi-surface experience** – landing page, dashboard, intake form, backlog, claims review, workflow map, and vision narrative all share a consistent visual language powered by Tailwind CSS and Radix UI.
- **Automation storytelling** – mock data pipelines (see `lib/get-claims.ts`) showcase how claim risk scores, KPI cards, and charts could surface automation opportunities.
- **Design references included** – the `docs/prompts` directory stores the V0 design prompts and system notes that guided the build so future contributors can understand the original intent.

## Tech Stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/) and Server Components
- [Tailwind CSS 4](https://tailwindcss.com/) with custom design tokens
- [Radix UI Primitives](https://www.radix-ui.com/) and [lucide-react](https://lucide.dev/) for accessible UI elements
- [Recharts](https://recharts.org/) for dashboard visualizations
- [Vercel Analytics](https://vercel.com/docs/analytics) ready for deployment insights

## Project Structure

```
app/                  # Route groups (landing page plus nested dashboard, intake, claims, etc.)
components/           # Shared UI primitives (cards, buttons, navigation, charts, footer)
docs/prompts/         # Exported V0 prompts and design-system notes
hooks/                # Reusable React hooks for theme and UI state
lib/                  # Helper utilities and mock data (e.g., getClaims)
public/               # Static assets (logos, illustrations, favicons)
styles/               # Tailwind configuration helpers
```

## Getting Started

1. **Install dependencies**
   ```bash
   pnpm install
   ```
2. **Run the development server**
   ```bash
   pnpm dev
   ```
   Open `http://localhost:3000` in your browser to view the app.
3. **Create a production build**
   ```bash
   pnpm build && pnpm start
   ```

> **Node version**: Next.js 16 requires Node.js 18.18+ or 20+. The project was tested with Node 20 on Vercel.

## Available Scripts

| Command        | Description                                  |
| -------------- | -------------------------------------------- |
| `pnpm dev`     | Start the local Next.js dev server           |
| `pnpm build`   | Create an optimized production build         |
| `pnpm start`   | Run the production server after `pnpm build` |
| `pnpm lint`    | Execute ESLint across the repository         |

## Deployment

The repo is configured for Vercel. After pushing changes:

1. Ensure the project builds locally with `pnpm build`.
2. Connect the GitHub repo to Vercel (if not already connected).
3. Vercel will detect Next.js automatically and handle build output + serverless deployment.

## Documentation & Prompts

Design references live in [`docs/prompts`](docs/prompts):

- `design_system_full_markdown.md` – high-level design tokens, spacing rules, and typography guidelines.
- `v_0_prompt_markdown.md` – the original V0 generation prompt.
- `landing_page_update_prompt.md` – iteration notes for the landing page.
- `about_page_additions_prompt.md` – copy and layout guidance for the About page.

These files explain **why** the UI looks the way it does and are helpful when collaborating with design partners or generating new V0 iterations.

## License

Distributed under the terms of the [MIT License](LICENSE).