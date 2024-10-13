import express from "express";
import route from "./setup/parentRoute";
import middleware from "./setup/middleware/basics";
import { dbConnection } from "./utils/utils.mongoDb";

const app = express();

async function main() {
  try {
    const db = dbConnection();
    console.log("-------------", db);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

main();

middleware(app);

route(app);

app.listen(1212, () => {
  return console.log(`Express is listening at http://localhost:1212`);
});
