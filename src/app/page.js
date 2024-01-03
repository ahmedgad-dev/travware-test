"use client"
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import { AppProvider } from './context/globalContext'
import { CartProvider } from './context/cart.context'


export default function Home() {
  return (
        <main className="">
         <Navbar/>
         <ProductList/> 
       </main>
     
  )
}
