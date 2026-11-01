import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { brand } from '../content/store'
import { useCart } from './CartContext'

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'Our Story' },
  { to: '/contact', label: 'Support' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-paper">
      <div className="border-b border-black/10 px-6 py-2 text-center text-xs text-slate">
        Free shipping over ${brand.freeShippingThreshold} · {brand.returnWindowDays}-day returns
      </div>
      <div className="border-b border-black/10 bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <NavLink
            to="/"
            className="shrink-0 font-display text-xl font-medium text-ink"
            onClick={() => setOpen(false)}
          >
            {brand.shortName}
          </NavLink>

          <nav className="hidden items-center gap-8 text-sm text-slate md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link transition-colors hover:text-ink ${isActive ? 'is-active text-ink' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <NavLink
              to="/cart"
              aria-label={`Cart, ${itemCount} item${itemCount === 1 ? '' : 's'}`}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M6 8h12l-1 12H7L6 8Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-clay px-1 text-[9px] font-semibold text-white">
                  {itemCount}
                </span>
              )}
            </NavLink>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5 md:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-black/10 bg-paper px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-4 text-sm text-slate">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => (isActive ? 'text-ink' : 'hover:text-ink')}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
