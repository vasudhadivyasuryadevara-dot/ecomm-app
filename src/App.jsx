import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import "./Components/Styles.css";
// import Product from "./Components/Product";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Products1 from "./Components/Products1";
import Signup from "./Components/Signup";
import Admin from "./Components/Admin";
import User from "./Components/User";

function App() {
  return (
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="products" element={<Product/>} */}
        <Route path="login" element={<Login/>}/>
        <Route path="products" element={<Products1/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="Admin" element={<Admin/>}/>
        <Route path="User" element={<User/>}/>
        <Route path="Signup" element={<Signup/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
