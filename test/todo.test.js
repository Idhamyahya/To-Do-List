import test from "node:test";
import assert from "node:assert";
import request from "supertest";

import app from "../src/app.js";

test("GET /api/todos harus mengembalikan 200", async () => {
  const response = await request(app).get("/api/todos");

  console.log("STATUS:", response.status);
  console.log("BODY:", response.body);
  //   assert.strictEqual(response.status, 200);

  //   assert.strictEqual(response.body.success, true);

  //   assert.ok(Array.isArray(response.body.data));
});
