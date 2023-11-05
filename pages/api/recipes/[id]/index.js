import dbConnect from "@/db/dbConnect";
import Recipe from "@/db/models/Recipe";
import { useRouter } from "next/router";

export default async function handler(request, response) {
  try {
    await dbConnect();
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
      return response.status(200).json({ status: "Entry updated!" });
    }

    if (request.method === "DELETE") {
      await Recipe.findByIdAndDelete(id);
      response.status(200).json({ status: "Deleted successfully!" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
