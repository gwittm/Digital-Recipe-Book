import mongoose from "mongoose";

const { Schema } = mongoose;

const ingredientSchema = new Schema({
  ingredientId: { type: String, required: true },
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  unit: { type: String },
});

const Ingredient =
  mongoose.models.Ingredient || mongoose.model("Ingredient", ingredientSchema);

export default Ingredient;
