#Test Case: handle filtering products by category
Description: Verify that the category change upon user selection.
Test Data: Electronics
Expected Result: Electronics
Actual Result: Electronics
Status: Pass

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
reason:jest can't read the sort() function used


#Test Case: should handle sorting the products
Description: Verify that products are sorted per user interaction
Test Data: 'price-lowest',   
Expected Result: name-a
Actual Result:name-a
Status: fail 
reason:jest can't read the sort() function used

should handle adding items to the cart