import { useRouter } from "next/router";
import RecipeForm from "@/components/Formular/FormularAddRecipe";
import { useState } from "react";

export default function CreateRecipePage() {
  const [imageUrl, setImageUrl] = useState(null);
  const router = useRouter();

  function handleAddUrl(url) {
    setImageUrl(url);
  }

  async function addRecipe(recipe) {
    if (imageUrl) {
      recipe.imageUrl = imageUrl;
    }
    // const formData = new FormData();

    // // Append all fields from the recipe object (except imageUrl)
    // for (const key in recipe) {
    //   if (key !== "imageUrl") {
    //     formData.append(key, recipe[key]);
    //   }
    // }

    // If imageUrl is present, append it to FormData
    // if (recipe.imageUrl) {
    //   formData.append("imageUrl", recipe.imageUrl);
    // }

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
      <h2 id="add-recipe">Add Recipe</h2>
      <RecipeForm
        onSubmit={addRecipe}
        formName={"add-recipe"}
        onAddUrl={handleAddUrl}
        imageUrl={imageUrl}
      />
    </>
  );
}
