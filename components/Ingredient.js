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

export default function Ingredient({ unit, amount, id, ingredientname }) {
  return (
    <>
      <h2>your ingredients:</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={id}>
            <p>name ={ingredientname}</p>
            <p>amount={amount}</p>
            <p>unit={unit}</p>
          </li>
        ))}
      </ul>
    </>
  );

  {
    /* {formIngredients.map((ingredient) => (
        <Fragment key={ingredient.id}>
          <Ingredient id={ingredient.id} title={ingredient.ingredient} />
        </Fragment>
      ))} */
  }
}
