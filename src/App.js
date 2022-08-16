
import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Cart from "./pages/card/Card";
import Productdetails from "./pages/Detail/Productdetail";
import Favorite from "./pages/Favorite/Favorite";
import Navbar from "./component/Navbar/Navbar";
import Login from "./component/Login/Login";
import Product from './pages/Products/Product';
import "./App.css";
import { useSelector } from "react-redux";
import Footer from './component/Footer/Footer'

function App() {
  const state = useSelector((state) => state)
  console.log(state, 'state');

  return (
    <div className="App">
      {state?.isAuthenticaticon ?
        <>
          <Navbar />


          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorite />} />
            {/* <Route path="/Products" element={<Product />}></Route> */}
            {/* <Route path='login' element={<Login></Login>} /> */}
            <Route path="/products/:id" element={<Productdetails />} />
          </Routes>
          <Footer />
        </>
        :
        <Routes>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="*" element={<Navigate to={'login'}></Navigate>}></Route>
        </Routes>}
      {/* <Product /> */}


    </div>
  );
}

export default App;

