"use client"
import React from 'react'
import { Box, Stack,Typography } from '@mui/material'
import Product from './Product'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useFilterContext } from '../context/filter.context';

 const ProductList = () => {
  const {filtered_products: products} = useFilterContext();

  if(products.length < 1) {
    return (<h5 style={{textTransform: 'none'}}> Sorry No Products Match Your Search</h5>)
  } 

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
        {products&&
          products.map(product => (
            <Product product={product}/>
          ))
          }
     </Box>
   </Stack>
  )
}

export default ProductList