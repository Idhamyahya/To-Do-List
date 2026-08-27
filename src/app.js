import express from "express";
import { router } from "./routes/todoRoutes.js";
import { erroHandler } from "./middleware/erroHandle.js";
export const app = express();

app.use(express.json());

app.use("/", router);

app.use(erroHandler);
