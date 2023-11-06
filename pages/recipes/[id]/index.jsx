import { StyledLink } from "@/components/StyledLink";
import { useRouter } from "next/router.js";
import styled from "styled-components";
import Link from "next/link";
import useSWR from "swr";

// const MainDiv = styled.div`
//   display: inline-flex;
//   align-items: flex-start;
// `;
//
//
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

const HeaderDiv = styled.div`
  height: 2rem;
  background: lightpink;
  margin: 10px;
  text-align: center;
  border-radius: 5px;
`;

const StyledDetailsPageContainer = styled.div`
  width: 500px;
  border: solid black 1px;
  margin: 10px;
  padding: 20px;
`;

const StyledDetailsItem = styled.div`
  background-color: lightgrey;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 150px;
  margin: 10px;
  width: 200px;
`;

const StyledItemsRow = styled.div`
  display: flex;
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
/* const ButtonContainer = styled.section`
  display: flex;
  text-align: center;
  gap: 10px;
  margin: 10px;
`; */

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: recipe, isLoading, error } = useSWR(`/api/recipes/${id}`);
  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  /*  async function deleteRecipe() {
    await fetch(`/api/recipes/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  } */

  return (
    <>
      <div>
        <StyledDetailsPageContainer>
          <HeaderDiv>
            <h2>{recipe.title}</h2>
          </HeaderDiv>
          <div>
            {/* <ImageContainer>
              <StyledImage
                src={recipe.image}
                priority
                fill
                sizes="(max-width: 700px) 50vw,
              (max-width: 700px) 50vw,
              30vw"
                alt="...here should be a Picture..."
              />
            </ImageContainer> */}
          </div>
          <StyledItemsRow>
            <StyledDetailsItem>Type: {recipe.course}</StyledDetailsItem>
            <StyledDetailsItem>Time: {recipe.time}</StyledDetailsItem>
            <StyledDetailsItem>
              Amount of Servings: {recipe.servings}
            </StyledDetailsItem>

            <StyledDetailsItem>
              preparation: {recipe.preparation}
            </StyledDetailsItem>
          </StyledItemsRow>
          <StyledDetailsItem>
            <div>
              <h4>Ingredients:</h4>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index}>
                    {ingredient.name} {ingredient.amount} {ingredient.unit}
                  </div>
                ))}
              </ul>
            </div>
          </StyledDetailsItem>
          <StyledDetailsItem>
            <h4>How to prepare it: {recipe.instruction}</h4>
          </StyledDetailsItem>
          {/*  <ButtonContainer>
            <Link href={`/recipes/${id}/edit`} passHref legacyBehavior>
              <StyledLink>Edit</StyledLink>
            </Link>
            <StyledButton
              onClick={deleteRecipe}
              type="button"
              $variant="delete"
            >
              Delete
            </StyledButton>
          </ButtonContainer> */}
          <div>
            <Link href={"/"} passHref legacyBehavior>
              <StyledLink $justifySelf="end">back</StyledLink>
            </Link>
          </div>
        </StyledDetailsPageContainer>
      </div>
    </>
  );
}
