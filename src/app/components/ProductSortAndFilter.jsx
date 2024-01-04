"use client"
import React from 'react'
import styled from 'styled-components'
import Filters from './filters/Filters'
import Sort from './sort/Sort'
import ProductList from './ProductList'


const ProductSortAndFilter = () => { 
  return(
        <Wrapper>
          <div className="section-center products">
            <Filters/>
            <div>
              <Sort/>
              <ProductList/>
            </div>
          </div>         
        </Wrapper>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductSortAndFilter
