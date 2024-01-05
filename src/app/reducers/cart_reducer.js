import {actionTypes} from './actions'

const cart_reducer = (state, action) => {
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

  export default cart_reducer