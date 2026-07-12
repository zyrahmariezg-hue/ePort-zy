---
name: ePortfolio — PETA Group
description: A calm, editorial ePortfolio where three accent voices — reflective blue, community green, personal rose — carry the reader through community engagement, philosophy, and personal reflection.
colors:
  ink: "oklch(24% 0.045 265)"
  ink-secondary: "oklch(40% 0.035 262)"
  ink-muted: "oklch(54.5% 0.028 258)"
  bg: "oklch(98.5% 0.005 250)"
  surface: "#ffffff"
  surface-alt: "oklch(96.5% 0.010 250)"
  border: "oklch(90% 0.014 255)"
  border-light: "oklch(94% 0.010 255)"
  accent: "oklch(50% 0.155 258)"
  accent-hover: "oklch(40% 0.155 258)"
  accent-light: "oklch(94.5% 0.030 258)"
  accent-green: "oklch(53% 0.135 152)"
  accent-green-hover: "oklch(42% 0.135 152)"
  accent-green-light: "oklch(94.5% 0.035 150)"
  accent-warm: "oklch(55.5% 0.165 8)"
  accent-warm-hover: "oklch(43.5% 0.165 8)"
  accent-warm-light: "oklch(94.5% 0.035 12)"
typography:
  display:
    fontFamily: "'Outfit Variable', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.75rem + 3vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Outfit Variable', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.75rem + 3vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Outfit Variable', system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "'Source Serif 4 Variable', Georgia, 'Times New Roman', serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'Outfit Variable', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.04em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
components:
  callout-blue:
    backgroundColor: "{colors.accent-light}"
    textColor: "{colors.accent}"
    rounded: "{rounded.md}"
    padding: "32px"
  callout-green:
    backgroundColor: "{colors.accent-green-light}"
    textColor: "{colors.accent-green}"
    rounded: "{rounded.md}"
    padding: "32px"
  callout-rose:
    backgroundColor: "{colors.accent-warm-light}"
    textColor: "{colors.accent-warm}"
    rounded: "{rounded.md}"
    padding: "32px"
  card-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "32px"
  card-rose:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "32px"
---

# Design System: ePortfolio — PETA Group

## 1. Overview

**Creative North Star: "The Three-Voice Notebook"**

This is a notebook, not a dashboard: a document meant to be read start to finish, one calm page at a time. Serif body copy and generous line-height (1.7) carry the actual reflection; sans-serif Outfit is reserved for structure — headings, labels, navigation — so the reader always knows which register they're in, thinking or being told where they are.

Three accent voices run through the notebook, each tied to a real chapter rather than decoration: reflective blue for the philosophical work, community green for the engagement chapter, and a personal rose for the individual reflections. Each color appears exactly where its subject appears — the palette is a map of the content, not a mood board layered on top of it. The system explicitly rejects the generic SaaS-landing-page look (no hero-metric blocks, no stock-photo gloss, no salesy CTAs) and anything that reads flippant or performative; every choice should feel earned by the writing it surrounds.

**Key Characteristics:**
- Cool, near-white paper background — never cream or sand-tinted
- Serif body text, sans structural chrome (headings, labels, nav)
- Three named accents, each scoped to one real chapter of the portfolio
- Flat by default; shadow appears only as a response to state (the mobile menu overlay)
- Dashed borders mark placeholder content honestly, rather than hiding it

## 2. Colors

Light and cool throughout — the palette avoids the warm cream/sand default in favor of a paper that leans faintly blue, letting the three accents (not the background) carry the color.

### Primary
- **Reflective Blue** (oklch(50% 0.155 258) / #2060b9): The default interactive color — links, the active nav underline, the Philosophical Reflection page's "Key Realization" callout. Stands for the thinking-through-it chapter.

### Secondary
- **Community Green** (oklch(53% 0.135 152) / #0e8142): Used once, deliberately, on the Community Engagement page's "Community Impact" callout. Never appears outside that chapter.

### Tertiary
- **Personal Rose** (oklch(55.5% 0.165 8) / #be3e60): The warm, human accent — one student's Card border on Personal Reflection, and the Conclusion page's "Final Insight" callout. Used sparingly, always where the writing turns personal.

### Neutral
- **Cool Paper** (oklch(98.5% 0.005 250) / #f8fafd): Page background.
- **Pure White** (#ffffff): Card and placeholder surfaces, sits just above Cool Paper.
- **Cool Mist** (oklch(96.5% 0.010 250) / #eff4fa): Alt-section fill and image-placeholder background.
- **Deep Reflective Ink** (oklch(24% 0.045 265) / #151e35): Primary text. Slightly blue rather than true black, so body copy shares the accent's undertone.
- **Ink Secondary** (oklch(40% 0.035 262) / #3d485b): Subtitles, page-navigation labels.
- **Ink Muted** (oklch(54.5% 0.028 258) / #667181): Footer text, image-placeholder captions. Still ≥4.5:1 on Cool Paper — never drop below this lightness for text.
- **Border** (oklch(90% 0.014 255) / #d8dfe7) and **Border Light** (oklch(94% 0.010 255) / #e7ecf2): Hairline dividers and card edges.

### Named Rules
**The One Chapter, One Color Rule.** Blue, green, and rose are not a decorative trio — each is bound to exactly one section of content (philosophy, community, personal). Never introduce a fourth accent, and never let two accents share a section.

**The No-Cream Rule.** Backgrounds stay cool (chroma toward blue, not warm/sand). Warmth in this system comes from the rose accent and the serif body voice, never from a beige page.

## 3. Typography

**Display/Headline Font:** Outfit Variable (with system-ui, sans-serif fallback)
**Body Font:** Source Serif 4 Variable (with Georgia, Times New Roman, serif fallback)

**Character:** A geometric sans paired against an old-style serif — structure versus reflection. Outfit stays out of the way in labels and navigation; Source Serif 4 does the actual talking, at a generous 1.7 line-height that reads like a printed page, not an app.

### Hierarchy
- **Display** (700, clamp(2.5rem, 1.75rem + 3vw, 4.5rem), 1.1 line-height, -0.025em): Cover page title only — the one moment the notebook allows itself a full flourish.
- **Headline** (600, clamp(2.5rem, 1.75rem + 3vw, 4rem), 1.2 line-height, -0.02em): Every other page's `h1`, via PageHeader.
- **Title** (600, 1.5rem): Section headings (`h3`) inside a page.
- **Body** (400, 1rem, 1.7 line-height, serif): Reflection copy. Capped at 65ch (paragraphs) so long-form reading stays comfortable.
- **Label** (600, 0.875rem or 0.75rem, 0.04–0.06em tracking, uppercase): Content-block labels only — "Group Members," "Learning Insight," "Community Impact." Never used as a kicker sitting above a section title; it marks a specific piece of content, not a section preamble.

### Named Rules
**The Labels-Not-Kickers Rule.** Uppercase tracked text marks what a block of content *is* (a label on a placeholder, a callout, a card), never sits decoratively above every section heading. If a label would appear above an `h3` with nothing else to say, cut it.

## 4. Elevation

Flat by default. Cards, callouts, and placeholders are distinguished by fill and border alone — no ambient shadow. The one exception is the mobile navigation panel, which lifts with a shadow specifically because it's a temporary overlay above page content; that's a structural signal, not decoration.

### Shadow Vocabulary
- **shadow-sm** (`0 1px 3px rgba(26, 31, 46, 0.06)`): Reserved, currently unused; available for future subtle affordances (e.g. a hovered card).
- **shadow-md** (`0 4px 12px rgba(26, 31, 46, 0.08)`): The mobile menu panel, when open.

### Named Rules
**The Overlay-Only Shadow Rule.** Shadow is permitted only on elements that float above page content (menus, future modals/tooltips). A card sitting in the normal document flow never gets a shadow — its border does the work.

## 5. Components

### Callouts (signature component)
The recurring "chapter insight" box: a colored 1px border, a matching tinted fill, and an uppercase label in the accent color, followed by content. Each of the three accents gets exactly one callout, in its own chapter — blue on Philosophical Reflection ("Key Realization"), green on Community Engagement ("Community Impact"), rose on Conclusion ("Final Insight"). This is the system's one deliberate spot of color per page; everywhere else stays neutral.
- **Shape:** `radius-md` (8px), `1px solid` border in the accent color, `space-xl` (2rem) internal padding.
- **Label:** Outfit, 0.875rem, 600 weight, uppercase, 0.04em tracking, colored with the same accent as the border.

### Cards
- **Corner Style:** `radius-md` (8px)
- **Background:** Pure White, always — cards never take a tinted fill (that's the callout's job)
- **Border:** Default `1px solid var(--border)`; the `warm` variant swaps to `1px solid var(--accent-warm)` for the one Personal Reflection card that should read as "this one's the emotional center."
- **Shadow Strategy:** None (see Elevation).
- **Internal Padding:** `space-xl` (2rem)

### Placeholder Blocks (signature component)
Unfilled content is marked honestly with a **dashed** border (`1px dashed var(--border)`) rather than lorem ipsum or an empty void — the dash itself signals "not yet written." An uppercase accent-blue label names what belongs there, followed by faint horizontal rules standing in for unwritten lines.

### Image Placeholders
Same dashed-border honesty as text placeholders, applied to media: `border-radius-md`, Cool Mist background, a centered icon and caption in Ink Muted.

### Navigation
- **Desktop:** Outfit, 0.875rem; inactive links sit in Ink Secondary, the active link switches to Reflective Blue with a 2px accent underline. A transparent 2px underline is reserved on inactive links so switching states never shifts layout.
- **Mobile:** A full-width dropdown panel (Pure White, `shadow-md`, slides down from the nav bar) — the one place elevation is allowed. Active link again uses Reflective Blue.
- **Page-turn (prev/next):** Bordered cards at the foot of each page, Ink Muted uppercase "Previous"/"Next" label over an Reflective-Blue page title, so moving through the notebook always uses the same primary accent regardless of which chapter you're leaving or entering.

## 6. Do's and Don'ts

### Do:
- **Do** keep the page background cool near-white (`oklch(98.5% 0.005 250)` / #f8fafd) — never warm/cream.
- **Do** scope each accent (blue, green, rose) to its one chapter; a color's presence should tell the reader which section they're in.
- **Do** mark unfinished content with a dashed border and an uppercase label, never a silent blank space.
- **Do** keep body paragraphs in the serif face at ≤65ch and 1.7 line-height.
- **Do** reserve shadow for elements that float above page content (the mobile menu), never for cards or callouts at rest.

### Don't:
- **Don't** use a hero-metric block, stock-photo gloss, or a salesy CTA anywhere — this is a reflection document, not a SaaS landing page (per PRODUCT.md's anti-references).
- **Don't** add a fourth accent color, or let two accents appear in the same section.
- **Don't** stack an uppercase tracked label above every section `h3` as a decorative kicker — labels mark specific content blocks only.
- **Don't** add card shadows "for polish" — flat-by-default is the rule; shadow is a structural signal, not decoration.
- **Don't** let any text color drop below 4.5:1 contrast against its background (Ink Muted at oklch(54.5% ...) is the floor — don't go lighter).
- **Don't** use `border-left`/`border-right` colored stripes on cards or callouts; the system uses full 1px borders plus tint fills instead.
