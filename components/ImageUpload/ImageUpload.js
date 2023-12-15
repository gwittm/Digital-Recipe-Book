import { useState } from "react";
import {
  StyledInputSection,
  StyledImageButtonDiv,
  StyledImageButtonResetUpload,
  StyledFormImageUpload,
} from "./StyledImageUpload";
import ImageViewer from "./ImageViewer";
import { StyledImageContainer } from "./StyledImageUpload";
import { StyledInputImageUpload } from "./StyledImageUpload";
import { StyledLabelImageUpload } from "./StyledImageUpload";
import { StyledPSubtitle } from "../Formular/FormularIngredients";
import styled from "styled-components";

export default function ImageUpload({ onAddImage, title, image }) {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(image || null);

  const uploadImage = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const data = new FormData(event.target);
    try {
      const response = await fetch(`/api/upload`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        const res = await response.json();

        onAddImage(res);
        setPreview(res);
        setIsLoading(false);
      } else {
        console.error("Image upload failed. Response:", response);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error during image upload:", error);
      setIsLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setPreview({ imageUrl: URL.createObjectURL(file) });
  };

  const handleResetClick = async () => {
    try {
      const response = await fetch(`/api/upload?id=${image.publicId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await response.json();
        onAddImage({ imageUrl: "", publicId: "" });
        setPreview(null);
      } else {
        console.error("Image delete failed. Response:", response);
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleFormReset = (event) => {
    event.preventDefault();
    setPreview(null);
    document.getElementById("recipeImage").value = "";
  };

  return (
    <StyledImageContainer>
      <StyledPSubtitle>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={25}
            width={25}
            viewBox="0 0 512 512"
          >
            <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
          </svg>
        </span>{" "}
        Upload an Image
      </StyledPSubtitle>

      {preview && (
        <ImageViewerPreviewFormular>
          <ImageViewer
            image={preview.imageUrl}
            alt={title}
            height={150}
            width={150}
            title={title}
          />
        </ImageViewerPreviewFormular>
      )}

      <StyledFormImageUpload onSubmit={uploadImage} onReset={handleFormReset}>
        <StyledInputSection>
          <StyledLabelImageUpload htmlFor="recipeImage">
            Browse Images
          </StyledLabelImageUpload>{" "}
          <StyledInputImageUpload
            id="recipeImage"
            name="recipeImage"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
          />
        </StyledInputSection>

        <StyledImageButtonDiv>
          <StyledImageButtonResetUpload
            type="submit"
            disabled={!preview || isLoading}
          >
            Upload now
          </StyledImageButtonResetUpload>
          <StyledImageButtonResetUpload type="reset" onClick={handleResetClick}>
            Reset
          </StyledImageButtonResetUpload>
        </StyledImageButtonDiv>
      </StyledFormImageUpload>

      {isLoading && <StyledPSubtitle>Loading, please wait...</StyledPSubtitle>}
      {!isLoading && <StyledPSubtitle>Loading completed</StyledPSubtitle>}
    </StyledImageContainer>
  );
}

export const ImageViewerPreviewFormular = styled.div`
  align-self: center;
`;
