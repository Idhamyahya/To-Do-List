import db from "./config/database.js";

await db.run(
  `
  INSERT INTO todos (title, description)
  VALUES (?, ?)
  `,
  ["Makan", "Basooooooo"],
);

console.log("Data berhasil ditambahkan");
