import styled from "styled-components";
import ImageViewer from "./ImageUpload/ImageViewer";
import { useState } from "react";
import FavoriteButton from "./FavoriteButton";
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

          <LinkListItem href={`recipes/${recipe._id}`} key={recipe._id}>
            <ListItem key={recipe._id}>
              {recipe.title}
              <ImageViewer
                image={recipe.image ? recipe.image.imageUrl : null}
                alt={recipe.title}
                width={40}
                height={40}
                title={recipe.title}
              />
            </ListItem>

          </LinkListItem>
        ))}
    </ul>
  );
}

const LinkListItem = styled.li`
  list-style: none;

  display: flex;

  padding-left: 0;

`;

const ListItem = styled.div`
  height: 60px;
  background-color: var(--background-color);

  color: var(--header-color);
  height: 60px;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;


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
  margin: 10px;
  text-decoration: none;
`;
