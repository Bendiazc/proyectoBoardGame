import express from "express"
import * as commentControllers from "../controller/commentController.js"

const router = express.Router();

router.post("/boardGame/comment", commentControllers.postComment)
router.get("/boardGame/comment/:idcomment", commentControllers.findComment)
router.delete("/boardGame/delete/comment/:idcomment", commentControllers.EliminateComment)

export {router}