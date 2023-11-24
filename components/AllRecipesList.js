import Link from "next/link";
import styled from "styled-components";

export default function AllRecipesList({ recipes }) {
  return (
    <StyledUl role="list">
      {recipes &&
        recipes.map((recipe) => (
          <LinkListItem href={`recipes/${recipe._id}`} key={recipe._id}>
            <ListItem key={recipe._id}>{recipe.title} </ListItem>
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
  /*   width: 320px; */
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
