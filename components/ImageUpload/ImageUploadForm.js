import React, { useState } from "react";
import {
  StyledImageContainer,
  StyledInputSection,
  StyledPreviewDiv,
} from "./StyledImageUpload";

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const uploadImage = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", image);
    data.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
    data.append("folder", "Cloudinary-React");
    try {
      const response = await fetch(`/api/upload`, {
        method: "POST",
        body: data,
      });
      const res = await response.json();
      setUrl(res.public_id);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const handleResetClick = () => {
    setPreview(null);
    setImage(null);
  };

  return (
    <StyledImageContainer>
      <p>Upload an Image</p>

      <StyledInputSection>
        <label htmlFor="hidden-input" className="cursor-pointer"></label>
        <input
          id="hidden-input"
          type="file"
          className="hidden"
          onChange={handleImageChange}
          accept="image/*"
        />

        <StyledPreviewDiv>
          {preview && <img src={preview} alt="preview" className="w-full" />}
        </StyledPreviewDiv>
      </StyledInputSection>

      <div className="flex justify-end pb-8 pt-6 gap-4">
        <button
          onClick={uploadImage}
          className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none disabled:cursor-not-allowed"
          disabled={!image}
        >
          Upload now
        </button>
        <button
          onClick={handleResetClick}
          className="rounded-sm px-3 py-1 bg-red-700 hover:bg-red-500 text-white focus:shadow-outline focus:outline-none"
        >
          Reset
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
          <span>Processing...</span>
        </div>
      ) : (
        url && (
          <div className="pb-8 pt-4">
            <ImageFetch
              cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
              publicId={url}
            />
          </div>
        )
      )}
    </StyledImageContainer>
  );
}
