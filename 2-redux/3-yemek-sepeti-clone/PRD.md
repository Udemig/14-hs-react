## Project: Thunk Sepeti UI Refresh

### 1. Context

- Current UI is functional but visually flat and inconsistent with modern food-delivery aesthetics.
- Goal is to enhance perceived quality quickly without introducing new flows or heavy refactors.

### 2. Objectives

- Introduce a soft, appetizing background treatment to replace the stark white canvas.
- Harmonize typography, spacing, and card surfaces for restaurants, products, and basket views.
- Elevate header/footer presence to improve wayfinding and overall polish.
- Keep implementation lightweight: focus on Tailwind utility tweaks and a handful of reusable CSS helpers.

### 3. Constraints & Non-Goals

- No new business logic, API changes, or navigation restructuring.
- Avoid large component rewrites; changes should be additive/adjusted styles only.
- Maintain responsiveness and existing data flows.

### 4. Phases

#### Phase 1 – Quick Visual Refresh (current scope)

1. **Global Look & Feel**
   - Add warm background gradient & body text color defaults via `index.css`.
   - Introduce helper classes for elevated cards/badges to reuse across pages.
2. **Header & Footer Polish**
   - Apply translucent surfaces, rounded container, and interactive hover cues.
3. **Listing & Detail Cards**
   - Round restaurant/product cards, enhance hover/selection states, add subtle badges for metadata.
4. **Cart & Empty States**
   - Match cart cards/order summary with new surfaces, emphasize CTAs, and brighten empty-state iconography.
5. **Feedback Components**
   - Align loader/error components with refreshed palette (spacing + color tweaks only).

#### Phase 2 – Extended Theming (future, not in this update)

- Consider typography scale updates, status chips, and theme tokens once Phase 1 is validated.

### 5. Acceptance Criteria (Phase 1)

- All primary screens (`/`, `/restaurant/:id`, `/cart`) display the warm background and elevated cards.
- Header and footer visually stand out while remaining lightweight (no layout regressions).
- Restaurant & product cards share consistent rounded corners, padding, and hover transitions.
- Cart order summary adopts the new card helper style; empty basket message feels intentional.
- No change increases file size beyond ~500 LOC; only minimal CSS additions + class tweaks.
