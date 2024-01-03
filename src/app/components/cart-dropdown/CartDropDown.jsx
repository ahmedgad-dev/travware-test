import React, {useContext} from 'react'
import './cart-dropdown.styles.scss'
import { CartContext } from '../../context/cart.context';
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem';
import { useNavigate } from "react-router-dom";


const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)

    let navigate = useNavigate();
    return(
        <div className='cart-dropdown'> 
            {cartItems.length ?
            <div className='cart-dropdown-body'>
             <div className='cart-items'>            
               {cartItems.map(item => (
                 <CartItem key={item.id} item={item}/>
               ))}                                        
            </div> 
             <CustomButton onClick={() =>{ navigate('/checkout')}}>GO TO CHECKOUT</CustomButton>  
            </div> : <span className='empty-span'>Cart is currently Empty <br/> 
                        <CustomButton className='empty-message-btn'  onClick={() => {navigate('/shop')}}> Shop Now </CustomButton>
                     </span>
            }                         
        </div>
    )
}


export default CartDropdown

