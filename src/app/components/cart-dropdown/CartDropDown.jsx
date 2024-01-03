import React, {useContext} from 'react'
import './styles.css'
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/CartItem';
import Link from 'next/link';


const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    return(
        <div className='cart-dropdown'> 
            {cartItems.length ?
            <div className='cart-dropdown-body'>
             <div className='cart-items'>            
               {cartItems.map(item => (
                 <CartItem key={item.id} item={item}/>
               ))}                                        
            </div> 
             <Link className='btn btn-outline' href='/checkout'>GO TO CHECKOUT</Link> 
            </div> : <span className='empty-span'>Cart is currently empty! add items <br/></span>}                              
        </div>
    )
}


export default CartDropdown

