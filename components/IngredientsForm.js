import styled from "styled-components";
import React, { useState } from "react";
import IngredientsContainer from "./IngredientsContainer";
import { uid } from "uid";

const StyledIngredientsForm = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5 rem;
  flex-direction: row;
  border: solid black, 1em;
  padding: 1 em;
`;

const StyledIngredientDiv = styled.div`
  border: solid black, 1em;
  background-color: grey;
  margin: 5px;
  padding: 10px;
`;

const StyledButton = styled.button`
  background-color: hotpink;
  width: 30px;
  margin: 10px;
  height: 35px;
  width: 35px;
`;

/*export default function IngredientsFormular({
  onSubmit,
  formName,
  defaultData,
}) {
  const [formInstances, setFormInstances] = useState([0]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  function addForm() {
    setFormInstances([...formInstances, formInstances.length]);
  }

  return (
    <div>
      {formInstances.map((instance, ingredients) => (
        <div key={ingredients}>
          <h2>{formName}</h2>
          <StyledIngredientsForm
            aria-labelledby={formName}
            onSubmit={handleSubmit}
          >
            <label htmlFor={`what${instance}`}>What</label>
            <input
              id={`what${instance}`}
              name={`what${instance}`}
              type="text"
              placeholder="Mehl"
              defaultValue={defaultData?.what}
            />
            <label htmlFor={`amount${instance}`}>amount</label>
            <input
              id={`amount${instance}`}
              name={`amount${instance}`}
              type="number"
              placeholder="500"
              defaultValue={defaultData?.amount}
            />
            <label htmlFor={`unit${instance}`}>unit:</label>
            <select name={`unit${instance}`} id={`unit${instance}`}>
              <option value="g" selected="selected">
                g
              </option>
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
          </StyledIngredientsForm>
        </div>
      ))}
      <button type="button" onClick={addForm}>
        +
      </button>
    </div>
  );
}
 */

export default function IngredientsForm({ onAddIngredient }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddIngredient(data);
    event.target.reset();
  }
  const [formIngredients, setFormIngredients] = useState(0);

  function handleAddIngredient(newIngredient) {
    setFormIngredients([{ id: uid(), newIngredient }, ...formIngredients]);
  }

  return (
    <StyledIngredientDiv>
      <h5>Add your ingredients</h5>
      <StyledIngredientsForm onSubmit={handleSubmit}>
        <p>
          <label htmlFor="ingredient">What</label>
          <input
            id="ingredient"
            name="ingredient"
            type="text"
            placeholder="Mehl"
          />
        </p>
        <p>
          <label htmlFor="amount">How much</label>
          <input id="amount" name="amount" type="number" placeholder="250" />
        </p>
        <p>
          <label htmlFor="unit">Unit</label>
          <select name="unit">
            <option value="g" selected="selected">
              g
            </option>
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
        </p>
        <StyledButton type="button" onClick={onAddIngredient}>
          +
        </StyledButton>
      </StyledIngredientsForm>
      <IngredientsContainer />
    </StyledIngredientDiv>
  );
}
