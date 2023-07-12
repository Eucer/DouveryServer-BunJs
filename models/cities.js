const mongoose = require('mongoose');

const citiesSchema = mongoose.Schema({
  name: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  zipCodes: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
});

const Cities = mongoose.model('Cities', citiesSchema);
module.exports = { Cities, citiesSchema };
