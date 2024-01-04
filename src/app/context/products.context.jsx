"use client"
import React, { useState, useContext, useEffect} from 'react'
const ProductsContext = React.createContext()
const INITIAL_STATE = {
  products:[]
}
export const ProductsProvider = ({ children }) => {
  const [data,setData] = useState([])
  const dataUrl = 'https://fakestoreapi.com/products'
  const fetchJsonProducts = async(url) => {
   try{
     const response = await fetch(url)
     const products = await response.json()
     console.log(products)
     setData(products)
   }catch (error) {
    console.log(error)
   }
 }

 useEffect(() => {
   fetchJsonProducts(dataUrl) 
 },[data])

  return(<ProductsContext.Provider value={{
     data
  }}
   >
    {children}
  </ProductsContext.Provider>
)}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}


