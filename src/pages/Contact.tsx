import { type FormEvent, useState } from 'react'
import { brand, faqs } from '../content/store'

const INPUT_CLS =
  'w-full rounded-sm border border-black/10 bg-paper px-3.5 py-2.5 text-ink outline-none focus:border-char'

type Topic = 'order' | 'wholesale' | 'other'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [topic, setTopic] = useState<Topic>('order')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Demo only: this form has no real backend. A live client build would
    // wire this to a real support/wholesale inbox pipeline (see CLAUDE.md
    // / new-client-site skill).
    setSubmitted(true)
  }

  return (
    <div className="page-transition mx-auto max-w-5xl px-6 py-16">
      <p className="eyebrow mb-3">Support</p>
      <h1 className="font-display text-4xl font-medium text-ink">Get in Touch</h1>
      <p className="mt-4 max-w-xl text-slate">
        Order issues, sizing questions, wholesale inquiries — one form, we'll route it to the right person.
      </p>

      <div className="mt-12 grid min-w-0 gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="min-w-0 rounded-sm border border-black/10 bg-white p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-start gap-3 py-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-char text-paper">✓</span>
              <h2 className="font-display text-xl font-medium text-ink">Message received</h2>
              <p className="max-w-sm text-slate">
                We'll follow up by email within one business day.
              </p>
              <p className="max-w-sm text-xs text-slate/70">
                This is a portfolio demo: nothing was actually sent anywhere. A live client build would
                connect this form to a real support inbox.
              </p>
              <button type="button" onClick={() => setSubmitted(false)} className="btn-secondary mt-2">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <p className="mb-2 font-medium text-ink">What's this about?</p>
                <div className="flex flex-wrap gap-2">
                  {([
                    { id: 'order', label: 'An Order' },
                    { id: 'wholesale', label: 'Wholesale' },
                    { id: 'other', label: 'Something Else' },
                  ] as { id: Topic; label: string }[]).map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTopic(t.id)}
                      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                        topic === t.id ? 'border-char bg-char text-paper' : 'border-black/10 text-ink hover:border-char'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {topic === 'wholesale' && (
                <p className="rounded-sm border border-black/10 bg-bone px-4 py-3 text-sm text-ink">
                  {brand.wholesaleNotice}
                </p>
              )}

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
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-ink">Email</span>
                  <input required type="email" name="email" className={INPUT_CLS} />
                </label>
                {topic === 'order' ? (
                  <label className="block text-sm">
                    <span className="mb-1.5 block font-medium text-ink">Order number</span>
                    <input type="text" name="orderNumber" placeholder="ST-123456" className={INPUT_CLS} />
                  </label>
                ) : topic === 'wholesale' ? (
                  <label className="block text-sm">
                    <span className="mb-1.5 block font-medium text-ink">Store name</span>
                    <input type="text" name="storeName" className={INPUT_CLS} />
                  </label>
                ) : (
                  <label className="block text-sm">
                    <span className="mb-1.5 block font-medium text-ink">Phone (optional)</span>
                    <input type="tel" name="phone" className={INPUT_CLS} />
                  </label>
                )}
              </div>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder={
                    topic === 'wholesale'
                      ? 'Order size, how many locations, timeline.'
                      : 'What can we help with?'
                  }
                  className={INPUT_CLS}
                />
              </label>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="min-w-0 space-y-8">
          <div>
            <p className="eyebrow mb-2">Email</p>
            <p className="text-slate">
              <a href={`mailto:${brand.email}`} className="hover:text-ink">
                {brand.email}
              </a>
            </p>
            <p className="mt-1 text-slate">
              Wholesale:{' '}
              <a href={`mailto:${brand.wholesaleEmail}`} className="hover:text-ink">
                {brand.wholesaleEmail}
              </a>
            </p>
          </div>
          <div>
            <p className="eyebrow mb-2">FAQ</p>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q}>
                  <p className="text-sm font-medium text-ink">{f.q}</p>
                  <p className="mt-1 text-sm text-slate">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
