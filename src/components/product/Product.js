import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Product = ({ product, handleAddToCart }) => {
  const { category, name, seller, price, stock, ratings, img } = product;
  return (
    <div className="product">
      <img src={img} alt="pimg" />
      <div className="product-info">
        <h2>{category}</h2>
        <p> product name is: {name}</p>
        <p className="text-lowercase"> Seller is : {seller}</p>
        <p> price: {price}</p>
        <p> stock is: {stock}</p>
        <p> ratings: {ratings}</p>
      </div>

      <button onClick={() => handleAddToCart(product)} className="addToCartbtn">
        {" "}
        Add to cart <FontAwesomeIcon icon={faCoffee} />
      </button>
    </div>
  );
};

export default Product;
