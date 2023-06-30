const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    dog: { type: Schema.Types.ObjectId, ref: 'Dog' },
    rating: { 
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    pros: { 
      type: String,
      required: true
    },
    cons: { 
      type: String,
      required: true
    },
    apartment: { type: Schema.Types.ObjectId, ref: 'Apartment' }
  },
  {
    timestamps: true
  }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
