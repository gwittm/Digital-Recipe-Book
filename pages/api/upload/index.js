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
  console.log({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });
  const form = formidable({ multiples: true }); // new

  const [fields, files] = await form.parse(request);
  console.log("Fields:", fields);
  console.log("Files:", files);

  const file = files.recipeImage?.[0];
  console.log("file", file);
  const { newFilename, filepath } = file || {};
  // now we have the information about the image, we can send it to cloudinary

  try {
    const result = await cloudinary.v2.uploader.upload(filepath, {
      public_id: newFilename,
      folder: "DigitalRecipeBook",
    });
    const recipeData = {
      ...fields,
      imageUrl: result.secure_url,
    };

    const newRecipe = await Recipe.create(recipeData);
    response.status(201).json({ status: "Recipe created.", recipe: newRecipe });

    response
      .status(200)
      .json({ imageUrl: result.secure_url, publicId: result.public_id });
  } catch (error) {
    console.error("Error uploading to Cloudinary: ", error);
    response.status(500).json({ error: "Error uploading to Cloudinary" });
  }
}
