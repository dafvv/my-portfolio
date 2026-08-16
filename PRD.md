# Product Requirements Document (PRD)

## 1. Executive Summary
- **Product**: Daffa Bisma Rudidharma Portfolio & Technical Blog
- **Mission**: High-performance, zero-bloat portfolio showcasing full-stack engineering capability with an editorial monospaced aesthetic.
- **Target Performance**: 100/100 Lighthouse on Desktop and Mobile across Performance, Accessibility, Best Practices, and SEO.

## 2. Information Architecture & Routing

| Route | Page Type | Source Figma Node | Purpose |
| :--- | :--- | :--- | :--- |
| `/` | Static SSG | `1:2` (Light), `8:394` (Dark) | Hero statement, About Me, Motivation, 3-column Skills matrix, direct route anchors. |
| `/projects` | Static SSG + Client Island | `5:55` (Light), `8:372` (Dark) | Interactive project showcase with `01/XX` counter, tech stack breakdown, and slider. |
| `/blog` | Static SSG | `7:315` (Light), `8:347` (Dark) | 2-column editorial gallery of articles and technical writings. |
| `/blog/[slug]` | Static SSG + MDX | Custom Editorial Layout | Full-prose article layout with syntax highlighting and back navigation. |
| `/404` | Static SSG | Error Handler | Branded 404 page matching design aesthetic. |

## 3. Content Collection Schemas

### `projects`
- `title` (string, required): Project headline name.
- `projectNumber` (string, required): Formatted index identifier (e.g. `01`, `02`).
- `description` (string, required): Narrative summary of project architecture.
- `stack` (array of strings, required): List of technologies, libraries, and frameworks.
- `previewImage` (string, optional): Preview screenshot or asset path.
- `link` (string, optional): Live deployment URL.
- `github` (string, optional): Source repository URL.
- `metrics` (array of strings, optional): Key performance or business outcomes.
- `order` (number, required): Sort ordering for project sequence.

### `blog`
- `title` (string, required): Article headline.
- `description` (string, required): Short summary for previews and OpenGraph tags.
- `publishDate` (date, required): Publication timestamp.
- `tags` (array of strings, required): Category tags.
- `coverImage` (string, optional): Hero graphic path.
- `readingTime` (string, optional): Estimated read time.
- `draft` (boolean, default false): Flag for unpublished content.

## 4. Accessibility & Non-Functional Requirements
- **Tap Targets**: All buttons, links, and toggles must satisfy >= 44x44px bounding box.
- **Focus Rings**: High-contrast outline (`focus-visible:ring-2 focus-visible:ring-offset-2`).
- **Motion Reduction**: `prefers-reduced-motion` suppresses canvas cursor trail and disables Lenis smooth scrolling.
- **Theme Persistence**: Light (`#f2f0ef`) and Dark (`#191919`) toggle synced with `localStorage` and system preferences with zero FOUC.
