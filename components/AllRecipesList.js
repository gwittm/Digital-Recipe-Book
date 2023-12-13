import styled from "styled-components";
import { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function AllRecipesList({ recipes }) {
  const [favorites, setFavorites] = useState({});
  const router = useRouter();
  const { query } = router;
  const { id } = query;

  const {
    data: recipe,
    error,
    mutate,
  } = useSWR(id ? `/api/recipes/${id}` : null);

  async function handleFavoriteToggle() {
    try {
      const response = await fetch(`/api/recipes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isFavorite: !favorites[id] }),
      });

      if (response.ok) {
        mutate();
      } else {
        console.error("Failed to edit recipe");
      }
    } catch (error) {
      console.error("Error during recipe edit:", error);
    }
  }

  if (error) return <div>Error loading recipe</div>;
  if (!recipe) return <div>Loading recipe details...</div>;

  return (
    <StyledUl role="list">
      <ListItem>
        <div>
          {recipe.title}{" "}
          <FavoriteButton
            isFavorite={favorites[id]}
            toggleFavorite={() => {
              setFavorites((prevFavorites) => ({
                ...prevFavorites,
                [id]: !prevFavorites[id],
              }));
              handleFavoriteToggle();
            }}
          />
        </div>
      </ListItem>
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 0;
`;

const ListItem = styled.li`
  background-color: var(
    --background-color
  ); /* Make sure to define these CSS variables */
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
