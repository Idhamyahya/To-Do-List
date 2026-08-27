import db from "../config/database.js";
export const getAllTodos = async () => {
  return await db.all(`
        SELECT *
        From todos
        ORDER BY id DESC
        `);
};
