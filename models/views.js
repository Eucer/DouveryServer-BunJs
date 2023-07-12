const mongoose = require('mongoose');

const viewsSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productID: {
    type: String,
  },
  views: {
    type: Number,
  },
});

const Views = mongoose.model('Views', viewsSchema);
module.exports = { Views, viewsSchema };
