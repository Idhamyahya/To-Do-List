import express from "express";
import {
  createTodos_C,
  getAllTodos_C,
  getTodosByid_C,
  updateTodos_C,
} from "../controllers/todoController.js";

export const router = express.Router();

router.get("/api/todos", getAllTodos_C);
router.get("/api/todos/:id", getTodosByid_C);
router.post("/api/todos", createTodos_C);
router.put("/api/todos/:id", updateTodos_C);
