import Recipe from "@/db/models/Recipe";
import connect from "@/db/connect";

const showToastGetSuccess = () => {
  toast.get("Code 200: Recipe successfully loaded")
};
const showToastGetError = () => {
  toast.get("400 Bad Request. Url not Found!")
};

const showToastPostSuccess = () => {
  toast.create("Codes 201: Recipe successfully created.")
};

const showToastPostError = () => {
  toast.error("Codes 400: Failed to create recipe")
};



export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    try {
      const recipes = await Recipe.find();
      showToastGetSuccess();

      return response.status(200).json(recipes);
    } catch (error) {
      showToastGetError();
      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "POST") {
    const recipes = request.body;

    try {
      await Recipe.create(recipes);
      showToastPostSuccess();
      response.status(201).json({ status: "Recipe created." });

    } catch (error) {
      showToastPostError();
      response.status(400).json({ error: error.message });
      
      
    }
  }
}
