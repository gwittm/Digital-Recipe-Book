import Link from "next/link.js";
import styled from "styled-components";
import useSWR from "swr";
import Card from "../components/Card.js";
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
        {data.map((recipe) => {
          return (
            <ListItem key={recipe._id}>
              <Card title={recipe.title} image={recipe.image} id={recipe._id} />
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
