import { useState, useEffect } from "react";

function CategoryProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    // Fetch your products from the JSON file or API
    // and update the state with the products and categories.
    fetch("../../public/Products.json")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
        setProducts(data);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div>
      {/* Category filter */}
      <div>
        <label>Select Category: </label>
        <select onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display products for the selected category */}
      <div>
        <h2>Products</h2>
        {products
          .filter((product) => !currentCategory || product.category === currentCategory)
          .map((product) => (
            <div key={product.id}>
              <p>{product.name}</p>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Discount: {product.discount}%</p>
              <img src={product.img} alt={product.name} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
