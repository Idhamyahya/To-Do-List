import { createTodos, getAllTodos, getTodosById } from "./models/todoModel.js";

const todos = await getAllTodos();
const todosId = await getTodosById(2);

const create = await createTodos("Hiburan", "Nonton bola");

console.log(todos);
