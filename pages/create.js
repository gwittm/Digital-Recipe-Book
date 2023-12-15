import { useRouter } from "next/router";
import RecipeForm from "@/components/Formular/FormularAddRecipe";
import { StyledH2AddandEdit } from "@/components/Formular/FormularStyling";
import { StyledImageFormular } from "@/components/Formular/FormularAddRecipe";

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
      <StyledH2AddandEdit id="add-recipe">
        Add your new Recipe
      </StyledH2AddandEdit>
      <StyledImageFormular
        src="/Anime_Pastel_Dream_In_the_corner_of_a_quaint_kitchen_a_welllov_3.jpeg"
        width="280"
        height="100"
      />
      <RecipeForm onSubmit={addRecipe} formName={"add-recipe"} />
    </>
  );
}
