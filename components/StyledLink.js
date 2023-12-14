import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
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

  ${({ $justifySelf }) =>
    $justifySelf &&
    css`
      justify-self: ${$justifySelf};
    `}

  ${({ $variant }) =>
    $variant === "outlined" &&
    css`
      text-align: center;
    `}
`;

export const StyledLinkRecipeBack = styled(Link)`
  background-color: var(--darkbackground-color);
  color: var(--title-color);
  border: 1px solid var(--title-color);
  padding: 3px;
  width: 150px;
  margin: 10px;
  height: 40px;
  font-size: 12px;
  border-radius: 5px;

  text-decoration: none;

  ´ &:hover {
    background-color: var(--header-color);
  }
`;
