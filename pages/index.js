import Link from "next/link.js";
import styled from "styled-components";
import useSWR from "swr";
import Card from "@/components/Card";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.li`
  position: relative;
  background-color: rgb(247, 240, 240);
  width: 320px;
  border-radius: 10px;
  box-shadow: 8px 3px 3px lightblue;
  margin: 10px;

  &:hover {
    background-color: pink;
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  background-color: lightblue;
  width: 320px;
  padding: 20px;
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
      <List role="list">
        <h1>All my Recipes</h1>
        {data.map((recipe) => {
          return (
            <ListItem key={recipe._id}>
              <Card title={recipe.title} id={recipe._id} />
            </ListItem>
          );
        })}
        <StyledLink href="/create">+ recipe</StyledLink>
      </List>
    </StyledBox>
  );
}
