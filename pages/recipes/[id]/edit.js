import { useRouter } from "next/router";
import useSWR from "swr";
import { StyledLink } from "@/components/StyledLink";
import RecipeForm from "@/components/Formular/FormularAddRecipe";

export default function EditPage() {
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
      if (isLoading) {
        return <h1>Loading...</h1>;
      }
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
  if (!recipe) return <div>Loading...</div>;
  return (
    <>
      <h2 id="edit-recipe">Edit Recipe</h2>
      <StyledLink href={`/recipes/${id}`}>Back</StyledLink>
      <RecipeForm
        onSubmit={editRecipe}
        formName={"edit-recipe"}
        defaultData={recipe}
      />
    </>
  );
}
