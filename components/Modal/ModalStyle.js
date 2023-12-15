import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentDiv = styled.div`
  background-color: var(--background-color);
  color: var(--title-color);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 4px var(--header-color);
  text-align: center;
`;
const Button = styled.button`
  margin: 8px;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
`;
export const StyledDeleteButton = styled(Button)`
  background-color: transparent;
  border: none;
  background-color: var(--background-color);
  width: 80px;
  padding: 5px;
  margin: 10px;
  text-decoration: none;
  width: 30px;
  border-radius: 5px;

  &:hover {
    background-color: var(--header-color);
  }
`;

export const StyledButtonYes = styled(Button)`
  border: solid 2px var(--title-color);
  box-shadow: 0 2px 2px var(--title-color);
`;

export const StyledButtonNo = styled(Button)`
  border: solid 2px var(--header-color);
  box-shadow: 0 2px 2px var(--header-color);
`;
