import React from "react";
import Image from "next/image";
import { StyledImageContainer } from "./StyledImageUpload";

export default function ImageViewer({ imageUrl }) {
  return (
    <StyledImageContainer>
      <Image src={imageUrl} alt="Here should be your picture" />
    </StyledImageContainer>
  );
}
