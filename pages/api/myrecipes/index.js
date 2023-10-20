import Recipe from "@/db/models/Recipe";
import connect from "@/db/connect";
export default async function handler(request, response) {
  try {
    await connect();
    if (request.method === "GET") {
      const myrecipes = await Recipe.find();
      return response.status(200).json(myrecipes);
    }
    if (request.method === "POST") {
      const newrecipe = request.body;
      await Recipe.create(newrecipe);
      response.status(201).json({ status: "Places created." });
    }
  } catch (error) {
    console.log(error);
    response.status(400).json({ error: error.message });
  }
}
