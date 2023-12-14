import { toast } from 'react-toastify';
import { useRouter } from "next/router";
import RecipeForm from "@/components/Formular/FormularAddRecipe";

export default function CreateRecipePage() {
  const router = useRouter();
  async function addRecipe(recipe) {
    try {
    const response = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });

    if (response.ok) {
      toast.success("Recipe created successfully");
      router.push("/");
    }
    else {
      toast.error("Failed to create recipe");
    }
  } catch (error) {
   
    console.error("Error creating recipe:", error);
    toast.error("An error occurred while creating the recipe");
  }
  }
  return (
    <>
      <h1 id="add-recipe">Add Recipe</h1>
      <RecipeForm onSubmit={addRecipe} formName={"add-recipe"} />
    </>
  );
}
