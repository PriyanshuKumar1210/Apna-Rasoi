import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "../Cart/Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const gstAmount =   (getTotalCartAmount()*18)/100;
  // const delieveryAmount = getTotalCartAmount()===0?0:40;
  

  const navigate = useNavigate(); // we navigate from cart page to order page

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />


        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={index}>

                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>₹{item.price * cartItems[item.id]}</p> {/*it find the total food amount */}
                  <p className="cross" onClick={() => removeFromCart(item.id)}>
                    x
                  </p>

                </div>

                <hr />
              </div>
            );
          }
        })}

      </div>

        <div className="cart-bottom">

          <div className="cart-total">
            <h2>Cart Totals</h2>

            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p> {/* adding the total amount of food */}
            </div>

            {/* <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{delieveryAmount}</p> {/* Delivery amount is fixed  */}
            {/* </div> */} 
           <hr />
            <div className="cart-total-details">
            <p>GST</p>
            <p>₹{gstAmount}</p>
            </div>
            <hr />
 
            <div className="cart-total-details">
            <b>Total</b>
            <b>₹{getTotalCartAmount()+gstAmount}</b>  {/* Finding the total amount which includes the delivery amount & also a gst tax */}
             </div> 

            <button onClick={() => navigate('/order') }>PROCEED TO CHECKOUT</button>
          </div>

          <div className="cart-promocode">

            <p>If you have a promo code,Enter it here</p>

            <div className="cart-promocode-input">
              <input type="text" placeholder="Promocode"/>
              <button>Submit</button>
            </div>
          </div>
          
        </div>
    </div>
  );
};

export default Cart;