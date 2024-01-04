import React,{useState} from 'react'
import CartIcon from './cart-icon/CartIcon'
import CartDropdown from './cart-dropdown/CartDropDown'
import Link from 'next/link'
import { CartContext } from '../context/cart.context'

function Navbar() {
  const {cartOpen} = React.useContext(CartContext)
  return (
    <div className="navbar bg-base-100" style={{ color:'black'}}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href='/shop'>Shop</Link></li>
        <li>
          <a href=''>Parent</a>
          <ul className="p-2 text-black">
            <li><a href=''>Submenu 1</a></li>
            <li><a href=''>Submenu 2</a></li>
          </ul>
        </li>
        <li><Link href='/checkout'>Item 3</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">TravWare</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href='/shop'>Shop</Link></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a href=''>Submenu 1</a></li>
            <li><a href=''>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><Link href='/checkout'>Checkout</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <CartIcon/>
    <a href='' className="btn">Button</a>

  </div>
  {cartOpen? <CartDropdown/> : null} 
</div>
  )
}

export default Navbar

