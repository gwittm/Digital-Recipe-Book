import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.5 rem;
  flex-direction: column;
  padding: 1 em;
  width: 100%;
  max-width: 500px;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  padding-top: 50px;
`;

export const StyledInputandLabel = styled.div`
  background-color: var(--background-color);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledLabel = styled.label`
  color: var(--title-color);
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  height: 3vh;
`;

export const StyledIngredientsSection = styled.section`
  background-color: var(--background-color);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  gap: 5px;
  list-style-type: circle;
  padding-left: 15px;
`;

export const StyledIngredientInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

export const StyledDivButton = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: var(--title-color);
  color: white;
  /* width: 480px; */
  margin: 10px;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  align-items: center;
  /* align-items: center; */

  &:hover {
    background-color: var(--header-color);
  }
`;

export const StyledDeleteIngredientButton = styled.button`
  border: solid red 1px;
  border-radius: 5px;
  margin: 3px;
  padding: 3px;
`;

export const StyledH2AddandEdit = styled.h2`
  color: var(--title-color);
`;
