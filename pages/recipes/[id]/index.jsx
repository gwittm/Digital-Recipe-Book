import { StyledButton } from "@/components/StyledButton.js";
import { StyledImage } from "@/components/StyledImage.js";
import { StyledLink } from "@/components/StyledLink";
import { useRouter } from "next/router.js";
import styled from "styled-components";
import Link from "next/link";
import useSWR from "swr";

// const MainDiv = styled.div`
//   display: inline-flex;
//   align-items: flex-start;
// `;
// const HeaderDiv = styled.div`
//   width: 22.625rem;
//   height: 4.625rem;
//   position: absolute;
//   border: 1px solid #000;
//   background: #c17400;
// `;
// const BackgroundPicDiv = styled.div`
//   width: 22.625rem;
//   height: 39.9375rem;
//   border: 1px solid #000;
//   background: url(<path-to-image>), lightgray 50% / cover no-repeat;
// `;
// const PolaroidDiv = styled.div`
//   width: 9.9375rem;
//   height: 11.6875rem;
//   transform: rotate(-8.578deg);
//   position: absolute;
//   left: 0.13531rem;
//   top: 7.95206rem;
//   border: 1px solid #000;
//   background: #d9d9d9;
//   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
// `;

const ImageContainer = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
`;
// const TitleDiv = styled.div`
//   transform: rotate(-8.578deg);
//   position: absolute;
//   left: 3.98119rem;
//   top: 17.79569rem;
//   color: #000;
//   text-align: center;
//   font-family: Love Ya Like A Sister;
//   font-size: 1rem;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// `;
// const InfoDiv = styled.div`
//   width: 10.3125rem;
//   height: 10rem;
//   position: absolute;
//   right: 0.75rem;
//   top: 8.25rem;
//   border: 1px solid #000;
//   background: #d9d9d9;
//   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
// `;
// const IngredientsDiv = styled.div`
//   position: absolute;
//   right: 4.125rem;
//   top: 9.75rem;
//   color: #000;
//   text-align: center;
//   font-family: Love Ya Like A Sister;
//   font-size: 1rem;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// `;
// const PreparationDiv = styled.div`
//   display: flex;
//   padding: 0.75rem 0rem;
//   flex-direction: column;
//   align-items: center;
//   gap: 1.8125rem;
//   position: absolute;
//   right: 1.875rem;
//   bottom: 5.75rem;
//   border: 9px solid rgba(245, 4, 4, 0.2);
//   background: #d9d9d9;
//   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
// `;
const ButtonContainer = styled.section`
  display: flex;
  text-align: center;
`;
export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: recipe, isLoading, error } = useSWR(`/api/recipes/${id}`);
  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  async function deleteRecipe() {
    await fetch(`/api/recipes/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  return (
    <>
      <h1>DetailPage</h1>
      <div>
        <Link href={"/"} passHref legacyBehavior>
          <StyledLink $justifySelf="start">back</StyledLink>
        </Link>
      </div>
      <div>
        <div>
          <ImageContainer>
            <StyledImage
              src={recipe.image}
              priority
              fill
              sizes="(max-width: 700px) 50vw,
              (max-width: 700px) 50vw,
              30vw"
              alt="...here should be a Picture..."
            />
          </ImageContainer>
          <div>
            <h2>{recipe.title}</h2>
          </div>
        </div>
        <div>
          <ul>
            <li>servings: {recipe.servings}</li>
            <li>time: {recipe.time}</li>
            <li>course: {recipe.course}</li>
            <li>preparation: {recipe.preparation}</li>
          </ul>
        </div>
        <div>
          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index}>
                {ingredient.name} {ingredient.amount} {ingredient.unit}
              </div>
            ))}
          </ul>
        </div>
        <div>instruction: {recipe.instruction}</div>
      </div>
      <ButtonContainer>
        <Link href={`/recipes/${id}/edit`} passHref legacyBehavior>
          <StyledLink>Edit</StyledLink>
        </Link>
        <StyledButton onClick={deleteRecipe} type="button" $variant="delete">
          Delete
        </StyledButton>
      </ButtonContainer>
    </>
  );
}
