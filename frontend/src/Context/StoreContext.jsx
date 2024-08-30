import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/foodassets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [cartItems,setCartItems] = useState({});

  const addToCart = (itemId)=>{
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

useEffect(()=>{
  console.log(cartItems);
},[cartItems])

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    
    for(const item in cartItems){

        if(cartItems[item]>0){

          let itemInfo = food_list.find((product) => product.id == item)
          totalAmount += itemInfo.price*cartItems[item];
        }  
    }
      return totalAmount;
  }

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {/* {check to confirm} StoreContext.Provider treated as childcomponent of browser route rendering component which is in main.jsx  */}
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider; // export the provider so it can be used in other files
