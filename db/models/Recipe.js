import mongoose from "mongoose";
import "./Ingredients";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  preparation: { type: String },
  course: { type: String },
  time: { type: String },
  servings: { type: Number },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
  instruction: { type: String },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
