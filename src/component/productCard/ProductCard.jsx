import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.image} alt="" />
      </div>
      <div className="product-details">
        <p>{props.title}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
