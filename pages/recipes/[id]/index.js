import { Modal } from "@/components/Modal/index.js";
import { useState } from "react";
import { StyledLink } from "@/components/StyledLink";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import {
  StyledHeader,
  StyledDetailsPageContainer,
  StyledDetailsItem,
  StyledItemsRow,
  EditDeleteDiv,
} from "@/components/StyledDetailsPage.js";

import {
  StyledButtonNo,
  StyledButtonYes,
  StyledDeleteButton,
} from "@/components/Modal/ModalStyle.js";
import { StyledDetailsItemIngredientsUl } from "@/components/StyledDetailsPage.js";
import { FaHeart, FaRegHeart } from "react-icons/fa";

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
      <div>
        {recipe.isFavorite ? (
          <FaHeart color="red" font-size="40px" />
        ) : (
          <FaRegHeart font-size="40px" />
        )}
      </div>
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

        <StyledDetailsItemIngredientsUl>
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient) => (
              <li key={ingredient.ingredientID}>
                {ingredient.name} : {ingredient.amount} {ingredient.unit}
              </li>
            ))}
        </StyledDetailsItemIngredientsUl>
      </StyledDetailsItem>
      <StyledDetailsItem>
        <h4>How to prepare it:</h4> {recipe.instruction}
      </StyledDetailsItem>

      <EditDeleteDiv>
        <StyledLink $justifySelf="start" href={"/"}>
          back
        </StyledLink>
        <StyledLink
          href={`/recipes/${id}/edit`}
          defaultData={recipe.ingredients}
        >
          Edit
        </StyledLink>
        <StyledDeleteButton
          onClick={() => setShowModal(true)}
          type="button"
          $variant="delete"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                fill="#e9f0ef"
              />
            </svg>
          </span>
        </StyledDeleteButton>
        {showModal && (
          <Modal>
            <p>Do you really want do delete the recipe??</p>
            <StyledButtonYes onClick={deleteRecipe}>
              <span role="img" aria-label="a check-icon">
                ✔️
              </span>
              Yes
            </StyledButtonYes>
            <StyledButtonNo onClick={() => setShowModal(false)}>
              <span role="img" aria-label="a X-icon">
                ✖️
              </span>
              No
            </StyledButtonNo>
          </Modal>
        )}
      </EditDeleteDiv>
    </StyledDetailsPageContainer>
  );
}
