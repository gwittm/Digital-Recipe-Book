import React from "react";
import Image from "next/image";
import { StyledImageContainer } from "./StyledImageUpload";

export default function ImageViewer({ imageUrl, width, height }) {
  return (
    <StyledImageContainer>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Here should be your picture"
          width={width}
          height={height}
        />
      ) : (
        <p>Image</p>
      )}
    </StyledImageContainer>
  );
}
