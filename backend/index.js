import express from "express";
import cors from "cors";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
const app = express();
const port = 8080;
app.use(cors());
const main = JSON.parse(fs.readFileSync("database/accounts.json"));
const mainstringed = JSON.stringify(main);
const mainparsed = JSON.parse(mainstringed);
console.log(mainparsed);
function verifyData(data) {
  const stringify = JSON.stringify(data);
  const parsed = JSON.parse(stringify);
  if (parsed.name != "" || parsed.email != "" || parsed.pass != "") {
    let name = parsed.name;
    let email = parsed.email;
    let password = parsed.pass;
    let cpassword = parsed.cpass;
    if (sc.test(name) === true || name === "" || name.length < 3) {
      return "name invalid";
    } else if (email === "" || email.endsWith("@gmail.com") != true) {
      return "mail invalid";
    } else if (password.length < 8) {
      return "pass invalid";
    } else if (password != cpassword) {
      return "confirm pass invalid";
    } else {
      return 200;
    }
  } else {
    return "Invalid";
  }
}
function registerAccount(data) {
  const stringify = JSON.stringify(data);
  var parsed = JSON.parse(stringify);
  fs.appendFileSync("database/accounts.json", parsed);
}
app.get("/", (request, response) => {
  response.status(200);
  response.send("GET successful.");
});
app.post("/user/register", (request, response) => {
  console.log("got");
  let data = request.body;
  console.log(data);
  data.id = uuidv4();
  if (verifyData(data) === 200) {
    registerAccount(data);
    response.status(200);
    response.send("Successfully Registered");
  } else {
    response.status(400);
    response.send("Malformed Data.");
  }
});
app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
