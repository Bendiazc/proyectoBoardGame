import express from "express"
import * as commentControllers from "../controller/commentController.js"
import * as  middleware  from "../config/middlewareJwt.js";

const router = express.Router();

router.post("/boardGame/comment", middleware.middleware,  commentControllers.postComment)
router.get("/boardGame/comment/:gameId", commentControllers.findComment)
router.delete("/boardGame/delete/comment/:idComment", middleware.middleware, commentControllers.EliminateComment)

export {router}