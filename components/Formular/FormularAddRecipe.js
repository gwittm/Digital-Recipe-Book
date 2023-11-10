import { useState } from "react";

import {
  StyledForm,
  StyledDiv,
  StyledInput,
  StyledButton,StyledIngredientsSection,
} from "./FormularStyling.js";
import FormularIngredients from "./FormularIngredients.js";

export default function RecipeForm({ onSubmit, formName, defaultData }) {
  const [ingredients, setIngredients] = useState([]);
  
  function handleAddIngredient(newIngredient) {
    setIngredients([...ingredients, newIngredient]);
  }
  function handleDeleteIngredient(ingredientId) {
    const updatedIngredients = ingredients.filter(
      (ingredient) => ingredient.ingredientId !== ingredientId
    );
    setIngredients(updatedIngredients);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit({ ...data, ingredients });
  }

  return (
    <StyledDiv>
      <StyledForm
        aria-labelledby={formName}
        id="recipeForm"
        onSubmit={handleSubmit}
      >
        <StyledInput>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={defaultData?.title}
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="preparation">
            preparation:
            <select name="preparation" defaultValue="Oven">
              <option value="Oven">Oven</option>
              <option value="Microwave">Microwave</option>
              <option value="Stove">Stove</option>
              <option value="Grill">Grill</option>
            </select>
          </label>
        </StyledInput>
        <StyledInput>
          <label htmlFor="course" defaultValue="Cake">
            Course:
            <select name="course" defaultValue="Cake">
              <option value="Cake">Cake</option>
              <option value="Dish">Dish</option>
              <option value="Soup">Soup</option>
              <option value="Salad">Salad</option>
              <option value="Cookies">Cookies</option>
              <option value="Drinks">Drinks</option>
              <option value="Fingerfood">Fingerfood</option>
            </select>
          </label>
        </StyledInput>
        <StyledInput>
          <label htmlFor="time">Time:</label>
          <input
            id="time"
            name="time"
            type="text"
            defaultValue={defaultData?.time}
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="servings">Servings:</label>
          <input
            defaultValue="1"
            id="servings"
            name="servings"
            type="number"
            min="1"
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="instruction">Instuction</label>
          <textarea
            name="instruction"
            id="instruction"
            cols="40"
            rows="10"
            defaultValue={defaultData?.instruction}
          ></textarea>
        </StyledInput>
      </StyledForm>

      <FormularIngredients onAddIngredient={handleAddIngredient} />

 <StyledIngredientsSection>
        <p>added Ingredients:</p>
        <ul>
          {ingredients.map((ingredient) => {
            return (
              <li key={ingredient.ingredientId}>
                {ingredient.name}
                {ingredient.amount}
                {ingredient.unit}
                <button onClick={() => handleDeleteIngredient(ingredient.ingredientId)}>X</button>
              </li>
            );
          })}
        </ul>
      </StyledIngredientsSection>
      <StyledButton type="submit" form="recipeForm" onSubmit={handleSubmit}>
        Add new Recipe
      </StyledButton>
      <br />
    </StyledDiv>
  );
}
