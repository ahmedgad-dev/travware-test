import React from "react";
import { render,} from '@testing-library/react';
import CheckOut from "@/app/checkout/page";
import { CartProvider } from "@/app/context/cart.context";

test('renders properly without errors', () => {
    render(
      <CartProvider>
        <CheckOut />
      </CartProvider>
    );
  });