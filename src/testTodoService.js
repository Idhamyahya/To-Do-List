import {
  createTodos_S,
  deleteTodos_S,
  getTodos_S,
  getTodosById_S,
  updateTodos_S,
} from "./services/todoService.js";

// const todos = await getTodos_S();
// const todosId = await getTodosById_S(2);
// const create = await createTodos_S("L", "TIDUR ");
// const update = await updateTodos_S(
//   1,
//   "Belajar JavaScript",
//   "Belajar async await",
// );
const remove = await deleteTodos_S(2);

console.log(remove);
