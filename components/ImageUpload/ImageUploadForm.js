import React, { useState } from "react";
import { useEffect } from "react";
import {
  StyledImageContainer,
  StyledInputSection,
  StyledPreviewDiv,
  StyledImageButtonDiv,
  StyledImageButtonUpload,
  StyledImageButtonReset,
} from "./StyledImageUpload";
import ImageViewer from "./ImageViewer";

export default function ImageUpload({ imageUrl, onAddUrl }) {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const uploadImage = async () => {
    setLoading(true);
    const data = new FormData();
    const fileInput = document.getElementById("recipeImage");
    const file = fileInput.files[0];
    data.append("recipeImage", file);

    try {
      const response = await fetch(`/api/upload`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        const res = await response.json();
        onAddUrl(res.imageUrl);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    onAddUrl(URL.createObjectURL(file));
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const handleResetClick = () => {
    setPreview(null);
    onAddUrl(null);
  };

  return (
    <StyledImageContainer>
      <p>Upload an Image</p>
      <StyledInputSection>
        <label htmlFor="recipeImage"></label>
        <input
          id="recipeImage"
          name="recipeImage"
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />
      </StyledInputSection>

      <StyledImageButtonDiv>
        <StyledImageButtonUpload onClick={uploadImage} disabled={!imageUrl}>
          Upload now
        </StyledImageButtonUpload>
        <StyledImageButtonReset onClick={handleResetClick}>
          Reset
        </StyledImageButtonReset>
      </StyledImageButtonDiv>

      {loading ? (
        <span>Processing...</span>
      ) : (
        <div>{imageUrl && <ImageViewer imageUrl={imageUrl} />}</div>
      )}
    </StyledImageContainer>
  );
}
