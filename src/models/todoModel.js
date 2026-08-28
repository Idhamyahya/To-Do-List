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

export const createTodos = async (title, description) => {
  const result = await db.run(
    `  
    INSERT INTO todos
    (title,description)
    VALUES(?, ?)
    `,
    [title, description],
  );
  return await getTodosById(result.lastID);
};

export const updateTodos = async (id, title, description) => {
  await db.run(
    `
    UPDATE todos
    SET 
      title = ?,
      description = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
    `,
    [title, description, id],
  );
  return await getTodosById(id);
};

export const deletTodo = async (id) => {
  const result = await db.run(
    `
  DELETE FROM todos
  WHERE id = ?
  `,
    [id],
  );

  return result.changes;
};
