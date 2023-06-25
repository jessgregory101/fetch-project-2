const { Schema, model } = require("mongoose");

const dogSchema = new Schema(
    {
        name: { 
            type: String,
            required: true,
            trim: true 
        },
        breed: { 
            type: String, 
            required: true, 
            trim: true 
        },
        age: { 
            type: String, 
            enum: ['puppy', 'teen', 'mature', 'retired'], 
            required: true 
        },
        image: { 
            type: String, 
            required: true 
        },
        character: [{
            type: String,
            enum: ['energetic', 'friendly', 'quiet', 'playful', 'affectionate', 'shy'], 
            required: true 
        }],
        owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }
    },
    {
      timestamps: true
    }
  );

const Dog = model("Dog", dogSchema);

module.exports = Dog;