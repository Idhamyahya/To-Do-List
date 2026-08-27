import { getTodos_S, getTodosById_S } from "../services/todoService.js";

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
