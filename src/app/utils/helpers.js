export const formatPrice = (price) => {
   return new Intl.NumberFormat('en-US', {   //make suree to use the new keyword
    style: 'currency',
    currency: 'USD',   
   }).format(price / 100)
}



export const getUniqueValues = (products, type) => {
   let unique = products.map((product) => product[type])
   if(type === 'colors'){
      unique = unique.flat() //The flat method returns a single array instead of a single array of an arrays     
   }
   return ['all', ...new Set(unique)]  //The set method ignores duplicate values so it will ignore all duplicates in the colors array
}


