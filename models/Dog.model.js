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
            enum: ['Puppy', 'Teen', 'Mature', 'Retired'], 
            required: true 
        },
        image: { 
            type: String, 
            required: true 
        },
        character: [{
            type: String,
            enum: ['Energetic', 'Friendly', 'Quiet', 'Playful', 'Affectionate', 'Shy'], 
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