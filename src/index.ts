import Logger from "./Logger";
import StorageManager from "./StorageManager";
import RecipeManager from "./crafting/RecipeManager";
import initRecipes from "./crafting/recipes/craftingTable";
import * as RPC from './RPC';

const logger = new Logger(true, "log.txt");

logger.log("Initialising");

const recipeManager = new RecipeManager();
const storageManager = new StorageManager(recipeManager, logger);


for (const name of (peripheral.wrap('back') as GenericPeripheral).getNamesRemote() as string[]) {
  if (name.startsWith("minecraft:chest_")) {
    logger.log(`Found ${name}`);

    storageManager.addStorage(name);
  }
}


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

// the passed object doesn't seem to be properly self-wrapped
RPC.init();
RPC.host('storage', {
  defragment: storageManager.defragment.bind(storageManager),
  storeAll: storageManager.storeAll.bind(storageManager),
  store: storageManager.store.bind(storageManager),
  withdrawl: storageManager.withdrawl.bind(storageManager),
  list: storageManager.list.bind(storageManager),
  size: storageManager.size.bind(storageManager),
  free: storageManager.free.bind(storageManager),
  used: storageManager.used.bind(storageManager),
  count: storageManager.count.bind(storageManager),
  craft: storageManager.craft.bind(storageManager),
  findItemByKey: storageManager.findItemByKey.bind(storageManager),
});

export default storageManager