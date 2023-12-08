import styled from "styled-components";
import Image from "next/image";

export const StyledImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: var(--background-color);
  margin: 10px;
  padding: 3px;
  border-radius: 5px;
  gap: 5px;
`;

export const StyledInputSection = styled.div`
  gap: 5px;
  display: flex;
`;

export const StyledPreviewDiv = styled.div`
  width: 200px;
  height: 200px;
  border: dotted 1px;
`;

export const StyledImageButtonDiv = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledImageButtonResetUpload = styled.button`
  border: solid 1px black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`;

export const StyledImage = styled(Image)`
  border-radius: 900px;
`;
