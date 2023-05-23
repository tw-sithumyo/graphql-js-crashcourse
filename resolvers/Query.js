exports.Query = {
  hello: (parent, args, context) => "hello",

  products: (parent, args, { products }) => products,

  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id == id);
  },

  categories: (parent, args, context) => categories,

  category: (parent, { id }, { categories }) => {
    return categories.find((cat) => cat.id === id);
  },
};
