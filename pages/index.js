import useSWR from "swr";

export default function Home() {
  const { data } = useSWR("/api/recipes", { fallbackData: [] });
  return (
    <>
      <h1>Rezepte</h1>
      <ul>
        {data.map((recipes) => {
          return <li key={recipes._id}>{recipes.title}</li>;
        })}
      </ul>
    </>
  );
}
