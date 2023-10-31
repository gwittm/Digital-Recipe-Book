export default function Ingredient({ ingredient, amount, unit, id }) {
  return (
    <article>
      <h2>your ingredients:</h2>
      <p>
        {amount}
        {unit} of {ingredient}
      </p>
    </article>
  );
}
