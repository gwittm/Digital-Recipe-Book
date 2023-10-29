import Ingredient from "./Ingredient";
import { useState } from "react";
import IngredientsForm from "./IngredientsForm";

const ingredients = [
  {
    id: "432",
    ingredientname: "flour",
    amount: "500",
    unit: "g",
  },
  {
    id: "435",
    ingredientname: "milk",
    amount: "500",
    unit: "ml",
  },
  {
    id: "654w6",
    ingrdientname: "Bakingpowder",
    amount: "1",
    unit: "",
  },
];

export default function IngredientsContainer({}) {
  const [formIngredients, setFormIngredients] = useState([ingredients]);

  function handleAddIngredient(newIngredient) {
    console.log(newIngredient);
    setFormIngredients([...formIngredients, { id: uid(), ...newIngredient }]);
  }

  return (
    <>
      <p>Your needed ingredients</p>
      {/*       <IngredientsForm onAddIngredient={handleAddIngredient} />
      <Ingredient ingredients={formIngredients} /> */}
    </>
  );
}
