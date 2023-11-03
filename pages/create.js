import { useRouter } from "next/router";
import RecipeForm from "../components/FormularAddRecipe.js";

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
      <RecipeForm onSubmit={addRecipe} formName={"add-recipe"} />
    </>
  );
}
