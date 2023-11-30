import styled from "styled-components";

export default function SearchBar({ handleSearch }) {
  return (
    <StyledForm>
      <StyledLabel htmlFor="search" />
      <StyledInput
        type="text"
        id="search"
        name="search"
        required
        minLength="0"
        maxLength="20"
        size="10"
        placeholder="Search from your recipes"
        onChange={handleSearch}
      />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const StyledLabel = styled.label`
  padding: 5px;
`;

const StyledInput = styled.input`
  padding: 10px;
  height: 5vh;
  width: 350px;
  color: var(--title-color);
  border: solid 2px var(--header-color);
  border-radius: 60px;
`;
