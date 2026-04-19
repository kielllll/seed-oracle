# Design System: Seed Oracle

**Defined:** 2026-04-19  
**Source:** Stitch "Seed Analyzer Dashboard" with "Precision Noir" aesthetic  
**Theme:** Professional, data-dense dark mode dashboard

## Core Philosophy: "Precision Noir"

**The Creative North Star**

This design system is engineered for the high-stakes, data-dense environment of seed analysis. It moves away from the "SaaS-standard" look by embracing a cinematic, editorial aesthetic that prioritizes focus and visual quiet.

**Breaking the Template**

To break the "template" feel, we employ **Precision Noir**: a philosophy where UI elements do not sit *on* a page but are carved *out* of the darkness. By utilizing intentional asymmetry—such as wide gutters paired with tightly packed data clusters—and shifting from structural lines to tonal layering, we create a tool that feels more like a high-end laboratory instrument than a basic web dashboard.

## Color & Surface Architecture

The palette is rooted in deep obsidian and charcoal, using a single violet accent (`primary: #d2bbff`) to guide the eye through complex data sets.

### The "No-Line" Rule

Traditional 1px solid borders are strictly prohibited for sectioning. Layout boundaries must be defined through background color shifts.

**Surface-to-Surface Transitions:**
- Use `surface` (#0e0e10) for the main application backdrop
- Use `surface_container_low` (#131316) for sidebars or secondary panels
- Group related data modules by placing them on `surface_container_highest` (#25252b) to create a natural "lift" without a single stroke of a pen tool

### Surface Hierarchy & Nesting

Treat the UI as a physical stack of materials:

1. **Base Layer:** `surface` (#0e0e10)
2. **Structural Sections:** `surface_container_low` (#131316)
3. **Interactive Modules/Cards:** `surface_container_highest` (#25252b)
4. **Floating Overlays:** `surface_bright` (#2b2c32)

### The "Glass & Gradient" Rule

To inject "soul" into the dark mode, use Glassmorphism for floating elements (Modals, Popovers). Apply `surface_variant` (#25252b) at 60% opacity with a `20px` backdrop-blur.

**Signature Texture:** For primary CTAs, use a subtle linear gradient from `primary` (#d2bbff) to `primary_container` (#5a00c6) at a 135-degree angle. This prevents the accent from feeling "flat" against the deep blacks.

### Primary Colors

**Backgrounds:**
- `#0e0e10` - Primary background (deep obsidian)
- `#131316` - Secondary background (dark charcoal)
- `#25252b` - Card/panel backgrounds (surface_container_highest)
- `#2b2c32` - Floating overlays (surface_bright)
- `#000000` - Input and form backgrounds (surface_container_lowest)

**Violet Accent:**
- `#d2bbff` - Primary violet (actions, primary buttons, highlights)
- `#5a00c6` - Primary container (gradient endpoints)
- `#c7abff` - Primary dim (icons within data tables)
- `#5200b5` - On primary (text on primary backgrounds)

**Semantic Status Colors:**
- `#ef4444` - Red (errors, destructive actions)
- `#22c55e` - Green (success, valid inputs)
- `#eab308` - Yellow (warnings, stakes)

**Text:**
- `#e7e4ec` - Primary text (on surface)
- `#acaab1` - Secondary text (on surface variant)
- `#737373` - Muted text (outline)
- `#565457` - Disabled text (inverse on surface)

## Typography: Functional Authority

We utilize **Inter** across all scales to maintain a "Swiss-style" functional clarity, but we play with extreme weight contrast to create an editorial feel. For technical data, **JetBrains Mono** provides precision.

### Font Family
- **Primary:** Inter - UI elements, body text, headlines
- **Technical:** JetBrains Mono - seed codes, card ranks, technical data

### Type Scale

**Headlines (Inter - Extreme Weight Contrast):**
- `display-md` - 2.75rem / 700 weight / -0.02em letter-spacing - High-level seed metrics
- `display-sm` - 2.25rem / 600 weight / tight tracking - Card metrics strip values
- `H1` - 32px / 700 weight / tight tracking - Page titles
- `H2` - 24px / 600 weight / normal tracking - Section headers
- `H3` - 18px / 600 weight / normal tracking - Card titles

**Body (Inter):**
- `body-md` - 0.875rem / 400 weight / 1.5 line height - Main content
- `body-lg` - 16px / 400 weight / 1.5 line height - Large body text
- `body-sm` - 14px / 400 weight / 1.5 line height - Default text
- `label-md` - 0.75rem / 400 weight / 1.4 line height - Table headers, labels

**Technical (JetBrains Mono):**
- `Code` - 14px / 400 weight - Seed codes, card data
- `Tiny` - 11px / 400 weight / 1.3 line height - Footer notes

**The Data Grid:** Use `label-md` (0.75rem) for table headers, set in `on_surface_variant` (#acaab1) with All Caps and `0.05em` letter spacing. This provides a "technical readout" feel.

## Spacing System

Base unit: 4px

**Scale:**
- `xs` - 4px - Tight spacing, icon padding
- `sm` - 8px - Button padding, related elements
- `md` - 16px - Card padding, default margins
- `lg` - 24px - Section spacing
- `xl` - 32px - Major sections
- `2xl` - 48px - Page margins
- `20` - 4.5rem (72px) - Major data clusters separation

## Elevation & Depth

Depth is a tool for cognition, not just decoration.

### Tonal Layering

Avoid drop shadows for static elements. Place a `surface_container_lowest` (#000000) card on a `surface_container_low` (#131316) section to create a "recessed" look, ideal for input areas.

### Ambient Shadows

For floating menus, use a shadow with a `40px` blur, 0% spread, and an opacity of 12%. The shadow color should be a tinted `#000000` to ground the element.

### The Ghost Border

If a border is required for accessibility (e.g., focused states), use `outline_variant` (#47474e) at 20% opacity. Never use 100% opaque borders.

## Component Design

### Buttons

**Primary:**
- Background: Gradient from `primary` (#d2bbff) to `primary_container` (#5a00c6) at 135° angle
- Text: `on_primary` (#5200b5)
- Radius: `ROUND_FOUR` (0.375rem) for technical/precise feel
- Padding: 8px 16px
- Weight: 600

**Secondary:**
- Background: None (ghost style)
- Border: `outline` (#75757c) at 20% opacity
- Text: `primary` (#d2bbff)
- Radius: 0.375rem
- Padding: 8px 16px
- Weight: 500

**Tertiary:**
- Background: None (text-only)
- Text: `primary` (#d2bbff)
- Radius: 0.375rem
- Padding: 8px 16px
- Weight: 400

**Destructive:**
- Background: `#ef4444`
- Text: `#ffffff`
- Hover: `#dc2626`
- Radius: 0.375rem
- Padding: 8px 16px
- Weight: 600

### Input Fields

**Text Input:**
- Background: `surface_container_lowest` (#000000) to create "hollowed out" effect
- Border: None
- Focus: Border shifts to `primary` (#d2bbff) at 40% opacity with subtle outer glow
- Text: `on_surface` (#e7e4ec)
- Placeholder: `outline` (#75757c)
- Radius: 0.375rem
- Padding: 10px 12px
- Height: 40px

**Select Dropdown:**
- Background: `surface_container_lowest` (#000000)
- Border: None
- Menu background: `surface_container_low` (#131316)
- Menu item hover: `surface_container_highest` (#25252b)
- Radius: 0.375rem

### Cards

**Standard Card:**
- Background: `surface_container_highest` (#25252b)
- Border: None (use tonal layering)
- Radius: 0.375rem (roundedness)
- Padding: 16px

**Card with Header:**
- Header background: `surface_container_low` (#131316)
- Header: No border-bottom (use tonal layering)
- Header padding: 12px 16px
- Body padding: 16px

**The Rule of Silence:** Forbid the use of divider lines between list items. Use the spacing scale `4` (0.9rem) to create clear separation through "white space" (negative space).

**Hover State:** When hovering over a list item, shift the background to `surface_container_high` (#1f1f24).

### Specialized: The Metric "Strip"

Since this is a seed analyzer, use a full-width `surface_container_lowest` strip at the top of data views.

- **Primary Value:** Use `display-sm` (2.25rem) for the primary metric
- **Unit Label:** Use `label-sm` (0.6875rem) for the unit (e.g., "mg", "%"), tucked tightly to the top-right of the number

### Timeline

**Timeline Container:**
- Background: `surface_container_low` (#131316)
- Border: None (use tonal layering)
- Radius: 0.375rem
- Padding: 16px

**Ante Section:**
- Header: `H3` with `primary` (#d2bbff) accent color
- Border: None (use tonal layering)
- Padding: 12px 0

**Card Item:**
- Background: `surface_container_highest` (#25252b)
- Border: None
- Radius: 0.375rem
- Padding: 8px
- Margin: 4px
- Hover: `surface_container_high` (#1f1f24)

## Card Visualization

### Card Display

**Standard Card:**
- Background: `surface_container_highest` (#25252b)
- Border: None
- Radius: 0.375rem
- Width: 60px
- Height: 84px
- Padding: 4px

**Suits:**
- Hearts: `#ef4444` (red)
- Diamonds: `#ef4444` (red)
- Clubs: `#3b82f6` (blue) - using blue for suits to maintain visual distinction
- Spades: `#3b82f6` (blue)

**Rank Display:**
- Font: JetBrains Mono, 14px, 700 weight
- Color: `#ffffff`
- Position: Top-left and bottom-right corners

## Utility Classes

### Layout
- Flexbox utilities for alignment
- Grid layouts for card grids
- Responsive breakpoints: mobile (640px), tablet (768px), desktop (1024px)

### Effects
- Hover effects on interactive elements
- Focus rings on inputs (use `primary` at 40% opacity)
- Subtle transitions (150ms ease)
- Glassmorphism for floating elements (20px backdrop-blur)

### States
- Disabled: `outline` (#75757c) text, `surface_container_lowest` (#000000) background
- Loading: Skeleton screens with `surface_container_lowest` (#000000) placeholder
- Error: `#ef4444` accent, red border at 20% opacity

## Do's and Don'ts

### Do
- **Do** use extreme vertical rhythm. Use `spacing.20` (4.5rem) to separate major data clusters
- **Do** use `primary_dim` (#c7abff) for icons within data tables to keep them from being too "loud"
- **Do** use the `roundedness.md` (0.375rem) for almost everything to maintain a "technical/precise" feel
- **Do** use tonal layering instead of borders for sectioning
- **Do** use the "No-Line Rule" - avoid 1px solid borders for layout
- **Do** implement extreme weight contrast in typography for editorial feel
- **Do** use Glassmorphism for floating elements with 20px backdrop-blur

### Don't
- **Don't** use pure white (#FFFFFF) for body text. Use `on_surface` (#e7e4ec) to prevent eye strain
- **Don't** use standard shadows for nesting. Use the Tonal Layering Principle
- **Don't** use multiple accent colors. Stick to the Violet range to maintain the "Precision Noir" aesthetic
- **Don't** use 100% opaque borders. If borders are needed, use `outline_variant` at 20% opacity
- **Don't** use divider lines between list items. Use spacing instead
- **Don't** use flat colors for primary CTAs. Use the gradient rule

## Accessibility

**Contrast:**
- All text meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
- Interactive elements have minimum contrast of 3:1

**Focus States:**
- Keyboard focus visible on all interactive elements
- Focus indicators use `primary` (#d2bbff) at 40% opacity with 2px width

**Typography:**
- Base font size: 16px
- Line height: 1.5 for readability
- Clear hierarchy with size and weight

## Responsive Design

**Mobile (<640px):**
- Single column layout
- Stacked inputs
- Compact timeline
- Full-width buttons

**Tablet (640px-1024px):**
- Two column layout where appropriate
- Medium density card displays
- Side-by-side configuration

**Desktop (>1024px):**
- Multi-column dashboard layout
- High-density card displays
- Expansive timeline view

## Performance Considerations

- Dark theme reduces eye strain for extended use
- High contrast improves readability in competitive play
- Minimal animations reduce cognitive load
- Optimized for 60fps on timeline navigation
- Glassmorphism uses backdrop-blur (hardware accelerated)

---

*Design system created: 2026-04-19*  
*Based on Stitch "Seed Analyzer Dashboard" with "The Kinetic Monolith" design system*  
*Aesthetic: "Precision Noir" - engineered for high-stakes, data-dense environments*