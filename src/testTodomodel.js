import { getAllTodos } from "./models/todoModel.js";

const todos = await getAllTodos();

console.log(todos);
