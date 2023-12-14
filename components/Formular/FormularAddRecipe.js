import { useState } from "react";
import {
  StyledDiv,
  StyledH2AddandEdit,
  StyledInputLabelFlex,
} from "./FormularStyling";
import { StyledForm } from "./FormularStyling";
import { StyledLabel } from "./FormularStyling";
import { StyledInputandLabel } from "./FormularStyling";
import { StyledInput } from "./FormularStyling";
import FormularIngredients from "./FormularIngredients";
import { StyledIngredientsSection } from "./FormularStyling";
import { StyledDetailsItemIngredientsUl } from "../StyledDetailsPage";
import ImageUpload from "../ImageUpload/ImageUpload.js";
import { StyledDivButton } from "./FormularStyling";
import { StyledLink } from "../StyledLink";
import { StyledButton } from "./FormularStyling";
import { StyledIngredientName } from "../StyledDetailsPage";
import { StyledIngredientAmountUnit } from "../StyledDetailsPage";
import { StyledDeleteIngredientButton } from "./FormularStyling";
import { StyledSelect } from "./FormularStyling";
import { StyledTypePreparationFlex } from "./FormularStyling";
import { StyledSpan } from "../StyledDetailsPage";
import { StyledP } from "../StyledDetailsPage";
import { StyledItemsBox } from "../StyledDetailsPage";
import { StyledDetailsItemFormular } from "./FormularStyling";
import { StyledAddedIngredientsSection } from "./FormularStyling";
import { StyledPSubtitle } from "./FormularIngredients";
import { StyledDetailsItemIngredientLi } from "./FormularStyling";
import Image from "next/image";
import styled from "styled-components";
import { StyledLinkRecipeBack } from "../StyledLink";

export default function RecipeForm({ onSubmit, formName, defaultdata }) {
  const [image, setImage] = useState(defaultdata?.image || null);
  const [ingredients, setIngredients] = useState(
    defaultdata?.ingredients || []
  );

  function handleAddImage(newImage) {
    setImage(newImage);
  }

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

    onSubmit({ ...data, ingredients, image });
  }

  return (
    <StyledDiv>
      <StyledH2AddandEdit>Add your new recipe</StyledH2AddandEdit>
      <StyledImageFormular
        src="/Anime_Pastel_Dream_In_the_corner_of_a_quaint_kitchen_a_welllov_3.jpeg"
        width="280"
        height="100"
      />
      <StyledForm
        aria-labelledby={formName}
        id="recipeForm"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <StyledInputandLabel>
          <StyledLabel htmlFor="title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path d="M176 56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24zm24 48h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zM56 176H72c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24zM0 283.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4zM224 200c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24zm-96 0c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H104c-13.3 0-24-10.7-24-24s10.7-24 24-24zm216 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24zm120 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H392c-13.3 0-24-10.7-24-24s10.7-24 24-24zM296 32h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
            </svg>{" "}
            Title
          </StyledLabel>
          <StyledInput
            id="title"
            name="title"
            type="text"
            defaultValue={defaultdata?.title}
          />
        </StyledInputandLabel>

        <StyledInputandLabel>
          <StyledLabel htmlFor="preparation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="18"
              viewBox="0 0 576 512"
            >
              <path d="M240 144A96 96 0 1 0 48 144a96 96 0 1 0 192 0zm44.4 32C269.9 240.1 212.5 288 144 288C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112h71.8c8.8-9.8 21.6-16 35.8-16H496c26.5 0 48 21.5 48 48s-21.5 48-48 48H392c-14.2 0-27-6.2-35.8-16H284.4zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM400 240c13.3 0 24 10.7 24 24v8h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h96v-8c0-13.3 10.7-24 24-24zM288 464V352H512V464c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48zM48 320h80 16 32c26.5 0 48 21.5 48 48s-21.5 48-48 48H160c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V336c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160v32h16zM24 464H200c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
            </svg>{" "}
            Prepared with
            <StyledSelect
              name="preparation"
              id="preparation"
              defaultValue={defaultdata?.preparation}
            >
              <option value="none">none</option>
              <option value="Microwave">Microwave</option>
              <option value="Oven">Oven</option>
              <option value="Stove">Stove</option>
              <option value="Grill">Grill</option>
              <option value="none">none</option>
            </StyledSelect>
          </StyledLabel>
        </StyledInputandLabel>

        <StyledInputandLabel>
          <StyledLabel htmlFor="type">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
            </svg>{" "}
            Type
            <StyledSelect
              name="type"
              id="type"
              defaultValue={defaultdata?.type}
            >
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
            </StyledSelect>
          </StyledLabel>
        </StyledInputandLabel>

        <StyledInputandLabel>
          <StyledLabel htmlFor="time">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>{" "}
            needed time
          </StyledLabel>
          <StyledInput
            id="time"
            name="time"
            type="text"
            defaultValue={defaultdata?.time}
          />
        </StyledInputandLabel>

        <StyledInputandLabel>
          {" "}
          <StyledLabel htmlFor="servings">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="10"
              viewBox="0 0 320 512"
            >
              <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
            </svg>{" "}
            Servings
          </StyledLabel>
          <StyledInput
            defaultValue={defaultdata?.servings}
            id="servings"
            name="servings"
            type="number"
            min="1"
          />
        </StyledInputandLabel>

        <StyledInputandLabel>
          <StyledLabel htmlFor="instruction">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>{" "}
            Prepartion
          </StyledLabel>
          <textarea
            name="instruction"
            id="instruction"
            cols="20"
            rows="10"
            defaultValue={defaultdata?.instruction}
          ></textarea>
        </StyledInputandLabel>
      </StyledForm>
      <FormularIngredients onAddIngredient={handleAddIngredient} />
      <StyledAddedIngredientsSection>
        <StyledPSubtitle>Added Ingredients: </StyledPSubtitle>
        <StyledDetailsItemIngredientsUl>
          {ingredients.map((ingredient) => {
            return (
              <StyledDetailsItemIngredientLi key={ingredient.ingredientID}>
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
              </StyledDetailsItemIngredientLi>
            );
          })}
        </StyledDetailsItemIngredientsUl>
      </StyledAddedIngredientsSection>
      <ImageUpload
        onAddImage={handleAddImage}
        image={image}
        title={defaultdata?.title}
      />
      <StyledDivButton>
        <StyledLinkRecipeBack $justifySelf="start" href={"/"}>
          {" "}
          back without changes
        </StyledLinkRecipeBack>
        <StyledButton type="submit" form="recipeForm">
          {defaultdata ? "Update Recipe" : "Add Recipe"}
        </StyledButton>
      </StyledDivButton>
    </StyledDiv>
  );
}

export const StyledFormularImage = styled(Image)`
  object-fit: cover;
  border-radius: 50px;
`;

export const StyledImageFormular = styled(Image)`
  border-radius: 5px;
  padding-top: 0;
`;
