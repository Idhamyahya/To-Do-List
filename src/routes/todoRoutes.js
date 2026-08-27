import express from "express";
import { getAllTodos_C } from "../controllers/todoController.js";

export const router = express.Router();

router.get("/", getAllTodos_C);
