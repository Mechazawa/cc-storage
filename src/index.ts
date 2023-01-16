import Logger from "./Logger";
import RecipeManager from "./RecipeManager";
import StorageManager from "./StorageManager";
import initRecipes from "./recipes/craftingTable";

const logger = new Logger(true, "log.txt");

logger.log("Initialising");

const recipeManager = new RecipeManager();
const storageManager = new StorageManager();

storageManager.addAllChests();

initRecipes(recipeManager);
logger.log(`Loaded ${Object.keys(recipeManager.recipes).length} recipes`);

logger.log('Defragmenting...')
logger.log(`Freed ${storageManager.defragment()} slots`);

export default storageManager