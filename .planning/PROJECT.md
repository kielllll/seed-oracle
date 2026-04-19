# Seed Oracle

## What This Is

A web application that analyzes Balatro (rogue-like poker-based card game) seeds to predict card appearances throughout a run. Competitive players input a seed code and instantly see an interactive timeline showing all cards that will appear, enabling strategic optimization.

## Core Value

Competitive players can instantly preview their entire run's card distribution by entering a seed code, enabling data-driven strategy decisions.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] User can input Balatro seed code via text field
- [ ] System analyzes seed using Immolate WASM in <1 second
- [ ] System displays interactive timeline of card appearances by round/ante
- [ ] Timeline shows card visualization (images, not just text)
- [ ] Results are viewable in "Precision Noir" dark mode dashboard design

### Out of Scope

- File upload for seed input — string input only for simplicity
- Multiple seed formats — game code format only
- Backend server — static hosting with TanStack Start SSR
- Export/share functionality — defer to v2
- Advanced filtering/sorting — basic timeline view first

## Context

Balatro is a rogue-like card game where players use poker hands and joker cards to progress through "antes" (rounds). Competitive players benefit from knowing their seed's card distribution to optimize early game strategy and anticipate resource availability.

The Immolate WASM module provides access to Balatro's core game logic for deterministic seed analysis. This allows accurate prediction of card sequences without requiring game execution.

## Constraints

- **Tech Stack**: TanStack Start (SSR + React) — enables server-side rendering with React interactivity
- **Core Logic**: Immolate WASM (downloaded to public/ folder) — required for Balatro core logic access
- **Performance**: Seed analysis must complete in <1 second — competitive users need instant results
- **Design**: Must implement Stitch "Seed Analyzer Dashboard" design with "Precision Noir" aesthetic
- **Deployment**: Flexible hosting — TanStack Start compatible (Vercel, Netlify, etc.)
- **Browser**: Modern browsers supporting WASM — required for Immolate module

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| TanStack Start | SSR + React interactivity in one framework | — Pending |
| Immolate WASM for core logic | Direct access to Balatro game logic for accurate seed analysis | — Pending |
| Single seed format (game code) | Simpler UX, faster implementation | — Pending |
| Focus on speed (<1 second) | Competitive users need instant gratification | — Pending |
| Static deployment | Lower complexity, faster iteration | — Pending |
| "Precision Noir" aesthetic | Professional, data-dense design from Stitch | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---

*Last updated: 2026-04-19 after initialization*