"use client"
import React,{useState, useEffect} from 'react'
//import {CARDS_DATA}from '../dataFiles/cardData'
import { Box, Stack,Typography } from '@mui/material'
import Product from './Product'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useProductsContext } from '../context/products.context';


 const ProductList = () => {
 const {data} = useProductsContext()

  return(
    <Stack className='section' sx={{}}>
      <Box className='flex-row' sx={{justifyContent:'space-between', margin:'30px'}}>
         <Typography variant='h5'>FEATURED STOCK ITEMS</Typography>
         <Box sx={{}} className='flex-row'>
           <Typography sx={{fontWeight:'bold', letterSpacing:'1px'}}>LEARN MORE</Typography>
           <IoIosArrowRoundForward style={{width:'35px', height:'35px'}}/>             
         </Box>
      </Box>
     <Box className='flex flex-row flex-wrap'>
        {data&&
          data.map(product => (
            <Product product={product}/>
          ))
          }
     </Box>
   </Stack>
  )
}

export default ProductList