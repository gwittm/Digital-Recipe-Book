import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  preparation: { type: String },
  // image: { type: String },
  course: { type: String },
  time: { type: String },
  servings: { type: Number },
  ingredients: [
    {
      name: { type: String, required: true },
      amount: { type: Number, required: true },
      unit: { type: String },
    },
  ],
  instruction: { type: String },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
