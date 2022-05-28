import React from "react";
import "./reviewOrder.css";

const OrderReview = ({ product }) => {
  return (
    <div className="rivew-order">
      <img src={product.img} alt="product"></img>
      <div className="p-info">
        <p> product name: {product.name}</p>
        <p> Price: {product.price}</p>
        <p>quantity:{product.quantity}</p>
      </div>
      <button>delete</button>
    </div>
  );
};

export default OrderReview;
