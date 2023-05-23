const { ApolloServer, gql } = require("apollo-server");
const { products, categories } = require("./products");

// Scalar type: String, Int, Float, Boolean

const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    image: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }

  type Category {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Query: {
    hello: (parent, args, context) => "hello",

    products: (parent, args, context) => products,

    product: (parent, args, context) => {
      const { id } = args;
      return products.find((product) => product.id == id);
    },

    categories: (parent, args, context) => categories,

    category: (parent, args, context) => {
      const { id } = args;
      return categories.find((cat) => cat.id === id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
