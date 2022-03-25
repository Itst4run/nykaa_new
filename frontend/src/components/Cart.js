import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'

export default function Cart() {
    let items;
    let cart = useContext(CartContext)

    for(let i=0; i<cart.length; i++){
        items = cart[i].countInCart; 
    }
    return (
        <div className="bag">
            <img src="images/bag.png" height={25} />
            <span style={{ color: "red" }}>1</span>
        </div>
    )
}
