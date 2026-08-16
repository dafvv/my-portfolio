# Design System Specification (DESIGN.md)

## 1. Design Token Mapping

| Token Name | Light Mode | Dark Mode | Tailwind CSS Mapping |
| :--- | :--- | :--- | :--- |
| `canvas-bg` | `#f2f0ef` | `#191919` | `bg-[#f2f0ef] dark:bg-[#191919]` |
| `canvas-fg` | `#191919` | `#f2f0ef` | `text-[#191919] dark:text-[#f2f0ef]` |
| `border-line` | `#191919` | `#f2f0ef` | `border-[#191919] dark:border-[#f2f0ef]` |
| `card-neutral` | `#d9d9d9` | `#2a2a2a` | `bg-[#d9d9d9] dark:bg-[#262626]` |
| `text-muted` | `#666666` | `#a0a0a0` | `text-[#666666] dark:text-[#a0a0a0]` |

## 2. Typography Hierarchy

| Role | Font Family | Size | Weight | Line Height | Case | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `Hero Headline` | `'Iosevka NFM', monospace` | `96px` / `clamp(2.75rem, 7vw, 6rem)` | Regular (400) | `1.0` | Uppercase | Hero title on Home page |
| `Section Heading` | `'Iosevka NFM', monospace` | `32px` / `2rem` | Regular (400) | `1.2` | Uppercase | "ABOUT ME", "MOTIVATION", "SKILLS", "STACK" |
| `Card / Subtitle` | `'Iosevka NFM', monospace` | `24px` / `1.5rem` | Regular (400) | `1.3` | Uppercase | Blog post titles, Project titles |
| `Nav Item` | `'Iosevka NFM', monospace` | `20px` / `1.25rem` | Regular (400) | `1.4` | Title Case | Sidebar navigation links |
| `Body Prose` | `'Overpass', sans-serif` | `20px` / `1.25rem` | Regular (400) | `1.6` | Normal | Paragraphs, descriptions, lists |
| `Sub-text / Meta` | `'Overpass', sans-serif` | `14px-16px` | Regular (400) | `1.5` | Normal | Labels, tags, timestamps |

## 3. Spatial & Layout Grid
- **Desktop Sidebar**: Fixed `156px` left bar with `border-r border-[#191919] dark:border-[#f2f0ef]`.
- **Main Content Offset**: `left-[156px]` or `md:pl-[156px]` with max-width container `1128px` to `1280px`.
- **Section Dividers**: 1px horizontal rule (`h-px bg-[#191919] dark:bg-[#f2f0ef]`) extending beneath section headers.
- **Mobile Breakpoint (<768px)**: Sidebar shifts to responsive top/bottom bar or sticky header with accessible touch targets.

## 4. Animation & Interaction Spec
- **Smooth Scroll**: Lenis RAF loop enabled globally, duration `1.2s`, easing `easeOutExpo`.
- **Cursor Trail**: 2D HTML5 canvas particle/line trail with lerp smoothing `0.15`, fading opacity, and automatic suppression on mobile/touch screens or `prefers-reduced-motion`.
- **View Transitions**: Astro Native View Transitions API `<ClientRouter />` ensuring seamless cross-page state retention.
- **Project Slider**: Motion-animated horizontal slide transitions with spring physics.
