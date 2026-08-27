import { getTodos } from "./services/todoService.js";

const todos = await getTodos();

console.log(todos);
