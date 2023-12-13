import AllRecipesList from "../AllRecipesList";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Fuse from "fuse.js";

const fuseOptions = {
  threshold: 0.3,
  keys: ["title", "ingredients.name"],
};

export default function FuseSearchRecipe() {
  const [results, setResults] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [isFuseActive, setIsFuseActive] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRecipes() {
      setError(null);
      setIsLoading(true);

      try {
        const response = await fetch(`/api/recipes`);
        const fetchedRecipes = await response.json();

        setRecipes(fetchedRecipes);
        setFuse(new Fuse(fetchedRecipes, fuseOptions));
      } catch (fetchError) {
        setError(fetchError);
      } finally {
        setIsLoading(false);
      }
    }
    getRecipes();
  }, []);

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

  if (isLoading)
    return (
      <StyledLoadingMessage>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="3em"
          viewBox="0 0 576 512"
        >
          <path d="M240 144A96 96 0 1 0 48 144a96 96 0 1 0 192 0zm44.4 32C269.9 240.1 212.5 288 144 288C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112h71.8c8.8-9.8 21.6-16 35.8-16H496c26.5 0 48 21.5 48 48s-21.5 48-48 48H392c-14.2 0-27-6.2-35.8-16H284.4zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM400 240c13.3 0 24 10.7 24 24v8h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h96v-8c0-13.3 10.7-24 24-24zM288 464V352H512V464c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48zM48 320h80 16 32c26.5 0 48 21.5 48 48s-21.5 48-48 48H160c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V336c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160v32h16zM24 464H200c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
        </svg>
        <p>We are still busy in the kitchen! Recipes are loading...</p>
      </StyledLoadingMessage>
    );
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
      <StyledUlBox>
        {/*   <StyledH2>All my recipes</StyledH2> */}
        <StyledFuseUl>
          {!isFuseActive &&
            alphabeticallySortedRecipes.map((recipe) => (
              <AllRecipesList key={recipe._id} recipes={[recipe]} />
            ))}
          {results.map((recipe) => (
            <AllRecipesList key={recipe.item._id} recipes={[recipe.item]} />
          ))}
        </StyledFuseUl>
        {isFuseActive && results.length === 0 && <p>No matching recipes :( </p>}
      </StyledUlBox>
    </StartingPageDiv>
  );
}

const StyledUlBox = styled.div``;

const StyledFuseUl = styled.ul`
  padding-left: 0px;
  padding-top: 40px;
`;

const StyledLoadingMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  padding-left: 90px;
`;
const StartingPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
