const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    dog: { type: Schema.Types.ObjectId, ref: 'Dog', required: true},
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
    apartment: { type: Schema.Types.ObjectId, ref: 'Apartment', required: true }
  },
  {
    timestamps: true
  }
);

const Review = model("Review", reviewSchema);

module.exports = Review;
