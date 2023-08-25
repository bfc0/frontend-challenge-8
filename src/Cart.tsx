import './Cart.css'
import { Item } from './App'
import { SetStateAction } from 'react';

type Props = {
    cart: Item[],
    adder: React.Dispatch<SetStateAction<Item[]>>
}

export function Cart(props: Props) {

}