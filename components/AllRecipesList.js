import styled from "styled-components";
import ImageViewer from "./ImageUpload/ImageViewer";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import { toast } from 'react-toastify';
import EditPage from "@/pages/recipes/[id]/edit";


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
        toast.success("favorite button state changed successfully");

        mutate();
      }else {
        toast.error("Failed to edit recipe");
        console.error("Failed to edit recipe");
      }
    }   catch (error) {
        toast.warn("Failed to update recipe");
        console.error("Error during recipe edit:", error);
    }
  }

  return (
    <ul role="list">
      {recipes &&
        recipes.map((recipe) => (
          <ListItem key={recipe._id}>
            <LinkListItem href={`recipes/${recipe._id}`} passHref>
              <RecipeContent>
                <RecipeTitle>{recipe.title}</RecipeTitle>
                <ImageViewer
                  image={recipe.image ? recipe.image.imageUrl : null}
                  alt={recipe.title}
                  width={40}
                  height={40}
                  title={recipe.title}
                />
              </RecipeContent>
            </LinkListItem>
            <FavoriteButton
              id={recipe._id}
              isFavorite={recipe.isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
            <EditPage
              id={recipe._id}
              isFavorite={recipe.isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
          </ListItem>
        ))}
    </ul>
  );
}
const LinkListItem = styled(Link)`
  text-decoration: none;
`;
const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0;
`;
const ListItem = styled.div`
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
