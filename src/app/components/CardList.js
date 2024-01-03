"use client"
import React,{useState, useEffect} from 'react'
//import {CARDS_DATA}from '../dataFiles/cardData'
import { Box, Stack,Typography } from '@mui/material'
import Product from './Product'
import { IoIosArrowRoundForward } from "react-icons/io";

 const CardList = () => {
  const [data,setData] = useState([])
  const dataUrl = 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'

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

  return(
    <Stack className='section' sx={{}}>
      <Box className='flex-row' sx={{justifyContent:'space-between', margin:'30px'}}>
         <Typography variant='h5'>FEATURED STOCK ITEMS</Typography>
         <Box sx={{}} className='flex-row'>
           <Typography sx={{fontWeight:'bold', letterSpacing:'1px'}}>LEARN MORE</Typography>
           <IoIosArrowRoundForward style={{width:'35px', height:'35px'}}/>             
         </Box>
      </Box>
     <Box className='flex-row'>
      {
       data.map((product) => (
          <div>{product.name}</div>
       ))
      } 
     </Box>
   </Stack>
  )
}

export default CardList