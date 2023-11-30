import User from "../Models/userModel.js";
//import BoardGames from "../Models/boardModel.js";

const registerUser = async (req, res) => {
    try {
        var userData = req.body;
        var result = await User.create (userData);
        res.status(200).json(result);
    } catch (e) {
        res.status(400).json({
            "message": e.message
        })
    }
}

const loginUser = async (req, res) => {
    var result = await User.findOne({email:req.body.email, password: req.body.password })
    if(result != null){
    res.status(200).json(true);
    } else{
        res.status(200).json(false);
    }
}

/*const addWishlist = async (req, res) => {
    try {
        const { userId, boardGameId } = req.body;
        const user = await User.findById(userId);
        const boardGame = await BoardGames.findById(boardGameId);

        if (!user || !boardGame) {
            return res.status(404).json({ message: 'Usuario o juego no encontrado.' });
        }
        user.favorites.push(boardGame);
        await user.save();

        res.status(200).json({ message: 'Juego agregado a favoritos exitosamente.' });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};*/


export {registerUser, loginUser, /*addWishlist*/ }