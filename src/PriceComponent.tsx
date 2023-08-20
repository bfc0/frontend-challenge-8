import { useState } from 'react'
import './PriceComponent.css'
import { Item } from './App.tsx'

export function PriceComponent({ adder }: { "adder": (x: Item) => void }) {

    const [number, setNumber] = useState(0)
    return (
        <div className='price-component'>
            <div className='price'><h1>$125.00</h1><span>50%</span> <s>$250.00</s></div>
            <div className='count-controls'>
                <img src='/images/icon-minus.svg'
                    onClick={() => setNumber(p => p > 0 ? p - 1 : 0)}
                />
                <em>{number}</em>
                <img src='/images/icon-plus.svg'
                    onClick={() => setNumber(p => p + 1)}
                />
            </div>
            <button
                onClick={() => {
                    if (number <= 0) {
                        return
                    }
                    console.log("click!")
                    adder({
                        name: "1234",
                        quantity: number,
                        price: 125.00,
                    })
                }}>
                <img src="/images/icon-cart.svg" id="cart" />Add to cart</button>
        </div>
    )
}