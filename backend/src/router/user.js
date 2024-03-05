import { Router } from "express";
import { getAllUsers, postData } from "../controller/user.js";
const users = Router();
users.route("/").get(getAllUsers);
export { users };
