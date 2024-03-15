import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import pkg from "pg";
import bcrypt from "bcrypt";
const { Client } = pkg;
import dotenv from "dotenv";
dotenv.config();
let { PGCONNECTION } = process.env;
const client = new Client({
  connectionString: PGCONNECTION,
});
await client.connect();
const app = express();
const port = 8080;
const saltRounds = 10;
app.use(cors());
app.use(express.json());
app.post("/users/createTable", async (request, response) => {
  const stringif = JSON.stringify(request.body);
  const parsed = JSON.parse(stringif);
  let id = uuidv4();
  const test = "SELECT * FROM users WHERE email LIKE '" + parsed.email + "'";
  const para = await client.query(test);

  if (para.rows[0] === undefined) {
    let dog = await bcrypt.hash(parsed.pass, saltRounds);
    const text =
      "INSERT INTO users(id, name, email, password, currency_type)VALUES($1, $2, $3, $4, $5) RETURNING *";
    const values = [id, parsed.name, parsed.email, dog, "MNT"];
    const res = await client.query(text, values);
    response.status(200);
    response.send(id);
  } else {
    response.status(400);
    response.send("Bad request.");
  }
});
app.post("/users/login", async (request, response) => {
  const stringif = JSON.stringify(request.body);
  const parsed = JSON.parse(stringif);
  const test =
    "SELECT id, password FROM users WHERE email = '" + parsed.email + "'";
  const lolwut = await client.query(test);
  const tester = await bcrypt.compare(parsed.pass, lolwut.rows[0].password);
  if (tester === true) {
    if (lolwut.rows[0] != undefined) {
      response.status(200);
      response.send(lolwut.rows[0].id);
    } else {
      response.sendStatus(400);
    }
  } else {
    response.sendStatus(400);
  }
});
app.patch("/user/updateTable", async (request, response) => {
  const parsed = JSON.parse(request.body);
});
app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
