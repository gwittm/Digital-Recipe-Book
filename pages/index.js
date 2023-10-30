import Link from "next/link.js";
import styled from "styled-components";
import useSWR from "swr";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-left: 0;
`;
const ListItem = styled.li`
  position: relative;
  width: 100%;
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5 rem;
  flex-direction: column;
  border: solid black, 1em;
  padding: 1 em;
`;

export default function Home() {
  const { data } = useSWR("/api/recipes", { fallbackData: [] });
  return (
    <StyledDiv>
      <h1>Rezepte</h1>
      <List role="list">
        {data.map((recipe) => {
          return (
            <ListItem key={recipe._id}>
              {recipe.title}
              {/* <br></br>
              {recipe.preparation}
              <br></br>
              {recipe.course}
              <br></br>
              {recipe.time}
              <br></br>
              {recipe.servings}
              <br></br>
              {recipe.instruction} */}
            </ListItem>
          );
        })}
      </List>
      <Link href="/create">+ recipe</Link>
    </StyledDiv>
  );
}
