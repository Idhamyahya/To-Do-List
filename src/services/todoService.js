import { getAllTodos, getTodosById } from "../models/todoModel.js";
export const getTodos_S = async () => {
  const todos = await getAllTodos();
  return todos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    description: todo.description,
    completed: Boolean(todo.completed),
    created_at: todo.created_at,
    updated_at: todo.updated_at,
  }));
};

export const getTodosById_S = async (id) => {
  const todo = await getTodosById(id);
  if (!todo) {
    const error = new Error("Id tidak ditemukan");

    error.statusCode = 404;

    throw error;
  }
  return {
    id: todo.id,
    title: todo.title,
    description: todo.description,
    completed: Boolean(todo.completed),
    created_at: todo.created_at,
    updated_at: todo.updated_at,
  };
};
