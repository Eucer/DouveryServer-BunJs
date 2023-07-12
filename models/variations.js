const mongoose = require('mongoose');

const variationSchema = mongoose.Schema({
  nameVariation: {
    type: String,
  },
  productVariation: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
});

module.exports = variationSchema;
