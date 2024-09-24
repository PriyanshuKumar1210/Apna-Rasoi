import { useContext, useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/foodassets/frontend_assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";


const LoginPopUp = ({ setShowLogin }) => {
//fetch the url using the context api
  const {url,setToken} = useContext(StoreContext);//use this url for the login component

  const [currState, setCurrState] = useState("Login");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  // onChangeHander take the data from the input & save it into the state variable data

  const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name]:value}))
  }
//creating the login()for user login
//create the login & register api

  const onLogin = async (event) => {
    
      //link the func() from the form tag
      event.preventDefault();
      let newUrl = url;
      if(currState === "Login"){
        newUrl = newUrl + "/api/user/login";
      }
      else{
        newUrl += "/api/user/register"
      }
      const response = await axios.post(newUrl,data);
      if(response.data.success){
          setToken(response.data.token);
//save the token to the local storage
          localStorage.setItem("token",response.data.token);
          setShowLogin(false);
      }
      else{
        alert(response.data.message);
      }
  }
 
  return (
    <div className="login-popup">

      <form onSubmit={onLogin} action="" className="login-popup-container">

        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="User name" required />
          )}

          <input name="email" onChange={onChangeHandler}  value={data.email} type="email" placeholder="Your Email" required/>
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required/>
        
          
        </div>

        <button type="submit">{currState === "Sign Up" ? "Create Account " : "Login"}</button>

        <div className="login-popup-condition">
          
          <input type="checkbox" required />
          <p>By continuing , I agree to the terms of use & privacy policy</p>

        </div>

        {currState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}

      </form>

    </div>

  );
};

export default LoginPopUp;
