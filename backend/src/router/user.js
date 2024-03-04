import { Router } from "express";
import { getAllUsers, postData } from "../controller/user.js";
const user = Router();
user.route("/").get(getAllUsers);
user.route("/updateTable").post(postData);
export { user };
