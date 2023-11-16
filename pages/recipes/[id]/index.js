import { StyledLink } from "@/components/StyledLink";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import {
  StyledHeader,
  StyledDetailsPageContainer,
  StyledDetailsItem,
  StyledItemsRow,
} from "@/components/StyledDetailsPage.js";
import Link from "next/link";


export default function DetailsPage() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: recipe, isLoading, error } = useSWR(`/api/recipes/${id}`);

  async function deleteRecipe() {
    await fetch(`/api/recipes/${id}`, {
      method: "DELETE",
    });
    setShowModal(false);
    router.push("/");
  }

  if (isLoading) return <h2>Loading...</h2>;
  if (error || !isReady) return <h2>An error occured...</h2>;

  return (
    <StyledDetailsPageContainer>
      <StyledHeader>
        <h2>{recipe.title}</h2>
      </StyledHeader>
      <StyledItemsRow>
        <StyledDetailsItem>Type: {recipe.course}</StyledDetailsItem>
        <StyledDetailsItem>Time: {recipe.time}</StyledDetailsItem>
        <StyledDetailsItem>
          Amount of Servings: {recipe.servings}
        </StyledDetailsItem>
        <StyledDetailsItem>Preparation: {recipe.preparation}</StyledDetailsItem>
      </StyledItemsRow>
      <StyledDetailsItem>
        <h4>Ingredients:</h4>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name}
              {":"} {ingredient.amount} {ingredient.unit}
            </li>
          ))}
        </ul>
      </StyledDetailsItem>
      <StyledDetailsItem>
        <h4>How to prepare it:</h4> {recipe.instruction}
      </StyledDetailsItem>
      <br />

      <StyledLink $justifySelf="start" href={"/"}>
        back
      </StyledLink>
      <div>
      <StyledLink href={`/recipes/${id}/edit`} passHref legacyBehavior>
            <Link>Edit</Link>
          </StyledLink>
      </div>
    </StyledDetailsPageContainer>
  );
}
