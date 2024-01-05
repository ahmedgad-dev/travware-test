import React from "react";
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import CartItem from "@/app/components/cart-item/CartItem";
import CartIcon from "../../src/app/components/CartIcon";

  it('should display cart count', ()=> {
    render(<CartIcon/>);
    const btn = screen.getByRole('button')
  })