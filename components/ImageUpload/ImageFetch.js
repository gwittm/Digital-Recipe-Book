import React from "react";
import { Image } from "cloudinary-react";

const ImageViewer = ({ cloudName, publicId }) => {
  return (
    <div>
      <h2>Image Viewer</h2>
      <Image cloudName={cloudName} publicId={publicId} />
    </div>
  );
};

export default ImageViewer;
