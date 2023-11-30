import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/directory")
.then(() => console.log("Conexion correcta"))
.catch((e) => console.log(e));

