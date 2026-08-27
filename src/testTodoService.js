import { getAllTodos_C } from "./controllers/todoController.js";
import { getTodos, getTodosById_S } from "./services/todoService.js";

const todos = await getTodos();
const todosId = await getTodosById_S(2);

console.log(todosId);
