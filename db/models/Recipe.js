import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  course: { type: String, required: true },
  time: { type: String, required: true },
  yield: { type: String },
  ingredients: { type: Array },
  steps: { type: String, required: true },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
