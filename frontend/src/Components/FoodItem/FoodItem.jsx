//  Here we will get the image,price,id or description of food as a props

import { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/foodassets/frontend_assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

      // const [itemCount,setItemCount] = useState(0); //intiliazie all food card with 0

      //  it create the seperate state vartiaable for each product & that's not a good programming practices
      // to overcome from this problem we will create a cart object in our context
  
      const { cartItems, addToCart, removeFromCart ,url } = useContext(StoreContext);
     
      return (
    <div className="food-item">

      <div className="food-item-img-container">
        <img className="food-item-img" src={url+"/images/"+image} alt="some food items are here" />

{/* code to write food item into the cart  */}

 {/* When user click on first timethen + icon then it count+1 of the food item at first time after that the {assets.add_icon_green} or {assets.add_icon_red} is 
      responsible to add or remove the food item 
 */}
        {!cartItems[id]
            ?<img className='add' onClick={() => addToCart(id) } src={assets.add_icon_white} alt="" />
          
                :<div className='food-item-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
          {/* When user click on the red(-) icon then it count-1 of the food item*/}

                  <p>{cartItems[id]}</p>
                  <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />

           {/* When user click on the green(+) icon then it count+1 of the food item*/}

                </div>
        }

{/*end of code to which is used to write food item into the cart  */}
      </div>

      <div className="food-item-info">

        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>

            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">₹{price}</p>
         
      </div>
    </div>
  );
};

export default FoodItem;