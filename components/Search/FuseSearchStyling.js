import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: right;
  padding-top: 10px;
  background-color: white;
  width: 280px;
  height: 12vh;
  position: fixed;
  margin-left: 30px;
  margin-top: -20px;
  z-index: 8;
`;

export const StyledInput = styled.input`
  position: fixed;
  padding: 20px;
  height: 7vh;
  width: 270px;
  margin-top: 12px;
  color: var(--title-color);
  border: solid 3px var(--title-color);
  border-radius: 50px;
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
