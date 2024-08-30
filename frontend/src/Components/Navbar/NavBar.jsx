// import React from "react";
import "../Navbar/NavBar.css";
import { assets } from "../../assets/foodassets/frontend_assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

// --------------------------------------------------------

// ------------------------------------------------------------------
const NavBar = ({ setShowLogin }) => {
  const [nav, setNav] = useState("home");
  {
    /* Declare the state */
  }

  const {getTotalCartAmount} = useContext(StoreContext); {/*get total no. of carts from cart.jsx */}
  return (
    <>
      <div className="NavBar">
        <div className="logo">
          
            <img id="app-logo" src={assets.logo} alt="App Logo Is here " />{" "}
          
          {/* App logo is here */}
          <a href="#expolre-menu"> <h3 id="app-name">Apna Rasoi</h3></a>
         
          
        </div>

        {/* When user clicks on the menu-list items(home,menu,...) then it has underlined and change the active state 
    by using react state property  */}
        <ul className="Menu-list">
          <Link 
            to="/"
            onClick={() => setNav("home")}
            className={nav === "home" ? "active" : ""}
          >
            Home
          </Link>

          <a
            href="#expolre-menu"
            onClick={() => setNav("menu")}
            className={nav === "menu" ? "active" : ""}
          >
            {" "}
            Menu
          </a>

          <a
            href="#app-download"
            onClick={() => setNav("mobile-app")}
            className={nav === "mobile-app" ? "active" : ""}
          >
            Mobile-App
          </a>

          <a
            href="#footer"
            onClick={() => setNav("contact")}
            className={nav === "contact" ? "active" : ""}
          >
            Contact Us
          </a>
        </ul>

        <div className="navbar-right">
          <img id="search" src={assets.search_icon} alt="Search Here"></img>

          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
              <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </Link>
          </div>

          <button
            id="submit_button"
            type="button"
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
