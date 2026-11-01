import { NavLink, useLocation } from 'react-router-dom'
import { useCart } from './CartContext'

export default function StickyCart() {
  const { pathname } = useLocation()
  const { itemCount, subtotal } = useCart()
  if (pathname === '/cart' || itemCount === 0) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-paper/95 p-3 backdrop-blur-md shadow-[0_-8px_24px_-16px_rgba(0,0,0,0.3)] sm:hidden">
      <NavLink to="/cart" className="btn-primary w-full">
        View Cart · {itemCount} item{itemCount === 1 ? '' : 's'} · ${subtotal.toFixed(2)}
      </NavLink>
    </div>
  )
}
