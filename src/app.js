import express from "express";
import { router } from "./routes/todoRoutes.js";
import { erroHandler } from "./middleware/erroHandle.js";

const app = express();

app.use(express.json());

app.use("/", router);

app.use(erroHandler);

export default app;
