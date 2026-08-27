import db from "./config/database.js";

await db.run(
  `
  INSERT INTO todos (title, description)
  VALUES (?, ?)
  `,
  ["Belajar Node.js", "Belajar dasar Node.js"],
);

console.log("Data berhasil ditambahkan");
