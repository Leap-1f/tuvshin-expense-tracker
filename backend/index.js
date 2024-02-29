import express from "express";
import cors from "cors";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
const app = express();
const port = 8080;
const main = fs.readFileSync("database/accounts.json").toString();
var mainparsed = JSON.parse(main);
app.use(cors());
app.use(express.json());
//below is for onboarding
function settingsChange(data) {
  const stringify = JSON.stringify(data);
  var parsed = JSON.parse(stringify);
  let index = mainparsed.findIndex((el) => el.id === parsed.id);
  console.log(parsed);
  if (parsed.balance === "") {
    mainparsed[index].balance = 0;
  } else {
    mainparsed[index].balance = parseInt(parsed.balance);
  }
  mainparsed[index].currency = parsed.currency.substring(0, 3);
  fs.writeFile("database/accounts.json", JSON.stringify(mainparsed), (err) => {
    if (err) {
      console.log(err);
    }
  });
}
// below is for registration
function verifyData(data) {
  const stringify = JSON.stringify(data);
  const sc = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~][0-9]/g;
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
  mainparsed.push(parsed);
  fs.writeFile("database/accounts.json", JSON.stringify(mainparsed), (err) => {
    if (err) {
      console.log(err);
    }
  });
}
app.get("/", (request, response) => {
  response.status(200);
  response.send("GET successful.");
});
app.post("/user/register", (request, response) => {
  console.log("got");
  let data = request.body;
  data.id = uuidv4();
  console.log();
  if (verifyData(data) === 200) {
    registerAccount(data);
    response.status(200);
    response.json(data.id);
  } else {
    response.status(400);
    response.send("Malformed Data.");
  }
});
app.patch("/user/setting", (request, response) => {
  settingsChange(request.body);
  response.status(200);
  response.send("Congratz");
});
app.get("/user/sign-in", (request, response) => {
  response.status(200);
  response.send("Good");
});
app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
