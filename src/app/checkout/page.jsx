"use client"
import React, {useContext} from "react";
import './styles.css'
import Link from "next/link";
import CheckoutItem from "../components/checkout-item/CheckoutItem";
import { CartContext } from "../context/cart.context";

const CheckOut = () => {
 const {cartItems, cartTotal} = useContext(CartContext)
 //const cartItems = ["helo", "bitch"]
  return(
    <div className="checkout-page">
        <Link className='btn btn-outline mb-8' href='/'>Back To Home</Link> 
        <div className="checkout-header">
            <div className="header-block">
                <span>product</span>
            </div>
            <div className="header-block">
                <span>description</span>
            </div>
            <div className="header-block">
                <span>quantity</span>
            </div>
            <div className="header-block">
                <span>price</span>
            </div>
            <div className="header-block">
                <span>remove</span>
            </div>
        </div>

        {
            cartItems && cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className="total">
           { <span>Total: ${cartTotal}</span>}
        </div>
    </div>
  )
}

export default CheckOut