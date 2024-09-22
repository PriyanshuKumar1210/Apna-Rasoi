import express from "express";
import { loginUser , registerUser } from "../controlers/UserController.js";

// cerating a router using express router

const userRouter =express.Router();

userRouter.post("/register",registerUser) //define the register api
userRouter.post("/login",loginUser) // define login api

export default userRouter;
