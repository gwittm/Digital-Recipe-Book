import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  background-color: var(--title-color);
  width: 80px;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  color: white;
  text-decoration: none;
   

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
