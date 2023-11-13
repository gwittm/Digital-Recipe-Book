import {
    StyledIngredientsSection,
    StyledIngredientInput,
  } from "./FormularStyling.js";
  import { nanoid } from "nanoid";
  import { useRef } from "react";

export default function FormularIngredients({ onAddIngredient, inputRef}) {
  const ingredientRef = useRef(null);
  const amountRef = useRef(null);
  const unitRef = useRef(null);

    return (
        <form
        onSubmit={(event) => {
          event.preventDefault();
          onAddIngredient({
            ingredientId: nanoid(),
            name: ingredientRef.current.value,
            amount: amountRef.current.value,
            unit: unitRef.current.value,
          });
          
          ingredientRef.current.value = "";
          amountRef.current.value = "";
          unitRef.current.value = "";
      
          if (inputRef && inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <p>Add ingredients:</p>
        <StyledIngredientsSection>
          <StyledIngredientInput>
            <label htmlFor="ingredient">Ingredient:</label>
            <input name="ingredient" type="text" id="ingredient" ref={ingredientRef} />
          </StyledIngredientInput>
          <StyledIngredientInput>
            <label htmlFor="amount">Amount:</label>
            <input name="amount" type="number" min="1" id="amount" ref={amountRef} />
          </StyledIngredientInput>
          <StyledIngredientInput>
            <label htmlFor="unit">Unit:</label>
            <select id="unit" name="unit" ref={unitRef}>
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
    );
  }
  
  
  
  


