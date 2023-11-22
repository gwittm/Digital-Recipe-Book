import Link from "next/link";
import styled from "styled-components";

export default function NavBar() {
  return (
    <StyledNav>
      <div>
        <StyledHomeLink href="/">Home</StyledHomeLink>
      </div>
      <div>
        <StyledAddLink href="/create">
          + <br />
          addNewRecipe
        </StyledAddLink>
      </div>
      <div></div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  position: fixed;
  color: white;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: var(--header-color);

  @media screen and (min-width: 601px) {
    font-size: 35px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const baseLinkStyles = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
`;

const StyledHomeLink = styled.a`
  ${baseLinkStyles}/* Weitere Styles speziell für den Home-Link */
`;

const StyledAddLink = styled.a`
  ${baseLinkStyles}
  border: solid green 0.5rem;
`;
