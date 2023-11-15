import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: left;
  gap: 0.5 rem;
  flex-direction: column;
  border: solid black, 1em;
  padding: 1 em;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 1px solid pink;
`;

export const StyledInput = styled.div`
  background-color: lightgrey;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;

export const StyledIngredientsSection = styled.section`
  background-color: lightgrey;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  gap: 5px;
`;

export const StyledIngredientInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

export const StyledButton = styled.button`
  background-color: hotpink;
  width: 480px;
  margin: 10px;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  align-items: center;
`;

export const StyledDeleteIngredientButton = styled.button`
  color: red;
  gap: 25px;
`;
