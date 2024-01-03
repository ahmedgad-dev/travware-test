import { actionTypes } from "./actions"
import { addCartItem } from "../context/cart.context"

const cartReducer = (state, action) => {
    const{type, payload} = action
    switch(type){
        case actionTypes.ADD_TO_CART:          
          return{...state,
                 cartItems: addCartItem(state.cartItems, payload), 
                 total: state.total + 1,
                 quantitiy: state.quantitiy + 1 }
       
        default: throw new Error('unhandled type')
    }
}

export default cartReducer