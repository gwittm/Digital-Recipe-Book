import styled from "styled-components";

export const StyledImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  gap: 5px;
`;

export const StyledInputSection = styled.p`
  gap: 5px;
  display: flex;
  flex-direction: row;
`;

export const StyledPreviewDiv = styled.div`
  width: 200px;
  height: 200px;
  border: dotted 1px;
`;

export const StyledImageButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const StyledImageButtonUpload = styled.button`
  border: solid 1px black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`;

export const StyledImageButtonReset = styled.button`
  border: solid 1px black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`;
