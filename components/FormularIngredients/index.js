import {
  StyledIngredientsSection,
  StyledIngredientInput,
} from "../FormularAddRecipe/FormStyle.js";
import { nanoid } from "nanoid";

export default function FormularIngredients({ onAddIngredient }) {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onAddIngredient({
            ingredientId: nanoid(),
            name: event.target.elements.ingredient.value,
            amount: event.target.elements.amount.value,
            unit: event.target.elements.unit.value,
          });
        }}
      >
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

          <button type="submit">+</button>
        </StyledIngredientsSection>
      </form>
    </>
  );
}
