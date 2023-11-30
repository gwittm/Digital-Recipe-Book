import React, { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import DisplayFavorites from "./DisplayFavorites";

export default function FavoriteRecipesList() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([false]);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <FavoriteButton
            isFavorite={item.isFavorite}
            onToggle={() => toggleFavorite(item.id)}
          />
        </div>
      ))}
      <DisplayFavorites favorites={favoriteItems} />
    </div>
  );
}
