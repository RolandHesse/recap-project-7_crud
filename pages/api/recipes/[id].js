import connect from "@/db/connect";
import Recipe from "@/db/models/Recipe";

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    const recipe = await Recipe.findById(request.query.id);
    if (!recipe) {
      response.status(404).json({ message: "Page not found" });
      return;
    }
    response.status(200).json(recipe);
    return;
  }

  if (request.method === "PUT") {
    try {
      const recipe = await Recipe.findOneAndUpdate(
        { _id: request.query.id },
        request.body,
        { new: true }
      );
      response.status(200).json(recipe);
    } catch (error) {
      response.status(500).json({ message: "Error updating recipe" });
    }
    return;
  }

  if (request.method === "DELETE") {
    try {
      const recipe = await Recipe.findOneAndDelete({ _id: request.query.id });
      response.status(200).json(recipe);
    } catch (error) {
      response.status(500).json({ message: "Error deleting recipe" });
    }
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
