import { useState } from "react";
import {
  StyledImageContainer,
  StyledInputSection,
  StyledImageButtonDiv,
  StyledImageButtonUpload,
  StyledImageButtonReset,
} from "./StyledImageUpload";
import ImageViewer from "./ImageViewer";

export default function ImageUpload({ imageUrl, onAddUrl, title }) {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(imageUrl || null);

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
      {preview && (
        <ImageViewer
          imageUrl={preview || imageUrl}
          alt={title}
          height={150}
          width={150}
          title={title}
        />
      )}
      <form onSubmit={uploadImage}>
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
          <StyledImageButtonUpload
            type="submit"
            disabled={!preview || isLoading}
          >
            Upload now
          </StyledImageButtonUpload>
          <StyledImageButtonReset onClick={handleResetClick}>
            Reset
          </StyledImageButtonReset>
        </StyledImageButtonDiv>
      </form>

      {isLoading && <span>Loading, please wait...</span>}
      {!isLoading && <span>Loading completed</span>}
    </StyledImageContainer>
  );
}
