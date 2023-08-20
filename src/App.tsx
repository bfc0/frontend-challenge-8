import { useState } from 'react'
import './App.css'
import { Carousel } from './Carousel'
import { PriceComponent } from './PriceComponent'

export type Item = {
  name: string,
  quantity: number,
  price: number,
}

function App() {

  const [cart, setCart] = useState<Array<Item>>([])
  return (
    <>
      <header>{cart.toString()}</header>
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
    </>
  )
  function cartAdder(item: Item) {
    setCart(cart => [...cart, item])
    console.log(cart)
  }
}

export default App
