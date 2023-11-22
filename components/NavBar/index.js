import { StyledAddLink, StyledHomeLink, StyledNav } from "./StyledNavBar";

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
