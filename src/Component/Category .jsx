import { Link } from "react-router-dom";
import { FilterCategory } from "./FilterCategory";

export default function Category() {
  return (
    <div className="w-11/12 mx-auto mb-5">
      <div className="bg-sky-200 rounded-md md:flex items-center justify-between p-4 mb-2">
        <h2 className=" text-2xl font-semibold capitalize mb-2 text-center md:text-start">Category</h2>
        <Link to={"/Products"} className="block bg-slate-500 px-10 py-1 tex-lg font-semibold capitalize text-white rounded-lg">view all categories</Link>
      </div>

      <FilterCategory></FilterCategory>
    </div>
  );
}
function Card({img,category}) {
  return (
    <div className="border-[1px] border-slate-200 w-auto flex flex-col p-3 mb-5 md:mb-0 shadow-lg shadow-slate-400 rounded-lg">
      <aside className="w-full flex items-center justify-center bg-[#EBEEEF] rounded-md mb-2">
        <img
          className="object-cover w-52"
          src={img}
          alt="Category img" // Assuming the product object has a 'name' property
        />
      </aside>
      <p className="font-semibold text-xl mb-2">{category}</p>

    </div>
  );
}
