let salesDecimal = 0; 

let productData = 
{ 
  "products": [
      {
          "name": "Obermeyer Women's Tuscany II Jacket",
          "price": {
              "price": 259
          }
      },
      {
          "name": "The North Face Men's Arrowood Triclimate Jacket",
          "price": {
              "price": 199,
              "salePrice": 119.93
          }
      },
      {
          "name": "Patagonia Boy's Down Sweater Jacket",
          "price": {
              "price": 119
          }
      }
  ]
};

function checkSales(){
  productData.products.forEach(
    function(product){
      if(product.price.hasOwnProperty('salePrice')){
        salesDecimal = Math.round((product.price.salePrice/product.price.price) * 100);

        console.log("Product on sale: " + product.name); 
        console.log("Product sale percentage: " + (100 - salesDecimal) + "% off");
     }
    }
  );
}