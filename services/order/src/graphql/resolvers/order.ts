import db from "../../services/db";

const createOrder = async (obj, args, context, info) => {
  const { user } = context;
  const { order } = args;
  const [orderId] = await db
    .table("order")
    .insert({ pizza: order, status: "NEW", user_id: user.userId }, "id");
  return orderId;
};

export default {
  Mutation: {
    createOrder
  },
  Query: {}
};
