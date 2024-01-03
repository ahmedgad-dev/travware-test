"use client"
import Navbar from './components/Navbar'
import CardList from './components/CardList'
//import Product from './components/Product'
import { AppProvider } from './context/globalContext'
import { BrowserRouter } from 'react-router-dom'

export default function Home() {
  return (
    <AppProvider>
      <main className="">
        <Navbar/>
        <CardList/> 
      </main>
   </AppProvider>

  )
}
