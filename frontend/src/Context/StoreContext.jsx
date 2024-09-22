import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/foodassets/frontend_assets/assets";
import axios from 'axios';
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [cartItems,setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token,setToken] = useState("");
  const [food_list,setFoodList] = useState([]);
 
  const addToCart = (itemId) => {

    // we will check if the user adding the product in first time cart
    if(!cartItems[itemId]){
        setCartItems((prev)=> ({...prev,[itemId]:1}))
    }

     else{
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
     }      
  }

  const removeFromCart = (itemId)=>{
    setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
  }


  const getTotalCartAmount = () => {
    let totalAmount = 0;
  
    // Assuming cartItems is an object where keys are item IDs

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
// Convert item (which is a key) to the correct type if necessary
          let itemInfo = food_list.find((product) => product['_id'] === item);
          totalAmount += itemInfo.price * cartItems[item];
        
      }
    }
    return totalAmount;
  };
  
// fetched the food items list fron the food database

  const fetchFoodList = async() => {

        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
        console.log(response);
  }

  useEffect(()=>{
        async function loadData(){
        await fetchFoodList();
        if(localStorage.getItem("token")){
          setToken(localStorage.getItem("token"))
        }
      }
        loadData();
  },[])
  
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {/* {check to confirm} StoreContext.Provider treated as childcomponent of browser route rendering component which is in main.jsx  */}
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider; // export the provider so it can be used in other files
