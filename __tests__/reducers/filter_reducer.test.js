import { actionTypes } from "@/app/reducers/actions";
import filter_reducer from "@/app/reducers/filter_reducer";

describe('filter products', () => {
    it('should handle filtering products by price', () => {
      const prevState = {
        filters: {
          price: '1000',
        },
        products: [],
      };
  
      const action = {
        type: actionTypes.UPDATE_FILTERS,
        payload: '1-1000',
      };
  
      const newState = filter_reducer(prevState, action);
  
      expect(newState.filters.price).toBe('1000');
    });
  
    it('should handle clearing all filters', () => {
      const prevState = {
        filters: {
          text:'Hello test',
          category: 'Electronics',
        },
        products: [],
      };
  
      const action = {
        type: actionTypes.CLEAR_FILTERS,
      };
  
      const newState = filter_reducer(prevState, action);
  
      expect(newState.filters).toEqual({
        text:'',
        category: 'all',
      });
    });
  })

  describe('sort products',() => {   
    it('should handle sorting the products in descending order', () => {
      const prevState = {
        sort: 'price-lowest',
      };
  
      const action = {
        type: actionTypes.UPDATE_SORT,
        payload:'name-z'
      };

      const newState = filter_reducer(prevState, action);
      expect(newState.sort).toEqual('name-z')
    });

    it('should handle sorting the products in ascending order', () => {
      const prevState = {
        sort: 'price-lowest',
      }; 
      const action = {
        type: actionTypes.UPDATE_SORT,
        payload:'name-a'
      };
      const newState = filter_reducer(prevState, action);
      expect(newState.sort).toEqual('name-a')
    });

    it('should handle sorting the products by lowest price', () => {
      const prevState = {
        sort: 'name-a',
      }; 
      const action = {
        type: actionTypes.UPDATE_SORT,
        payload:'price-lowest'
      };
      const newState = filter_reducer(prevState, action);
      expect(newState.sort).toEqual('price-lowest')
    });

    
    it('should handle sorting the products by highest price', () => {
      const prevState = {
        sort: 'price-lowest',
      }; 
      const action = {
        type: actionTypes.UPDATE_SORT,
        payload:'price-highest'
      };
      const newState = filter_reducer(prevState, action);
      expect(newState.sort).toEqual('price-highest')
    });
  })