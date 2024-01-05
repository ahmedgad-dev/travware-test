import React, {useContext} from "react";
import  './styles.css'
import ShoppingSvg  from '../../assets/shopping-bag.svg'
import Image from 'next/image';
import { CartContext } from "../../context/cart.context";

const CartIcon = () =>{     
   const {cartCount, toggleCartOpen} = useContext(CartContext) 

   return(
      <div className="cart-icon" onClick={toggleCartOpen}>
        <Image src={ShoppingSvg} className='shopping-icon' alt='shopping bag'/>
        <span className="item-count">{cartCount}</span>
      </div>
    )
}



export default CartIcon