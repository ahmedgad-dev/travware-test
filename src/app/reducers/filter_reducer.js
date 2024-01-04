import {actionTypes} from '../reducers/actions'

const filter_reducer = (state, action) => {
    switch(action.type){
      case actionTypes.LOAD_PRODUCTS:
         //We use the spread operator on action payload so that the filtered  products and all products doesn't point to the same place in memory
        // so we rather copy the values
        let maxPrice = action.payload.map((product) => product.price ) //Iterate over the array to collect all the prices
            maxPrice = Math.max(...maxPrice) //using spread operator because we can't use the Math.max passing an array

        return{
          ...state,
           all_products: [...action.payload],
          filtered_products:[...action.payload],
          filters: {...state.filters, price: maxPrice, max_price: maxPrice }
        }

      case actionTypes.UPDATE_SORT:
        return {...state, sort: action.payload}

      case actionTypes.SORT_PRODUCTS:
        const {sort, filtered_products} = state
        let tempProducts = [...filtered_products]
        //Sorting by price 
        if(sort === 'price-lowest'){
            tempProducts = tempProducts.sort((currentItem, nextItem) => (  currentItem.price - nextItem.price   ))        
        } else if(sort === 'price-highest'){
          tempProducts = tempProducts.sort((currentItem, nextItem) => (  nextItem.price - currentItem.price   )) 
          // sorting by name [A-Z]
        } else  if(sort === 'name-a'){
          tempProducts = tempProducts.sort((currentItem, nextItem) => {
            return currentItem.title.localeCompare(nextItem.title)
        }) //sorting by name [Z-A]
        } else if(sort === 'name-z'){
          tempProducts = tempProducts.sort((currentItem, nextItem) => {
            return nextItem.title.localeCompare(currentItem.title)
          })          
        }
        return{...state, filtered_products:tempProducts}

      case actionTypes.UPDATE_FILTERS:
           const {name, value} = action.payload
           return{...state, filters: {...state.filters, [name]:value}}

      case actionTypes.FILTER_PRODUCTS:
             const {all_products} = state
             // start with all data then start filtering
             let productsSet = [...all_products]      
             const{  
              text,
              category,
              price,
              } = state.filters        
             //filtering
             //text
             if(text){
                productsSet = productsSet.filter((product) => {
                  return product.title.toLowerCase().startsWith(text)
                })
             }
             //category
             if(category !== 'all'){
                 productsSet = productsSet.filter((product) => {
                   return product.category === category
                })
              }
             //PRICE
             if(price){
               productsSet = productsSet.filter((product) => { 
                 return product.price <= price
               })
             }
            
             return {...state, filtered_products: productsSet }

      case actionTypes.CLEAR_FILTERS: 
             return{
              ...state,
              filters:{
                ...state.filters,
                text: '',
                category: 'all',
                price: state.filters.max_price,
              }
            }         
      default: return state
   }
}

export default filter_reducer


