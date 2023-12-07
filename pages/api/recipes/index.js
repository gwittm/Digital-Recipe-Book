import Recipe from "@/db/models/Recipe";
import connect from "@/db/connect";
import { toast } from 'react-toastify';

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    try {
      const recipes = await Recipe.find();
      toast.success("Code 200: Recipe successfully loaded")
      return response.status(200).json(recipes);

    } catch (error) {
      toast.error("400 Bad Request. Url not Found!")
      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "POST") {
    const recipes = request.body;

  try {
      await Recipe.create(recipes);
      toast.success("Codes 201: Recipe successfully created.")
      response.status(201).json({ status: "Recipe created." });

    } catch (error) {
      toast.error("Codes 400: Failed to create recipe")
      response.status(400).json({ error: error.message });
      }
  }
}
