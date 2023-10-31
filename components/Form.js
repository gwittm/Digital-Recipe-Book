import styled from "styled-components";
import StyledIngredientsForm from "./IngredientsForm";
import { useState } from "react";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5 rem;
  flex-direction: column;
  border: solid black, 1em;
  padding: 1 em;
`;

export default function FormularRecipe({ onSubmit, formName, defaultData }) {
  const [ingredientsList, setIngredientsList] = useState([]);

  function handleAddIngredient(newIngredientData) {
    setIngredientsList([
      ...ingredientsList,
      { id: uuidv4(), ...newIngredientData },
    ]);

    onSubmit({
      ingredients: ingredientsList,
      ...newIngredientData,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit({ ...data, ingredients: ingredientsList });
  }

  return (
    <>
      <StyledForm aria-labelledby={formName} onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={defaultData?.title}
        />
        <label>
          preparation:
          <select name="preparation" defaultValue="Oven">
            <option value="Oven">Oven</option>
            <option value="Microwave">Microwave</option>
            <option value="Stove" selected="selected">
              Stove
            </option>
            <option value="Grill">Grill</option>
          </select>
        </label>
        <label htmlFor="course" defaultValue="Cake">
          Course:
          <select name="course">
            <option value="Cake">Cake</option>
            <option value="Dish">Dish</option>
          </select>
        </label>
        <label htmlFor="time" defaultValue="01:00">
          Time:
        </label>
        <input
          id="time"
          name="time"
          type="time"
          defaultValue={defaultData?.neededTime}
        />
        <label htmlFor="servings" defaultValue="1">
          Servings:
        </label>
        <input
          id="servings"
          name="servings"
          type="number"
          defaultValue={defaultData?.servings}
        />
        <StyledIngredientsForm
          onAddIngredient={handleAddIngredient}
          name="ingredients"
          type="input"
          id="ingredients"
        />
        <label htmlFor="instruction">Instuction</label>
        <textarea
          name="instruction"
          id="instruction"
          cols="20"
          rows="10"
          defaultValue={defaultData?.instruction}
        ></textarea>
        <button type="submit">
          {defaultData ? "Update recipe" : "Add recipe"}{" "}
        </button>
      </StyledForm>
    </>
  );
}
