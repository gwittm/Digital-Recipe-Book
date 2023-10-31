import mongoose from "mongoose";

const { Schema } = mongoose;

const ingredientSchema = new Schema({
  ingredientname: { type: String, required: true },
  ingredientamount: { type: Number, required: true },
  ingredientunit: { type: String },
});

const Ingredient =
  mongoose.models.Ingredient || mongoose.model("Ingredient", ingredientSchema);

export default Ingredient;
