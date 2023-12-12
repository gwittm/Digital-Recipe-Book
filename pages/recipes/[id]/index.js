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
import FavoriteButton from "@/components/FavoriteButton";

export default function DetailsPage() {
  const [showModal, setShowModal] = useState;
  const [isFavorite, setIsFavorite] = useState(
    defaultData?.isFavorite || false
  );
  false;
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: recipe,
    isValidating,
    error,
    mutate,
  } = useSWR(`/api/recipes/${id}`);

  async function handleFavoriteToggle(newStatus, event) {
    event.preventDefault();
    setIsFavorite(!isFavorite);

    await fetch(`/api/recipes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite: newStatus }),
    });
    mutate({
      ...recipe,
      isFavorite: newStatus,
    });
  }
  async function deleteRecipe() {
    await fetch(`/api/recipes/${id}`, {
      method: "DELETE",
    });
    setShowModal(false);
    router.push("/");
  }

  if (isValidating) return <h2>Loading...</h2>;
  if (error || !isReady) return <h2>An error occured...</h2>;
  return (
    <StyledDetailsPageContainer>
      <StyledHeader>
        <h2>{recipe.title}</h2>
      </StyledHeader>
      <FavoriteButton
        isFavorite={isFavorite}
        toggleFavorite={handleFavoriteToggle}
      />
      {/* <div>
        {recipe.isFavorite ? (
          <svg
            role="img"
            height="40px"
            width="40px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 502 502"
            xmlSpace="preserve"
            aria-label="fullPlate"
            fontSize="40px"
            onClick={() => handleFavoriteToggle(false)}
          >
            <g>
              <g>
                <g>
                  <path
                    d="M46.175,156.04c-5.523,0-10-4.477-10-10v-13.247c0-5.523,4.477-10,10-10s10,4.477,10,10v13.247
      C56.175,151.563,51.698,156.04,46.175,156.04z"
                  />
                </g>
                <g>
                  <path
                    d="M454.296,395.512c-5.522,0-10-4.477-10-10V132.793c0-5.523,4.478-10,10-10s10,4.477,10,10v252.719
      C464.296,391.035,459.818,395.512,454.296,395.512z"
                  />
                </g>
                <path
                  d="M82.351,120.755c-5.523,0-10,4.477-10,10v57.065c0,12.193-7.394,22.5-16.176,22.604v-34.833c0-5.523-4.477-10-10-10
    s-10,4.477-10,10v34.833C27.393,210.32,20,200.013,20,187.82v-57.065c0-5.523-4.477-10-10-10s-10,4.477-10,10v57.065
    c0,23.442,16.216,42.519,36.175,42.605v155.086c0,5.523,4.477,10,10,10s10-4.477,10-10V230.425
    c19.959-0.085,36.176-19.163,36.176-42.605v-57.065C92.351,125.232,87.874,120.755,82.351,120.755z"
                />
                <path
                  style={{ fill: "#EBD2B4" }}
                  d="M492,293.799h-37.704V132.793l2.666,3.746C479.753,168.57,492,206.906,492,246.219V293.799z"
                />
                <path
                  d="M492,303.799h-37.704c-5.522,0-10-4.477-10-10V132.793c0-4.351,2.813-8.202,6.956-9.525
    c4.144-1.326,8.669,0.183,11.191,3.727l2.666,3.746C489.243,164.66,502,204.591,502,246.219V293.8
    C502,299.322,497.522,303.799,492,303.799z M464.296,283.799H482v-37.581c0-27.212-6.061-53.621-17.704-77.731V283.799z"
                />
              </g>
              <g>
                <circle
                  style={{ fill: "#EBD2B4" }}
                  cx="264.247"
                  cy="251"
                  r="153.873"
                />
                <path
                  d="M264.247,414.873c-90.36,0-163.873-73.513-163.873-163.873S173.887,87.127,264.247,87.127S428.12,160.64,428.12,251
    S354.607,414.873,264.247,414.873z M264.247,107.127c-79.332,0-143.873,64.541-143.873,143.873s64.541,143.873,143.873,143.873
    S408.12,330.332,408.12,251S343.579,107.127,264.247,107.127z"
                />
              </g>
              <g>
                <g>
                  <path
                    style={{ fill: "#FF2E3D" }}
                    d="M306.108,191.313c-19.769,0-36.388,13.463-41.203,31.72c-4.815-18.256-21.434-31.72-41.203-31.72 c-23.535,0-42.614,19.079-42.614,42.614s25.972,44.598,42.614,61.24c20.743,20.743,41.203,39.51,41.203,39.51 s21.589-19.896,41.203-39.51c16.642-16.642,42.614-37.705,42.614-61.24C348.722,210.392,329.643,191.313,306.108,191.313z"
                  />
                  <path
                    d="M264.905,344.677c-2.424,0-4.848-0.876-6.76-2.63c-0.206-0.189-20.858-19.152-41.515-39.808
      c-2.296-2.296-4.786-4.689-7.421-7.223c-16.984-16.325-38.121-36.642-38.121-61.089c0-29.012,23.603-52.614,52.614-52.614
      c16.421,0,31.445,7.621,41.204,19.887c9.758-12.266,24.781-19.887,41.203-19.887c29.011,0,52.613,23.603,52.613,52.614
      c0,24.448-21.138,44.765-38.121,61.089c-2.636,2.533-5.125,4.926-7.421,7.222c-19.533,19.532-41.28,39.592-41.497,39.792
      C269.768,343.795,267.337,344.677,264.905,344.677z M223.702,201.313c-17.983,0-32.614,14.631-32.614,32.614
      c0,15.93,17.732,32.975,31.981,46.669c2.709,2.604,5.268,5.063,7.704,7.5c13.212,13.212,26.427,25.725,34.123,32.924
      c7.901-7.403,21.501-20.284,34.142-32.925c2.437-2.436,4.995-4.895,7.704-7.499c14.248-13.695,31.98-30.739,31.98-46.67
      c0-17.983-14.63-32.614-32.613-32.614c-14.798,0-27.766,9.98-31.534,24.27c-1.157,4.391-5.128,7.45-9.669,7.45
      c-4.54,0-8.511-3.059-9.669-7.45C251.467,211.293,238.5,201.313,223.702,201.313z"
                  />
                </g>
              </g>
              <g>
                <path
                  d="M217.376,150.236c-3.895,0-7.597-2.289-9.212-6.101c-2.155-5.085,0.221-10.954,5.306-13.109
    c16.085-6.816,33.169-10.271,50.776-10.271c14.756,0,29.239,2.451,43.046,7.284c5.213,1.825,7.959,7.53,6.135,12.743
    c-1.825,5.213-7.532,7.96-12.742,6.134c-11.679-4.088-23.938-6.161-36.438-6.161c-14.912,0-29.37,2.922-42.974,8.687
    C220,149.981,218.677,150.236,217.376,150.236z"
                />
              </g>
              <g>
                <path
                  d="M168.451,188.303c-2.109,0-4.235-0.665-6.044-2.039c-4.397-3.342-5.252-9.616-1.91-14.013
    c5.229-6.878,11.168-13.265,17.653-18.982c4.143-3.652,10.462-3.254,14.114,0.888c3.652,4.143,3.255,10.462-0.888,14.114
    c-5.495,4.845-10.527,10.255-14.956,16.083C174.453,186.942,171.469,188.303,168.451,188.303z"
                />
              </g>
            </g>
          </svg>
        ) : (
          <svg
            fill="#000000"
            height="40px"
            width="40px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 502 502"
            xmlSpace="preserve"
            role="img"
            aria-label="emtyPlate"
            fontSize="40px"
            onClick={() => handleFavoriteToggle(true)}
          >
            <g>
              <g>
                <g>
                  <path
                    d="M46.175,156.04c5.523,0,10-4.477,10-10v-13.247c0-5.523-4.477-10-10-10s-10,4.477-10,10v13.247
      C36.175,151.563,40.652,156.04,46.175,156.04z"
                  />
                  <path
                    d="M82.351,120.755c-5.523,0-10,4.477-10,10v57.065c0,12.193-7.394,22.5-16.176,22.604v-34.833c0-5.523-4.477-10-10-10
      s-10,4.477-10,10v34.833C27.393,210.32,20,200.013,20,187.82v-57.065c0-5.523-4.477-10-10-10s-10,4.477-10,10v57.065
      c0,23.442,16.216,42.519,36.175,42.605v155.086c0,5.523,4.477,10,10,10s10-4.477,10-10V230.425
      c19.959-0.085,36.176-19.163,36.176-42.605v-57.065C92.351,125.232,87.874,120.755,82.351,120.755z"
                  />
                  <path
                    d="M465.109,130.741c-2.27-3.189-4.26-6.601-8.349-7.633c-6.205-1.566-12.465,3.247-12.465,9.685v252.719h0.001
      c0,5.523,4.478,10,10,10c5.522,0,10-4.477,10-10V303.8H492c5.522,0,10-4.477,10-10v-47.581
      C502,204.592,489.243,164.66,465.109,130.741z M482,283.799h-17.704V168.487C475.939,192.598,482,219.006,482,246.219V283.799z"
                  />
                  <path
                    d="M264.247,87.127c-90.36,0-163.873,73.513-163.873,163.873s73.513,163.873,163.873,163.873S428.12,341.36,428.12,251
      S354.607,87.127,264.247,87.127z M264.247,394.873c-79.332,0-143.873-64.541-143.873-143.873s64.541-143.873,143.873-143.873
      S408.12,171.668,408.12,251S343.579,394.873,264.247,394.873z"
                  />
                  <path
                    d="M306.109,181.313c-16.422,0-31.445,7.621-41.203,19.887c-9.759-12.266-24.783-19.887-41.204-19.887
      c-29.011,0-52.614,23.602-52.614,52.614c0,24.447,21.137,44.764,38.121,61.089c2.635,2.534,5.125,4.927,7.421,7.223
      c20.657,20.656,41.309,39.619,41.515,39.808c1.912,1.754,4.336,2.63,6.76,2.63c2.432,0,4.863-0.882,6.778-2.647
      c0.217-0.2,21.964-20.26,41.497-39.792c2.296-2.296,4.785-4.689,7.421-7.222c16.983-16.324,38.121-36.641,38.121-61.089
      C358.722,204.916,335.12,181.313,306.109,181.313z M306.742,280.596c-2.709,2.604-5.267,5.063-7.704,7.499
      c-12.641,12.641-26.241,25.522-34.142,32.925c-7.696-7.199-20.911-19.712-34.123-32.924c-2.436-2.437-4.995-4.896-7.704-7.5
      c-14.249-13.694-31.981-30.739-31.981-46.669c0-17.983,14.631-32.614,32.614-32.614c14.798,0,27.765,9.98,31.535,24.269
      c1.158,4.391,5.129,7.45,9.669,7.45c4.541,0,8.512-3.059,9.669-7.45c3.768-14.29,16.736-24.27,31.534-24.27
      c17.983,0,32.613,14.631,32.613,32.614C338.722,249.857,320.99,266.901,306.742,280.596z"
                  />
                  <path
                    d="M217.376,150.236c1.301,0,2.624-0.255,3.897-0.794c13.604-5.765,28.062-8.687,42.974-8.687
      c12.5,0,24.759,2.073,36.438,6.161c5.21,1.826,10.917-0.921,12.742-6.134c1.824-5.213-0.922-10.918-6.135-12.743
      c-13.807-4.833-28.29-7.284-43.046-7.284c-17.607,0-34.691,3.455-50.776,10.271c-5.085,2.155-7.461,8.024-5.306,13.109
      C209.779,147.947,213.481,150.236,217.376,150.236z"
                  />
                  <path
                    d="M176.42,184.354c4.429-5.828,9.461-11.238,14.956-16.083c4.143-3.652,4.54-9.971,0.888-14.114
      c-3.652-4.142-9.971-4.54-14.114-0.888c-6.485,5.717-12.424,12.104-17.653,18.982c-3.342,4.397-2.487,10.671,1.91,14.013
      c1.809,1.374,3.935,2.039,6.044,2.039C171.469,188.303,174.453,186.942,176.42,184.354z"
                  />
                </g>
              </g>
            </g>
          </svg>
        )}
      </div> */}
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
