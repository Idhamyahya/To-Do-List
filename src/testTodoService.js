import {
  createTodos_S,
  getTodos_S,
  getTodosById_S,
} from "./services/todoService.js";

// const todos = await getTodos_S();
// const todosId = await getTodosById_S(2);
const create = await createTodos_S("L", "TIDUR ");

console.log(create);
