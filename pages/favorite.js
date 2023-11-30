import AllRecipesList from "@/components/AllRecipesList";

export default function FavoritePage({ recipes }) {
  const favoriteRecipes = recipes.filter((recipe) => recipe.isFavorite);

  return (
    <>
      <p>My Favorites:</p>
      <AllRecipesList recipes={favoriteRecipes || []} />
    </>
  );
}
