import {
  createTodos,
  getAllTodos,
  getTodosById,
  updateTodos,
} from "./models/todoModel.js";

// const todos = await getAllTodos();
// const todosId = await getTodosById(2);

// const create = await createTodos("Hiburan", "Nonton bola");

const update = await updateTodos(99, "Belajar Express", "Belajar REST API");

console.log(update);
