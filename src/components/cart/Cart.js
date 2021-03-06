import React from "react";
import "./cart.css";
export default function Cart(props) {
  // console.log(props);
  let TotalPrice = 0;
  let totlaTax = 0;
  let quantity = 0;
  for (let singGleCart of props.cart) {
    TotalPrice = TotalPrice + singGleCart.price;
    quantity = quantity + singGleCart.quantity;

    totlaTax = totlaTax + TotalPrice * 0.1;
  }
  return (
    <div className="cart">
      Total added products: {props.cart.length}
      <p> toatal price is: {TotalPrice.toFixed(3)}</p>
      <p> Quantity: {quantity} </p>
      <p>tax: {totlaTax.toFixed(3)}</p>
      <p> grand price is {(totlaTax + TotalPrice).toFixed(3)}</p>
      {props.children}
    </div>
  );
}
