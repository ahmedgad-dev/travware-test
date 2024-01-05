import React from "react";
import { render, screen, fireEvent} from '@testing-library/react';
import Product from "@/app/components/Product";
import { CartProvider } from "@/app/context/cart.context";
  
    test('product item should have name, price and describtion properties', () => {
       render(
        <CartProvider>
          <Product/>
        </CartProvider>
       )
       const title = screen.getByTestId('title')
       const price = screen.getByTestId('price')
       const description = screen.getByTestId('description')

       expect(title).toBeInTheDocument();
       expect(price).toBeInTheDocument();
       expect(description).toBeInTheDocument();
    })


   
