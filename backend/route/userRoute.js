import express from "express"
import * as userController from "../controller/userController.js"


const router = express.Router();

router.post("/user/register", userController.registerUser);
router.post("/user/login", userController.loginUser);

export {router}