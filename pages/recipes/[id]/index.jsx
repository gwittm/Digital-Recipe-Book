import { StyledLink } from "@/components/StyledLink";
import { useRouter } from "next/router.js";
import styled from "styled-components";
import Link from "next/link";
import useSWR from "swr";

const HeaderDiv = styled.div`
  height: 2rem;
  background: lightpink;
  margin: 10px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 8px 3px 3px rgb(128, 54, 119);
`;

const StyledDetailsPageContainer = styled.div`
  width: 500px;
  border: solid black 1px;
  margin: 10px;
  padding: 20px;
`;

const StyledDetailsItem = styled.div`
  background-color: rgb(247, 240, 240);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;

const StyledItemsRow = styled.div`
  display: flex;
`;

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: recipe, isLoading, error } = useSWR(`/api/recipes/${id}`);

  if (isLoading) return <h2>Loading...</h2>;
  if (error || !isReady) return <h2>An error occured...</h2>;

  return (
    <StyledDetailsPageContainer>
      <HeaderDiv>
        <h2>{recipe.title}</h2>
      </HeaderDiv>
      <StyledItemsRow>
        <StyledDetailsItem>Type: {recipe.course}</StyledDetailsItem>
        <StyledDetailsItem>Time: {recipe.time}</StyledDetailsItem>
        <StyledDetailsItem>
          Amount of Servings: {recipe.servings}
        </StyledDetailsItem>
        <StyledDetailsItem>Preparation: {recipe.preparation}</StyledDetailsItem>
      </StyledItemsRow>
      <StyledDetailsItem>
        <h4>Ingredients:</h4>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index}>
              {ingredient.name}
              {":"} {ingredient.amount} {ingredient.unit}
            </div>
          ))}
        </ul>
      </StyledDetailsItem>
      <StyledDetailsItem>
        <h4>How to prepare it:</h4> {recipe.instruction}
      </StyledDetailsItem>
      <br />
      <Link href={"/"} passHref legacyBehavior>
        <StyledLink $justifySelf="end">back</StyledLink>
      </Link>
    </StyledDetailsPageContainer>
  );
}
