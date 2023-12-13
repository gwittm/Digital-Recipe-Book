import Link from "next/link";
import styled from "styled-components";
import ImageViewer from "./ImageUpload/ImageViewer";

export default function AllRecipesList({ recipes }) {
  return (
    <ul role="list">
      {recipes &&
        recipes.map((recipe) => (
          <LinkListItem key={recipe._id}>
            <Link href={`recipes/${recipe._id}`} passHref>
              <ListItem>
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
              </ListItem>
            </Link>
          </LinkListItem>
        ))}
    </ul>
  );
}

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
  overflow-wrap: wrap;
`;
