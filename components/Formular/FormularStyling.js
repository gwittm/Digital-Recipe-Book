import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 300px;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  padding-top: 600px;
  padding-bottom: 650px;
`;

export const StyledInputandLabel = styled.div`
  background-color: var(--background-color);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--hea-color);
`;

export const StyledLabel = styled.label`
  color: var(--title-color);
  margin-bottom: 5px;
  padding-left: 2;
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  height: 3vh;
`;

export const StyledIngredientsSection = styled.section`
  background-color: var(--background-color);
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  list-style-type: circle;
  width: 280px;
  padding-left: 15px;
`;

export const StyledIngredientInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 70px;
  font-size: 12px;
`;

export const StyledDivButton = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  background-color: var(--darkbackground-color);
  border: 1px solid var(--title-color);
  color: var(--header-color);
  width: 150px;
  margin: 10px;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--title-color);
    color: white;
  }
`;

export const StyledDeleteIngredientButton = styled.button`
  border: none;
  border-radius: 5px;
  margin: 3px;
  padding: 3px;

  &:hover {
  }
`;

export const StyledH2AddandEdit = styled.h2`
  color: var(--title-color);
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

export const StyledDetailsItemIngredientFormularLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledSpanFormular = styled.span`
  display: flex;
`;

export const StyledInputLabelFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSelect = styled.select`
  display: flex;
`;

export const StyledTypePreparationFlex = styled.div`
  display: flex;
  width: 48%;
`;

export const StyledDetailsItemFormular = styled.div`
  background-color: var(--background-color);
  border-radius: 5px;
  margin: 10px;
`;

export const StyledAddedIngredientsSection = styled.div`
  background-color: var(--background-color);
  border-radius: 5px;
  width: 280px;
`;

export const StyledDetailsItemIngredientLi = styled.li`
  display: flex;
  flex-direction: row;
  padding-top: 0;
`;
