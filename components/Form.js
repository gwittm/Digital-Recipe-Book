import styled from "styled-components";
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
  background-color: rgb(247, 240, 240);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;

const StyledIngredientsSection = styled.section`
  background-color: rgb(247, 240, 240);
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

const StyledButton = styled.button`
  background-color: hotpink;
  width: 480px;
  margin: 10px;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  align-item: center;
`;

export default function RecipeForm({ onSubmit, formName, defaultData }) {
  const [ingredients, setIngredients] = useState([]);
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

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setIngredients([
            ...ingredients,
            {
              ingredientId: nanoid(),
              name: event.target.elements.ingredient.value,
              amount: event.target.elements.amount.value,
              unit: event.target.elements.unit.value,
            },
          ]);
        }}
      >
        {" "}
        <p>Add ingredients:</p>
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
            <select id="unit" name="unit">
              <option value="g">g</option>
              <option value="l">l</option>
              <option value="cl">cl</option>
              <option value="ml">ml</option>
              <option value="tbsp">tbsp</option>
              <option value="tsp">tsp</option>
              <option value="pt">pt</option>
              <option value="cup">cup</option>
              <option value="pcs">pcs</option>
              <option value="pn">pn</option>
            </select>
          </StyledIngredientInput>
          <button>+</button>
        </StyledIngredientsSection>
      </form>
      <StyledIngredientsSection>
        <p>added Ingredients:</p>
        <ul>
          {ingredients.map((ingredient) => {
            return (
              <li key={ingredient.ingredientId}>
                {ingredient.name}
                {ingredient.amount}
                {ingredient.unit}
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
