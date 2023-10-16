import useSWR from "swr";

export default function Home() {
  const { data: recipes } = useSWR("/api/recipes", { fallbackData: [] });
  return (
    <>
      <h1>Rezepte</h1>
      <ul>
        {recipes.map((recipe) => {
          return <li key={recipe._id}>{recipe.title}</li>;
        })}
      </ul>
    </>
  );
}
