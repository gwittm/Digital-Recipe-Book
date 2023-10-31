import Ingredient from "./Ingredient";
import { Fragment } from "react";
import Divider from "./Divider";

export default function IngredientsContainer({ ingredients }) {
  return (
    <div>
      {ingredients.map((ingredientItem, index) => (
        <Fragment key={ingredientItem.id}>
          {index > 0 && <Divider />}
          <Ingredient
            ingredient={ingredientItem.ingredient}
            amount={ingredientItem.amount}
            unit={ingredientItem.unit}
            id={ingredientItem.id}
          />
        </Fragment>
      ))}
    </div>
  );
}
