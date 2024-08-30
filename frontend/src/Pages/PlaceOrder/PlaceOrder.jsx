// import React from 'react'
import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const gstAmount = (getTotalCartAmount() * 18) / 100;
  const deliveryAmount = getTotalCartAmount() === 0 ? 0 : 40;
  const discount = getTotalCartAmount() >= 300 ? 40 : 0;

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery options</p>

        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>

        <input type="phone" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount() + gstAmount}</p>{" "}
            {/* adding the total amount of food */}
          </div>

          <hr />

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{deliveryAmount}</p> {/* Delivery amount is fixed  */}
          </div>

          <hr />
          {/* <div className="cart-total-details">
            <p>GST</p>
            <p>₹{gstAmount}</p>
          </div> */}

          <div className="cart-total-details">
            <p>Discount Amount</p>
            <p>-₹{discount}</p> {/* Delivery amount is fixed  */}
          </div>

          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>₹{getTotalCartAmount() + deliveryAmount + gstAmount - discount}</b>
            {/* Finding the total amount which includes the delivery amount & also a gst tax */}
          </div>

          <button onClick={() => navigate("/order")}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
