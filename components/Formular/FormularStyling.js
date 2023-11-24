import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  gap: 0.5 rem;
  flex-direction: column;
  padding: 1 em;
`;

export const StyledDiv = styled.div`
  flex-direction: column;
  width: 500px;
`;

export const StyledInput = styled.div`
  background-color: var(--background-color);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
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

export const StyledButton = styled.button`
  background-color: var(--title-color);
  color: white;
  width: 480px;
  margin: 10px;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  align-items: center;

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
