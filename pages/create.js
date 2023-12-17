import { useRouter } from "next/router";
import RecipeForm from "@/components/Formular/FormularAddRecipe";
import FavoriteButton from "@/components/FavoriteButton";
import useSWR from "swr";
import { toast } from "react-toastify";


export default function CreateRecipePage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: recipe,
    isLoading,
    error,
    mutate,
  } = useSWR(id ? `/api/recipes/${id}` : null);

  async function handleToggleFavorite(newStatus) {
    await fetch(`/api/recipes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite: newStatus }),
    });
    mutate();
    toast.success("favorite button state changed successfully");
  }

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
    <FavoriteButton id={"add-recipe"} isFavorite={recipe?.isFavorite} onToggleFavorite={handleToggleFavorite} />
      <h1 id="add-recipe">Add Recipe</h1>
      <RecipeForm onSubmit={addRecipe} formName={"add-recipe"} />
    </>
  );
}
