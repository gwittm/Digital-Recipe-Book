import styled from "styled-components";

export const StyledPopover = styled.modal`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ContentDiv = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
`;
export const StyledButton = styled.button`
  margin: 8px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;
export const StyledButtonYes = styled.button`
  margin: 8px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;
export const StyledButtonNo = styled.button`
  margin: 8px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;
