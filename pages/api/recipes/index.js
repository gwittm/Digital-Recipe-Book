import Recipe from "@/db/models/Recipe";
import connect from "@/db/connect";
export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    try {
      const recipes = await Recipe.find();
      return response.status(200).json(recipes);
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "POST") {
    const recipes = request.body;
    console.log("api-index-test", recipes);
    try {
      await Recipe.create(recipes);
      response.status(201).json({ status: "Recipe created." });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
