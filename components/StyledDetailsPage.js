import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 30px;
  background-color: var(--title-color);
  color: white;
  text-align: center;
  border-radius: 5px;
`;

export const StyledDetailsPageContainer = styled.section`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

export const StyledDetailsItemIngredientsUl = styled.ul`
  list-style-type: none;
  width: 100%;
  max-width: 300px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const StyledDetailsItem = styled.div`
  background-color: var(--background-color);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  width: 48%;
  box-sizing: border-box;
  height: 80px;
  border: 1px solid var(--title-color);
`;

export const StyledItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const EditDeleteDiv = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  background-color: var(--background-color);
  margin-top: 20px;
  margin-bottom: 1rem;
  border-radius: 5px;
`;

export const StyledH4 = styled.h4`
  color: var(--header-color);
  border-radius: 5px;
  border: 1px solid var(--title-color);
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: var(--darkbackground-color);
  font-weight: 400;
`;

export const StyledIngredientsItems = styled.div`
  width: 100%;
  max-width: 300px;
`;

export const StyledDetailsItemIngredientLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 40px;
  border: solid 1px;
  margin: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  border: 1px solid var(--header-color);
  margin-left: -40px;
`;

export const StyledPreparation = styled.div`
  border: solid 1px var(--header-color);
  padding: 10px;
  border-radius: 5px;
`;

export const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  margin: 8px;
  padding: 3px;
  border-bottom: solid 1px var(--title-color);
`;

export const StyledP = styled.p`
  display: flex;
  justify-content: center;
`;

export const ImageContainerDetailsPage = styled.section`
  width: 300px;
  height: 200px;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: var(--background-color);
  border: solid black 1px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

export const StyledIngredientName = styled.p`
  display: flex;
`;

export const StyledIngredientAmountUnit = styled.p`
  display: flex;
`;
