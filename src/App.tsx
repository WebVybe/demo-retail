import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './components/CartContext'
import Footer from './components/Footer'
import Header from './components/Header'
import StickyCart from './components/StickyCart'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Shop from './pages/Shop'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pb-16 sm:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <StickyCart />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}
