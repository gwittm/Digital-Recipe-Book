import { useState } from "react";
import {
  StyledForm,
  StyledDiv,
  StyledInput,
  StyledInputandLabel,
  StyledLabel,
  StyledIngredientsSection,
  StyledButton,
  StyledDeleteIngredientButton,
  StyledDivButton,
  StyledDetailsItemIngredientFormularLi,
} from "./FormularStyling.js";
import FormularIngredients from "./FormularIngredients.js";
import { StyledLink } from "../StyledLink.js";
import {
  StyledDetailsItemIngredientsUl,
  StyledIngredientAmountUnit,
  StyledSpan,
} from "../StyledDetailsPage.js";
import { StyledIngredientName } from "../StyledDetailsPage.js";

export default function RecipeForm({ onSubmit, formName, defaultData }) {
  const [ingredients, setIngredients] = useState(
    defaultData?.ingredients || []
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
        <StyledInputandLabel>
          <StyledLabel htmlFor="title">Title: </StyledLabel>
          <StyledInput
            id="title"
            name="title"
            type="text"
            defaultValue={defaultData?.title}
          />
        </StyledInputandLabel>
        <StyledInputandLabel>
          <StyledLabel htmlFor="preparation">
            {" "}
            Preparation:{" "}
            <select
              name="preparation"
              id="preparation"
              defaultValue={defaultData?.preparation}
            >
              <option value="none">none</option>
              <option value="Microwave">Microwave</option>
              <option value="Oven">Oven</option>
              <option value="Stove">Stove</option>
              <option value="Grill">Grill</option>
              <option value="none">none</option>
            </select>
          </StyledLabel>
        </StyledInputandLabel>
        <StyledInputandLabel>
          <StyledLabel htmlFor="type">
            {" "}
            Type:{" "}
            <select name="type" id="type" defaultValue={defaultData?.type}>
              <option value="none">none</option>
              <option value="Cake">Cake</option>
              <option value="Dish">Dish</option>
              <option value="Soup">Soup</option>
              <option value="Salad">Salad</option>
              <option value="ColdDish">Cold Dish</option>
              <option value="Cookies">Cookies</option>
              <option value="Drinks">Drinks</option>
              <option value="Fingerfood">Fingerfood</option>
              <option value="other">Other</option>
            </select>
          </StyledLabel>
        </StyledInputandLabel>
        <StyledInputandLabel>
          <StyledLabel htmlFor="time">Time: </StyledLabel>
          <StyledInput
            id="time"
            name="time"
            type="text"
            defaultValue={defaultData?.time}
          />
        </StyledInputandLabel>
        <StyledInputandLabel>
          <StyledLabel htmlFor="servings">Servings: </StyledLabel>
          <StyledInput
            defaultValue={defaultData?.servings}
            id="servings"
            name="servings"
            type="number"
            min="1"
          />
        </StyledInputandLabel>
        <StyledInputandLabel>
          <StyledLabel htmlFor="instruction">Instructions: </StyledLabel>
          <textarea
            name="instruction"
            id="instruction"
            cols="40"
            rows="10"
            defaultValue={defaultData?.instruction}
          ></textarea>
        </StyledInputandLabel>{" "}
      </StyledForm>
      <FormularIngredients onAddIngredient={handleAddIngredient} />
      <StyledIngredientsSection>
        <p>Added Ingredients: </p>
        <StyledDetailsItemIngredientsUl>
          {ingredients.map((ingredient) => {
            return (
              <StyledDetailsItemIngredientFormularLi
                key={ingredient.ingredientID}
              >
                <StyledIngredientName>{ingredient.name}</StyledIngredientName>
                <StyledIngredientAmountUnit>
                  {ingredient.amount}
                  {ingredient.unit}
                </StyledIngredientAmountUnit>

                <StyledDeleteIngredientButton
                  onClick={() =>
                    handleDeleteIngredient(ingredient.ingredientID)
                  }
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      fill="#423530"
                    >
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  </span>
                </StyledDeleteIngredientButton>
              </StyledDetailsItemIngredientFormularLi>
            );
          })}
        </StyledDetailsItemIngredientsUl>
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
