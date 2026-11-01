import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import DecorPanel from '../components/DecorPanel'
import { useCart } from '../components/CartContext'
import { brand } from '../content/store'

const INPUT_CLS =
  'w-full rounded-sm border border-black/10 bg-paper px-3.5 py-2.5 text-ink outline-none focus:border-char'

const FLAT_SHIPPING = 8

function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`
}

export default function Cart() {
  const { lines, updateQty, removeItem, subtotal, clear } = useCart()
  const [orderNumber, setOrderNumber] = useState<string | null>(null)

  const shipping = lines.length === 0 ? 0 : subtotal >= brand.freeShippingThreshold ? 0 : FLAT_SHIPPING
  const total = subtotal + shipping
  const amountToFreeShipping = Math.max(0, brand.freeShippingThreshold - subtotal)

  function handleCheckout(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Demo only: this form has no real backend and no real payment
    // processor is wired in. A live client build would connect this to a
    // real checkout/payment pipeline (see CLAUDE.md / new-client-site
    // skill) -- nothing here is ever charged or sent anywhere.
    const number = `ST-${Math.floor(100000 + Math.random() * 900000)}`
    setOrderNumber(number)
    clear()
  }

  if (orderNumber) {
    return (
      <div className="page-transition mx-auto max-w-2xl px-6 py-20 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-char text-xl text-paper">
          ✓
        </span>
        <h1 className="mt-6 font-display text-4xl font-medium text-ink">Order placed</h1>
        <p className="mt-3 text-slate">
          Order <span className="font-semibold text-ink">{orderNumber}</span>. We'll email a confirmation and
          tracking info once it ships.
        </p>
        <p className="mx-auto mt-4 max-w-sm text-xs text-slate/70">
          This is a portfolio demo: no payment was processed and nothing was actually sent anywhere. A live
          client build would connect this to a real checkout/payment pipeline.
        </p>
        <Link to="/shop" className="btn-primary mt-8 inline-flex">
          Keep Shopping
        </Link>
      </div>
    )
  }

  if (lines.length === 0) {
    return (
      <div className="page-transition mx-auto max-w-2xl px-6 py-20 text-center">
        <p className="eyebrow mb-3">Cart</p>
        <h1 className="font-display text-4xl font-medium text-ink">Your cart is empty</h1>
        <p className="mt-3 text-slate">Add a size from the shop and it'll show up here.</p>
        <Link to="/shop" className="btn-primary mt-8 inline-flex">
          Shop New Arrivals
        </Link>
      </div>
    )
  }

  return (
    <div className="page-transition mx-auto max-w-5xl px-6 py-16">
      <p className="eyebrow mb-3">Cart</p>
      <h1 className="font-display text-4xl font-medium text-ink">Your Cart</h1>

      <div className="mt-8 grid min-w-0 gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="min-w-0 space-y-8">
          <div className="space-y-3">
            {lines.map((line) => (
              <div key={line.key} className="flex items-center gap-4 rounded-sm border border-black/10 bg-white p-3">
                <DecorPanel variant={line.variant} className="h-16 w-16 shrink-0" alt={line.name} />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-ink">{line.name}</p>
                  <p className="text-sm text-slate">Size {line.size}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQty(line.key, line.qty - 1)}
                    aria-label={`Remove one ${line.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-lg text-ink"
                  >
                    −
                  </button>
                  <span className="w-5 text-center font-medium text-ink">{line.qty}</span>
                  <button
                    type="button"
                    onClick={() => updateQty(line.key, line.qty + 1)}
                    aria-label={`Add one ${line.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-lg text-ink hover:border-char"
                  >
                    +
                  </button>
                </div>
                <p className="w-16 shrink-0 text-right font-display text-base text-ink">
                  {formatCurrency(line.price * line.qty)}
                </p>
                <button
                  type="button"
                  onClick={() => removeItem(line.key)}
                  aria-label={`Remove ${line.name} from cart`}
                  className="shrink-0 text-slate hover:text-clay"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {amountToFreeShipping > 0 && (
            <p className="rounded-sm border border-black/10 bg-bone px-4 py-3 text-sm text-ink">
              Add {formatCurrency(amountToFreeShipping)} more for free shipping.
            </p>
          )}

          <form onSubmit={handleCheckout} className="space-y-5 rounded-sm border border-black/10 bg-white p-6 sm:p-8">
            <h2 className="font-display text-lg font-medium text-ink">Shipping &amp; Payment</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">First name</span>
                <input required type="text" name="firstName" className={INPUT_CLS} />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Last name</span>
                <input required type="text" name="lastName" className={INPUT_CLS} />
              </label>
            </div>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-ink">Email</span>
              <input required type="email" name="email" className={INPUT_CLS} />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-ink">Shipping address</span>
              <input required type="text" name="address" className={INPUT_CLS} />
            </label>
            <div className="grid gap-5 sm:grid-cols-3">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">City</span>
                <input required type="text" name="city" className={INPUT_CLS} />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">State</span>
                <input required type="text" name="state" className={INPUT_CLS} />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">ZIP</span>
                <input required type="text" name="zip" className={INPUT_CLS} />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-[2fr_1fr_1fr]">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Card number (demo only)</span>
                <input type="text" inputMode="numeric" placeholder="•••• •••• •••• ••••" className={INPUT_CLS} />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Exp</span>
                <input type="text" placeholder="MM/YY" className={INPUT_CLS} />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">CVC</span>
                <input type="text" placeholder="•••" className={INPUT_CLS} />
              </label>
            </div>
            <p className="text-xs text-slate/70">
              This is a demo checkout — no real payment field is processed or stored, and no card data should
              be entered here.
            </p>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Place Order · {formatCurrency(total)}
            </button>
          </form>
        </div>

        <div className="h-fit min-w-0 space-y-4 rounded-sm border border-black/10 bg-white p-6">
          <p className="eyebrow">Order Summary</p>
          <div className="space-y-2 text-sm text-ink">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
            </div>
          </div>
          <div className="flex justify-between border-t border-black/10 pt-3 font-display text-lg font-medium text-ink">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
