import styled from "styled-components";

export const StyledNav = styled.nav`
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
    font-size: 15px;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const StyledNavDiv = styled.div`
  color: white;

  height: 8vh;
`;

export const baseLinkStyles = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  align-items: center;
  color: white;
  text-decoration: none;
  
  @media screen and (min-width: 601px) {
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const StyledNavLink = styled.a`
  ${baseLinkStyles}
  position: relative;
  justify-content: center;

  span {
    position: absolute;
    color: white;
    font-size: 1rem;
  }
  span:first-child {
    top: 2rem;
    left: 1.5rem;
    transform: translate(-50%, -50%);
    background-color: hotpink;
  }

  span:last-child {
    transform: translate(-50%, -50%);

    background-color: hotpink;
  }
`;
