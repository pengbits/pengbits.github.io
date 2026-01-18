# Next.js to Astro Migration Plan

## Project Overview

Migrating a portfolio website from Next.js 15 (App Router, static export) to Astro.

**Current stack:** Next.js 15 + Chakra UI + Emotion + Tailwind v4 + next-themes + TypeScript
**Target stack:** Astro + Tailwind CSS + React islands (for interactivity) + TypeScript

### Key Decisions
- **Styling:** Fully migrate from Chakra UI to Tailwind CSS (no Chakra/Emotion)
- **Interactivity:** Keep complex components as React islands
- **Approach:** New `/astro` directory alongside existing Next.js for safe migration

---

## Order of Operations

### Phase 1: Project Setup (`/astro` directory)
1. Run `npm create astro@latest astro` from project root
2. Configure TypeScript and `@/*` path aliases in `tsconfig.json`
3. Install integrations: `npx astro add react tailwind`
4. Copy over `/src/data/`, `/src/lib/`, `/src/types/`, `/public/` (no changes needed)
5. Set up `astro.config.mjs` with base path support

### Phase 2: Styling Migration (Chakra → Tailwind)

**Chakra → Tailwind mapping:**
| Chakra | Tailwind |
|--------|----------|
| `<Box>` | `<div className="...">` |
| `<Flex>` | `<div className="flex">` |
| `<Grid>` | `<div className="grid">` |
| `<Container>` | `<div className="container mx-auto">` |
| `<Heading as="h2" size="xl">` | `<h2 className="text-xl font-bold">` |
| `<Text>` | `<p>` or `<span>` |
| `mt="4"` | `className="mt-4"` |
| `_dark={{ bg: "gray.900" }}` | `className="dark:bg-gray-900"` |

**Tasks:**
1. Port `globals.css` to Tailwind
2. Implement dark mode with `dark:` variant + inline script (replaces next-themes)
3. Create Astro equivalents for layout components:
   - `Section.astro`
   - `InnerContainer.astro`
   - `SectionAnchor.astro`
   - `ButtonLink.astro`

### Phase 3: Layout & Static Pages
1. Create `src/layouts/BaseLayout.astro` (replaces `layout.tsx`)
2. Create `src/pages/index.astro` (home page)
3. Port navigation as `Nav.astro` with dark mode toggle
4. Port static components: `Footer`, `SkillsList`, `ProjectGrid`, `ProjectGridItem`

### Phase 4: Dynamic Routes
1. Create `src/pages/projects/[id]/[slug].astro`
2. Implement `getStaticPaths()` (replaces `generateStaticParams`)
3. Port project detail components: `Highlights`, `BodyText`, `ResponsiveImage`, `YouTubeEmbed`

### Phase 5: Interactive Components (React Islands)
Keep these as React components with `client:load` or `client:visible`:
- `ProjectsSection.tsx` → needs URL search params (`client:load`)
- `ProjectGridWithLoadMore.tsx` → state management for load more (`client:visible`)
- `ContactForm.tsx` → form state and async submission (`client:visible`)
- `Recommendations.tsx` → carousel (replace Chakra Carousel with Embla or similar)

**Note:** These components will need Chakra removed and replaced with Tailwind classes.
Use `client:visible` where possible for better performance (defers hydration until visible).

### Phase 6: Testing & Cleanup
1. Build and verify all pages generate
2. Test dark mode persistence
3. Test contact form submission to Formspree
4. Compare bundle size and Lighthouse scores
5. Remove Next.js dependencies

---

## Key File Mappings

| Next.js | Astro |
|---------|-------|
| `src/app/layout.tsx` | `src/layouts/BaseLayout.astro` |
| `src/app/page.tsx` | `src/pages/index.astro` |
| `src/app/projects/[id]/[slug]/page.tsx` | `src/pages/projects/[id]/[slug].astro` |
| `src/components/ui/provider.tsx` | Remove (not needed) |
| `src/components/ui/color-mode.tsx` | `src/components/ThemeSwitcher.astro` |
| `src/components/Section.tsx` | `src/components/Section.astro` |
| `src/components/nav/index.tsx` | `src/components/Nav.astro` |
| `src/data/*`, `src/lib/*`, `src/types/*` | No changes |
| `public/*` | No changes |

---

## Dark Mode (Without next-themes)

```astro
<!-- In BaseLayout.astro <head> -->
<script is:inline>
  const theme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', theme === 'dark');
</script>
```

---

## Dependencies Changes

**Remove:**
- `next`, `@chakra-ui/react`, `@emotion/*`, `next-themes`

**Add:**
- `astro`, `@astrojs/react`, `@astrojs/tailwind`
- `embla-carousel-react` (for Recommendations carousel)

**Keep:**
- `react`, `react-dom` (for React islands)
- `react-icons` (used in components)
- `tailwindcss`, `typescript`

---

## Verification Steps

1. `npm run build` succeeds with all pages generated
2. Dark mode toggle works and persists across page loads
3. Project detail pages render for all 9 projects
4. "Load More" button loads additional projects
5. Contact form submits successfully to Formspree
6. Navigation hash links scroll to sections
7. Responsive layout works on mobile/desktop
8. Lighthouse performance score ≥ current score

---

## Critical Files to Modify

- `src/app/layout.tsx` → Port to `BaseLayout.astro`
- `src/app/page.tsx` → Port to `index.astro`
- `src/app/projects/[id]/[slug]/page.tsx` → Port to `[id]/[slug].astro`
- `src/components/ui/color-mode.tsx` → Replace with Astro dark mode
- `src/components/Section.tsx` → Convert to Astro component
- `src/components/nav/index.tsx` → Convert to Astro component
