const mongoose = require('mongoose');

const userEventSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  productId: mongoose.Schema.Types.ObjectId,
  isAuthenticated: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: Number,
    default: 0,
  },
  ref: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserEvent = mongoose.model('user_Event', userEventSchema);
module.exports = { UserEvent, userEventSchema };
