import connect from "@/db/connect.js";
import Recipe from "@/db/models/Recipe";

export default async function handler(request, response) {
  try {
    await connect();
    const { id } = request.query;

    if (!id) {
      return;
    }

    if (request.method === "GET") {
      const recipe = await Recipe.findById(id);

      if (!recipe) {
        return response.status(404).json({ status: "Not found !!!" });
      }
      response.status(200).json(recipe);
    }

    if (request.method === "PUT") {
      const recipeData = request.body;
      await Recipe.findByIdAndUpdate(id, recipeData);
      response.status(200).json({ status: "Entry updated!" });

    if (request.method === "DELETE") {
      await Recipe.findByIdAndDelete(id);

      response.status(200).json({ status: "Recipe deleted!" });

    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
