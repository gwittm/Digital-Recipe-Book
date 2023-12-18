import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import ImageViewer from "./ImageUpload/ImageViewer";

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
          <LinkListItem href={`recipes/${recipe._id}`} passHrefkey={recipe._id}>
            <ListItem key={recipe._id}>
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <ImageViewer
                image={recipe.image ? recipe.image.imageUrl : null}
                alt={recipe.title}
                width={40}
                height={40}
                title={recipe.title}
              />
            </ListItem>
            <StyledFavoriteButtonDiv>
              <FavoriteButton
                id={recipe._id}
                isFavorite={recipe.isFavorite}
                onToggleFavorite={handleToggleFavorite}
              />
            </StyledFavoriteButtonDiv>
          </LinkListItem>
        ))}
    </ul>
  );
}

const ListItem = styled.li`
  color: var(--title-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  padding: 5px;
`;

const LinkListItem = styled(Link)`
  text-decoration: none;
  background-color: var(--background-color);
  height: 60px;
  border-radius: 5px;
  margin: 13px;
  padding: 10px;
  display: flex;
  align-items: center;
  width: 270px;

  &:hover {
    background-color: var(--title-color);
    cursor: pointer;

    ${ListItem} {
      color: white;
    }
  }
`;

const RecipeTitle = styled.div`
  margin: 10px;
  text-decoration: none;
  overflow-wrap: wrap;
`;

export const StyledFavoriteButtonDiv = styled.div`
  margin-top: -50px;
  margin-left: -10px;
`;
