import AllRecipesList from "@/components/AllRecipesList";
import useSWR from "swr";
import SideBannerHome from "@/components/SideBanner/SideBannerHome";
import LoadingMessage from "@/components/LoadingMessage/LoadingMessage";
import { StyledUlFavoritePage } from "@/components/StyledFavoritePage";
import { StyledH2AddandEdit } from "@/components/Formular/FormularStyling";

export default function FavoriteRecipes() {
  const { data: recipes, isLoading, error, mutate } = useSWR("/api/recipes");

  const favoriteRecipes = recipes?.filter((recipe) => recipe.isFavorite);

  if (isLoading) return <LoadingMessage />;
  if (error)
    return (
      <h2>
        Oops! Something went wrong while fetching recipes. Please try again.
      </h2>
    );

  const alphabeticallySortedRecipes = favoriteRecipes.toSorted((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return (
    <>
      <SideBannerHome />
      <StyledH2AddandEdit>My favorite recipes</StyledH2AddandEdit>
      <StyledUlFavoritePage>
        {alphabeticallySortedRecipes.map((recipe) => (
          <AllRecipesList key={recipe._id} recipes={[recipe]} mutate={mutate} />
        ))}
      </StyledUlFavoritePage>
    </>
  );
}
