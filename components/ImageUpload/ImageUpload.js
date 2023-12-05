import { useState } from "react";
import {
  StyledImageContainer,
  StyledInputSection,
  StyledImageButtonDiv,
  StyledImageButtonUpload,
  StyledImageButtonReset,
} from "./StyledImageUpload";
import ImageViewer from "./ImageViewer";

export default function ImageUpload({ imageUrl, onAddUrl }) {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(imageUrl || null);

  const uploadImage = async () => {
    setIsLoading(true);
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

        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setPreview(URL.createObjectURL(file));
  };

  const handleResetClick = () => {
    setPreview(null);
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
        {preview && (
          <ImageViewer
            imageUrl={preview || imageUrl}
            height={150}
            width={150}
          />
        )}
      </StyledInputSection>

      <StyledImageButtonDiv>
        <StyledImageButtonUpload
          onClick={uploadImage}
          disabled={!preview || isLoading}
        >
          Upload now
        </StyledImageButtonUpload>
        <StyledImageButtonReset onClick={handleResetClick}>
          Reset
        </StyledImageButtonReset>
      </StyledImageButtonDiv>

      {isLoading && <span>Loading, please wait...</span>}
      {!isLoading && <span>Loading completed</span>}
    </StyledImageContainer>
  );
}
