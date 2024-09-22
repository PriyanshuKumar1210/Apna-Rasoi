import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
import { useContext } from "react";
// import PropTypes from 'prop-types'

const FoodDisplay = ({ category }) => {
  //  getting an foodlist array using the context api

  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {/* to display multiple food items */}
        {food_list.map((item, index) => {

            // use to short product as our category
            if(category==="All" || category===item.category){
          return (
            <FoodItem
              key={index}
              id={item['_id']}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
           // We mount the fooditem in the food Display
            }   
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;