import Link from "next/link.js";
import { useRouter } from "next/router";
import Form from "../components/Form.js";

export default function CreateRecipePage() {
  const router = useRouter();
  async function addRecipe(recipe) {
    const response = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    console.log(response);
    if (response.ok) {
      router.push("/");
    }
  }
  return (
    <>
      <h2 id="add-recipe">Add Recipe</h2>
      <Link href="/" passHref legacyBehavior>
        <Link>back</Link>
      </Link>
      <Form onSubmit={addRecipe} formName={"add-recipe"} />
    </>
  );
}
