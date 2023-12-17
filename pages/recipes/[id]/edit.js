import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import RecipeForm from "@/components/Formular/FormularAddRecipe";
import { toast } from 'react-toastify';
import FavoriteButton from "@/components/FavoriteButton";




export default function EditPage() {
  const router = useRouter();
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

  async function editRecipe(updatedRecipe) {
    try {
      const response = await fetch(`/api/recipes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
      });

      if (response.ok) {
        toast.success("Recipe changed successfully");
        router.push(`/recipes/${id}`);
      } else {
        toast.error("Failed to edit recipe");
        console.error("Failed to edit recipe");
      }
    } catch (error) {
      toast.warn("Error during recipe edit");
      console.error("Error during recipe edit:", error);
    }
  }
  if (error) return <div>Error loading recipe</div>;
  if (!recipe || isLoading) return <div>Loading recipe details...</div>;


  return (
    
    <>
      <FavoriteButton
              id={recipe._id}
              isFavorite={recipe.isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
      <h2 id="edit-recipe">Edit Recipe</h2>

      <RecipeForm
        onSubmit={editRecipe}
        formName={"edit-recipe"}
        defaultData={recipe}
      
        />
      
     
     
    </>
  );
}
