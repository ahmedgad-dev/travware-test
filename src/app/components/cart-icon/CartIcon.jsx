import React, {useContext} from "react";
import  './styles.css'
import ShoppingSvg  from '../../assets/shopping-bag.svg'
import Image from 'next/image';

//import { CartContext } from "../../context/cart.context";

const CartIcon = () =>{     
 //  const {cartCount, toggleCartOpen} = useContext(CartContext) 

   return(
      <div className="cart-icon" >
        <Image src={ShoppingSvg} className='shopping-icon'/>
        <span className="item-count">3</span>
      </div>
    )
}



export default CartIcon