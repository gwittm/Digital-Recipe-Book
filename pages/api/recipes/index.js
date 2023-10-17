import Recipe from "@/db/models/Recipe";
import connect from "@/db/connect";
export default async function handler(request, response) {
  try {
    await connect();
    if (request.method === "GET") {
      const recipes = await Recipe.find();
      return response.status(200).json(recipes);
    }
  } catch (error) {
    console.log(error);
    response.status(400).json({ error: error.message });
  }
}
