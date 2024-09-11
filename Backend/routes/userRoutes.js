import express from "express";
import { loginUser , registerUser } from "../controlers/UserController.js";

// cerating a router using express router

const userRouter =express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

export default userRouter;
