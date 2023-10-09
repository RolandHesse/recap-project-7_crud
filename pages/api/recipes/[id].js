import connect from "@/db/connect";
import Recipe from "@/db/models/Recipe";

export default async function handler(request, response) {
  await connect();

  if ((request.method = "GET")) {
    const recipe = await Recipe.findById(request.query.id);
    if (!recipe) {
      response.status(404).json({ message: "Page not found" });
      return;
    }
    response.status(200).json(recipe);
    return;
  }
}
