import { getAllTodos } from "../models/todoModel.js";
export const getTodos = async () => {
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
