import {
  StyledIngredientsSection,
  StyledIngredientInput,
} from "./FormularStyling.js";
import { nanoid } from "nanoid";
import styled from "styled-components";

export default function FormularIngredients({ onAddIngredient }) {
  return (
    <StyledIngredientForm
      onSubmit={(event) => {
        event.preventDefault();
        onAddIngredient({
          ingredientID: nanoid(),
          name: event.target.elements.ingredient.value,
          amount: event.target.elements.amount.value,
          unit: event.target.elements.unit.value,
        });
        event.target.reset();
        ingredient.focus();
      }}
    >
      <StyledPSubtitle>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path d="M346.7 6C337.6 17 320 42.3 320 72c0 40 15.3 55.3 40 80s40 40 80 40c29.7 0 55-17.6 66-26.7c4-3.3 6-8.2 6-13.3s-2-10-6-13.2c-11.4-9.1-38.3-26.8-74-26.8c-32 0-40 8-40 8s8-8 8-40c0-35.7-17.7-62.6-26.8-74C370 2 365.1 0 360 0s-10 2-13.3 6zM244.6 136c-40 0-77.1 18.1-101.7 48.2l60.5 60.5c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-55.3-55.3 0 .1L2.2 477.9C-2 487-.1 497.8 7 505s17.9 9 27.1 4.8l134.7-62.4-52.1-52.1c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L199.7 433l100.2-46.4c46.4-21.5 76.2-68 76.2-119.2C376 194.8 317.2 136 244.6 136z" />
          </svg>
        </span>
        Add ingredients:
      </StyledPSubtitle>
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
          <label htmlFor="unit"> Unit:</label>
          <select id="unit" name="unit" defaultValue="unit">
            <option value="g">g</option>
            <option value="none">none</option>
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

        <button type="submit">+</button>
      </StyledIngredientsSection>
    </StyledIngredientForm>
  );
}

export const StyledIngredientForm = styled.form`
  background-color: var(--background-color);
  width: 280px;
  margin: 0 auto;
  margin-left: 10px;
  border-radius: 5px;
`;

export const StyledPSubtitle = styled.p`
  font-size: 15px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--title-color);
`;
