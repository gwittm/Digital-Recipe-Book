import { Fragment } from "react";
import Ingredient from "./Ingredient";

export default function IngredientsContainer({ formIngredients }) {
  return (
    <section>
      <h5>Your needed ingredients</h5>
      {/* {formIngredients.map((ingredient) => (
        <Fragment key={ingredient.id}>
          <Ingredient id={ingredient.id} title={ingredient.ingredient} />
        </Fragment>
      ))} */}
    </section>
  );
}
