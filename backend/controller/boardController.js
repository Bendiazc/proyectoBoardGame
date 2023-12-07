import BoardGames from "../Models/boardModel.js"

/*const postBoard = async (req, res) => {
    try {
        var boardData = req.body;
        var addBoard = await BoardGames.create(boardData)
        res.status(200).json(addBoard);
    } catch (e) {
        console.log("Error:" + e)
        res.status(400).json({
            "message": e.menssage
        })
    }
};*/

const boardList = async (req, res) =>{
    var listBoard = await BoardGames.find()
    res.json(listBoard);
};

const findBoard = async (req, res) => {
    var id = await  req.params.gameId;
    //var oneBoard = await BoardGames.findById(id);
    //res.json(oneBoard);
    res.json(id)
    
    
};

/*const eliminateBoard = async (req, res) => {
    var id = req.params.gameId;
    await BoardGames.findByIdAndDelete(id);
    res.status(200).json();
};*/

export {/*postBoard,*/ boardList, findBoard /*, eliminateBoard*/}