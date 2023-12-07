import Comments from "../Models/commentModel.js"

const postComment = async (req, res) => {
    try {
        var commentData = req.body;
        var addComment = await Comments.create(commentData)
        res.status(200).json(addComment);
    } catch (e) {
        console.log("Error:" + e)
        res.status(400).json({
            "message": e.menssage
        })
    }
}

const findComment = async (req, res) => {
    var board = req.params.gameId
    var comment = await Comments.find({gameId: board});
    res.status(200).json(comment);
    
}

const EliminateComment = async (req, res) => {
    var id = req.params.idComment;
    await Comments.findByIdAndDelete(id);
    res.status(200).json();
}

export {postComment, EliminateComment, findComment}