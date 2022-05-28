import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import "./shop.css";
const Shop = () => {
  //custorm hoo
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop">
      <div className="products-container">
        <h2> all products </h2>
        <div className="display-products">
          {products.map((product) => (
            <Product
              handleAddToCart={handleAddToCart}
              key={product.id}
              product={product}
            ></Product>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/orders">
            <button className="btn btn-primary">Review Orders</button>{" "}
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
