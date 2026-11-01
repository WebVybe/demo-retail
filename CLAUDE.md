# demo-retail: Still (WebVybe portfolio demo)

**This is not a real business.** Still is a fictional minimalist fashion/
athleisure brand invented to showcase WebVybe's retail/e-commerce
client-site template. Do not present anything here as a real operating
business (no fabricated review counts, no fake press logos, no claim of a
real physical presence beyond the demo copy).

## Two pivots, same underlying build

This demo has changed shape twice. First version: an in-person boutique
with no cart (a "reserve for a fitting" flow). Second version: a real
e-commerce build styled streetwear/gym, branded "Blackout Athletics",
with [DarcSport](https://shop.darcsport.com) supplied as the concrete
design reference (loaded live, 2026-11-01). **This version (third):** the
client asked for less hardcore-gym, more minimalist fashion brand — same
underlying architecture (real cart, real product grid, real checkout UI),
completely different visual and verbal register. See git history for both
prior versions if the streetwear direction is ever wanted back.

What changed, concretely:

- **Brand renamed** Blackout Athletics → **Still**. "Athletics" as a
  brand-name suffix actively worked against a minimalist-fashion read, so
  the rename wasn't optional once the direction changed.
- **Typography**: dropped Bebas Neue (loud condensed all-caps display
  face) for a single refined grotesk, Inter, used throughout at varying
  weight instead of pairing a shouting display face with body text —
  matches how COS/Arket/Everlane-style minimal brands typically run one
  typeface, not two.
- **Palette**: dropped the true-black/hazard-red/caution-yellow streetwear
  palette for a quiet warm-neutral one (`--color-char`, `--color-bone`,
  `--color-paper`, `--color-stone`, with a single understated `--color-clay`
  accent used sparingly, never as a loud badge fill). See tokens below.
- **Badges**: "Bestseller"/"New" went from solid-color pills to quiet
  text-only tags (`.badge` in `src/index.css`) — colored sale-sticker
  badges read as streetwear/hype, not minimal fashion.
- **Buttons/UI**: dropped `text-transform: uppercase` and wide letter-
  spacing from buttons and nav (`.btn-primary`, `.nav-link` etc. in
  `src/index.css`); pill-radius buttons became low-radius rectangles
  (`border-radius: 2px`) — architectural rather than sporty.
- **Copy**: product names went from aggressive gym-bro ("No Off Days
  Hoodie", "Dead Weight Mesh Shorts") to plain, quiet naming ("Signature
  Hoodie", "Mesh Shorts"). Dropped the one item (lifting straps) that
  didn't fit a general fashion brand at all. Dropped sale/compare-at
  pricing theatrics (`compareAtPrice` strikethrough) — minimal premium
  fashion brands rarely run "was $52 now $38" discount framing.
- **Announcement bar**: went from a loud black block with bold caps to a
  single thin quiet line.

## Scope: this is real e-commerce, unlike every other sibling demo

`demo-bakery`, `demo-salon`, and `demo-plantcare`/`demo-restaurant`
deliberately avoid cart/checkout/inventory (order-ahead, book-now,
request-only patterns instead). This demo is the one exception: a real
product grid, a real cart (`src/components/CartContext.tsx`, React
context + `localStorage` persistence, no backend), and a real checkout
flow on `/cart` that collects shipping + payment-shaped fields purely for
UI realism — **no payment processor is wired in, no card data is
validated or stored, and the "Place Order" button never charges anything**
(see the disclaimer in `Cart.tsx` and the demo-only comment above
`handleCheckout`). Treat this as the one demo worth reusing directly if a
future client genuinely needs a storefront.

## Stack

- Vite + React 19 + TypeScript + Tailwind v4 (matches `webvybe/agency-site`
  and the other `webvybe/demo-*` sites' conventions, using the same
  button/nav-link component classes).
- `react-router-dom` v7 for routing.
- Cart state: React Context (`src/components/CartContext.tsx`) persisted
  to `localStorage`, no backend/database.
- Deployed to Cloudflare Pages as a static build (`npm run build` → `dist/`).

## Pages

Home (hero + featured piece + category tiles + bestsellers + brand
pillars + wholesale teaser + FAQ), Shop (full product grid grouped by
category, inline size-chip quick-add), Cart (line items + checkout form +
fake order confirmation), About (brand story, no physical-location
framing — this is DTC/online, not a walk-in boutique), Contact (support +
wholesale inquiry form + FAQ). No Lookbook/gallery page — the product grid
carries that visual-browsing role here.

## Design tokens

Brand palette lives in `src/index.css` under `@theme`: soft charcoal
(`--color-char`, `--color-char-deep` — not true black), warm off-whites
(`--color-bone`, `--color-paper`), a muted warm `--color-stone` for quiet
accents (eyebrows, price-adjacent labels, nav underline), a single
understated `--color-clay` accent (badge text, cart-count dot — used
sparingly, never as a background fill), `--color-slate` for muted body
text, `--color-ink` for darkest text. Deliberately distinct from every
sibling demo's palette. No hardcoded hex values outside that token block.

**Naming note:** the display-font token is still called `--font-display`
(a holdover from when it was a different face from body text), but it now
maps to the same family as `--font-sans` (Inter) — intentional, not a bug.
Component classes still use `font-display` for headline weight/size, not
because it's a separate typeface anymore.

## Content

All product/brand copy (products, categories, pillars, FAQs) lives in
`src/content/store.ts` as a single source of truth; edit there, not
inline in components.

## Known placeholders (flagged, not hidden)

- **No photography yet.** Every `DecorPanel` slot (hero, featured piece,
  category tiles, product cards) is currently rendering its CSS-gradient
  fallback, not a real or licensed photo. `src/components/DecorPanel.tsx`
  already supports a `src` prop for that upgrade; the natural next step is
  sourcing licensed minimal-fashion/studio stock photography (Pexels/
  Unsplash, free-for-commercial-use) the same way `demo-bakery`/
  `demo-salon` did.
- **Checkout is UI-only.** No payment gateway, no real order persistence,
  no email confirmation — see the Scope section above.
- `robots.txt` disallows all crawling: this demo should not get indexed.
