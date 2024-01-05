import { actionTypes } from "@/app/reducers/actions";
import filter_reducer from "@/app/reducers/filter_reducer";

describe('filter_reducer', () => {
    it('should handle filtering products by category', () => {
      const prevState = {
        filters: {
          category: 'Electronics',
        },
        products: [],
      };
  
      const action = {
        type: actionTypes.UPDATE_FILTERS,
        payload: 'Electronics',
      };
  
      const newState = filter_reducer(prevState, action);
  
      expect(newState.filters.category).toBe('Electronics');
    });
  
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
  
    it('should handle sorting the products', () => {
      const prevState = {
        sort: 'price-lowest',
      };
  
      const action = {
        type: actionTypes.SORT_PRODUCTS,
        payload:'name-a'
      };

      const newState = filter_reducer(prevState, action);
      expect(newState.sort).toBe('name-a')
    });
  });