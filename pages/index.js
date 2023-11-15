import Link from "next/link.js";
import styled from "styled-components";
import useSWR from "swr";

const StyledH1 = styled.h1`
  padding: 10px;
  text-align: center;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  position: relative;
  background-color: rgb(247, 240, 240);
  width: 320px;
  height: 40px;
  border-radius: 10px;
  box-shadow: 8px 3px 3px lightblue;
  margin: 10px;
  padding: 10px;

  &:hover {
    background-color: pink;
    cursor: pointer;
  }
`;

const LinkListItem = styled(Link)`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  background-color: lightblue;
  width: 320px;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 8px 3px 3px rgb(39, 45, 56);
  text-decoration: none;
  font-size: 20px;
`;

const StyledBox = styled.section`
  border: solid grey;
  width: 400px;
`;

export default function Home() {
  const { data } = useSWR("/api/recipes", { fallbackData: [] });

  return (
    <StyledBox>
      <StyledH1>All my Recipes</StyledH1>
      <StyledUl role="list">
        {data.map((recipe) => {
          return (
            <ListItem key={recipe._id}>
              <LinkListItem href={`recipes/${recipe._id}`}>
                {recipe.title}
              </LinkListItem>
            </ListItem>
          );
        })}
        <StyledLink href="/create">+ recipe</StyledLink>
      </StyledUl>
    </StyledBox>
  );
}
