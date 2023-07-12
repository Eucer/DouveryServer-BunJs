const mongoose = require('mongoose');

const ProductUserLikesDislikesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  like: {
    type: Boolean,
    default: false,
  },
});
// Create the model for Product Reviews
const ProductUserLikesDislikes = mongoose.model(
  'ProductUserLikesDislikes',
  ProductUserLikesDislikesSchema
);

// Export the model
module.exports = ProductUserLikesDislikes;
