import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '../content/store'

export type CartLine = {
  key: string
  productId: string
  name: string
  price: number
  size: string
  qty: number
  variant: 1 | 2 | 3 | 4 | 5
}

type CartContextValue = {
  lines: CartLine[]
  addItem: (product: Product, size: string) => void
  updateQty: (key: string, qty: number) => void
  removeItem: (key: string) => void
  clear: () => void
  itemCount: number
  subtotal: number
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'blackout-cart'

function readStoredCart(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => readStoredCart())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines])

  function addItem(product: Product, size: string) {
    const key = `${product.id}__${size}`
    setLines((prev) => {
      const existing = prev.find((l) => l.key === key)
      if (existing) {
        return prev.map((l) => (l.key === key ? { ...l, qty: Math.min(10, l.qty + 1) } : l))
      }
      return [
        ...prev,
        { key, productId: product.id, name: product.name, price: product.price, size, qty: 1, variant: product.variant },
      ]
    })
  }

  function updateQty(key: string, qty: number) {
    setLines((prev) => {
      if (qty <= 0) return prev.filter((l) => l.key !== key)
      return prev.map((l) => (l.key === key ? { ...l, qty: Math.min(10, qty) } : l))
    })
  }

  function removeItem(key: string) {
    setLines((prev) => prev.filter((l) => l.key !== key))
  }

  function clear() {
    setLines([])
  }

  const itemCount = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines])
  const subtotal = useMemo(() => lines.reduce((sum, l) => sum + l.price * l.qty, 0), [lines])

  return (
    <CartContext.Provider value={{ lines, addItem, updateQty, removeItem, clear, itemCount, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
