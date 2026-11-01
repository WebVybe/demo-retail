import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../content/store'
import { useCart } from './CartContext'
import DecorPanel from './DecorPanel'

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [justAdded, setJustAdded] = useState<string | null>(null)

  function handleAdd(size: string) {
    addItem(product, size)
    setJustAdded(size)
    window.setTimeout(() => setJustAdded((cur) => (cur === size ? null : cur)), 1200)
  }

  return (
    <div className="group">
      <Link to={`/shop#${product.category}`} className="block">
        <DecorPanel
          variant={product.variant}
          className="h-64 w-full transition-transform duration-300 group-hover:scale-[1.01] sm:h-72"
          alt={product.name}
        />
      </Link>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <p className="flex flex-wrap items-center gap-2 font-medium text-ink">
            {product.name}
            {product.badge && <span className="badge">{product.badge}</span>}
          </p>
          <p className="mt-1 text-sm text-slate">{product.description}</p>
        </div>
        <p className="shrink-0 font-display text-base text-ink">${product.price}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {product.sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => handleAdd(size)}
            className={`rounded-sm border px-2.5 py-1.5 text-xs transition-colors ${
              justAdded === size
                ? 'border-char bg-char text-paper'
                : 'border-black/10 text-ink hover:border-char'
            }`}
          >
            {justAdded === size ? 'Added' : size}
          </button>
        ))}
      </div>
    </div>
  )
}
