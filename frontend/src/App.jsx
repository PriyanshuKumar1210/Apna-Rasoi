// import React from 'react'
import NavBar from "./Components/Navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Cart from "../src/Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import LoginPopUp from "./Components/LoginPopUP/LoginPopUp";

const App = () => {

    const [showLogin,setShowLogin] = useState(false); //used the state variable to display the login popup
  return (
    <>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> :<></>}
      <div>
        <NavBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceOrder />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
