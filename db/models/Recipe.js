import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  /*   id: { type: String },
   */ title: { type: String, required: true },
  preparation: { type: String },
  course: { type: String },
  time: { type: String },
  servings: { type: Number },
  ingredients: [
    {
      ingredientId: { type: String },
      name: { type: String, required: true },
      amount: { type: Number, required: true },
      unit: { type: String },
    },
  ],
  instruction: { type: String },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
