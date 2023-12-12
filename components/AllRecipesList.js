import Link from "next/link";
import styled from "styled-components";
import ImageViewer from "./ImageUpload/ImageViewer";

export default function AllRecipesList({ recipes }) {
  return (
    <StyledUl role="list">
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
    </StyledUl>
  );
}

const LinkListItem = styled.li`
  list-style: none;
  padding-left: 0;
`;

const StyledUl = styled.ul``;

const ListItem = styled.div`
  background-color: var(--background-color);
  color: var(--title-color);
  border-radius: 5px;
  margin: 10px;
  width: 50vw;
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
`;

const RecipeTitle = styled.div`
  margin: 10px; /* Adjust the margin as needed */
`;
