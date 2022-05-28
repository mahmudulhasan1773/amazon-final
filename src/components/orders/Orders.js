import React from "react";
import useCart from "../../hooks/useCart";

import useProducts from "../../hooks/useProducts";
import Cart from "../cart/Cart";
import OrderReview from "../orderReview/OrderReview";
import "./order.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  return (
    <div className="shop">
      <div className="products-container">
        <div className="display-revew-products">
          {cart.map((product) => (
            <OrderReview key={product.id} product={product}></OrderReview>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>t
      </div>
    </div>
  );
};

export default Orders;
