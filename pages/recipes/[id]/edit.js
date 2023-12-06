import { useRouter } from "next/router";
import useSWR from "swr";
import RecipeForm from "@/components/Formular/FormularAddRecipe";
import { toast } from 'react-toastify';

const showToastPutSucess = () => {
  toast.success("Recipe created successfully");
};

const showToastPutError = () => {
  toast.error("Failed to edit recipe")
};

const showToastPutWarn = () => {
  toast.warn("Error during recipe edit")
};

const showToastEditLoadError1 = () => {
  toast.error("Failed to edit recipe")
};
const showToastEditLoadSuccess = () => {
  toast.error("Failed to edit recipe")
};

const showToastEditLoadError2 = () => {
  toast.error("Failed to edit recipe")
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
        showToastPutSucess();
        router.push(`/recipes/${id}`);
      } else {
        showToastPutError();
        console.error("Failed to edit recipe");
      }
    } catch (error) {
      showToastPutWarn();
      console.error("Error during recipe edit:", error);
    }
  }
  if (error) return (showToastEditLoadError1());
  if (isLoading) return (showToastEditLoadSuccess());
  if (!recipe) return (showToastEditLoadError2());


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
