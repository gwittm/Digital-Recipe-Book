import { useRouter } from "next/router";
import RecipeForm from "@/components/Formular/FormularAddRecipe";
import { StyledH2AddandEdit } from "@/components/Formular/FormularStyling";

export default function CreateRecipePage() {
  const router = useRouter();

  async function addRecipe(recipe) {
    const response = await fetch("/api/recipes", {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      router.push("/");
    }
  }

  return (
    <>
      <StyledH2AddandEdit id="add-recipe">Add Recipe</StyledH2AddandEdit>
      <RecipeForm onSubmit={addRecipe} formName={"add-recipe"} />
    </>
  );
}
