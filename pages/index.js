import Link from "next/link.js";
import styled from "styled-components";
import useSWR from "swr";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.li`
  position: relative;
  background-color: lightgrey;
  width: 320px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 8px 3px 3px lightblue;
  margin: 10px;
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
  margin: 20px;
  width: 400px;
`;

export default function Home() {
  const { data } = useSWR("/api/recipes", { fallbackData: [] });

  return (
    <StyledBox>
      <List role="list">
        <h1>Rezepte</h1>
        {data.map((recipe, _id) => {
          return (
            <ListItem key={recipe._id}>
              {recipe.title}
              {/*  <p>Ingredients:</p>
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index}>{ingredient.name}</div>
              ))} */}
            </ListItem>
          );
        })}
        <StyledLink href="/create">+ recipe</StyledLink>
      </List>
      ;
    </StyledBox>
  );
}
