import React, { useState } from "react";

function ProductDetail({ item , onDelete}) {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(!showDetail);
  };
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div  className="product" onClick={handleClick}>
      <img src={item?.thumbnail} alt={item.title} />
      <div className="info">
        <div className="title" title={item.description}>
          {item.title}
        </div>
        <div className="prices">
          <del className="price-root">
            {new Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD"
            }).format(item?.price)}
          </del>
          <span className="price-pro">
            {new Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD"
            }).format(Math.floor(item?.price * 100 / item?.discountPercentage))}
          </span>
        </div>
      </div>
      {showDetail  && (
        <div  className="detail"> 
        <span> 
          <p>{item.description}</p>
          <p>Rating: {item.rating}</p>
          <p>Stock: {item.stock}</p>
          <p>Brand: {item.brand}</p>
          <p>Category: {item.category}</p>
          </span>
          <div className="images">
            {item.images.map((image, index) => (
              <img key={index} src={image} alt={`image${index}`} />
            ))}
          </div>
        </div>
      )}
          <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ProductDetail;
