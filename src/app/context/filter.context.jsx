"use client"
import React, { useEffect, useContext, useReducer } from 'react'
import filter_reducer from '../reducers/filter_reducer'
import {  actionTypes} from '../reducers/actions'
import { useProductsContext } from './products.context'

const INITIAL_STATE = {
  filtered_products: [],
  all_products: [],
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    price: 0,
    max_price:1000000,
    min_price:0,
  }
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, INITIAL_STATE)
  const {data:products} = useProductsContext()

  const updateFilters = (e) => {
      let name = e.target.name
      let value = e.target.value    
      if(name === 'category'){
          value = e.target.textContent
      } 
      if(name === 'price'){
          value = Number(value)
      }
      dispatch({type:actionTypes.UPDATE_FILTERS, payload: {name, value}})
  }

  const clearFilters = () => {
     dispatch({type: actionTypes.CLEAR_FILTERS})
  }

  const updateSort = (e) => {
   // const name = e.target.name 
    const value = e.target.value
    dispatch({type:actionTypes.UPDATE_SORT, payload: value})
  }

   useEffect(() => {
     dispatch({type: actionTypes.LOAD_PRODUCTS, payload:products})
  }, [products])

  useEffect(() => {
    dispatch({type: actionTypes.FILTER_PRODUCTS})
    dispatch({type: actionTypes.SORT_PRODUCTS})
  }, [products, state.sort, state.filters])

  return(
    <FilterContext.Provider value={{
      ...state,
      updateSort,
      updateFilters,
      clearFilters
    }}
      >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
