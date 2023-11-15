import Link from "next/link.js";
import styled from "styled-components";
import useSWR from "swr";
import Polaroid from "../components/Polaroid/Index.js";
import { StyledLink } from "../components/StyledLink.js";

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

  &:hover {
    background-color: pink;
    cursor: pointer;
  }
`;
const FixedLink = styled(StyledLink)`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

export default function Home() {
  const { data } = useSWR("/api/recipes", { fallbackData: [] });
  return (
    <>
      <List role="list">
        <h1>Rezepte</h1>
        {data.map((recipe, _id) => {
          return (
            <ListItem key={recipe._id}>
              <Polaroid
                title={recipe.title}
                image={recipe.image}
                id={recipe._id}
              />
            </ListItem>
          );
        })}
      </List>

      <Link href="/create" passHref legacyBehavior>
        <FixedLink>+ recipe</FixedLink>
      </Link>
    </>
  );
}
