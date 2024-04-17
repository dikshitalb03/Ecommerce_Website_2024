import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import NoPage from "./Pages/NoPage/NoPage";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import CartPage from "./Pages/Cart/CartPage";
import AllProduct from "./Pages/AllProduct/AllProduct";
import Signup from "./Pages/Registration/Signup";
import Login from "./Pages/Registration/Login";
import UserDashboard from "./Pages/User/UserDashboard";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddProductPage from "./Pages/Admin/AddProductPage";
import UpdateProductPage from "./Pages/Admin/UpdateProductPage";
import { Toaster } from "react-hot-toast";
import MyState from "./context/myState";

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/updateproduct" element={<UpdateProductPage />} />
        </Routes>
        <Toaster/>
      </Router>
    </MyState>
  );
}

export default App;