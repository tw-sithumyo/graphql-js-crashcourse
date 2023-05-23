exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    return categories.find((cat) => cat.id == categoryId);
  },

  reviews: ({ id: productId }, arg, { reviews }) => {
    return reviews.filter((review) => review.productId == productId);
  },
};
