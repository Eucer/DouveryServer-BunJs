const mongoose = require('mongoose');

const clickSchema = new mongoose.Schema({
  userId: String,
  productId: String,
});

const Click = mongoose.model('Click', clickSchema);
module.exports = { Click, clickSchema };
