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
  width: 320px;
  padding: 20px;
  margin: 10px;
  border: solid black 1px;
  background-color: lightblue;
`;

const StyledLabel = styled.label`
  padding-bottom: 10px;
`;

const StyledInput = styled.input`
  height: 4vh;
`;
