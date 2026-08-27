import express from "express";
import {
  getAllTodos_C,
  getTodosByid_C,
} from "../controllers/todoController.js";

export const router = express.Router();

router.get("/api/todos", getAllTodos_C);
router.get("/api/todos/:id", getTodosByid_C);
