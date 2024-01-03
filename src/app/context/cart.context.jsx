"use client"
import React, {createContext,useReducer} from 'react'
//import cartReducer from '../reducers/cartReducer'
import { actionTypes } from '../reducers/actions'

//Helper function creates a new property of quantity to an item if first time add or adds to the quantitiy if existsing
export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)   
  if(existingCartItem){
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
       {...cartItem, quantity: cartItem.quantity + 1} :
        cartItem )
  }
    return[...cartItems, {...productToAdd, quantity: 1}]    
}

//Used in the checkout page for decreasing cart items in checkout page or remove it if quaantity is 1
const decreaseItemFromCart = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id) 

  if(existingCartItem.quantity === 1){
     return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  }
  
  return cartItems.map(cartItem => cartItem.id === productToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1} :
         cartItem )
}

// clear the cart item from cart
const clearItem = (cartItems, product) => {
  return cartItems.filter(cartItem => cartItem.id !== product.id )
}

export const CartContext = createContext()

const INITIAL_STATE = {
   cartOpen: false,
   cartItems: [],
   cartCount: 0,
   cartTotal: 0,
}

const cartReducer = (state, action) => {
  const{type, payload} = action
   switch(type){
      case actionTypes.ADD_TO_CART:          
         return{...state,
           cartItems: addCartItem(state.cartItems, payload), 
           total: state.total + 1,
           quantitiy: state.quantitiy + 1 }
      case actionTypes.SET_CART_ITEMS: 
         return{...state, ...payload}
      case actionTypes.TOGGLE_CART_OPEN:
        return{ ...state,
               cartOpen: !state.cartOpen} 
      case actionTypes.OPEN_CART:
            return{...state, cartOpen: true}                  
      default: throw new Error('unhandled type')
  }
}


export const CartProvider = ({children})  => {
  const[state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  const toggleCartOpen = () => {
    dispatch({type: actionTypes.TOGGLE_CART_OPEN})
  }

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, nextItem) => {
      return total + nextItem.quantity
    }, 0)

    const newCartTotal = newCartItems.reduce((total, nextItem) => {
      return total + nextItem.quantity * nextItem.price
    }, 0)

    dispatch({type: actionTypes.SET_CART_ITEMS,
       payload: {cartItems: newCartItems, cartCount: newCartCount, cartTotal: newCartTotal}})
  }


  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(state.cartItems, productToAdd )
    updateCartItemsReducer(newCartItems)
    dispatch({type: actionTypes.OPEN_CART})
  }

  const removeItemFromCart = (product) => {
     const newCartItems = decreaseItemFromCart(state.cartItems, product)
     updateCartItemsReducer(newCartItems)
  }

  const clearItemFromCart = (product) => {
    const newCartItems = clearItem(state.cartItems, product)
    updateCartItemsReducer(newCartItems)
  }
  
 
  return(
    <CartContext.Provider value={{
        ...state,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        toggleCartOpen,
    }}>
        {children}
    </CartContext.Provider>
  )
}



