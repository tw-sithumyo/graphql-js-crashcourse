exports.Product = {
  category: ({ categoryId }, args, { db }) => {
    return db.categories.find((cat) => cat.id == categoryId);
  },

  reviews: ({ id: productId }, arg, { db }) => {
    return db.reviews.filter((review) => review.productId == productId);
  },
};
