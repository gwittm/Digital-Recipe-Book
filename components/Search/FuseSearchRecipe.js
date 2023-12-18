import AllRecipesList from "../AllRecipesList";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Fuse from "fuse.js";
import useSWR from "swr";
import LoadingMessage from "../LoadingMessage/LoadingMessage";
import { StartingPageDiv } from "./FuseSearchStyling";
import { StyledFuseUl } from "./FuseSearchStyling";

const fuseOptions = {
  threshold: 0.3,
  keys: ["title", "ingredients.name"],
};

export default function FuseSearchRecipe() {
  const [results, setResults] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [isFuseActive, setIsFuseActive] = useState(false);
  const {
    data: recipes,
    isLoading,
    error,
    mutate,
  } = useSWR("/api/recipes", {
    onSuccess: (fetchedRecipes) => {
      setFuse(new Fuse(fetchedRecipes, fuseOptions));
    },
  });

  function handleSearch(event) {
    event.preventDefault();
    if (!fuse) {
      return;
    }
    const searchPattern = event.target.value;
    const searchResult = fuse.search(searchPattern);
    setResults(searchResult);
    searchPattern.length === 0 ? setIsFuseActive(false) : setIsFuseActive(true);
  }

  if (isLoading) return <LoadingMessage />;
  if (error) return <h2>An error occured...</h2>;

  const alphabeticallySortedRecipes = recipes.toSorted((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return (
    <StartingPageDiv>
      <SearchBar handleSearch={handleSearch} />
      <div>
        <StyledFuseUl>
          {!isFuseActive &&
            alphabeticallySortedRecipes.map((recipe) => (
              <AllRecipesList
                key={recipe._id}
                recipes={[recipe]}
                mutate={mutate}
              />
            ))}
          {results.map((recipe) => (
            <AllRecipesList
              key={recipe.item._id}
              recipes={[recipe.item]}
              mutate={mutate}
            />
          ))}
        </StyledFuseUl>
        {isFuseActive && results.length === 0 && <p>No matching recipes :( </p>}
      </div>
    </StartingPageDiv>
  );
}
