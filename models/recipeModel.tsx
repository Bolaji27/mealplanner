import mongoose from "mongoose";
import Image from "next/image";
const recipeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true],
    enum: ["breakfast", "lunch", "dinners"],
  },
  title: {
    type: String,
    required: [true],
  },
  image: {
    type: String,
    required: [true],
  },
  ingredients: {
    type: [String],
    required: [true],
  },
  preparations: {
    type: [String],
    required: [true],
  },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);
export default Recipe;
