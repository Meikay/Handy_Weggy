function getProducts(product_search){
  var params = {
    // Request parameters
  };
  $.ajax({
      url: "https://api.wegmans.io/product/products/search?criteria=jelly",
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Product-Subscription-Key","3c42e0a1f50740bb9a3ee9bb2a8b0be7");
      },
      type: "GET",
      // Request body
      data: "{body}",
    })
    .done(function(data) {
      // product = getFirstResult(data);
      // console.log(product);
      getAisle(511053, 64);
      // getPriceBySKUandStore(product['sku']);
    })
    .fail(function() {
        alert("error");
    });
}

function getFirstResult(data){
  return data.results[0];
}

