import { useState } from 'react'
import './App.css'
import { Carousel } from './Carousel'
import { PriceComponent } from './PriceComponent'
import { Cart } from './Cart'

export type Item = {
  name: string,
  quantity: number,
  price: number,
  image: string,
}

function App() {

  const [cart, setCart] = useState<Array<Item>>([])
  const [showCart, setShowCart] = useState(false)

  return (
    <>
      <nav className='navbar'>
        <img src="/images/icon-menu.svg" alt="burger menu" className='burger-menu' onClick={() => toggleNav()} />
        <img src="/images/logo.svg" alt="sneakers logo" className="logo" />
        <div className='nav-items'>
          <button className='mobile-close' onClick={() => toggleNav()}>
            <img src="/images/icon-close.svg" alt="close menu" />
          </button>
          <ul>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className='cart-container'>
          <img src="/images/icon-cart-gr.svg" alt="cart"
            onClick={() => setShowCart(cart => !cart)} />
          {!!cart.length && <span className='quant'>{cart[0].quantity}</span>}
          <img src="/images/image-avatar.png" />
        </div>
        {showCart && <Cart cart={cart} cartSetter={setCart} cartShow={setShowCart} />}
      </nav>
      <main>
        <Carousel />
        <div className='container'>
          <h2>sneaker company</h2>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <PriceComponent adder={cartAdder} />
        </div>
      </main>
    </>
  )

  function cartAdder(item: Item) {
    if (!cart.length) {
      setCart([item])
      return
    }
    const p = cart[0]
    p.quantity += item.quantity
    setCart([p])
  }
  function toggleNav() {
    document.querySelector('.nav-items')?.classList.toggle('nav-active-mobile')
  }
}

export default App
