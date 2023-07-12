const mongoose = require('mongoose');

const designSchema = mongoose.Schema({
  logo: [
    {
      type: String,
    },
  ],
  uploaded_by: {
    type: String,
  },
});

const Design = mongoose.model('Design', designSchema);
module.exports = { Design, designSchema };
