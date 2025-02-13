// import React from "react";
import "../Navbar/NavBar.css";
import { assets } from "../../assets/foodassets/frontend_assets/assets";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

// --------------------------------------------------------

// ------------------------------------------------------------------
const NavBar = ({ setShowLogin }) => {
  const [nav, setNav] = useState("home");
  {
    /* Declare the state */
  }

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext); {/*get total no. of carts from cart.jsx */}

  const navigate = useNavigate();
  const logout = () =>{
      localStorage.removeItem("token");
      setToken();
      navigate("/");
  }
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

{/* When user logged in then show the login iconon the navbar.It doesn't show the  sigin button*

      --- we performed it by using token*/}

      {!token?<button
            id="submit_button"
            type="button"
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>
        :<div className="navbar-profile">
              <img src={assets.profile_icon} alt=""/>
              <ul className="nav-profile-dropdown">
                <li> <img id="dropdown-img" src={assets.bag_icon} alt=""/> <p>Orders</p></li>
                <hr />
                <li onClick={logout}> <img  id="dropdown-img" src={assets.logout_icon} alt=""/> <p>Logout</p></li>
                
              </ul> 
          </div>
      }

{/* --- end of token ---  */}

        </div>
      </div>
    </>
  );
};

export default NavBar;
