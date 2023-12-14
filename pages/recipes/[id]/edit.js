import { useRouter } from "next/router";
import useSWR from "swr";
import RecipeForm from "@/components/Formular/FormularAddRecipe";
import { toast } from 'react-toastify';



export default function EditPage() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: recipe,
    isLoading,
    error,
  } = useSWR(id ? `/api/recipes/${id}` : null);

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
  if (error)  toast.error("Failed to edit recipe");
  if (isLoading)  toast.error("Failed to edit recipe");
  if (!recipe)  toast.error("Failed to edit recipe");


  return (
    <>
      <h2 id="edit-recipe">Edit Recipe</h2>
      <RecipeForm
        onSubmit={editRecipe}
        formName={"edit-recipe"}
        defaultData={recipe}
      />
    </>
  );
}
