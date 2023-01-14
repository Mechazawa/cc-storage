import { RecipeManager } from "./Recipe";
import initRecipes from "./recipes/craftingTable";

const recipeManager = new RecipeManager();

initRecipes(recipeManager);