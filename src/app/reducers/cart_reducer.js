import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
    switch(action.type){
      case ADD_TO_CART:
         const {id, color, amount, product} = action.payload
         const tempItem = state.cart.find((item) => item.id === id + color)
         if(tempItem){
           const tempCart = state.cart.map((item) => {
            if(item.id === id + color){
              let newAmount = item.amount + amount
              if(newAmount > item.max ){
                  newAmount = item.max
              }
              return {...item, amount: newAmount}
            } else{
                return item
              }         
           })
            return {...state, cart: tempCart}
         }
         else {
          const newItem = {
            id: id + color,
            name: product.name,
            image: product.images[0].url,
            price: product.price,
            max: product.stock,
            color,
            amount,
           }
           return {...state, cart: [...state.cart, newItem],  }
         }

        case TOGGLE_CART_ITEM_AMOUNT: 
           const { itemId, value} = action.payload
           let newAmount 
           const newCart = state.cart.map(item => {
            if(item.id === itemId){
              if(value === 'inc'){
                newAmount = item.amount + 1
                if(newAmount > item.max){
                   newAmount = item.max
                }
                return {...item, amount: newAmount}
              } 
               else if(value === 'dec'){
                  newAmount = item.amount  - 1
                  if(newAmount < 1){
                      newAmount = 1
                 } 
                 return {...item, amount: newAmount}         
               } 
             } else {
                return item
             }      
           })     

            return{...state, cart: newCart}

         case COUNT_CART_TOTALS:
              //they were able to be destructured because the return is an object
              const {total_items, total_amount} = state.cart.reduce((total, cartItem) =>{
                const {price, amount} = cartItem
                total.total_items += amount
                total.total_amount += price * amount //calculate total price amount
                return total
              }, {total_items:0, total_amount: 0})

              return {...state, total_items, total_amount}

         case REMOVE_CART_ITEM:
           const tempCart = state.cart.filter(item => item.id !== action.payload)
           return{...state, cart: tempCart}

         case CLEAR_CART: 
            return {...state, cart: []}
      default: return state
    }
}

export default cart_reducer
