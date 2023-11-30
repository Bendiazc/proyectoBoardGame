import express from "express"
import * as userController from "../controller/userController.js"


const router = express.Router();

router.post("/user/register", userController.registerUser);
router.post("/user/login", userController.loginUser);
//router.post("/user/wishlist", userController.addWishlist);

export {router}