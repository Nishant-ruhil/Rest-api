const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Price must be Provided"],
    },
    feature: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: ["apple", "samsung", "dell","Xiaomi"],
        message: '{VALUE} IS NOT SUPPORTED',
    }
    
});


module.exports = mongoose.model('Product',productSchema);