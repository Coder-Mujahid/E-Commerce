function addToCart(id){
    let shoppingCart;

    const storedCart = localStorage.getItem("shopping-cart");

    if (storedCart) {
        console.log(storedCart);
        shoppingCart = JSON.parse(storedCart);
      } else {
        shoppingCart = {};
      }
      
    let quantity = shoppingCart[id]

    if (quantity) {
        //if qauntity exist then update the
        console.log("already existed");
        const newQuantity = parseInt(quantity) + 1;
        // localStorage.setItem(id, newQuantity);
        shoppingCart[id] = newQuantity;
      } else {
        console.log("new data");
        // localStorage.setItem(id, 1);
        shoppingCart[id] = 1;
      }
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}

function removeItem(id) {
    console.log("delete")
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
      let shoppingCart = JSON.parse(storedCart);
      delete shoppingCart[id]; 
  
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }

export {addToCart,removeItem}