import styled from "styled-components";
import AllRecipesList from "@/components/AllRecipesList";
import useSWR from "swr";
import SideBannerHome from "@/components/SideBanner/SideBannerHome";
import LoadingMessage from "@/components/LoadingMessage/LoadingMessage";
import { StyledPSubtitle } from "@/components/Formular/FormularStyling";

const StyledUlFavoritePage = styled.ul``;

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
      <StyledPSubtitle>My favorite recipes</StyledPSubtitle>
      <SideBannerHome />
      <StyledUlFavoritePage>
        {alphabeticallySortedRecipes.map((recipe) => (
          <AllRecipesList key={recipe._id} recipes={[recipe]} mutate={mutate} />
        ))}
      </StyledUlFavoritePage>
    </>
  );
}
