import mongoose from "mongoose";

const { Schema } = mongoose;

const favoriteSchema = new Schema({
  isFavorite: { type: Boolean },
});

const Favorite =
  mongoose.models.Favorite || mongoose.model("Favorite", favoriteSchema);

export default Favorite;
