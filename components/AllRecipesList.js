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
              <a>
                <ListItem>
                  <RecipeContent>
                    <ImageViewer
                      imageUrl={recipe.imageUrl}
                      alt={recipe.title}
                      width={40}
                      height={40}
                      title={recipe.title}
                    />
                    <RecipeTitle>{recipe.title}</RecipeTitle>
                  </RecipeContent>
                </ListItem>
              </a>
            </Link>
          </LinkListItem>
        ))}
    </StyledUl>
  );
}

const LinkListItem = styled.li`
  list-style: none;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
`;

const ListItem = styled.div`
  background-color: var(--background-color);
  color: var(--title-color);
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: 400px;

  &:hover {
    background-color: var(--title-color);
    color: white;
    cursor: pointer;
  }
`;

const RecipeContent = styled.div`
  display: flex;
  align-items: center;
`;

const RecipeTitle = styled.div`
  margin-left: 10px; /* Adjust the margin as needed */
`;
