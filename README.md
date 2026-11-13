# axelsamuelson.com

Personal CV site (Next.js, deployed on Vercel).

- **All copy** lives in `lib/content.ts`: profile, headline results, roles and skills. `/cv` is built from the same data.
- **LinkedIn**: set `site.linkedin` in `lib/content.ts` and the link appears in the sidebar, on `/cv` and in the structured data.
- **Printable CV**: `/cv` (short, 2 pages) and `/cv/full` (everything, 3 pages) → "Save as PDF". What the short version keeps is set by `SHORT` in `app/cv/CvDocument.tsx`.
- Styles: `app/site.css` (site) and `app/cv/cv.css` (print CV).

```bash
npm install
npm run dev
```
