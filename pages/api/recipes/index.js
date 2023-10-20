import Recipe from "@/db/models/Recipe";
import dbConnect from "@/db/dbConnect";
export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const recipes = await Recipe.find();
    return response.status(200).json(recipes);
  }
  try {
    if (request.method === "POST") {
      const recipes = request.body;
      await Recipe.create(recipes);
      response.status(201).json({ status: "Recipe created." });
    }
  } catch (error) {
    console.log(error);
    response.status(400).json({ error: error.message });
  }
}
