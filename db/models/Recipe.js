import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  portions: { type: Number, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  duration: { type: Number, required: true },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
