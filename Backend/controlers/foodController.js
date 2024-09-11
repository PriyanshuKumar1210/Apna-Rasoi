import foodModel from "../models/foodModel.js";
import fs from 'fs'; 

//it is a file system which is pre built in node js

//add food item

const addFood = async(req,res)=>{

  //logic to add the data to store in the database
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename
    })

    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }
    catch(error)
    {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//alll food list in the database
const listFood = async(req,res) =>{

    try{
        const foods = await foodModel.find({})
        // using this model we can fetch all the food items for that we'll add find and in this method
        // we'll simply add one empty object/variable
       res.json({success:true,data:foods})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

//remove food item

const removeFood = async(req,res) => {
    try{
        const food = await foodModel.findById(req.body.id);
    // delete this image from upload folder via using above id
        fs.unlink(`uploads/${food.image}`,()=>{});

        await foodModel.findByIdAndDelete(req.body.id);
    // delete this image/data from mongoDB database via using above id
        res.json({success:true,message:"Food Removed"});
        
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}


export {addFood,listFood,removeFood}