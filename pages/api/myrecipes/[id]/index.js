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
      const myrecipe = await myrecipe.findById(id);

      if (!myrecipe) {
        return response.status(404).json({ status: "Not found !!!" });
      }
      response.status(200).json(myrecipe);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
