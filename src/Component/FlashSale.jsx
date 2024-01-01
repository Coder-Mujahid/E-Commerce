/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SaleCountdown from "./SaleCountdown";
import { Link } from "react-router-dom";

// Items component
function Items({ product }) {
  const discountrate = 25;
  const discountedPrice = product.price - (product.price * discountrate) / 100;

  return (
    <div className="border-[1px] border-slate-200 h-auto w-auto flex flex-col p-3 mb-5 md:mb-0 shadow-lg shadow-slate-400 rounded-lg">
      <div className=" h-full max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="object-cover w-full"
            src={product.img}
            alt={product.name} // Assuming the product object has a 'name' property
          />
        </a>
        <div className=" pt-3">
          <a href="#">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              {product.name}
            </h3>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
          <Rating></Rating>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {product.ratings}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${discountedPrice}
              </span>
              <small className="font-semibold text-sm flex gap-3">
                <del>${product.price}</del>{" "}
                <span className=""> - {discountrate}%</span>
              </small>
            </div>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Categories component
 function FlashSale() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../public/Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(30, 38)))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="w-11/12 mx-auto mb-5">
      <div className="bg-sky-200 rounded-md md:flex items-center justify-between p-4 mb-2">
        <h2 className=" text-2xl font-semibold capitalize mb-2">Flash sale</h2>
        <SaleCountdown></SaleCountdown>
        <button>
          
        </button>
        <Link to={"/Products"} className="block bg-slate-500 px-10 py-1 tex-lg font-semibold capitalize text-white rounded-lg">more</Link>
      </div>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <Items key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function Rating() {
  return (
    <div className="rating z-10">
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
  );
}



export {Rating, FlashSale};