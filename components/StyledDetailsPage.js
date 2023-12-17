import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 30px;
  background-color: var(--title-color);
  color: white;
  text-align: center;
  border-radius: 5px;
`;

export const StyledH2RecipeTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  padding: 2px;
`;

export const StyledFavoriteButtonDivDetailsPage = styled.div`
  position: fixed;
  margin-top: 15px;
  margin-left: 260px;
`;

export const StyledDetailsPageContainer = styled.section`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

export const StyledDetailsItemIngredientsUl = styled.ul`
  padding-bottom: 10px;
`;

export const StyledDetailsItem = styled.div`
  background-color: var(--background-color);
  margin-bottom: 10px;
  border-radius: 5px;
  width: 48%;
  box-sizing: border-box;
  height: 70px;
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
  height: 30px;
  border: solid 1px;
  margin: 5px;
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
  margin: 5px;
  padding: 5px;
  border-bottom: solid 1px var(--title-color);
`;

export const StyledP = styled.p`
  display: flex;
  justify-content: center;

  margin: 3px;
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
  /*   object-fit: cover;
 */
`;

export const StyledIngredientName = styled.p`
  display: flex;
  padding-right: 3px;
`;

export const StyledIngredientAmountUnit = styled.p`
  display: flex;
`;
