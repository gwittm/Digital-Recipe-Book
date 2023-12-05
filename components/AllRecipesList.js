import Link from "next/link";
import styled from "styled-components";
import ImageViewer from "./ImageUpload/ImageViewer";

export default function AllRecipesList({ recipes }) {
  return (
    <StyledUl role="list">
      {recipes &&
        recipes.map((recipe) => (
          <LinkListItem href={`recipes/${recipe._id}`} key={recipe._id}>
            <ListItem key={recipe._id}>
              {recipe.title}
              <ImageViewer imageUrl={recipe.imageUrl} width={40} height={40} />
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
  padding-left: 0;
`;

const ListItem = styled.li`
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

const StyledListDiv = styled.div`
  /*   display: flex;
 */
`;

const StyledImageViewerOverviewPage = styled.div`
  /*   display: flex;
 */
`;
