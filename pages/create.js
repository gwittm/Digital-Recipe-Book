import { useRouter } from "next/router";
import RecipeForm from "@/components/Formular/FormularAddRecipe";
import { toast } from 'react-toastify';



export default function CreateRecipePage() {
  const router = useRouter();
  async function addRecipe(recipe) {

    if (!recipe.title || !recipe.ingredients) {
      
      toast.error(`Please fill out the fields with "*"`);
      return;
    }

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
      } else {
        // Handle non-successful response, e.g., show an error toast
        toast.error("Failed to create recipe");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error creating recipe:", error);
      toast.error("An error occurred while creating the recipe");
    }
  }

  return (
    <>
      <h2 id="add-recipe">Add Recipe</h2>
      <RecipeForm onSubmit={addRecipe} formName={"add-recipe"} />
    </>
  );
}
