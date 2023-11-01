import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const StyledIngredientsForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 1px solid;
  padding: 1 em;
`;

const StyledIngredientDiv = styled.div`
  border: 1px solid;
  background-color: grey;
  margin: 5px;
  padding: 10px;
`;

export default function IngredientsForm({ onAddIngredient }) {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [newIngredient, setNewIngredient] = useState({
    ingredient: "",
    amount: "",
    unit: "ml",
  });

  //from ChatGPT... not yet working
  const handleAddIngredientClick = () => {
    if (newIngredient.ingredient) {
      // Checking if the ingredient is not empty
      onAddIngredient(newIngredient);
      setNewIngredient({
        ingredient: "",
        amount: "",
        unit: "ml",
      });
    }
  };

  function handleAddIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newIngredientData = Object.fromEntries(formData);
    console.log("test", newIngredientData);

    setIngredientsList([
      ...ingredientsList,
      { id: uuidv4(), ...newIngredientData },
    ]);
    event.target.reset();
    onAddIngredient(newIngredientData);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewIngredient({
      ...newIngredient,
      [name]: value,
    });
  }

  return (
    <StyledIngredientDiv>
      <h5>Add your ingredients</h5>
      <StyledIngredientsForm onSubmit={handleAddIngredient}>
        <div>
          <label htmlFor="ingredient">Ingredient:</label>
          <input
            type="text"
            name="ingredient"
            id="ingredient"
            value={newIngredient.ingredient}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="1"
            name="amount"
            id="amount"
            value={newIngredient.amount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="unit">Unit</label>
          <select
            name="unit"
            value={newIngredient.unit}
            onChange={handleInputChange}
          >
            <option value="ml">ml</option>
            <option value="l">l</option>
            <option value="g">g</option>
            <option value="tsp">tsp</option>
          </select>
        </div>
        <Button type="button" onClick={handleAddIngredientClick}>
          Add
        </Button>
      </StyledIngredientsForm>
      <IngredientsContainer ingredients={ingredientsList} />
    </StyledIngredientDiv>
  );
}
