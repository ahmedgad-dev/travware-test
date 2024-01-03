import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
    switch(action.type){
      case LOAD_PRODUCTS:
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

      case SET_GRIDVIEW:
        return {...state, grid_view: true }
      case SET_LISTVIEW:
        return {...state, grid_view: false }
      case UPDATE_SORT:
        return {...state, sort: action.payload}

      case SORT_PRODUCTS:
        const {sort, filtered_products} = state
        let tempProducts = [...filtered_products]
                  //check the sort explanation below
        if(sort === 'price-lowest'){
            tempProducts = tempProducts.sort((currentItem, nextItem) => (  currentItem.price - nextItem.price   ))        
        } else if(sort === 'price-highest'){
          tempProducts = tempProducts.sort((currentItem, nextItem) => (  nextItem.price - currentItem.price   )) 
        } else  if(sort === 'name-a'){
          tempProducts = tempProducts.sort((currentItem, nextItem) => {
            return currentItem.name.localeCompare(nextItem.name)
        })
        } else if(sort === 'name-z'){
          tempProducts = tempProducts.sort((currentItem, nextItem) => {
            return nextItem.name.localeCompare(currentItem.name)
          })          
        }
        return{...state, filtered_products:tempProducts}

      case UPDATE_FILTERS:
           const {name, value} = action.payload
           return{...state, filters: {...state.filters, [name]:value}}

      case FILTER_PRODUCTS:
             const {all_products} = state
             // before filtering we should always start with a fresh set of data then start filtering
             let productsSet = [...all_products]      
             const{  
              text,
              company,
              category,
              color,
              price,
              shipping} = state.filters        
             //filtering
             //text
             if(text){
                productsSet = productsSet.filter((product) => {
                  return product.name.toLowerCase().startsWith(text)
                })
             }
             //category
             if(category !== 'all'){
                 productsSet = productsSet.filter((product) => {
                   return product.category === category
                })
              }
              //company
              if(company !== 'all'){
                  productsSet = productsSet.filter((product) => {
                   return product.company === company
                })
               }
               //COLORS
              if(color !== 'all'){
                productsSet = productsSet.filter((product) => {
                  return product.colors.find((c) => c === color)
                })
               }
                //PRICE
                if(price){
                  productsSet = productsSet.filter((product) => { 
                    return product.price <= price
                  })
                }

                //SHIPPING
              if(shipping){
                productsSet = productsSet.filter((product) => { 
                  return product.shipping === true
                })
              }
            
             return {...state, filtered_products: productsSet }

      case CLEAR_FILTERS: 
             return{
              ...state,
              filters:{
                ...state.filters,
                text: '',
                company: 'all',
                category: 'all',
                color: 'all',
                price: state.filters.max_price,
                shipping: false
              }
            }         
      default: return state
   }
}

export default filter_reducer


/*    This is same as sort function used above 
    if(sort === 'price-lowest'){
       tempProducts = tempProducts.sort((currentItem, nextItem) => {
           if(currentItem.price > nextItem.price){
              return -1
           }
           if( nextItem.price > currentItem.price){
              return 1
           }
           return 0
       })
    }
*/