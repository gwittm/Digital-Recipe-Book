import { useRouter } from "next/router";
import RecipeForm from "@/components/Formular/FormularAddRecipe";

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
      <h1 id="add-recipe">Add Recipe</h1>
      <RecipeForm onSubmit={addRecipe} formName={"add-recipe"} />
    </>
  );
}
