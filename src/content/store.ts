// Still: a fictional minimalist fashion/athleisure brand created for
// WebVybe's portfolio demo. There is no real business behind this content;
// it exists to show how WebVybe would build a real small fashion brand's
// e-commerce site. Keep prices and copy internally consistent if this file
// is edited.

export const brand = {
  name: 'Still',
  shortName: 'Still',
  tagline: 'Considered basics, made to be worn often.',
  base: 'San Diego, CA',
  founderName: 'Jordan Vance',
  founded: 2022,
  email: 'hello@wearstill.com',
  wholesaleEmail: 'wholesale@wearstill.com',
  instagram: '@wearstill',
  freeShippingThreshold: 75,
  returnWindowDays: 30,
  featuredProductId: 'signature-hoodie',
  wholesaleNotice:
    "We work with a short list of shops each season. Send your store name and order size and we'll follow up with a line sheet and minimums.",
}

export type Product = {
  id: string
  name: string
  price: number
  category: string
  sizes: string[]
  badge?: string
  description: string
  variant: 1 | 2 | 3 | 4 | 5
}

export type Category = {
  id: string
  title: string
  intro: string
}

export const categories: Category[] = [
  {
    id: 'tees',
    title: 'Tees',
    intro: 'Heavyweight cotton, cut generous, made to be worn often.',
  },
  {
    id: 'hoodies',
    title: 'Hoodies & Crews',
    intro: 'Midweight fleece, brushed interior, cut to layer.',
  },
  {
    id: 'shorts',
    title: 'Shorts & Bottoms',
    intro: 'Built to move, finished enough to wear past the gym door.',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    intro: 'The small pieces that finish an outfit.',
  },
]

export const products: Product[] = [
  // Tees
  {
    id: 'oversized-tee',
    name: 'Oversized Tee',
    price: 38,
    category: 'tees',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    badge: 'Bestseller',
    description: 'Heavyweight cotton, boxy fit, garment-washed.',
    variant: 2,
  },
  {
    id: 'crewneck-tee',
    name: 'Crewneck Tee',
    price: 34,
    category: 'tees',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    badge: 'New',
    description: 'Relaxed fit, ribbed collar, no print.',
    variant: 3,
  },
  {
    id: 'core-tee',
    name: 'Core Tee',
    price: 28,
    category: 'tees',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    badge: 'Bestseller',
    description: 'Everyday fit, heavyweight cotton.',
    variant: 1,
  },
  {
    id: 'long-sleeve-tee',
    name: 'Long Sleeve Tee',
    price: 42,
    category: 'tees',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Heavyweight cotton, thumbholes, relaxed through the body.',
    variant: 4,
  },
  // Hoodies & Crews
  {
    id: 'signature-hoodie',
    name: 'Signature Hoodie',
    price: 78,
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    badge: 'Bestseller',
    description: 'Heavyweight fleece, kangaroo pocket, boxy fit.',
    variant: 2,
  },
  {
    id: 'zip-hoodie',
    name: 'Zip Hoodie',
    price: 84,
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    badge: 'New',
    description: 'Full-zip fleece, clean chest seam, no hardware branding.',
    variant: 5,
  },
  {
    id: 'core-hoodie',
    name: 'Core Hoodie',
    price: 68,
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    description: 'Midweight fleece, relaxed fit.',
    variant: 1,
  },
  {
    id: 'relaxed-crewneck',
    name: 'Relaxed Crewneck',
    price: 64,
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Garment-dyed fleece crew, oversized fit.',
    variant: 3,
  },
  // Shorts & Bottoms
  {
    id: 'mesh-shorts',
    name: 'Mesh Shorts',
    price: 38,
    category: 'shorts',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    badge: 'Bestseller',
    description: '7-inch inseam, side splits, drawstring.',
    variant: 4,
  },
  {
    id: 'relaxed-sweatpants',
    name: 'Relaxed Sweatpants',
    price: 58,
    category: 'shorts',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    badge: 'New',
    description: 'Heavyweight fleece joggers, tapered leg.',
    variant: 2,
  },
  {
    id: 'training-shorts',
    name: 'Training Shorts',
    price: 34,
    category: 'shorts',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Lightweight woven, built-in liner.',
    variant: 1,
  },
  {
    id: 'track-pants',
    name: 'Track Pants',
    price: 62,
    category: 'shorts',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'Brushed fleece, clean seam, tapered leg.',
    variant: 5,
  },
  // Accessories
  {
    id: 'canvas-cap',
    name: 'Canvas Cap',
    price: 32,
    category: 'accessories',
    sizes: ['One Size'],
    badge: 'Bestseller',
    description: 'Structured 6-panel, low-profile crown.',
    variant: 3,
  },
  {
    id: 'canvas-tote',
    name: 'Canvas Tote',
    price: 38,
    category: 'accessories',
    sizes: ['One Size'],
    description: 'Heavyweight canvas, leather strap.',
    variant: 2,
  },
  {
    id: 'ribbed-beanie',
    name: 'Ribbed Beanie',
    price: 28,
    category: 'accessories',
    sizes: ['One Size'],
    badge: 'New',
    description: 'Merino wool, fold cuff.',
    variant: 1,
  },
  {
    id: 'weekend-duffel',
    name: 'Weekend Duffel',
    price: 68,
    category: 'accessories',
    sizes: ['One Size'],
    description: 'Water-resistant base, separate shoe compartment.',
    variant: 4,
  },
]

export const pillars = [
  {
    title: 'Thoughtfully made',
    body: 'Heavier, better fabric chosen to hold up to daily wear — not just a wash or two.',
  },
  {
    title: 'Made in small runs',
    body: 'Each piece is produced in limited quantities in San Diego, not mass-ordered from a catalog.',
  },
  {
    title: 'Simple to return',
    body: `Free US shipping over $${brand.freeShippingThreshold}, and ${brand.returnWindowDays}-day returns, no questions asked.`,
  },
]

export const faqs = [
  {
    q: 'What sizes do you carry, and how does the fit run?',
    a: 'Most pieces run S–3XL. Tees and hoodies are cut relaxed on purpose — size down for a more fitted look. Shorts and track pants fit true to size.',
  },
  {
    q: "What's your return policy?",
    a: `Returns and exchanges within ${brand.returnWindowDays} days on anything unworn with tags still attached.`,
  },
  {
    q: 'How long does shipping take?',
    a: `Orders ship within 2 business days. US shipping is free over $${brand.freeShippingThreshold}, flat-rate otherwise. We currently only ship within the US.`,
  },
  {
    q: 'Do you restock sold-out pieces?',
    a: 'Occasionally, though rarely in the exact same colorway. New arrivals post to Instagram before they go live on the site.',
  },
  {
    q: 'Do you do wholesale orders?',
    a: `Yes, selectively. Use the contact form or email ${brand.wholesaleEmail} with your store name and order size.`,
  },
  {
    q: 'Where are you based?',
    a: `${brand.base}. Everything is made in small batches here, then shipped nationwide from the same studio.`,
  },
]
