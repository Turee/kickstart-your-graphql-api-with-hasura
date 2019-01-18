import { Context } from "koa";
const _ = require("lodash");

const userHeaders = {
  "x-hasura-allowed-roles": "roles",
  "x-hasura-user-id": "userId"
};

export default (ctx: Context) => {
  const user = _.reduce(
    _.keys(userHeaders),
    (acc, k) => _.set(acc, userHeaders[k], ctx.request.get(k)),
    {}
  );
  return {
    user
  };
};
