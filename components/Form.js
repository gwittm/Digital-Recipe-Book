import styled from "styled-components";
import IngredientsFormular from "./IngredientsForm";
import React from "react";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5 rem;
  flex-direction: column;
  border: solid black, 1em;
  padding: 1 em;
`;

export default function FormularRecipe({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("test", data);
    onSubmit(data);
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
        <label htmlFor="preparation">
          preparation:
          <select id="preparation" name="preparation">
            <option value="Oven">Oven</option>
            <option value="Microwave">Microwave</option>
            <option value="Stove">Stove</option>
            <option value="Grill">Grill</option>
          </select>
        </label>

        <label htmlFor="course">
          Course:
          <select id="course" name="course">
            <option value="Cake">Cake</option>
            <option value="Dish">Dish</option>
            <option value="Dessert">Dessert</option>
          </select>
        </label>

        <label htmlFor="time">Time:</label>
        <input
          id="time"
          name="time"
          type="text"
          defaultValue={defaultData?.time}
        />
        <label htmlFor="servings">Servings:</label>
        <input
          id="servings"
          name="servings"
          type="number"
          defaultValue={defaultData?.servings}
        />
        <IngredientsFormular />
        <label htmlFor="instruction">Instuction</label>
        <textarea
          name="instruction"
          id="instruction"
          cols="20"
          rows="10"
          defaultValue={defaultData?.instruction}
        ></textarea>
        <button type="submit">
          {defaultData ? "Update recipe" : "Add recipe"}
        </button>
      </StyledForm>
    </>
  );
}
