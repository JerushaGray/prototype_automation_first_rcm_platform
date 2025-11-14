# High-Level Summary
Build a functional UI scaffold for a healthcare claims automation prototype. The app will display claims, evaluate their risk of denial using placeholder logic, and present results in a dashboard and detail views. Use placeholder data only — I will connect Supabase later. Focus on clear layout, reusable components, and a healthcare SaaS-style interface.

## Important: Do NOT
- Implement Supabase queries
- Add authentication
- Use server actions
- Generate API routes
- Require real or sensitive data
- Create additional pages beyond what is listed
- Nest components unnecessarily (keep folder structure flat)
- Over-style beyond Tailwind + shadcn/ui
- Treat documentation sections as UI requirements

---
# V0 Prompt: Claims Automation Mini‑App

Use this prompt in **Vercel v0** to generate the full UI scaffold for a small healthcare automation product prototype.

---

# 🧩 Project Overview
**Build a Next.js 14 App Router project** for a healthcare revenue cycle automation demo.
Use **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

The app should include:
- A global layout with sidebar navigation
- A dashboard with KPI cards
- A claims list page with risk scoring badges
- A claim detail page with issue listings
- Placeholder data for now (I will add Supabase integration later)

---

# 🧱 1. Global Layout
**Purpose:** Establish a consistent app shell with sidebar navigation and a top header for all pages.

Create a global application shell with:

## **Sidebar Navigation**
- Dashboard
- Claims

## **Header**
- App title: **"Automation Assistant"**

## **Layout Requirements**
- Responsive design
- Light gray background for main app area
- Use shadcn/ui components: Card, Badge, Table, Separator
- Structure layout with:
  - `AppSidebar`
  - `AppHeader`
  - `AppLayout`

---

# 📊 2. Dashboard Page (`/dashboard`)
**Purpose:** Provide at-a-glance KPIs and insights about claims and risk levels.
 (`/dashboard`)
Create a dashboard with **four KPI cards** using shadcn/ui `Card` components.

## **KPI Cards (placeholder values)**
- **Flagged Claims** (percentage)
- **Average Risk Score**
- **Top Issue Type**
- **Total Claims**

Below the KPI cards, add a simple bar chart or list showing **issue categories and counts**.
Use placeholder/mock data.

---

# 📋 3. Claims List Page (`/claims`)
**Purpose:** Display all claims with risk indicators using reusable UI components.
 (`/claims`)
Create a table listing claims with the following fields:

- Patient Name
- Payer
- CPT Code
- ICD Code
- Billed Amount
- Eligibility Status
- **Risk Score Badge** (Low/Medium/High)
- “View” button linking to `/claims/[id]`

Use shadcn/ui `Table` component.

## **Risk Score Badge Component**
Create a reusable component:

### `RiskBadge`
**Props:**
- `score: number`

**Behavior:**
- 0–30 → Green badge (Low Risk)
- 31–70 → Yellow badge (Medium Risk)
- 71–100 → Red badge (High Risk)

---

# 📄 4. Claim Detail Page (`/claims/[id]`)
**Purpose:** Show a detailed view of a single claim, its issues, risk explanations, and recommendations.
 (`/claims/[id]`)
Create a detailed view displaying:

## **Claim Header**
- Patient name
- Payer
- CPT / ICD
- Billed amount
- Eligibility status
- Risk badge

## **Issues Section**
Use shadcn/ui Card.
Include:
- Issue name
- Severity badge (low/medium/high)
- Recommendation text

Use placeholder issues.

---

# 🧩 5. Components to Include
Create the following reusable components:

## **1. RiskBadge**
Pill‑style colored badge showing risk level.

## **2. KPICard**
Generic KPI card.
**Props:**
- `title`
- `value`
- `description?`

## **3. IssueList**
Displays issues with titles, severity chips, and recommendations.

## **4. DataTable**
Wrapper for styling and table layout.

---

# 📁 6. Placeholder Data Functions
Create functions in `/lib/getClaims.ts`:

```ts
export async function getClaims() {
  return [
    {
      id: "1",
      patient_name: "John Smith",
      payer: "Aetna",
      cpt_code: "99213",
      icd_code: "J02.9",
      billed_amount: 120,
      eligibility_status: "active",
      risk_score: 42
    }
  ];
}

export async function getClaimById(id: string) {
  return {
    id: "1",
    patient_name: "John Smith",
    payer: "Aetna",
    cpt_code: "99213",
    icd_code: "J02.9",
    billed_amount: 120,
    eligibility_status: "active",
    risk_score: 42,
    issues: [
      { title: "Missing Prior Auth", severity: "high", recommendation: "Verify prior authorization with payer." }
    ]
  };
}
```

---

# 🎨 7. Styling Requirements
- Use Tailwind for layout, spacing, typography.
- Use shadcn/ui for cards, tables, badges, separators, and layout elements.
- Style pages with a clean, clinical, healthcare SaaS aesthetic.
- Prioritize readability and scan‑ability.

---

# 📦 8. Expected Output Structure
v0 should produce files similar to:

```
/app/layout.tsx
/app/dashboard/page.tsx
/app/claims/page.tsx
/app/claims/[id]/page.tsx
/components/ui/*
/components/RiskBadge.tsx
/components/KPICard.tsx
/components/IssueList.tsx
/lib/getClaims.ts
```

---

# ⚠️ Constraints
- **Do NOT include authentication**
- **Do NOT set up Supabase queries** (I will add them manually)
- Use placeholder mock data so the UI renders immediately
- Use clean, minimal design with shadcn/ui components

---

# ✅ Final Goal
Produce a complete, functional UI scaffold for a healthcare automation assistant web app that I can quickly connect to Supabase and extend with automated rules and AI‑style scoring.


---

<!-- Documentation only: do NOT generate UI or code from this section. -->
# 🔐 Security & Privacy Considerations (Prototype-Level HIPAA Alignment)

Although this prototype is not intended for production use and does not handle real Protected Health Information (PHI), the design and implementation reflect foundational security and privacy practices aligned with HIPAA principles. These considerations demonstrate how the system would evolve into a fully compliant healthcare automation product.

## 1. Synthetic Data Only
This prototype uses 100% synthetic patient data generated solely for demonstration purposes. No real PHI or personally identifiable information (PII) has been used or stored.

## 2. Data Minimization & Optional Privacy Mode
The interface displays only the minimum necessary information for claim evaluation workflows.
A planned “Privacy Mode” toggle supports additional masking, such as:
- Patient name → “John S.”
- Insurance ID → “****1234”
- Date of birth → “1987-XX-XX”

## 3. Secure Handling of Credentials
The application uses only client-safe Supabase anon keys. No service-role or privileged credentials are stored in the frontend.

## 4. Placeholder Architecture for Row-Level Security (RLS)
The database schema includes commented SQL blocks outlining how RLS and user-based access policies would be applied in production.

## 5. Audit Logging Schema
A lightweight `audit_logs` table schema is included to represent how access tracking would be implemented.

## 6. Secure Transport Assumption (HTTPS)
Deployment assumes all traffic is served over HTTPS using Vercel’s default encryption.

## 7. Session Timeout (Planned UX)
The interface includes a placeholder note indicating sessions should auto-lock after inactivity.

## 8. PHI Segregation in UI and Data Model
Only fields required for automation and error evaluation are shown or stored.

## 9. Prototype-Only Limitation Statement
A visible disclaimer is included: “This prototype is for demonstration purposes only and is not intended for production or clinical use.”

