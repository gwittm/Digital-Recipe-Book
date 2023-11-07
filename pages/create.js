import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "@/components/FormularAddIngredients/index.js";
import { StyledLink } from "../components/StyledLink.js";
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
      <Form onSubmit={addRecipe} formName={"add-recipe"} />
    </>
  );
}
