import { sql } from "../../config/database.js";

export const getAllUsers = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    res.status(200);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const postData = async (request, response) => {
  try {
    response.status(200);
    response.send(id);
  } catch (err) {
    console.log(err);
  }
};
