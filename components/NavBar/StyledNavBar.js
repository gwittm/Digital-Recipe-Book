import styled from "styled-components";
import Link from "next/link";

export const StyledNav = styled.nav`
  display: flex;
  position: fixed;
  color: white;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: var(--header-color);
`;

export const StyledNavDiv = styled.div`
  color: white;
  margin-bottom: 5px;
  border: solid white 1px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  font-family: Georgia, "Times New Roman", Times, serif;
  align-items: center;
  color: white;
  text-decoration: none;
  margin-top: 2px;
  padding: 2px;
`;

export const baseLinkStyles = `

  font-family: Georgia, "Times New Roman", Times, serif;
  color: white;
  text-decoration: none;
  
  @media screen and (min-width: 601px) {
    font-size: 15px;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const StyledNavLink = styled(Link)`
  ${baseLinkStyles}
  position: relative;
  justify-content: center;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16vw;
  height: 5vh;
  &:hover {
    background-color: var(--title-color);
  }

  &.active {
    background-color: var(--title-color);
  }
`;
