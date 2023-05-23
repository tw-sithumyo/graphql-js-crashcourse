exports.Query = {
  hello: (parent, args, context) => "hello",

  products: (parent, { filter }, { products, reviews }) => {
    let filterProducts = products;

    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale === true) {
        filterProducts = filterProducts.filter((product) => {
          return product.onSale;
        });
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filterProducts = filterProducts.filter((product) => {
          let sumRating = 0;
          let numOfReviews = 0;
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numOfReviews++;
            }
          });
          const avgProductRating = sumRating / numOfReviews;
          return avgProductRating >= avgRating;
        });
      }
    }

    return filterProducts;
  },

  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id == id);
  },

  categories: (parent, args, context) => categories,

  category: (parent, { id }, { categories }) => {
    return categories.find((cat) => cat.id === id);
  },
};
