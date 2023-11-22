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

import Link from "next/link";

import {
  StyledButtonNo,
  StyledButtonYes,
  StyledDeleteButton,
} from "@/components/Modal/ModalStyle.js";


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
          {recipe.ingredients.map((ingredient, id) => (
            <li key={id}>
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
        <StyledLink
          href={`/recipes/${id}/edit`}
          defaultData={recipe.ingredients}
          passHref
          legacyBehavior
        >
          <Link>Edit</Link>
        </StyledLink>
      </div>

      <EditDeleteDiv>
        <StyledLink $justifySelf="start" href={"/"}>
          back
        </StyledLink>
        <StyledDeleteButton
          onClick={() => setShowModal(true)}
          type="button"
          $variant="delete"
        >
          delete
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
