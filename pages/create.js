import FormularRecipe from "@/components/FormularAddRecipe";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function CreateRecipePage() {
  const { mutate } = useSWR("/api/myrecipes");
  const router = useRouter();
  async function addRecipe(myrecipe) {
    const response = await fetch("/api/myrecipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myrecipe),
    });
    if (isLoading) {
      return <h1>is loading...</h1>;
    }
    if (!data) {
      return;
    }
    if (response.ok) {
      mutate();
      router.push("/");
    }
  }
  return (
    <>
      <h2 id="add-myrecipe">Add Recipe</h2>
      <Link href="/" passHref legacyBehavior>
        <Link>back</Link>
      </Link>
      <FormularRecipe onSubmit={addRecipe} formName={"add-myrecipe"} />
    </>
  );
}
