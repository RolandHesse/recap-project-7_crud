import connect from "@/db/connect";
import Recipe from "@/db/models/Recipe";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const recipes = await Recipe.find();
    return response.status(200).json(recipes);
  }

  if (request.method === "POST") {
    try {
      const recipe = await Recipe.create(request.body);
      response.status(201).json(recipe);
    } catch (error) {
      response.status(500).json({ message: "Error creating recipe" });
    }
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
