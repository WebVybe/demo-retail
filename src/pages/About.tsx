import { Link } from 'react-router-dom'
import DecorPanel from '../components/DecorPanel'
import { brand, pillars } from '../content/store'

export default function About() {
  return (
    <div className="page-transition">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Our Story</p>
            <h1 className="font-display text-4xl font-medium text-ink sm:text-5xl">Why {brand.name} exists</h1>
            <p className="mt-5 text-slate">
              {brand.founderName} started {brand.shortName} in {brand.founded} after years buying basics that
              pilled after a month or went see-through after a wash. The fix wasn't complicated: heavier
              fabric, fewer pieces, made properly instead of made fast.
            </p>
            <p className="mt-4 text-slate">
              Every piece is still made in small batches in {brand.base}. When a run sells out, it stays sold
              out — the next one is a slightly different piece, not a reorder of the last.
            </p>
            <p className="mt-6 font-display text-lg font-medium text-ink">{brand.founderName}, founder</p>
          </div>
          <DecorPanel variant={5} className="h-72 w-full sm:h-96" alt="The Still studio" />
        </div>
      </section>

      <section className="border-y border-black/10 bg-bone">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="eyebrow mb-3">What we build around</p>
          <div className="grid gap-8 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <h2 className="font-display text-lg font-medium text-ink">{p.title}</h2>
                <p className="mt-2 text-sm text-slate">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Where we ship from</p>
            <p className="text-slate">
              {brand.base}. Every order is made and packed in the same small studio, then shipped nationwide.
              We don't currently ship outside the US.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Talk to us</p>
            <p className="text-slate">
              <a href={`mailto:${brand.email}`} className="hover:text-ink">
                {brand.email}
              </a>
            </p>
            <p className="mt-1 text-slate">{brand.instagram}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">See the current collection</h2>
        <Link to="/shop" className="btn-primary mt-6 inline-flex">
          Shop New Arrivals
        </Link>
      </section>
    </div>
  )
}
