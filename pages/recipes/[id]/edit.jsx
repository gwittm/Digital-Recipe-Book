// EditPage.js
import { useRouter } from "next/router";
import useSWR from "swr";
import RecipeForm from "@/components/FormularAddRecipe/index";
import { StyledLink } from "@/components/StyledLink";

export default function EditPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: recipe, error } = useSWR(`/api/recipes/${id}`);

  async function editRecipe(updatedRecipe) {
    const response = await fetch(`/api/recipes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    });

    if (response.ok) {
      router.push(`/recipes/${id}`);
    }
  }

  if (error) return <div>Error loading recipe</div>;
  if (!recipe) return <div>Loading...</div>;

  return (
    <>
      <h2>Edit Recipe</h2>
      <StyledLink href={`/recipes/${id}`}>Back</StyledLink>
      <RecipeForm onSubmit={editRecipe} defaultData={recipe} />
    </>
  );
}
