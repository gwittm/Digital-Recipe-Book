import styled from "styled-components";
import StyledIngredientsForm from "./IngredientsForm";
import { useState } from "react";
import { nanoid } from "nanoid";

const StyledForm = styled.form`
  display: flex;
  align-items: left;
  gap: 0.5 rem;
  flex-direction: column;
  border: solid black, 1em;
  padding: 1 em;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 1px solid pink;
`;

const StyledInput = styled.div`
  background-color: lightgrey;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;

const StyledIngredientsSection = styled.section`
  background-color: lightgrey;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  gap: 5px;
`;

const StyledIngredientInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

export default function FormularRecipe({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  const [ingredients, setIngredients] = useState([]);

  /* function handleAddIngredient(newIngredientData) {
    setIngredientsList([
      ...ingredientsList,
      { id: uuidv4(), ...newIngredientData },
    ]);

    onsubmit({
      ingredients: ingredientsList,
      ...newIngredientData,
    });
  }*/

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
          <label>
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
              <option value="Fingerfood">Fingerfood</option>
            </select>
          </label>
        </StyledInput>
        <StyledInput>
          <label htmlFor="time" defaultValue="01:00">
            Time:
          </label>
          <input
            id="time"
            name="time"
            type="time"
            defaultValue={defaultData?.neededTime}
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="servings" defaultValue="1">
            Servings:
          </label>
          <input
            id="servings"
            name="servings"
            type="number"
            min="1"
            defaultValue={defaultData?.servings}
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

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setIngredients([
            ...ingredients,
            {
              id: nanoid(),
              name: event.target.elements.ingredient.value,
              amount: event.target.elements.amount.value,
              unit: event.target.elements.unit.value,
            },
          ]);
        }}
      >
        <StyledIngredientsSection>
          <StyledIngredientInput>
            <label htmlFor="ingredient">Ingredient:</label>
            <input name="ingredient" type="text" id="ingredient" />
          </StyledIngredientInput>
          <StyledIngredientInput>
            <label htmlFor="amount">Amount:</label>
            <input name="amount" type="number" min="1" id="amount" />
          </StyledIngredientInput>
          <StyledIngredientInput>
            <label htmlFor="unit">Unit:</label>
            <select name="unit">
              <option value="ml">ml</option>
              <option value="l">l</option>
              <option value="g">g</option>
              <option value="tsp">tsp</option>
            </select>
          </StyledIngredientInput>
          <button>add</button>
        </StyledIngredientsSection>
      </form>
      <StyledIngredientsSection>
        <p>added Ingredients:</p>
        <ul>
          {ingredients.map((ingredient) => {
            return (
              <li key={ingredient.id}>
                {ingredient.name}
                {ingredient.amount}
                {ingredient.unit}
              </li>
            );
          })}
        </ul>
      </StyledIngredientsSection>
      <button type="submit" form="recipeForm" onSubmit={handleSubmit}>
        submit
      </button>
      <br />
    </StyledDiv>
  );
}
