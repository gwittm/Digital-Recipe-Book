import styled from "styled-components";
import React, { useState } from "react";

const StyledIngredientsForm = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-direction: row;
  border: 1px solid black;
  padding: 1em;
`;

export default function IngredientsFormular({ onSubmit, defaultData }) {
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
      <h2>add ingredients</h2>
      <button type="button" onClick={addForm}>
        +
      </button>
      {formInstances.map((index) => (
        <div key={index}>
          <StyledIngredientsForm
            aria-labelledby="ingredients"
            onSubmit={handleSubmit}
          >
            <label htmlFor="what">What</label>
            <input
              id="what"
              name="what"
              type="text"
              placeholder="Mehl"
              defaultValue={defaultData?.what}
            />
            <label htmlFor="amount">amount</label>
            <input
              id="amount"
              name="amount"
              type="number"
              placeholder="500"
              defaultValue={defaultData?.amount}
            />
            <label htmlFor="unit">unit:</label>
            <select name="unit" id="unit">
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
          </StyledIngredientsForm>
        </div>
      ))}
    </div>
  );
}
