const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProdutsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
  }

  type Product {
    id: ID!
    name: String!
    image: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: ID
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProdutsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int
  }

  input ProdutsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddProductInput {
    name: String!
    image: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: ID!
  }

  input AddReviewInput {
    title: String!
    comment: String!
    rating: Int
    productId: ID!
  }

  input AddCategoryInput {
    name: String!
  }
`;
