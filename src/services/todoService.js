import { createTodos, getAllTodos, getTodosById } from "../models/todoModel.js";
const mapTodo = (todo) => ({
  id: todo.id,
  title: todo.title,
  description: todo.description,
  completed: Boolean(todo.completed),
  created_at: todo.created_at,
  updated_at: todo.updated_at,
});

// getTods
export const getTodos_S = async () => {
  const todos = await getAllTodos();

  return todos.map(mapTodo);
};

// byId
export const getTodosById_S = async (id) => {
  const todo = await getTodosById(id);
  if (!todo) {
    const error = new Error("Id tidak ditemukan");

    error.statusCode = 404;

    throw error;
  }
  return mapTodo(todo);
};

// create Todos
export const createTodos_S = async (title, description) => {
  if (typeof title !== "string" || !title.trim()) {
    const err = new Error("Title wajib diisi");
    err.statusCode = 400;
    throw err;
    // console.log("title wajib diisi");
  }
  if (title.trim().length < 3) {
    const err = new Error("title minimal 3 huruf");
    // console.log("minimal 3 huruf");

    err.statusCode = 400;

    throw err;
  }
  const todo = await createTodos(title.trim(), description.trim());
  return mapTodo(todo);
};
