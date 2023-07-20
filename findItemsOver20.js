export default
function findItemsOver20(products) {
    
    const filteredProducts = products.filter((product) => product.qty > 20);
  
    return filteredProducts;
  }
  
  function findItemsOver(items, threshold) {
    
    const results = [];
  
    
    for (let i = 0; i < items.length; i++) {
      
      if (items[i].qty > threshold) {
        
        results.push(items[i]);
      }
    }
  
    
    return results;
  }
  