const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apartmentSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        enum: ['London','Amsterdam','Barcelona']
    },
    price: {
        type: String,
        required: true,
        enum: ['$','$$','$$$']
    },
    heroImage: {
        type: String,
        required: true,
    },
    secondImage: {
        type: String,
    },
    thirdImage: {
        type: String,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    dogFeatures: [{
        type: String,
        required: true,
        enum: ['Free Treats','Toys','Garden','Dog Bowl','Dog Bed']
    }],
    averageRating: {
        type: Number,
        default: 0
    }, 
});




const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;