import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import OrderReview from "../orderReview/OrderReview";
import "./order.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const deleteItem = (product) => {
    const restInCart = cart.filter((pd) => pd.id !== product.id);
    setCart(restInCart);
    removeFromDb(product.id);
  };

  return (
    <div className="shop">
      <div className="products-container">
        <div className="display-revew-products">
          {cart.map((product) => (
            <OrderReview
              key={product.id}
              product={product}
              deleteItem={deleteItem}
            ></OrderReview>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/checkout">
            <button>CheckOut</button>
          </Link>
        </Cart>
        t
      </div>
    </div>
  );
};

export default Orders;
