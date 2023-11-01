import Image from "next/image.js";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  width: 8rem;
  height: 7rem;
  position: absolute;
  left: 1rem;
  top: 4rem;
  border: 1px solid black;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;
