import { useState } from "react";
import {
  StyledForm,
  StyledDiv,
  StyledInput,
  StyledIngredientsSection,
  StyledButton,
} from "./FormularStyling.js";
import FormularIngredients from "./FormularIngredients.js";

export default function RecipeForm({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit({ ...data /* ingredients  */ });
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
            <select name="preparation" id="preparation" defaultValue="Oven">
              <option value="Oven">Oven</option>
              <option value="Microwave">Microwave</option>
              <option value="Stove">Stove</option>
              <option value="Grill">Grill</option>
            </select>
          </label>
        </StyledInput>
        <StyledInput>
          <label htmlFor="course">
            Course:
            <select name="course" defaultValue="Cake" id="course">
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
          <label htmlFor="instruction">Instuctions: </label>
          <textarea
            name="instruction"
            id="instruction"
            cols="40"
            rows="10"
            defaultValue={defaultData?.instruction}
          ></textarea>
        </StyledInput>
      </StyledForm>
      <FormularIngredients onSubmit={handleSubmit} />

      <StyledButton type="submit" form="recipeForm" onSubmit={handleSubmit}>
        Add new Recipe
      </StyledButton>
      <br />
    </StyledDiv>
  );
}
