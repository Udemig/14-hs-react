const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    picture: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isNew: {
        type: Boolean,
        default: false
    },
    discount: {
        type: Number,
        default: 0
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['men', 'women'],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Shoe', shoeSchema); 