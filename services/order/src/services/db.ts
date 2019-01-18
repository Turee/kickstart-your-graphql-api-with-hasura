import config from "../config";

export default require("knex")({
  client: "pg",
  connection: config.DATABASE_URL,
  searchPath: ["public"]
});
