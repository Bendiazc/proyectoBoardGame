import express from 'express';
import cors from "cors";
import * as boardRoutes from "./route/boardRoutes.js";
import * as commentRoute from "./route/commentRoute.js";
import * as userRoute from "./route/userRoute.js";

import "./config/mongodb.js";

const app = express();
app.use(cors());


app.use(express.json());

app.use(commentRoute.router);
app.use(boardRoutes.router);
app.use(userRoute.router);

app.listen(8080)