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
  display: grid;
  height: 11vh;
  width: 400px;
  padding: 20px;
  margin: 20px;
  background-color: var(--title-color);
  border-radius: 5px;

  &:hover {
    height: 12vh;
  }
`;

const StyledLabel = styled.label`
  padding-bottom: 10px;
`;

const StyledInput = styled.input`
  height: 4vh;
  color: var(--header-color);
`;
