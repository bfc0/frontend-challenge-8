import './Cart.css'
import { Item } from './App'
import { SetStateAction } from 'react';

type Props = {
    cart: Item[],
    cartSetter: React.Dispatch<SetStateAction<Item[]>>
    cartShow: React.Dispatch<SetStateAction<boolean>>
}

export function Cart(props: Props) {

    const content = !props.cart.length ? (<p>Your cart is empty</p>) :
        (
            <>
                {props.cart.map(item => (
                    <div className='cart-item' key={item.name}>
                        <div className='cart-img-holder'><img src={item.image} alt="item" /></div>
                        <div>
                            <p>{item.name}</p>
                            <p>${item.price.toFixed(2)} x {item.quantity} &nbsp; <em>${(item.price * item.quantity).toFixed(2)}</em></p>
                        </div>
                        <div>
                            <img src="./images/icon-delete.svg" alt="delete" onClick={() => {
                                props.cartSetter([])
                                props.cartShow(false)
                            }} />
                        </div>
                    </div>
                ))}
                <button className='cart-btn'>Checkout</button>
            </>
        )


    return (
        <div className='cart'>
            <div className='header'>
                <h3>Cart</h3>
            </div>
            <div className='content'>
                {content}
            </div>
        </div>
    )
}