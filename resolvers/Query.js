const {categories, products} = require("../db");

exports.Query = {
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
};
