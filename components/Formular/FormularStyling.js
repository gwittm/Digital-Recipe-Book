import styled from "styled-components";
import Image from "next/image";

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
  padding-top: 550px;
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
  padding-left: 2px;
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  height: 4vh;
  background-color: var(--darkbackground-color);
  border: solid 1px var(--title-color);
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
  background-color: transparent;
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
  background-color: var(--darkbackground-color);
  border-radius: 5px;
  height: 4vh;
  border: 1px solid var(--title-color);
`;

export const StyledTextArea = styled.textarea`
  background-color: var(--darkbackground-color);
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
  justify-content: space-between;
  border-radius: 5px;
  padding: 5px;
  margin-left: -20px;
  margin-right: 10px;

  &:hover {
    background-color: var(--darkbackground-color);
  }
`;

export const StyledImageFormular = styled(Image)`
  border-radius: 5px;
  padding-top: 0;
  margin-left: 13%;
`;

export const StyledFavoriteButtonDivFormular = styled.div`
  margin-left: 500px;
`;

export const StyledIngredientForm = styled.form`
  background-color: var(--background-color);
  width: 280px;
  margin: 0 auto;
  margin-left: 10px;
  border-radius: 5px;
`;

export const StyledPSubtitle = styled.p`
  font-size: 15px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--title-color);
`;

export const StyledDetailsItemIngredientNameAmountUnit = styled.div`
  display: flex;
`;

export const AddIngredientButton = styled.button`
  background-color: var(--darkbackground-color);
  border: solid 1px var(--header-color);
  color: var(--title-color);
  border-radius: 5px;
  width: 30px;
  margin-right: 10px;

  &:hover {
    background-color: var(--title-color);
    color: white;
  }
`;
