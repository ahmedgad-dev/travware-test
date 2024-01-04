"use client"
import Navbar from './components/Navbar'
import ProductSortAndFilter from './components/ProductSortAndFilter'


export default function Home() {
  return (
        <main className="p-3">
         <Navbar/>
         <ProductSortAndFilter/> 
       </main>
     
  )
}
