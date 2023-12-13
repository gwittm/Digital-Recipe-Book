import styled from "styled-components";
import { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function AllRecipesList({ recipes, mutate }) {
  async function handleToggleFavorite(newStatus, id) {
    try {
      const response = await fetch(`/api/recipes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isFavorite: newStatus }),
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

  // if (error) return <div>Error loading recipe</div>;
  // if (!recipe) return <div>Loading recipe details...</div>;

  return (
    <ul role="list">
      {recipes &&
        recipes.map((recipe) => (
          <LinkListItem key={recipe._id}>
            <FavoriteButton
              id={recipe._id}
              isFavorite={recipe.isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
            <Link href={`recipes/${recipe._id}`} passHref>
              <ListItem>
                <RecipeContent>
                  <RecipeTitle>{recipe.title}</RecipeTitle>
                </RecipeContent>
              </ListItem>
            </Link>
          </LinkListItem>
        ))}
    </ul>

    // <StyledUl role="list">
    //   <ListItem>
    //     <div>
    //       {recipe.title}{" "}

    //     </div>
    //   </ListItem>
    // </StyledUl>
  );
}

// const StyledUl = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   padding-left: 0;
// `;

// const ListItem = styled.li`
//   background-color: var(
//     --background-color
//   ); /* Make sure to define these CSS variables */
//   color: var(--header-color);
//   height: 40px;
//   border-radius: 5px;
//   margin: 10px;
//   padding: 10px;

//   &:hover {
//     background-color: var(--title-color);
//     color: white;
//     cursor: pointer;
//   }
// `;
// new
const LinkListItem = styled.li`
  list-style: none;
  display: flex;
`;

const ListItem = styled.div`
  height: 60px;
  background-color: var(--background-color);
  color: var(--title-color);
  border-radius: 5px;
  margin: 10px;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: var(--title-color);
    color: white;
    cursor: pointer;
  }
`;

const RecipeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60vw;
  padding: 15px;
`;

const RecipeTitle = styled.div`
  margin: 10px; /* Adjust the margin as needed */
  text-decoration: none;
`;
