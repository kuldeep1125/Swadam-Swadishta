# 🔍 Swadam Swadishta — Full Website Audit Report

> **Auditor:** Senior Product Designer / UX Researcher / Frontend Architect  
> **Date:** 2026-10-03  
> **Stack:** Next.js 14.2.35 (Static Export) · React 18 · TailwindCSS 3.4 · Framer Motion · GSAP · Lucide Icons  
> **Site:** `http://localhost:3001` (dev) / `https://swadamswadishta.com` (prod)

---

## Executive Summary

Swadam Swadishta is a **single-page marketing site** for an authentic Maharashtrian vegetarian restaurant in Baner, Pune. The codebase is well-structured with a centralized data config, 19 purpose-built components, and strong bilingual (English + Marathi) support. The visual design is already compelling — warm saffron/turmeric palette, authentic brand motifs, and editorial typography. However, there are **specific, fixable issues** across accessibility, responsiveness, performance, and code quality preventing it from being world-class.

---

## Area Scores (out of 10)

| # | Area | Score | Summary |
|---|------|-------|---------|
| 1 | **Visual Design** | 8.0/10 | Strong palette & typography. Needs image optimization and minor spacing fixes. |
| 2 | **UX** | 7.5/10 | Clear flows & CTAs. Content repetition across sections dilutes impact. |
| 3 | **Responsiveness** | 7.0/10 | Solid mobile-first work done. Several sticky-header overlaps and edge cases remain. |
| 4 | **Motion & Interaction** | 7.5/10 | Good reduced-motion support. Parallax on scroll causes scroll-linked re-renders. |
| 5 | **Accessibility** | 5.5/10 | Focus states exist but incomplete. Missing skip-link, landmark issues, color contrast gaps. |
| 6 | **Performance** | 5.0/10 | Massive unoptimized images (~15MB total). No lazy loading. GSAP+Framer both included but neither used. |
| 7 | **SEO** | 8.5/10 | Excellent structured data & meta. Missing sitemap.xml, robots.txt, canonical issues with static export. |
| 8 | **Code Quality** | 7.0/10 | Clean component structure. Two unused dependencies (gsap, framer-motion). Scroll listeners cause unnecessary re-renders. |
| 9 | **Cross-Browser** | 7.5/10 | Standard Tailwind approach works broadly. `animate-in` utility is undefined (no Tailwind Animate plugin). |

### 📊 Lighthouse Audit Results (Verified)

> [!IMPORTANT]
> These are actual measured scores from running Lighthouse against `http://localhost:3001`:

| Metric | Score/Value |
|--------|-------------|
| **Performance** | **52/100** 🔴 |
| **Accessibility** | **86/100** 🟡 |
| **Best Practices** | **100/100** 🟢 |
| **SEO** | **100/100** 🟢 |
| FCP (First Contentful Paint) | 2.3s |
| LCP (Largest Contentful Paint) | **25.2s** 🔴 |
| TBT (Total Blocking Time) | 840ms 🟡 |
| CLS (Cumulative Layout Shift) | 0 🟢 |
| Speed Index | 2.7s |

**Key Lighthouse Failures:**
- ❌ **Color contrast:** 7 elements flagged (`.text-turmeric-400.opacity-60`, `.text-brown-400` on cream backgrounds)
- ❌ **Form labels:** Date input missing associated `<label>` with `for` attribute
- ❌ **Select name:** Select element missing associated label
- ❌ **Label content name mismatch:** Visible text doesn't match accessible name
- ❌ **Source maps:** Missing for first-party JS
- ❌ **BFCache:** Page prevented back/forward cache restoration

---

## Prioritized Issue List

### 🔴 CRITICAL (Ship-blocking)

#### C1. Massive Unoptimized Images (~15MB in `/public/images/`)
- **What:** 61 image files totaling ~15MB. HD images (e.g., `hd_lunch_thali.jpg` at 891KB, `hd_misal_pav.jpg` at 795KB, `hd_poha_plate.jpg` at 804KB) are served at full resolution with `unoptimized: true` in `next.config.mjs`.
- **Where:** [next.config.mjs](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/next.config.mjs#L5-L7), every `<Image>` component across all files
- **Why it matters:** First-time page load downloads multiple megabytes of images. LCP will be 5-10+ seconds on 3G. Google will penalize rankings.
- **Fix:** Remove `unoptimized: true` if deploying to Vercel (which supports Next.js Image Optimization). For static export, convert HD images to WebP at appropriate sizes (800px max-width for cards, 1200px for heroes), compress to ~80% quality. Add `loading="lazy"` to all below-fold images. Only the hero thali and logo should have `priority`.

#### C2. Two Unused Dependencies: `gsap` (200KB+) and `framer-motion` (130KB+)
- **What:** `gsap@3.12.5` and `framer-motion@11.11.17` are listed in `package.json` but **never imported anywhere** in the codebase.
- **Where:** [package.json L14](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/package.json#L14), [package.json L13](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/package.json#L13)
- **Why it matters:** Combined ~330KB+ of unused JavaScript. Even with tree-shaking, the install bloats `node_modules` and risks accidental import.
- **Fix:** `npm uninstall gsap framer-motion`

#### C3. No Skip-to-Content Link (WCAG 2.2 AA Failure)
- **What:** Keyboard users must tab through the entire navigation (logo, 7 links, 3 CTA buttons) before reaching page content.
- **Where:** [layout.tsx L171-L182](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/app/layout.tsx#L171-L182)
- **Why it matters:** WCAG 2.4.1 "Bypass Blocks" — required for AA compliance.
- **Fix:** Add a visually hidden skip link as the first child of `<body>` that becomes visible on focus: `<a href="#main-content" className="sr-only focus:not-sr-only ...">Skip to main content</a>` and add `id="main-content"` to the `<main>` element.

---

### 🟠 HIGH (Significant UX/quality impact)

#### H1. Mobile Nav Drawer z-index Collision with Header
- **What:** The mobile navigation overlay (`z-[60]`) renders *behind* the header (`z-[70]`), meaning the close button is only visible because it's part of the header. The nav content starts at `pt-24` but the header still overlaps the top of the drawer.
- **Where:** [Navigation.tsx L179](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/Navigation.tsx#L179) vs [L61](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/Navigation.tsx#L61)
- **Why it matters:** On small-height devices (e.g., landscape phones), the drawer content can be partially hidden.
- **Fix:** Set mobile drawer to `z-[75]` (above header) and include the close button within the drawer itself, or increase the drawer's `pt` to safely clear the header.

#### H2. Sticky Menu Filter Bar Hidden Under Fixed Nav
- **What:** The menu category filter bar is `sticky top-16` but the nav header height varies (py-2.5 + content). On mobile, the filter bar slides under the nav.
- **Where:** [SignatureMenu.tsx L28](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/SignatureMenu.tsx#L28) — `sticky top-16`
- **Why it matters:** Users can't see or interact with menu filters when scrolling through the menu on mobile.
- **Fix:** Change to `sticky top-[60px] sm:top-[68px]` matching actual nav height, or use a CSS custom property for nav height.

#### H3. `animate-in` CSS Class Not Defined
- **What:** Multiple components use `animate-in fade-in slide-in-from-bottom-2 duration-300` classes (e.g., Navigation.tsx L180, StickyStory.tsx), but there's no `tailwindcss-animate` plugin installed.
- **Where:** [Navigation.tsx L180](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/Navigation.tsx#L180), [FloatingCTA.tsx L29](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/FloatingCTA.tsx#L29), [StickyStory.tsx L163](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/StickyStory.tsx#L163), [SignatureMenu.tsx L449](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/SignatureMenu.tsx#L449)
- **Why it matters:** These animations silently fail — no entrance transitions occur. Components appear instantly.
- **Fix:** Either install `tailwindcss-animate` and add to plugins in `tailwind.config.ts`, or replace with CSS keyframe animations in `globals.css`.

#### H4. ScrollY-Driven State Updates Cause Re-renders (Performance)
- **What:** `EditorialIntro.tsx` stores `scrollY` in state, causing the entire component (including the features grid) to re-render on *every* scroll frame. `Hero.tsx` stores mouse position in state, causing re-renders on every mouse move.
- **Where:** [EditorialIntro.tsx L10-L28](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/EditorialIntro.tsx#L10-L28), [Hero.tsx L18-L54](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/Hero.tsx#L18-L54)
- **Why it matters:** Scroll jank on lower-end devices. Causes INP degradation.
- **Fix:** Use `useRef` + `requestAnimationFrame` to write transforms directly to DOM via `ref.current.style.transform` instead of `setState`.

#### H5. Mobile Bottom CTA Bar Overlaps Footer Content
- **What:** The `pb-20 sm:pb-24 lg:pb-0` on `<main>` provides clearance, but the footer's copyright line and FSSAI badge are still hidden behind the fixed bottom bar.
- **Where:** [page.tsx L25](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/app/page.tsx#L25), [FloatingCTA.tsx L63](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/FloatingCTA.tsx#L63)
- **Why it matters:** Users can never see the FSSAI license number or copyright text on mobile.
- **Fix:** Increase `pb-20` to `pb-24` and add corresponding bottom padding to the footer section itself.

#### H6. No `<main>` Landmark Accessible to Assistive Technology
- **What:** The `<main>` element exists but has no `id` for skip links. The `role="dialog"` on the mobile nav is good, but there's no `aria-live` regions for dynamic content changes (menu filtering).
- **Where:** [page.tsx L25](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/app/page.tsx#L25)
- **Fix:** Add `id="main-content"` and `role="main"` to the `<main>` element.

---

### 🟡 MEDIUM (Polish & best practices)

#### M1. Missing `robots.txt` and `sitemap.xml`
- **Where:** `/public/` directory — neither file exists
- **Fix:** Create `public/robots.txt` with `User-agent: * Allow: / Sitemap: https://swadamswadishta.com/sitemap.xml` and `public/sitemap.xml` with the single page URL.

#### M2. Missing Favicon Formats
- **What:** Only `logo.png` is used for both icon and apple-touch-icon. No `favicon.ico`, no 192x192 or 512x512 manifest icons.
- **Where:** [layout.tsx L73-L76](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/app/layout.tsx#L73-L76)
- **Fix:** Generate proper favicon set from the logo and add a web app manifest.

#### M3. Form Lacks Proper `<form>` Submit Event Handling
- **What:** The enquiry form uses `type="button"` for both submit actions, bypassing HTML5 native form validation. The `required` attributes on inputs are never enforced by the browser.
- **Where:** [EnquirySection.tsx L165-L183](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/EnquirySection.tsx#L165-L183)
- **Fix:** Make the WhatsApp button `type="submit"` so browser validation runs, or add explicit validation before `window.open`.

#### M4. Hardcoded Email in JavaScript
- **What:** `swadamswadishta@gmail.com` is hardcoded in the submit handler.
- **Where:** [EnquirySection.tsx L30](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/EnquirySection.tsx#L30)
- **Fix:** Move to `restaurant.ts` config as a new `email` field.

#### M5. Color Contrast Issues
- **What:** Several text combinations may fail WCAG AA 4.5:1 ratio:
  - `text-brown-600` on `bg-cream-50` background (~3.8:1)
  - `text-cream-200` on dark gradient backgrounds (varies)
  - `text-[10px]` and `text-[9px]` Devanagari text is extremely small for readability
- **Where:** Throughout — particularly [Hero.tsx L194-L197](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/Hero.tsx#L194-L197), [Navigation.tsx L103](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/Navigation.tsx#L103)
- **Fix:** Audit each combination with a contrast checker. Minimum 11px for body text.

#### M6. Images Missing Explicit `width`/`height` (CLS)
- **What:** Many `<Image fill>` components without `sizes` prop or with generic `sizes`, which can cause layout shift.
- **Where:** Multiple components — e.g., [SignatureMenu.tsx L128-L133](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/SignatureMenu.tsx#L128-L133)
- **Fix:** Add appropriate `sizes` prop to all `fill` images.

#### M7. Content Repetition Across Sections
- **What:** The same Misal Pav image and data appears in: Hero satellite, Breakfast chapter, FeaturedDish, FoodShowcase, and StickyStory. The Lunch Thali appears in Hero, Thali chapter, FoodShowcase, and StickyStory. This creates a repetitive feeling.
- **Why it matters:** Users see the same food photos 4-5 times scrolling through the page, diminishing impact.
- **Fix:** Curate unique imagery per section. Use different angles/crops of the same dish.

#### M8. No Error Boundary
- **What:** No React Error Boundary wraps any component. A single component crash takes down the entire page.
- **Fix:** Add a simple ErrorBoundary component wrapping `{children}` in `layout.tsx`.

#### M9. Enquiry Form Has No Success/Error State
- **What:** After clicking "Send via WhatsApp", the user is redirected to WhatsApp but the form shows no confirmation. `submittedMethod` state is set but never used in the UI.
- **Where:** [EnquirySection.tsx L18](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/EnquirySection.tsx#L18) — `submittedMethod` is set but never read
- **Fix:** Show a success toast or inline confirmation after submission.

---

### 🟢 LOW (Nice to have)

#### L1. No `lang="mr"` Attribute on Marathi Text
- **What:** All Marathi/Devanagari text is within an `lang="en"` page without `lang="mr"` annotations.
- **Fix:** Add `lang="mr"` to Marathi-containing `<span>` elements.

#### L2. `terracotta-50` Used But Not Defined in Tailwind Config
- **Where:** [SwadamExperience.tsx L44](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/components/SwadamExperience.tsx#L44) — `bg-terracotta-50`
- **Fix:** Either add `terracotta-50` to `tailwind.config.ts` or replace with an existing shade.

#### L3. No `rel="noopener"` on Some External Links
- **What:** All WhatsApp and Google Maps links have `rel="noopener noreferrer"` ✅ — but internal anchor links use `<a>` instead of Next.js `<Link>` for hash navigation. This is acceptable for a single-page app.

#### L4. Font Loading Could Be Optimized
- **What:** Three Google Fonts loaded (Outfit, Rozha One, Kalam) with multiple weights. The `display: "swap"` is correct, but preconnect hints to `fonts.googleapis.com` are missing.
- **Fix:** Add `<link rel="preconnect" href="https://fonts.googleapis.com">` in the `<head>`.

#### L5. Missing Open Graph Image Dimensions for Twitter Card
- **Where:** [layout.tsx L71](file:///c:/Users/sadee/Downloads/Swadam%20Swadishta/src/app/layout.tsx#L71)
- **Fix:** Twitter cards benefit from explicit image dimensions.

---

## Quick Wins (Under 30 Minutes Each)

| # | Fix | Time | Impact |
|---|-----|------|--------|
| 1 | Remove `gsap` and `framer-motion` from dependencies | 2 min | Reduces install size by ~330KB |
| 2 | Add skip-to-content link | 5 min | WCAG AA compliance |
| 3 | Create `robots.txt` and `sitemap.xml` | 5 min | SEO fundamentals |
| 4 | Fix sticky menu bar `top` offset | 5 min | Mobile menu usability |
| 5 | Add `id="main-content"` to `<main>` | 1 min | Accessibility landmark |
| 6 | Move hardcoded email to config | 5 min | Maintainability |
| 7 | Fix `animate-in` by adding CSS keyframes or installing plugin | 10 min | Restore entrance animations |
| 8 | Add `lang="mr"` to Devanagari spans | 15 min | Screen reader language switching |
| 9 | Add `terracotta-50` to Tailwind config | 2 min | Fix undefined utility class |
| 10 | Add preconnect hints for Google Fonts | 2 min | Font loading speed |

---

## World-Class Upgrades

### 1. 🎨 Design System Formalization
Top restaurant sites like **Dishoom**, **Dosa London**, and **Bombay Bustle** use tight design tokens. Create a `design-tokens.ts` with spacing scale, consistent border-radius (you currently mix `rounded-2xl`, `rounded-3xl`, `rounded-full` without clear rules), and standardized shadow depths.

### 2. 🎬 Scroll-Triggered Section Reveals
Replace the non-functional `animate-in` classes with `IntersectionObserver`-based reveal animations. Each section fades up as the user scrolls into it. Top sites like **Nobu Restaurants** and **Eleven Madison Park** use this extensively.

### 3. 📸 Image Gallery Lightbox with Swipe
The menu artwork viewer could support swipe gestures on mobile, auto-advance, and pinch-to-zoom. Reference: **Peter Luger Steak House** menu viewer.

### 4. 🌐 PWA Support
Add a `manifest.json` with theme colors matching the brand, enable offline caching of static assets, and add "Add to Home Screen" support for returning customers.

### 5. 🍽️ Interactive Menu Pricing Calculator
Let users build a meal and see the total before visiting. "2x Poha + 1x Misal Pav + 2x Chai = ₹135". **Sweetgreen** and **Chipotle** web experiences do this effectively.

### 6. ⭐ Live Google Reviews Integration
Replace the 3 static reviews with a live Google Places API feed showing the actual rating count and recent reviews. This dramatically increases trust signals.

### 7. 📊 Analytics Integration
No analytics are present. Add Google Analytics 4 or Plausible for visitor insights, and track CTA clicks (Call, WhatsApp, Directions) as conversion events.

### 8. 🗺️ Embedded Google Map
Replace the stylized SVG map illustration with an actual embedded Google Maps iframe for the Location section, giving users real wayfinding functionality.

---

## Screenshots Reference

````carousel
![Hero at 1440px Desktop](C:/Users/sadee/.gemini/antigravity-ide/brain/ecba974c-9c6a-4a9e-95e5-1dbb8511bfae/hero_1440px_1791048811774.png)
<!-- slide -->
![Hero at 375px Mobile](C:/Users/sadee/.gemini/antigravity-ide/brain/ecba974c-9c6a-4a9e-95e5-1dbb8511bfae/hero_375px_1791048855330.png)
<!-- slide -->
![Mobile Nav Open at 375px](C:/Users/sadee/.gemini/antigravity-ide/brain/ecba974c-9c6a-4a9e-95e5-1dbb8511bfae/mobile_nav_open_375px_1791048873584.png)
<!-- slide -->
![Menu Section at 1440px](C:/Users/sadee/.gemini/antigravity-ide/brain/ecba974c-9c6a-4a9e-95e5-1dbb8511bfae/menu_1440px_1791048825695.png)
<!-- slide -->
![Lunch Thali Filter at 375px](C:/Users/sadee/.gemini/antigravity-ide/brain/ecba974c-9c6a-4a9e-95e5-1dbb8511bfae/menu_filtered_lunch_thali_375px_1791048915004.png)
<!-- slide -->
![Hero at 768px Tablet](C:/Users/sadee/.gemini/antigravity-ide/brain/ecba974c-9c6a-4a9e-95e5-1dbb8511bfae/hero_768px_1791048944243.png)
<!-- slide -->
![Footer at 1440px](C:/Users/sadee/.gemini/antigravity-ide/brain/ecba974c-9c6a-4a9e-95e5-1dbb8511bfae/footer_1440px_1791048837205.png)
<!-- slide -->
![Enquiry Form Disabled Buttons](C:/Users/sadee/.gemini/antigravity-ide/brain/ecba974c-9c6a-4a9e-95e5-1dbb8511bfae/enquiry_form_disabled_buttons_1791048985861.png)
````

---

## Browser Recording

![Full site audit walkthrough at 1440px, 768px, and 375px](C:/Users/sadee/.gemini/antigravity-ide/brain/ecba974c-9c6a-4a9e-95e5-1dbb8511bfae/full_site_audit_1791048785421.webp)

---

## Implementation Plan (Pending Your Approval)

### Phase 1: Critical Fixes (Est. 2 hours)
1. Remove unused `gsap` and `framer-motion` dependencies
2. Add skip-to-content link + `id="main-content"`
3. Fix `animate-in` classes (add CSS keyframes to globals.css)
4. Fix sticky menu bar overlap with nav header
5. Fix mobile bottom CTA bar footer overlap
6. Add `robots.txt` and `sitemap.xml`

### Phase 2: Performance (Est. 3 hours)
7. Optimize all HD images to WebP, resize to max 1200px
8. Add proper `sizes` and `loading="lazy"` to below-fold images
9. Refactor scroll/mouse-driven state to `useRef` + direct DOM manipulation
10. Add font preconnect hints

### Phase 3: Accessibility (Est. 2 hours)
11. Add `lang="mr"` to Devanagari text spans
12. Fix color contrast ratios for small text
13. Ensure all interactive elements have min 44x44px touch targets
14. Add `aria-live` region for menu filter changes

### Phase 4: Code Quality & Polish (Est. 2 hours)
15. Move hardcoded email to config
16. Add `terracotta-50` to Tailwind config
17. Add form validation and success state to enquiry form
18. Add Error Boundary component

### Phase 5: World-Class Upgrades (Est. 4-6 hours)
19. Scroll-triggered section reveal animations
20. Embedded Google Map
21. PWA manifest and icons
22. Analytics integration

---

> **Next step:** Please review this report and approve the implementation plan. I'll then apply fixes in priority order, testing in the browser after each batch.
