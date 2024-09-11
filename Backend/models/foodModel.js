// using that we cant store the products in the database
// so we will store the products in the local storage
// and we will get the products from the local storage
import mongoose from "mongoose";

// create the schema where we will describe the food model properties
const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
})

//creating the model
const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);
export default foodModel;