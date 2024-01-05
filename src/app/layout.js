import { Inter } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { CartProvider } from './context/cart.context'
import { FilterProvider } from './context/filter.context';
import { ProductsProvider } from './context/products.context';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TravWare test',
  description: 'Made by Ahmed Gad dev for TravWare',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductsProvider>
         <FilterProvider>
          <CartProvider>
           <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </body>
    </html>
  )
}
