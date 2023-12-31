import { Link } from "react-router-dom";

/* eslint-disable react/jsx-key */
export default function Dropdown({ isOpen, setIsOpen }) {
    const Close = () => {
      setIsOpen(!isOpen);
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
        name: "Categories",
        link: "/Categories",
      },
      {
        name: "About Us",
        link: "/About",
      },
    ];
    return (
      <ul
        className={`flex flex-col gap-1 w-11/12 mx-auto items-center justify-center rounded-lg h-full bg-stone-200 p-2 ${
          isOpen ? "block " : "hidden "
        }`}
      >
        {menu.map((item) => (
          <Link  onClick={Close} to={item.link} className=" shadow-inner hover:shadow-md hover:shadow-white shadow-slate-400 duration-500 bg-sky-100 hover:bg-sky-200 w-full rounded-md p-1 text-center h-auto text-base font-semibold ease-out "
                >{item.name}</Link>
        ))}
      </ul>
    );
  }