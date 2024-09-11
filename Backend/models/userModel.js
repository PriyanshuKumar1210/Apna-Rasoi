import mongoose from 'mongoose';


//define the schema
const userSchema = new mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}},
    
},{minimize:false})
// by using {minimize:false} cart data created without any data

//used or create the model
const userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;