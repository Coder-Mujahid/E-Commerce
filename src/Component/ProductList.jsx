/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Rating } from "./FlashSale";
import { addToCart, removeItem } from "./FakeDataBase";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const addToCartHandler = (product) => {
    console.log(product)
    // setCartItems((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
    // Fetch data from your session folder or use your data fetching logic
    // For example, if your data is in a JSON file:
    fetch("../../public/Products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" w-full  bg-stone-100">
      <div className=" w-11/12 mx-auto flex flex-col items-center py-5">
        <h2 className=" text-4xl font-bold capitalize mb-5 text-violet-600">
          find your Products
        </h2>
        <input
          className=" border-[1px] border-slate-200 py-3 outline-offset-1  px-6 rounded-full shadow-md shadow-slate-400 w-10/12 mb-5 text-lg font-medium"
          type="text"
          placeholder="Search by name "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className=" w-full h-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCartHandler={addToCartHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, addToCartHandler }) => {

  const deleteToCartHandler = (id) => {
    // Assuming deleteToCart is a function i want to call
    removeItem(id);
  };

  // pagination handler

  
  
  return (
    <div className="border-[1px] border-slate-200 h-auto w-auto flex flex-col p-3 mb-5 md:mb-0 shadow-md shadow-slate-600 rounded-lg">
      <div className=" h-auto dark:bg-gray-800 dark:border-gray-700">
        {/*  */}
        <img
          className="object-cover w-full "
          src={product.img}
          alt={product.name} // Assuming the product object has a 'name' property
        />

        <div className=" pt-3 justify-end flex flex-col ">
          <div>
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center mt-2.5 mb-5">
            <Rating></Rating>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {product.ratings}
            </span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>

            <button
            onClick={() => {
              addToCartHandler(product);
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>

            <button
              onClick={() => {
                deleteToCartHandler(product.id);
              }}
              className="text-black font-medium rounded-lg text-3xl  text-center"
            >
              ⓧ
            </button>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
