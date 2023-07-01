const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    dogs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Dog'}],
    reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}],
    favourites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Apartment'}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;

