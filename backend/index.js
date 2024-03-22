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
    response.send("Bad Request.");
  }
});
app.post("/users/login", async (request, response) => {
  const stringif = JSON.stringify(request.body);
  const parsed = JSON.parse(stringif);
  const test =
    "SELECT id, password FROM users WHERE email = '" + parsed.email + "'";
  const lolwut = await client.query(test);
  console.log(lolwut.rows[0]);
  if (lolwut.rows[0] != undefined) {
    const tester = await bcrypt.compare(parsed.pass, lolwut.rows[0].password);
    console.log(tester);
    if (tester === true) {
      if (lolwut.rows[0] != undefined) {
        response.status(200);
        response.send({ id: lolwut.rows[0].id });
      } else {
        console.log("THIRD failed");

        response.sendStatus(400);
      }
    } else {
      console.log("SECOND failed");

      response.sendStatus(400);
    }
  } else {
    console.log("First failed");
    response.status(400);
    response.send("Bad request.");
  }
});
app.patch("/user/updateTable", async (request, response) => {
  const parsed = JSON.parse(request.body);
});
app.post("/users/createTransaction", async (request, response) => {});
app.post("/users/createCategory", async (request, response) => {
  const stringif = JSON.stringify(request.body);
  const parsed = JSON.parse(stringif);
  let id = uuidv4();
  console.log(
    "INSERT INTO category(id, user_id, name)VALUES('" +
      id +
      "','" +
      parsed.uuid +
      "','" +
      parsed.name +
      "')"
  );
  const text = "INSERT INTO category(id, user_id, name)VALUES($1,$2,$3)";
  const values = [id, parsed.uuid, parsed.name];
  console.log(parsed);
  const res = await client.query(text, values);
  response.status(200);
  response.send(id);
});
app.post("/users/getCategories", async (request, response) => {
  const stringif = JSON.stringify(request.body);
  const parsed = JSON.parse(stringif);
  const text = "SELECT * FROM category WHERE user_id = $1";
  const values = [parsed.uuid];
  const res = await client.query(text, values);
  console.log(res.rows);
  response.status(200);
  response.send(res.rows);
});
app.post("/users/getInfo", async (request, response) => {
  const stringif = JSON.stringify(request.body);
  const parsed = JSON.parse(stringif);
  const text = "SELECT balance";
});
app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
