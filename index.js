const { ApolloServer, gql } = require("apollo-server");
const { typeDefs, resolvers } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { categories, products, reviews } = require("./db");

const server = new ApolloServer({
  typeDefs,

  resolvers: {
    Query,
    Category,
    Product,
  },

  context: {
    sayHello: () => console.log("Hello my friend"),
    categories,
    products,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
