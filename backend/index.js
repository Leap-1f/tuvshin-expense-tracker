import express from "express";
import cors from "cors";
import { sql } from "./config/database.js";
import { v4 as uuidv4 } from "uuid";
import { users } from "./src/router/user.js";
app.use("/users", users);
const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());
app.get("/users", async (request, response) => {
  const data = await sql`SELECT * FROM users`;
  console.log(data);
  response.status(400);
  response.send(data);
});
app.patch("/user/updateTable", async (request, response) => {
  const parsed = JSON.parse(request.body);
  const post =
    (await sql`UPDATE users SET currency_type = '`) +
    parsed.currency +
    "', balance = '" +
    parsed.balance +
    "'WHERE id = '" +
    response.id +
    "';";
});
app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
