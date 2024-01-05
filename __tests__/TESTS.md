#Test Case: should handle filtering products by price
Description: Verify that products are filtered by price range
Test Data: 1-1000
Expected Result: 1000
Actual Result: 1000
Status: Pass

#Test Case: should handle clearing all filters
Description: Verify that filteres are reset to default
Test Data:     
    filters: {
       text:'Hello test',
       category: 'Electronics',
     }
Expected Result: 
    filters: {
       text:'',
       category: 'all',
     }
Actual Result:
    filters: {
       text:'',
       category: 'all',
     }
Status: Pass

#Test Case: product item should have name, price and describtion properties
Description: Verify that product have name, price and describtion properties
Test Data: product   
Expected Result: true
Actual Result:true
Status: pass 

#Test Case: renders properly without errors
Description: Verify that users can go to checkout page
Test Data: checkout page  
Expected Result: true
Actual Result:true
Status: pass 


#Test Case: should handle sorting the products
Description: Verify that products are sorted per user interaction
Test Data: 'price-lowest',   
Expected Result: name-a
Actual Result:name-a
Status: fail 



#Test Case: should handle adding items to the cart
Description: increase cart items in cart by 1
Test Data: '',   
Expected Result: 
Actual Result:
Status:  

#Test Case: should handle sorting the products in ascending order
Description: change the sort of products display
Test Data: 'price-lowest',   
Expected Result: 'name-a',  
Actual Result: 'name-a'',  
Status: passed

#Test Case: should handle sorting the products in descending order
Description: change the sort of products display
Test Data: 'price-lowest',   
Expected Result: 'name-z',  
Actual Result: 'name-z',  
Status: passed

#Test Case: should handle sorting the products by lowest price
Description: change the sort of products display
Test Data: 'name-a',   
Expected Result: 'price-lowest',  
Actual Result: 'price-lowest',  
Status: passed

#Test Case: should handle sorting the products by highest price
Description: change the sort of products display
Test Data: 'price-lowest',   
Expected Result: 'price-highest',  
Actual Result: 'price-highest'',  
Status: passed
