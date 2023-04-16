import React, { useEffect, useState } from "react";
import Product from "@Components/Product";
import '../assets/less/products.less'
import '../assets/less/product.less'

function Products({title,children}){
   const [products,setProducts] = useState([])

   const onDeleteProduct = (id) => {
      console.log('onDelete:', id)
   }

   useEffect(() => {
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((r) => {
         setProducts(r?.products)
      });
   },[])
   useEffect(() => {
      console.log('Products',products)
   },[products])

   return(
      <>
         <h2>Products</h2>
         <div className="products">
            {products && 
               products.map(product =>
                  <Product item={product} key={product?.id} onDelete={onDeleteProduct}/>
                  )
            }
         </div>
      </>
   )
}
export default Products