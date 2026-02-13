This project is a lightweight, ATS-first resume generator built for developers and technical professionals who want **full control** over their resume without relying on paid resume builders or restrictive visual editors.

You can either edit a structured JSON file directly, or use the **visual editor** to fill in your resume through a web interface — no code changes required.

The system generates:

- a clean, ATS-friendly HTML resume
- a printable PDF with clickable links

No subscriptions. No watermarks. No hidden limitations.

🔗 Community Discord: https://discord.gg/4JcxJfXQ

---

## Why this project exists

Many resume builders:

- charge to unlock basic features
- limit formatting unless you pay
- store your data on third-party platforms
- generate PDFs that break ATS parsing

This project takes a different approach:

- **Content-first**: your resume lives in a JSON file
- **ATS-first**: single column, clean text, no icons or tables
- **Reproducible**: same input always generates the same output
- **Offline & open-source**: no account, no tracking, no lock-in

If you can edit a JSON file, you can generate a professional ATS-compatible resume.

---

## How it works

1. You edit `data/resume.example.json`
2. The project renders it into a clean HTML resume
3. The HTML is exported to PDF using a headless browser
4. The final PDF preserves:
   - layout consistency
   - text structure for ATS
   - clickable links (`<a href>`)

---

## Project Structure

This project uses a **pnpm monorepo** with two packages:

📦 cv-ats-html<br>
├─ 📁 packages/core # Resume engine (JSON → HTML → PDF)<br>
│ ├─ 📁 templates<br>
│ │ ├─ 📄 ats.html # ATS-first HTML template<br>
│ │ └─ 📄 style.css # Print-safe, ATS-safe styles<br>
│ ├─ 📁 data<br>
│ │ └─ 📄 resume.example.json # Example resume data<br>
│ ├─ 📁 scripts<br>
│ │ ├─ 📄 render.mjs # CLI: JSON → HTML<br>
│ │ └─ 📄 export-pdf.mjs # CLI: HTML → PDF<br>
│ └─ 📁 src<br>
│ ├─ 📄 types.ts # TypeScript types for ResumeData<br>
│ ├─ 📄 renderer.ts # Template rendering engine<br>
│ ├─ 📄 pdf-exporter.ts # Playwright PDF export<br>
│ └─ 📄 index.ts # Barrel exports<br>
│<br>
├─ 📁 packages/web # Visual editor (Vite + React + Tailwind)<br>
│ ├─ 📁 src<br>
│ │ ├─ 📁 pages # EditorPage, PreviewPage<br>
│ │ ├─ 📁 hooks # useResumeStore, usePreviewHtml<br>
│ │ ├─ 📁 providers # Route, Theme<br>
│ │ └─ 📁 styles # Tailwind + UntitledUI theme<br>
│ └─ 📄 vite.config.ts # Vite config + PDF middleware<br>
│<br>
├─ 📄 pnpm-workspace.yaml<br>
├─ 📄 package.json # Root workspace scripts<br>
└─ 📄 CLAUDE.md # Architecture plan & decisions<br>

---

## Installation

Requirements:

- Node.js **18+**
- pnpm **9+**

Clone the repository and install dependencies:

```bash
pnpm install
```

Install Playwright browsers (required for PDF export):

```bash
npx playwright install
```

---

## Usage

### Option A: Visual Editor (recommended)

Start the visual editor in your browser:

```bash
pnpm dev
```

Open http://localhost:5173 and:

1. Fill in your resume sections using the tabbed form
2. Toggle **Show Preview** to see a live preview alongside the editor
3. Click **Export PDF** to download your resume
4. Use **Import JSON** / **Export JSON** to save and load your data
5. Click **Load Example** to populate the form with sample data

### Option B: CLI (JSON editing)

1. Edit your resume data

Open and edit:
`packages/core/data/resume.example.json`

2. Generate HTML resume

```bash
pnpm build:html
```

Output: `dist/cv.html`

3. Generate PDF resume

```bash
pnpm pdf
```

Output: `dist/cv.pdf`

## The PDF:

- is A4-ready
- keeps links clickable
- is safe for ATS parsing
- is suitable for direct job applications

## Output Example

![Screenshot](data/cv-example.png)

