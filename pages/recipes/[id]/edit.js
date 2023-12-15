import { useRouter } from "next/router";
import useSWR from "swr";
import RecipeForm from "@/components/Formular/FormularAddRecipe";
import { StyledH2AddandEdit } from "@/components/Formular/FormularStyling";
import { StyledImageFormular } from "@/components/Formular/FormularAddRecipe";

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
      <StyledImageFormular
        src="/Anime_Pastel_Dream_In_the_corner_of_a_quaint_kitchen_a_welllov_3.jpeg"
        width="280"
        height="100"
      />
      <RecipeForm
        onSubmit={editRecipe}
        formName={"edit-recipe"}
        defaultdata={recipe}
      />
    </>
  );
}
