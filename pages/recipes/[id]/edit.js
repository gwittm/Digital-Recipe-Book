import { useRouter } from "next/router";
import useSWR from "swr";
import RecipeForm from "@/components/Formular/FormularAddRecipe";
import { toast } from 'react-toastify';

const showToastSucess = () => {
  toast.success("Recipe created successfully");
};

const showToastError = () => {
  toast.error("Failed to edit recipe")
};

const showToastWarn = () => {
  toast.warn("Error during recipe edit")
};

export default function EditPage(toast) {
  const router = useRouter();
  const { id } = router.query;
  const { data: recipe, isLoading, error, } = useSWR(id ?`/api/recipes/${id}` : null);
  
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
        showToastSucess();
        router.push(`/recipes/${id}`);
      } else {
        showToastError();
        console.error("Failed to edit recipe");
      }
    } catch (error) {
      showToastWarn();
      console.error("Error during recipe edit:", error);
    }
  }
  if (error) return <div>Error loading recipe</div>;
  if (!recipe || isLoading) return <div>Loading...</div>;

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
