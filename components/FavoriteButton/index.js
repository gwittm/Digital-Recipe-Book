import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function FavoriteButton({ isFavorite, toggleFavorite }) {
  return (
    <button
      onClick={toggleFavorite}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={isFavorite}
    >
      {isFavorite ? (
        <FaHeart color="red" font-size="40px" />
      ) : (
        <FaRegHeart font-size="40px" />
      )}
    </button>
  );
}
