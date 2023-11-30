import express from "express"
import * as boardGameController from "../controller/boardController.js"

const router = express.Router();

router.post("/boardGame/add", boardGameController.postBoard);
router.get("/boardGames/list", boardGameController.boardList);
router.get("/boardGame/get/:idBoard", boardGameController.findBoard);
router.delete("/boardGame/delete/:idBoard", boardGameController.eliminateBoard);

export {router}