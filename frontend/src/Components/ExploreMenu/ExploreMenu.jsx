// import React from 'react'
import "./ExploreMenu.css";
import { menu_list } from "../../assets/foodassets/frontend_assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  //passing props frome Home.jsx
  return (
    <div className="explore-menu" id="expolre-menu" >
       <h1>Explore Our Menu</h1>
     <p className="explore-menu-text">
       Choose from a diverse menu featuring a delectable array of dishes
       crafted with the finest ingredients and culinary.Our mission to satisfy
       your cravings and elevate your dining experience, one delicious meal at
        a time.
   </p>

    <div className='explore-menu-list' >
    {menu_list.map((item,index) => {
      return(
        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>

            {/* prevState is a name that you have given to the argument passed to setState callback function. which is used to change the state
            (prev)What it holds is the value of state before the setState was triggered by React; Since setState does batching, its sometimes important to know what the previous state was when you want to update the new state based on the previous state value. */}
            <img className={category===item.menu_name?"active":""} src={item.menu_image}/> {/* declare the dynamic class here */}
            <p>{item.menu_name}</p>
        </div>
      )
    })}
    </div>
    <hr></hr>
    </div>
  )
}

export default ExploreMenu



