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
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 4px rgb(128, 54, 119);
  text-align: center;
`;
const Button = styled.button`
  margin: 8px;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
`;
export const StyledDeleteButton = styled(Button)`
  border: solid 2px rgb(153, 9, 45);
  box-shadow: 0 2px 2px rgb(153, 9, 45);
`;

export const StyledButtonYes = styled(Button)`
  border: solid 2px rgb(5, 133, 14);
  box-shadow: 0 2px 2px rgb(5, 133, 14);
`;

export const StyledButtonNo = styled(Button)`
  border: solid 2px rgb(153, 9, 45);
  box-shadow: 0 2px 2px rgb(153, 9, 45);
`;
