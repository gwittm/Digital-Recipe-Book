import mongoose from "mongoose";

const { Schema } = mongoose;

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  type: { type: String, required: true },
  time: { type: String },
  yield: { type: String },
  ingredients: { type: Array },
  steps: { type: String, required: true },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", RecipeSchema);

export default Recipe;
