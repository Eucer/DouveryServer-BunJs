const mongoose = require('mongoose');

const searchHistorySchema = new mongoose.Schema({
  sessionId: {
    required: true,
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  searchTerm: {
    required: true,
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  itemsReturned: [
    {
      type: String,
    },
  ],
  itemsReturnedCount: {
    type: Number,
  },
});

const SearchHistory = mongoose.model('search_History', searchHistorySchema);
module.exports = { SearchHistory, searchHistorySchema };
