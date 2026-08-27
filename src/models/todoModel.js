import db from "../config/database.js";
export const getAllTodos = async () => {
  return await db.all(`
        SELECT *
        From todos
        ORDER BY id DESC
        `);
};

export const getTodosById = async (id) => {
  return db.get(
    `   SELECT *
        FROM todos
        WHERE id = ?
    `,
    [id],
  );
};
