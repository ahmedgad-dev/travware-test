"use client"
import React from 'react'
import './styles.css'
import styled from 'styled-components'
import { useFilterContext } from '../../context/filter.context'
import { getUniqueValues, formatPrice } from '../../utils/helpers'
//import RangeSlider from 'react-range-slider-input';
//import 'react-range-slider-input/dist/style.css';


const Filters = () => {
     const{
      filters: {
        text,
        category,
        price,
        max_price,
        min_price,
      }, updateFilters, clearFilters, all_products
     } = useFilterContext() 

     //remove repeated categories from array
     const categories = getUniqueValues(all_products, 'category')

   return(
    <Wrapper>
      <div className="content">
        {/*  SEARCH INPUT */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={updateFilters}/>
          </div>
        {/*  SEARCH INPUT */}
        {/* CATEGORIES */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((cat, index )=> {
                return <button key={index} 
                         onClick={updateFilters}
                         type='button'
                         name='category'
                         className={`${category === cat.toLowerCase() ? 'active' : null }`} 
                         >
                        {cat}
                      </button>
               })}
            </div>
          </div> 
        {/* CATEGORIES */}

        {/*  PRICE */} 
            <div className="form-control">
              <h5>Price</h5>
              <p className="price">${price}</p>
              <input type='range' name='price' onChange={updateFilters} min={min_price} max={max_price} value={price}/>
            </div>
        {/*  PRICE */}                      
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>clear filters</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid black;
    letter-spacing: 1px;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: 1px;
    cursor: pointer;
  }
  .active {
    border-color:gray;
  }

  .color-btn{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: white;
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: #2D6F6C;
    color: white;
    padding: 0.5rem;
    border-radius: 10px;
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
