const {gql} = require("apollo-server");

exports.typeDefs = gql`
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
    categoryId: ID!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;

