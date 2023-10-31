import mongoose from "mongoose";
import Ingredient from "./Ingredient";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String },
  preparation: { type: String },
  // image: { type: String },
  course: { type: String },
  time: { type: String },
  servings: { type: Number },
  ingredients: { type: [Schema.Types.ObjectId], ref: Ingredient },
  instruction: { type: String },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
