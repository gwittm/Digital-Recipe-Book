import Link from "next/link";
import useSWR from "swr";

export default function Home() {
  const { data: myrecipes } = useSWR("/api/myrecipes", { fallbackData: [] });
  return (
    <>
      <h1>Rezepte</h1>
      <ul>
        {myrecipes.map((myrecipe) => {
          return <li key={myrecipe._id}>{myrecipe.title}</li>;
        })}
      </ul>
      <Link href="/create" passHref legacyBehavior>
        <Link>+ recipe</Link>
      </Link>
    </>
  );
}
