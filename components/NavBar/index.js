import { StyledNavLink, StyledNav, StyledNavDiv } from "./StyledNavBar";
import { useState } from "react";
export default function NavBar() {
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isNewRecipeActive, setIsNewRecipeActive] = useState(false);
  const [isFavoriteActive, setIsFavoriteActive] = useState(false);

  const handleToggle = (page) => {
    if (page === "home") {
      setIsHomeActive(true);
      setIsNewRecipeActive(false);
      setIsFavoriteActive(false);
    }
    if (page === "newRecipe") {
      setIsHomeActive(false);
      setIsNewRecipeActive(true);
      setIsFavoriteActive(false);
    }
    if (page === "favoritePage") {
      setIsHomeActive(false);
      setIsNewRecipeActive(false);
      setIsFavoriteActive(true);
    }
  };

  return (
    <StyledNav>
      <StyledNavDiv>
        <StyledNavLink
          href="/"
          className={isHomeActive ? "active" : ""}
          onClick={() => handleToggle("home")}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path
                fill="#264143"
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              />
            </svg>
          </span>
          Home
        </StyledNavLink>
      </StyledNavDiv>

      <StyledNavDiv>
        <StyledNavLink
          href="/create"
          className={isNewRecipeActive ? "active" : ""}
          onClick={() => handleToggle("newRecipe")}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              fill="#de5499"
            >
              <path
                fill="#264143"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
          </span>
          New Recipe
        </StyledNavLink>
      </StyledNavDiv>
      <StyledNavDiv>
        <StyledNavLink
          href="/favorite"
          className={isFavoriteActive ? "active" : ""}
          onClick={() => handleToggle("favoritePage")}
        >
          <svg
            role="img"
            height="60px"
            width="60px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 502 502"
            xmlSpace="preserve"
            aria-label="fullPlate"
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
          Favorite
        </StyledNavLink>
      </StyledNavDiv>
    </StyledNav>
  );
}
