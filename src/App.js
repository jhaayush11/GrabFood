import "./App.css";
import Home from "./screen/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/About";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./screen/MyOrder";
import Login_SignUp from "./screen/Login_SignUp";
//import Cart from "./screen/Cart";
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            {/* <Route exact path="/about" element={<About />} /> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login_SignUp />} />
            <Route exact path="/myOrderData" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
export default App;
