import userModel from "../models/userModel.js";

// add items to user cart

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId );
    // extract the cart Data
    let cartData = await userData.cartData;
    // user have add To cart Functionality then they will send the token & with the item id
    // if cart is not available
    if (!cartData[req.body.itemId]) {
      //if there is no entry with item id then create the itemID
      cartData[req.body.itemId] = 1
    } else {
      cartData[req.body.itemId] += 1
    }
    //update the users cart with new cart data
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({success:true,message:"Data added to cart"});

  } catch (error) {

        console.log(error);
        res.json({success:false,message:"Data can't added to cart"})
  }
};

// remove items from user cart

const removeFromCart = async (req, res) => {

    try{
        let userData = await userModel.findById(req.body.userId);
//extract the data 
        let cartData = await userData.cartData;

        if(cartData[req.body.itemId]>0){
              cartData[req.body.itemId] -= 1;
        }
// update new cart data
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Item removed from cart"})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Item can't removed from cart"});
    }
};

// fetch user cart Data

const getCart = async (req, res) => {
  try{
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({success:true,cartData})
  }
  catch(error){
    console.log(error);
    res.json({success:false,message:"Cart data can't fetch"})
  }
};

export { addToCart, removeFromCart, getCart };
