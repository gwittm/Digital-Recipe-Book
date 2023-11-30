import { useRouter } from "next/router";
import useSWR from "swr";
import RecipeForm from "@/components/Formular/FormularAddRecipe";
import { StyledH2AddandEdit } from "@/components/Formular/FormularStyling";

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
        router.push(`/recipes/${id}`);
      } else {
        console.error("Failed to edit recipe");
      }
    } catch (error) {
      console.error("Error during recipe edit:", error);
    }
  }
  if (error) return <div>Error loading recipe</div>;
  if (!recipe || isLoading) return <div>Loading...</div>;

  return (
    <>
      <StyledH2AddandEdit id="edit-recipe">Edit Recipe</StyledH2AddandEdit>
      <RecipeForm
        onSubmit={editRecipe}
        formName={"edit-recipe"}
        defaultData={recipe}
      />
    </>
  );
}
