import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import OrderReview from "./components/orderReview/OrderReview";
import Orders from "./components/orders/Orders";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Shop></Shop>} />
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path="/orders" element={<Orders></Orders>} />
        <Route path="/inventory" element={<OrderReview></OrderReview>} />
      </Routes>
    </div>
  );
}

export default App;