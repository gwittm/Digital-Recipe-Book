import React from "react";
import Image from "next/image";
import { StyledImageContainer } from "./StyledImageUpload";

export default function ImageViewer({ imageUrl }) {
  return (
    <StyledImageContainer>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Here should be your picture"
          width={200}
          height={200}
        />
      ) : (
        <p>No image URL provided</p>
      )}
    </StyledImageContainer>
  );
}
