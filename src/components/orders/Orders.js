import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  return (
    <div>
      {" "}
      total products is : {products.length}
      <h2> Total added cart is : {cart.length}</h2>
    </div>
  );
};

export default Orders;
