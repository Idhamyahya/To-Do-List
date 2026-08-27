import { getAllTodos, getTodosById } from "./models/todoModel.js";

const todos = await getAllTodos();
const todosId = await getTodosById(2);

console.log(todosId);
