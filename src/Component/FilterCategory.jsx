import { useState, useEffect } from "react";

export const FilterCategory = () => {
  const [Products, setProducts] = useState([]);

  const [Bottle, setBottle] = useState([]);
  const [Earphones, setEarphones] = useState([]);
  const [Cap, setCap] = useState([]);
  const [Bag, setBag] = useState([]);
  const [MensSneaker, setMensSneaker] = useState([]);
  const [MensBoot, setMensBoot] = useState([]);
  const [MensPants, setMensPants] = useState([]);

  useEffect(() => {
    fetch("../../public/Products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching teacher data:", error));
  }, []);
  // ----------------------------------------------------------------------
// filter 01
  useEffect(() => {
    // Filter teachers in the 'computer' category
    const CategoryBottle = Products.filter(
      (Bottle) => Bottle.category === "Bottle"
    );
    setBottle(CategoryBottle);
  }, [Products]);

// filter 02
  useEffect(() => {
    // Filter teachers in the 'computer' category
    const CategoryEarphones = Products.filter(
      (Earphones) => Earphones.category === "Earphones"
    );
    setEarphones(CategoryEarphones);
  }, [Products]);

// filter 03
  useEffect(() => {
    // Filter teachers in the 'computer' category
    const CategoryCap = Products.filter(
      (Cap) => Cap.category === "Cap"
    );
    setCap(CategoryCap);
  }, [Products]);

// filter 04
  useEffect(() => {
    // Filter teachers in the 'computer' category
    const CategoryBag = Products.filter(
      (Bag) => Bag.category === "Bag"
    );
    setBag(CategoryBag);
  }, [Products]);

// filter 05
  useEffect(() => {
    // Filter teachers in the 'computer' category
    const CategoryMensSneaker = Products.filter(
      (MensSneaker) => MensSneaker.category === "Men's Sneaker"
    );
    setMensSneaker(CategoryMensSneaker);
  }, [Products]);

// filter 06
  useEffect(() => {
    // Filter teachers in the 'computer' category
    const CategoryMensBoot = Products.filter(
      (MensBoot) => MensBoot.category === "Men's Boot"
    );
    setMensBoot(CategoryMensBoot);
  }, [Products]);

// filter 07
  useEffect(() => {
    // Filter teachers in the 'computer' category
    const CategoryMensPants = Products.filter(
      (MensPants) => MensPants.category === "Men's Pants"
    );
    setMensPants(CategoryMensPants);
  }, [Products]);

  return (
    <>
    <h2 className=" text-2xl font-semibold capitalize mb-2">Bottle</h2>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {Bottle.slice(0, 4).map((data) => {
        return <Card data={data} key={data.id} />;
      })}
      
      {Earphones.slice(0, 4).map((data) => {
        return <Card data={data} key={data.id} />;
      })}

      {Cap.slice(0, 4).map((data) => {
        return <Card data={data} key={data.id} />;
      })}

      {Bag.slice(0, 4).map((data) => {
        return <Card data={data} key={data.id} />;
      })}

      {MensSneaker.slice(0, 4).map((data) => {
        return <Card data={data} key={data.id} />;
      })}
      
      {MensBoot.slice(0, 4).map((data) => {
        return <Card data={data} key={data.id} />;
      })}

      {MensPants.slice(0, 4).map((data) => {
        return <Card data={data} key={data.id} />;
      })}

    </div>

    </>
   
  );
};
function Card({ data }) {
  return (
    <div className="border-[1px] border-slate-200 w-auto flex flex-col p-3 mb-5 md:mb-0 shadow-lg shadow-slate-400 rounded-lg">
      <aside className="w-full flex items-center justify-center bg-[#EBEEEF] rounded-md mb-2">
        <img
          className="object-cover w-52"
          src={data.img}
          alt="Category img" // Assuming the product object has a 'name' property
        />
      </aside>
      <p className="font-semibold text-xl ">{data.category}</p>
      <small className="font-bold text-slate-500 mb-2">{data.name}</small>
    </div>
  );
}
