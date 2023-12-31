import styled from "styled-components";

export default function Header() {
  return <StyledHeader>Digital Recipe Book</StyledHeader>;
}

const StyledHeader = styled.h1`
  display: flex;
  position: fixed;
  color: var(--header-color);
  font-family: Georgia, "Times New Roman", Times, serif;
  letter-spacing: 0.06rem;
  justify-content: center;
  margin: 0 0 1rem 0;
  padding: 0.5rem 0.7rem 0.7rem 0.7rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: var(--background-color);
  z-index: 10;

  @media screen and (min-width: 601px) {
    font-size: 35px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
