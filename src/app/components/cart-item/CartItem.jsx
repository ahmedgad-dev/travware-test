import React from 'react'
import './styles.css'


const CartItem = ({item: {image, name, price, quantity}}) => {
    return(
        <div className='cart-item'>
            <img src={image} alt='item'/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'> {quantity} X ${price}</span>
            </div>
        </div> 
    )
}

export default CartItem;