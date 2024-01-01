/* eslint-disable react/jsx-key */
import logo from "../../public/img/icons8-amazon-500.png";
import cart from "../../public/img/cart.gif";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Cart from "./Cart";
import { Link } from "react-router-dom";

export default function Nav() {

  const addToCartHandler = (id) => {
    // Assuming addToCart is a function i want to call
    // addToCart(id);
  };


  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/Products",
    },
    {
      name: "About Us",
      link: "/About",
    },
    {
      name: "Contact us",
      link: "/Contact",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isCart, setIsCart] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsCart(!isCart);
  };
  return (
    <>
      <Cart addToCartHandler={addToCartHandler} isCart={isCart} setIsCart={setIsCart}></Cart>

      <div className=" w-full z-20 bg-sky-200  fixed border-b-[1px] border-slate-200">
        <div className=" w-11/12 mx-auto flex h-auto ">
          <aside className=" w-16 p-1  ">
            <img src={logo} alt={logo} />
          </aside>

          <div className="md:basis-4/5 h-auto hidden md:block">
            <ul className="  flex gap-5 items-center justify-end h-full">
              {menu.map((item) => (
                <Link to={item.link} className=" h-auto text-base font-semibold ease-out duration-100 hover:border-b-[2px] hover:border-orange-500"
                >{item.name}</Link>
              ))}
            </ul>
          </div>

          <div className=" md:basis-1/5 w-full flex justify-end">
            {/* dropdown */}
            {
              <button
                className="dropdown-button block md:hidden px-2 rounded-lg  text-3xl"
                onClick={toggleDropdown}
              >
                {isOpen ? (
                  <i className="bx bx-x"></i>
                ) : (
                  <i className="bx bx-menu"></i>
                )}
              </button>
            }

            <aside onClick={toggleCart} className="w-16 p-3">
              <img src={cart} alt={cart} />
            </aside>
          </div>
        </div>

        {/* dropdown */}
        <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}></Dropdown>
      </div>
    </>
  );
}
