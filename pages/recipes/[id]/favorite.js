import { useRouter } from "next/router";
import useSWR from "swr";
import RecipeForm from "../../../components/Formular/FormularAddRecipe";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";



export default function FavoritePage() {
    const router = useRouter();
    const { id } = router.query;
    const { data: recipe, isLoading, error} = useSWR(id ?`/api/recipes/${id}` : null);
    const [isFavorite, setIsFavorite] = useState(recipe?.isFavorite || false);
    
    
    const handleClick = () => {
      setIsFavorite(!isFavorite);
    };
    
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
      <div>
      <button
        type="button"
        onClick={(event) => {
          handleClick(event);
        }}
        aria-label="favorite"
      >
        {isFavorite? (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FF4A11"
              stroke="#FF4A11"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="#252629"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
     <h1 id="favorite-recipe">All my Favorite Recipes</h1>
          
          <RecipeForm onSubmit={editFavoriteRecipe} formName={"favorite-recipe"} defaultData={recipe}/>
        </>
      );
     
    }

