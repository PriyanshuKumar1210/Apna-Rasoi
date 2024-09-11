//in this file create the logic  using that we connect with the database
import mongoose from "mongoose";
export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://apnarasoi:Priyanshu1210@cluster0.fjbi4.mongodb.net/apnarasoi').then(()=>console.log("DB conneted"));
}
