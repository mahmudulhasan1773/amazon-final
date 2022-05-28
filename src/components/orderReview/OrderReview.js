import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./reviewOrder.css";

const OrderReview = ({ product, deleteItem }) => {
  return (
    <div className="rivew-order">
      <img src={product.img} alt="product" />
      <div className="p-info">
        <p> product name: {product.name}</p>
        <p> Price: {product.price}</p>
        <p>quantity:{product.quantity}</p>
      </div>
      <button onClick={() => deleteItem(product)}>
        <FontAwesomeIcon className="d-icon" icon={faTrash} />
      </button>
    </div>
  );
};

export default OrderReview;
