import { getTodos } from "../services/todoService.js";

export const getAllTodos_C = async (req, res, next) => {
  try {
    const todos = await getTodos();
    res.status(200).json({
      message: true,
      data: todos,
    });
  } catch (err) {
    next(err);
  }
};
