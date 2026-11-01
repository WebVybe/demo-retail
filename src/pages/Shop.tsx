import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../content/store'

export default function Shop() {
  return (
    <div className="page-transition mx-auto max-w-6xl px-6 py-16">
      <p className="eyebrow mb-3">Shop</p>
      <h1 className="font-display text-4xl font-medium text-ink">All Products</h1>
      <p className="mt-4 max-w-xl text-slate">
        {products.length} products. Select a size to add it to your cart.
      </p>

      <div className="mt-6 flex flex-wrap gap-2 border-y border-black/10 py-4">
        {categories.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="rounded-sm border border-black/10 px-3.5 py-1.5 text-xs text-ink hover:border-char"
          >
            {c.title}
          </a>
        ))}
      </div>

      <div className="mt-12 space-y-16">
        {categories.map((cat) => (
          <div key={cat.id} id={cat.id} className="scroll-mt-28">
            <h2 className="font-display text-2xl font-medium text-ink">{cat.title}</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate">{cat.intro}</p>

            <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((p) => p.category === cat.id)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-sm border border-black/10 bg-bone px-8 py-10 text-center">
        <p className="eyebrow mb-2">Shops</p>
        <h2 className="font-display text-xl font-medium text-ink">Wholesale Orders</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-slate">
          Selective wholesale to independent shops.
        </p>
        <Link to="/contact" className="btn-primary mt-6 inline-flex">
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
