# Repository Structure

Generated: 2026-05-10 17:57:16 UTC

Scope: Files returned by rg --files (respects ignore rules)

Summary: 26 directories, 84 files

Legend: 📁 directory, 🧩 code, 🎨 style, ⚙️ config, 🖼️ media, 📝 docs

```text
.

|-- 📁 apps/                         # applications workspace

|   |-- 📁 dashboard/                         # directory
|   |   |-- 📝 README.md                         # project documentation
|   |   |-- ⚙️ eslint.config.mjs                         # ESLint configuration
|   |   |-- ⚙️ next.config.ts                         # Next.js runtime/build configuration
|   |   |-- ⚙️ package.json                         # package manifest and scripts
|   |   |-- ⚙️ pnpm-lock.yaml                         # dependency lockfile
|   |   |-- ⚙️ pnpm-workspace.yaml                         # pnpm workspace configuration
|   |   |-- ⚙️ postcss.config.mjs                         # PostCSS configuration

|   |   |-- 📁 public/                         # public static assets
|   |   |   |-- 🖼️ file.svg                         # static media asset
|   |   |   |-- 🖼️ globe.svg                         # static media asset
|   |   |   |-- 🖼️ next.svg                         # static media asset
|   |   |   |-- 🖼️ vercel.svg                         # static media asset
|   |   |   |-- 🖼️ window.svg                         # static media asset

|   |   |-- 📁 src/                         # source code

|   |   |   |-- 📁 app/                         # Next.js app router files
|   |   |   |   |-- 🖼️ favicon.ico                         # site icon
|   |   |   |   |-- 🎨 globals.css                         # global styles
|   |   |   |   |-- 🧩 layout.tsx                         # root layout and app-wide setup
|   |   |   |   |-- 🧩 page.tsx                         # route page component

|   |   |   |-- 📁 components/                         # UI components

|   |   |   |   |-- 📁 dashboard/                         # directory
|   |   |   |   |   |-- 🧩 SectionEditor.tsx                         # React/Next component file
|   |   |   |   |   |-- 🧩 SectionList.tsx                         # React/Next component file

|   |   |   |   |-- 📁 forms/                         # directory
|   |   |   |   |   |-- 🧩 GeneratedField.tsx                         # React/Next component file

|   |   |   |-- 📁 data/                         # directory
|   |   |   |   |-- 🧩 mockHomePageSections.ts                         # TypeScript source file
|   |   |-- ⚙️ tsconfig.json                         # TypeScript compiler configuration

|   |-- 📁 rfl-theme/                         # directory
|   |   |-- 📝 README.md                         # project documentation
|   |   |-- ⚙️ eslint.config.mjs                         # ESLint configuration
|   |   |-- ⚙️ next.config.ts                         # Next.js runtime/build configuration
|   |   |-- ⚙️ package.json                         # package manifest and scripts
|   |   |-- ⚙️ pnpm-lock.yaml                         # dependency lockfile
|   |   |-- ⚙️ pnpm-workspace.yaml                         # pnpm workspace configuration
|   |   |-- ⚙️ postcss.config.mjs                         # PostCSS configuration

|   |   |-- 📁 public/                         # public static assets
|   |   |   |-- 🖼️ file.svg                         # static media asset
|   |   |   |-- 🖼️ globe.svg                         # static media asset
|   |   |   |-- 🖼️ next.svg                         # static media asset

|   |   |   |-- 📁 rfl-assets/                         # directory
|   |   |   |   |-- 🖼️ Reliable-fabricators-Limited-2023-4-new-Cjf2VJPY.png                         # static media asset
|   |   |   |   |-- 🖼️ build-2Tn0bcpM.jpg                         # static media asset
|   |   |   |   |-- 🖼️ kenya-CtITcDfG.jpg                         # static media asset
|   |   |   |   |-- 🖼️ steel-DIqp7IFF.jpg                         # static media asset
|   |   |   |-- 🖼️ vercel.svg                         # static media asset
|   |   |   |-- 🖼️ window.svg                         # static media asset

|   |   |-- 📁 src/                         # source code

|   |   |   |-- 📁 app/                         # Next.js app router files
|   |   |   |   |-- 🖼️ favicon.ico                         # site icon
|   |   |   |   |-- 🎨 globals.css                         # global styles
|   |   |   |   |-- 🧩 layout.tsx                         # root layout and app-wide setup
|   |   |   |   |-- 🧩 page.tsx                         # route page component

|   |   |   |-- 📁 components/                         # UI components

|   |   |   |   |-- 📁 home/                         # homepage section components
|   |   |   |   |   |-- 🧩 HeaderSection.tsx                         # React/Next component file
|   |   |   |   |   |-- 🧩 HeroSection.tsx                         # React/Next component file
|   |   |   |   |   |-- 🧩 HomeSections.tsx                         # React/Next component file

|   |   |   |   |-- 📁 sections/                         # directory
|   |   |   |   |   |-- 🧩 AboutSection.tsx                         # React/Next component file
|   |   |   |   |   |-- 🧩 CtaSection.tsx                         # React/Next component file
|   |   |   |   |   |-- 🧩 HeroSection.tsx                         # React/Next component file
|   |   |   |   |   |-- 🧩 InsightsSection.tsx                         # React/Next component file
|   |   |   |   |   |-- 🧩 ProductClusterSection.tsx                         # React/Next component file
|   |   |   |   |   |-- 🧩 RflSectionRenderer.tsx                         # React/Next component file
|   |   |   |   |   |-- 🧩 SiteFooter.tsx                         # React/Next component file
|   |   |   |   |   |-- 🧩 SiteHeader.tsx                         # React/Next component file
|   |   |   |   |   |-- 🧩 StatsSection.tsx                         # React/Next component file
|   |   |   |   |   |-- 🧩 TrustSection.tsx                         # React/Next component file

|   |   |   |-- 📁 content/                         # static content definitions
|   |   |   |   |-- 🧩 homepage.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 rflHomepageContent.ts                         # structured static homepage content

|   |   |   |-- 📁 theme/                         # theme tokens and definitions
|   |   |   |   |-- 🧩 rflTheme.ts                         # RFL theme metadata and design tokens
|   |   |-- ⚙️ tsconfig.json                         # TypeScript compiler configuration

|-- ⚙️ package.json                         # package manifest and scripts

|-- 📁 packages/                         # shared packages workspace

|   |-- 📁 platform-core/                         # directory
|   |   |-- ⚙️ package.json                         # package manifest and scripts

|   |   |-- 📁 src/                         # source code

|   |   |   |-- 📁 fields/                         # directory
|   |   |   |   |-- 🧩 common.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 field-definition.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 index.ts                         # TypeScript source file
|   |   |   |-- 🧩 index.ts                         # TypeScript source file

|   |   |   |-- 📁 sections/                         # directory
|   |   |   |   |-- 🧩 about-company.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 hero-static.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 index.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 insights-preview.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 product-cluster-overview.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 quote-cta.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 registry.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 section-definition.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 site-footer.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 site-header.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 stats-bar.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 trust-section.ts                         # TypeScript source file

|   |   |   |-- 📁 types/                         # directory
|   |   |   |   |-- 🧩 page.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 section.ts                         # TypeScript source file
|   |   |   |   |-- 🧩 site.ts                         # TypeScript source file
|   |   |-- ⚙️ tsconfig.json                         # TypeScript compiler configuration

|-- ⚙️ pnpm-lock.yaml                         # dependency lockfile

|-- ⚙️ pnpm-workspace.yaml                         # pnpm workspace configuration

|-- 📁 scripts/                         # project automation scripts

|   |-- 🔧 update-structure.sh                         # regenerates this structure file

|-- ⚙️ turbo.json                         # Turborepo pipeline configuration
```
