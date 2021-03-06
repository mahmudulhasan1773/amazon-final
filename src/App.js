import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./components/checkOut/CheckOut";
import Header from "./components/header/Header";
import OrderReview from "./components/orderReview/OrderReview";
import Orders from "./components/orders/Orders";
import Shop from "./components/shop/Shop";
import SignUp from "./components/signUp/SignUp";
import Login from "./login/Login";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Shop></Shop>} />
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path="/orders" element={<Orders></Orders>} />
        <Route path="/inventory" element={<OrderReview></OrderReview>} />
        <Route path="/checkout" element={<CheckOut></CheckOut>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
