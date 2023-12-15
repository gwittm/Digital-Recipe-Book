import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: white;
  width: 270px;
  height: 12vh;
  position: fixed;
  margin-left: 35px;
  margin-top: -20px;
  padding-bottom: 20px;
`;

export const StyledLabel = styled.label`
  padding: 5px;
`;

export const StyledInput = styled.input`
  position: fixed;
  padding: 10px;
  height: 7vh;
  width: 230px;
  margin-left: 10px;
  margin-top: 12px;
  color: var(--title-color);
  border: solid 3px var(--title-color);
  border-radius: 50px;

  &:active {
    border: solid 3px var(--header-color);
  }
`;

export const StyledFuseUl = styled.ul`
  padding-left: 0px;
  padding-top: 40px;
`;

export const StartingPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
