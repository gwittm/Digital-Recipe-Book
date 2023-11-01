import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import Form from "../../../components/Form.js";
import { StyledLink } from "../../../components/StyledLink.js";

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: recipe, isLoading, error } = useSWR(`/api/recipes/${id}`);
  async function editRecipe(recipe) {
    const response = await fetch(`/api/recipes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    if (response.ok) {
      router.push("/");
    }
  }
  if (!isReady || isLoading || error) return <h2>Loading...</h2>;
  return (
    <>
      <h2 id="edit-recipe">Edit Recipe</h2>
      <Link href={`/recipes/${id}`} passHref legacyBehavior>
        <StyledLink $justifySelf="start">back</StyledLink>
      </Link>
      <Form
        onSubmit={editRecipe}
        formName={"edit-recipe"}
        defaultData={recipe}
      />
    </>
  );
}
