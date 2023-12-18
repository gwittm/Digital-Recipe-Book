import styled from "styled-components";
import Image from "next/image";

export const StyledInputSection = styled.div`
  display: flex;
`;

export const StyledImageButtonDiv = styled.div`
  width: 230px;
  height: 60px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const StyledImageButtonResetUpload = styled.button`
  border: solid 1px var(--header-color);
  border-radius: 5px;
  width: 100px;
  margin-top: 10px;
  cursor: pointer;
`;

export const StyledImage = styled(Image)`
  border-radius: 900px;
`;

export const StyledImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: var(--background-color);
  margin: 10px;
  padding: 3px;
  border-radius: 5px;
  gap: 5px;
  width: 280px;
`;

export const StyledInputImageUpload = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
  z-index: -1;
`;

export const StyledLabelImageUpload = styled.label`
  display: inline-block;
  padding: 10px 55px;
  border: 1px solid var(--header-color);
  color: var(--title-color);
  border-radius: 5px;
  cursor: pointer;
  width: 230px;
  height: 40px;
  align-items: center;
  justify-content: center;

  &:hover {
    color: white;
    background-color: var(--title-color);
  }
`;

export const StyledFormImageUpload = styled.form`
  padding-left: 20px;
`;
