import { Link } from 'react-router-dom'
import { brand, categories } from '../content/store'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-bone">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-medium text-ink">{brand.shortName}</p>
            <p className="mt-2 max-w-[220px] text-sm text-slate">{brand.tagline}</p>
          </div>

          <div className="text-sm text-slate">
            <p className="eyebrow mb-3">Shop</p>
            <ul className="space-y-1">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link to={`/shop#${c.id}`} className="hover:text-ink">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm text-slate">
            <p className="eyebrow mb-3">Support</p>
            <ul className="space-y-1">
              <li>
                <Link to="/contact" className="hover:text-ink">
                  Sizing & Shipping
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ink">
                  Returns
                </Link>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-ink">
                  {brand.email}
                </a>
              </li>
              <li className="pt-1 text-xs text-slate/80">
                Wholesale:{' '}
                <a href={`mailto:${brand.wholesaleEmail}`} className="hover:text-ink">
                  {brand.wholesaleEmail}
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm text-slate">
            <p className="eyebrow mb-3">Explore</p>
            <ul className="space-y-1">
              <li>
                <Link to="/shop" className="hover:text-ink">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-ink">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-ink">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-slate/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved. Based in {brand.base}.</p>
          <p>
            Portfolio demo built by{' '}
            <a href="https://webvybe.app" className="underline hover:text-ink">
              WebVybe
            </a>
            , a fictional business created to showcase a minimal fashion brand's e-commerce template.
          </p>
        </div>
      </div>
    </footer>
  )
}
