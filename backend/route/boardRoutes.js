import express from "express"
import * as boardGameController from "../controller/boardController.js"
import * as  middleware  from "../config/middlewareJwt.js";

const router = express.Router();

//router.post("/boardGame/add", middleware.middleware, boardGameController.postBoard);
router.get("/boardGames/list", boardGameController.boardList);
router.get("/boardGame/get/:gameId", boardGameController.findBoard);
//router.delete("/boardGame/delete/:gameId", middleware.middleware, boardGameController.eliminateBoard);

export {router}