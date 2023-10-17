import mongoose from "mongoose";

const { Schema } = mongoose;

const myrecipeSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  course: { type: String, required: true },
  time: { type: String },
  yield: { type: String },
  ingredients: { type: Array },
  steps: { type: String, required: true },
});

const myrecipe = mongoose.models.myrecipe || mongoose.model("myrecipe", myrecipeSchema);

export default myrecipe;
