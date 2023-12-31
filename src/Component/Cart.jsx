import products from "../../public/img/icons8-product-64.png";
import remove from "../../public/img/icons8-delete.gif";
import { useState } from "react";

const Cart = ({ isCart, setIsCart }) => {
  const [cartItems, setCartItems] = useState([]);

  const modalStyle = {
    right: isCart ? "0px" : "-1000px", // Adjust the initial position and width as needed
  };

  return (
    <div
      className="fixed z-50 h-96 lg:w-96 md:w-80 w-80 top-16 transition-all duration-500 ease-in-out"
      style={modalStyle}
    >
      <div className=" bg-gradient-to-r from-[#B4CCEF] rounded-lg to-[#497DC7] p-2 flex flex-col justify-end">
        <div className=" md:flex justify-between capitalize mb-2">
          <h2 className=" flex items-center gap-3 text-lg font-semibold max-w-screen-md">
            <i className="bx bx-cart-download text-3xl "></i>Your Cart{" "}
          </h2>
          <h2 className="flex items-center gap-3 text-lg pr-2 font-semibold max-w-screen-md">
            {" "}
            total price = <span>0</span>
          </h2>
        </div>
        <div className=" overflow-y-scroll h-[450px] rounded-md ">
        {cartItems.map((item, index) => (
            <Product key={index} product={item} />
          ))}
        </div>
        <i
          onClick={() => setIsCart(false)}
          className="bx bx-x text-end  text-red-800 text-2xl"
        ></i>
      </div>
    </div>
  );
};

export default Cart;


function Product(product ) {
  return (
    <section>
    <div className="w-full flex bg-slate-50 shadow-md shadow-slate-400 mb-2 rounded-lg">
      <aside className="p-1 flex items-center justify-center bg-stone-200 rounded-lg">
        <img className="w-28" src={products} alt={products} />
      </aside>
      <div className="flex justify-between w-full h-full p-1 font-semibold">
        <div className="flex flex-col">
          <small>category : Home & Kitchen Home & Kitchen</small>
          <small>name : {product.name}</small>
          <small>quantity : {product.quantity}</small>
          <small>price : ${product.price}</small>
        </div>
        <aside className="flex items-center justify-center ">
          <img className="w-10" src={remove} alt={remove} />
        </aside>
      </div>
    </div>
  </section>
  );
}
