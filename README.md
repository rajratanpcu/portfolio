# Raj Ratan — 3D Developer Portfolio & Systems Architecture

A production-grade, highly responsive personal developer portfolio engineered for **Raj Ratan**, Computer Science and Engineering undergraduate at **Pimpri Chinchwad University (PCU), Pune**.

Designed to showcase deep technical competencies across **Java / Spring Boot backend engineering**, **Generative AI & Multi-Agent systems (ARIA)**, **enterprise multi-godown ERP architecture (KTA ERP)**, and **real-resource optimization (SANCHAY)**.

---

## 🌟 Key Highlights & Design Decisions

- **Interactive 3D Tech Core**: Custom lightweight mathematical 3D projection engine (`TechCoreEngine`) rendering an interactive icosahedron mesh with Euler 3D rotations, orbital telemetry data packet trajectories, and pointer parallax with inertial damping. Zero heavy external 3D libraries required for instant initial paint.
- **Performance & Battery Aware**: Integrated `IntersectionObserver` automatically halts the 3D rendering loop when the hero section scrolls out of viewport, reducing CPU/GPU overhead to zero.
- **Accessibility & Motion First**: Built-in SVG celestial fallback automatically activates when `prefers-reduced-motion` is detected or in non-WebGL environments.
- **Strict Separation of Data & Presentation**: Every piece of content (profile, skills, projects, leadership, certifications, activities) is strictly typed in `src/types/index.ts` and managed in modular files under `src/data/`.
- **Accurate Real-World Projects**:
  - **ARIA (Agentic Release Intelligence Architecture)**: A 5-agent closed-loop framework (BIA, COA, RCA, DCA, IRA) with an Attributable Feedback Protocol (AFP) connecting production incidents to CI/CD pipelines.
  - **KTA ERP (Kushwaha Tent Agency)**: Production-grade multi-godown ERP managing 4 regional warehouses (Hajipur, Vaishali, Patna), 107 items, 37 party credit ledgers, and reconciled from 178 real Vyapar invoices (₹1.53+ Cr sales). Built under strict native Windows architecture (Zero Docker) with Flyway migrations V1–V8.
  - **SANCHAY**: Multi-resource monitoring and statistical anomaly detection platform for enterprise utilities and machinery.
- **Embedded Authentic Assets**:
  - `public/resume/Raj_Ratan_Resume.pdf`: Valid vector/text PDF generated via `pdf-lib`.
  - `public/certificates/oci-ai-foundations-2025.svg`: High-resolution vector certificate for Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.

---

## 📁 Repository Structure

```
Protfolio/
├── dist/                          # Standalone offline production build
│   ├── index.html                 # Complete self-contained single-page portfolio
│   ├── favicon.svg                # High-contrast geometric monogram favicon
│   ├── resume/
│   │   └── Raj_Ratan_Resume.pdf   # Authentic PDF resume
│   └── certificates/
│       └── oci-ai-foundations-2025.svg  # Vector certificate preview
├── public/                        # Static assets served at root
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── resume/
│   │   └── Raj_Ratan_Resume.pdf
│   └── certificates/
│       └── oci-ai-foundations-2025.svg
├── src/
│   ├── components/
│   │   ├── about/                 # Background, philosophy, education cards
│   │   ├── achievements/          # SIH 2026, GenAI Exchange, Kharagpur hackathons
│   │   ├── activities/            # Continuous learning timeline & developer log
│   │   ├── certifications/        # Oracle AI credential card & preview modal
│   │   ├── contact/               # Validated contact form + mailto client trigger
│   │   ├── experience/            # MLSA App Dev Lead, GSA, GDG, AWS UG, NVIDIA
│   │   ├── hero/                  # Headline, availability badge, quick CTAs
│   │   ├── layout/                # Sticky navbar, responsive mobile drawer, footer
│   │   ├── projects/              # Projects grid, category filters, detail modal, ARIA topology
│   │   ├── resume/                # In-browser CV summary & direct PDF download
│   │   ├── skills/                # 9 categories, search bar, proficiency badges
│   │   ├── three/                 # 3D TechCoreEngine, Canvas wrapper & SVG fallback
│   │   └── ui/                    # Reusable Badge, Button, Modal, Card, Icons
│   ├── data/                      # Centralized Typed Content Layer
│   │   ├── achievements.ts
│   │   ├── activities.ts
│   │   ├── certifications.ts
│   │   ├── experience.ts
│   │   ├── profile.ts             # Contact info, social links, biography
│   │   ├── projects.ts            # ARIA, KTA ERP, SANCHAY specifications
│   │   └── skills.ts              # 9 categories, 24+ technical skills
│   ├── types/
│   │   ├── index.ts               # Core TypeScript data contracts
│   │   └── react.d.ts             # Ambient React type declarations
│   ├── App.tsx                    # Main orchestration component
│   ├── index.css                  # Tailwind directives and custom scrollbars
│   └── main.tsx                   # React 18 DOM mount point
├── index.html                     # Vite entry HTML
├── package.json                   # Dependencies & npm scripts
├── tsconfig.json                  # TypeScript compiler configuration
├── tailwind.config.js             # Custom colors (#070b14 deep void navy), fonts
├── vercel.json                    # Security headers (CSP, X-Frame-Options, HSTS)
└── vite.config.ts                 # Fast Vite bundler configuration
```

---

## 🚀 Quick Start Guide

### Option 1: Instant Offline Browser Preview (No Node.js Required)

You can view the portfolio immediately in any browser without installing packages:

1. Navigate to:
   ```
   C:\Users\Raj Ratan\Desktop\Protfolio\dist\
   ```
2. Double-click `index.html` (or right-click → Open with Google Chrome / Microsoft Edge).
3. The complete portfolio with the interactive 3D hero canvas, all modals, project breakdowns, skills search, and resume download is fully functional offline!

---

### Option 2: Local Development with Vite & React

To run the development server with Hot Module Replacement (HMR):

1. Open your terminal in this directory:
   ```bash
   cd "C:\Users\Raj Ratan\Desktop\Protfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Check types & build for production:
   ```bash
   npm run build
   ```
   This executes `tsc --noEmit` followed by the Vite production bundle generation into `dist/`.

---

## ✏️ How to Update Portfolio Content

All portfolio content is decoupled from UI code in `src/data/`. To update your information, simply edit the corresponding file:

### 1. Update Profile & Social Links (`src/data/profile.ts`)
- Change your tagline, bio, target roles, or university graduation year.
- Update social links (`github`, `linkedin`, `leetcode`, `email`).

### 2. Add or Edit Skills (`src/data/skills.ts`)
- Modify or add skills to any of the 9 categories (`languages`, `fundamentals`, `backend`, `databases`, `frontend`, `ai-genai`, `automation`, `cloud-devops`, `tools`).
- Assign proficiency level: `'Core'`, `'Comfortable'`, or `'Exploring'`.

### 3. Add or Edit Projects (`src/data/projects.ts`)
- Update metrics, live demo URLs, GitHub repository links.
- Clearly classify implementation status (`status`: `'Deployed Application'`, `'Deployed Prototype'`, or `'Proposed Architecture'`).
- Update feature lists in `implemented` vs `planned`.

### 4. Add Certifications (`src/data/certifications.ts`)
- Add new certifications with issuer, date, credential ID, verification link, and skills acquired.

### 5. Add Experience & Leadership (`src/data/experience.ts`)
- Record new student leadership roles, internships, or tech community achievements.

### 6. Replace Resume PDF
- Replace `public/resume/Raj_Ratan_Resume.pdf` and `dist/resume/Raj_Ratan_Resume.pdf` with your updated PDF file while keeping the same filename.

---

## 🌐 Deployment to Vercel

The project is pre-configured with `vercel.json` including strict security headers:

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Raj Ratan 3D engineering portfolio"
   git branch -M main
   git remote add origin https://github.com/rajratanpcu/portfolio.git
   git push -u origin main
   ```

2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your portfolio will be live on an HTTPS custom domain or `*.vercel.app` in under 60 seconds.

---

## 🛡️ Security & Performance Standards

- **Zero-Secret Client**: No private API keys or database credentials exist on the client side.
- **Content Security Policy (CSP)**: `vercel.json` enforces secure script and style loading.
- **Resource Optimization**: Custom mathematical 3D rendering uses 0 external 3D bundle weight, ensuring lightning-fast First Contentful Paint (FCP) and high Google Lighthouse scores.

---

**Crafted with pride for Raj Ratan** • B.Tech CSE @ Pimpri Chinchwad University (PCU), Pune
