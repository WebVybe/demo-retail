import { Link } from 'react-router-dom'
import DecorPanel from '../components/DecorPanel'
import { brand, categories, faqs, pillars, products } from '../content/store'
import ProductCard from '../components/ProductCard'

const featured = products.find((p) => p.id === brand.featuredProductId) ?? products[0]
const bestsellers = products.filter((p) => p.badge === 'Bestseller').slice(0, 3)

const categoryTiles = categories.slice(0, 3).map((c, i) => ({
  ...c,
  variant: ((i % 5) + 1) as 1 | 2 | 3 | 4 | 5,
}))

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero — one dominant visual, one quiet headline, one primary CTA.
          No competing headline/graphic-panel split, no shouting type. */}
      <section className="relative">
        <DecorPanel
          rounded={false}
          variant={2}
          className="h-[62vh] min-h-[380px] w-full sm:h-[74vh]"
          alt="Still studio"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-char-deep/70 via-char-deep/10 to-transparent">
          <div className="mx-auto w-full max-w-6xl px-6 pb-12 sm:pb-16">
            <p className="eyebrow mb-3 text-bone">{brand.base}</p>
            <h1 className="max-w-xl font-display text-4xl font-medium leading-tight text-paper sm:text-5xl">
              {brand.tagline}
            </h1>
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <Link to="/shop" className="btn-primary !bg-paper !text-char hover:!bg-bone">
                Shop New Arrivals
              </Link>
              <Link
                to="/about"
                className="text-sm text-paper underline decoration-paper/40 underline-offset-4 transition-colors hover:decoration-paper"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured piece — its own quiet module, not a badge buried
          inside the hero. */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
          <DecorPanel variant={4} className="h-72 w-full sm:h-96" alt={featured.name} />
          <div>
            <span className="badge">Featured</span>
            <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">{featured.name}</h2>
            <p className="mt-4 max-w-md text-base text-slate">{featured.description}</p>
            <p className="mt-3 font-display text-lg text-ink">${featured.price}</p>
            <Link to="/shop#hoodies" className="mt-5 inline-block text-sm text-ink hover:underline">
              Shop this piece →
            </Link>
          </div>
        </div>
      </section>

      {/* Category tiles — image-first, no card border/background chrome. */}
      <section className="mx-auto max-w-6xl px-6 py-4 sm:py-8">
        <div className="mb-10 flex flex-col gap-2 border-t border-black/10 pt-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-3">Shop by category</p>
            <h2 className="font-display text-2xl font-medium text-ink">Made to wear every day</h2>
          </div>
          <Link to="/shop" className="text-sm text-ink hover:underline">
            Shop everything →
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {categoryTiles.map((c) => (
            <Link key={c.id} to={`/shop#${c.id}`} className="group block">
              <DecorPanel
                variant={c.variant}
                className="h-56 w-full transition-transform duration-300 group-hover:scale-[1.02] sm:h-64"
                alt={c.title}
              />
              <h3 className="mt-4 font-display text-lg font-medium text-ink">{c.title}</h3>
              <p className="mt-1 text-sm text-slate">{c.intro}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-2 border-t border-black/10 pt-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-3">Most worn</p>
            <h2 className="font-display text-2xl font-medium text-ink">Bestsellers</h2>
          </div>
        </div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-3">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Why Still — a quiet band, breaking the metronome of identical
          max-w-6xl centered blocks, without shouting about it. */}
      <section className="border-y border-black/10 bg-bone">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="eyebrow mb-3">Why {brand.shortName}</p>
          <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
            Fewer, better things
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <h3 className="font-display text-lg font-medium text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-slate">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale teaser — genuinely text-first content, so the
          bordered-card idiom stays here. */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow mb-3">Beyond the shop</p>
        <h2 className="mb-3 font-display text-2xl font-medium text-ink">Wholesale orders</h2>
        <p className="mb-10 max-w-xl text-sm text-slate">{brand.wholesaleNotice}</p>
        <div className="rounded-sm border border-black/10 bg-white p-6 sm:max-w-md">
          <h3 className="font-display text-lg font-medium text-ink">Independent Shops</h3>
          <p className="mt-2 text-sm text-slate">
            Selective wholesale, line sheet on request. Tell us your store name and order size.
          </p>
          <Link to="/contact" className="mt-4 inline-block text-sm text-ink hover:underline">
            Request a line sheet →
          </Link>
        </div>
      </section>

      {/* FAQ preview — also text-first, keeps the bordered-card idiom. */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow mb-3">Good to know</p>
        <h2 className="mb-8 font-display text-2xl font-medium text-ink">Before you check out</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {faqs.slice(0, 4).map((f) => (
            <div key={f.q} className="rounded-sm border border-black/10 bg-white p-6">
              <p className="font-medium text-ink">{f.q}</p>
              <p className="mt-2 text-sm text-slate">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-sm bg-bone px-8 py-14 text-center">
          <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">New pieces, a few times a year.</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate">
            Small runs, made to last beyond the season. Follow {brand.instagram} or just check back.
          </p>
          <Link to="/shop" className="btn-primary mt-7 inline-flex">
            Shop New Arrivals
          </Link>
        </div>
      </section>
    </div>
  )
}
