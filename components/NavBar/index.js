import { StyledNavLink, StyledNav, StyledNavDiv } from "./StyledNavBar";
import { useState } from "react";

export default function NavBar() {
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isNewRecipeActive, setIsNewRecipeActive] = useState(false);
  const [isFavoriteActive, setIsNewFavoriteActive] = useState(false);

  const handleToggle = (page) => {
    if (page === "home") {
      setIsHomeActive(true);
      setIsNewRecipeActive(false);
      setIsNewFavoriteActive(false);
    } else {
      setIsHomeActive(false);
      setIsNewRecipeActive(true);
      setIsNewFavoriteActive(true);

    } 
  };

  return (
    <StyledNav>
      <StyledNavDiv>
        <StyledNavLink
          href="/"
          className={isHomeActive ? "active" : ""}
          onClick={() => handleToggle("home")}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
          </span>
          Home
        </StyledNavLink>
      </StyledNavDiv>

      <StyledNavDiv>
        <StyledNavLink
          href="/favorite/"
          className={isFavoriteActive ? "active" : ""}
          onClick={() => handleToggle("favoriten")}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z" fill="red" />
            </svg>
          </span>
          Favorite
        </StyledNavLink>
      </StyledNavDiv>

      <StyledNavDiv>
        <StyledNavLink
          href="/create"
          className={isNewRecipeActive ? "active" : ""}
          onClick={() => handleToggle("newRecipe")}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </span>
          New Recipe
        </StyledNavLink>
      </StyledNavDiv>
    </StyledNav>
  );
}
