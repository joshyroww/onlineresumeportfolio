# Joshua Oro — Thermal Receipt Resume

An online portfolio resume styled as a **thermal shipping manifest / receipt**. Your experience is itemized like a cargo manifest — skills, projects, companies, certificates and contact, all printed on one long scrolling slip.

Built with **React + Vite + TypeScript + Tailwind CSS v4**.

## Features

- Long scrolling thermal-receipt layout on a dark desk backdrop
- Itemized, dotted-leader rows for skills and education
- Numbered shipment manifest for projects (`PJT-001 …`)
- CSS barcodes, red rubber stamps, dashed cut lines, paper-grain texture
- QR code linking to GitHub
- Marginalia notes + footnotes for extra context
- Physical micro-interactions (stamp animation, paper-shift hovers, custom cursors)
- Keyboard navigation: **press `1`–`8`** to jump between sections
- **Print / Save PDF** button that outputs a clean A4 resume
- Fully responsive (desktop / tablet / mobile) with no overflow

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build   # outputs to dist/
npm run preview # preview the production build
```

## Edit your info

All of your content lives in one easy-to-edit file: **`src/data.ts`**.
Change your name, contact details, skills, projects, certificates, and the "currently" section there.

Where things live:

- `src/data.ts` — all resume content
- `src/App.tsx` — layout & sections
- `src/index.css` — theme, paper texture, print styles
- `index.html` — fonts & metadata