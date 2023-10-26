import mongoose from "mongoose";

const { Schema } = mongoose;

const ingredientSchema = new Schema({
  ingredient: { type: String, required: true },
  amount: { type: Number, required: true },
  unit: { type: String, required: true },
});

const Ingredient =
  mongoose.models.Ingredient || mongoose.model("Ingredient", ingredientSchema);

export default Ingredient;
