import myrecipe from "@/db/models/Recipe";
import connect from "@/db/connect";
export default async function handler(request, response) {
  try {
    await connect();
    if (request.method === "GET") {
      const myrecipes = await myrecipe.find();
      return response.status(200).json(myrecipes);
    }
  } catch (error) {
    console.log(error);
    response.status(400).json({ error: error.message });
  }
}
