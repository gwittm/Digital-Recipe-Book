import formidable from "formidable";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(400).json({ message: "Method not allowed" });
    return;
  }

  const form = formidable({ multiples: true }); // new
  const [fields, files] = await form.parse(request);
  const file = files.recipeImage?.[0];
  const { newFilename, filepath } = file || {};

  try {
    const result = await cloudinary.v2.uploader.upload(filepath, {
      public_id: newFilename,
      folder: "DigitalRecipeBook",
    });

    response
      .status(200)
      .json({ imageUrl: result.secure_url, publicId: result.public_id });
  } catch (error) {
    console.error("Error uploading to Cloudinary: ", error);
    response.status(500).json({ error: "Error uploading to Cloudinary" });
  }

  if (request.method === "DELETE") {
    const public_id = request.query.id;
    try {
      await cloudinary.v2.uploader.destroy(public_id);
      response.status(200).json({ message: "Image removed from Cloud" });
    } catch (error) {
      console.error("Error deleting from Cloudinary: ", error);
      response.status(500).json({ error: "Error deleting from Cloudinary" });
    }
  }
}
