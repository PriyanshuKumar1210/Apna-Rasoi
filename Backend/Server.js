// create the basic express js server
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoutes.js"
import 'dotenv/config.js'

// app config
const app = express()
// define the port no. where server will be run
const port = 4000

// middleware 
app.use(express.json())
app.use(cors()) //using this we can access backend from frontend

//db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter);


app.get("/",(req,res)=>{
    res.send("API working")
})
//get() is http method using that we can request the data from the server

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})
//it is used to run the express server
//mongodb+srv://apnarasoi:Priyanshu@1210@cluster0.fjbi4.mongodb.net/?