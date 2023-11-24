import { useState } from "react";
import {
  StyledForm,
  StyledDiv,
  StyledInput,
  StyledIngredientsSection,
  StyledButton,
  StyledDeleteIngredientButton,
  StyledDivButton,
} from "./FormularStyling.js";
import FormularIngredients from "./FormularIngredients.js";
import { StyledLink } from "../StyledLink.js";

export default function RecipeForm({ onSubmit, formName, defaultData }) {
  const [ingredients, setIngredients] = useState(defaultData?.ingredients || []
  );

  function handleAddIngredient(newIngredient) {
    setIngredients([...ingredients, newIngredient]);
  }
  function handleDeleteIngredient(ingredientId) {
    const updatedIngredients = ingredients.filter(
      (ingredient) => ingredient.ingredientID !== ingredientId
    );

    setIngredients(updatedIngredients);
    ingredient.focus();
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
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={defaultData?.title}
          />
        </StyledInput>

        <StyledInput>
          <label htmlFor="preparation"> Preparation:{" "}
            <select name="preparation" id="preparation" defaultValue={defaultData?.preparation}>
            <option value="none">none</option>
              <option value="Microwave">Microwave</option>
              <option value="Oven">Oven</option>
              <option value="Stove">Stove</option>
              <option value="Grill">Grill</option>
            </select>
          </label>
        </StyledInput>

        <StyledInput>
            <label htmlFor="type"> Type:{" "}
            <select name="type" id="type" defaultValue={defaultData?.type} >
            <option value="none">none</option>
              <option value="Cake">Cake</option>
              <option value="Dish">Dish</option>
              <option value="Soup">Soup</option>
              <option value="Salad">Salad</option>
              <option value="ColdDish">Cold Dish</option>
              <option value="Cookies">Cookies</option>
              <option value="Drinks">Drinks</option>
              <option value="Fingerfood">Fingerfood</option>
            </select>
          </label>
        </StyledInput>

        <StyledInput>
          <label htmlFor="time">Time: </label>
          <input
            id="time"
            name="time"
            type="text"
            defaultValue={defaultData?.time}
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="servings">Servings: </label>
          <input
            defaultValue={defaultData?.servings}
            id="servings"
            name="servings"
            type="number"
            min="1"
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="instruction">Instructions: </label>
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
        <p>Added Ingredients: </p>
        <ul>
          {ingredients.map((ingredient) => {
            return (
              <li key={ingredient.ingredientID}>
                {ingredient.name} {""} {ingredient.amount}
                {ingredient.unit}
                <StyledDeleteIngredientButton
                  onClick={() =>
                    handleDeleteIngredient(ingredient.ingredientID)
                  }
                >
                  X
                 
                </StyledDeleteIngredientButton>
               
              </li>
            );
          })}
        </ul>
      </StyledIngredientsSection>

<StyledDivButton>
  
 <StyledLink $justifySelf="start" href={"/"}>
      back without changes
      </StyledLink>
      <StyledButton type="submit" form="recipeForm">
      {defaultData ? "Update Recipe" : "Add Recipe"}
      </StyledButton>
    </StyledDivButton>
      
    </StyledDiv>
  );
}
