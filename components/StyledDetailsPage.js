import styled from "styled-components";
import Image from "next/image";

export const StyledHeader = styled.header`
  height: 2rem;
  background-color: var(--title-color);
  color: white;
  margin: 10px;
  text-align: center;
  border-radius: 5px;
`;

export const StyledDetailsPageContainer = styled.section`
  width: 500px;
`;

export const StyledDetailsItemIngredientsUl = styled.ul`
  list-style-type: circle;
  padding-left: 15px;
`;

export const StyledDetailsItem = styled.div`
  background-color: var(--background-color);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;

export const StyledItemsRow = styled.div`
  display: flex;
`;

export const EditDeleteDiv = styled.section`
  display: flex;
  justify-content: space-between;
  width: 480px;
  background-color: var(--background-color);
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  margin-left: 10px;
`;
