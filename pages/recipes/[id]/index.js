import { StyledButton } from "@/components/StyledButton.js";
import { StyledImage } from "@/components/StyledImage.js";
import { StyledLink } from "@/components/StyledLink";
import { useRouter } from "next/router.js";
import styled from "styled-components";
import Link from "next/link";
import useSWR from "swr";

const ImageContainer = styled.div`
  position: relative;
  height: 15rem;
`;
const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;
  & > * {
    flex-grow: 1;
    text-align: center;
  }
`;
const StyledLocationLink = styled(StyledLink)`
  text-align: center;
  background-color: white;
  border: 3px solid lightsalmon;
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
      <Link href={"/"} passHref legacyBehavior>
        <StyledLink $justifySelf="start">back</StyledLink>
      </Link>
      <ImageContainer>
        <StyledImage
          src={recipe.image}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt="hier wäre ein Bild"
        />
      </ImageContainer>
      <h2>
        {recipe.name}, {recipe.location}
      </h2>
      <Link href={recipe.mapURL} passHref legacyBehavior>
        <StyledLocationLink>Location on Google Maps</StyledLocationLink>
      </Link>
      <p>{recipe.description}</p>
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
