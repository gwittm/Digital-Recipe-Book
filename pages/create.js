import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import { StyledLink } from "../components/StyledLink.js";
import RecipeForm from "@/components/FormularAddRecipe/index.js";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;
export default function CreateRecipePage() {
  const router = useRouter();
  async function addRecipe(recipe) {
    const response = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    if (response.ok) {
      router.push("/");
    }
  }
  return (
    <>
      <h2 id="add-recipe">Add Recipe</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <RecipeForm onSubmit={addRecipe} formName={"add-recipe"} />
    </>
  );
}
