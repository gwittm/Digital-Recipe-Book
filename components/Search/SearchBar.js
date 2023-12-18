import { StyledForm } from "./FuseSearchStyling";
import { StyledInput } from "./FuseSearchStyling";

export default function SearchBar({ handleSearch }) {
  return (
    <StyledForm>
      <label htmlFor="search" />
      <StyledInput
        type="text"
        id="search"
        name="search"
        required
        minLength="0"
        maxLength="20"
        size="10"
        placeholder="Search from all your recipes"
        onChange={handleSearch}
      ></StyledInput>
    </StyledForm>
  );
}
