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
        placeholder="Search from all your recipes"
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
  position: fixed;
  padding: 10px;
  height: 7vh;
  width: 40vw;
  color: var(--title-color);
  border: solid 3px var(--header-color);
  border-radius: 50px;
`;
