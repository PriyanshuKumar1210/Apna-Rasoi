import express from "express"
import { addFood,listFood,removeFood} from "../controlers/foodController.js"
import multer from "multer" //using that we'll create the image storage system


// create the router
const foodRouter = express.Router(); 
// using this router we can create the the method like : post,get and many other

//create the logic to save the image to image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`) //creating the file unique name
    }
})

const upload = multer({storage:storage}) //middleware(using this we can store the image in the upload folder)
 
// create the post request & adding middleware to route

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/removeFood",removeFood)

export default foodRouter;
