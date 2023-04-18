import React, { useEffect, useState } from "react";
import ProductDetail from "@Components/ProductDetail";
import "../assets/less/products.less";
import "../assets/less/product.less";

function Products({ title, children }) {
  
  const [products, setProducts] = useState([]);
  const handleDeleteProduct = (id) => {
   setProducts((prevProducts) =>
     prevProducts.filter((product) => product.id !== id)
   );
 };
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((r) => {
        setProducts(r?.products);
      });
  }, []);
  useEffect(() => {
    console.log("Products", products);
  }, [products]);

  return (
    <>
      <h2>Products</h2>
      <div className="products">
        {products &&
          products.map((product) => (
            <ProductDetail
              item={product}
              onDelete={handleDeleteProduct}
            />
          ))}
      </div>
    </>
  );
}

export default Products;
