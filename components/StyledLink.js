import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  background-color: rgb(128, 54, 119);
  padding: 0.8rem 1.5rem;
  margin: 10px;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  font-weight: bold;

  ${({ $justifySelf }) =>
    $justifySelf &&
    css`
      justify-self: ${$justifySelf};
    `}

  ${({ $variant }) =>
    $variant === "outlined" &&
    css`
      text-align: center;
      background-color: white;
      border: 3px solid lightsalmon;
    `}
`;
