# Deploy Raj Ratan's 3D Portfolio to Vercel, Netlify, or GitHub Pages

This guide outlines three quick, reliable methods to deploy your updated portfolio website online with a custom URL.

---

## Method 1: Instant Drag & Drop via Vercel Web Dashboard (Fastest — 1 Minute, No CLI)

Your production-ready build is compiled in the `dist` folder:
`C:\Users\Raj Ratan\Desktop\Protfolio\dist`

1. Open your browser and go to [vercel.com](https://vercel.com). Log in or sign up with your GitHub account.
2. Go to your Vercel Dashboard and click **"Add New..."** → **"Project"**.
3. Under the **"Import Third-Party Git Repository"** or drag-and-drop area, locate the **"Deploy a Prebuilt Project"** option or visit [vercel.com/deploy](https://vercel.com/deploy).
4. Alternatively, drag and drop the `dist` folder directly onto the Vercel dashboard.
5. Vercel will instantly generate a live URL like `https://rajratan-portfolio.vercel.app`.

---

## Method 2: Git & Vercel Continuous Deployment (Recommended for Ongoing Updates)

Deploying via your GitHub account enables automatic redeployments whenever you push code changes.

### Step 1: Initialize Git and Push to GitHub
Open your terminal (PowerShell or Git Bash) on your computer and run:

```bash
cd "C:\Users\Raj Ratan\Desktop\Protfolio"

# Initialize git repository
git init

# Stage all project files
git add .

# Create the initial commit
git commit -m "feat: complete 3D Java backend developer portfolio for Raj Ratan with SANCHAY, SANJEEV & ARIA"

# Rename branch to main
git branch -M main

# Link to your GitHub repository (replace with your repo URL)
# Example: https://github.com/rajratanpcu/portfolio.git
git remote add origin https://github.com/rajratanpcu/portfolio.git

# Push code to GitHub
git push -u origin main
```

### Step 2: Import into Vercel
1. Go to [vercel.com/new](https://vercel.com/new).
2. Choose **"Import Git Repository"** and select `portfolio` (or the repository name you created).
3. In the project configuration:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.
5. Within 45 seconds, your site is live with HTTPS and custom domain support.

---

## Method 3: Instant Drag & Drop via Netlify Drop (Zero Setup)

1. Open [app.netlify.com/drop](https://app.netlify.com/drop).
2. Open Windows File Explorer to:
   `C:\Users\Raj Ratan\Desktop\Protfolio`
3. Drag the `dist` folder directly into the browser circle on Netlify Drop.
4. Netlify will deploy your site in ~10 seconds and give you a live URL like `https://rajratan-backend.netlify.app`.

---

## Method 4: GitHub Pages

If you prefer hosting directly on GitHub Pages under `https://rajratanpcu.github.io/portfolio`:

1. In PowerShell:
   ```bash
   cd "C:\Users\Raj Ratan\Desktop\Protfolio"
   git init
   git add dist -f
   git commit -m "Deploy dist to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```
2. Go to your GitHub repository settings → **Pages** → Source: `gh-pages` branch → `/ (root)`.

---

## Key Assets Included in this Build
- **Live 3D Tech Core**: Pure mathematical icosahedron rendering with 3 orbital telemetry data rings and mouse parallax.
- **Projects Highlighted**:
  - `SANCHAY`: Java, Spring Boot, MySQL, JWT Authentication, resource optimization.
  - `SANJEEV`: Java, REST APIs, JWT Auth, Docker containerization, rural business companion.
  - `ARIA`: Multi-agent closed-loop incident release framework.
- **Updated Resume PDF**: Available for download directly from the site at `./resume/Raj_Ratan_Resume.pdf`.
- **Contact Details**: Direct mailto hook to `ratanraj087@gmail.com` and phone `+91 6203683567`.
