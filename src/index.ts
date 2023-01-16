import Logger from "./Logger";
import StorageManager from "./StorageManager";
import RecipeManager from "./crafting/RecipeManager";
import initRecipes from "./crafting/recipes/craftingTable";

const logger = new Logger(true, "log.txt");

logger.log("Initialising");

const recipeManager = new RecipeManager();
const storageManager = new StorageManager(recipeManager, logger);

storageManager.addAllChests();

initRecipes(recipeManager);
logger.log(`Loaded ${Object.keys(recipeManager.recipes).length} recipes`);

logger.log('Defragmenting...')
logger.log(`Freed ${storageManager.defragment()} slots`);
logger.log('checking stats...');

for(const resource of storageManager.list()) {
  logger.log(`[${resource.count}] ${resource.displayName}`);
}
logger.log(`Slots used: ${storageManager.used()}/${storageManager.size()} (${storageManager.count()} items)`);

for (const key of ['item:minecraft:grass_block', 'create:belt_connector']) {
  logger.debug(`${key}: ${storageManager.count(key)}`);
}


export default storageManager