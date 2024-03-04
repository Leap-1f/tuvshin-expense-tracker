import { sql } from "../../config/database";
export const getAllUsers = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const postData = async (request, response) => {
  const stringif = JSON.stringify(request.body);
  const parsed = JSON.parse(stringif);
  let id = uuidv4();
  const data =
    (await sql`INSERT INTO users(uuid, name, email, password, createdAt)VALUES('`) +
    id +
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
};
