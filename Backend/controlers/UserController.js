import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import validator from "validator"


//login user func()

const loginUser = async(req,res) => {
    const {email,password} = req.body; //Requesting email & password from body(users)

    try{
// if any a/c is available then users a/c will store {store} constant        
            const user = await userModel.findOne({email}); 

//checking users is available with that email or not
            if(!user){
                return res.json({success : false,message : "Users doesn't exists "})
            }
//checked that enter password is matched or not
            const isMatch = await bcrypt.compare(password,user.password);

//if password is false
            if(!isMatch){
               return res.json({success : false,message:"Invalid Password"});
            }
//if password is true then it create the token & send this token as response

              const token =createToken(user._id);
                res.json({success:true,token})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"error"});
    }

}

// create token 
const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user func()

const registerUser = async(req,res) =>{

    const {name,password,email} = req.body;

    try{

        // checking is user already exists
        const existsMail = await userModel.findOne({email});

        if(existsMail){
            return res.json({success:false,message:"user already exists"});
        }
        //valdating email foramt & strong password

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"invalid email"});
        }

        if(password.length<8){
            return res.json({success:false,message:"password should be at least 8 characters"});
        }
        //hashing(encrypt) password

        const salt = await bcrypt.genSalt(10)
        //range b/w 5 to 15 where 15 is highly encryption & 10 is medium level encypted password
        const hashedPassword = await bcrypt.hash(password,salt);


        const newUser = new userModel({
        // define the name,email,password in the empty object which is present
        // in userSchema in userModel.js
            name:name,
            email:email,
            password:hashedPassword
        })

// save the user in the database
            const user = await newUser.save()
            const token = createToken(user._id);
            res.json({success:true,token});

    }

    catch (error) {
       console.log(error);
       res.json({success:false,message:"Error"})
    }
    

}

export {loginUser,registerUser};