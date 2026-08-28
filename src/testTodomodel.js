import {
  createTodos,
  deletTodo,
  getAllTodos,
  getTodosById,
  updateTodos,
} from "./models/todoModel.js";

// const todos = await getAllTodos();
// console.log(todos);
// const todosId = await getTodosById(2);

// const create = await createTodos("Hiburan", "Nonton bola");

const changes = await deletTodo(99);
console.log(changes);
