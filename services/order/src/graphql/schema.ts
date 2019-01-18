const gql = require("graphql-tag");
import { makeExecutableSchema } from "graphql-tools";
import order from "./resolvers/order";
import JSONType from "graphql-type-json";

const typeDefs = gql`
  scalar JSON

  input ToppingInput {
    name: String!
    id: String!
  }

  input PizzaInput {
    toppings: [ToppingInput!]!
    comment: String!
  }

  input OrderInput {
    pizzas: [PizzaInput!]!
    comment: String!
  }

  type Mutation {
    "Creates order and returns the id of the created order."
    createOrder(order: OrderInput): String
  }

  type Query {
    orderServiceHealth: Boolean
  }
`;

const healthCheck = () => true;

const resolvers = {
  JSON: JSONType,
  Query: {
    orderServiceHealth: healthCheck,
    ...order.Query
  },
  Mutation: {
    ...order.Mutation
  }
};

export default makeExecutableSchema({ typeDefs, resolvers });
