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
  max-width: 500px;
  margin: 0 auto;
`;

export const StyledDetailsItemIngredientsUl = styled.ul`
  list-style-type: none;
  width: 100%;
  max-width: 500px;
  padding-bottom: 15px;
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
  justify-content: space-between;
  width: 500px;
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
  max-width: 500px;
`;

export const StyledDetailsItemIngredientLi = styled.li`
  width: 500px;
  border: solid 1px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--header-color);
  margin-left: -40px;
`;

export const StyledPreparation = styled.div`
  border: solid 1px var(--header-color);
  padding: 10px;
  border-radius: 5px;
`;
