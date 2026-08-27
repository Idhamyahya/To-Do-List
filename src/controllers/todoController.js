import { getTodosById, updateTodos } from "../models/todoModel.js";
import {
  createTodos_S,
  getTodos_S,
  getTodosById_S,
  updateTodos_S,
} from "../services/todoService.js";

export const getAllTodos_C = async (req, res, next) => {
  try {
    const todos = await getTodos_S();
    res.status(200).json({
      message: true,
      data: todos,
    });
  } catch (err) {
    next(err);
  }
};

export const getTodosByid_C = async (req, res, next) => {
  try {
    const todos = await getTodosById_S(req.params.id);
    res.status(200).json({
      succes: true,
      data: todos,
    });
  } catch (error) {
    next(error);
  }
};

export const createTodos_C = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const todo = await createTodos_S(title, description);
    res.status(200).json({
      succes: true,
      data: todo,
    });
  } catch (err) {
    next(err);
  }
};

// update
export const updateTodos_C = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { title, description } = req.body;
    const todo = await updateTodos_S(id, title, description);
    res.status(200).json({
      succes: true,
      data: todo,
    });
  } catch (err) {
    next(err);
  }
};
