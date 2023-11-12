import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: false, unique: true },
    image: { type: String, required: true },
    cuisine: { type: String, required: true },
    type: { type: String, required: true },
    cookingTime: { type: Object, required: true },
    serves: { type: Number, required: true },
    ingredients: [{ type: Object }],
    method: [{ type: String }],
    spiceLevel: { type: Number, min: 1, max: 4 },
    addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: false },
    isVegan: { type: Boolean },
    isVegetarian: { type: Boolean },
    isPescatarian: { type: Boolean },
    isGlutenFree: { type: Boolean },
    // comments: [commentSchema],
    // rating: [ratingSchema]
  },
  {
    timestamps: true,
  }
)

// const commentSchema = new mongoose.Schema(
//     {
//         text: { type: String, required: true },
//         addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
//     },
//     {
//         timestamps: true
//     }
// );

// const ratingSchema = new mongoose.Schema({
//     rating: { type: Number, required: true },
//     addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
// });

export default mongoose.model('Recipe', recipeSchema)
