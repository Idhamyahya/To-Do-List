import express from "express";
import { router } from "./routes/todoRoutes.js";
export const app = express();

app.use(express.json());

app.use("/api/todos", router);
