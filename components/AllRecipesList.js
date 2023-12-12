import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { useState } from "react";

export default function AllRecipesList({ recipes }) {
  const [isFavorite, setIsFavorite] = useState(false);
  function handleFavoriteToggle(event) {
    event.preventDefault();
    setIsFavorite(!isFavorite);
  }
  return (
    <StyledUl role="list">
      {recipes &&
        recipes.map((recipe) => (
          <LinkListItem href={`recipes/${recipe._id}`} key={recipe._id}>
            <ListItem key={recipe._id}>
              {recipe.title}{" "}
              <FavoriteButton
                isFavorite={isFavorite}
                toggleFavorite={handleFavoriteToggle}
              />
            </ListItem>
          </LinkListItem>
        ))}
    </StyledUl>
  );
}

const LinkListItem = styled(Link)`
  text-decoration: none;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 0;
`;

const ListItem = styled.li`
  background-color: var(--background-color);
  color: var(--header-color);
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;

  &:hover {
    background-color: var(--title-color);
    color: white;
    cursor: pointer;
  }
`;
