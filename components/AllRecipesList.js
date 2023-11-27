import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import formidable from "formidable";
import cloudinary from "cloudinary";

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
`;

const ListItem = styled.li`
  background-color: rgb(247, 240, 240);
  width: 320px;
  height: 40px;
  border-radius: 5px;
  box-shadow: 8px 3px 3px lightblue;
  margin: 10px;
  padding: 10px;

  &:hover {
    background-color: pink;
    cursor: pointer;
  }
`;
