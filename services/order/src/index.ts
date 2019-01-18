import { graphqlKoa } from "apollo-server-koa/dist/koaApollo";
require("dotenv").config();
import config from "./config";
import KoaRouter from "koa-router";
import schema from "./graphql/schema";
import makeContext from "./graphql/context";
const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");

app.use(bodyParser());

const router = new KoaRouter();
const gqlHandler = (ctx, next) =>
  graphqlKoa({ schema, context: makeContext(ctx) })(ctx, next);
router.post("/graphql", gqlHandler);
router.get("/graphql", gqlHandler);
app.use(router.routes());

app.listen(config.PORT, err => {
  if (err) {
    console.error("Could not start listening on port", config.PORT, err);
  } else {
    console.log("Listening on port", config.PORT);
  }
});
