import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { sql } from "./config/database.js";
import { users } from "./src/router/user.js";
const app = express();
const port = 8080;
app.use("/users", users);
app.use(cors());
app.use(express.json());
app.post("/users/createTable", async (request, response) => {
  const stringif = JSON.stringify(request.body);
  const parsed = JSON.parse(stringif);
  let id = uuidv4();
  console.log(
    "INSERT INTO users(uuid, name, email, password, createdAt)VALUES" +
      `('` +
      id +
      "','" +
      parsed.name +
      "','" +
      parsed.email +
      "','" +
      parsed.pass +
      "','" +
      parsed.createdAt +
      "')"
  );

  (await sql`INSERT INTO users(uuid, name, email, password, createdAt)VALUES('`) +
    parsed.id +
    "','" +
    parsed.name +
    "','" +
    parsed.email +
    "','" +
    parsed.pass +
    "','" +
    parsed.createdAt +
    "')";
  response.status(200);
  response.send(id);
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
