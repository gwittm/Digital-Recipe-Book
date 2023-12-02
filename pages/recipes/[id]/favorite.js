import { useRouter } from "next/router";
import useSWR from "swr";
import RecipeForm from "../../../components/Formular/FormularAddRecipe";



export default function FavoritePage() {
    const router = useRouter();
    const { id } = router.query;
    const { data: recipe, isLoading, error, } = useSWR(id ?`/api/recipes/${id}` : null);
    
    async function editFavoriteRecipe(updatedRecipe) {
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
          <h2 id="favorite-recipe">Edit Favorite Recipe</h2>
          
          <RecipeForm
            onSubmit={editFavoriteRecipe}
            formName={"favorite-recipe"}
            defaultData={recipe}
          />
        </>
      );
     
    }

