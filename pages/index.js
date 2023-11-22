

import FuseSearchRecipe from "@/components/Search/FuseSearchRecipe";
import { StyledLink } from "@/components/StyledLink";


export default function Home() {
  return (
    <>
      <FuseSearchRecipe />
      <StyledLink href="/create">+ recipe</StyledLink>
    </>
  );
}
