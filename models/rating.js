const mongoose = require('mongoose');



const ratingSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        
    },
    userImages: {
        type: String,
    },
    userComment: {
        type: String,
        
    },
    rating: {
        type:Number,
        required: true,
    },
    user_imagesClients: [
        {
        type: String,
       
        },
    ],
});


module.exports = ratingSchema;