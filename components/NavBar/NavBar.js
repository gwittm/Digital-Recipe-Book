import styled from "styled-components";

export default function NavBar() {
  return (
    <StyledNav>
      <div>
        <StyledHomeLink href="/">Home</StyledHomeLink>
      </div>
      <div>
        <StyledAddLink href="/create">
          <span>+</span>
          <span>AddNewRecipe</span>
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
  font-family: Georgia, "Times New Roman", Times, serif;
  align-items: center;
  color: white;
  text-decoration: none;
  
  @media screen and (min-width: 601px) {
    font-size: 35px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const StyledHomeLink = styled.a`
  ${baseLinkStyles}
`;

const StyledAddLink = styled.a`
  ${baseLinkStyles}
  position: relative;
  border: solid green 0.5rem;
  margin-top: 0.3rem;
  margin-bottom: 3rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  span {
    position: absolute;
  }
  span:first-child {
    position: absolute;
    color: green;
    top: 1.2rem;
    left: 1.5rem;
    transform: translate(-50%, -50%);
    font-size: 4.1rem;
  }

  span:last-child {
    position: absolute;
    color: green;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 1.3rem;
  }
`;
