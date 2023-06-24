const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      dog: { type: mongoose.Schema.Types.ObjectId, ref: 'Dog' },
      rating: { 
          type: Number,
          required: true,
          min: 1,
          max: 5
      },
      pros: { 
          type: String,
          required: true,
      },
      cons: { 
          type: String,
          required: true,
      },
      apartment: { type: mongoose.Schema.Types.ObjectId, ref: 'Apartment' }
    },
    {
      timestamps: true
    }
  );

const Review = model("Review", reviewSchema);

module.exports = Review;