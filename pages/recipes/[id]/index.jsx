import useSWR from "swr";
import { useRouter } from "next/router.js";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import {
  ContentDiv,
  StyledButton,
  StyledButtonNo,
  StyledButtonYes,
} from "@/components/Modal/ModalStyle";
import { Modal } from "@/components/Modal/index";

const StyledLink = styled(Link)`
  background-color: lightblue;
  width: 320px;
  padding: 5px;
  border-radius: 40px;
  margin: 50px;
  box-shadow: 8px 3px 3px rgb(39, 45, 56);
  text-decoration: none;
  font-size: 20px;
`;
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
  if (!isReady || isLoading || error) return <h2>Loading...</h2>;
  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <image
                src={recipe.image}
                priority
                fill
                sizes="(max-width: 700px) 50vw,
              (max-width: 700px) 50vw,
              30vw"
                alt="...here should be a Picture..."
              />
            </div>
            <div>
              <h2>{recipe.title}</h2>
            </div>
          </div>
          <div>
            <ul>
              <li>servings: {recipe.servings}</li>
              <li>time: {recipe.time}</li>
              <li>course: {recipe.course}</li>
              <li>preparation: {recipe.preparation}</li>
            </ul>
          </div>
          <div>
            <h2>Ingredients:</h2>
            <ul>
              {recipe.ingredients.map((ingredient, id) => (
                <div key={id}>
                  {ingredient.name} {ingredient.amount} {ingredient.unit}
                </div>
              ))}
            </ul>
          </div>
          <div>How to prepare it: {recipe.instruction}</div>
        </div>
      </div>
      <hr></hr>
      <div>
        <StyledLink href={"/"} passHref legacyBehavior>
          <StyledLink $justifySelf="start">back</StyledLink>
        </StyledLink>
        <div>
          <Link href={`/recipes/${id}/edit`} passHref legacyBehavior>
            <Link>Edit</Link>
          </Link>
          <StyledButton
            onClick={() => setShowModal(true)}
            type="button"
            $variant="delete"
          >
            Delete
          </StyledButton>
          {showModal && (
            <Modal>
              <ContentDiv>
                <p>Do you really want do delete the recipe??</p>
                <StyledButtonYes onClick={deleteRecipe}>Yes</StyledButtonYes>
                <StyledButtonNo onClick={() => setShowModal(false)}>
                  No
                </StyledButtonNo>
              </ContentDiv>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}
