import './Cart.css'
import { Item } from './App'
import { SetStateAction } from 'react';

type Props = {
    cart: Item[],
    adder: React.Dispatch<SetStateAction<Item[]>>
}

export function Cart(props: Props) {

    return (
        <div className='cart'>
            <div className='header'>
                <h3>Cart</h3>
            </div>
            <div className='content'>
                {!props.cart.length && <p>Your Cart is Empty</p>}
                {props.cart.map(item => (
                    <>
                        <div className="cart-img-holder"><img src="/images/image-product-1-thumbnail.jpg" /></div>
                        <div>
                            <p>{item.name}</p>
                            <div><button>Checkout</button></div>
                        </div>

                    </>
                ))}
            </div>
        </div>
    )
}