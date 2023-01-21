import RecipeManager from "../RecipeManager";
import ShapedCraftingRecipe from "../ShapedCraftingRecipe";
import ShapelessCraftingRecipe from "../ShapelessCraftingRecipe";

export default function (manager: RecipeManager) {
  manager.add(
    new ShapedCraftingRecipe("create:mechanical_crafting/crushing_wheel", "item:create:crushing_wheel", 2, [
      ["", "item:create:andesite_alloy", "item:create:andesite_alloy", "item:create:andesite_alloy", ""],
      [
        "item:create:andesite_alloy",
        "item:create:andesite_alloy",
        "tag:items:minecraft:planks",
        "item:create:andesite_alloy",
        "item:create:andesite_alloy",
      ],
      [
        "item:create:andesite_alloy",
        "tag:items:minecraft:planks",
        "tag:items:c:stone",
        "tag:items:minecraft:planks",
        "item:create:andesite_alloy",
      ],
      [
        "item:create:andesite_alloy",
        "item:create:andesite_alloy",
        "tag:items:minecraft:planks",
        "item:create:andesite_alloy",
        "item:create:andesite_alloy",
      ],
      ["", "item:create:andesite_alloy", "item:create:andesite_alloy", "item:create:andesite_alloy", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:mechanical_crafting/extendo_grip", "item:create:extendo_grip", 1, [
      ["", "tag:items:c:ingots/brass", ""],
      ["", "item:create:precision_mechanism", ""],
      ["tag:items:c:rods/wooden", "tag:items:c:rods/wooden", "tag:items:c:rods/wooden"],
      ["tag:items:c:rods/wooden", "tag:items:c:rods/wooden", "tag:items:c:rods/wooden"],
      ["", "item:create:brass_hand", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:mechanical_crafting/potato_cannon", "item:create:potato_cannon", 1, [
      [
        "item:create:andesite_alloy",
        "item:create:precision_mechanism",
        "item:create:fluid_pipe",
        "item:create:fluid_pipe",
        "item:create:fluid_pipe",
      ],
      ["item:minecraft:copper_ingot", "item:minecraft:copper_ingot", "", "", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:mechanical_crafting/wand_of_symmetry", "item:create:wand_of_symmetry", 1, [
      ["", "tag:items:c:glass", ""],
      ["tag:items:c:glass", "tag:items:c:ender_pearls", "tag:items:c:glass"],
      ["", "item:create:precision_mechanism", ""],
      ["", "tag:items:c:ingots/brass", ""],
      ["", "tag:items:c:obsidian", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:computer_advanced_upgrade", "item:computercraft:computer_advanced", 1, [
      ["tag:items:c:gold_ingots", "tag:items:c:gold_ingots", "tag:items:c:gold_ingots"],
      ["tag:items:c:gold_ingots", "item:computercraft:computer_normal", "tag:items:c:gold_ingots"],
      ["tag:items:c:gold_ingots", "", "tag:items:c:gold_ingots"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "computercraft:pocket_computer_advanced_upgrade",
      "item:computercraft:pocket_computer_advanced",
      1,
      [
        ["tag:items:c:gold_ingots", "tag:items:c:gold_ingots", "tag:items:c:gold_ingots"],
        ["tag:items:c:gold_ingots", "item:computercraft:pocket_computer_normal", "tag:items:c:gold_ingots"],
        ["tag:items:c:gold_ingots", "", "tag:items:c:gold_ingots"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:turtle_advanced_upgrade", "item:computercraft:turtle_advanced", 1, [
      ["tag:items:c:gold_ingots", "tag:items:c:gold_ingots", "tag:items:c:gold_ingots"],
      ["tag:items:c:gold_ingots", "item:computercraft:turtle_normal", "tag:items:c:gold_ingots"],
      ["", "tag:items:c:gold_blocks", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:acacia_attic_roof", "item:mcwroofs:acacia_attic_roof", 2, [
      ["", "item:minecraft:acacia_log"],
      ["item:minecraft:acacia_log", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:acacia_bamboo_trapdoor", "item:mcwtrpdoors:acacia_bamboo_trapdoor", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwtrpdoors:print_bamboo"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_bark_glass_door", "item:mcwdoors:acacia_bark_glass_door", 3, [
      ["item:minecraft:acacia_log", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:acacia_log", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:acacia_bark_trapdoor", "item:mcwtrpdoors:acacia_bark_trapdoor", 2, [
      ["item:minecraft:acacia_log", "item:minecraft:glass_pane", "item:minecraft:acacia_log"],
      ["item:minecraft:acacia_log", "item:minecraft:glass_pane", "item:minecraft:acacia_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_barn_door", "item:mcwdoors:acacia_barn_door", 2, [
      ["item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_barn_glass_door", "item:mcwdoors:acacia_barn_glass_door", 3, [
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:acacia_barn_trapdoor", "item:mcwtrpdoors:acacia_barn_trapdoor", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwtrpdoors:acacia_glass_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:acacia_barred_trapdoor", "item:mcwtrpdoors:acacia_barred_trapdoor", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwtrpdoors:print_barred"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_beach_door", "item:mcwdoors:acacia_beach_door", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwdoors:print_jungle"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:acacia_beach_trapdoor", "item:mcwtrpdoors:acacia_beach_trapdoor", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwtrpdoors:print_beach"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:acacia_blinds", "item:mcwwindows:acacia_blinds", 3, [
      ["item:minecraft:acacia_slab", "item:minecraft:acacia_slab", "item:minecraft:acacia_slab"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:acacia_boat", "item:minecraft:acacia_boat", 1, [
      ["item:minecraft:acacia_planks", "", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:acacia_bridge_pier", "item:mcwbridges:acacia_bridge_pier", 3, [
      ["item:minecraft:acacia_log", "item:minecraft:acacia_fence", "item:minecraft:acacia_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:acacia_cabinet", "item:farmersdelight:acacia_cabinet", 1, [
      ["item:minecraft:acacia_slab", "item:minecraft:acacia_slab", "item:minecraft:acacia_slab"],
      ["item:minecraft:acacia_trapdoor", "", "item:minecraft:acacia_trapdoor"],
      ["item:minecraft:acacia_slab", "item:minecraft:acacia_slab", "item:minecraft:acacia_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_classic_door", "item:mcwdoors:acacia_classic_door", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwdoors:print_oak"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:acacia_classic_trapdoor", "item:mcwtrpdoors:acacia_classic_trapdoor", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwtrpdoors:print_classic"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_cottage_door", "item:mcwdoors:acacia_cottage_door", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwdoors:print_spruce"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:acacia_cottage_trapdoor", "item:mcwtrpdoors:acacia_cottage_trapdoor", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwtrpdoors:print_cottage"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:acacia_door", "item:minecraft:acacia_door", 3, [
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:acacia_fence", "item:minecraft:acacia_fence", 3, [
      ["item:minecraft:acacia_planks", "item:minecraft:stick", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:stick", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:acacia_fence_gate", "item:minecraft:acacia_fence_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:acacia_planks", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:acacia_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_four_panel_door", "item:mcwdoors:acacia_four_panel_door", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwdoors:print_dark_oak"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwtrpdoors:acacia_four_panel_trapdoor",
      "item:mcwtrpdoors:acacia_four_panel_trapdoor",
      1,
      [["item:minecraft:acacia_planks"], ["item:mcwtrpdoors:print_four_panel"], ["item:minecraft:acacia_planks"]]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:acacia_four_window", "item:mcwwindows:acacia_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:acacia_log", "item:mcwwindows:window_centre_bar_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_glass_door", "item:mcwdoors:acacia_glass_door", 3, [
      ["item:minecraft:acacia_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:acacia_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:acacia_glass_trapdoor", "item:mcwtrpdoors:acacia_glass_trapdoor", 2, [
      ["item:minecraft:acacia_planks", "item:minecraft:glass_pane", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:glass_pane", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:acacia_hedge", "item:mcwfences:acacia_hedge", 4, [
      ["item:minecraft:acacia_leaves", "item:minecraft:acacia_leaves"],
      ["item:minecraft:acacia_leaves", "item:minecraft:acacia_leaves"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:acacia_highley_gate", "item:mcwfences:acacia_highley_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:acacia_log", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:acacia_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:acacia_horse_fence", "item:mcwfences:acacia_horse_fence", 3, [
      ["item:minecraft:acacia_log", "item:minecraft:stick", "item:minecraft:acacia_log"],
      ["item:minecraft:stick", "item:minecraft:acacia_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_japanese2_door", "item:mcwdoors:acacia_japanese2_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:acacia_slab", "item:minecraft:acacia_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_japanese_door", "item:mcwdoors:acacia_japanese_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:acacia_log_bridge_middle", "item:mcwbridges:acacia_log_bridge_middle", 4, [
      ["item:minecraft:acacia_fence", "", "item:minecraft:acacia_fence"],
      ["item:minecraft:acacia_slab", "item:minecraft:acacia_slab", "item:minecraft:acacia_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:acacia_log_bridge_stair", "item:mcwbridges:acacia_log_bridge_stair", 6, [
      ["", "", "item:mcwbridges:acacia_log_bridge_middle"],
      ["", "item:mcwbridges:acacia_log_bridge_middle", "item:mcwbridges:acacia_log_bridge_middle"],
      [
        "item:mcwbridges:acacia_log_bridge_middle",
        "item:mcwbridges:acacia_log_bridge_middle",
        "item:mcwbridges:acacia_log_bridge_middle",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:acacia_log_parapet", "item:mcwwindows:acacia_log_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:acacia_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:acacia_louvered_shutter", "item:mcwwindows:acacia_louvered_shutter", 3, [
      ["item:minecraft:acacia_slab"],
      ["item:minecraft:acacia_slab"],
      ["item:minecraft:acacia_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:acacia_lower_roof", "item:mcwroofs:acacia_lower_roof", 4, [
      ["", "item:minecraft:acacia_log", "item:minecraft:acacia_log"],
      ["item:minecraft:acacia_log", "item:minecraft:acacia_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_modern_door", "item:mcwdoors:acacia_modern_door", 3, [
      ["item:minecraft:acacia_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_mystic_door", "item:mcwdoors:acacia_mystic_door", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwdoors:print_mystic"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:acacia_mystic_trapdoor", "item:mcwtrpdoors:acacia_mystic_trapdoor", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwtrpdoors:print_mystic"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_nether_door", "item:mcwdoors:acacia_nether_door", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwdoors:print_nether"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_paper_door", "item:mcwdoors:acacia_paper_door", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwdoors:print_birch"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:acacia_paper_trapdoor", "item:mcwtrpdoors:acacia_paper_trapdoor", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwtrpdoors:print_paper"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:acacia_picket_fence", "item:mcwfences:acacia_picket_fence", 3, [
      ["item:minecraft:acacia_log", "item:minecraft:acacia_planks", "item:minecraft:acacia_log"],
      ["item:minecraft:acacia_log", "item:minecraft:stick", "item:minecraft:acacia_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:acacia_plank_four_window", "item:mcwwindows:acacia_plank_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:acacia_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:acacia_plank_parapet", "item:mcwwindows:acacia_plank_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:acacia_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:acacia_plank_window", "item:mcwwindows:acacia_plank_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:acacia_planks", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:acacia_plank_window2", "item:mcwwindows:acacia_plank_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:acacia_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:acacia_planks_attic_roof", "item:mcwroofs:acacia_planks_attic_roof", 2, [
      ["", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:acacia_planks_lower_roof", "item:mcwroofs:acacia_planks_lower_roof", 4, [
      ["", "item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwpaths:acacia_planks_path", "item:mcwpaths:acacia_planks_path", 6, [
      ["item:minecraft:acacia_slab", "item:minecraft:acacia_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:acacia_planks_roof", "item:mcwroofs:acacia_planks_roof", 2, [
      ["", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:acacia_planks_steep_roof", "item:mcwroofs:acacia_planks_steep_roof", 4, [
      ["", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:acacia_planks_top_roof", "item:mcwroofs:acacia_planks_top_roof", 2, [
      ["item:minecraft:acacia_planks", "item:minecraft:stick", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:acacia_planks_upper_lower_roof",
      "item:mcwroofs:acacia_planks_upper_lower_roof",
      3,
      [
        ["", "", "item:minecraft:acacia_planks"],
        ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:acacia_planks_upper_steep_roof",
      "item:mcwroofs:acacia_planks_upper_steep_roof",
      3,
      [
        ["", "item:minecraft:acacia_planks"],
        ["", "item:minecraft:acacia_planks"],
        ["item:minecraft:acacia_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:acacia_pressure_plate", "item:minecraft:acacia_pressure_plate", 1, [
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:acacia_pyramid_gate", "item:mcwfences:acacia_pyramid_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:acacia_log", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:acacia_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:acacia_rail_bridge", "item:mcwbridges:acacia_rail_bridge", 4, [
      ["item:minecraft:acacia_fence", "", "item:minecraft:acacia_fence"],
      ["item:minecraft:acacia_fence", "item:minecraft:acacia_slab", "item:minecraft:acacia_fence"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:acacia_ranch_trapdoor", "item:mcwtrpdoors:acacia_ranch_trapdoor", 2, [
      ["item:minecraft:acacia_log", "item:minecraft:stick", "item:minecraft:acacia_log"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:acacia_log", "item:minecraft:stick", "item:minecraft:acacia_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:acacia_roof", "item:mcwroofs:acacia_roof", 2, [
      ["", "item:minecraft:acacia_log"],
      ["item:minecraft:acacia_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:acacia_rope_bridge_stair", "item:mcwbridges:acacia_rope_bridge_stair", 6, [
      ["", "", "item:mcwbridges:rope_acacia_bridge"],
      ["", "item:mcwbridges:rope_acacia_bridge", "item:mcwbridges:rope_acacia_bridge"],
      [
        "item:mcwbridges:rope_acacia_bridge",
        "item:mcwbridges:rope_acacia_bridge",
        "item:mcwbridges:rope_acacia_bridge",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:acacia_shutter", "item:mcwwindows:acacia_shutter", 3, [
      ["item:minecraft:acacia_trapdoor"],
      ["item:minecraft:acacia_trapdoor"],
      ["item:minecraft:acacia_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:acacia_sign", "item:minecraft:acacia_sign", 3, [
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:acacia_slab", "item:minecraft:acacia_slab", 6, [
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_stable_door", "item:mcwdoors:acacia_stable_door", 3, [
      ["item:minecraft:iron_bars", "item:minecraft:iron_bars"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_stable_head_door", "item:mcwdoors:acacia_stable_head_door", 1, [
      ["item:mcwdoors:acacia_stable_door"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:acacia_stairs", "item:minecraft:acacia_stairs", 4, [
      ["item:minecraft:acacia_planks", "", ""],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks", ""],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:acacia_steep_roof", "item:mcwroofs:acacia_steep_roof", 4, [
      ["", "item:minecraft:acacia_log"],
      ["item:minecraft:acacia_log", "item:minecraft:acacia_log"],
      ["item:minecraft:acacia_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:acacia_stockade_fence", "item:mcwfences:acacia_stockade_fence", 3, [
      ["item:minecraft:acacia_log", "item:minecraft:acacia_planks", "item:minecraft:acacia_log"],
      ["item:minecraft:acacia_log", "item:minecraft:acacia_planks", "item:minecraft:acacia_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_swamp_door", "item:mcwdoors:acacia_swamp_door", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwdoors:print_swamp"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:acacia_swamp_trapdoor", "item:mcwtrpdoors:acacia_swamp_trapdoor", 1, [
      ["item:minecraft:acacia_planks"],
      ["item:mcwtrpdoors:print_swamp"],
      ["item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:acacia_top_roof", "item:mcwroofs:acacia_top_roof", 2, [
      ["item:minecraft:acacia_log", "item:minecraft:stick", "item:minecraft:acacia_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:acacia_trapdoor", "item:minecraft:acacia_trapdoor", 2, [
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:acacia_upper_lower_roof", "item:mcwroofs:acacia_upper_lower_roof", 3, [
      ["", "", "item:minecraft:acacia_log"],
      ["item:minecraft:acacia_log", "item:minecraft:acacia_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:acacia_upper_steep_roof", "item:mcwroofs:acacia_upper_steep_roof", 3, [
      ["", "item:minecraft:acacia_log"],
      ["", "item:minecraft:acacia_log"],
      ["item:minecraft:acacia_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:acacia_western_door", "item:mcwdoors:acacia_western_door", 3, [
      ["", "", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_slab", "item:minecraft:acacia_planks"],
      ["item:minecraft:acacia_planks", "item:minecraft:acacia_planks", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:acacia_window", "item:create:acacia_window", 2, [
      ["", "item:minecraft:acacia_planks", ""],
      ["item:minecraft:acacia_planks", "tag:items:c:glass/colorless", "item:minecraft:acacia_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:acacia_window", "item:mcwwindows:acacia_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:acacia_log", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:acacia_window2", "item:mcwwindows:acacia_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:acacia_log", "item:mcwwindows:window_centre_bar_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:acacia_window_pane", "item:create:acacia_window_pane", 16, [
      ["item:create:acacia_window", "item:create:acacia_window", "item:create:acacia_window"],
      ["item:create:acacia_window", "item:create:acacia_window", "item:create:acacia_window"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:acacia_wired_fence", "item:mcwfences:acacia_wired_fence", 3, [
      ["item:minecraft:stick", "item:minecraft:iron_bars", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:acacia_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:acacia_wood", "item:minecraft:acacia_wood", 3, [
      ["item:minecraft:acacia_log", "item:minecraft:acacia_log"],
      ["item:minecraft:acacia_log", "item:minecraft:acacia_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:activator_rail", "item:minecraft:activator_rail", 6, [
      ["item:minecraft:iron_ingot", "item:minecraft:stick", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:redstone_torch", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:stick", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:amethyst_block", "item:minecraft:amethyst_block", 1, [
      ["item:minecraft:amethyst_shard", "item:minecraft:amethyst_shard"],
      ["item:minecraft:amethyst_shard", "item:minecraft:amethyst_shard"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:andesite_four_window", "item:mcwwindows:andesite_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:andesite", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:andesite_louvered_shutter", "item:mcwwindows:andesite_louvered_shutter", 3, [
      ["item:minecraft:andesite_slab"],
      ["item:minecraft:andesite_slab"],
      ["item:minecraft:andesite_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:andesite_parapet", "item:mcwwindows:andesite_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:andesite", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:andesite_railing_gate", "item:mcwfences:andesite_railing_gate", 1, [
      ["item:minecraft:iron_bars", "item:minecraft:polished_andesite", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:polished_andesite", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:andesite_slab", "item:minecraft:andesite_slab", 6, [
      ["item:minecraft:andesite", "item:minecraft:andesite", "item:minecraft:andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:andesite_stairs", "item:minecraft:andesite_stairs", 4, [
      ["item:minecraft:andesite", "", ""],
      ["item:minecraft:andesite", "item:minecraft:andesite", ""],
      ["item:minecraft:andesite", "item:minecraft:andesite", "item:minecraft:andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:andesite_wall", "item:minecraft:andesite_wall", 6, [
      ["item:minecraft:andesite", "item:minecraft:andesite", "item:minecraft:andesite"],
      ["item:minecraft:andesite", "item:minecraft:andesite", "item:minecraft:andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:andesite_window", "item:mcwwindows:andesite_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:andesite", "item:mcwwindows:window_centre_bar_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:andesite_window2", "item:mcwwindows:andesite_window2", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:andesite", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:anvil", "item:minecraft:anvil", 1, [
      ["item:minecraft:iron_block", "item:minecraft:iron_block", "item:minecraft:iron_block"],
      ["", "item:minecraft:iron_ingot", ""],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:apple_pie", "item:farmersdelight:apple_pie", 1, [
      ["item:minecraft:wheat", "item:minecraft:wheat", "item:minecraft:wheat"],
      ["item:minecraft:apple", "item:minecraft:apple", "item:minecraft:apple"],
      ["item:minecraft:sugar", "item:farmersdelight:pie_crust", "item:minecraft:sugar"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:apple_pie_from_slices", "item:farmersdelight:apple_pie", 1, [
      ["item:farmersdelight:apple_pie_slice", "item:farmersdelight:apple_pie_slice"],
      ["item:farmersdelight:apple_pie_slice", "item:farmersdelight:apple_pie_slice"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:armor_stand", "item:minecraft:armor_stand", 1, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["", "item:minecraft:stick", ""],
      ["item:minecraft:stick", "item:minecraft:smooth_stone_slab", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:arrow", "item:minecraft:arrow", 4, [
      ["item:minecraft:flint"],
      ["item:minecraft:stick"],
      ["item:minecraft:feather"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:azalea_hedge", "item:mcwfences:azalea_hedge", 4, [
      ["item:minecraft:azalea_leaves", "item:minecraft:azalea_leaves"],
      ["item:minecraft:azalea_leaves", "item:minecraft:azalea_leaves"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:bamboo_barn_trapdoor", "item:mcwtrpdoors:bamboo_barn_trapdoor", 1, [
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:mcwtrpdoors:bamboo_glass_trapdoor", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:bamboo_barred_trapdoor", "item:mcwtrpdoors:bamboo_barred_trapdoor", 1, [
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:mcwtrpdoors:print_barred", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:bamboo_beach_trapdoor", "item:mcwtrpdoors:bamboo_beach_trapdoor", 1, [
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:mcwtrpdoors:print_beach", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:bamboo_bridge", "item:mcwbridges:bamboo_bridge", 1, [
      ["item:minecraft:bamboo", "item:minecraft:string", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:bamboo_bridge_pier", "item:mcwbridges:bamboo_bridge_pier", 1, [
      ["item:minecraft:bamboo", "item:minecraft:string", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:bamboo_bridge_stair", "item:mcwbridges:bamboo_bridge_stair", 6, [
      ["", "", "item:mcwbridges:bamboo_bridge"],
      ["", "item:mcwbridges:bamboo_bridge", "item:mcwbridges:bamboo_bridge"],
      ["item:mcwbridges:bamboo_bridge", "item:mcwbridges:bamboo_bridge", "item:mcwbridges:bamboo_bridge"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:bamboo_classic_trapdoor", "item:mcwtrpdoors:bamboo_classic_trapdoor", 1, [
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:mcwtrpdoors:print_classic", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:bamboo_cottage_trapdoor", "item:mcwtrpdoors:bamboo_cottage_trapdoor", 1, [
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:mcwtrpdoors:print_cottage", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:bamboo_fence", "item:mcwfences:bamboo_fence", 2, [
      ["item:minecraft:bamboo", "", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
      ["", "item:minecraft:bamboo", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwtrpdoors:bamboo_four_panel_trapdoor",
      "item:mcwtrpdoors:bamboo_four_panel_trapdoor",
      1,
      [
        ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
        ["item:minecraft:bamboo", "item:mcwtrpdoors:print_four_panel", "item:minecraft:bamboo"],
        ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:bamboo_glass_trapdoor", "item:mcwtrpdoors:bamboo_glass_trapdoor", 2, [
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:glass_pane", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:bamboo_mystic_trapdoor", "item:mcwtrpdoors:bamboo_mystic_trapdoor", 1, [
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:mcwtrpdoors:print_mystic", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:bamboo_paper_trapdoor", "item:mcwtrpdoors:bamboo_paper_trapdoor", 1, [
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:mcwtrpdoors:print_paper", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:bamboo_shutter", "item:mcwwindows:bamboo_shutter", 1, [
      ["item:minecraft:bamboo"],
      ["item:minecraft:bamboo"],
      ["item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:bamboo_swamp_trapdoor", "item:mcwtrpdoors:bamboo_swamp_trapdoor", 1, [
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:mcwtrpdoors:print_swamp", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:bamboo_trapdoor", "item:mcwtrpdoors:bamboo_trapdoor", 1, [
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:bamboo_tropical_trapdoor", "item:mcwtrpdoors:bamboo_swamp_trapdoor", 1, [
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:mcwtrpdoors:print_swamp", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:barrel", "item:minecraft:barrel", 1, [
      ["tag:items:minecraft:planks", "tag:items:minecraft:wooden_slabs", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:wooden_slabs", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:basket", "item:farmersdelight:basket", 1, [
      ["item:minecraft:bamboo", "", "item:minecraft:bamboo"],
      ["item:farmersdelight:canvas", "", "item:farmersdelight:canvas"],
      ["item:minecraft:bamboo", "item:farmersdelight:canvas", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:beacon", "item:minecraft:beacon", 1, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:nether_star", "item:minecraft:glass"],
      ["item:minecraft:obsidian", "item:minecraft:obsidian", "item:minecraft:obsidian"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("betteranimalsplus:bear_cape_black", "item:betteranimalsplus:bear_cape_black", 1, [
      ["item:betteranimalsplus:bear_skin_black", "", "item:betteranimalsplus:bear_skin_black"],
      [
        "item:betteranimalsplus:bear_skin_black",
        "item:betteranimalsplus:bear_skin_black",
        "item:betteranimalsplus:bear_skin_black",
      ],
      ["", "item:betteranimalsplus:bear_skin_black", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("betteranimalsplus:bear_cape_brown", "item:betteranimalsplus:bear_cape_brown", 1, [
      ["item:betteranimalsplus:bear_skin_brown", "", "item:betteranimalsplus:bear_skin_brown"],
      [
        "item:betteranimalsplus:bear_skin_brown",
        "item:betteranimalsplus:bear_skin_brown",
        "item:betteranimalsplus:bear_skin_brown",
      ],
      ["", "item:betteranimalsplus:bear_skin_brown", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("betteranimalsplus:bear_cape_kermode", "item:betteranimalsplus:bear_cape_kermode", 1, [
      ["item:betteranimalsplus:bear_skin_kermode", "", "item:betteranimalsplus:bear_skin_kermode"],
      [
        "item:betteranimalsplus:bear_skin_kermode",
        "item:betteranimalsplus:bear_skin_kermode",
        "item:betteranimalsplus:bear_skin_kermode",
      ],
      ["", "item:betteranimalsplus:bear_skin_kermode", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:beehive", "item:minecraft:beehive", 1, [
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["item:minecraft:honeycomb", "item:minecraft:honeycomb", "item:minecraft:honeycomb"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:beetroot_crate", "item:farmersdelight:beetroot_crate", 1, [
      ["item:minecraft:beetroot", "item:minecraft:beetroot", "item:minecraft:beetroot"],
      ["item:minecraft:beetroot", "item:minecraft:beetroot", "item:minecraft:beetroot"],
      ["item:minecraft:beetroot", "item:minecraft:beetroot", "item:minecraft:beetroot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chipped:benches/alchemy_bench", "item:chipped:alchemy_bench", 1, [
      ["", "item:minecraft:brewing_stand", ""],
      ["tag:items:minecraft:wooden_slabs", "item:minecraft:crafting_table", "tag:items:minecraft:wooden_slabs"],
      ["tag:items:minecraft:wooden_slabs", "item:minecraft:enchanting_table", "tag:items:minecraft:wooden_slabs"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chipped:benches/botanist_workbench", "item:chipped:botanist_workbench", 1, [
      ["item:minecraft:flower_pot", "item:minecraft:flower_pot", "item:minecraft:flower_pot"],
      ["tag:items:minecraft:wooden_slabs", "item:minecraft:crafting_table", "tag:items:minecraft:wooden_slabs"],
      ["item:minecraft:stick", "", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chipped:benches/carpenters_table", "item:chipped:carpenters_table", 1, [
      ["", "", "item:minecraft:iron_ingot"],
      ["tag:items:minecraft:logs", "item:minecraft:crafting_table", "tag:items:minecraft:logs"],
      ["item:minecraft:wooden_axe", "tag:items:minecraft:planks", "tag:items:minecraft:logs"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chipped:benches/glassblower", "item:chipped:glassblower", 1, [
      ["item:minecraft:glass", "item:minecraft:blast_furnace", "item:minecraft:iron_ingot"],
      ["tag:items:minecraft:logs", "item:minecraft:crafting_table", "tag:items:minecraft:logs"],
      ["tag:items:minecraft:logs", "item:minecraft:bricks", "tag:items:minecraft:logs"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chipped:benches/loom_table", "item:chipped:loom_table", 1, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["tag:items:minecraft:logs", "item:minecraft:crafting_table", "tag:items:minecraft:logs"],
      ["tag:items:minecraft:logs", "tag:items:minecraft:wool", "tag:items:minecraft:logs"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chipped:benches/mason_table", "item:chipped:mason_table", 1, [
      ["item:minecraft:brick", "", ""],
      ["item:minecraft:iron_ingot", "item:minecraft:crafting_table", "item:minecraft:iron_ingot"],
      ["tag:items:minecraft:logs", "item:minecraft:clay_ball", "tag:items:minecraft:logs"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chipped:benches/mechanist_workbench", "item:chipped:mechanist_workbench", 1, [
      ["item:minecraft:redstone_torch", "", ""],
      ["item:minecraft:piston", "item:minecraft:oak_slab", "item:minecraft:oak_slab"],
      ["item:minecraft:stripped_spruce_log", "item:minecraft:tnt", "item:minecraft:stripped_spruce_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:birch_attic_roof", "item:mcwroofs:birch_attic_roof", 2, [
      ["", "item:minecraft:birch_log"],
      ["item:minecraft:birch_log", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:birch_bamboo_trapdoor", "item:mcwtrpdoors:birch_bamboo_trapdoor", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwtrpdoors:print_bamboo"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_bark_glass_door", "item:mcwdoors:birch_bark_glass_door", 3, [
      ["item:minecraft:birch_log", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:birch_log", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:birch_bark_trapdoor", "item:mcwtrpdoors:birch_bark_trapdoor", 2, [
      ["item:minecraft:birch_log", "item:minecraft:glass_pane", "item:minecraft:birch_log"],
      ["item:minecraft:birch_log", "item:minecraft:glass_pane", "item:minecraft:birch_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_barn_door", "item:mcwdoors:birch_barn_door", 2, [
      ["item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_barn_glass_door", "item:mcwdoors:birch_barn_glass_door", 3, [
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:birch_barn_trapdoor", "item:mcwtrpdoors:birch_barn_trapdoor", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwtrpdoors:birch_glass_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:birch_barred_trapdoor", "item:mcwtrpdoors:birch_barred_trapdoor", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwtrpdoors:print_barred"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_beach_door", "item:mcwdoors:birch_beach_door", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwdoors:print_jungle"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:birch_beach_trapdoor", "item:mcwtrpdoors:birch_beach_trapdoor", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwtrpdoors:print_beach"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:birch_blinds", "item:mcwwindows:birch_blinds", 3, [
      ["item:minecraft:birch_slab", "item:minecraft:birch_slab", "item:minecraft:birch_slab"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:birch_boat", "item:minecraft:birch_boat", 1, [
      ["item:minecraft:birch_planks", "", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:birch_bridge_pier", "item:mcwbridges:birch_bridge_pier", 3, [
      ["item:minecraft:birch_log", "item:minecraft:birch_fence", "item:minecraft:birch_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:birch_cabinet", "item:farmersdelight:birch_cabinet", 1, [
      ["item:minecraft:birch_slab", "item:minecraft:birch_slab", "item:minecraft:birch_slab"],
      ["item:minecraft:birch_trapdoor", "", "item:minecraft:birch_trapdoor"],
      ["item:minecraft:birch_slab", "item:minecraft:birch_slab", "item:minecraft:birch_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_classic_door", "item:mcwdoors:birch_classic_door", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwdoors:print_oak"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:birch_classic_trapdoor", "item:mcwtrpdoors:birch_classic_trapdoor", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwtrpdoors:print_classic"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_cottage_door", "item:mcwdoors:birch_cottage_door", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwdoors:print_spruce"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:birch_cottage_trapdoor", "item:mcwtrpdoors:birch_cottage_trapdoor", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwtrpdoors:print_cottage"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:birch_door", "item:minecraft:birch_door", 3, [
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:birch_fence", "item:minecraft:birch_fence", 3, [
      ["item:minecraft:birch_planks", "item:minecraft:stick", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:stick", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:birch_fence_gate", "item:minecraft:birch_fence_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:birch_planks", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:birch_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_four_panel_door", "item:mcwdoors:birch_four_panel_door", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwdoors:print_dark_oak"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:birch_four_panel_trapdoor", "item:mcwtrpdoors:birch_four_panel_trapdoor", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwtrpdoors:print_four_panel"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:birch_four_window", "item:mcwwindows:birch_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:birch_log", "item:mcwwindows:window_centre_bar_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_glass_door", "item:mcwdoors:birch_glass_door", 3, [
      ["item:minecraft:birch_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:birch_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:birch_glass_trapdoor", "item:mcwtrpdoors:birch_glass_trapdoor", 2, [
      ["item:minecraft:birch_planks", "item:minecraft:glass_pane", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:glass_pane", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:birch_hedge", "item:mcwfences:birch_hedge", 4, [
      ["item:minecraft:birch_leaves", "item:minecraft:birch_leaves"],
      ["item:minecraft:birch_leaves", "item:minecraft:birch_leaves"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:birch_highley_gate", "item:mcwfences:birch_highley_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:birch_log", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:birch_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:birch_horse_fence", "item:mcwfences:birch_horse_fence", 3, [
      ["item:minecraft:birch_log", "item:minecraft:stick", "item:minecraft:birch_log"],
      ["item:minecraft:stick", "item:minecraft:birch_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_japanese2_door", "item:mcwdoors:birch_japanese2_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:birch_slab", "item:minecraft:birch_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_japanese_door", "item:mcwdoors:birch_japanese_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:birch_log_bridge_middle", "item:mcwbridges:birch_log_bridge_middle", 4, [
      ["item:minecraft:birch_fence", "", "item:minecraft:birch_fence"],
      ["item:minecraft:birch_slab", "item:minecraft:birch_slab", "item:minecraft:birch_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:birch_log_bridge_stair", "item:mcwbridges:birch_log_bridge_stair", 6, [
      ["", "", "item:mcwbridges:birch_log_bridge_middle"],
      ["", "item:mcwbridges:birch_log_bridge_middle", "item:mcwbridges:birch_log_bridge_middle"],
      [
        "item:mcwbridges:birch_log_bridge_middle",
        "item:mcwbridges:birch_log_bridge_middle",
        "item:mcwbridges:birch_log_bridge_middle",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:birch_log_parapet", "item:mcwwindows:birch_log_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:birch_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:birch_louvered_shutter", "item:mcwwindows:birch_louvered_shutter", 3, [
      ["item:minecraft:birch_slab"],
      ["item:minecraft:birch_slab"],
      ["item:minecraft:birch_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:birch_lower_roof", "item:mcwroofs:birch_lower_roof", 4, [
      ["", "item:minecraft:birch_log", "item:minecraft:birch_log"],
      ["item:minecraft:birch_log", "item:minecraft:birch_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_modern_door", "item:mcwdoors:birch_modern_door", 3, [
      ["item:minecraft:birch_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_mystic_door", "item:mcwdoors:birch_mystic_door", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwdoors:print_mystic"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:birch_mystic_trapdoor", "item:mcwtrpdoors:birch_mystic_trapdoor", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwtrpdoors:print_mystic"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_nether_door", "item:mcwdoors:birch_nether_door", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwdoors:print_nether"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:birch_picket_fence", "item:mcwfences:birch_picket_fence", 3, [
      ["item:minecraft:birch_log", "item:minecraft:birch_planks", "item:minecraft:birch_log"],
      ["item:minecraft:birch_log", "item:minecraft:stick", "item:minecraft:birch_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:birch_plank_four_window", "item:mcwwindows:birch_plank_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:birch_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:birch_plank_parapet", "item:mcwwindows:birch_plank_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:birch_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:birch_plank_window", "item:mcwwindows:birch_plank_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:birch_planks", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:birch_plank_window2", "item:mcwwindows:birch_plank_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:birch_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:birch_planks_attic_roof", "item:mcwroofs:birch_planks_attic_roof", 2, [
      ["", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:birch_planks_lower_roof", "item:mcwroofs:birch_planks_lower_roof", 4, [
      ["", "item:minecraft:birch_planks", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwpaths:birch_planks_path", "item:mcwpaths:birch_planks_path", 6, [
      ["item:minecraft:birch_slab", "item:minecraft:birch_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:birch_planks_roof", "item:mcwroofs:birch_planks_roof", 2, [
      ["", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:birch_planks_steep_roof", "item:mcwroofs:birch_planks_steep_roof", 4, [
      ["", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:birch_planks_top_roof", "item:mcwroofs:birch_planks_top_roof", 2, [
      ["item:minecraft:birch_planks", "item:minecraft:stick", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:birch_planks_upper_lower_roof",
      "item:mcwroofs:birch_planks_upper_lower_roof",
      3,
      [
        ["", "", "item:minecraft:birch_planks"],
        ["item:minecraft:birch_planks", "item:minecraft:birch_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:birch_planks_upper_steep_roof",
      "item:mcwroofs:birch_planks_upper_steep_roof",
      3,
      [
        ["", "item:minecraft:birch_planks"],
        ["", "item:minecraft:birch_planks"],
        ["item:minecraft:birch_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:birch_pressure_plate", "item:minecraft:birch_pressure_plate", 1, [
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:birch_pyramid_gate", "item:mcwfences:birch_pyramid_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:birch_log", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:birch_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:birch_rail_bridge", "item:mcwbridges:birch_rail_bridge", 4, [
      ["item:minecraft:birch_fence", "", "item:minecraft:birch_fence"],
      ["item:minecraft:birch_fence", "item:minecraft:birch_slab", "item:minecraft:birch_fence"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:birch_ranch_trapdoor", "item:mcwtrpdoors:birch_ranch_trapdoor", 2, [
      ["item:minecraft:birch_log", "item:minecraft:stick", "item:minecraft:birch_log"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:birch_log", "item:minecraft:stick", "item:minecraft:birch_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:birch_roof", "item:mcwroofs:birch_roof", 2, [
      ["", "item:minecraft:birch_log"],
      ["item:minecraft:birch_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:birch_rope_bridge_stair", "item:mcwbridges:birch_rope_bridge_stair", 6, [
      ["", "", "item:mcwbridges:rope_birch_bridge"],
      ["", "item:mcwbridges:rope_birch_bridge", "item:mcwbridges:rope_birch_bridge"],
      ["item:mcwbridges:rope_birch_bridge", "item:mcwbridges:rope_birch_bridge", "item:mcwbridges:rope_birch_bridge"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:birch_shutter", "item:mcwwindows:birch_shutter", 3, [
      ["item:minecraft:birch_trapdoor"],
      ["item:minecraft:birch_trapdoor"],
      ["item:minecraft:birch_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:birch_sign", "item:minecraft:birch_sign", 3, [
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks", "item:minecraft:birch_planks"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:birch_slab", "item:minecraft:birch_slab", 6, [
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_stable_door", "item:mcwdoors:birch_stable_door", 3, [
      ["item:minecraft:iron_bars", "item:minecraft:iron_bars"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_stable_head_door", "item:mcwdoors:birch_stable_head_door", 1, [
      ["item:mcwdoors:birch_stable_door"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:birch_stairs", "item:minecraft:birch_stairs", 4, [
      ["item:minecraft:birch_planks", "", ""],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks", ""],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:birch_steep_roof", "item:mcwroofs:birch_steep_roof", 4, [
      ["", "item:minecraft:birch_log"],
      ["item:minecraft:birch_log", "item:minecraft:birch_log"],
      ["item:minecraft:birch_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:birch_stockade_fence", "item:mcwfences:birch_stockade_fence", 3, [
      ["item:minecraft:birch_log", "item:minecraft:birch_planks", "item:minecraft:birch_log"],
      ["item:minecraft:birch_log", "item:minecraft:birch_planks", "item:minecraft:birch_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_swamp_door", "item:mcwdoors:birch_swamp_door", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwdoors:print_swamp"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:birch_swamp_trapdoor", "item:mcwtrpdoors:birch_swamp_trapdoor", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwtrpdoors:print_swamp"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:birch_top_roof", "item:mcwroofs:birch_top_roof", 2, [
      ["item:minecraft:birch_log", "item:minecraft:stick", "item:minecraft:birch_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:birch_trapdoor", "item:minecraft:birch_trapdoor", 2, [
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_tropical_door", "item:mcwdoors:birch_tropical_door", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwdoors:print_acacia"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:birch_tropical_trapdoor", "item:mcwtrpdoors:birch_tropical_trapdoor", 1, [
      ["item:minecraft:birch_planks"],
      ["item:mcwtrpdoors:print_tropical"],
      ["item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:birch_upper_lower_roof", "item:mcwroofs:birch_upper_lower_roof", 3, [
      ["", "", "item:minecraft:birch_log"],
      ["item:minecraft:birch_log", "item:minecraft:birch_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:birch_upper_steep_roof", "item:mcwroofs:birch_upper_steep_roof", 3, [
      ["", "item:minecraft:birch_log"],
      ["", "item:minecraft:birch_log"],
      ["item:minecraft:birch_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:birch_western_door", "item:mcwdoors:birch_western_door", 3, [
      ["", "", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_slab", "item:minecraft:birch_planks"],
      ["item:minecraft:birch_planks", "item:minecraft:birch_planks", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:birch_window", "item:create:birch_window", 2, [
      ["", "item:minecraft:birch_planks", ""],
      ["item:minecraft:birch_planks", "tag:items:c:glass/colorless", "item:minecraft:birch_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:birch_window", "item:mcwwindows:birch_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:birch_log", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:birch_window2", "item:mcwwindows:birch_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:birch_log", "item:mcwwindows:window_centre_bar_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:birch_window_pane", "item:create:birch_window_pane", 16, [
      ["item:create:birch_window", "item:create:birch_window", "item:create:birch_window"],
      ["item:create:birch_window", "item:create:birch_window", "item:create:birch_window"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:birch_wired_fence", "item:mcwfences:birch_wired_fence", 3, [
      ["item:minecraft:stick", "item:minecraft:iron_bars", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:birch_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:birch_wood", "item:minecraft:birch_wood", 3, [
      ["item:minecraft:birch_log", "item:minecraft:birch_log"],
      ["item:minecraft:birch_log", "item:minecraft:birch_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chiselsandbits:bit_bag", "item:chiselsandbits:bit_bag", 1, [
      ["tag:items:minecraft:wool", "tag:items:minecraft:wool", "tag:items:minecraft:wool"],
      ["tag:items:minecraft:wool", "item:chiselsandbits:block_bit", "tag:items:minecraft:wool"],
      ["tag:items:minecraft:wool", "tag:items:minecraft:wool", "tag:items:minecraft:wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chiselsandbits:bit_storage", "item:chiselsandbits:bit_storage", 1, [
      ["tag:items:forge:ingots/iron", "tag:items:forge:glass", "tag:items:forge:ingots/iron"],
      ["tag:items:forge:glass", "tag:items:minecraft:logs", "tag:items:forge:glass"],
      ["tag:items:forge:ingots/iron", "tag:items:chiselsandbits:chisel", "tag:items:forge:ingots/iron"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:black_banner", "item:minecraft:black_banner", 1, [
      ["item:minecraft:black_wool", "item:minecraft:black_wool", "item:minecraft:black_wool"],
      ["item:minecraft:black_wool", "item:minecraft:black_wool", "item:minecraft:black_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:black_bed", "item:minecraft:black_bed", 1, [
      ["item:minecraft:black_wool", "item:minecraft:black_wool", "item:minecraft:black_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:black_carpet", "item:minecraft:black_carpet", 3, [
      ["item:minecraft:black_wool", "item:minecraft:black_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:black_carpet_from_white_carpet", "item:minecraft:black_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:black_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:black_curtain", "item:mcwwindows:black_curtain", 3, [
      ["item:minecraft:black_wool"],
      ["item:minecraft:black_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:black_mosaic_glass", "item:mcwwindows:black_mosaic_glass", 8, [
      [
        "item:minecraft:black_stained_glass",
        "item:minecraft:black_stained_glass",
        "item:minecraft:black_stained_glass",
      ],
      ["item:minecraft:black_stained_glass", "item:minecraft:black_dye", "item:minecraft:black_stained_glass"],
      [
        "item:minecraft:black_stained_glass",
        "item:minecraft:black_stained_glass",
        "item:minecraft:black_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:black_mosaic_glass_pane", "item:mcwwindows:black_mosaic_glass_pane", 16, [
      [
        "item:mcwwindows:black_mosaic_glass",
        "item:mcwwindows:black_mosaic_glass",
        "item:mcwwindows:black_mosaic_glass",
      ],
      [
        "item:mcwwindows:black_mosaic_glass",
        "item:mcwwindows:black_mosaic_glass",
        "item:mcwwindows:black_mosaic_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:black_stained_glass", "item:minecraft:black_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:black_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:black_stained_glass_pane", "item:minecraft:black_stained_glass_pane", 16, [
      [
        "item:minecraft:black_stained_glass",
        "item:minecraft:black_stained_glass",
        "item:minecraft:black_stained_glass",
      ],
      [
        "item:minecraft:black_stained_glass",
        "item:minecraft:black_stained_glass",
        "item:minecraft:black_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:black_stained_glass_pane_from_glass_pane",
      "item:minecraft:black_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:black_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:black_striped_awning", "item:mcwroofs:black_striped_awning", 1, [
      ["item:minecraft:black_carpet", "item:minecraft:white_carpet", "item:minecraft:black_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:black_terracotta", "item:minecraft:black_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:black_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:blackstone_brick_arrow_slit",
      "item:mcwwindows:blackstone_brick_arrow_slit",
      3,
      [
        ["item:minecraft:polished_blackstone_bricks", "item:minecraft:polished_blackstone_bricks"],
        ["item:minecraft:polished_blackstone_brick_slab", "item:minecraft:polished_blackstone_brick_slab"],
        ["item:minecraft:polished_blackstone_bricks", "item:minecraft:polished_blackstone_bricks"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:blackstone_brick_gothic", "item:mcwwindows:blackstone_brick_gothic", 4, [
      ["", "item:minecraft:polished_blackstone_bricks", ""],
      [
        "item:minecraft:polished_blackstone_bricks",
        "item:minecraft:glass_pane",
        "item:minecraft:polished_blackstone_bricks",
      ],
      ["", "item:minecraft:polished_blackstone_bricks", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwfences:blackstone_brick_railing_gate",
      "item:mcwfences:blackstone_brick_railing_gate",
      1,
      [
        ["item:minecraft:iron_bars", "item:minecraft:polished_blackstone_bricks", "item:minecraft:iron_bars"],
        ["item:minecraft:iron_bars", "item:minecraft:polished_blackstone_bricks", "item:minecraft:iron_bars"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:blackstone_bridge", "item:mcwbridges:blackstone_bridge", 4, [
      ["item:minecraft:blackstone_wall", "", "item:minecraft:blackstone_wall"],
      ["item:minecraft:blackstone_slab", "item:minecraft:blackstone_slab", "item:minecraft:blackstone_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:blackstone_bridge_pier", "item:mcwbridges:blackstone_bridge_pier", 3, [
      ["item:minecraft:blackstone", "item:minecraft:blackstone_wall", "item:minecraft:blackstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:blackstone_bridge_stair", "item:mcwbridges:blackstone_bridge_stair", 6, [
      ["", "", "item:mcwbridges:blackstone_bridge"],
      ["", "item:mcwbridges:blackstone_bridge", "item:mcwbridges:blackstone_bridge"],
      ["item:mcwbridges:blackstone_bridge", "item:mcwbridges:blackstone_bridge", "item:mcwbridges:blackstone_bridge"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:blackstone_four_window", "item:mcwwindows:blackstone_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:polished_blackstone", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:blackstone_parapet", "item:mcwwindows:blackstone_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:polished_blackstone", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:blackstone_railing_gate", "item:mcwfences:blackstone_railing_gate", 1, [
      ["item:minecraft:iron_bars", "item:minecraft:polished_blackstone", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:polished_blackstone", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:blackstone_slab", "item:minecraft:blackstone_slab", 6, [
      ["item:minecraft:blackstone", "item:minecraft:blackstone", "item:minecraft:blackstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:blackstone_stairs", "item:minecraft:blackstone_stairs", 4, [
      ["item:minecraft:blackstone", "", ""],
      ["item:minecraft:blackstone", "item:minecraft:blackstone", ""],
      ["item:minecraft:blackstone", "item:minecraft:blackstone", "item:minecraft:blackstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:blackstone_wall", "item:minecraft:blackstone_wall", 6, [
      ["item:minecraft:blackstone", "item:minecraft:blackstone", "item:minecraft:blackstone"],
      ["item:minecraft:blackstone", "item:minecraft:blackstone", "item:minecraft:blackstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:blackstone_window", "item:mcwwindows:blackstone_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:polished_blackstone",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:blackstone_window2", "item:mcwwindows:blackstone_window2", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:polished_blackstone", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:blast_furnace", "item:minecraft:blast_furnace", 1, [
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:furnace", "item:minecraft:iron_ingot"],
      ["item:minecraft:smooth_stone", "item:minecraft:smooth_stone", "item:minecraft:smooth_stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("betteranimalsplus:blubber_torch", "item:minecraft:torch", 4, [
      ["item:betteranimalsplus:blubber"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:blue_banner", "item:minecraft:blue_banner", 1, [
      ["item:minecraft:blue_wool", "item:minecraft:blue_wool", "item:minecraft:blue_wool"],
      ["item:minecraft:blue_wool", "item:minecraft:blue_wool", "item:minecraft:blue_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:blue_bed", "item:minecraft:blue_bed", 1, [
      ["item:minecraft:blue_wool", "item:minecraft:blue_wool", "item:minecraft:blue_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:blue_carpet", "item:minecraft:blue_carpet", 3, [
      ["item:minecraft:blue_wool", "item:minecraft:blue_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:blue_carpet_from_white_carpet", "item:minecraft:blue_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:blue_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:blue_curtain", "item:mcwwindows:blue_curtain", 3, [
      ["item:minecraft:blue_wool"],
      ["item:minecraft:blue_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:blue_ice", "item:minecraft:blue_ice", 1, [
      ["item:minecraft:packed_ice", "item:minecraft:packed_ice", "item:minecraft:packed_ice"],
      ["item:minecraft:packed_ice", "item:minecraft:packed_ice", "item:minecraft:packed_ice"],
      ["item:minecraft:packed_ice", "item:minecraft:packed_ice", "item:minecraft:packed_ice"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:blue_mosaic_glass", "item:mcwwindows:blue_mosaic_glass", 8, [
      ["item:minecraft:blue_stained_glass", "item:minecraft:blue_stained_glass", "item:minecraft:blue_stained_glass"],
      ["item:minecraft:blue_stained_glass", "item:minecraft:blue_dye", "item:minecraft:blue_stained_glass"],
      ["item:minecraft:blue_stained_glass", "item:minecraft:blue_stained_glass", "item:minecraft:blue_stained_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:blue_mosaic_glass_pane", "item:mcwwindows:blue_mosaic_glass_pane", 16, [
      ["item:mcwwindows:blue_mosaic_glass", "item:mcwwindows:blue_mosaic_glass", "item:mcwwindows:blue_mosaic_glass"],
      ["item:mcwwindows:blue_mosaic_glass", "item:mcwwindows:blue_mosaic_glass", "item:mcwwindows:blue_mosaic_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:blue_stained_glass", "item:minecraft:blue_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:blue_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:blue_stained_glass_pane", "item:minecraft:blue_stained_glass_pane", 16, [
      ["item:minecraft:blue_stained_glass", "item:minecraft:blue_stained_glass", "item:minecraft:blue_stained_glass"],
      ["item:minecraft:blue_stained_glass", "item:minecraft:blue_stained_glass", "item:minecraft:blue_stained_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:blue_stained_glass_pane_from_glass_pane",
      "item:minecraft:blue_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:blue_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:blue_striped_awning", "item:mcwroofs:blue_striped_awning", 1, [
      ["item:minecraft:blue_carpet", "item:minecraft:white_carpet", "item:minecraft:blue_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:blue_terracotta", "item:minecraft:blue_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:blue_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:bone_block", "item:minecraft:bone_block", 1, [
      ["item:minecraft:bone_meal", "item:minecraft:bone_meal", "item:minecraft:bone_meal"],
      ["item:minecraft:bone_meal", "item:minecraft:bone_meal", "item:minecraft:bone_meal"],
      ["item:minecraft:bone_meal", "item:minecraft:bone_meal", "item:minecraft:bone_meal"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:bookshelf", "item:minecraft:bookshelf", 1, [
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["item:minecraft:book", "item:minecraft:book", "item:minecraft:book"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:bow", "item:minecraft:bow", 1, [
      ["", "item:minecraft:stick", "item:minecraft:string"],
      ["item:minecraft:stick", "", "item:minecraft:string"],
      ["", "item:minecraft:stick", "item:minecraft:string"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:bowl", "item:minecraft:bowl", 4, [
      ["tag:items:minecraft:planks", "", "tag:items:minecraft:planks"],
      ["", "tag:items:minecraft:planks", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:bread", "item:minecraft:bread", 1, [
      ["item:minecraft:wheat", "item:minecraft:wheat", "item:minecraft:wheat"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:brewing_stand", "item:minecraft:brewing_stand", 1, [
      ["", "item:minecraft:blaze_rod", ""],
      [
        "tag:items:minecraft:stone_crafting_materials",
        "tag:items:minecraft:stone_crafting_materials",
        "tag:items:minecraft:stone_crafting_materials",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:brick_bridge", "item:mcwbridges:brick_bridge", 4, [
      ["item:minecraft:brick_wall", "", "item:minecraft:brick_wall"],
      ["item:minecraft:brick_slab", "item:minecraft:brick_slab", "item:minecraft:brick_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:brick_bridge_pier", "item:mcwbridges:brick_bridge_pier", 3, [
      ["item:minecraft:bricks", "item:minecraft:brick_wall", "item:minecraft:bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:brick_bridge_stair", "item:mcwbridges:brick_bridge_stair", 6, [
      ["", "", "item:mcwbridges:brick_bridge"],
      ["", "item:mcwbridges:brick_bridge", "item:mcwbridges:brick_bridge"],
      ["item:mcwbridges:brick_bridge", "item:mcwbridges:brick_bridge", "item:mcwbridges:brick_bridge"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:brick_slab", "item:minecraft:brick_slab", 6, [
      ["item:minecraft:bricks", "item:minecraft:bricks", "item:minecraft:bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:brick_stairs", "item:minecraft:brick_stairs", 4, [
      ["item:minecraft:bricks", "", ""],
      ["item:minecraft:bricks", "item:minecraft:bricks", ""],
      ["item:minecraft:bricks", "item:minecraft:bricks", "item:minecraft:bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:brick_wall", "item:minecraft:brick_wall", 6, [
      ["item:minecraft:bricks", "item:minecraft:bricks", "item:minecraft:bricks"],
      ["item:minecraft:bricks", "item:minecraft:bricks", "item:minecraft:bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:bricks", "item:minecraft:bricks", 1, [
      ["item:minecraft:brick", "item:minecraft:brick"],
      ["item:minecraft:brick", "item:minecraft:brick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:brown_banner", "item:minecraft:brown_banner", 1, [
      ["item:minecraft:brown_wool", "item:minecraft:brown_wool", "item:minecraft:brown_wool"],
      ["item:minecraft:brown_wool", "item:minecraft:brown_wool", "item:minecraft:brown_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:brown_bed", "item:minecraft:brown_bed", 1, [
      ["item:minecraft:brown_wool", "item:minecraft:brown_wool", "item:minecraft:brown_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:brown_carpet", "item:minecraft:brown_carpet", 3, [
      ["item:minecraft:brown_wool", "item:minecraft:brown_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:brown_carpet_from_white_carpet", "item:minecraft:brown_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:brown_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:brown_curtain", "item:mcwwindows:brown_curtain", 3, [
      ["item:minecraft:brown_wool"],
      ["item:minecraft:brown_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:brown_mosaic_glass", "item:mcwwindows:brown_mosaic_glass", 8, [
      [
        "item:minecraft:brown_stained_glass",
        "item:minecraft:brown_stained_glass",
        "item:minecraft:brown_stained_glass",
      ],
      ["item:minecraft:brown_stained_glass", "item:minecraft:brown_dye", "item:minecraft:brown_stained_glass"],
      [
        "item:minecraft:brown_stained_glass",
        "item:minecraft:brown_stained_glass",
        "item:minecraft:brown_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:brown_mosaic_glass_pane", "item:mcwwindows:brown_mosaic_glass_pane", 16, [
      [
        "item:mcwwindows:brown_mosaic_glass",
        "item:mcwwindows:brown_mosaic_glass",
        "item:mcwwindows:brown_mosaic_glass",
      ],
      [
        "item:mcwwindows:brown_mosaic_glass",
        "item:mcwwindows:brown_mosaic_glass",
        "item:mcwwindows:brown_mosaic_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:brown_stained_glass", "item:minecraft:brown_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:brown_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:brown_stained_glass_pane", "item:minecraft:brown_stained_glass_pane", 16, [
      [
        "item:minecraft:brown_stained_glass",
        "item:minecraft:brown_stained_glass",
        "item:minecraft:brown_stained_glass",
      ],
      [
        "item:minecraft:brown_stained_glass",
        "item:minecraft:brown_stained_glass",
        "item:minecraft:brown_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:brown_stained_glass_pane_from_glass_pane",
      "item:minecraft:brown_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:brown_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:brown_striped_awning", "item:mcwroofs:brown_striped_awning", 1, [
      ["item:minecraft:brown_carpet", "item:minecraft:white_carpet", "item:minecraft:brown_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:brown_terracotta", "item:minecraft:brown_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:brown_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:bucket", "item:minecraft:bucket", 1, [
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
      ["", "item:minecraft:iron_ingot", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:cabbage_crate", "item:farmersdelight:cabbage_crate", 1, [
      ["item:farmersdelight:cabbage", "item:farmersdelight:cabbage", "item:farmersdelight:cabbage"],
      ["item:farmersdelight:cabbage", "item:farmersdelight:cabbage", "item:farmersdelight:cabbage"],
      ["item:farmersdelight:cabbage", "item:farmersdelight:cabbage", "item:farmersdelight:cabbage"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:cable", "item:computercraft:cable", 6, [
      ["", "tag:items:c:stones", ""],
      ["tag:items:c:stones", "tag:items:c:redstone_dusts", "tag:items:c:stones"],
      ["", "tag:items:c:stones", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cake", "item:minecraft:cake", 1, [
      ["item:minecraft:milk_bucket", "item:minecraft:milk_bucket", "item:minecraft:milk_bucket"],
      ["item:minecraft:sugar", "item:minecraft:egg", "item:minecraft:sugar"],
      ["item:minecraft:wheat", "item:minecraft:wheat", "item:minecraft:wheat"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:cake_from_milk_bottle", "item:minecraft:cake", 1, [
      ["tag:items:c:milk", "tag:items:c:milk", "tag:items:c:milk"],
      ["item:minecraft:sugar", "tag:items:c:eggs", "item:minecraft:sugar"],
      ["item:minecraft:wheat", "item:minecraft:wheat", "item:minecraft:wheat"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:campfire", "item:minecraft:campfire", 1, [
      ["", "item:minecraft:stick", ""],
      ["item:minecraft:stick", "tag:items:minecraft:coals", "item:minecraft:stick"],
      ["tag:items:minecraft:logs", "tag:items:minecraft:logs", "tag:items:minecraft:logs"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:candle", "item:minecraft:candle", 1, [
      ["item:minecraft:string"],
      ["item:minecraft:honeycomb"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:canvas", "item:farmersdelight:canvas", 1, [
      ["item:farmersdelight:straw", "item:farmersdelight:straw"],
      ["item:farmersdelight:straw", "item:farmersdelight:straw"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:canvas_sign", "item:farmersdelight:canvas_sign", 3, [
      ["tag:items:minecraft:planks", "item:farmersdelight:canvas", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "item:farmersdelight:canvas", "tag:items:minecraft:planks"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:carrot_crate", "item:farmersdelight:carrot_crate", 1, [
      ["item:minecraft:carrot", "item:minecraft:carrot", "item:minecraft:carrot"],
      ["item:minecraft:carrot", "item:minecraft:carrot", "item:minecraft:carrot"],
      ["item:minecraft:carrot", "item:minecraft:carrot", "item:minecraft:carrot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:carrot_on_a_stick", "item:minecraft:carrot_on_a_stick", 1, [
      ["item:minecraft:fishing_rod", ""],
      ["", "item:minecraft:carrot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cartography_table", "item:minecraft:cartography_table", 1, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cauldron", "item:minecraft:cauldron", 1, [
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:chain", "item:minecraft:chain", 1, [
      ["item:minecraft:iron_nugget"],
      ["item:minecraft:iron_ingot"],
      ["item:minecraft:iron_nugget"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:chest", "item:minecraft:chest", 1, [
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:chest_minecart", "item:minecraft:chest_minecart", 1, [
      ["item:minecraft:chest"],
      ["item:minecraft:minecart"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chiselsandbits:chisel_diamond", "item:chiselsandbits:chisel_diamond", 1, [
      ["tag:items:forge:rods/wooden", "tag:items:forge:gems/diamond"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chiselsandbits:chisel_gold", "item:chiselsandbits:chisel_gold", 1, [
      ["tag:items:forge:rods/wooden", "tag:items:forge:ingots/gold"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chiselsandbits:chisel_iron", "item:chiselsandbits:chisel_iron", 1, [
      ["tag:items:forge:rods/wooden", "tag:items:forge:ingots/iron"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chiselsandbits:chisel_netherite", "item:chiselsandbits:chisel_netherite", 1, [
      ["tag:items:forge:rods/blaze", "tag:items:forge:ingots/netherite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chiselsandbits:chisel_stone", "item:chiselsandbits:chisel_stone", 1, [
      ["tag:items:forge:rods/wooden", "tag:items:forge:stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:chiseled_deepslate", "item:minecraft:chiseled_deepslate", 1, [
      ["item:minecraft:cobbled_deepslate_slab"],
      ["item:minecraft:cobbled_deepslate_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:chiseled_nether_bricks", "item:minecraft:chiseled_nether_bricks", 1, [
      ["item:minecraft:nether_brick_slab"],
      ["item:minecraft:nether_brick_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:chiseled_polished_blackstone",
      "item:minecraft:chiseled_polished_blackstone",
      1,
      [["item:minecraft:polished_blackstone_slab"], ["item:minecraft:polished_blackstone_slab"]]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("chiselsandbits:chiseled_printer", "item:chiselsandbits:chiseled_printer", 1, [
      ["", "tag:items:chiselsandbits:chisel", ""],
      ["tag:items:minecraft:logs", "", "tag:items:minecraft:logs"],
      ["item:minecraft:smooth_stone_slab", "item:minecraft:smooth_stone_slab", "item:minecraft:smooth_stone_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:chiseled_quartz_block", "item:minecraft:chiseled_quartz_block", 1, [
      ["item:minecraft:quartz_slab"],
      ["item:minecraft:quartz_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:chiseled_red_sandstone", "item:minecraft:chiseled_red_sandstone", 1, [
      ["item:minecraft:red_sandstone_slab"],
      ["item:minecraft:red_sandstone_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:chiseled_sandstone", "item:minecraft:chiseled_sandstone", 1, [
      ["item:minecraft:sandstone_slab"],
      ["item:minecraft:sandstone_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:chiseled_stone_bricks", "item:minecraft:chiseled_stone_bricks", 1, [
      ["item:minecraft:stone_brick_slab"],
      ["item:minecraft:stone_brick_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:chocolate_pie", "item:farmersdelight:chocolate_pie", 1, [
      ["item:minecraft:cocoa_beans", "item:minecraft:cocoa_beans", "item:minecraft:cocoa_beans"],
      ["tag:items:c:milk", "tag:items:c:milk", "tag:items:c:milk"],
      ["item:minecraft:sugar", "item:farmersdelight:pie_crust", "item:minecraft:sugar"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:chocolate_pie_from_slices", "item:farmersdelight:chocolate_pie", 1, [
      ["item:farmersdelight:chocolate_pie_slice", "item:farmersdelight:chocolate_pie_slice"],
      ["item:farmersdelight:chocolate_pie_slice", "item:farmersdelight:chocolate_pie_slice"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:clay", "item:minecraft:clay", 1, [
      ["item:minecraft:clay_ball", "item:minecraft:clay_ball"],
      ["item:minecraft:clay_ball", "item:minecraft:clay_ball"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:clock", "item:minecraft:clock", 1, [
      ["", "item:minecraft:gold_ingot", ""],
      ["item:minecraft:gold_ingot", "item:minecraft:redstone", "item:minecraft:gold_ingot"],
      ["", "item:minecraft:gold_ingot", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:coal_block", "item:minecraft:coal_block", 1, [
      ["item:minecraft:coal", "item:minecraft:coal", "item:minecraft:coal"],
      ["item:minecraft:coal", "item:minecraft:coal", "item:minecraft:coal"],
      ["item:minecraft:coal", "item:minecraft:coal", "item:minecraft:coal"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:coarse_dirt", "item:minecraft:coarse_dirt", 4, [
      ["item:minecraft:dirt", "item:minecraft:gravel"],
      ["item:minecraft:gravel", "item:minecraft:dirt"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cobbled_deepslate_slab", "item:minecraft:cobbled_deepslate_slab", 6, [
      ["item:minecraft:cobbled_deepslate", "item:minecraft:cobbled_deepslate", "item:minecraft:cobbled_deepslate"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cobbled_deepslate_stairs", "item:minecraft:cobbled_deepslate_stairs", 4, [
      ["item:minecraft:cobbled_deepslate", "", ""],
      ["item:minecraft:cobbled_deepslate", "item:minecraft:cobbled_deepslate", ""],
      ["item:minecraft:cobbled_deepslate", "item:minecraft:cobbled_deepslate", "item:minecraft:cobbled_deepslate"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cobbled_deepslate_wall", "item:minecraft:cobbled_deepslate_wall", 6, [
      ["item:minecraft:cobbled_deepslate", "item:minecraft:cobbled_deepslate", "item:minecraft:cobbled_deepslate"],
      ["item:minecraft:cobbled_deepslate", "item:minecraft:cobbled_deepslate", "item:minecraft:cobbled_deepslate"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:cobblestone_arrow_slit", "item:mcwwindows:cobblestone_arrow_slit", 3, [
      ["item:minecraft:cobblestone", "item:minecraft:cobblestone"],
      ["item:minecraft:cobblestone_slab", "item:minecraft:cobblestone_slab"],
      ["item:minecraft:cobblestone", "item:minecraft:cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cobblestone_slab", "item:minecraft:cobblestone_slab", 6, [
      ["item:minecraft:cobblestone", "item:minecraft:cobblestone", "item:minecraft:cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cobblestone_stairs", "item:minecraft:cobblestone_stairs", 4, [
      ["item:minecraft:cobblestone", "", ""],
      ["item:minecraft:cobblestone", "item:minecraft:cobblestone", ""],
      ["item:minecraft:cobblestone", "item:minecraft:cobblestone", "item:minecraft:cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cobblestone_wall", "item:minecraft:cobblestone_wall", 6, [
      ["item:minecraft:cobblestone", "item:minecraft:cobblestone", "item:minecraft:cobblestone"],
      ["item:minecraft:cobblestone", "item:minecraft:cobblestone", "item:minecraft:cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:comparator", "item:minecraft:comparator", 1, [
      ["", "item:minecraft:redstone_torch", ""],
      ["item:minecraft:redstone_torch", "item:minecraft:quartz", "item:minecraft:redstone_torch"],
      ["item:minecraft:stone", "item:minecraft:stone", "item:minecraft:stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:compass", "item:minecraft:compass", 1, [
      ["", "item:minecraft:iron_ingot", ""],
      ["item:minecraft:iron_ingot", "item:minecraft:redstone", "item:minecraft:iron_ingot"],
      ["", "item:minecraft:iron_ingot", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:composter", "item:minecraft:composter", 1, [
      ["tag:items:minecraft:wooden_slabs", "", "tag:items:minecraft:wooden_slabs"],
      ["tag:items:minecraft:wooden_slabs", "", "tag:items:minecraft:wooden_slabs"],
      ["tag:items:minecraft:wooden_slabs", "tag:items:minecraft:wooden_slabs", "tag:items:minecraft:wooden_slabs"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:computer_advanced", "item:computercraft:computer_advanced", 1, [
      ["tag:items:c:gold_ingots", "tag:items:c:gold_ingots", "tag:items:c:gold_ingots"],
      ["tag:items:c:gold_ingots", "tag:items:c:redstone_dusts", "tag:items:c:gold_ingots"],
      ["tag:items:c:gold_ingots", "tag:items:c:glass_panes", "tag:items:c:gold_ingots"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:computer_command", "item:computercraft:computer_command", 1, [
      ["tag:items:c:gold_ingots", "tag:items:c:gold_ingots", "tag:items:c:gold_ingots"],
      ["tag:items:c:gold_ingots", "item:minecraft:command_block", "tag:items:c:gold_ingots"],
      ["tag:items:c:gold_ingots", "tag:items:c:glass_panes", "tag:items:c:gold_ingots"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:computer_normal", "item:computercraft:computer_normal", 1, [
      ["tag:items:c:stones", "tag:items:c:stones", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:redstone_dusts", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:glass_panes", "tag:items:c:stones"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:conduit", "item:minecraft:conduit", 1, [
      ["item:minecraft:nautilus_shell", "item:minecraft:nautilus_shell", "item:minecraft:nautilus_shell"],
      ["item:minecraft:nautilus_shell", "item:minecraft:heart_of_the_sea", "item:minecraft:nautilus_shell"],
      ["item:minecraft:nautilus_shell", "item:minecraft:nautilus_shell", "item:minecraft:nautilus_shell"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cookie", "item:minecraft:cookie", 8, [
      ["item:minecraft:wheat", "item:minecraft:cocoa_beans", "item:minecraft:wheat"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:cooking_pot", "item:farmersdelight:cooking_pot", 1, [
      ["item:minecraft:brick", "item:minecraft:wooden_shovel", "item:minecraft:brick"],
      ["tag:items:c:iron_ingots", "item:minecraft:water_bucket", "tag:items:c:iron_ingots"],
      ["tag:items:c:iron_ingots", "tag:items:c:iron_ingots", "tag:items:c:iron_ingots"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:copper_block", "item:minecraft:copper_block", 1, [
      ["item:minecraft:copper_ingot", "item:minecraft:copper_ingot", "item:minecraft:copper_ingot"],
      ["item:minecraft:copper_ingot", "item:minecraft:copper_ingot", "item:minecraft:copper_ingot"],
      ["item:minecraft:copper_ingot", "item:minecraft:copper_ingot", "item:minecraft:copper_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:copper_shingle_slab", "item:create:copper_shingle_slab", 6, [
      ["item:create:copper_shingles", "item:create:copper_shingles", "item:create:copper_shingles"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:copper_shingle_stairs", "item:create:copper_shingle_stairs", 4, [
      ["item:create:copper_shingles", "", ""],
      ["item:create:copper_shingles", "item:create:copper_shingles", ""],
      ["item:create:copper_shingles", "item:create:copper_shingles", "item:create:copper_shingles"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:copper_tile_slab", "item:create:copper_tile_slab", 6, [
      ["item:create:copper_tiles", "item:create:copper_tiles", "item:create:copper_tiles"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:copper_tile_stairs", "item:create:copper_tile_stairs", 4, [
      ["item:create:copper_tiles", "", ""],
      ["item:create:copper_tiles", "item:create:copper_tiles", ""],
      ["item:create:copper_tiles", "item:create:copper_tiles", "item:create:copper_tiles"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/appliances/copper_backtank", "item:create:copper_backtank", 1, [
      ["item:create:andesite_alloy", "item:create:shaft", "item:create:andesite_alloy"],
      ["item:minecraft:copper_ingot", "item:minecraft:copper_block", "item:minecraft:copper_ingot"],
      ["", "item:minecraft:copper_ingot", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/appliances/diving_boots", "item:create:diving_boots", 1, [
      ["item:minecraft:copper_ingot", "", "item:minecraft:copper_ingot"],
      ["item:minecraft:copper_ingot", "", "item:minecraft:copper_ingot"],
      ["item:create:andesite_alloy", "", "item:create:andesite_alloy"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/appliances/diving_helmet", "item:create:diving_helmet", 1, [
      ["item:minecraft:copper_ingot", "item:minecraft:copper_ingot", "item:minecraft:copper_ingot"],
      ["item:minecraft:copper_ingot", "tag:items:c:glass", "item:minecraft:copper_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/appliances/linked_controller", "item:create:linked_controller", 1, [
      [
        "tag:items:minecraft:wooden_buttons",
        "tag:items:minecraft:wooden_buttons",
        "tag:items:minecraft:wooden_buttons",
      ],
      ["", "item:create:redstone_link", ""],
      [
        "tag:items:minecraft:wooden_buttons",
        "tag:items:minecraft:wooden_buttons",
        "tag:items:minecraft:wooden_buttons",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/curiosities/brown_toolbox", "item:create:brown_toolbox", 1, [
      ["", "item:create:cogwheel", ""],
      ["tag:items:c:plates/gold", "tag:items:c:chests/wooden", "tag:items:c:plates/gold"],
      ["", "tag:items:c:leather", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/curiosities/cake", "item:minecraft:cake", 1, [
      ["", "item:minecraft:milk_bucket", ""],
      ["item:minecraft:sugar", "tag:items:c:eggs", "item:minecraft:sugar"],
      ["", "tag:items:c:dough", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/curiosities/minecart_coupling", "item:create:minecart_coupling", 1, [
      ["", "", "item:create:andesite_alloy"],
      ["", "tag:items:c:plates/iron", ""],
      ["item:create:andesite_alloy", "", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/curiosities/peculiar_bell", "item:create:peculiar_bell", 1, [
      ["tag:items:c:storage_blocks/brass"],
      ["tag:items:c:plates/brass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/analog_lever", "item:create:analog_lever", 1, [
      ["tag:items:c:rods/wooden"],
      ["item:create:andesite_casing"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/andesite_ladder", "item:create:andesite_ladder", 4, [
      ["item:create:andesite_alloy", "", "item:create:andesite_alloy"],
      ["item:create:andesite_alloy", "item:create:andesite_alloy", "item:create:andesite_alloy"],
      ["item:create:andesite_alloy", "", "item:create:andesite_alloy"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/attribute_filter", "item:create:attribute_filter", 1, [
      ["tag:items:c:nuggets/brass", "tag:items:minecraft:wool", "tag:items:c:nuggets/brass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/basin", "item:create:basin", 1, [
      ["item:create:andesite_alloy", "", "item:create:andesite_alloy"],
      ["item:create:andesite_alloy", "item:create:andesite_alloy", "item:create:andesite_alloy"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/belt_connector", "item:create:belt_connector", 1, [
      ["item:minecraft:dried_kelp", "item:minecraft:dried_kelp", "item:minecraft:dried_kelp"],
      ["item:minecraft:dried_kelp", "item:minecraft:dried_kelp", "item:minecraft:dried_kelp"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/brass_hand", "item:create:brass_hand", 1, [
      ["", "item:create:andesite_alloy", ""],
      ["tag:items:c:plates/brass", "tag:items:c:plates/brass", "tag:items:c:plates/brass"],
      ["", "tag:items:c:plates/brass", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/cart_assembler", "item:create:cart_assembler", 1, [
      ["item:create:andesite_alloy", "tag:items:c:dusts/redstone", "item:create:andesite_alloy"],
      ["tag:items:minecraft:logs", "", "tag:items:minecraft:logs"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/chute", "item:create:chute", 4, [
      ["tag:items:c:plates/iron"],
      ["tag:items:c:ingots/iron"],
      ["tag:items:c:plates/iron"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/clockwork_bearing", "item:create:clockwork_bearing", 1, [
      ["tag:items:minecraft:wooden_slabs"],
      ["item:create:brass_casing"],
      ["item:create:electron_tube"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/controller_rail", "item:create:controller_rail", 6, [
      ["tag:items:c:ingots/gold", "", "tag:items:c:ingots/gold"],
      ["tag:items:c:ingots/gold", "tag:items:c:rods/wooden", "tag:items:c:ingots/gold"],
      ["tag:items:c:ingots/gold", "item:create:electron_tube", "tag:items:c:ingots/gold"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/controls", "item:create:controls", 1, [
      ["item:minecraft:lever"],
      ["item:create:railway_casing"],
      ["item:create:precision_mechanism"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/copper_valve_handle", "item:create:copper_valve_handle", 1, [
      ["tag:items:c:plates/copper", "tag:items:c:plates/copper", "tag:items:c:plates/copper"],
      ["", "item:create:andesite_alloy", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/crafter_slot_cover", "item:create:crafter_slot_cover", 1, [
      ["tag:items:c:nuggets/brass", "tag:items:c:nuggets/brass", "tag:items:c:nuggets/brass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/cuckoo_clock", "item:create:cuckoo_clock", 1, [
      ["tag:items:minecraft:planks"],
      ["item:create:andesite_casing"],
      ["item:minecraft:clock"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/deployer", "item:create:deployer", 1, [
      ["item:create:electron_tube"],
      ["item:create:andesite_casing"],
      ["item:create:brass_hand"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/display_board", "item:create:display_board", 2, [
      ["item:create:andesite_alloy", "item:create:electron_tube", "item:create:andesite_alloy"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/empty_blaze_burner", "item:create:empty_blaze_burner", 1, [
      ["", "tag:items:c:plates/iron", ""],
      ["tag:items:c:plates/iron", "tag:items:c:netherrack", "tag:items:c:plates/iron"],
      ["", "tag:items:c:plates/iron", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/encased_fan", "item:create:encased_fan", 1, [
      ["item:create:shaft"],
      ["item:create:andesite_casing"],
      ["item:create:propeller"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/filter", "item:create:filter", 1, [
      ["tag:items:c:nuggets/iron", "tag:items:minecraft:wool", "tag:items:c:nuggets/iron"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/fluid_pipe", "item:create:fluid_pipe", 4, [
      ["tag:items:c:plates/copper", "item:minecraft:copper_ingot", "tag:items:c:plates/copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/fluid_pipe_vertical", "item:create:fluid_pipe", 4, [
      ["tag:items:c:plates/copper"],
      ["item:minecraft:copper_ingot"],
      ["tag:items:c:plates/copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/fluid_tank", "item:create:fluid_tank", 1, [
      ["tag:items:c:plates/copper"],
      ["tag:items:c:barrels/wooden"],
      ["tag:items:c:plates/copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/flywheel", "item:create:flywheel", 1, [
      ["tag:items:c:ingots/brass", "tag:items:c:ingots/brass", "tag:items:c:ingots/brass"],
      ["tag:items:c:ingots/brass", "item:create:shaft", "tag:items:c:ingots/brass"],
      ["tag:items:c:ingots/brass", "tag:items:c:ingots/brass", "tag:items:c:ingots/brass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/gantry_carriage", "item:create:gantry_carriage", 1, [
      ["tag:items:minecraft:wooden_slabs"],
      ["item:create:andesite_casing"],
      ["item:create:cogwheel"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/gantry_shaft", "item:create:gantry_shaft", 8, [
      ["item:create:andesite_alloy"],
      ["tag:items:c:dusts/redstone"],
      ["item:create:andesite_alloy"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/gearbox", "item:create:gearbox", 1, [
      ["", "item:create:cogwheel", ""],
      ["item:create:cogwheel", "item:create:andesite_casing", "item:create:cogwheel"],
      ["", "item:create:cogwheel", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/goggles", "item:create:goggles", 1, [
      ["", "tag:items:c:string", ""],
      ["tag:items:c:glass", "tag:items:c:plates/gold", "tag:items:c:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/hand_crank", "item:create:hand_crank", 1, [
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["", "", "item:create:andesite_alloy"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/hose_pulley", "item:create:hose_pulley", 1, [
      ["item:create:copper_casing"],
      ["item:minecraft:dried_kelp_block"],
      ["tag:items:c:plates/copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/item_drain", "item:create:item_drain", 1, [
      ["item:minecraft:iron_bars"],
      ["item:create:copper_casing"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/item_vault", "item:create:item_vault", 1, [
      ["tag:items:c:plates/iron"],
      ["tag:items:c:barrels/wooden"],
      ["tag:items:c:plates/iron"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/linear_chassis", "item:create:linear_chassis", 3, [
      ["", "item:create:andesite_alloy", ""],
      ["tag:items:minecraft:logs", "tag:items:minecraft:logs", "tag:items:minecraft:logs"],
      ["", "item:create:andesite_alloy", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/mechanical_arm", "item:create:mechanical_arm", 1, [
      ["tag:items:c:plates/brass", "tag:items:c:plates/brass", "item:create:andesite_alloy"],
      ["tag:items:c:plates/brass", "", ""],
      ["item:create:precision_mechanism", "item:create:brass_casing", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/mechanical_bearing", "item:create:mechanical_bearing", 1, [
      ["tag:items:minecraft:wooden_slabs"],
      ["item:create:andesite_casing"],
      ["item:create:shaft"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/mechanical_crafter", "item:create:mechanical_crafter", 3, [
      ["item:create:electron_tube"],
      ["item:create:brass_casing"],
      ["item:minecraft:crafting_table"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/mechanical_drill", "item:create:mechanical_drill", 1, [
      ["", "item:create:andesite_alloy", ""],
      ["item:create:andesite_alloy", "tag:items:c:ingots/iron", "item:create:andesite_alloy"],
      ["", "item:create:andesite_casing", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/mechanical_harvester", "item:create:mechanical_harvester", 1, [
      ["item:create:andesite_alloy", "tag:items:c:plates/iron", "item:create:andesite_alloy"],
      ["item:create:andesite_alloy", "tag:items:c:plates/iron", "item:create:andesite_alloy"],
      ["", "item:create:andesite_casing", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/mechanical_mixer", "item:create:mechanical_mixer", 1, [
      ["item:create:cogwheel"],
      ["item:create:andesite_casing"],
      ["item:create:whisk"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/mechanical_piston", "item:create:mechanical_piston", 1, [
      ["tag:items:minecraft:wooden_slabs"],
      ["item:create:andesite_casing"],
      ["item:create:piston_extension_pole"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/mechanical_plough", "item:create:mechanical_plough", 1, [
      ["tag:items:c:plates/iron", "tag:items:c:plates/iron", "tag:items:c:plates/iron"],
      ["item:create:andesite_alloy", "item:create:andesite_alloy", "item:create:andesite_alloy"],
      ["", "item:create:andesite_casing", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/mechanical_press", "item:create:mechanical_press", 1, [
      ["item:create:shaft"],
      ["item:create:andesite_casing"],
      ["tag:items:c:storage_blocks/iron"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/mechanical_saw", "item:create:mechanical_saw", 1, [
      ["", "tag:items:c:plates/iron", ""],
      ["tag:items:c:plates/iron", "tag:items:c:ingots/iron", "tag:items:c:plates/iron"],
      ["", "item:create:andesite_casing", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/metal_bracket", "item:create:metal_bracket", 4, [
      ["tag:items:c:nuggets/iron", "tag:items:c:nuggets/iron", "tag:items:c:nuggets/iron"],
      ["tag:items:c:ingots/iron", "item:create:andesite_alloy", "tag:items:c:ingots/iron"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/metal_girder", "item:create:metal_girder", 8, [
      ["tag:items:c:plates/iron", "tag:items:c:plates/iron", "tag:items:c:plates/iron"],
      ["item:create:andesite_alloy", "item:create:andesite_alloy", "item:create:andesite_alloy"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/millstone", "item:create:millstone", 1, [
      ["item:create:cogwheel"],
      ["item:create:andesite_casing"],
      ["tag:items:c:stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "create:crafting/kinetics/mysterious_cuckoo_clock",
      "item:create:mysterious_cuckoo_clock",
      1,
      [
        ["", "tag:items:c:gunpowder", ""],
        ["tag:items:c:gunpowder", "item:create:cuckoo_clock", "tag:items:c:gunpowder"],
        ["", "tag:items:c:gunpowder", ""],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/nozzle", "item:create:nozzle", 1, [
      ["", "item:create:andesite_alloy", ""],
      ["", "tag:items:minecraft:wool", ""],
      ["item:create:andesite_alloy", "item:create:andesite_alloy", "item:create:andesite_alloy"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/piston_extension_pole", "item:create:piston_extension_pole", 8, [
      ["tag:items:minecraft:planks"],
      ["item:create:andesite_alloy"],
      ["tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/propeller", "item:create:propeller", 1, [
      ["", "tag:items:c:plates/iron", ""],
      ["tag:items:c:plates/iron", "item:create:andesite_alloy", "tag:items:c:plates/iron"],
      ["", "tag:items:c:plates/iron", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/radial_chassis", "item:create:radial_chassis", 3, [
      ["", "tag:items:minecraft:logs", ""],
      ["item:create:andesite_alloy", "tag:items:minecraft:logs", "item:create:andesite_alloy"],
      ["", "tag:items:minecraft:logs", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/rope_pulley", "item:create:rope_pulley", 1, [
      ["item:create:andesite_casing"],
      ["tag:items:minecraft:wool"],
      ["tag:items:c:plates/iron"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "create:crafting/kinetics/rotation_speed_controller",
      "item:create:rotation_speed_controller",
      1,
      [["item:create:precision_mechanism"], ["item:create:brass_casing"]]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/shaft", "item:create:shaft", 8, [
      ["item:create:andesite_alloy"],
      ["item:create:andesite_alloy"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/smart_chute", "item:create:smart_chute", 1, [
      ["tag:items:c:plates/brass"],
      ["item:create:chute"],
      ["item:create:electron_tube"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/smart_fluid_pipe", "item:create:smart_fluid_pipe", 1, [
      ["tag:items:c:plates/brass"],
      ["item:create:fluid_pipe"],
      ["item:create:electron_tube"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/speedometer", "item:create:speedometer", 1, [
      ["item:minecraft:compass"],
      ["item:create:andesite_casing"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/spout", "item:create:spout", 1, [
      ["item:create:copper_casing"],
      ["item:minecraft:dried_kelp"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/steam_engine", "item:create:steam_engine", 1, [
      ["tag:items:c:plates/gold"],
      ["item:create:andesite_alloy"],
      ["item:minecraft:copper_block"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/steam_whistle", "item:create:steam_whistle", 1, [
      ["tag:items:c:plates/gold"],
      ["item:minecraft:copper_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/sticker", "item:create:sticker", 1, [
      ["item:create:andesite_alloy", "tag:items:c:slimeballs", "item:create:andesite_alloy"],
      ["tag:items:c:cobblestone", "tag:items:c:dusts/redstone", "tag:items:c:cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "create:crafting/kinetics/sticky_mechanical_piston",
      "item:create:sticky_mechanical_piston",
      1,
      [["tag:items:c:slimeballs"], ["item:create:mechanical_piston"]]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/super_glue", "item:create:super_glue", 1, [
      ["tag:items:c:slimeballs", "tag:items:c:plates/iron"],
      ["tag:items:c:nuggets/iron", "tag:items:c:slimeballs"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/turntable", "item:create:turntable", 1, [
      ["tag:items:minecraft:wooden_slabs"],
      ["item:create:shaft"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/water_wheel", "item:create:water_wheel", 1, [
      ["tag:items:minecraft:wooden_slabs", "tag:items:minecraft:wooden_slabs", "tag:items:minecraft:wooden_slabs"],
      ["tag:items:minecraft:wooden_slabs", "item:create:large_cogwheel", "tag:items:minecraft:wooden_slabs"],
      ["tag:items:minecraft:wooden_slabs", "tag:items:minecraft:wooden_slabs", "tag:items:minecraft:wooden_slabs"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/weighted_ejector", "item:create:weighted_ejector", 1, [
      ["tag:items:c:plates/gold"],
      ["item:create:depot"],
      ["item:create:cogwheel"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/whisk", "item:create:whisk", 1, [
      ["", "item:create:andesite_alloy", ""],
      ["tag:items:c:plates/iron", "item:create:andesite_alloy", "tag:items:c:plates/iron"],
      ["tag:items:c:plates/iron", "tag:items:c:plates/iron", "tag:items:c:plates/iron"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/white_sail", "item:create:white_sail", 2, [
      ["tag:items:minecraft:wool", "tag:items:c:rods/wooden"],
      ["tag:items:c:rods/wooden", "item:create:andesite_alloy"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/windmill_bearing", "item:create:windmill_bearing", 1, [
      ["tag:items:minecraft:wooden_slabs"],
      ["tag:items:c:stone"],
      ["item:create:shaft"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/wooden_bracket", "item:create:wooden_bracket", 4, [
      ["tag:items:c:rods/wooden", "tag:items:c:rods/wooden", "tag:items:c:rods/wooden"],
      ["tag:items:minecraft:planks", "item:create:andesite_alloy", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/kinetics/wrench", "item:create:wrench", 1, [
      ["tag:items:c:plates/gold", "tag:items:c:plates/gold"],
      ["tag:items:c:plates/gold", "item:create:cogwheel"],
      ["", "tag:items:c:rods/wooden"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/logistics/andesite_funnel", "item:create:andesite_funnel", 2, [
      ["item:create:andesite_alloy"],
      ["item:minecraft:dried_kelp"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/logistics/andesite_tunnel", "item:create:andesite_tunnel", 2, [
      ["item:create:andesite_alloy", "item:create:andesite_alloy"],
      ["item:minecraft:dried_kelp", "item:minecraft:dried_kelp"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/logistics/brass_funnel", "item:create:brass_funnel", 2, [
      ["item:create:electron_tube"],
      ["tag:items:c:ingots/brass"],
      ["item:minecraft:dried_kelp"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/logistics/brass_tunnel", "item:create:brass_tunnel", 2, [
      ["item:create:electron_tube", ""],
      ["tag:items:c:ingots/brass", "tag:items:c:ingots/brass"],
      ["item:minecraft:dried_kelp", "item:minecraft:dried_kelp"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/logistics/content_observer", "item:create:content_observer", 1, [
      ["item:minecraft:comparator"],
      ["item:create:brass_casing"],
      ["item:create:electron_tube"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/logistics/display_link", "item:create:display_link", 1, [
      ["item:minecraft:redstone_torch"],
      ["item:create:brass_casing"],
      ["tag:items:c:plates/copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/logistics/powered_latch", "item:create:powered_latch", 1, [
      ["", "item:minecraft:redstone_torch", ""],
      ["tag:items:c:dusts/redstone", "item:minecraft:lever", "tag:items:c:dusts/redstone"],
      ["tag:items:c:stone", "tag:items:c:stone", "tag:items:c:stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/logistics/powered_toggle_latch", "item:create:powered_toggle_latch", 1, [
      ["", "item:minecraft:redstone_torch", ""],
      ["", "item:minecraft:lever", ""],
      ["tag:items:c:stone", "tag:items:c:stone", "tag:items:c:stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/logistics/pulse_extender", "item:create:pulse_extender", 1, [
      ["", "", "item:minecraft:redstone_torch"],
      ["tag:items:c:dusts/redstone", "tag:items:c:plates/brass", "item:minecraft:redstone_torch"],
      ["tag:items:c:stone", "tag:items:c:stone", "tag:items:c:stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/logistics/pulse_repeater", "item:create:pulse_repeater", 1, [
      ["tag:items:c:dusts/redstone", "tag:items:c:plates/brass", "item:minecraft:redstone_torch"],
      ["tag:items:c:stone", "tag:items:c:stone", "tag:items:c:stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/logistics/redstone_contact", "item:create:redstone_contact", 2, [
      ["", "tag:items:c:plates/iron", ""],
      ["item:minecraft:cobblestone", "tag:items:c:dusts/redstone", "item:minecraft:cobblestone"],
      ["item:minecraft:cobblestone", "item:minecraft:cobblestone", "item:minecraft:cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/logistics/redstone_link", "item:create:redstone_link", 2, [
      ["item:minecraft:redstone_torch"],
      ["item:create:brass_casing"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/materials/andesite_alloy", "item:create:andesite_alloy", 1, [
      ["tag:items:c:nuggets/iron", "item:minecraft:andesite"],
      ["item:minecraft:andesite", "tag:items:c:nuggets/iron"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/materials/andesite_alloy_from_zinc", "item:create:andesite_alloy", 1, [
      ["tag:items:c:nuggets/zinc", "item:minecraft:andesite"],
      ["item:minecraft:andesite", "tag:items:c:nuggets/zinc"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/materials/brass_block_from_compacting", "item:create:brass_block", 1, [
      ["tag:items:c:ingots/brass", "tag:items:c:ingots/brass", "tag:items:c:ingots/brass"],
      ["tag:items:c:ingots/brass", "tag:items:c:ingots/brass", "tag:items:c:ingots/brass"],
      ["tag:items:c:ingots/brass", "tag:items:c:ingots/brass", "tag:items:c:ingots/brass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/materials/brass_ingot_from_compacting", "item:create:brass_ingot", 1, [
      ["tag:items:c:nuggets/brass", "tag:items:c:nuggets/brass", "tag:items:c:nuggets/brass"],
      ["tag:items:c:nuggets/brass", "tag:items:c:nuggets/brass", "tag:items:c:nuggets/brass"],
      ["tag:items:c:nuggets/brass", "tag:items:c:nuggets/brass", "tag:items:c:nuggets/brass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/materials/copper_ingot", "item:minecraft:copper_ingot", 1, [
      ["tag:items:c:nuggets/copper", "tag:items:c:nuggets/copper", "tag:items:c:nuggets/copper"],
      ["tag:items:c:nuggets/copper", "tag:items:c:nuggets/copper", "tag:items:c:nuggets/copper"],
      ["tag:items:c:nuggets/copper", "tag:items:c:nuggets/copper", "tag:items:c:nuggets/copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/materials/electron_tube", "item:create:electron_tube", 1, [
      ["item:create:polished_rose_quartz"],
      ["tag:items:c:plates/iron"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/materials/raw_zinc_block", "item:create:raw_zinc_block", 1, [
      ["item:create:raw_zinc", "item:create:raw_zinc", "item:create:raw_zinc"],
      ["item:create:raw_zinc", "item:create:raw_zinc", "item:create:raw_zinc"],
      ["item:create:raw_zinc", "item:create:raw_zinc", "item:create:raw_zinc"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/materials/zinc_block_from_compacting", "item:create:zinc_block", 1, [
      ["tag:items:c:ingots/zinc", "tag:items:c:ingots/zinc", "tag:items:c:ingots/zinc"],
      ["tag:items:c:ingots/zinc", "tag:items:c:ingots/zinc", "tag:items:c:ingots/zinc"],
      ["tag:items:c:ingots/zinc", "tag:items:c:ingots/zinc", "tag:items:c:ingots/zinc"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/materials/zinc_ingot_from_compacting", "item:create:zinc_ingot", 1, [
      ["tag:items:c:nuggets/zinc", "tag:items:c:nuggets/zinc", "tag:items:c:nuggets/zinc"],
      ["tag:items:c:nuggets/zinc", "tag:items:c:nuggets/zinc", "tag:items:c:nuggets/zinc"],
      ["tag:items:c:nuggets/zinc", "tag:items:c:nuggets/zinc", "tag:items:c:nuggets/zinc"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/palettes/scorchia", "item:create:scorchia", 8, [
      ["item:create:scoria", "item:create:scoria", "item:create:scoria"],
      ["item:create:scoria", "tag:items:c:black_dyes", "item:create:scoria"],
      ["item:create:scoria", "item:create:scoria", "item:create:scoria"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/schematics/schematic_table", "item:create:schematic_table", 1, [
      ["tag:items:minecraft:wooden_slabs", "tag:items:minecraft:wooden_slabs", "tag:items:minecraft:wooden_slabs"],
      ["", "item:minecraft:smooth_stone", ""],
      ["", "item:minecraft:smooth_stone", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crafting/schematics/schematicannon", "item:create:schematicannon", 1, [
      ["", "item:minecraft:iron_block", ""],
      ["tag:items:minecraft:logs", "item:minecraft:iron_block", "tag:items:minecraft:logs"],
      ["item:minecraft:smooth_stone", "item:minecraft:dispenser", "item:minecraft:smooth_stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:crafting_table", "item:minecraft:crafting_table", 1, [
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:crimson_attic_roof", "item:mcwroofs:crimson_attic_roof", 2, [
      ["", "item:minecraft:crimson_stem"],
      ["item:minecraft:crimson_stem", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:crimson_bamboo_trapdoor", "item:mcwtrpdoors:crimson_bamboo_trapdoor", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwtrpdoors:print_bamboo"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:crimson_bark_trapdoor", "item:mcwtrpdoors:crimson_bark_trapdoor", 2, [
      ["item:minecraft:crimson_stem", "item:minecraft:glass_pane", "item:minecraft:crimson_stem"],
      ["item:minecraft:crimson_stem", "item:minecraft:glass_pane", "item:minecraft:crimson_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_barn_door", "item:mcwdoors:crimson_barn_door", 2, [
      ["item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_barn_glass_door", "item:mcwdoors:crimson_barn_glass_door", 3, [
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:crimson_barn_trapdoor", "item:mcwtrpdoors:crimson_barn_trapdoor", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwtrpdoors:crimson_glass_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_beach_door", "item:mcwdoors:crimson_beach_door", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwdoors:print_jungle"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:crimson_beach_trapdoor", "item:mcwtrpdoors:crimson_beach_trapdoor", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwtrpdoors:print_beach"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:crimson_blinds", "item:mcwwindows:crimson_blinds", 3, [
      ["item:minecraft:crimson_slab", "item:minecraft:crimson_slab", "item:minecraft:crimson_slab"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:crimson_bridge_pier", "item:mcwbridges:crimson_bridge_pier", 3, [
      ["item:minecraft:crimson_stem", "item:minecraft:crimson_fence", "item:minecraft:crimson_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:crimson_cabinet", "item:farmersdelight:crimson_cabinet", 1, [
      ["item:minecraft:crimson_slab", "item:minecraft:crimson_slab", "item:minecraft:crimson_slab"],
      ["item:minecraft:crimson_trapdoor", "", "item:minecraft:crimson_trapdoor"],
      ["item:minecraft:crimson_slab", "item:minecraft:crimson_slab", "item:minecraft:crimson_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_classic_door", "item:mcwdoors:crimson_classic_door", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwdoors:print_oak"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:crimson_classic_trapdoor", "item:mcwtrpdoors:crimson_classic_trapdoor", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwtrpdoors:print_classic"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_cottage_door", "item:mcwdoors:crimson_cottage_door", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwdoors:print_spruce"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:crimson_cottage_trapdoor", "item:mcwtrpdoors:crimson_cottage_trapdoor", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwtrpdoors:print_cottage"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:crimson_door", "item:minecraft:crimson_door", 3, [
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:crimson_fence", "item:minecraft:crimson_fence", 3, [
      ["item:minecraft:crimson_planks", "item:minecraft:stick", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:stick", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:crimson_fence_gate", "item:minecraft:crimson_fence_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:crimson_planks", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:crimson_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_four_panel_door", "item:mcwdoors:crimson_four_panel_door", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwdoors:print_dark_oak"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwtrpdoors:crimson_four_panel_trapdoor",
      "item:mcwtrpdoors:crimson_four_panel_trapdoor",
      1,
      [["item:minecraft:crimson_planks"], ["item:mcwtrpdoors:print_four_panel"], ["item:minecraft:crimson_planks"]]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_glass_door", "item:mcwdoors:crimson_glass_door", 3, [
      ["item:minecraft:crimson_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:crimson_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:crimson_glass_trapdoor", "item:mcwtrpdoors:crimson_glass_trapdoor", 2, [
      ["item:minecraft:crimson_planks", "item:minecraft:glass_pane", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:glass_pane", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:crimson_highley_gate", "item:mcwfences:crimson_highley_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:crimson_stem", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:crimson_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:crimson_horse_fence", "item:mcwfences:crimson_horse_fence", 3, [
      ["item:minecraft:crimson_stem", "item:minecraft:stick", "item:minecraft:crimson_stem"],
      ["item:minecraft:stick", "item:minecraft:crimson_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:crimson_hyphae", "item:minecraft:crimson_hyphae", 3, [
      ["item:minecraft:crimson_stem", "item:minecraft:crimson_stem"],
      ["item:minecraft:crimson_stem", "item:minecraft:crimson_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_japanese2_door", "item:mcwdoors:crimson_japanese2_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:crimson_slab", "item:minecraft:crimson_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_japanese_door", "item:mcwdoors:crimson_japanese_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:crimson_log_bridge_middle", "item:mcwbridges:crimson_log_bridge_middle", 4, [
      ["item:minecraft:crimson_fence", "", "item:minecraft:crimson_fence"],
      ["item:minecraft:crimson_slab", "item:minecraft:crimson_slab", "item:minecraft:crimson_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:crimson_log_bridge_stair", "item:mcwbridges:crimson_log_bridge_stair", 6, [
      ["", "", "item:mcwbridges:crimson_log_bridge_middle"],
      ["", "item:mcwbridges:crimson_log_bridge_middle", "item:mcwbridges:crimson_log_bridge_middle"],
      [
        "item:mcwbridges:crimson_log_bridge_middle",
        "item:mcwbridges:crimson_log_bridge_middle",
        "item:mcwbridges:crimson_log_bridge_middle",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:crimson_louvered_shutter", "item:mcwwindows:crimson_louvered_shutter", 3, [
      ["item:minecraft:crimson_slab"],
      ["item:minecraft:crimson_slab"],
      ["item:minecraft:crimson_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:crimson_lower_roof", "item:mcwroofs:crimson_lower_roof", 4, [
      ["", "item:minecraft:crimson_stem", "item:minecraft:crimson_stem"],
      ["item:minecraft:crimson_stem", "item:minecraft:crimson_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_modern_door", "item:mcwdoors:crimson_modern_door", 3, [
      ["item:minecraft:crimson_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_mystic_door", "item:mcwdoors:crimson_mystic_door", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwdoors:print_mystic"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:crimson_mystic_trapdoor", "item:mcwtrpdoors:crimson_mystic_trapdoor", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwtrpdoors:print_mystic"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_nether_door", "item:mcwdoors:crimson_paper_door", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwdoors:print_nether"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_paper_door", "item:mcwdoors:crimson_paper_door", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwdoors:print_birch"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:crimson_paper_trapdoor", "item:mcwtrpdoors:crimson_paper_trapdoor", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwtrpdoors:print_paper"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:crimson_picket_fence", "item:mcwfences:crimson_picket_fence", 3, [
      ["item:minecraft:crimson_stem", "item:minecraft:crimson_planks", "item:minecraft:crimson_stem"],
      ["item:minecraft:crimson_stem", "item:minecraft:stick", "item:minecraft:crimson_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:crimson_plank_parapet", "item:mcwwindows:crimson_plank_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:crimson_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:crimson_planks_attic_roof", "item:mcwroofs:crimson_planks_attic_roof", 2, [
      ["", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:crimson_planks_four_window", "item:mcwwindows:crimson_planks_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:crimson_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:crimson_planks_lower_roof", "item:mcwroofs:crimson_planks_lower_roof", 4, [
      ["", "item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwpaths:crimson_planks_path", "item:mcwpaths:crimson_planks_path", 6, [
      ["item:minecraft:crimson_slab", "item:minecraft:crimson_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:crimson_planks_roof", "item:mcwroofs:crimson_planks_roof", 2, [
      ["", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:crimson_planks_steep_roof", "item:mcwroofs:crimson_planks_steep_roof", 4, [
      ["", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:crimson_planks_top_roof", "item:mcwroofs:crimson_planks_top_roof", 2, [
      ["item:minecraft:crimson_planks", "item:minecraft:stick", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:crimson_planks_upper_lower_roof",
      "item:mcwroofs:crimson_planks_upper_lower_roof",
      3,
      [
        ["", "", "item:minecraft:crimson_planks"],
        ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:crimson_planks_upper_steep_roof",
      "item:mcwroofs:crimson_planks_upper_steep_roof",
      3,
      [
        ["", "item:minecraft:crimson_planks"],
        ["", "item:minecraft:crimson_planks"],
        ["item:minecraft:crimson_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:crimson_planks_window", "item:mcwwindows:crimson_planks_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:crimson_planks", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:crimson_planks_window2", "item:mcwwindows:crimson_planks_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:crimson_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:crimson_pressure_plate", "item:minecraft:crimson_pressure_plate", 1, [
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:crimson_pyramid_gate", "item:mcwfences:crimson_pyramid_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:crimson_stem", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:crimson_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:crimson_rail_bridge", "item:mcwbridges:crimson_rail_bridge", 4, [
      ["item:minecraft:crimson_fence", "", "item:minecraft:crimson_fence"],
      ["item:minecraft:crimson_fence", "item:minecraft:crimson_slab", "item:minecraft:crimson_fence"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:crimson_ranch_trapdoor", "item:mcwtrpdoors:crimson_ranch_trapdoor", 2, [
      ["item:minecraft:crimson_stem", "item:minecraft:stick", "item:minecraft:crimson_stem"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:crimson_stem", "item:minecraft:stick", "item:minecraft:crimson_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:crimson_roof", "item:mcwroofs:crimson_roof", 2, [
      ["", "item:minecraft:crimson_stem"],
      ["item:minecraft:crimson_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:crimson_rope_bridge_stair", "item:mcwbridges:crimson_rope_bridge_stair", 6, [
      ["", "", "item:mcwbridges:rope_crimson_bridge"],
      ["", "item:mcwbridges:rope_crimson_bridge", "item:mcwbridges:rope_crimson_bridge"],
      [
        "item:mcwbridges:rope_crimson_bridge",
        "item:mcwbridges:rope_crimson_bridge",
        "item:mcwbridges:rope_crimson_bridge",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:crimson_shutter", "item:mcwwindows:crimson_shutter", 3, [
      ["item:minecraft:crimson_trapdoor"],
      ["item:minecraft:crimson_trapdoor"],
      ["item:minecraft:crimson_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:crimson_sign", "item:minecraft:crimson_sign", 3, [
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:crimson_slab", "item:minecraft:crimson_slab", 6, [
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_stable_door", "item:mcwdoors:crimson_stable_door", 3, [
      ["item:minecraft:iron_bars", "item:minecraft:iron_bars"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_stable_head_door", "item:mcwdoors:crimson_stable_head_door", 1, [
      ["item:mcwdoors:crimson_stable_door"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:crimson_stairs", "item:minecraft:crimson_stairs", 4, [
      ["item:minecraft:crimson_planks", "", ""],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks", ""],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:crimson_steep_roof", "item:mcwroofs:crimson_steep_roof", 4, [
      ["", "item:minecraft:crimson_stem"],
      ["item:minecraft:crimson_stem", "item:minecraft:crimson_stem"],
      ["item:minecraft:crimson_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:crimson_stem_four_window", "item:mcwwindows:crimson_stem_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:crimson_stem",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_stem_glass_door", "item:mcwdoors:crimson_stem_glass_door", 3, [
      ["item:minecraft:crimson_stem", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:crimson_stem", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:crimson_stem_parapet", "item:mcwwindows:crimson_stem_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:crimson_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:crimson_stem_window", "item:mcwwindows:crimson_stem_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:crimson_stem", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:crimson_stem_window2", "item:mcwwindows:crimson_stem_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:crimson_stem",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:crimson_stockade_fence", "item:mcwfences:crimson_stockade_fence", 3, [
      ["item:minecraft:crimson_stem", "item:minecraft:crimson_planks", "item:minecraft:crimson_stem"],
      ["item:minecraft:crimson_stem", "item:minecraft:crimson_planks", "item:minecraft:crimson_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_swamp_door", "item:mcwdoors:crimson_swamp_door", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwdoors:print_swamp"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:crimson_swamp_trapdoor", "item:mcwtrpdoors:crimson_swamp_trapdoor", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwtrpdoors:print_swamp"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:crimson_top_roof", "item:mcwroofs:crimson_top_roof", 2, [
      ["item:minecraft:crimson_stem", "item:minecraft:stick", "item:minecraft:crimson_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:crimson_trapdoor", "item:minecraft:crimson_trapdoor", 2, [
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_tropical_door", "item:mcwdoors:crimson_tropical_door", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwdoors:print_acacia"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:crimson_tropical_trapdoor", "item:mcwtrpdoors:crimson_tropical_trapdoor", 1, [
      ["item:minecraft:crimson_planks"],
      ["item:mcwtrpdoors:print_tropical"],
      ["item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:crimson_upper_lower_roof", "item:mcwroofs:crimson_upper_lower_roof", 3, [
      ["", "", "item:minecraft:crimson_stem"],
      ["item:minecraft:crimson_stem", "item:minecraft:crimson_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:crimson_upper_steep_roof", "item:mcwroofs:crimson_upper_steep_roof", 3, [
      ["", "item:minecraft:crimson_stem"],
      ["", "item:minecraft:crimson_stem"],
      ["item:minecraft:crimson_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:crimson_western_door", "item:mcwdoors:crimson_western_door", 3, [
      ["", "", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_slab", "item:minecraft:crimson_planks"],
      ["item:minecraft:crimson_planks", "item:minecraft:crimson_planks", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crimson_window", "item:create:crimson_window", 2, [
      ["", "item:minecraft:crimson_planks", ""],
      ["item:minecraft:crimson_planks", "tag:items:c:glass/colorless", "item:minecraft:crimson_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:crimson_window_pane", "item:create:crimson_window_pane", 16, [
      ["item:create:crimson_window", "item:create:crimson_window", "item:create:crimson_window"],
      ["item:create:crimson_window", "item:create:crimson_window", "item:create:crimson_window"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:crimson_wired_fence", "item:mcwfences:crimson_wired_fence", 3, [
      ["item:minecraft:stick", "item:minecraft:iron_bars", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:crimson_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:crossbow", "item:minecraft:crossbow", 1, [
      ["item:minecraft:stick", "item:minecraft:iron_ingot", "item:minecraft:stick"],
      ["item:minecraft:string", "item:minecraft:tripwire_hook", "item:minecraft:string"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_andesite_brick_slab", "item:create:cut_andesite_brick_slab", 6, [
      ["item:create:cut_andesite_bricks", "item:create:cut_andesite_bricks", "item:create:cut_andesite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_andesite_brick_stairs", "item:create:cut_andesite_brick_stairs", 4, [
      ["item:create:cut_andesite_bricks", "", ""],
      ["item:create:cut_andesite_bricks", "item:create:cut_andesite_bricks", ""],
      ["item:create:cut_andesite_bricks", "item:create:cut_andesite_bricks", "item:create:cut_andesite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_andesite_brick_wall", "item:create:cut_andesite_brick_wall", 6, [
      ["item:create:cut_andesite_bricks", "item:create:cut_andesite_bricks", "item:create:cut_andesite_bricks"],
      ["item:create:cut_andesite_bricks", "item:create:cut_andesite_bricks", "item:create:cut_andesite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_andesite_slab", "item:create:cut_andesite_slab", 6, [
      ["item:create:cut_andesite", "item:create:cut_andesite", "item:create:cut_andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_andesite_stairs", "item:create:cut_andesite_stairs", 4, [
      ["item:create:cut_andesite", "", ""],
      ["item:create:cut_andesite", "item:create:cut_andesite", ""],
      ["item:create:cut_andesite", "item:create:cut_andesite", "item:create:cut_andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_andesite_wall", "item:create:cut_andesite_wall", 6, [
      ["item:create:cut_andesite", "item:create:cut_andesite", "item:create:cut_andesite"],
      ["item:create:cut_andesite", "item:create:cut_andesite", "item:create:cut_andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_asurine_brick_slab", "item:create:cut_asurine_brick_slab", 6, [
      ["item:create:cut_asurine_bricks", "item:create:cut_asurine_bricks", "item:create:cut_asurine_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_asurine_brick_stairs", "item:create:cut_asurine_brick_stairs", 4, [
      ["item:create:cut_asurine_bricks", "", ""],
      ["item:create:cut_asurine_bricks", "item:create:cut_asurine_bricks", ""],
      ["item:create:cut_asurine_bricks", "item:create:cut_asurine_bricks", "item:create:cut_asurine_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_asurine_brick_wall", "item:create:cut_asurine_brick_wall", 6, [
      ["item:create:cut_asurine_bricks", "item:create:cut_asurine_bricks", "item:create:cut_asurine_bricks"],
      ["item:create:cut_asurine_bricks", "item:create:cut_asurine_bricks", "item:create:cut_asurine_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_asurine_slab", "item:create:cut_asurine_slab", 6, [
      ["item:create:cut_asurine", "item:create:cut_asurine", "item:create:cut_asurine"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_asurine_stairs", "item:create:cut_asurine_stairs", 4, [
      ["item:create:cut_asurine", "", ""],
      ["item:create:cut_asurine", "item:create:cut_asurine", ""],
      ["item:create:cut_asurine", "item:create:cut_asurine", "item:create:cut_asurine"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_asurine_wall", "item:create:cut_asurine_wall", 6, [
      ["item:create:cut_asurine", "item:create:cut_asurine", "item:create:cut_asurine"],
      ["item:create:cut_asurine", "item:create:cut_asurine", "item:create:cut_asurine"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_calcite_brick_slab", "item:create:cut_calcite_brick_slab", 6, [
      ["item:create:cut_calcite_bricks", "item:create:cut_calcite_bricks", "item:create:cut_calcite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_calcite_brick_stairs", "item:create:cut_calcite_brick_stairs", 4, [
      ["item:create:cut_calcite_bricks", "", ""],
      ["item:create:cut_calcite_bricks", "item:create:cut_calcite_bricks", ""],
      ["item:create:cut_calcite_bricks", "item:create:cut_calcite_bricks", "item:create:cut_calcite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_calcite_brick_wall", "item:create:cut_calcite_brick_wall", 6, [
      ["item:create:cut_calcite_bricks", "item:create:cut_calcite_bricks", "item:create:cut_calcite_bricks"],
      ["item:create:cut_calcite_bricks", "item:create:cut_calcite_bricks", "item:create:cut_calcite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_calcite_slab", "item:create:cut_calcite_slab", 6, [
      ["item:create:cut_calcite", "item:create:cut_calcite", "item:create:cut_calcite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_calcite_stairs", "item:create:cut_calcite_stairs", 4, [
      ["item:create:cut_calcite", "", ""],
      ["item:create:cut_calcite", "item:create:cut_calcite", ""],
      ["item:create:cut_calcite", "item:create:cut_calcite", "item:create:cut_calcite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_calcite_wall", "item:create:cut_calcite_wall", 6, [
      ["item:create:cut_calcite", "item:create:cut_calcite", "item:create:cut_calcite"],
      ["item:create:cut_calcite", "item:create:cut_calcite", "item:create:cut_calcite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cut_copper", "item:minecraft:cut_copper", 4, [
      ["item:minecraft:copper_block", "item:minecraft:copper_block"],
      ["item:minecraft:copper_block", "item:minecraft:copper_block"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cut_copper_slab", "item:minecraft:cut_copper_slab", 6, [
      ["item:minecraft:cut_copper", "item:minecraft:cut_copper", "item:minecraft:cut_copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cut_copper_stairs", "item:minecraft:cut_copper_stairs", 4, [
      ["item:minecraft:cut_copper", "", ""],
      ["item:minecraft:cut_copper", "item:minecraft:cut_copper", ""],
      ["item:minecraft:cut_copper", "item:minecraft:cut_copper", "item:minecraft:cut_copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_crimsite_brick_slab", "item:create:cut_crimsite_brick_slab", 6, [
      ["item:create:cut_crimsite_bricks", "item:create:cut_crimsite_bricks", "item:create:cut_crimsite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_crimsite_brick_stairs", "item:create:cut_crimsite_brick_stairs", 4, [
      ["item:create:cut_crimsite_bricks", "", ""],
      ["item:create:cut_crimsite_bricks", "item:create:cut_crimsite_bricks", ""],
      ["item:create:cut_crimsite_bricks", "item:create:cut_crimsite_bricks", "item:create:cut_crimsite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_crimsite_brick_wall", "item:create:cut_crimsite_brick_wall", 6, [
      ["item:create:cut_crimsite_bricks", "item:create:cut_crimsite_bricks", "item:create:cut_crimsite_bricks"],
      ["item:create:cut_crimsite_bricks", "item:create:cut_crimsite_bricks", "item:create:cut_crimsite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_crimsite_slab", "item:create:cut_crimsite_slab", 6, [
      ["item:create:cut_crimsite", "item:create:cut_crimsite", "item:create:cut_crimsite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_crimsite_stairs", "item:create:cut_crimsite_stairs", 4, [
      ["item:create:cut_crimsite", "", ""],
      ["item:create:cut_crimsite", "item:create:cut_crimsite", ""],
      ["item:create:cut_crimsite", "item:create:cut_crimsite", "item:create:cut_crimsite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_crimsite_wall", "item:create:cut_crimsite_wall", 6, [
      ["item:create:cut_crimsite", "item:create:cut_crimsite", "item:create:cut_crimsite"],
      ["item:create:cut_crimsite", "item:create:cut_crimsite", "item:create:cut_crimsite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_deepslate_brick_slab", "item:create:cut_deepslate_brick_slab", 6, [
      ["item:create:cut_deepslate_bricks", "item:create:cut_deepslate_bricks", "item:create:cut_deepslate_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_deepslate_brick_stairs", "item:create:cut_deepslate_brick_stairs", 4, [
      ["item:create:cut_deepslate_bricks", "", ""],
      ["item:create:cut_deepslate_bricks", "item:create:cut_deepslate_bricks", ""],
      ["item:create:cut_deepslate_bricks", "item:create:cut_deepslate_bricks", "item:create:cut_deepslate_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_deepslate_brick_wall", "item:create:cut_deepslate_brick_wall", 6, [
      ["item:create:cut_deepslate_bricks", "item:create:cut_deepslate_bricks", "item:create:cut_deepslate_bricks"],
      ["item:create:cut_deepslate_bricks", "item:create:cut_deepslate_bricks", "item:create:cut_deepslate_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_deepslate_slab", "item:create:cut_deepslate_slab", 6, [
      ["item:create:cut_deepslate", "item:create:cut_deepslate", "item:create:cut_deepslate"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_deepslate_stairs", "item:create:cut_deepslate_stairs", 4, [
      ["item:create:cut_deepslate", "", ""],
      ["item:create:cut_deepslate", "item:create:cut_deepslate", ""],
      ["item:create:cut_deepslate", "item:create:cut_deepslate", "item:create:cut_deepslate"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_deepslate_wall", "item:create:cut_deepslate_wall", 6, [
      ["item:create:cut_deepslate", "item:create:cut_deepslate", "item:create:cut_deepslate"],
      ["item:create:cut_deepslate", "item:create:cut_deepslate", "item:create:cut_deepslate"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_diorite_brick_slab", "item:create:cut_diorite_brick_slab", 6, [
      ["item:create:cut_diorite_bricks", "item:create:cut_diorite_bricks", "item:create:cut_diorite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_diorite_brick_stairs", "item:create:cut_diorite_brick_stairs", 4, [
      ["item:create:cut_diorite_bricks", "", ""],
      ["item:create:cut_diorite_bricks", "item:create:cut_diorite_bricks", ""],
      ["item:create:cut_diorite_bricks", "item:create:cut_diorite_bricks", "item:create:cut_diorite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_diorite_brick_wall", "item:create:cut_diorite_brick_wall", 6, [
      ["item:create:cut_diorite_bricks", "item:create:cut_diorite_bricks", "item:create:cut_diorite_bricks"],
      ["item:create:cut_diorite_bricks", "item:create:cut_diorite_bricks", "item:create:cut_diorite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_diorite_slab", "item:create:cut_diorite_slab", 6, [
      ["item:create:cut_diorite", "item:create:cut_diorite", "item:create:cut_diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_diorite_stairs", "item:create:cut_diorite_stairs", 4, [
      ["item:create:cut_diorite", "", ""],
      ["item:create:cut_diorite", "item:create:cut_diorite", ""],
      ["item:create:cut_diorite", "item:create:cut_diorite", "item:create:cut_diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_diorite_wall", "item:create:cut_diorite_wall", 6, [
      ["item:create:cut_diorite", "item:create:cut_diorite", "item:create:cut_diorite"],
      ["item:create:cut_diorite", "item:create:cut_diorite", "item:create:cut_diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_dripstone_brick_slab", "item:create:cut_dripstone_brick_slab", 6, [
      ["item:create:cut_dripstone_bricks", "item:create:cut_dripstone_bricks", "item:create:cut_dripstone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_dripstone_brick_stairs", "item:create:cut_dripstone_brick_stairs", 4, [
      ["item:create:cut_dripstone_bricks", "", ""],
      ["item:create:cut_dripstone_bricks", "item:create:cut_dripstone_bricks", ""],
      ["item:create:cut_dripstone_bricks", "item:create:cut_dripstone_bricks", "item:create:cut_dripstone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_dripstone_brick_wall", "item:create:cut_dripstone_brick_wall", 6, [
      ["item:create:cut_dripstone_bricks", "item:create:cut_dripstone_bricks", "item:create:cut_dripstone_bricks"],
      ["item:create:cut_dripstone_bricks", "item:create:cut_dripstone_bricks", "item:create:cut_dripstone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_dripstone_slab", "item:create:cut_dripstone_slab", 6, [
      ["item:create:cut_dripstone", "item:create:cut_dripstone", "item:create:cut_dripstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_dripstone_stairs", "item:create:cut_dripstone_stairs", 4, [
      ["item:create:cut_dripstone", "", ""],
      ["item:create:cut_dripstone", "item:create:cut_dripstone", ""],
      ["item:create:cut_dripstone", "item:create:cut_dripstone", "item:create:cut_dripstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_dripstone_wall", "item:create:cut_dripstone_wall", 6, [
      ["item:create:cut_dripstone", "item:create:cut_dripstone", "item:create:cut_dripstone"],
      ["item:create:cut_dripstone", "item:create:cut_dripstone", "item:create:cut_dripstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_granite_brick_slab", "item:create:cut_granite_brick_slab", 6, [
      ["item:create:cut_granite_bricks", "item:create:cut_granite_bricks", "item:create:cut_granite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_granite_brick_stairs", "item:create:cut_granite_brick_stairs", 4, [
      ["item:create:cut_granite_bricks", "", ""],
      ["item:create:cut_granite_bricks", "item:create:cut_granite_bricks", ""],
      ["item:create:cut_granite_bricks", "item:create:cut_granite_bricks", "item:create:cut_granite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_granite_brick_wall", "item:create:cut_granite_brick_wall", 6, [
      ["item:create:cut_granite_bricks", "item:create:cut_granite_bricks", "item:create:cut_granite_bricks"],
      ["item:create:cut_granite_bricks", "item:create:cut_granite_bricks", "item:create:cut_granite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_granite_slab", "item:create:cut_granite_slab", 6, [
      ["item:create:cut_granite", "item:create:cut_granite", "item:create:cut_granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_granite_stairs", "item:create:cut_granite_stairs", 4, [
      ["item:create:cut_granite", "", ""],
      ["item:create:cut_granite", "item:create:cut_granite", ""],
      ["item:create:cut_granite", "item:create:cut_granite", "item:create:cut_granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_granite_wall", "item:create:cut_granite_wall", 6, [
      ["item:create:cut_granite", "item:create:cut_granite", "item:create:cut_granite"],
      ["item:create:cut_granite", "item:create:cut_granite", "item:create:cut_granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_limestone_brick_slab", "item:create:cut_limestone_brick_slab", 6, [
      ["item:create:cut_limestone_bricks", "item:create:cut_limestone_bricks", "item:create:cut_limestone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_limestone_brick_stairs", "item:create:cut_limestone_brick_stairs", 4, [
      ["item:create:cut_limestone_bricks", "", ""],
      ["item:create:cut_limestone_bricks", "item:create:cut_limestone_bricks", ""],
      ["item:create:cut_limestone_bricks", "item:create:cut_limestone_bricks", "item:create:cut_limestone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_limestone_brick_wall", "item:create:cut_limestone_brick_wall", 6, [
      ["item:create:cut_limestone_bricks", "item:create:cut_limestone_bricks", "item:create:cut_limestone_bricks"],
      ["item:create:cut_limestone_bricks", "item:create:cut_limestone_bricks", "item:create:cut_limestone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_limestone_slab", "item:create:cut_limestone_slab", 6, [
      ["item:create:cut_limestone", "item:create:cut_limestone", "item:create:cut_limestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_limestone_stairs", "item:create:cut_limestone_stairs", 4, [
      ["item:create:cut_limestone", "", ""],
      ["item:create:cut_limestone", "item:create:cut_limestone", ""],
      ["item:create:cut_limestone", "item:create:cut_limestone", "item:create:cut_limestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_limestone_wall", "item:create:cut_limestone_wall", 6, [
      ["item:create:cut_limestone", "item:create:cut_limestone", "item:create:cut_limestone"],
      ["item:create:cut_limestone", "item:create:cut_limestone", "item:create:cut_limestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_ochrum_brick_slab", "item:create:cut_ochrum_brick_slab", 6, [
      ["item:create:cut_ochrum_bricks", "item:create:cut_ochrum_bricks", "item:create:cut_ochrum_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_ochrum_brick_stairs", "item:create:cut_ochrum_brick_stairs", 4, [
      ["item:create:cut_ochrum_bricks", "", ""],
      ["item:create:cut_ochrum_bricks", "item:create:cut_ochrum_bricks", ""],
      ["item:create:cut_ochrum_bricks", "item:create:cut_ochrum_bricks", "item:create:cut_ochrum_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_ochrum_brick_wall", "item:create:cut_ochrum_brick_wall", 6, [
      ["item:create:cut_ochrum_bricks", "item:create:cut_ochrum_bricks", "item:create:cut_ochrum_bricks"],
      ["item:create:cut_ochrum_bricks", "item:create:cut_ochrum_bricks", "item:create:cut_ochrum_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_ochrum_slab", "item:create:cut_ochrum_slab", 6, [
      ["item:create:cut_ochrum", "item:create:cut_ochrum", "item:create:cut_ochrum"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_ochrum_stairs", "item:create:cut_ochrum_stairs", 4, [
      ["item:create:cut_ochrum", "", ""],
      ["item:create:cut_ochrum", "item:create:cut_ochrum", ""],
      ["item:create:cut_ochrum", "item:create:cut_ochrum", "item:create:cut_ochrum"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_ochrum_wall", "item:create:cut_ochrum_wall", 6, [
      ["item:create:cut_ochrum", "item:create:cut_ochrum", "item:create:cut_ochrum"],
      ["item:create:cut_ochrum", "item:create:cut_ochrum", "item:create:cut_ochrum"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cut_red_sandstone", "item:minecraft:cut_red_sandstone", 4, [
      ["item:minecraft:red_sandstone", "item:minecraft:red_sandstone"],
      ["item:minecraft:red_sandstone", "item:minecraft:red_sandstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cut_red_sandstone_slab", "item:minecraft:cut_red_sandstone_slab", 6, [
      ["item:minecraft:cut_red_sandstone", "item:minecraft:cut_red_sandstone", "item:minecraft:cut_red_sandstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cut_sandstone", "item:minecraft:cut_sandstone", 4, [
      ["item:minecraft:sandstone", "item:minecraft:sandstone"],
      ["item:minecraft:sandstone", "item:minecraft:sandstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cut_sandstone_slab", "item:minecraft:cut_sandstone_slab", 6, [
      ["item:minecraft:cut_sandstone", "item:minecraft:cut_sandstone", "item:minecraft:cut_sandstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_scorchia_brick_slab", "item:create:cut_scorchia_brick_slab", 6, [
      ["item:create:cut_scorchia_bricks", "item:create:cut_scorchia_bricks", "item:create:cut_scorchia_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_scorchia_brick_stairs", "item:create:cut_scorchia_brick_stairs", 4, [
      ["item:create:cut_scorchia_bricks", "", ""],
      ["item:create:cut_scorchia_bricks", "item:create:cut_scorchia_bricks", ""],
      ["item:create:cut_scorchia_bricks", "item:create:cut_scorchia_bricks", "item:create:cut_scorchia_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_scorchia_brick_wall", "item:create:cut_scorchia_brick_wall", 6, [
      ["item:create:cut_scorchia_bricks", "item:create:cut_scorchia_bricks", "item:create:cut_scorchia_bricks"],
      ["item:create:cut_scorchia_bricks", "item:create:cut_scorchia_bricks", "item:create:cut_scorchia_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_scorchia_slab", "item:create:cut_scorchia_slab", 6, [
      ["item:create:cut_scorchia", "item:create:cut_scorchia", "item:create:cut_scorchia"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_scorchia_stairs", "item:create:cut_scorchia_stairs", 4, [
      ["item:create:cut_scorchia", "", ""],
      ["item:create:cut_scorchia", "item:create:cut_scorchia", ""],
      ["item:create:cut_scorchia", "item:create:cut_scorchia", "item:create:cut_scorchia"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_scorchia_wall", "item:create:cut_scorchia_wall", 6, [
      ["item:create:cut_scorchia", "item:create:cut_scorchia", "item:create:cut_scorchia"],
      ["item:create:cut_scorchia", "item:create:cut_scorchia", "item:create:cut_scorchia"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_scoria_brick_slab", "item:create:cut_scoria_brick_slab", 6, [
      ["item:create:cut_scoria_bricks", "item:create:cut_scoria_bricks", "item:create:cut_scoria_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_scoria_brick_stairs", "item:create:cut_scoria_brick_stairs", 4, [
      ["item:create:cut_scoria_bricks", "", ""],
      ["item:create:cut_scoria_bricks", "item:create:cut_scoria_bricks", ""],
      ["item:create:cut_scoria_bricks", "item:create:cut_scoria_bricks", "item:create:cut_scoria_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_scoria_brick_wall", "item:create:cut_scoria_brick_wall", 6, [
      ["item:create:cut_scoria_bricks", "item:create:cut_scoria_bricks", "item:create:cut_scoria_bricks"],
      ["item:create:cut_scoria_bricks", "item:create:cut_scoria_bricks", "item:create:cut_scoria_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_scoria_slab", "item:create:cut_scoria_slab", 6, [
      ["item:create:cut_scoria", "item:create:cut_scoria", "item:create:cut_scoria"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_scoria_stairs", "item:create:cut_scoria_stairs", 4, [
      ["item:create:cut_scoria", "", ""],
      ["item:create:cut_scoria", "item:create:cut_scoria", ""],
      ["item:create:cut_scoria", "item:create:cut_scoria", "item:create:cut_scoria"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_scoria_wall", "item:create:cut_scoria_wall", 6, [
      ["item:create:cut_scoria", "item:create:cut_scoria", "item:create:cut_scoria"],
      ["item:create:cut_scoria", "item:create:cut_scoria", "item:create:cut_scoria"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_tuff_brick_slab", "item:create:cut_tuff_brick_slab", 6, [
      ["item:create:cut_tuff_bricks", "item:create:cut_tuff_bricks", "item:create:cut_tuff_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_tuff_brick_stairs", "item:create:cut_tuff_brick_stairs", 4, [
      ["item:create:cut_tuff_bricks", "", ""],
      ["item:create:cut_tuff_bricks", "item:create:cut_tuff_bricks", ""],
      ["item:create:cut_tuff_bricks", "item:create:cut_tuff_bricks", "item:create:cut_tuff_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_tuff_brick_wall", "item:create:cut_tuff_brick_wall", 6, [
      ["item:create:cut_tuff_bricks", "item:create:cut_tuff_bricks", "item:create:cut_tuff_bricks"],
      ["item:create:cut_tuff_bricks", "item:create:cut_tuff_bricks", "item:create:cut_tuff_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_tuff_slab", "item:create:cut_tuff_slab", 6, [
      ["item:create:cut_tuff", "item:create:cut_tuff", "item:create:cut_tuff"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_tuff_stairs", "item:create:cut_tuff_stairs", 4, [
      ["item:create:cut_tuff", "", ""],
      ["item:create:cut_tuff", "item:create:cut_tuff", ""],
      ["item:create:cut_tuff", "item:create:cut_tuff", "item:create:cut_tuff"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_tuff_wall", "item:create:cut_tuff_wall", 6, [
      ["item:create:cut_tuff", "item:create:cut_tuff", "item:create:cut_tuff"],
      ["item:create:cut_tuff", "item:create:cut_tuff", "item:create:cut_tuff"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_veridium_brick_slab", "item:create:cut_veridium_brick_slab", 6, [
      ["item:create:cut_veridium_bricks", "item:create:cut_veridium_bricks", "item:create:cut_veridium_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_veridium_brick_stairs", "item:create:cut_veridium_brick_stairs", 4, [
      ["item:create:cut_veridium_bricks", "", ""],
      ["item:create:cut_veridium_bricks", "item:create:cut_veridium_bricks", ""],
      ["item:create:cut_veridium_bricks", "item:create:cut_veridium_bricks", "item:create:cut_veridium_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_veridium_brick_wall", "item:create:cut_veridium_brick_wall", 6, [
      ["item:create:cut_veridium_bricks", "item:create:cut_veridium_bricks", "item:create:cut_veridium_bricks"],
      ["item:create:cut_veridium_bricks", "item:create:cut_veridium_bricks", "item:create:cut_veridium_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_veridium_slab", "item:create:cut_veridium_slab", 6, [
      ["item:create:cut_veridium", "item:create:cut_veridium", "item:create:cut_veridium"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_veridium_stairs", "item:create:cut_veridium_stairs", 4, [
      ["item:create:cut_veridium", "", ""],
      ["item:create:cut_veridium", "item:create:cut_veridium", ""],
      ["item:create:cut_veridium", "item:create:cut_veridium", "item:create:cut_veridium"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:cut_veridium_wall", "item:create:cut_veridium_wall", 6, [
      ["item:create:cut_veridium", "item:create:cut_veridium", "item:create:cut_veridium"],
      ["item:create:cut_veridium", "item:create:cut_veridium", "item:create:cut_veridium"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:cutting_board", "item:farmersdelight:cutting_board", 1, [
      ["item:minecraft:stick", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["item:minecraft:stick", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cyan_banner", "item:minecraft:cyan_banner", 1, [
      ["item:minecraft:cyan_wool", "item:minecraft:cyan_wool", "item:minecraft:cyan_wool"],
      ["item:minecraft:cyan_wool", "item:minecraft:cyan_wool", "item:minecraft:cyan_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cyan_bed", "item:minecraft:cyan_bed", 1, [
      ["item:minecraft:cyan_wool", "item:minecraft:cyan_wool", "item:minecraft:cyan_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cyan_carpet", "item:minecraft:cyan_carpet", 3, [
      ["item:minecraft:cyan_wool", "item:minecraft:cyan_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cyan_carpet_from_white_carpet", "item:minecraft:cyan_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:cyan_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:cyan_curtain", "item:mcwwindows:cyan_curtain", 3, [
      ["item:minecraft:cyan_wool"],
      ["item:minecraft:cyan_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:cyan_mosaic_glass", "item:mcwwindows:cyan_mosaic_glass", 8, [
      ["item:minecraft:cyan_stained_glass", "item:minecraft:cyan_stained_glass", "item:minecraft:cyan_stained_glass"],
      ["item:minecraft:cyan_stained_glass", "item:minecraft:cyan_dye", "item:minecraft:cyan_stained_glass"],
      ["item:minecraft:cyan_stained_glass", "item:minecraft:cyan_stained_glass", "item:minecraft:cyan_stained_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:cyan_mosaic_glass_pane", "item:mcwwindows:cyan_mosaic_glass_pane", 16, [
      ["item:mcwwindows:cyan_mosaic_glass", "item:mcwwindows:cyan_mosaic_glass", "item:mcwwindows:cyan_mosaic_glass"],
      ["item:mcwwindows:cyan_mosaic_glass", "item:mcwwindows:cyan_mosaic_glass", "item:mcwwindows:cyan_mosaic_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cyan_stained_glass", "item:minecraft:cyan_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:cyan_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cyan_stained_glass_pane", "item:minecraft:cyan_stained_glass_pane", 16, [
      ["item:minecraft:cyan_stained_glass", "item:minecraft:cyan_stained_glass", "item:minecraft:cyan_stained_glass"],
      ["item:minecraft:cyan_stained_glass", "item:minecraft:cyan_stained_glass", "item:minecraft:cyan_stained_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:cyan_stained_glass_pane_from_glass_pane",
      "item:minecraft:cyan_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:cyan_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:cyan_striped_awning", "item:mcwroofs:cyan_striped_awning", 1, [
      ["item:minecraft:cyan_carpet", "item:minecraft:white_carpet", "item:minecraft:cyan_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:cyan_terracotta", "item:minecraft:cyan_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:cyan_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:dark_oak_attic_roof", "item:mcwroofs:dark_oak_attic_roof", 2, [
      ["", "item:minecraft:dark_oak_log"],
      ["item:minecraft:dark_oak_log", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:dark_oak_bamboo_trapdoor", "item:mcwtrpdoors:dark_oak_bamboo_trapdoor", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwtrpdoors:print_bamboo"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_bark_glass_door", "item:mcwdoors:dark_oak_bark_glass_door", 3, [
      ["item:minecraft:dark_oak_log", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:dark_oak_log", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:dark_oak_bark_trapdoor", "item:mcwtrpdoors:dark_oak_bark_trapdoor", 2, [
      ["item:minecraft:dark_oak_log", "item:minecraft:glass_pane", "item:minecraft:dark_oak_log"],
      ["item:minecraft:dark_oak_log", "item:minecraft:glass_pane", "item:minecraft:dark_oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_barn_door", "item:mcwdoors:dark_oak_barn_door", 2, [
      ["item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_barn_glass_door", "item:mcwdoors:dark_oak_barn_glass_door", 3, [
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:dark_oak_barn_trapdoor", "item:mcwtrpdoors:dark_oak_barn_trapdoor", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwtrpdoors:dark_oak_glass_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:dark_oak_barred_trapdoor", "item:mcwtrpdoors:dark_oak_barred_trapdoor", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwtrpdoors:print_barred"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_beach_door", "item:mcwdoors:dark_oak_beach_door", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwdoors:print_jungle"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:dark_oak_beach_trapdoor", "item:mcwtrpdoors:dark_oak_beach_trapdoor", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwtrpdoors:print_beach"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_oak_blinds", "item:mcwwindows:dark_oak_blinds", 3, [
      ["item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_slab"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dark_oak_boat", "item:minecraft:dark_oak_boat", 1, [
      ["item:minecraft:dark_oak_planks", "", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:dark_oak_bridge_pier", "item:mcwbridges:dark_oak_bridge_pier", 3, [
      ["item:minecraft:dark_oak_log", "item:minecraft:dark_oak_fence", "item:minecraft:dark_oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:dark_oak_cabinet", "item:farmersdelight:dark_oak_cabinet", 1, [
      ["item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_slab"],
      ["item:minecraft:dark_oak_trapdoor", "", "item:minecraft:dark_oak_trapdoor"],
      ["item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_classic_door", "item:mcwdoors:dark_oak_classic_door", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwdoors:print_oak"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:dark_oak_classic_trapdoor", "item:mcwtrpdoors:dark_oak_classic_trapdoor", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwtrpdoors:print_classic"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_cottage_door", "item:mcwdoors:dark_oak_cottage_door", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwdoors:print_spruce"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:dark_oak_cottage_trapdoor", "item:mcwtrpdoors:dark_oak_cottage_trapdoor", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwtrpdoors:print_cottage"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dark_oak_door", "item:minecraft:dark_oak_door", 3, [
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dark_oak_fence", "item:minecraft:dark_oak_fence", 3, [
      ["item:minecraft:dark_oak_planks", "item:minecraft:stick", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:stick", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dark_oak_fence_gate", "item:minecraft:dark_oak_fence_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:dark_oak_planks", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:dark_oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_oak_four_window", "item:mcwwindows:dark_oak_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:dark_oak_log",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_glass_door", "item:mcwdoors:dark_oak_glass_door", 3, [
      ["item:minecraft:dark_oak_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:dark_oak_glass_trapdoor", "item:mcwtrpdoors:dark_oak_glass_trapdoor", 2, [
      ["item:minecraft:dark_oak_planks", "item:minecraft:glass_pane", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:glass_pane", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:dark_oak_hedge", "item:mcwfences:dark_oak_hedge", 4, [
      ["item:minecraft:dark_oak_leaves", "item:minecraft:dark_oak_leaves"],
      ["item:minecraft:dark_oak_leaves", "item:minecraft:dark_oak_leaves"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:dark_oak_highley_gate", "item:mcwfences:dark_oak_highley_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:dark_oak_log", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:dark_oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:dark_oak_horse_fence", "item:mcwfences:dark_oak_horse_fence", 3, [
      ["item:minecraft:dark_oak_log", "item:minecraft:stick", "item:minecraft:dark_oak_log"],
      ["item:minecraft:stick", "item:minecraft:dark_oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_japanese2_door", "item:mcwdoors:dark_oak_japanese2_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_japanese_door", "item:mcwdoors:dark_oak_japanese_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:dark_oak_log_bridge_middle", "item:mcwbridges:dark_oak_log_bridge_middle", 4, [
      ["item:minecraft:dark_oak_fence", "", "item:minecraft:dark_oak_fence"],
      ["item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:dark_oak_log_bridge_stair", "item:mcwbridges:dark_oak_log_bridge_stair", 6, [
      ["", "", "item:mcwbridges:dark_oak_log_bridge_middle"],
      ["", "item:mcwbridges:dark_oak_log_bridge_middle", "item:mcwbridges:dark_oak_log_bridge_middle"],
      [
        "item:mcwbridges:dark_oak_log_bridge_middle",
        "item:mcwbridges:dark_oak_log_bridge_middle",
        "item:mcwbridges:dark_oak_log_bridge_middle",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_oak_log_parapet", "item:mcwwindows:dark_oak_log_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:dark_oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_oak_louvered_shutter", "item:mcwwindows:dark_oak_louvered_shutter", 3, [
      ["item:minecraft:dark_oak_slab"],
      ["item:minecraft:dark_oak_slab"],
      ["item:minecraft:dark_oak_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:dark_oak_lower_roof", "item:mcwroofs:dark_oak_lower_roof", 4, [
      ["", "item:minecraft:dark_oak_log", "item:minecraft:dark_oak_log"],
      ["item:minecraft:dark_oak_log", "item:minecraft:dark_oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_modern_door", "item:mcwdoors:dark_oak_modern_door", 3, [
      ["item:minecraft:dark_oak_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_mystic_door", "item:mcwdoors:dark_oak_mystic_door", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwdoors:print_mystic"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:dark_oak_mystic_trapdoor", "item:mcwtrpdoors:dark_oak_mystic_trapdoor", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwtrpdoors:print_mystic"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_nether_door", "item:mcwdoors:dark_oak_nether_door", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwdoors:print_nether"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_paper_door", "item:mcwdoors:dark_oak_paper_door", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwdoors:print_birch"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:dark_oak_paper_trapdoor", "item:mcwtrpdoors:dark_oak_paper_trapdoor", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwtrpdoors:print_paper"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:dark_oak_picket_fence", "item:mcwfences:dark_oak_picket_fence", 3, [
      ["item:minecraft:dark_oak_log", "item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_log"],
      ["item:minecraft:dark_oak_log", "item:minecraft:stick", "item:minecraft:dark_oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_oak_plank_four_window", "item:mcwwindows:dark_oak_plank_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:dark_oak_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_oak_plank_parapet", "item:mcwwindows:dark_oak_plank_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:dark_oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_oak_plank_window", "item:mcwwindows:dark_oak_plank_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:dark_oak_planks", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_oak_plank_window2", "item:mcwwindows:dark_oak_plank_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:dark_oak_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:dark_oak_planks_attic_roof", "item:mcwroofs:dark_oak_planks_attic_roof", 2, [
      ["", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:dark_oak_planks_lower_roof", "item:mcwroofs:dark_oak_planks_lower_roof", 4, [
      ["", "item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwpaths:dark_oak_planks_path", "item:mcwpaths:dark_oak_planks_path", 6, [
      ["item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:dark_oak_planks_roof", "item:mcwroofs:dark_oak_planks_roof", 2, [
      ["", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:dark_oak_planks_steep_roof", "item:mcwroofs:dark_oak_planks_steep_roof", 4, [
      ["", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:dark_oak_planks_top_roof", "item:mcwroofs:dark_oak_planks_top_roof", 2, [
      ["item:minecraft:dark_oak_planks", "item:minecraft:stick", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:dark_oak_planks_upper_lower_roof",
      "item:mcwroofs:dark_oak_planks_upper_lower_roof",
      3,
      [
        ["", "", "item:minecraft:dark_oak_planks"],
        ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:dark_oak_planks_upper_steep_roof",
      "item:mcwroofs:dark_oak_planks_upper_steep_roof",
      3,
      [
        ["", "item:minecraft:dark_oak_planks"],
        ["", "item:minecraft:dark_oak_planks"],
        ["item:minecraft:dark_oak_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dark_oak_pressure_plate", "item:minecraft:dark_oak_pressure_plate", 1, [
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:dark_oak_pyramid_gate", "item:mcwfences:dark_oak_pyramid_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:dark_oak_log", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:dark_oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:dark_oak_rail_bridge", "item:mcwbridges:dark_oak_rail_bridge", 4, [
      ["item:minecraft:dark_oak_fence", "", "item:minecraft:dark_oak_fence"],
      ["item:minecraft:dark_oak_fence", "item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_fence"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:dark_oak_ranch_trapdoor", "item:mcwtrpdoors:dark_oak_ranch_trapdoor", 2, [
      ["item:minecraft:dark_oak_log", "item:minecraft:stick", "item:minecraft:dark_oak_log"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:dark_oak_log", "item:minecraft:stick", "item:minecraft:dark_oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:dark_oak_roof", "item:mcwroofs:dark_oak_roof", 2, [
      ["", "item:minecraft:dark_oak_log"],
      ["item:minecraft:dark_oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:dark_oak_rope_bridge_stair", "item:mcwbridges:dark_oak_rope_bridge_stair", 6, [
      ["", "", "item:mcwbridges:rope_dark_oak_bridge"],
      ["", "item:mcwbridges:rope_dark_oak_bridge", "item:mcwbridges:rope_dark_oak_bridge"],
      [
        "item:mcwbridges:rope_dark_oak_bridge",
        "item:mcwbridges:rope_dark_oak_bridge",
        "item:mcwbridges:rope_dark_oak_bridge",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_oak_shutter", "item:mcwwindows:dark_oak_shutter", 3, [
      ["item:minecraft:dark_oak_trapdoor"],
      ["item:minecraft:dark_oak_trapdoor"],
      ["item:minecraft:dark_oak_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dark_oak_sign", "item:minecraft:dark_oak_sign", 3, [
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dark_oak_slab", "item:minecraft:dark_oak_slab", 6, [
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_stable_door", "item:mcwdoors:dark_oak_stable_door", 3, [
      ["item:minecraft:iron_bars", "item:minecraft:iron_bars"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_stable_head_door", "item:mcwdoors:dark_oak_stable_head_door", 1, [
      ["item:mcwdoors:dark_oak_stable_door"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dark_oak_stairs", "item:minecraft:dark_oak_stairs", 4, [
      ["item:minecraft:dark_oak_planks", "", ""],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks", ""],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:dark_oak_steep_roof", "item:mcwroofs:dark_oak_steep_roof", 4, [
      ["", "item:minecraft:dark_oak_log"],
      ["item:minecraft:dark_oak_log", "item:minecraft:dark_oak_log"],
      ["item:minecraft:dark_oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:dark_oak_stockade_fence", "item:mcwfences:dark_oak_stockade_fence", 3, [
      ["item:minecraft:dark_oak_log", "item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_log"],
      ["item:minecraft:dark_oak_log", "item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_swamp_door", "item:mcwdoors:dark_oak_swamp_door", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwdoors:print_swamp"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:dark_oak_swamp_trapdoor", "item:mcwtrpdoors:dark_oak_swamp_trapdoor", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwtrpdoors:print_swamp"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:dark_oak_top_roof", "item:mcwroofs:dark_oak_top_roof", 2, [
      ["item:minecraft:dark_oak_log", "item:minecraft:stick", "item:minecraft:dark_oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dark_oak_trapdoor", "item:minecraft:dark_oak_trapdoor", 2, [
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_tropical_door", "item:mcwdoors:dark_oak_tropical_door", 1, [
      ["item:minecraft:dark_oak_planks"],
      ["item:mcwdoors:print_acacia"],
      ["item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwtrpdoors:dark_oak_tropical_trapdoor",
      "item:mcwtrpdoors:dark_oak_tropical_trapdoor",
      1,
      [["item:minecraft:dark_oak_planks"], ["item:mcwtrpdoors:print_tropical"], ["item:minecraft:dark_oak_planks"]]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:dark_oak_upper_lower_roof", "item:mcwroofs:dark_oak_upper_lower_roof", 3, [
      ["", "", "item:minecraft:dark_oak_log"],
      ["item:minecraft:dark_oak_log", "item:minecraft:dark_oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:dark_oak_upper_steep_roof", "item:mcwroofs:dark_oak_upper_steep_roof", 3, [
      ["", "item:minecraft:dark_oak_log"],
      ["", "item:minecraft:dark_oak_log"],
      ["item:minecraft:dark_oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:dark_oak_western_door", "item:mcwdoors:dark_oak_western_door", 3, [
      ["", "", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_planks"],
      ["item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:dark_oak_window", "item:create:dark_oak_window", 2, [
      ["", "item:minecraft:dark_oak_planks", ""],
      ["item:minecraft:dark_oak_planks", "tag:items:c:glass/colorless", "item:minecraft:dark_oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_oak_window", "item:mcwwindows:dark_oak_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:dark_oak_log", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_oak_window2", "item:mcwwindows:dark_oak_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:dark_oak_log",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:dark_oak_window_pane", "item:create:dark_oak_window_pane", 16, [
      ["item:create:dark_oak_window", "item:create:dark_oak_window", "item:create:dark_oak_window"],
      ["item:create:dark_oak_window", "item:create:dark_oak_window", "item:create:dark_oak_window"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:dark_oak_wired_fence", "item:mcwfences:dark_oak_wired_fence", 3, [
      ["item:minecraft:stick", "item:minecraft:iron_bars", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:dark_oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dark_oak_wood", "item:minecraft:dark_oak_wood", 3, [
      ["item:minecraft:dark_oak_log", "item:minecraft:dark_oak_log"],
      ["item:minecraft:dark_oak_log", "item:minecraft:dark_oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dark_prismarine", "item:minecraft:dark_prismarine", 1, [
      ["item:minecraft:prismarine_shard", "item:minecraft:prismarine_shard", "item:minecraft:prismarine_shard"],
      ["item:minecraft:prismarine_shard", "item:minecraft:black_dye", "item:minecraft:prismarine_shard"],
      ["item:minecraft:prismarine_shard", "item:minecraft:prismarine_shard", "item:minecraft:prismarine_shard"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:dark_prismarine_brick_arrow_slit",
      "item:mcwwindows:dark_prismarine_brick_arrow_slit",
      3,
      [
        ["item:minecraft:dark_prismarine", "item:minecraft:dark_prismarine"],
        ["item:minecraft:dark_prismarine_slab", "item:minecraft:dark_prismarine_slab"],
        ["item:minecraft:dark_prismarine", "item:minecraft:dark_prismarine"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:dark_prismarine_brick_gothic",
      "item:mcwwindows:dark_prismarine_brick_gothic",
      4,
      [
        ["", "item:minecraft:dark_prismarine", ""],
        ["item:minecraft:dark_prismarine", "item:minecraft:glass_pane", "item:minecraft:dark_prismarine"],
        ["", "item:minecraft:dark_prismarine", ""],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:dark_prismarine_four_window",
      "item:mcwwindows:dark_prismarine_four_window",
      8,
      [
        ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
        ["item:mcwwindows:window_base", "item:minecraft:dark_prismarine", "item:mcwwindows:window_base"],
        ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_prismarine_parapet", "item:mcwwindows:dark_prismarine_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:dark_prismarine", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dark_prismarine_slab", "item:minecraft:dark_prismarine_slab", 6, [
      ["item:minecraft:dark_prismarine", "item:minecraft:dark_prismarine", "item:minecraft:dark_prismarine"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dark_prismarine_stairs", "item:minecraft:dark_prismarine_stairs", 4, [
      ["item:minecraft:dark_prismarine", "", ""],
      ["item:minecraft:dark_prismarine", "item:minecraft:dark_prismarine", ""],
      ["item:minecraft:dark_prismarine", "item:minecraft:dark_prismarine", "item:minecraft:dark_prismarine"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_prismarine_window", "item:mcwwindows:dark_prismarine_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:dark_prismarine",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:dark_prismarine_window2", "item:mcwwindows:dark_prismarine_window2", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:dark_prismarine", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:daylight_detector", "item:minecraft:daylight_detector", 1, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:quartz", "item:minecraft:quartz", "item:minecraft:quartz"],
      ["tag:items:minecraft:wooden_slabs", "tag:items:minecraft:wooden_slabs", "tag:items:minecraft:wooden_slabs"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("yigd:death_scroll", "item:minecraft:air", 1, [
      ["tag:items:minecraft:candles", "item:minecraft:phantom_membrane", "tag:items:minecraft:candles"],
      ["item:minecraft:ender_pearl", "item:minecraft:ender_eye", "item:minecraft:ender_pearl"],
      ["item:minecraft:amethyst_shard", "item:minecraft:crying_obsidian", "item:minecraft:amethyst_shard"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:deepslate_brick_bridge", "item:mcwbridges:deepslate_brick_bridge", 4, [
      ["item:minecraft:deepslate_brick_wall", "", "item:minecraft:deepslate_brick_wall"],
      [
        "item:minecraft:deepslate_brick_slab",
        "item:minecraft:deepslate_brick_slab",
        "item:minecraft:deepslate_brick_slab",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwbridges:deepslate_brick_bridge_pier",
      "item:mcwbridges:deepslate_brick_bridge_pier",
      3,
      [["item:minecraft:deepslate_bricks", "item:minecraft:deepslate_brick_wall", "item:minecraft:deepslate_bricks"]]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwbridges:deepslate_brick_bridge_stair",
      "item:mcwbridges:deepslate_brick_bridge_stair",
      6,
      [
        ["", "", "item:mcwbridges:deepslate_brick_bridge"],
        ["", "item:mcwbridges:deepslate_brick_bridge", "item:mcwbridges:deepslate_brick_bridge"],
        [
          "item:mcwbridges:deepslate_brick_bridge",
          "item:mcwbridges:deepslate_brick_bridge",
          "item:mcwbridges:deepslate_brick_bridge",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwfences:deepslate_brick_railing_gate",
      "item:mcwfences:deepslate_brick_railing_gate",
      1,
      [
        ["item:minecraft:iron_bars", "item:minecraft:deepslate_bricks", "item:minecraft:iron_bars"],
        ["item:minecraft:iron_bars", "item:minecraft:deepslate_bricks", "item:minecraft:iron_bars"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:deepslate_brick_slab", "item:minecraft:deepslate_brick_slab", 6, [
      ["item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:deepslate_brick_stairs", "item:minecraft:deepslate_brick_stairs", 4, [
      ["item:minecraft:deepslate_bricks", "", ""],
      ["item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks", ""],
      ["item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:deepslate_brick_wall", "item:minecraft:deepslate_brick_wall", 6, [
      ["item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks"],
      ["item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks", 4, [
      ["item:minecraft:polished_deepslate", "item:minecraft:polished_deepslate"],
      ["item:minecraft:polished_deepslate", "item:minecraft:polished_deepslate"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:deepslate_railing_gate", "item:mcwfences:deepslate_railing_gate", 1, [
      ["item:minecraft:iron_bars", "item:minecraft:deepslate", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:deepslate", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:deepslate_tile_bridge", "item:mcwbridges:deepslate_tile_bridge", 4, [
      ["item:minecraft:deepslate_tile_wall", "", "item:minecraft:deepslate_tile_wall"],
      [
        "item:minecraft:deepslate_tile_slab",
        "item:minecraft:deepslate_tile_slab",
        "item:minecraft:deepslate_tile_slab",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:deepslate_tile_bridge_pier", "item:mcwbridges:deepslate_tile_bridge_pier", 3, [
      ["item:minecraft:deepslate_tiles", "item:minecraft:deepslate_tile_wall", "item:minecraft:deepslate_tiles"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwbridges:deepslate_tile_bridge_stair",
      "item:mcwbridges:deepslate_tile_bridge_stair",
      6,
      [
        ["", "", "item:mcwbridges:deepslate_tile_bridge"],
        ["", "item:mcwbridges:deepslate_tile_bridge", "item:mcwbridges:deepslate_tile_bridge"],
        [
          "item:mcwbridges:deepslate_tile_bridge",
          "item:mcwbridges:deepslate_tile_bridge",
          "item:mcwbridges:deepslate_tile_bridge",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:deepslate_tile_slab", "item:minecraft:deepslate_tile_slab", 6, [
      ["item:minecraft:deepslate_tiles", "item:minecraft:deepslate_tiles", "item:minecraft:deepslate_tiles"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:deepslate_tile_stairs", "item:minecraft:deepslate_tile_stairs", 4, [
      ["item:minecraft:deepslate_tiles", "", ""],
      ["item:minecraft:deepslate_tiles", "item:minecraft:deepslate_tiles", ""],
      ["item:minecraft:deepslate_tiles", "item:minecraft:deepslate_tiles", "item:minecraft:deepslate_tiles"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:deepslate_tile_wall", "item:minecraft:deepslate_tile_wall", 6, [
      ["item:minecraft:deepslate_tiles", "item:minecraft:deepslate_tiles", "item:minecraft:deepslate_tiles"],
      ["item:minecraft:deepslate_tiles", "item:minecraft:deepslate_tiles", "item:minecraft:deepslate_tiles"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:deepslate_tiles", "item:minecraft:deepslate_tiles", 4, [
      ["item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks"],
      ["item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:detector_rail", "item:minecraft:detector_rail", 6, [
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:stone_pressure_plate", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:redstone", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diamond_axe", "item:minecraft:diamond_axe", 1, [
      ["item:minecraft:diamond", "item:minecraft:diamond"],
      ["item:minecraft:diamond", "item:minecraft:stick"],
      ["", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diamond_block", "item:minecraft:diamond_block", 1, [
      ["item:minecraft:diamond", "item:minecraft:diamond", "item:minecraft:diamond"],
      ["item:minecraft:diamond", "item:minecraft:diamond", "item:minecraft:diamond"],
      ["item:minecraft:diamond", "item:minecraft:diamond", "item:minecraft:diamond"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diamond_boots", "item:minecraft:diamond_boots", 1, [
      ["item:minecraft:diamond", "", "item:minecraft:diamond"],
      ["item:minecraft:diamond", "", "item:minecraft:diamond"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diamond_chestplate", "item:minecraft:diamond_chestplate", 1, [
      ["item:minecraft:diamond", "", "item:minecraft:diamond"],
      ["item:minecraft:diamond", "item:minecraft:diamond", "item:minecraft:diamond"],
      ["item:minecraft:diamond", "item:minecraft:diamond", "item:minecraft:diamond"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diamond_helmet", "item:minecraft:diamond_helmet", 1, [
      ["item:minecraft:diamond", "item:minecraft:diamond", "item:minecraft:diamond"],
      ["item:minecraft:diamond", "", "item:minecraft:diamond"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diamond_hoe", "item:minecraft:diamond_hoe", 1, [
      ["item:minecraft:diamond", "item:minecraft:diamond"],
      ["", "item:minecraft:stick"],
      ["", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:diamond_knife", "item:farmersdelight:diamond_knife", 1, [
      ["item:minecraft:diamond"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diamond_leggings", "item:minecraft:diamond_leggings", 1, [
      ["item:minecraft:diamond", "item:minecraft:diamond", "item:minecraft:diamond"],
      ["item:minecraft:diamond", "", "item:minecraft:diamond"],
      ["item:minecraft:diamond", "", "item:minecraft:diamond"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diamond_pickaxe", "item:minecraft:diamond_pickaxe", 1, [
      ["item:minecraft:diamond", "item:minecraft:diamond", "item:minecraft:diamond"],
      ["", "item:minecraft:stick", ""],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diamond_shovel", "item:minecraft:diamond_shovel", 1, [
      ["item:minecraft:diamond"],
      ["item:minecraft:stick"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diamond_sword", "item:minecraft:diamond_sword", 1, [
      ["item:minecraft:diamond"],
      ["item:minecraft:diamond"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diorite", "item:minecraft:diorite", 2, [
      ["item:minecraft:cobblestone", "item:minecraft:quartz"],
      ["item:minecraft:quartz", "item:minecraft:cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:diorite_four_window", "item:mcwwindows:diorite_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:diorite", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:diorite_louvered_shutter", "item:mcwwindows:diorite_louvered_shutter", 3, [
      ["item:minecraft:diorite_slab"],
      ["item:minecraft:diorite_slab"],
      ["item:minecraft:diorite_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:diorite_parapet", "item:mcwwindows:diorite_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:diorite", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:diorite_railing_gate", "item:mcwfences:diorite_railing_gate", 1, [
      ["item:minecraft:iron_bars", "item:minecraft:polished_diorite", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:polished_diorite", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diorite_slab", "item:minecraft:diorite_slab", 6, [
      ["item:minecraft:diorite", "item:minecraft:diorite", "item:minecraft:diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diorite_stairs", "item:minecraft:diorite_stairs", 4, [
      ["item:minecraft:diorite", "", ""],
      ["item:minecraft:diorite", "item:minecraft:diorite", ""],
      ["item:minecraft:diorite", "item:minecraft:diorite", "item:minecraft:diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:diorite_wall", "item:minecraft:diorite_wall", 6, [
      ["item:minecraft:diorite", "item:minecraft:diorite", "item:minecraft:diorite"],
      ["item:minecraft:diorite", "item:minecraft:diorite", "item:minecraft:diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:diorite_window", "item:mcwwindows:diorite_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:diorite", "item:mcwwindows:window_centre_bar_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:diorite_window2", "item:mcwwindows:diorite_window2", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:diorite", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:disk_drive", "item:computercraft:disk_drive", 1, [
      ["tag:items:c:stones", "tag:items:c:stones", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:redstone_dusts", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:redstone_dusts", "tag:items:c:stones"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dispenser", "item:minecraft:dispenser", 1, [
      ["item:minecraft:cobblestone", "item:minecraft:cobblestone", "item:minecraft:cobblestone"],
      ["item:minecraft:cobblestone", "item:minecraft:bow", "item:minecraft:cobblestone"],
      ["item:minecraft:cobblestone", "item:minecraft:redstone", "item:minecraft:cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dried_kelp_block", "item:minecraft:dried_kelp_block", 1, [
      ["item:minecraft:dried_kelp", "item:minecraft:dried_kelp", "item:minecraft:dried_kelp"],
      ["item:minecraft:dried_kelp", "item:minecraft:dried_kelp", "item:minecraft:dried_kelp"],
      ["item:minecraft:dried_kelp", "item:minecraft:dried_kelp", "item:minecraft:dried_kelp"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dripstone_block", "item:minecraft:dripstone_block", 1, [
      ["item:minecraft:pointed_dripstone", "item:minecraft:pointed_dripstone"],
      ["item:minecraft:pointed_dripstone", "item:minecraft:pointed_dripstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:dropper", "item:minecraft:dropper", 1, [
      ["item:minecraft:cobblestone", "item:minecraft:cobblestone", "item:minecraft:cobblestone"],
      ["item:minecraft:cobblestone", "", "item:minecraft:cobblestone"],
      ["item:minecraft:cobblestone", "item:minecraft:redstone", "item:minecraft:cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:dry_bamboo_bridge", "item:mcwbridges:dry_bamboo_bridge", 1, [
      ["item:minecraft:stick", "item:minecraft:string", "item:minecraft:stick"],
      ["item:minecraft:bamboo", "item:minecraft:bamboo", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:dry_bamboo_bridge_pier", "item:mcwbridges:dry_bamboo_bridge_pier", 1, [
      ["item:minecraft:stick", "item:minecraft:string", "item:minecraft:stick"],
      ["item:minecraft:bamboo", "", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:dry_bamboo_bridge_stair", "item:mcwbridges:dry_bamboo_bridge_stair", 6, [
      ["", "", "item:mcwbridges:dry_bamboo_bridge"],
      ["", "item:mcwbridges:dry_bamboo_bridge", "item:mcwbridges:dry_bamboo_bridge"],
      ["item:mcwbridges:dry_bamboo_bridge", "item:mcwbridges:dry_bamboo_bridge", "item:mcwbridges:dry_bamboo_bridge"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:emerald_block", "item:minecraft:emerald_block", 1, [
      ["item:minecraft:emerald", "item:minecraft:emerald", "item:minecraft:emerald"],
      ["item:minecraft:emerald", "item:minecraft:emerald", "item:minecraft:emerald"],
      ["item:minecraft:emerald", "item:minecraft:emerald", "item:minecraft:emerald"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:enchanting_table", "item:minecraft:enchanting_table", 1, [
      ["", "item:minecraft:book", ""],
      ["item:minecraft:diamond", "item:minecraft:obsidian", "item:minecraft:diamond"],
      ["item:minecraft:obsidian", "item:minecraft:obsidian", "item:minecraft:obsidian"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:end_brick_gothic", "item:mcwwindows:end_brick_gothic", 4, [
      ["", "item:minecraft:end_stone_bricks", ""],
      ["item:minecraft:end_stone_bricks", "item:minecraft:glass_pane", "item:minecraft:end_stone_bricks"],
      ["", "item:minecraft:end_stone_bricks", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:end_brick_railing_gate", "item:mcwfences:end_brick_railing_gate", 1, [
      ["item:minecraft:iron_bars", "item:minecraft:end_stone_bricks", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:end_stone_bricks", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:end_crystal", "item:minecraft:end_crystal", 1, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:ender_eye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:ghast_tear", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:end_rod", "item:minecraft:end_rod", 4, [
      ["item:minecraft:blaze_rod"],
      ["item:minecraft:popped_chorus_fruit"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:end_stone_brick_slab", "item:minecraft:end_stone_brick_slab", 6, [
      ["item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:end_stone_brick_stairs", "item:minecraft:end_stone_brick_stairs", 4, [
      ["item:minecraft:end_stone_bricks", "", ""],
      ["item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks", ""],
      ["item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:end_stone_brick_wall", "item:minecraft:end_stone_brick_wall", 6, [
      ["item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks"],
      ["item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks", 4, [
      ["item:minecraft:end_stone", "item:minecraft:end_stone"],
      ["item:minecraft:end_stone", "item:minecraft:end_stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:ender_brick_arrow_slit", "item:mcwwindows:ender_brick_arrow_slit", 3, [
      ["item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks"],
      ["item:minecraft:end_stone_brick_slab", "item:minecraft:end_stone_brick_slab"],
      ["item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:ender_chest", "item:minecraft:ender_chest", 1, [
      ["item:minecraft:obsidian", "item:minecraft:obsidian", "item:minecraft:obsidian"],
      ["item:minecraft:obsidian", "item:minecraft:ender_eye", "item:minecraft:obsidian"],
      ["item:minecraft:obsidian", "item:minecraft:obsidian", "item:minecraft:obsidian"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:exposed_copper_shingle_slab", "item:create:exposed_copper_shingle_slab", 6, [
      [
        "item:create:exposed_copper_shingles",
        "item:create:exposed_copper_shingles",
        "item:create:exposed_copper_shingles",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:exposed_copper_shingle_stairs", "item:create:exposed_copper_shingle_stairs", 4, [
      ["item:create:exposed_copper_shingles", "", ""],
      ["item:create:exposed_copper_shingles", "item:create:exposed_copper_shingles", ""],
      [
        "item:create:exposed_copper_shingles",
        "item:create:exposed_copper_shingles",
        "item:create:exposed_copper_shingles",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:exposed_copper_tile_slab", "item:create:exposed_copper_tile_slab", 6, [
      ["item:create:exposed_copper_tiles", "item:create:exposed_copper_tiles", "item:create:exposed_copper_tiles"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:exposed_copper_tile_stairs", "item:create:exposed_copper_tile_stairs", 4, [
      ["item:create:exposed_copper_tiles", "", ""],
      ["item:create:exposed_copper_tiles", "item:create:exposed_copper_tiles", ""],
      ["item:create:exposed_copper_tiles", "item:create:exposed_copper_tiles", "item:create:exposed_copper_tiles"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:exposed_cut_copper", "item:minecraft:exposed_cut_copper", 4, [
      ["item:minecraft:exposed_copper", "item:minecraft:exposed_copper"],
      ["item:minecraft:exposed_copper", "item:minecraft:exposed_copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:exposed_cut_copper_slab", "item:minecraft:exposed_cut_copper_slab", 6, [
      ["item:minecraft:exposed_cut_copper", "item:minecraft:exposed_cut_copper", "item:minecraft:exposed_cut_copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:exposed_cut_copper_stairs", "item:minecraft:exposed_cut_copper_stairs", 4, [
      ["item:minecraft:exposed_cut_copper", "", ""],
      ["item:minecraft:exposed_cut_copper", "item:minecraft:exposed_cut_copper", ""],
      ["item:minecraft:exposed_cut_copper", "item:minecraft:exposed_cut_copper", "item:minecraft:exposed_cut_copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:fishing_rod", "item:minecraft:fishing_rod", 1, [
      ["", "", "item:minecraft:stick"],
      ["", "item:minecraft:stick", "item:minecraft:string"],
      ["item:minecraft:stick", "", "item:minecraft:string"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:fletching_table", "item:minecraft:fletching_table", 1, [
      ["item:minecraft:flint", "item:minecraft:flint"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:flint_knife", "item:farmersdelight:flint_knife", 1, [
      ["item:minecraft:flint"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:flower_pot", "item:minecraft:flower_pot", 1, [
      ["item:minecraft:brick", "", "item:minecraft:brick"],
      ["", "item:minecraft:brick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:flowering_azalea_hedge", "item:mcwfences:flowering_azalea_hedge", 4, [
      ["item:minecraft:flowering_azalea_leaves", "item:minecraft:flowering_azalea_leaves"],
      ["item:minecraft:flowering_azalea_leaves", "item:minecraft:flowering_azalea_leaves"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:framed_glass_pane", "item:create:framed_glass_pane", 16, [
      ["item:create:framed_glass", "item:create:framed_glass", "item:create:framed_glass"],
      ["item:create:framed_glass", "item:create:framed_glass", "item:create:framed_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:furnace", "item:minecraft:furnace", 1, [
      [
        "tag:items:minecraft:stone_crafting_materials",
        "tag:items:minecraft:stone_crafting_materials",
        "tag:items:minecraft:stone_crafting_materials",
      ],
      ["tag:items:minecraft:stone_crafting_materials", "", "tag:items:minecraft:stone_crafting_materials"],
      [
        "tag:items:minecraft:stone_crafting_materials",
        "tag:items:minecraft:stone_crafting_materials",
        "tag:items:minecraft:stone_crafting_materials",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:furnace_minecart", "item:minecraft:furnace_minecart", 1, [
      ["item:minecraft:furnace"],
      ["item:minecraft:minecart"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:garage_black_door", "item:mcwdoors:garage_black_door", 8, [
      ["item:mcwdoors:garage_white_door", "item:mcwdoors:garage_white_door", "item:mcwdoors:garage_white_door"],
      ["item:mcwdoors:garage_white_door", "item:minecraft:black_dye", "item:mcwdoors:garage_white_door"],
      ["item:mcwdoors:garage_white_door", "item:mcwdoors:garage_white_door", "item:mcwdoors:garage_white_door"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:garage_gray_door", "item:mcwdoors:garage_gray_door", 8, [
      ["item:mcwdoors:garage_white_door", "item:mcwdoors:garage_white_door", "item:mcwdoors:garage_white_door"],
      ["item:mcwdoors:garage_white_door", "item:minecraft:gray_dye", "item:mcwdoors:garage_white_door"],
      ["item:mcwdoors:garage_white_door", "item:mcwdoors:garage_white_door", "item:mcwdoors:garage_white_door"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:garage_silver_door", "item:mcwdoors:garage_silver_door", 8, [
      ["item:mcwdoors:garage_white_door", "item:mcwdoors:garage_white_door", "item:mcwdoors:garage_white_door"],
      ["item:mcwdoors:garage_white_door", "item:minecraft:light_gray_dye", "item:mcwdoors:garage_white_door"],
      ["item:mcwdoors:garage_white_door", "item:mcwdoors:garage_white_door", "item:mcwdoors:garage_white_door"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:garage_white_door", "item:mcwdoors:garage_white_door", 3, [
      ["item:minecraft:iron_ingot", "item:minecraft:glass", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:glass_bottle", "item:minecraft:glass_bottle", 3, [
      ["item:minecraft:glass", "", "item:minecraft:glass"],
      ["", "item:minecraft:glass", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:glass_pane", "item:minecraft:glass_pane", 16, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:glistering_melon_slice", "item:minecraft:glistering_melon_slice", 1, [
      ["item:minecraft:gold_nugget", "item:minecraft:gold_nugget", "item:minecraft:gold_nugget"],
      ["item:minecraft:gold_nugget", "item:minecraft:melon_slice", "item:minecraft:gold_nugget"],
      ["item:minecraft:gold_nugget", "item:minecraft:gold_nugget", "item:minecraft:gold_nugget"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:glowstone", "item:minecraft:glowstone", 1, [
      ["item:minecraft:glowstone_dust", "item:minecraft:glowstone_dust"],
      ["item:minecraft:glowstone_dust", "item:minecraft:glowstone_dust"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:gold_block", "item:minecraft:gold_block", 1, [
      ["item:minecraft:gold_ingot", "item:minecraft:gold_ingot", "item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot", "item:minecraft:gold_ingot", "item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot", "item:minecraft:gold_ingot", "item:minecraft:gold_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:gold_ingot_from_nuggets", "item:minecraft:gold_ingot", 1, [
      ["item:minecraft:gold_nugget", "item:minecraft:gold_nugget", "item:minecraft:gold_nugget"],
      ["item:minecraft:gold_nugget", "item:minecraft:gold_nugget", "item:minecraft:gold_nugget"],
      ["item:minecraft:gold_nugget", "item:minecraft:gold_nugget", "item:minecraft:gold_nugget"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:golden_apple", "item:minecraft:golden_apple", 1, [
      ["item:minecraft:gold_ingot", "item:minecraft:gold_ingot", "item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot", "item:minecraft:apple", "item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot", "item:minecraft:gold_ingot", "item:minecraft:gold_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:golden_axe", "item:minecraft:golden_axe", 1, [
      ["item:minecraft:gold_ingot", "item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot", "item:minecraft:stick"],
      ["", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:golden_boots", "item:minecraft:golden_boots", 1, [
      ["item:minecraft:gold_ingot", "", "item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot", "", "item:minecraft:gold_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:golden_carrot", "item:minecraft:golden_carrot", 1, [
      ["item:minecraft:gold_nugget", "item:minecraft:gold_nugget", "item:minecraft:gold_nugget"],
      ["item:minecraft:gold_nugget", "item:minecraft:carrot", "item:minecraft:gold_nugget"],
      ["item:minecraft:gold_nugget", "item:minecraft:gold_nugget", "item:minecraft:gold_nugget"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:golden_chestplate", "item:minecraft:golden_chestplate", 1, [
      ["item:minecraft:gold_ingot", "", "item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot", "item:minecraft:gold_ingot", "item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot", "item:minecraft:gold_ingot", "item:minecraft:gold_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:golden_helmet", "item:minecraft:golden_helmet", 1, [
      ["item:minecraft:gold_ingot", "item:minecraft:gold_ingot", "item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot", "", "item:minecraft:gold_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:golden_hoe", "item:minecraft:golden_hoe", 1, [
      ["item:minecraft:gold_ingot", "item:minecraft:gold_ingot"],
      ["", "item:minecraft:stick"],
      ["", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:golden_knife", "item:farmersdelight:golden_knife", 1, [
      ["item:minecraft:gold_ingot"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:golden_leggings", "item:minecraft:golden_leggings", 1, [
      ["item:minecraft:gold_ingot", "item:minecraft:gold_ingot", "item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot", "", "item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot", "", "item:minecraft:gold_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:golden_pickaxe", "item:minecraft:golden_pickaxe", 1, [
      ["item:minecraft:gold_ingot", "item:minecraft:gold_ingot", "item:minecraft:gold_ingot"],
      ["", "item:minecraft:stick", ""],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:golden_shovel", "item:minecraft:golden_shovel", 1, [
      ["item:minecraft:gold_ingot"],
      ["item:minecraft:stick"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:golden_sword", "item:minecraft:golden_sword", 1, [
      ["item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:granite_four_window", "item:mcwwindows:granite_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:granite", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:granite_louvered_shutter", "item:mcwwindows:granite_louvered_shutter", 3, [
      ["item:minecraft:granite_slab"],
      ["item:minecraft:granite_slab"],
      ["item:minecraft:granite_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:granite_parapet", "item:mcwwindows:granite_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:granite", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:granite_railing_gate", "item:mcwfences:granite_railing_gate", 1, [
      ["item:minecraft:iron_bars", "item:minecraft:polished_granite", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:polished_granite", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:granite_slab", "item:minecraft:granite_slab", 6, [
      ["item:minecraft:granite", "item:minecraft:granite", "item:minecraft:granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:granite_stairs", "item:minecraft:granite_stairs", 4, [
      ["item:minecraft:granite", "", ""],
      ["item:minecraft:granite", "item:minecraft:granite", ""],
      ["item:minecraft:granite", "item:minecraft:granite", "item:minecraft:granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:granite_wall", "item:minecraft:granite_wall", 6, [
      ["item:minecraft:granite", "item:minecraft:granite", "item:minecraft:granite"],
      ["item:minecraft:granite", "item:minecraft:granite", "item:minecraft:granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:granite_window", "item:mcwwindows:granite_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:granite", "item:mcwwindows:window_centre_bar_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:granite_window2", "item:mcwwindows:granite_window2", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:granite", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("yigd:grave", "item:yigd:grave", 1, [
      ["", "item:minecraft:stone", ""],
      ["item:minecraft:stone", "item:minecraft:bone", "item:minecraft:stone"],
      ["item:minecraft:gravel", "item:minecraft:gravel", "item:minecraft:gravel"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:gray_banner", "item:minecraft:gray_banner", 1, [
      ["item:minecraft:gray_wool", "item:minecraft:gray_wool", "item:minecraft:gray_wool"],
      ["item:minecraft:gray_wool", "item:minecraft:gray_wool", "item:minecraft:gray_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:gray_bed", "item:minecraft:gray_bed", 1, [
      ["item:minecraft:gray_wool", "item:minecraft:gray_wool", "item:minecraft:gray_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:gray_carpet", "item:minecraft:gray_carpet", 3, [
      ["item:minecraft:gray_wool", "item:minecraft:gray_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:gray_carpet_from_white_carpet", "item:minecraft:gray_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:gray_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:gray_curtain", "item:mcwwindows:gray_curtain", 3, [
      ["item:minecraft:gray_wool"],
      ["item:minecraft:gray_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:gray_mosaic_glass", "item:mcwwindows:gray_mosaic_glass", 8, [
      ["item:minecraft:gray_stained_glass", "item:minecraft:gray_stained_glass", "item:minecraft:gray_stained_glass"],
      ["item:minecraft:gray_stained_glass", "item:minecraft:gray_dye", "item:minecraft:gray_stained_glass"],
      ["item:minecraft:gray_stained_glass", "item:minecraft:gray_stained_glass", "item:minecraft:gray_stained_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:gray_mosaic_glass_pane", "item:mcwwindows:gray_mosaic_glass_pane", 16, [
      ["item:mcwwindows:gray_mosaic_glass", "item:mcwwindows:gray_mosaic_glass", "item:mcwwindows:gray_mosaic_glass"],
      ["item:mcwwindows:gray_mosaic_glass", "item:mcwwindows:gray_mosaic_glass", "item:mcwwindows:gray_mosaic_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:gray_stained_glass", "item:minecraft:gray_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:gray_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:gray_stained_glass_pane", "item:minecraft:gray_stained_glass_pane", 16, [
      ["item:minecraft:gray_stained_glass", "item:minecraft:gray_stained_glass", "item:minecraft:gray_stained_glass"],
      ["item:minecraft:gray_stained_glass", "item:minecraft:gray_stained_glass", "item:minecraft:gray_stained_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:gray_stained_glass_pane_from_glass_pane",
      "item:minecraft:gray_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:gray_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gray_striped_awning", "item:mcwroofs:gray_striped_awning", 1, [
      ["item:minecraft:gray_carpet", "item:minecraft:white_carpet", "item:minecraft:gray_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:gray_terracotta", "item:minecraft:gray_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:gray_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:green_banner", "item:minecraft:green_banner", 1, [
      ["item:minecraft:green_wool", "item:minecraft:green_wool", "item:minecraft:green_wool"],
      ["item:minecraft:green_wool", "item:minecraft:green_wool", "item:minecraft:green_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:green_bed", "item:minecraft:green_bed", 1, [
      ["item:minecraft:green_wool", "item:minecraft:green_wool", "item:minecraft:green_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:green_carpet", "item:minecraft:green_carpet", 3, [
      ["item:minecraft:green_wool", "item:minecraft:green_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:green_carpet_from_white_carpet", "item:minecraft:green_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:green_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:green_curtain", "item:mcwwindows:green_curtain", 3, [
      ["item:minecraft:green_wool"],
      ["item:minecraft:green_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:green_mosaic_glass", "item:mcwwindows:green_mosaic_glass", 8, [
      [
        "item:minecraft:green_stained_glass",
        "item:minecraft:green_stained_glass",
        "item:minecraft:green_stained_glass",
      ],
      ["item:minecraft:green_stained_glass", "item:minecraft:green_dye", "item:minecraft:green_stained_glass"],
      [
        "item:minecraft:green_stained_glass",
        "item:minecraft:green_stained_glass",
        "item:minecraft:green_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:green_mosaic_glass_pane", "item:mcwwindows:green_mosaic_glass_pane", 16, [
      [
        "item:mcwwindows:green_mosaic_glass",
        "item:mcwwindows:green_mosaic_glass",
        "item:mcwwindows:green_mosaic_glass",
      ],
      [
        "item:mcwwindows:green_mosaic_glass",
        "item:mcwwindows:green_mosaic_glass",
        "item:mcwwindows:green_mosaic_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:green_stained_glass", "item:minecraft:green_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:green_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:green_stained_glass_pane", "item:minecraft:green_stained_glass_pane", 16, [
      [
        "item:minecraft:green_stained_glass",
        "item:minecraft:green_stained_glass",
        "item:minecraft:green_stained_glass",
      ],
      [
        "item:minecraft:green_stained_glass",
        "item:minecraft:green_stained_glass",
        "item:minecraft:green_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:green_stained_glass_pane_from_glass_pane",
      "item:minecraft:green_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:green_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:green_striped_awning", "item:mcwroofs:green_striped_awning", 1, [
      ["item:minecraft:green_carpet", "item:minecraft:white_carpet", "item:minecraft:green_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:green_terracotta", "item:minecraft:green_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:green_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:grindstone", "item:minecraft:grindstone", 1, [
      ["item:minecraft:stick", "item:minecraft:stone_slab", "item:minecraft:stick"],
      ["tag:items:minecraft:planks", "", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter", "item:mcwroofs:rain_gutter", 1, [
      ["item:minecraft:iron_nugget", "", "item:minecraft:iron_nugget"],
      ["", "item:minecraft:iron_nugget", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base", "item:mcwroofs:gutter_base", 1, [
      ["item:mcwroofs:rain_gutter", "item:mcwroofs:rain_gutter", "item:mcwroofs:rain_gutter"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_black", "item:mcwroofs:gutter_base_black", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:black_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_blue", "item:mcwroofs:gutter_base_blue", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:blue_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_brown", "item:mcwroofs:gutter_base_brown", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:brown_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_cyan", "item:mcwroofs:gutter_base_cyan", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:cyan_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_gray", "item:mcwroofs:gutter_base_gray", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:gray_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_green", "item:mcwroofs:gutter_base_green", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:green_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_light_blue", "item:mcwroofs:gutter_base_light_blue", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:light_blue_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_light_gray", "item:mcwroofs:gutter_base_light_gray", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:light_gray_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_lime", "item:mcwroofs:gutter_base_lime", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:lime_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_magenta", "item:mcwroofs:gutter_base_magenta", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:magenta_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_orange", "item:mcwroofs:gutter_base_orange", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:orange_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_pink", "item:mcwroofs:gutter_base_pink", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:pink_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_purple", "item:mcwroofs:gutter_base_purple", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:purple_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_red", "item:mcwroofs:gutter_base_red", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:red_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_white", "item:mcwroofs:gutter_base_white", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:white_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_base_yellow", "item:mcwroofs:gutter_base_yellow", 8, [
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:minecraft:yellow_dye", "item:mcwroofs:gutter_base"],
      ["item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base", "item:mcwroofs:gutter_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", 1, [
      ["item:mcwroofs:rain_gutter"],
      ["item:mcwroofs:rain_gutter"],
      ["item:mcwroofs:rain_gutter"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_black", "item:mcwroofs:gutter_middle_black", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:black_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_blue", "item:mcwroofs:gutter_middle_blue", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:blue_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_brown", "item:mcwroofs:gutter_middle_brown", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:brown_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_cyan", "item:mcwroofs:gutter_middle_cyan", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:cyan_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_gray", "item:mcwroofs:gutter_middle_gray", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:gray_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_green", "item:mcwroofs:gutter_middle_green", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:green_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_light_blue", "item:mcwroofs:gutter_middle_light_blue", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:light_blue_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_light_gray", "item:mcwroofs:gutter_middle_light_gray", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:light_gray_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_lime", "item:mcwroofs:gutter_middle_lime", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:lime_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_magenta", "item:mcwroofs:gutter_middle_magenta", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:magenta_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_orange", "item:mcwroofs:gutter_middle_orange", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:orange_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_pink", "item:mcwroofs:gutter_middle_pink", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:pink_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_purple", "item:mcwroofs:gutter_middle_purple", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:purple_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_red", "item:mcwroofs:gutter_middle_red", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:red_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_white", "item:mcwroofs:gutter_middle_white", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:white_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:gutter_middle_yellow", "item:mcwroofs:gutter_middle_yellow", 8, [
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:minecraft:yellow_dye", "item:mcwroofs:gutter_middle"],
      ["item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle", "item:mcwroofs:gutter_middle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:hammer", "item:mcwwindows:hammer", 1, [
      ["", "item:minecraft:iron_ingot", ""],
      ["", "item:minecraft:stick", "item:minecraft:iron_nugget"],
      ["item:minecraft:stick", "", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:hay_block", "item:minecraft:hay_block", 1, [
      ["item:minecraft:wheat", "item:minecraft:wheat", "item:minecraft:wheat"],
      ["item:minecraft:wheat", "item:minecraft:wheat", "item:minecraft:wheat"],
      ["item:minecraft:wheat", "item:minecraft:wheat", "item:minecraft:wheat"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:heavy_weighted_pressure_plate",
      "item:minecraft:heavy_weighted_pressure_plate",
      1,
      [["item:minecraft:iron_ingot", "item:minecraft:iron_ingot"]]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:honey_block", "item:minecraft:honey_block", 1, [
      ["item:minecraft:honey_bottle", "item:minecraft:honey_bottle"],
      ["item:minecraft:honey_bottle", "item:minecraft:honey_bottle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:honeycomb_block", "item:minecraft:honeycomb_block", 1, [
      ["item:minecraft:honeycomb", "item:minecraft:honeycomb"],
      ["item:minecraft:honeycomb", "item:minecraft:honeycomb"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:hopper", "item:minecraft:hopper", 1, [
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:chest", "item:minecraft:iron_ingot"],
      ["", "item:minecraft:iron_ingot", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:hopper_minecart", "item:minecraft:hopper_minecart", 1, [
      ["item:minecraft:hopper"],
      ["item:minecraft:minecart"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:horizontal_framed_glass_pane", "item:create:horizontal_framed_glass_pane", 16, [
      [
        "item:create:horizontal_framed_glass",
        "item:create:horizontal_framed_glass",
        "item:create:horizontal_framed_glass",
      ],
      [
        "item:create:horizontal_framed_glass",
        "item:create:horizontal_framed_glass",
        "item:create:horizontal_framed_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_axe", "item:minecraft:iron_axe", 1, [
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:stick"],
      ["", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_bars", "item:minecraft:iron_bars", 16, [
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_block", "item:minecraft:iron_block", 1, [
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_boots", "item:minecraft:iron_boots", 1, [
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:iron_bridge_middle", "item:mcwbridges:iron_bridge", 1, [
      ["item:minecraft:iron_nugget", "", "item:minecraft:iron_nugget"],
      ["item:minecraft:iron_nugget", "", "item:minecraft:iron_nugget"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:iron_bridge_pier", "item:mcwbridges:iron_bridge_pier", 3, [
      ["item:minecraft:iron_bars", "item:minecraft:iron_bars", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:iron_bridge_stair", "item:mcwbridges:iron_bridge_stair", 6, [
      ["", "", "item:mcwbridges:iron_bridge"],
      ["", "item:mcwbridges:iron_bridge", "item:mcwbridges:iron_bridge"],
      ["item:mcwbridges:iron_bridge", "item:mcwbridges:iron_bridge", "item:mcwbridges:iron_bridge"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_chestplate", "item:minecraft:iron_chestplate", 1, [
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_door", "item:minecraft:iron_door", 3, [
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_helmet", "item:minecraft:iron_helmet", 1, [
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_hoe", "item:minecraft:iron_hoe", 1, [
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["", "item:minecraft:stick"],
      ["", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_ingot_from_nuggets", "item:minecraft:iron_ingot", 1, [
      ["item:minecraft:iron_nugget", "item:minecraft:iron_nugget", "item:minecraft:iron_nugget"],
      ["item:minecraft:iron_nugget", "item:minecraft:iron_nugget", "item:minecraft:iron_nugget"],
      ["item:minecraft:iron_nugget", "item:minecraft:iron_nugget", "item:minecraft:iron_nugget"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:iron_knife", "item:farmersdelight:iron_knife", 1, [
      ["item:minecraft:iron_ingot"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_leggings", "item:minecraft:iron_leggings", 1, [
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_pickaxe", "item:minecraft:iron_pickaxe", 1, [
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["", "item:minecraft:stick", ""],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_shovel", "item:minecraft:iron_shovel", 1, [
      ["item:minecraft:iron_ingot"],
      ["item:minecraft:stick"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:iron_shutter", "item:mcwwindows:iron_shutter", 3, [
      ["item:minecraft:iron_trapdoor"],
      ["item:minecraft:iron_trapdoor"],
      ["item:minecraft:iron_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_sword", "item:minecraft:iron_sword", 1, [
      ["item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:iron_trapdoor", "item:minecraft:iron_trapdoor", 1, [
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:item_frame", "item:minecraft:item_frame", 1, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:leather", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:jack_o_lantern", "item:minecraft:jack_o_lantern", 1, [
      ["item:minecraft:carved_pumpkin"],
      ["item:minecraft:torch"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jail_door", "item:mcwdoors:jail_door", 1, [
      ["item:minecraft:iron_bars", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:jukebox", "item:minecraft:jukebox", 1, [
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "item:minecraft:diamond", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:jungle_attic_roof", "item:mcwroofs:jungle_attic_roof", 2, [
      ["", "item:minecraft:jungle_log"],
      ["item:minecraft:jungle_log", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:jungle_bamboo_trapdoor", "item:mcwtrpdoors:jungle_bamboo_trapdoor", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwtrpdoors:print_bamboo"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_bark_glass_door", "item:mcwdoors:jungle_bark_glass_door", 3, [
      ["item:minecraft:jungle_log", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:jungle_log", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:jungle_bark_trapdoor", "item:mcwtrpdoors:jungle_bark_trapdoor", 2, [
      ["item:minecraft:jungle_log", "item:minecraft:glass_pane", "item:minecraft:jungle_log"],
      ["item:minecraft:jungle_log", "item:minecraft:glass_pane", "item:minecraft:jungle_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_barn_door", "item:mcwdoors:jungle_barn_door", 2, [
      ["item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_barn_glass_door", "item:mcwdoors:jungle_barn_glass_door", 3, [
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:jungle_barn_trapdoor", "item:mcwtrpdoors:jungle_barn_trapdoor", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwtrpdoors:jungle_glass_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:jungle_barred_trapdoor", "item:mcwtrpdoors:jungle_barred_trapdoor", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwtrpdoors:print_barred"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:jungle_blinds", "item:mcwwindows:jungle_blinds", 3, [
      ["item:minecraft:jungle_slab", "item:minecraft:jungle_slab", "item:minecraft:jungle_slab"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:jungle_boat", "item:minecraft:jungle_boat", 1, [
      ["item:minecraft:jungle_planks", "", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:jungle_bridge_pier", "item:mcwbridges:jungle_bridge_pier", 3, [
      ["item:minecraft:jungle_log", "item:minecraft:jungle_fence", "item:minecraft:jungle_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:jungle_cabinet", "item:farmersdelight:jungle_cabinet", 1, [
      ["item:minecraft:jungle_slab", "item:minecraft:jungle_slab", "item:minecraft:jungle_slab"],
      ["item:minecraft:jungle_trapdoor", "", "item:minecraft:jungle_trapdoor"],
      ["item:minecraft:jungle_slab", "item:minecraft:jungle_slab", "item:minecraft:jungle_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_classic_door", "item:mcwdoors:jungle_classic_door", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwdoors:print_oak"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:jungle_classic_trapdoor", "item:mcwtrpdoors:jungle_classic_trapdoor", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwtrpdoors:print_classic"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_cottage_door", "item:mcwdoors:jungle_cottage_door", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwdoors:print_spruce"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:jungle_cottage_trapdoor", "item:mcwtrpdoors:jungle_cottage_trapdoor", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwtrpdoors:print_cottage"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:jungle_door", "item:minecraft:jungle_door", 3, [
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:jungle_fence", "item:minecraft:jungle_fence", 3, [
      ["item:minecraft:jungle_planks", "item:minecraft:stick", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:stick", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:jungle_fence_gate", "item:minecraft:jungle_fence_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:jungle_planks", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:jungle_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_four_panel_door", "item:mcwdoors:jungle_four_panel_door", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwdoors:print_dark_oak"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwtrpdoors:jungle_four_panel_trapdoor",
      "item:mcwtrpdoors:jungle_four_panel_trapdoor",
      1,
      [["item:minecraft:jungle_planks"], ["item:mcwtrpdoors:print_four_panel"], ["item:minecraft:jungle_planks"]]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:jungle_four_window", "item:mcwwindows:jungle_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:jungle_log", "item:mcwwindows:window_centre_bar_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_glass_door", "item:mcwdoors:jungle_glass_door", 3, [
      ["item:minecraft:jungle_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:jungle_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:jungle_glass_trapdoor", "item:mcwtrpdoors:jungle_glass_trapdoor", 2, [
      ["item:minecraft:jungle_planks", "item:minecraft:glass_pane", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:glass_pane", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:jungle_hedge", "item:mcwfences:jungle_hedge", 4, [
      ["item:minecraft:jungle_leaves", "item:minecraft:jungle_leaves"],
      ["item:minecraft:jungle_leaves", "item:minecraft:jungle_leaves"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:jungle_highley_gate", "item:mcwfences:jungle_highley_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:jungle_log", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:jungle_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:jungle_horse_fence", "item:mcwfences:jungle_horse_fence", 3, [
      ["item:minecraft:jungle_log", "item:minecraft:stick", "item:minecraft:jungle_log"],
      ["item:minecraft:stick", "item:minecraft:jungle_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_japanese2_door", "item:mcwdoors:jungle_japanese2_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:jungle_slab", "item:minecraft:jungle_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_japanese_door", "item:mcwdoors:jungle_japanese_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:jungle_log_bridge_middle", "item:mcwbridges:jungle_log_bridge_middle", 4, [
      ["item:minecraft:jungle_fence", "", "item:minecraft:jungle_fence"],
      ["item:minecraft:jungle_slab", "item:minecraft:jungle_slab", "item:minecraft:jungle_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:jungle_log_bridge_stair", "item:mcwbridges:jungle_log_bridge_stair", 6, [
      ["", "", "item:mcwbridges:jungle_log_bridge_middle"],
      ["", "item:mcwbridges:jungle_log_bridge_middle", "item:mcwbridges:jungle_log_bridge_middle"],
      [
        "item:mcwbridges:jungle_log_bridge_middle",
        "item:mcwbridges:jungle_log_bridge_middle",
        "item:mcwbridges:jungle_log_bridge_middle",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:jungle_log_parapet", "item:mcwwindows:jungle_log_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:jungle_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:jungle_louvered_shutter", "item:mcwwindows:jungle_louvered_shutter", 3, [
      ["item:minecraft:jungle_slab"],
      ["item:minecraft:jungle_slab"],
      ["item:minecraft:jungle_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:jungle_lower_roof", "item:mcwroofs:jungle_lower_roof", 4, [
      ["", "item:minecraft:jungle_log", "item:minecraft:jungle_log"],
      ["item:minecraft:jungle_log", "item:minecraft:jungle_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_modern_door", "item:mcwdoors:jungle_modern_door", 3, [
      ["item:minecraft:jungle_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_mystic_door", "item:mcwdoors:jungle_mystic_door", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwdoors:print_mystic"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:jungle_mystic_trapdoor", "item:mcwtrpdoors:jungle_mystic_trapdoor", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwtrpdoors:print_mystic"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_nether_door", "item:mcwdoors:jungle_nether_door", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwdoors:print_nether"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_paper_door", "item:mcwdoors:jungle_paper_door", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwdoors:print_birch"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:jungle_paper_trapdoor", "item:mcwtrpdoors:jungle_paper_trapdoor", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwtrpdoors:print_paper"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:jungle_picket_fence", "item:mcwfences:jungle_picket_fence", 3, [
      ["item:minecraft:jungle_log", "item:minecraft:jungle_planks", "item:minecraft:jungle_log"],
      ["item:minecraft:jungle_log", "item:minecraft:stick", "item:minecraft:jungle_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:jungle_plank_four_window", "item:mcwwindows:jungle_plank_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:jungle_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:jungle_plank_parapet", "item:mcwwindows:jungle_plank_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:jungle_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:jungle_plank_window", "item:mcwwindows:jungle_plank_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:jungle_planks", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:jungle_plank_window2", "item:mcwwindows:jungle_plank_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:jungle_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:jungle_planks_attic_roof", "item:mcwroofs:jungle_planks_attic_roof", 2, [
      ["", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:jungle_planks_lower_roof", "item:mcwroofs:jungle_planks_lower_roof", 4, [
      ["", "item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwpaths:jungle_planks_path", "item:mcwpaths:jungle_planks_path", 6, [
      ["item:minecraft:jungle_slab", "item:minecraft:jungle_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:jungle_planks_roof", "item:mcwroofs:jungle_planks_roof", 2, [
      ["", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:jungle_planks_steep_roof", "item:mcwroofs:jungle_planks_steep_roof", 4, [
      ["", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:jungle_planks_top_roof", "item:mcwroofs:jungle_planks_top_roof", 2, [
      ["item:minecraft:jungle_planks", "item:minecraft:stick", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:jungle_planks_upper_lower_roof",
      "item:mcwroofs:jungle_planks_upper_lower_roof",
      3,
      [
        ["", "", "item:minecraft:jungle_planks"],
        ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:jungle_planks_upper_steep_roof",
      "item:mcwroofs:jungle_planks_upper_steep_roof",
      3,
      [
        ["", "item:minecraft:jungle_planks"],
        ["", "item:minecraft:jungle_planks"],
        ["item:minecraft:jungle_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:jungle_pressure_plate", "item:minecraft:jungle_pressure_plate", 1, [
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:jungle_pyramid_gate", "item:mcwfences:jungle_pyramid_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:jungle_log", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:jungle_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:jungle_rail_bridge", "item:mcwbridges:jungle_rail_bridge", 4, [
      ["item:minecraft:jungle_fence", "", "item:minecraft:jungle_fence"],
      ["item:minecraft:jungle_fence", "item:minecraft:jungle_slab", "item:minecraft:jungle_fence"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:jungle_ranch_trapdoor", "item:mcwtrpdoors:jungle_ranch_trapdoor", 2, [
      ["item:minecraft:jungle_log", "item:minecraft:stick", "item:minecraft:jungle_log"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:jungle_log", "item:minecraft:stick", "item:minecraft:jungle_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:jungle_roof", "item:mcwroofs:jungle_roof", 2, [
      ["", "item:minecraft:jungle_log"],
      ["item:minecraft:jungle_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:jungle_rope_bridge_stair", "item:mcwbridges:jungle_rope_bridge_stair", 6, [
      ["", "", "item:mcwbridges:rope_jungle_bridge"],
      ["", "item:mcwbridges:rope_jungle_bridge", "item:mcwbridges:rope_jungle_bridge"],
      [
        "item:mcwbridges:rope_jungle_bridge",
        "item:mcwbridges:rope_jungle_bridge",
        "item:mcwbridges:rope_jungle_bridge",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:jungle_shutter", "item:mcwwindows:jungle_shutter", 3, [
      ["item:minecraft:jungle_trapdoor"],
      ["item:minecraft:jungle_trapdoor"],
      ["item:minecraft:jungle_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:jungle_sign", "item:minecraft:jungle_sign", 3, [
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:jungle_slab", "item:minecraft:jungle_slab", 6, [
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_stable_door", "item:mcwdoors:jungle_stable_door", 3, [
      ["item:minecraft:iron_bars", "item:minecraft:iron_bars"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_stable_head_door", "item:mcwdoors:jungle_stable_head_door", 1, [
      ["item:mcwdoors:jungle_stable_door"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:jungle_stairs", "item:minecraft:jungle_stairs", 4, [
      ["item:minecraft:jungle_planks", "", ""],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks", ""],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:jungle_steep_roof", "item:mcwroofs:jungle_steep_roof", 4, [
      ["", "item:minecraft:jungle_log"],
      ["item:minecraft:jungle_log", "item:minecraft:jungle_log"],
      ["item:minecraft:jungle_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:jungle_stockade_fence", "item:mcwfences:jungle_stockade_fence", 3, [
      ["item:minecraft:jungle_log", "item:minecraft:jungle_planks", "item:minecraft:jungle_log"],
      ["item:minecraft:jungle_log", "item:minecraft:jungle_planks", "item:minecraft:jungle_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_swamp_door", "item:mcwdoors:jungle_swamp_door", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwdoors:print_swamp"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:jungle_swamp_trapdoor", "item:mcwtrpdoors:jungle_swamp_trapdoor", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwtrpdoors:print_swamp"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:jungle_top_roof", "item:mcwroofs:jungle_top_roof", 2, [
      ["item:minecraft:jungle_log", "item:minecraft:stick", "item:minecraft:jungle_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:jungle_trapdoor", "item:minecraft:jungle_trapdoor", 2, [
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_tropical_door", "item:mcwdoors:jungle_tropical_door", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwdoors:print_acacia"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:jungle_tropical_trapdoor", "item:mcwtrpdoors:jungle_tropical_trapdoor", 1, [
      ["item:minecraft:jungle_planks"],
      ["item:mcwtrpdoors:print_tropical"],
      ["item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:jungle_upper_lower_roof", "item:mcwroofs:jungle_upper_lower_roof", 3, [
      ["", "", "item:minecraft:jungle_log"],
      ["item:minecraft:jungle_log", "item:minecraft:jungle_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:jungle_upper_steep_roof", "item:mcwroofs:jungle_upper_steep_roof", 3, [
      ["", "item:minecraft:jungle_log"],
      ["", "item:minecraft:jungle_log"],
      ["item:minecraft:jungle_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:jungle_western_door", "item:mcwdoors:jungle_western_door", 3, [
      ["", "", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_slab", "item:minecraft:jungle_planks"],
      ["item:minecraft:jungle_planks", "item:minecraft:jungle_planks", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:jungle_window", "item:create:jungle_window", 2, [
      ["", "item:minecraft:jungle_planks", ""],
      ["item:minecraft:jungle_planks", "tag:items:c:glass/colorless", "item:minecraft:jungle_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:jungle_window", "item:mcwwindows:jungle_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:jungle_log", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:jungle_window2", "item:mcwwindows:jungle_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:jungle_log", "item:mcwwindows:window_centre_bar_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:jungle_window_pane", "item:create:jungle_window_pane", 16, [
      ["item:create:jungle_window", "item:create:jungle_window", "item:create:jungle_window"],
      ["item:create:jungle_window", "item:create:jungle_window", "item:create:jungle_window"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:jungle_wired_fence", "item:mcwfences:jungle_wired_fence", 3, [
      ["item:minecraft:stick", "item:minecraft:iron_bars", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:jungle_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:jungle_wood", "item:minecraft:jungle_wood", 3, [
      ["item:minecraft:jungle_log", "item:minecraft:jungle_log"],
      ["item:minecraft:jungle_log", "item:minecraft:jungle_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:kelp_roll", "item:farmersdelight:kelp_roll", 1, [
      ["item:farmersdelight:cooked_rice", "item:minecraft:carrot", "item:farmersdelight:cooked_rice"],
      ["item:minecraft:dried_kelp", "item:minecraft:dried_kelp", "item:minecraft:dried_kelp"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:ladder", "item:minecraft:ladder", 3, [
      ["item:minecraft:stick", "", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lantern", "item:minecraft:lantern", 1, [
      ["item:minecraft:iron_nugget", "item:minecraft:iron_nugget", "item:minecraft:iron_nugget"],
      ["item:minecraft:iron_nugget", "item:minecraft:torch", "item:minecraft:iron_nugget"],
      ["item:minecraft:iron_nugget", "item:minecraft:iron_nugget", "item:minecraft:iron_nugget"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lapis_block", "item:minecraft:lapis_block", 1, [
      ["item:minecraft:lapis_lazuli", "item:minecraft:lapis_lazuli", "item:minecraft:lapis_lazuli"],
      ["item:minecraft:lapis_lazuli", "item:minecraft:lapis_lazuli", "item:minecraft:lapis_lazuli"],
      ["item:minecraft:lapis_lazuli", "item:minecraft:lapis_lazuli", "item:minecraft:lapis_lazuli"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lead", "item:minecraft:lead", 2, [
      ["item:minecraft:string", "item:minecraft:string", ""],
      ["item:minecraft:string", "item:minecraft:slime_ball", ""],
      ["", "", "item:minecraft:string"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:lead_from_rope", "item:minecraft:lead", 1, [
      ["item:farmersdelight:rope", "item:farmersdelight:rope", ""],
      ["item:farmersdelight:rope", "item:farmersdelight:rope", ""],
      ["", "", "item:farmersdelight:rope"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:leather", "item:minecraft:leather", 1, [
      ["item:minecraft:rabbit_hide", "item:minecraft:rabbit_hide"],
      ["item:minecraft:rabbit_hide", "item:minecraft:rabbit_hide"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:leather_boots", "item:minecraft:leather_boots", 1, [
      ["item:minecraft:leather", "", "item:minecraft:leather"],
      ["item:minecraft:leather", "", "item:minecraft:leather"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:leather_chestplate", "item:minecraft:leather_chestplate", 1, [
      ["item:minecraft:leather", "", "item:minecraft:leather"],
      ["item:minecraft:leather", "item:minecraft:leather", "item:minecraft:leather"],
      ["item:minecraft:leather", "item:minecraft:leather", "item:minecraft:leather"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:leather_helmet", "item:minecraft:leather_helmet", 1, [
      ["item:minecraft:leather", "item:minecraft:leather", "item:minecraft:leather"],
      ["item:minecraft:leather", "", "item:minecraft:leather"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:leather_horse_armor", "item:minecraft:leather_horse_armor", 1, [
      ["item:minecraft:leather", "", "item:minecraft:leather"],
      ["item:minecraft:leather", "item:minecraft:leather", "item:minecraft:leather"],
      ["item:minecraft:leather", "", "item:minecraft:leather"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:leather_leggings", "item:minecraft:leather_leggings", 1, [
      ["item:minecraft:leather", "item:minecraft:leather", "item:minecraft:leather"],
      ["item:minecraft:leather", "", "item:minecraft:leather"],
      ["item:minecraft:leather", "", "item:minecraft:leather"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lectern", "item:minecraft:lectern", 1, [
      ["tag:items:minecraft:wooden_slabs", "tag:items:minecraft:wooden_slabs", "tag:items:minecraft:wooden_slabs"],
      ["", "item:minecraft:bookshelf", ""],
      ["", "tag:items:minecraft:wooden_slabs", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lever", "item:minecraft:lever", 1, [
      ["item:minecraft:stick"],
      ["item:minecraft:cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:light_blue_banner", "item:minecraft:light_blue_banner", 1, [
      ["item:minecraft:light_blue_wool", "item:minecraft:light_blue_wool", "item:minecraft:light_blue_wool"],
      ["item:minecraft:light_blue_wool", "item:minecraft:light_blue_wool", "item:minecraft:light_blue_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:light_blue_bed", "item:minecraft:light_blue_bed", 1, [
      ["item:minecraft:light_blue_wool", "item:minecraft:light_blue_wool", "item:minecraft:light_blue_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:light_blue_carpet", "item:minecraft:light_blue_carpet", 3, [
      ["item:minecraft:light_blue_wool", "item:minecraft:light_blue_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:light_blue_carpet_from_white_carpet", "item:minecraft:light_blue_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:light_blue_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:light_blue_curtain", "item:mcwwindows:light_blue_curtain", 3, [
      ["item:minecraft:light_blue_wool"],
      ["item:minecraft:light_blue_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:light_blue_mosaic_glass", "item:mcwwindows:light_blue_mosaic_glass", 8, [
      [
        "item:minecraft:light_blue_stained_glass",
        "item:minecraft:light_blue_stained_glass",
        "item:minecraft:light_blue_stained_glass",
      ],
      [
        "item:minecraft:light_blue_stained_glass",
        "item:minecraft:light_blue_dye",
        "item:minecraft:light_blue_stained_glass",
      ],
      [
        "item:minecraft:light_blue_stained_glass",
        "item:minecraft:light_blue_stained_glass",
        "item:minecraft:light_blue_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:light_blue_mosaic_glass_pane",
      "item:mcwwindows:light_blue_mosaic_glass_pane",
      16,
      [
        [
          "item:mcwwindows:light_blue_mosaic_glass",
          "item:mcwwindows:light_blue_mosaic_glass",
          "item:mcwwindows:light_blue_mosaic_glass",
        ],
        [
          "item:mcwwindows:light_blue_mosaic_glass",
          "item:mcwwindows:light_blue_mosaic_glass",
          "item:mcwwindows:light_blue_mosaic_glass",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:light_blue_stained_glass", "item:minecraft:light_blue_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:light_blue_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:light_blue_stained_glass_pane",
      "item:minecraft:light_blue_stained_glass_pane",
      16,
      [
        [
          "item:minecraft:light_blue_stained_glass",
          "item:minecraft:light_blue_stained_glass",
          "item:minecraft:light_blue_stained_glass",
        ],
        [
          "item:minecraft:light_blue_stained_glass",
          "item:minecraft:light_blue_stained_glass",
          "item:minecraft:light_blue_stained_glass",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:light_blue_stained_glass_pane_from_glass_pane",
      "item:minecraft:light_blue_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:light_blue_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:light_blue_striped_awning", "item:mcwroofs:light_blue_striped_awning", 1, [
      ["item:minecraft:light_blue_carpet", "item:minecraft:white_carpet", "item:minecraft:light_blue_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:light_blue_terracotta", "item:minecraft:light_blue_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:light_blue_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:light_gray_banner", "item:minecraft:light_gray_banner", 1, [
      ["item:minecraft:light_gray_wool", "item:minecraft:light_gray_wool", "item:minecraft:light_gray_wool"],
      ["item:minecraft:light_gray_wool", "item:minecraft:light_gray_wool", "item:minecraft:light_gray_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:light_gray_bed", "item:minecraft:light_gray_bed", 1, [
      ["item:minecraft:light_gray_wool", "item:minecraft:light_gray_wool", "item:minecraft:light_gray_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:light_gray_carpet", "item:minecraft:light_gray_carpet", 3, [
      ["item:minecraft:light_gray_wool", "item:minecraft:light_gray_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:light_gray_carpet_from_white_carpet", "item:minecraft:light_gray_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:light_gray_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:light_gray_curtain", "item:mcwwindows:light_gray_curtain", 3, [
      ["item:minecraft:light_gray_wool"],
      ["item:minecraft:light_gray_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:light_gray_mosaic_glass", "item:mcwwindows:light_gray_mosaic_glass", 8, [
      [
        "item:minecraft:light_gray_stained_glass",
        "item:minecraft:light_gray_stained_glass",
        "item:minecraft:light_gray_stained_glass",
      ],
      [
        "item:minecraft:light_gray_stained_glass",
        "item:minecraft:light_gray_dye",
        "item:minecraft:light_gray_stained_glass",
      ],
      [
        "item:minecraft:light_gray_stained_glass",
        "item:minecraft:light_gray_stained_glass",
        "item:minecraft:light_gray_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:light_gray_mosaic_glass_pane",
      "item:mcwwindows:light_gray_mosaic_glass_pane",
      16,
      [
        [
          "item:mcwwindows:light_gray_mosaic_glass",
          "item:mcwwindows:light_gray_mosaic_glass",
          "item:mcwwindows:light_gray_mosaic_glass",
        ],
        [
          "item:mcwwindows:light_gray_mosaic_glass",
          "item:mcwwindows:light_gray_mosaic_glass",
          "item:mcwwindows:light_gray_mosaic_glass",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:light_gray_stained_glass", "item:minecraft:light_gray_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:light_gray_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:light_gray_stained_glass_pane",
      "item:minecraft:light_gray_stained_glass_pane",
      16,
      [
        [
          "item:minecraft:light_gray_stained_glass",
          "item:minecraft:light_gray_stained_glass",
          "item:minecraft:light_gray_stained_glass",
        ],
        [
          "item:minecraft:light_gray_stained_glass",
          "item:minecraft:light_gray_stained_glass",
          "item:minecraft:light_gray_stained_glass",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:light_gray_stained_glass_pane_from_glass_pane",
      "item:minecraft:light_gray_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:light_gray_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:light_gray_striped_awning", "item:mcwroofs:light_gray_striped_awning", 1, [
      ["item:minecraft:light_gray_carpet", "item:minecraft:white_carpet", "item:minecraft:light_gray_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:light_gray_terracotta", "item:minecraft:light_gray_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:light_gray_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:light_weighted_pressure_plate",
      "item:minecraft:light_weighted_pressure_plate",
      1,
      [["item:minecraft:gold_ingot", "item:minecraft:gold_ingot"]]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lightning_rod", "item:minecraft:lightning_rod", 1, [
      ["item:minecraft:copper_ingot"],
      ["item:minecraft:copper_ingot"],
      ["item:minecraft:copper_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lime_banner", "item:minecraft:lime_banner", 1, [
      ["item:minecraft:lime_wool", "item:minecraft:lime_wool", "item:minecraft:lime_wool"],
      ["item:minecraft:lime_wool", "item:minecraft:lime_wool", "item:minecraft:lime_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lime_bed", "item:minecraft:lime_bed", 1, [
      ["item:minecraft:lime_wool", "item:minecraft:lime_wool", "item:minecraft:lime_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lime_carpet", "item:minecraft:lime_carpet", 3, [
      ["item:minecraft:lime_wool", "item:minecraft:lime_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lime_carpet_from_white_carpet", "item:minecraft:lime_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:lime_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:lime_curtain", "item:mcwwindows:lime_curtain", 3, [
      ["item:minecraft:lime_wool"],
      ["item:minecraft:lime_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:lime_mosaic_glass", "item:mcwwindows:lime_mosaic_glass", 8, [
      ["item:minecraft:lime_stained_glass", "item:minecraft:lime_stained_glass", "item:minecraft:lime_stained_glass"],
      ["item:minecraft:lime_stained_glass", "item:minecraft:lime_dye", "item:minecraft:lime_stained_glass"],
      ["item:minecraft:lime_stained_glass", "item:minecraft:lime_stained_glass", "item:minecraft:lime_stained_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:lime_mosaic_glass_pane", "item:mcwwindows:lime_mosaic_glass_pane", 16, [
      ["item:mcwwindows:lime_mosaic_glass", "item:mcwwindows:lime_mosaic_glass", "item:mcwwindows:lime_mosaic_glass"],
      ["item:mcwwindows:lime_mosaic_glass", "item:mcwwindows:lime_mosaic_glass", "item:mcwwindows:lime_mosaic_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lime_stained_glass", "item:minecraft:lime_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:lime_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lime_stained_glass_pane", "item:minecraft:lime_stained_glass_pane", 16, [
      ["item:minecraft:lime_stained_glass", "item:minecraft:lime_stained_glass", "item:minecraft:lime_stained_glass"],
      ["item:minecraft:lime_stained_glass", "item:minecraft:lime_stained_glass", "item:minecraft:lime_stained_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:lime_stained_glass_pane_from_glass_pane",
      "item:minecraft:lime_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:lime_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:lime_striped_awning", "item:mcwroofs:lime_striped_awning", 1, [
      ["item:minecraft:lime_carpet", "item:minecraft:white_carpet", "item:minecraft:lime_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lime_terracotta", "item:minecraft:lime_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:lime_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:lodestone", "item:minecraft:lodestone", 1, [
      [
        "item:minecraft:chiseled_stone_bricks",
        "item:minecraft:chiseled_stone_bricks",
        "item:minecraft:chiseled_stone_bricks",
      ],
      [
        "item:minecraft:chiseled_stone_bricks",
        "item:minecraft:netherite_ingot",
        "item:minecraft:chiseled_stone_bricks",
      ],
      [
        "item:minecraft:chiseled_stone_bricks",
        "item:minecraft:chiseled_stone_bricks",
        "item:minecraft:chiseled_stone_bricks",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:loom", "item:minecraft:loom", 1, [
      ["item:minecraft:string", "item:minecraft:string"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:magenta_banner", "item:minecraft:magenta_banner", 1, [
      ["item:minecraft:magenta_wool", "item:minecraft:magenta_wool", "item:minecraft:magenta_wool"],
      ["item:minecraft:magenta_wool", "item:minecraft:magenta_wool", "item:minecraft:magenta_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:magenta_bed", "item:minecraft:magenta_bed", 1, [
      ["item:minecraft:magenta_wool", "item:minecraft:magenta_wool", "item:minecraft:magenta_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:magenta_carpet", "item:minecraft:magenta_carpet", 3, [
      ["item:minecraft:magenta_wool", "item:minecraft:magenta_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:magenta_carpet_from_white_carpet", "item:minecraft:magenta_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:magenta_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:magenta_curtain", "item:mcwwindows:magenta_curtain", 3, [
      ["item:minecraft:magenta_wool"],
      ["item:minecraft:magenta_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:magenta_mosaic_glass", "item:mcwwindows:magenta_mosaic_glass", 8, [
      [
        "item:minecraft:magenta_stained_glass",
        "item:minecraft:magenta_stained_glass",
        "item:minecraft:magenta_stained_glass",
      ],
      ["item:minecraft:magenta_stained_glass", "item:minecraft:magenta_dye", "item:minecraft:magenta_stained_glass"],
      [
        "item:minecraft:magenta_stained_glass",
        "item:minecraft:magenta_stained_glass",
        "item:minecraft:magenta_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:magenta_mosaic_glass_pane", "item:mcwwindows:magenta_mosaic_glass_pane", 16, [
      [
        "item:mcwwindows:magenta_mosaic_glass",
        "item:mcwwindows:magenta_mosaic_glass",
        "item:mcwwindows:magenta_mosaic_glass",
      ],
      [
        "item:mcwwindows:magenta_mosaic_glass",
        "item:mcwwindows:magenta_mosaic_glass",
        "item:mcwwindows:magenta_mosaic_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:magenta_stained_glass", "item:minecraft:magenta_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:magenta_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:magenta_stained_glass_pane", "item:minecraft:magenta_stained_glass_pane", 16, [
      [
        "item:minecraft:magenta_stained_glass",
        "item:minecraft:magenta_stained_glass",
        "item:minecraft:magenta_stained_glass",
      ],
      [
        "item:minecraft:magenta_stained_glass",
        "item:minecraft:magenta_stained_glass",
        "item:minecraft:magenta_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:magenta_stained_glass_pane_from_glass_pane",
      "item:minecraft:magenta_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:magenta_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:magenta_striped_awning", "item:mcwroofs:magenta_striped_awning", 1, [
      ["item:minecraft:magenta_carpet", "item:minecraft:white_carpet", "item:minecraft:magenta_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:magenta_terracotta", "item:minecraft:magenta_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:magenta_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:magma_block", "item:minecraft:magma_block", 1, [
      ["item:minecraft:magma_cream", "item:minecraft:magma_cream"],
      ["item:minecraft:magma_cream", "item:minecraft:magma_cream"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chiselsandbits:magnifying_glass", "item:chiselsandbits:magnifying_glass", 1, [
      ["tag:items:chiselsandbits:chisel", "tag:items:forge:glass"],
      ["tag:items:forge:rods/wooden", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:map", "item:minecraft:map", 1, [
      ["item:minecraft:paper", "item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:compass", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper", "item:minecraft:paper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chiselsandbits:measuring_tape", "item:chiselsandbits:measuring_tape", 1, [
      ["", "", "tag:items:forge:string"],
      ["tag:items:forge:ingots/iron", "tag:items:forge:string", "tag:items:forge:dyes/yellow"],
      ["tag:items:forge:ingots/iron", "tag:items:forge:ingots/iron", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:melon", "item:minecraft:melon", 1, [
      ["item:minecraft:melon_slice", "item:minecraft:melon_slice", "item:minecraft:melon_slice"],
      ["item:minecraft:melon_slice", "item:minecraft:melon_slice", "item:minecraft:melon_slice"],
      ["item:minecraft:melon_slice", "item:minecraft:melon_slice", "item:minecraft:melon_slice"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:melon_popsicle", "item:farmersdelight:melon_popsicle", 1, [
      ["", "item:minecraft:melon_slice", "item:minecraft:melon_slice"],
      ["item:minecraft:ice", "item:minecraft:melon_slice", "item:minecraft:melon_slice"],
      ["item:minecraft:stick", "item:minecraft:ice", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:metal_door", "item:mcwdoors:metal_door", 2, [
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_nugget"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:metal_full_trapdoor", "item:mcwtrpdoors:metal_full_trapdoor", 1, [
      ["item:minecraft:iron_ingot"],
      ["item:mcwtrpdoors:metal_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:metal_hospital_door", "item:mcwdoors:metal_hospital_door", 2, [
      ["item:minecraft:glass_pane", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_nugget", "item:minecraft:iron_nugget"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:metal_reinforced_door", "item:mcwdoors:metal_reinforced_door", 1, [
      ["item:minecraft:iron_nugget", "item:minecraft:iron_nugget", "item:minecraft:iron_nugget"],
      ["item:minecraft:iron_nugget", "item:mcwdoors:metal_door", "item:minecraft:iron_nugget"],
      ["item:minecraft:iron_nugget", "item:minecraft:iron_nugget", "item:minecraft:iron_nugget"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:metal_trapdoor", "item:mcwtrpdoors:metal_trapdoor", 2, [
      ["item:minecraft:iron_ingot", "item:minecraft:glass_pane", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:glass_pane", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:metal_warning_door", "item:mcwdoors:metal_warning_door", 1, [
      ["item:minecraft:iron_nugget", "item:mcwdoors:metal_windowed_door", "item:minecraft:iron_nugget"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:metal_warning_trapdoor", "item:mcwtrpdoors:metal_warning_trapdoor", 1, [
      ["item:minecraft:iron_ingot", "item:minecraft:yellow_dye", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:black_dye", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:metal_windowed_door", "item:mcwdoors:metal_windowed_door", 1, [
      ["item:minecraft:glass_pane"],
      ["item:mcwdoors:metal_door"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:minecart", "item:minecraft:minecart", 1, [
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:modern_andesite_wall", "item:mcwfences:modern_andesite_wall", 6, [
      ["item:minecraft:polished_andesite", "item:minecraft:andesite", "item:minecraft:polished_andesite"],
      ["item:minecraft:polished_andesite", "item:minecraft:polished_andesite", "item:minecraft:polished_andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:modern_blackstone_wall", "item:mcwfences:modern_blackstone_wall", 6, [
      [
        "item:minecraft:polished_blackstone_bricks",
        "item:minecraft:blackstone",
        "item:minecraft:polished_blackstone_bricks",
      ],
      [
        "item:minecraft:polished_blackstone_bricks",
        "item:minecraft:polished_blackstone_bricks",
        "item:minecraft:polished_blackstone_bricks",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:modern_deepslate_brick_wall", "item:mcwfences:modern_deepslate_brick_wall", 6, [
      ["item:minecraft:deepslate_bricks", "item:minecraft:deepslate_tiles", "item:minecraft:deepslate_bricks"],
      ["item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:modern_deepslate_wall", "item:mcwfences:modern_deepslate_wall", 6, [
      ["item:minecraft:polished_deepslate", "item:minecraft:deepslate", "item:minecraft:polished_deepslate"],
      ["item:minecraft:polished_deepslate", "item:minecraft:polished_deepslate", "item:minecraft:polished_deepslate"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:modern_diorite_wall", "item:mcwfences:modern_diorite_wall", 6, [
      ["item:minecraft:polished_diorite", "item:minecraft:diorite", "item:minecraft:polished_diorite"],
      ["item:minecraft:polished_diorite", "item:minecraft:polished_diorite", "item:minecraft:polished_diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:modern_end_brick_wall", "item:mcwfences:modern_end_brick_wall", 6, [
      ["item:minecraft:end_stone_bricks", "item:minecraft:end_stone", "item:minecraft:end_stone_bricks"],
      ["item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:modern_granite_wall", "item:mcwfences:modern_granite_wall", 6, [
      ["item:minecraft:polished_granite", "item:minecraft:granite", "item:minecraft:polished_granite"],
      ["item:minecraft:polished_granite", "item:minecraft:polished_granite", "item:minecraft:polished_granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:modern_nether_brick_wall", "item:mcwfences:modern_nether_brick_wall", 6, [
      ["item:minecraft:nether_bricks", "item:minecraft:netherrack", "item:minecraft:nether_bricks"],
      ["item:minecraft:nether_bricks", "item:minecraft:nether_bricks", "item:minecraft:nether_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:modern_prismarine_wall", "item:mcwfences:modern_prismarine_wall", 6, [
      ["item:minecraft:prismarine_bricks", "item:minecraft:prismarine", "item:minecraft:prismarine_bricks"],
      ["item:minecraft:prismarine_bricks", "item:minecraft:prismarine_bricks", "item:minecraft:prismarine_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:modern_quartz_wall", "item:mcwfences:modern_quartz_wall", 6, [
      ["item:minecraft:quartz_bricks", "item:minecraft:quartz_block", "item:minecraft:quartz_bricks"],
      ["item:minecraft:quartz_bricks", "item:minecraft:quartz_bricks", "item:minecraft:quartz_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:modern_red_sandstone_wall", "item:mcwfences:modern_red_sandstone_wall", 6, [
      ["item:minecraft:smooth_red_sandstone", "item:minecraft:red_sandstone", "item:minecraft:smooth_red_sandstone"],
      [
        "item:minecraft:smooth_red_sandstone",
        "item:minecraft:smooth_red_sandstone",
        "item:minecraft:smooth_red_sandstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:modern_sandstone_wall", "item:mcwfences:modern_sandstone_wall", 6, [
      ["item:minecraft:smooth_sandstone", "item:minecraft:sandstone", "item:minecraft:smooth_sandstone"],
      ["item:minecraft:smooth_sandstone", "item:minecraft:smooth_sandstone", "item:minecraft:smooth_sandstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:modern_stone_brick_wall", "item:mcwfences:modern_stone_brick_wall", 6, [
      ["item:minecraft:stone_bricks", "item:minecraft:cobblestone", "item:minecraft:stone_bricks"],
      ["item:minecraft:stone_bricks", "item:minecraft:stone_bricks", "item:minecraft:stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chiselsandbits:modification_table", "item:chiselsandbits:modification_table", 1, [
      ["tag:items:minecraft:wooden_slabs", "tag:items:chiselsandbits:chisel", "tag:items:minecraft:wooden_slabs"],
      ["tag:items:forge:nuggets/iron", "tag:items:minecraft:logs", "tag:items:forge:nuggets/iron"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:monitor_advanced", "item:computercraft:monitor_advanced", 4, [
      ["tag:items:c:gold_ingots", "tag:items:c:gold_ingots", "tag:items:c:gold_ingots"],
      ["tag:items:c:gold_ingots", "tag:items:c:glass_panes", "tag:items:c:gold_ingots"],
      ["tag:items:c:gold_ingots", "tag:items:c:gold_ingots", "tag:items:c:gold_ingots"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:monitor_normal", "item:computercraft:monitor_normal", 1, [
      ["tag:items:c:stones", "tag:items:c:stones", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:glass_panes", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:stones", "tag:items:c:stones"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:moss_carpet", "item:minecraft:moss_carpet", 3, [
      ["item:minecraft:moss_block", "item:minecraft:moss_block"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:mossy_cobblestone_slab", "item:minecraft:mossy_cobblestone_slab", 6, [
      ["item:minecraft:mossy_cobblestone", "item:minecraft:mossy_cobblestone", "item:minecraft:mossy_cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:mossy_cobblestone_stairs", "item:minecraft:mossy_cobblestone_stairs", 4, [
      ["item:minecraft:mossy_cobblestone", "", ""],
      ["item:minecraft:mossy_cobblestone", "item:minecraft:mossy_cobblestone", ""],
      ["item:minecraft:mossy_cobblestone", "item:minecraft:mossy_cobblestone", "item:minecraft:mossy_cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:mossy_cobblestone_wall", "item:minecraft:mossy_cobblestone_wall", 6, [
      ["item:minecraft:mossy_cobblestone", "item:minecraft:mossy_cobblestone", "item:minecraft:mossy_cobblestone"],
      ["item:minecraft:mossy_cobblestone", "item:minecraft:mossy_cobblestone", "item:minecraft:mossy_cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:mossy_stone_brick_bridge", "item:mcwbridges:mossy_stone_brick_bridge", 4, [
      ["item:minecraft:mossy_stone_brick_wall", "", "item:minecraft:mossy_stone_brick_wall"],
      [
        "item:minecraft:mossy_stone_brick_slab",
        "item:minecraft:mossy_stone_brick_slab",
        "item:minecraft:mossy_stone_brick_slab",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:mossy_stone_brick_slab", "item:minecraft:mossy_stone_brick_slab", 6, [
      ["item:minecraft:mossy_stone_bricks", "item:minecraft:mossy_stone_bricks", "item:minecraft:mossy_stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:mossy_stone_brick_stairs", "item:minecraft:mossy_stone_brick_stairs", 4, [
      ["item:minecraft:mossy_stone_bricks", "", ""],
      ["item:minecraft:mossy_stone_bricks", "item:minecraft:mossy_stone_bricks", ""],
      ["item:minecraft:mossy_stone_bricks", "item:minecraft:mossy_stone_bricks", "item:minecraft:mossy_stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:mossy_stone_brick_wall", "item:minecraft:mossy_stone_brick_wall", 6, [
      ["item:minecraft:mossy_stone_bricks", "item:minecraft:mossy_stone_bricks", "item:minecraft:mossy_stone_bricks"],
      ["item:minecraft:mossy_stone_bricks", "item:minecraft:mossy_stone_bricks", "item:minecraft:mossy_stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:mossy_stone_bridge_pier", "item:mcwbridges:mossy_stone_bridge_pier", 3, [
      [
        "item:minecraft:mossy_stone_bricks",
        "item:minecraft:mossy_stone_brick_wall",
        "item:minecraft:mossy_stone_bricks",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:mossy_stone_bridge_stair", "item:mcwbridges:mossy_stone_bridge_stair", 6, [
      ["", "", "item:mcwbridges:mossy_stone_brick_bridge"],
      ["", "item:mcwbridges:mossy_stone_brick_bridge", "item:mcwbridges:mossy_stone_brick_bridge"],
      [
        "item:mcwbridges:mossy_stone_brick_bridge",
        "item:mcwbridges:mossy_stone_brick_bridge",
        "item:mcwbridges:mossy_stone_brick_bridge",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:nether_brick_arrow_slit", "item:mcwwindows:nether_brick_arrow_slit", 3, [
      ["item:minecraft:nether_bricks", "item:minecraft:nether_bricks"],
      ["item:minecraft:nether_brick_slab", "item:minecraft:nether_brick_slab"],
      ["item:minecraft:nether_bricks", "item:minecraft:nether_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:nether_brick_fence", "item:minecraft:nether_brick_fence", 6, [
      ["item:minecraft:nether_bricks", "item:minecraft:nether_brick", "item:minecraft:nether_bricks"],
      ["item:minecraft:nether_bricks", "item:minecraft:nether_brick", "item:minecraft:nether_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:nether_brick_gothic", "item:mcwwindows:nether_brick_gothic", 4, [
      ["", "item:minecraft:nether_bricks", ""],
      ["item:minecraft:nether_bricks", "item:minecraft:glass_pane", "item:minecraft:nether_bricks"],
      ["", "item:minecraft:nether_bricks", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:nether_brick_railing_gate", "item:mcwfences:nether_brick_railing_gate", 1, [
      ["item:minecraft:iron_bars", "item:minecraft:nether_bricks", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:nether_bricks", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:nether_brick_slab", "item:minecraft:nether_brick_slab", 6, [
      ["item:minecraft:nether_bricks", "item:minecraft:nether_bricks", "item:minecraft:nether_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:nether_brick_stairs", "item:minecraft:nether_brick_stairs", 4, [
      ["item:minecraft:nether_bricks", "", ""],
      ["item:minecraft:nether_bricks", "item:minecraft:nether_bricks", ""],
      ["item:minecraft:nether_bricks", "item:minecraft:nether_bricks", "item:minecraft:nether_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:nether_brick_wall", "item:minecraft:nether_brick_wall", 6, [
      ["item:minecraft:nether_bricks", "item:minecraft:nether_bricks", "item:minecraft:nether_bricks"],
      ["item:minecraft:nether_bricks", "item:minecraft:nether_bricks", "item:minecraft:nether_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:nether_bricks", "item:minecraft:nether_bricks", 1, [
      ["item:minecraft:nether_brick", "item:minecraft:nether_brick"],
      ["item:minecraft:nether_brick", "item:minecraft:nether_brick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:nether_wart_block", "item:minecraft:nether_wart_block", 1, [
      ["item:minecraft:nether_wart", "item:minecraft:nether_wart", "item:minecraft:nether_wart"],
      ["item:minecraft:nether_wart", "item:minecraft:nether_wart", "item:minecraft:nether_wart"],
      ["item:minecraft:nether_wart", "item:minecraft:nether_wart", "item:minecraft:nether_wart"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:netherite_block", "item:minecraft:netherite_block", 1, [
      ["item:minecraft:netherite_ingot", "item:minecraft:netherite_ingot", "item:minecraft:netherite_ingot"],
      ["item:minecraft:netherite_ingot", "item:minecraft:netherite_ingot", "item:minecraft:netherite_ingot"],
      ["item:minecraft:netherite_ingot", "item:minecraft:netherite_ingot", "item:minecraft:netherite_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:note_block", "item:minecraft:note_block", 1, [
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "item:minecraft:redstone", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_attic_roof", "item:mcwroofs:oak_attic_roof", 2, [
      ["", "item:minecraft:oak_log"],
      ["item:minecraft:oak_log", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:oak_bamboo_trapdoor", "item:mcwtrpdoors:oak_bamboo_trapdoor", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwtrpdoors:print_bamboo"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_bark_glass_door", "item:mcwdoors:oak_bark_glass_door", 3, [
      ["item:minecraft:oak_log", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:oak_log", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:oak_bark_trapdoor", "item:mcwtrpdoors:oak_bark_trapdoor", 2, [
      ["item:minecraft:oak_log", "item:minecraft:glass_pane", "item:minecraft:oak_log"],
      ["item:minecraft:oak_log", "item:minecraft:glass_pane", "item:minecraft:oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_barn_door", "item:mcwdoors:oak_barn_door", 2, [
      ["item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_barn_glass_door", "item:mcwdoors:oak_barn_glass_door", 3, [
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:oak_barn_trapdoor", "item:mcwtrpdoors:oak_barn_trapdoor", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwtrpdoors:oak_glass_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:oak_barred_trapdoor", "item:mcwtrpdoors:oak_barred_trapdoor", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwtrpdoors:print_barred"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_beach_door", "item:mcwdoors:oak_beach_door", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwdoors:print_jungle"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:oak_beach_trapdoor", "item:mcwtrpdoors:oak_beach_trapdoor", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwtrpdoors:print_beach"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:oak_blinds", "item:mcwwindows:oak_blinds", 3, [
      ["item:minecraft:oak_slab", "item:minecraft:oak_slab", "item:minecraft:oak_slab"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:oak_boat", "item:minecraft:oak_boat", 1, [
      ["item:minecraft:oak_planks", "", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:oak_bridge_pier", "item:mcwbridges:oak_bridge_pier", 3, [
      ["item:minecraft:oak_log", "item:minecraft:oak_fence", "item:minecraft:oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:oak_cabinet", "item:farmersdelight:oak_cabinet", 1, [
      ["item:minecraft:oak_slab", "item:minecraft:oak_slab", "item:minecraft:oak_slab"],
      ["item:minecraft:oak_trapdoor", "", "item:minecraft:oak_trapdoor"],
      ["item:minecraft:oak_slab", "item:minecraft:oak_slab", "item:minecraft:oak_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_cottage_door", "item:mcwdoors:oak_cottage_door", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwdoors:print_spruce"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:oak_cottage_trapdoor", "item:mcwtrpdoors:oak_cottage_trapdoor", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwtrpdoors:print_cottage"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:oak_door", "item:minecraft:oak_door", 3, [
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:oak_fence", "item:minecraft:oak_fence", 3, [
      ["item:minecraft:oak_planks", "item:minecraft:stick", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:stick", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:oak_fence_gate", "item:minecraft:oak_fence_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:oak_planks", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_four_panel_door", "item:mcwdoors:oak_four_panel_door", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwdoors:print_dark_oak"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:oak_four_panel_trapdoor", "item:mcwtrpdoors:oak_four_panel_trapdoor", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwtrpdoors:print_four_panel"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:oak_four_window", "item:mcwwindows:oak_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:oak_log", "item:mcwwindows:window_centre_bar_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_glass_door", "item:mcwdoors:oak_glass_door", 3, [
      ["item:minecraft:oak_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:oak_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:oak_glass_trapdoor", "item:mcwtrpdoors:oak_glass_trapdoor", 2, [
      ["item:minecraft:oak_planks", "item:minecraft:glass_pane", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:glass_pane", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:oak_hedge", "item:mcwfences:oak_hedge", 4, [
      ["item:minecraft:oak_leaves", "item:minecraft:oak_leaves"],
      ["item:minecraft:oak_leaves", "item:minecraft:oak_leaves"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:oak_highley_gate", "item:mcwfences:oak_highley_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:oak_log", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:oak_horse_fence", "item:mcwfences:oak_horse_fence", 3, [
      ["item:minecraft:oak_log", "item:minecraft:stick", "item:minecraft:oak_log"],
      ["item:minecraft:stick", "item:minecraft:oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_japanese2_door", "item:mcwdoors:oak_japanese2_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:oak_slab", "item:minecraft:oak_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_japanese_door", "item:mcwdoors:oak_japanese_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:oak_log_bridge_middle", "item:mcwbridges:oak_log_bridge_middle", 4, [
      ["item:minecraft:oak_fence", "", "item:minecraft:oak_fence"],
      ["item:minecraft:oak_slab", "item:minecraft:oak_slab", "item:minecraft:oak_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:oak_log_bridge_stair", "item:mcwbridges:oak_log_bridge_stair", 6, [
      ["", "", "item:mcwbridges:oak_log_bridge_middle"],
      ["", "item:mcwbridges:oak_log_bridge_middle", "item:mcwbridges:oak_log_bridge_middle"],
      [
        "item:mcwbridges:oak_log_bridge_middle",
        "item:mcwbridges:oak_log_bridge_middle",
        "item:mcwbridges:oak_log_bridge_middle",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:oak_log_parapet", "item:mcwwindows:oak_log_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:oak_louvered_shutter", "item:mcwwindows:oak_louvered_shutter", 3, [
      ["item:minecraft:oak_slab"],
      ["item:minecraft:oak_slab"],
      ["item:minecraft:oak_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_lower_roof", "item:mcwroofs:oak_lower_roof", 4, [
      ["", "item:minecraft:oak_log", "item:minecraft:oak_log"],
      ["item:minecraft:oak_log", "item:minecraft:oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_modern_door", "item:mcwdoors:oak_modern_door", 3, [
      ["item:minecraft:oak_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_mystic_door", "item:mcwdoors:oak_mystic_door", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwdoors:print_mystic"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:oak_mystic_trapdoor", "item:mcwtrpdoors:oak_mystic_trapdoor", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwtrpdoors:print_mystic"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_nether_door", "item:mcwdoors:oak_nether_door", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwdoors:print_nether"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_paper_door", "item:mcwdoors:oak_paper_door", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwdoors:print_birch"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:oak_paper_trapdoor", "item:mcwtrpdoors:oak_paper_trapdoor", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwtrpdoors:print_paper"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:oak_picket_fence", "item:mcwfences:oak_picket_fence", 3, [
      ["item:minecraft:oak_log", "item:minecraft:oak_planks", "item:minecraft:oak_log"],
      ["item:minecraft:oak_log", "item:minecraft:stick", "item:minecraft:oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:oak_plank_four_window", "item:mcwwindows:oak_plank_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:oak_planks", "item:mcwwindows:window_centre_bar_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:oak_plank_parapet", "item:mcwwindows:oak_plank_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:oak_plank_window", "item:mcwwindows:oak_plank_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:oak_planks", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:oak_plank_window2", "item:mcwwindows:oak_plank_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:oak_planks", "item:mcwwindows:window_centre_bar_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_planks_attic_roof", "item:mcwroofs:oak_planks_attic_roof", 2, [
      ["", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_planks_lower_roof", "item:mcwroofs:oak_planks_lower_roof", 4, [
      ["", "item:minecraft:oak_planks", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwpaths:oak_planks_path", "item:mcwpaths:oak_planks_path", 6, [
      ["item:minecraft:oak_slab", "item:minecraft:oak_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_planks_roof", "item:mcwroofs:oak_planks_roof", 2, [
      ["", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_planks_steep_roof", "item:mcwroofs:oak_planks_steep_roof", 4, [
      ["", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_planks_top_roof", "item:mcwroofs:oak_planks_top_roof", 2, [
      ["item:minecraft:oak_planks", "item:minecraft:stick", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_planks_upper_lower_roof", "item:mcwroofs:oak_planks_upper_lower_roof", 3, [
      ["", "", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_planks_upper_steep_roof", "item:mcwroofs:oak_planks_upper_steep_roof", 3, [
      ["", "item:minecraft:oak_planks"],
      ["", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:oak_pressure_plate", "item:minecraft:oak_pressure_plate", 1, [
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:oak_pyramid_gate", "item:mcwfences:oak_pyramid_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:oak_log", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:oak_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:oak_rail_bridge", "item:mcwbridges:oak_rail_bridge", 4, [
      ["item:minecraft:oak_fence", "", "item:minecraft:oak_fence"],
      ["item:minecraft:oak_fence", "item:minecraft:oak_slab", "item:minecraft:oak_fence"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:oak_ranch_trapdoor", "item:mcwtrpdoors:oak_ranch_trapdoor", 2, [
      ["item:minecraft:oak_log", "item:minecraft:stick", "item:minecraft:oak_log"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:oak_log", "item:minecraft:stick", "item:minecraft:oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_roof", "item:mcwroofs:oak_roof", 2, [
      ["", "item:minecraft:oak_log"],
      ["item:minecraft:oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:oak_rope_bridge_stair", "item:mcwbridges:oak_rope_bridge_stair", 6, [
      ["", "", "item:mcwbridges:rope_oak_bridge"],
      ["", "item:mcwbridges:rope_oak_bridge", "item:mcwbridges:rope_oak_bridge"],
      ["item:mcwbridges:rope_oak_bridge", "item:mcwbridges:rope_oak_bridge", "item:mcwbridges:rope_oak_bridge"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:oak_shutter", "item:mcwwindows:oak_shutter", 3, [
      ["item:minecraft:oak_trapdoor"],
      ["item:minecraft:oak_trapdoor"],
      ["item:minecraft:oak_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:oak_sign", "item:minecraft:oak_sign", 3, [
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks", "item:minecraft:oak_planks"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:oak_slab", "item:minecraft:oak_slab", 6, [
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_stable_door", "item:mcwdoors:oak_stable_door", 3, [
      ["item:minecraft:iron_bars", "item:minecraft:iron_bars"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_stable_head_door", "item:mcwdoors:oak_stable_head_door", 1, [
      ["item:mcwdoors:oak_stable_door"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:oak_stairs", "item:minecraft:oak_stairs", 4, [
      ["item:minecraft:oak_planks", "", ""],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks", ""],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_steep_roof", "item:mcwroofs:oak_steep_roof", 4, [
      ["", "item:minecraft:oak_log"],
      ["item:minecraft:oak_log", "item:minecraft:oak_log"],
      ["item:minecraft:oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:oak_stockade_fence", "item:mcwfences:oak_stockade_fence", 3, [
      ["item:minecraft:oak_log", "item:minecraft:oak_planks", "item:minecraft:oak_log"],
      ["item:minecraft:oak_log", "item:minecraft:oak_planks", "item:minecraft:oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_swamp_door", "item:mcwdoors:oak_swamp_door", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwdoors:print_swamp"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:oak_swamp_trapdoor", "item:mcwtrpdoors:oak_swamp_trapdoor", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwtrpdoors:print_swamp"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_top_roof", "item:mcwroofs:oak_top_roof", 2, [
      ["item:minecraft:oak_log", "item:minecraft:stick", "item:minecraft:oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:oak_trapdoor", "item:minecraft:oak_trapdoor", 2, [
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_tropical_door", "item:mcwdoors:oak_tropical_door", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwdoors:print_acacia"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:oak_tropical_trapdoor", "item:mcwtrpdoors:oak_tropical_trapdoor", 1, [
      ["item:minecraft:oak_planks"],
      ["item:mcwtrpdoors:print_tropical"],
      ["item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_upper_lower_roof", "item:mcwroofs:oak_upper_lower_roof", 3, [
      ["", "", "item:minecraft:oak_log"],
      ["item:minecraft:oak_log", "item:minecraft:oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:oak_upper_steep_roof", "item:mcwroofs:oak_upper_steep_roof", 3, [
      ["", "item:minecraft:oak_log"],
      ["", "item:minecraft:oak_log"],
      ["item:minecraft:oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:oak_western_door", "item:mcwdoors:oak_western_door", 3, [
      ["", "", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_slab", "item:minecraft:oak_planks"],
      ["item:minecraft:oak_planks", "item:minecraft:oak_planks", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:oak_window", "item:create:oak_window", 2, [
      ["", "item:minecraft:oak_planks", ""],
      ["item:minecraft:oak_planks", "tag:items:c:glass/colorless", "item:minecraft:oak_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:oak_window", "item:mcwwindows:oak_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:oak_log", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:oak_window2", "item:mcwwindows:oak_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:oak_log", "item:mcwwindows:window_centre_bar_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:oak_window_pane", "item:create:oak_window_pane", 16, [
      ["item:create:oak_window", "item:create:oak_window", "item:create:oak_window"],
      ["item:create:oak_window", "item:create:oak_window", "item:create:oak_window"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:oak_wired_fence", "item:mcwfences:oak_wired_fence", 3, [
      ["item:minecraft:stick", "item:minecraft:iron_bars", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:oak_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:oak_wood", "item:minecraft:oak_wood", 3, [
      ["item:minecraft:oak_log", "item:minecraft:oak_log"],
      ["item:minecraft:oak_log", "item:minecraft:oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:observer", "item:minecraft:observer", 1, [
      ["item:minecraft:cobblestone", "item:minecraft:cobblestone", "item:minecraft:cobblestone"],
      ["item:minecraft:redstone", "item:minecraft:redstone", "item:minecraft:quartz"],
      ["item:minecraft:cobblestone", "item:minecraft:cobblestone", "item:minecraft:cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:onion_crate", "item:farmersdelight:onion_crate", 1, [
      ["item:farmersdelight:onion", "item:farmersdelight:onion", "item:farmersdelight:onion"],
      ["item:farmersdelight:onion", "item:farmersdelight:onion", "item:farmersdelight:onion"],
      ["item:farmersdelight:onion", "item:farmersdelight:onion", "item:farmersdelight:onion"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:orange_banner", "item:minecraft:orange_banner", 1, [
      ["item:minecraft:orange_wool", "item:minecraft:orange_wool", "item:minecraft:orange_wool"],
      ["item:minecraft:orange_wool", "item:minecraft:orange_wool", "item:minecraft:orange_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:orange_bed", "item:minecraft:orange_bed", 1, [
      ["item:minecraft:orange_wool", "item:minecraft:orange_wool", "item:minecraft:orange_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:orange_carpet", "item:minecraft:orange_carpet", 3, [
      ["item:minecraft:orange_wool", "item:minecraft:orange_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:orange_carpet_from_white_carpet", "item:minecraft:orange_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:orange_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:orange_curtain", "item:mcwwindows:orange_curtain", 3, [
      ["item:minecraft:orange_wool"],
      ["item:minecraft:orange_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:orange_mosaic_glass", "item:mcwwindows:orange_mosaic_glass", 8, [
      [
        "item:minecraft:orange_stained_glass",
        "item:minecraft:orange_stained_glass",
        "item:minecraft:orange_stained_glass",
      ],
      ["item:minecraft:orange_stained_glass", "item:minecraft:orange_dye", "item:minecraft:orange_stained_glass"],
      [
        "item:minecraft:orange_stained_glass",
        "item:minecraft:orange_stained_glass",
        "item:minecraft:orange_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:orange_mosaic_glass_pane", "item:mcwwindows:orange_mosaic_glass_pane", 16, [
      [
        "item:mcwwindows:orange_mosaic_glass",
        "item:mcwwindows:orange_mosaic_glass",
        "item:mcwwindows:orange_mosaic_glass",
      ],
      [
        "item:mcwwindows:orange_mosaic_glass",
        "item:mcwwindows:orange_mosaic_glass",
        "item:mcwwindows:orange_mosaic_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:orange_sandstone_bridge", "item:mcwbridges:orange_sandstone_bridge", 4, [
      ["item:minecraft:red_sandstone_wall", "", "item:minecraft:red_sandstone_wall"],
      ["item:minecraft:red_sandstone_slab", "item:minecraft:red_sandstone_slab", "item:minecraft:red_sandstone_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:orange_stained_glass", "item:minecraft:orange_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:orange_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:orange_stained_glass_pane", "item:minecraft:orange_stained_glass_pane", 16, [
      [
        "item:minecraft:orange_stained_glass",
        "item:minecraft:orange_stained_glass",
        "item:minecraft:orange_stained_glass",
      ],
      [
        "item:minecraft:orange_stained_glass",
        "item:minecraft:orange_stained_glass",
        "item:minecraft:orange_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:orange_stained_glass_pane_from_glass_pane",
      "item:minecraft:orange_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:orange_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:orange_striped_awning", "item:mcwroofs:orange_striped_awning", 1, [
      ["item:minecraft:orange_carpet", "item:minecraft:white_carpet", "item:minecraft:orange_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:orange_terracotta", "item:minecraft:orange_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:orange_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:ornate_iron_window", "item:create:ornate_iron_window", 2, [
      ["", "item:minecraft:iron_nugget", ""],
      ["item:minecraft:iron_nugget", "tag:items:c:glass/colorless", "item:minecraft:iron_nugget"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:ornate_iron_window_pane", "item:create:ornate_iron_window_pane", 16, [
      ["item:create:ornate_iron_window", "item:create:ornate_iron_window", "item:create:ornate_iron_window"],
      ["item:create:ornate_iron_window", "item:create:ornate_iron_window", "item:create:ornate_iron_window"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:oxidized_copper_shingle_slab", "item:create:oxidized_copper_shingle_slab", 6, [
      [
        "item:create:oxidized_copper_shingles",
        "item:create:oxidized_copper_shingles",
        "item:create:oxidized_copper_shingles",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:oxidized_copper_shingle_stairs", "item:create:oxidized_copper_shingle_stairs", 4, [
      ["item:create:oxidized_copper_shingles", "", ""],
      ["item:create:oxidized_copper_shingles", "item:create:oxidized_copper_shingles", ""],
      [
        "item:create:oxidized_copper_shingles",
        "item:create:oxidized_copper_shingles",
        "item:create:oxidized_copper_shingles",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:oxidized_copper_tile_slab", "item:create:oxidized_copper_tile_slab", 6, [
      ["item:create:oxidized_copper_tiles", "item:create:oxidized_copper_tiles", "item:create:oxidized_copper_tiles"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:oxidized_copper_tile_stairs", "item:create:oxidized_copper_tile_stairs", 4, [
      ["item:create:oxidized_copper_tiles", "", ""],
      ["item:create:oxidized_copper_tiles", "item:create:oxidized_copper_tiles", ""],
      ["item:create:oxidized_copper_tiles", "item:create:oxidized_copper_tiles", "item:create:oxidized_copper_tiles"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:oxidized_cut_copper", "item:minecraft:oxidized_cut_copper", 4, [
      ["item:minecraft:oxidized_copper", "item:minecraft:oxidized_copper"],
      ["item:minecraft:oxidized_copper", "item:minecraft:oxidized_copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:oxidized_cut_copper_slab", "item:minecraft:oxidized_cut_copper_slab", 6, [
      [
        "item:minecraft:oxidized_cut_copper",
        "item:minecraft:oxidized_cut_copper",
        "item:minecraft:oxidized_cut_copper",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:oxidized_cut_copper_stairs", "item:minecraft:oxidized_cut_copper_stairs", 4, [
      ["item:minecraft:oxidized_cut_copper", "", ""],
      ["item:minecraft:oxidized_cut_copper", "item:minecraft:oxidized_cut_copper", ""],
      [
        "item:minecraft:oxidized_cut_copper",
        "item:minecraft:oxidized_cut_copper",
        "item:minecraft:oxidized_cut_copper",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:painting", "item:minecraft:painting", 1, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "tag:items:minecraft:wool", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:painting_from_canvas", "item:minecraft:painting", 1, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:farmersdelight:canvas", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:paper", "item:minecraft:paper", 3, [
      ["item:minecraft:sugar_cane", "item:minecraft:sugar_cane", "item:minecraft:sugar_cane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:pie_crust", "item:farmersdelight:pie_crust", 1, [
      ["item:minecraft:wheat", "tag:items:c:milk", "item:minecraft:wheat"],
      ["", "item:minecraft:wheat", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:pink_banner", "item:minecraft:pink_banner", 1, [
      ["item:minecraft:pink_wool", "item:minecraft:pink_wool", "item:minecraft:pink_wool"],
      ["item:minecraft:pink_wool", "item:minecraft:pink_wool", "item:minecraft:pink_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:pink_bed", "item:minecraft:pink_bed", 1, [
      ["item:minecraft:pink_wool", "item:minecraft:pink_wool", "item:minecraft:pink_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:pink_carpet", "item:minecraft:pink_carpet", 3, [
      ["item:minecraft:pink_wool", "item:minecraft:pink_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:pink_carpet_from_white_carpet", "item:minecraft:pink_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:pink_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:pink_curtain", "item:mcwwindows:pink_curtain", 3, [
      ["item:minecraft:pink_wool"],
      ["item:minecraft:pink_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:pink_mosaic_glass", "item:mcwwindows:pink_mosaic_glass", 8, [
      ["item:minecraft:pink_stained_glass", "item:minecraft:pink_stained_glass", "item:minecraft:pink_stained_glass"],
      ["item:minecraft:pink_stained_glass", "item:minecraft:pink_dye", "item:minecraft:pink_stained_glass"],
      ["item:minecraft:pink_stained_glass", "item:minecraft:pink_stained_glass", "item:minecraft:pink_stained_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:pink_mosaic_glass_pane", "item:mcwwindows:pink_mosaic_glass_pane", 16, [
      ["item:mcwwindows:pink_mosaic_glass", "item:mcwwindows:pink_mosaic_glass", "item:mcwwindows:pink_mosaic_glass"],
      ["item:mcwwindows:pink_mosaic_glass", "item:mcwwindows:pink_mosaic_glass", "item:mcwwindows:pink_mosaic_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:pink_stained_glass", "item:minecraft:pink_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:pink_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:pink_stained_glass_pane", "item:minecraft:pink_stained_glass_pane", 16, [
      ["item:minecraft:pink_stained_glass", "item:minecraft:pink_stained_glass", "item:minecraft:pink_stained_glass"],
      ["item:minecraft:pink_stained_glass", "item:minecraft:pink_stained_glass", "item:minecraft:pink_stained_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:pink_stained_glass_pane_from_glass_pane",
      "item:minecraft:pink_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:pink_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:pink_striped_awning", "item:mcwroofs:pink_striped_awning", 1, [
      ["item:minecraft:pink_carpet", "item:minecraft:white_carpet", "item:minecraft:pink_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:pink_terracotta", "item:minecraft:pink_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:pink_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:piston", "item:minecraft:piston", 1, [
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["item:minecraft:cobblestone", "item:minecraft:iron_ingot", "item:minecraft:cobblestone"],
      ["item:minecraft:cobblestone", "item:minecraft:redstone", "item:minecraft:cobblestone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:pliers", "item:mcwbridges:pliers", 1, [
      ["", "item:minecraft:iron_nugget", ""],
      ["item:minecraft:iron_ingot", "item:minecraft:iron_nugget", "item:minecraft:iron_nugget"],
      ["", "item:minecraft:iron_ingot", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "computercraft:pocket_computer_advanced",
      "item:computercraft:pocket_computer_advanced",
      1,
      [
        ["tag:items:c:gold_ingots", "tag:items:c:gold_ingots", "tag:items:c:gold_ingots"],
        ["tag:items:c:gold_ingots", "item:minecraft:golden_apple", "tag:items:c:gold_ingots"],
        ["tag:items:c:gold_ingots", "tag:items:c:glass_panes", "tag:items:c:gold_ingots"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:pocket_computer_normal", "item:computercraft:pocket_computer_normal", 1, [
      ["tag:items:c:stones", "tag:items:c:stones", "tag:items:c:stones"],
      ["tag:items:c:stones", "item:minecraft:golden_apple", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:glass_panes", "tag:items:c:stones"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_andesite", "item:minecraft:polished_andesite", 4, [
      ["item:minecraft:andesite", "item:minecraft:andesite"],
      ["item:minecraft:andesite", "item:minecraft:andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_andesite_slab", "item:minecraft:polished_andesite_slab", 6, [
      ["item:minecraft:polished_andesite", "item:minecraft:polished_andesite", "item:minecraft:polished_andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_andesite_stairs", "item:minecraft:polished_andesite_stairs", 4, [
      ["item:minecraft:polished_andesite", "", ""],
      ["item:minecraft:polished_andesite", "item:minecraft:polished_andesite", ""],
      ["item:minecraft:polished_andesite", "item:minecraft:polished_andesite", "item:minecraft:polished_andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_basalt", "item:minecraft:polished_basalt", 4, [
      ["item:minecraft:basalt", "item:minecraft:basalt"],
      ["item:minecraft:basalt", "item:minecraft:basalt"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_blackstone", "item:minecraft:polished_blackstone", 4, [
      ["item:minecraft:blackstone", "item:minecraft:blackstone"],
      ["item:minecraft:blackstone", "item:minecraft:blackstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:polished_blackstone_brick_slab",
      "item:minecraft:polished_blackstone_brick_slab",
      6,
      [
        [
          "item:minecraft:polished_blackstone_bricks",
          "item:minecraft:polished_blackstone_bricks",
          "item:minecraft:polished_blackstone_bricks",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:polished_blackstone_brick_stairs",
      "item:minecraft:polished_blackstone_brick_stairs",
      4,
      [
        ["item:minecraft:polished_blackstone_bricks", "", ""],
        ["item:minecraft:polished_blackstone_bricks", "item:minecraft:polished_blackstone_bricks", ""],
        [
          "item:minecraft:polished_blackstone_bricks",
          "item:minecraft:polished_blackstone_bricks",
          "item:minecraft:polished_blackstone_bricks",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:polished_blackstone_brick_wall",
      "item:minecraft:polished_blackstone_brick_wall",
      6,
      [
        [
          "item:minecraft:polished_blackstone_bricks",
          "item:minecraft:polished_blackstone_bricks",
          "item:minecraft:polished_blackstone_bricks",
        ],
        [
          "item:minecraft:polished_blackstone_bricks",
          "item:minecraft:polished_blackstone_bricks",
          "item:minecraft:polished_blackstone_bricks",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_blackstone_bricks", "item:minecraft:polished_blackstone_bricks", 4, [
      ["item:minecraft:polished_blackstone", "item:minecraft:polished_blackstone"],
      ["item:minecraft:polished_blackstone", "item:minecraft:polished_blackstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:polished_blackstone_pressure_plate",
      "item:minecraft:polished_blackstone_pressure_plate",
      1,
      [["item:minecraft:polished_blackstone", "item:minecraft:polished_blackstone"]]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_blackstone_slab", "item:minecraft:polished_blackstone_slab", 6, [
      [
        "item:minecraft:polished_blackstone",
        "item:minecraft:polished_blackstone",
        "item:minecraft:polished_blackstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_blackstone_stairs", "item:minecraft:polished_blackstone_stairs", 4, [
      ["item:minecraft:polished_blackstone", "", ""],
      ["item:minecraft:polished_blackstone", "item:minecraft:polished_blackstone", ""],
      [
        "item:minecraft:polished_blackstone",
        "item:minecraft:polished_blackstone",
        "item:minecraft:polished_blackstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_blackstone_wall", "item:minecraft:polished_blackstone_wall", 6, [
      [
        "item:minecraft:polished_blackstone",
        "item:minecraft:polished_blackstone",
        "item:minecraft:polished_blackstone",
      ],
      [
        "item:minecraft:polished_blackstone",
        "item:minecraft:polished_blackstone",
        "item:minecraft:polished_blackstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_andesite_slab", "item:create:polished_cut_andesite_slab", 6, [
      ["item:create:polished_cut_andesite", "item:create:polished_cut_andesite", "item:create:polished_cut_andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_andesite_stairs", "item:create:polished_cut_andesite_stairs", 4, [
      ["item:create:polished_cut_andesite", "", ""],
      ["item:create:polished_cut_andesite", "item:create:polished_cut_andesite", ""],
      ["item:create:polished_cut_andesite", "item:create:polished_cut_andesite", "item:create:polished_cut_andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_andesite_wall", "item:create:polished_cut_andesite_wall", 6, [
      ["item:create:polished_cut_andesite", "item:create:polished_cut_andesite", "item:create:polished_cut_andesite"],
      ["item:create:polished_cut_andesite", "item:create:polished_cut_andesite", "item:create:polished_cut_andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_asurine_slab", "item:create:polished_cut_asurine_slab", 6, [
      ["item:create:polished_cut_asurine", "item:create:polished_cut_asurine", "item:create:polished_cut_asurine"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_asurine_stairs", "item:create:polished_cut_asurine_stairs", 4, [
      ["item:create:polished_cut_asurine", "", ""],
      ["item:create:polished_cut_asurine", "item:create:polished_cut_asurine", ""],
      ["item:create:polished_cut_asurine", "item:create:polished_cut_asurine", "item:create:polished_cut_asurine"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_asurine_wall", "item:create:polished_cut_asurine_wall", 6, [
      ["item:create:polished_cut_asurine", "item:create:polished_cut_asurine", "item:create:polished_cut_asurine"],
      ["item:create:polished_cut_asurine", "item:create:polished_cut_asurine", "item:create:polished_cut_asurine"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_calcite_slab", "item:create:polished_cut_calcite_slab", 6, [
      ["item:create:polished_cut_calcite", "item:create:polished_cut_calcite", "item:create:polished_cut_calcite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_calcite_stairs", "item:create:polished_cut_calcite_stairs", 4, [
      ["item:create:polished_cut_calcite", "", ""],
      ["item:create:polished_cut_calcite", "item:create:polished_cut_calcite", ""],
      ["item:create:polished_cut_calcite", "item:create:polished_cut_calcite", "item:create:polished_cut_calcite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_calcite_wall", "item:create:polished_cut_calcite_wall", 6, [
      ["item:create:polished_cut_calcite", "item:create:polished_cut_calcite", "item:create:polished_cut_calcite"],
      ["item:create:polished_cut_calcite", "item:create:polished_cut_calcite", "item:create:polished_cut_calcite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_crimsite_slab", "item:create:polished_cut_crimsite_slab", 6, [
      ["item:create:polished_cut_crimsite", "item:create:polished_cut_crimsite", "item:create:polished_cut_crimsite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_crimsite_stairs", "item:create:polished_cut_crimsite_stairs", 4, [
      ["item:create:polished_cut_crimsite", "", ""],
      ["item:create:polished_cut_crimsite", "item:create:polished_cut_crimsite", ""],
      ["item:create:polished_cut_crimsite", "item:create:polished_cut_crimsite", "item:create:polished_cut_crimsite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_crimsite_wall", "item:create:polished_cut_crimsite_wall", 6, [
      ["item:create:polished_cut_crimsite", "item:create:polished_cut_crimsite", "item:create:polished_cut_crimsite"],
      ["item:create:polished_cut_crimsite", "item:create:polished_cut_crimsite", "item:create:polished_cut_crimsite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_deepslate_slab", "item:create:polished_cut_deepslate_slab", 6, [
      [
        "item:create:polished_cut_deepslate",
        "item:create:polished_cut_deepslate",
        "item:create:polished_cut_deepslate",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_deepslate_stairs", "item:create:polished_cut_deepslate_stairs", 4, [
      ["item:create:polished_cut_deepslate", "", ""],
      ["item:create:polished_cut_deepslate", "item:create:polished_cut_deepslate", ""],
      [
        "item:create:polished_cut_deepslate",
        "item:create:polished_cut_deepslate",
        "item:create:polished_cut_deepslate",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_deepslate_wall", "item:create:polished_cut_deepslate_wall", 6, [
      [
        "item:create:polished_cut_deepslate",
        "item:create:polished_cut_deepslate",
        "item:create:polished_cut_deepslate",
      ],
      [
        "item:create:polished_cut_deepslate",
        "item:create:polished_cut_deepslate",
        "item:create:polished_cut_deepslate",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_diorite_slab", "item:create:polished_cut_diorite_slab", 6, [
      ["item:create:polished_cut_diorite", "item:create:polished_cut_diorite", "item:create:polished_cut_diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_diorite_stairs", "item:create:polished_cut_diorite_stairs", 4, [
      ["item:create:polished_cut_diorite", "", ""],
      ["item:create:polished_cut_diorite", "item:create:polished_cut_diorite", ""],
      ["item:create:polished_cut_diorite", "item:create:polished_cut_diorite", "item:create:polished_cut_diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_diorite_wall", "item:create:polished_cut_diorite_wall", 6, [
      ["item:create:polished_cut_diorite", "item:create:polished_cut_diorite", "item:create:polished_cut_diorite"],
      ["item:create:polished_cut_diorite", "item:create:polished_cut_diorite", "item:create:polished_cut_diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_dripstone_slab", "item:create:polished_cut_dripstone_slab", 6, [
      [
        "item:create:polished_cut_dripstone",
        "item:create:polished_cut_dripstone",
        "item:create:polished_cut_dripstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_dripstone_stairs", "item:create:polished_cut_dripstone_stairs", 4, [
      ["item:create:polished_cut_dripstone", "", ""],
      ["item:create:polished_cut_dripstone", "item:create:polished_cut_dripstone", ""],
      [
        "item:create:polished_cut_dripstone",
        "item:create:polished_cut_dripstone",
        "item:create:polished_cut_dripstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_dripstone_wall", "item:create:polished_cut_dripstone_wall", 6, [
      [
        "item:create:polished_cut_dripstone",
        "item:create:polished_cut_dripstone",
        "item:create:polished_cut_dripstone",
      ],
      [
        "item:create:polished_cut_dripstone",
        "item:create:polished_cut_dripstone",
        "item:create:polished_cut_dripstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_granite_slab", "item:create:polished_cut_granite_slab", 6, [
      ["item:create:polished_cut_granite", "item:create:polished_cut_granite", "item:create:polished_cut_granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_granite_stairs", "item:create:polished_cut_granite_stairs", 4, [
      ["item:create:polished_cut_granite", "", ""],
      ["item:create:polished_cut_granite", "item:create:polished_cut_granite", ""],
      ["item:create:polished_cut_granite", "item:create:polished_cut_granite", "item:create:polished_cut_granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_granite_wall", "item:create:polished_cut_granite_wall", 6, [
      ["item:create:polished_cut_granite", "item:create:polished_cut_granite", "item:create:polished_cut_granite"],
      ["item:create:polished_cut_granite", "item:create:polished_cut_granite", "item:create:polished_cut_granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_limestone_slab", "item:create:polished_cut_limestone_slab", 6, [
      [
        "item:create:polished_cut_limestone",
        "item:create:polished_cut_limestone",
        "item:create:polished_cut_limestone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_limestone_stairs", "item:create:polished_cut_limestone_stairs", 4, [
      ["item:create:polished_cut_limestone", "", ""],
      ["item:create:polished_cut_limestone", "item:create:polished_cut_limestone", ""],
      [
        "item:create:polished_cut_limestone",
        "item:create:polished_cut_limestone",
        "item:create:polished_cut_limestone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_limestone_wall", "item:create:polished_cut_limestone_wall", 6, [
      [
        "item:create:polished_cut_limestone",
        "item:create:polished_cut_limestone",
        "item:create:polished_cut_limestone",
      ],
      [
        "item:create:polished_cut_limestone",
        "item:create:polished_cut_limestone",
        "item:create:polished_cut_limestone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_ochrum_slab", "item:create:polished_cut_ochrum_slab", 6, [
      ["item:create:polished_cut_ochrum", "item:create:polished_cut_ochrum", "item:create:polished_cut_ochrum"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_ochrum_stairs", "item:create:polished_cut_ochrum_stairs", 4, [
      ["item:create:polished_cut_ochrum", "", ""],
      ["item:create:polished_cut_ochrum", "item:create:polished_cut_ochrum", ""],
      ["item:create:polished_cut_ochrum", "item:create:polished_cut_ochrum", "item:create:polished_cut_ochrum"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_ochrum_wall", "item:create:polished_cut_ochrum_wall", 6, [
      ["item:create:polished_cut_ochrum", "item:create:polished_cut_ochrum", "item:create:polished_cut_ochrum"],
      ["item:create:polished_cut_ochrum", "item:create:polished_cut_ochrum", "item:create:polished_cut_ochrum"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_scorchia_slab", "item:create:polished_cut_scorchia_slab", 6, [
      ["item:create:polished_cut_scorchia", "item:create:polished_cut_scorchia", "item:create:polished_cut_scorchia"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_scorchia_stairs", "item:create:polished_cut_scorchia_stairs", 4, [
      ["item:create:polished_cut_scorchia", "", ""],
      ["item:create:polished_cut_scorchia", "item:create:polished_cut_scorchia", ""],
      ["item:create:polished_cut_scorchia", "item:create:polished_cut_scorchia", "item:create:polished_cut_scorchia"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_scorchia_wall", "item:create:polished_cut_scorchia_wall", 6, [
      ["item:create:polished_cut_scorchia", "item:create:polished_cut_scorchia", "item:create:polished_cut_scorchia"],
      ["item:create:polished_cut_scorchia", "item:create:polished_cut_scorchia", "item:create:polished_cut_scorchia"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_scoria_slab", "item:create:polished_cut_scoria_slab", 6, [
      ["item:create:polished_cut_scoria", "item:create:polished_cut_scoria", "item:create:polished_cut_scoria"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_scoria_stairs", "item:create:polished_cut_scoria_stairs", 4, [
      ["item:create:polished_cut_scoria", "", ""],
      ["item:create:polished_cut_scoria", "item:create:polished_cut_scoria", ""],
      ["item:create:polished_cut_scoria", "item:create:polished_cut_scoria", "item:create:polished_cut_scoria"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_scoria_wall", "item:create:polished_cut_scoria_wall", 6, [
      ["item:create:polished_cut_scoria", "item:create:polished_cut_scoria", "item:create:polished_cut_scoria"],
      ["item:create:polished_cut_scoria", "item:create:polished_cut_scoria", "item:create:polished_cut_scoria"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_tuff_slab", "item:create:polished_cut_tuff_slab", 6, [
      ["item:create:polished_cut_tuff", "item:create:polished_cut_tuff", "item:create:polished_cut_tuff"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_tuff_stairs", "item:create:polished_cut_tuff_stairs", 4, [
      ["item:create:polished_cut_tuff", "", ""],
      ["item:create:polished_cut_tuff", "item:create:polished_cut_tuff", ""],
      ["item:create:polished_cut_tuff", "item:create:polished_cut_tuff", "item:create:polished_cut_tuff"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_tuff_wall", "item:create:polished_cut_tuff_wall", 6, [
      ["item:create:polished_cut_tuff", "item:create:polished_cut_tuff", "item:create:polished_cut_tuff"],
      ["item:create:polished_cut_tuff", "item:create:polished_cut_tuff", "item:create:polished_cut_tuff"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_veridium_slab", "item:create:polished_cut_veridium_slab", 6, [
      ["item:create:polished_cut_veridium", "item:create:polished_cut_veridium", "item:create:polished_cut_veridium"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_veridium_stairs", "item:create:polished_cut_veridium_stairs", 4, [
      ["item:create:polished_cut_veridium", "", ""],
      ["item:create:polished_cut_veridium", "item:create:polished_cut_veridium", ""],
      ["item:create:polished_cut_veridium", "item:create:polished_cut_veridium", "item:create:polished_cut_veridium"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:polished_cut_veridium_wall", "item:create:polished_cut_veridium_wall", 6, [
      ["item:create:polished_cut_veridium", "item:create:polished_cut_veridium", "item:create:polished_cut_veridium"],
      ["item:create:polished_cut_veridium", "item:create:polished_cut_veridium", "item:create:polished_cut_veridium"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_deepslate", "item:minecraft:polished_deepslate", 4, [
      ["item:minecraft:cobbled_deepslate", "item:minecraft:cobbled_deepslate"],
      ["item:minecraft:cobbled_deepslate", "item:minecraft:cobbled_deepslate"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_deepslate_slab", "item:minecraft:polished_deepslate_slab", 6, [
      ["item:minecraft:polished_deepslate", "item:minecraft:polished_deepslate", "item:minecraft:polished_deepslate"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_deepslate_stairs", "item:minecraft:polished_deepslate_stairs", 4, [
      ["item:minecraft:polished_deepslate", "", ""],
      ["item:minecraft:polished_deepslate", "item:minecraft:polished_deepslate", ""],
      ["item:minecraft:polished_deepslate", "item:minecraft:polished_deepslate", "item:minecraft:polished_deepslate"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_deepslate_wall", "item:minecraft:polished_deepslate_wall", 6, [
      ["item:minecraft:polished_deepslate", "item:minecraft:polished_deepslate", "item:minecraft:polished_deepslate"],
      ["item:minecraft:polished_deepslate", "item:minecraft:polished_deepslate", "item:minecraft:polished_deepslate"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_diorite", "item:minecraft:polished_diorite", 4, [
      ["item:minecraft:diorite", "item:minecraft:diorite"],
      ["item:minecraft:diorite", "item:minecraft:diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_diorite_slab", "item:minecraft:polished_diorite_slab", 6, [
      ["item:minecraft:polished_diorite", "item:minecraft:polished_diorite", "item:minecraft:polished_diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_diorite_stairs", "item:minecraft:polished_diorite_stairs", 4, [
      ["item:minecraft:polished_diorite", "", ""],
      ["item:minecraft:polished_diorite", "item:minecraft:polished_diorite", ""],
      ["item:minecraft:polished_diorite", "item:minecraft:polished_diorite", "item:minecraft:polished_diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_granite", "item:minecraft:polished_granite", 4, [
      ["item:minecraft:granite", "item:minecraft:granite"],
      ["item:minecraft:granite", "item:minecraft:granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_granite_slab", "item:minecraft:polished_granite_slab", 6, [
      ["item:minecraft:polished_granite", "item:minecraft:polished_granite", "item:minecraft:polished_granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:polished_granite_stairs", "item:minecraft:polished_granite_stairs", 4, [
      ["item:minecraft:polished_granite", "", ""],
      ["item:minecraft:polished_granite", "item:minecraft:polished_granite", ""],
      ["item:minecraft:polished_granite", "item:minecraft:polished_granite", "item:minecraft:polished_granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:potato_crate", "item:farmersdelight:potato_crate", 1, [
      ["item:minecraft:potato", "item:minecraft:potato", "item:minecraft:potato"],
      ["item:minecraft:potato", "item:minecraft:potato", "item:minecraft:potato"],
      ["item:minecraft:potato", "item:minecraft:potato", "item:minecraft:potato"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:powered_rail", "item:minecraft:powered_rail", 6, [
      ["item:minecraft:gold_ingot", "", "item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot", "item:minecraft:stick", "item:minecraft:gold_ingot"],
      ["item:minecraft:gold_ingot", "item:minecraft:redstone", "item:minecraft:gold_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:print_acacia", "item:mcwdoors:print_acacia", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:acacia_door", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:print_bamboo", "item:mcwtrpdoors:print_bamboo", 4, [
      ["", "item:minecraft:bamboo", ""],
      ["item:minecraft:bamboo", "item:minecraft:paper", "item:minecraft:bamboo"],
      ["", "item:minecraft:bamboo", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:print_barred", "item:mcwtrpdoors:print_barred", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:crimson_trapdoor", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:print_beach", "item:mcwtrpdoors:print_beach", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:jungle_trapdoor", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:print_birch", "item:mcwdoors:print_birch", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:birch_door", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:print_classic", "item:mcwtrpdoors:print_classic", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:oak_trapdoor", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:print_cottage", "item:mcwtrpdoors:print_cottage", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:spruce_trapdoor", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:print_dark_oak", "item:mcwdoors:print_dark_oak", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:dark_oak_door", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:print_four_panel", "item:mcwtrpdoors:print_four_panel", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:dark_oak_trapdoor", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:print_jungle", "item:mcwdoors:print_jungle", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:jungle_door", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:print_mystic", "item:mcwdoors:print_mystic", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:warped_door", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:print_mystic", "item:mcwtrpdoors:print_mystic", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:warped_trapdoor", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:print_nether", "item:mcwdoors:print_nether", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:crimson_door", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:print_oak", "item:mcwdoors:print_oak", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:oak_door", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:print_paper", "item:mcwtrpdoors:print_paper", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:birch_trapdoor", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:print_spruce", "item:mcwdoors:print_spruce", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:spruce_door", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:print_swamp", "item:mcwtrpdoors:print_swamp", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:vine", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:print_tropical", "item:mcwtrpdoors:print_tropical", 4, [
      ["", "item:minecraft:paper", ""],
      ["item:minecraft:paper", "item:minecraft:acacia_trapdoor", "item:minecraft:paper"],
      ["", "item:minecraft:paper", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:printer", "item:computercraft:printer", 1, [
      ["tag:items:c:stones", "tag:items:c:stones", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:redstone_dusts", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:dyes", "tag:items:c:stones"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:prismarine", "item:minecraft:prismarine", 1, [
      ["item:minecraft:prismarine_shard", "item:minecraft:prismarine_shard"],
      ["item:minecraft:prismarine_shard", "item:minecraft:prismarine_shard"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:prismarine_brick_arrow_slit",
      "item:mcwwindows:prismarine_brick_arrow_slit",
      3,
      [
        ["item:minecraft:prismarine_bricks", "item:minecraft:prismarine_bricks"],
        ["item:minecraft:prismarine_brick_slab", "item:minecraft:prismarine_brick_slab"],
        ["item:minecraft:prismarine_bricks", "item:minecraft:prismarine_bricks"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:prismarine_brick_gothic", "item:mcwwindows:prismarine_brick_gothic", 4, [
      ["", "item:minecraft:prismarine_bricks", ""],
      ["item:minecraft:prismarine_bricks", "item:minecraft:glass_pane", "item:minecraft:prismarine_bricks"],
      ["", "item:minecraft:prismarine_bricks", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:prismarine_brick_slab", "item:minecraft:prismarine_brick_slab", 6, [
      ["item:minecraft:prismarine_bricks", "item:minecraft:prismarine_bricks", "item:minecraft:prismarine_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:prismarine_brick_stairs", "item:minecraft:prismarine_brick_stairs", 4, [
      ["item:minecraft:prismarine_bricks", "", ""],
      ["item:minecraft:prismarine_bricks", "item:minecraft:prismarine_bricks", ""],
      ["item:minecraft:prismarine_bricks", "item:minecraft:prismarine_bricks", "item:minecraft:prismarine_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:prismarine_bricks", "item:minecraft:prismarine_bricks", 1, [
      ["item:minecraft:prismarine_shard", "item:minecraft:prismarine_shard", "item:minecraft:prismarine_shard"],
      ["item:minecraft:prismarine_shard", "item:minecraft:prismarine_shard", "item:minecraft:prismarine_shard"],
      ["item:minecraft:prismarine_shard", "item:minecraft:prismarine_shard", "item:minecraft:prismarine_shard"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:prismarine_four_window", "item:mcwwindows:prismarine_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:prismarine_bricks", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:prismarine_parapet", "item:mcwwindows:prismarine_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:prismarine_bricks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:prismarine_railing_gate", "item:mcwfences:prismarine_railing_gate", 1, [
      ["item:minecraft:iron_bars", "item:minecraft:prismarine", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:prismarine", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:prismarine_slab", "item:minecraft:prismarine_slab", 6, [
      ["item:minecraft:prismarine", "item:minecraft:prismarine", "item:minecraft:prismarine"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:prismarine_stairs", "item:minecraft:prismarine_stairs", 4, [
      ["item:minecraft:prismarine", "", ""],
      ["item:minecraft:prismarine", "item:minecraft:prismarine", ""],
      ["item:minecraft:prismarine", "item:minecraft:prismarine", "item:minecraft:prismarine"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:prismarine_wall", "item:minecraft:prismarine_wall", 6, [
      ["item:minecraft:prismarine", "item:minecraft:prismarine", "item:minecraft:prismarine"],
      ["item:minecraft:prismarine", "item:minecraft:prismarine", "item:minecraft:prismarine"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:prismarine_window", "item:mcwwindows:prismarine_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:prismarine_bricks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:prismarine_window2", "item:mcwwindows:prismarine_window2", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:prismarine_bricks", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:pumpkin_from_slices", "item:minecraft:pumpkin", 1, [
      ["item:farmersdelight:pumpkin_slice", "item:farmersdelight:pumpkin_slice"],
      ["item:farmersdelight:pumpkin_slice", "item:farmersdelight:pumpkin_slice"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:purple_banner", "item:minecraft:purple_banner", 1, [
      ["item:minecraft:purple_wool", "item:minecraft:purple_wool", "item:minecraft:purple_wool"],
      ["item:minecraft:purple_wool", "item:minecraft:purple_wool", "item:minecraft:purple_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:purple_bed", "item:minecraft:purple_bed", 1, [
      ["item:minecraft:purple_wool", "item:minecraft:purple_wool", "item:minecraft:purple_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:purple_carpet", "item:minecraft:purple_carpet", 3, [
      ["item:minecraft:purple_wool", "item:minecraft:purple_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:purple_carpet_from_white_carpet", "item:minecraft:purple_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:purple_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:purple_curtain", "item:mcwwindows:purple_curtain", 3, [
      ["item:minecraft:purple_wool"],
      ["item:minecraft:purple_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:purple_mosaic_glass", "item:mcwwindows:purple_mosaic_glass", 8, [
      [
        "item:minecraft:purple_stained_glass",
        "item:minecraft:purple_stained_glass",
        "item:minecraft:purple_stained_glass",
      ],
      ["item:minecraft:purple_stained_glass", "item:minecraft:purple_dye", "item:minecraft:purple_stained_glass"],
      [
        "item:minecraft:purple_stained_glass",
        "item:minecraft:purple_stained_glass",
        "item:minecraft:purple_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:purple_mosaic_glass_pane", "item:mcwwindows:purple_mosaic_glass_pane", 16, [
      [
        "item:mcwwindows:purple_mosaic_glass",
        "item:mcwwindows:purple_mosaic_glass",
        "item:mcwwindows:purple_mosaic_glass",
      ],
      [
        "item:mcwwindows:purple_mosaic_glass",
        "item:mcwwindows:purple_mosaic_glass",
        "item:mcwwindows:purple_mosaic_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:purple_stained_glass", "item:minecraft:purple_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:purple_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:purple_stained_glass_pane", "item:minecraft:purple_stained_glass_pane", 16, [
      [
        "item:minecraft:purple_stained_glass",
        "item:minecraft:purple_stained_glass",
        "item:minecraft:purple_stained_glass",
      ],
      [
        "item:minecraft:purple_stained_glass",
        "item:minecraft:purple_stained_glass",
        "item:minecraft:purple_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:purple_stained_glass_pane_from_glass_pane",
      "item:minecraft:purple_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:purple_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:purple_striped_awning", "item:mcwroofs:purple_striped_awning", 1, [
      ["item:minecraft:purple_carpet", "item:minecraft:white_carpet", "item:minecraft:purple_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:purple_terracotta", "item:minecraft:purple_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:purple_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:purpur_block", "item:minecraft:purpur_block", 4, [
      ["item:minecraft:popped_chorus_fruit", "item:minecraft:popped_chorus_fruit"],
      ["item:minecraft:popped_chorus_fruit", "item:minecraft:popped_chorus_fruit"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:purpur_pillar", "item:minecraft:purpur_pillar", 1, [
      ["item:minecraft:purpur_slab"],
      ["item:minecraft:purpur_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:purpur_slab", "item:minecraft:purpur_slab", 6, [
      [
        "item:minecraft:purpur_block|item:minecraft:purpur_pillar",
        "item:minecraft:purpur_block|item:minecraft:purpur_pillar",
        "item:minecraft:purpur_block|item:minecraft:purpur_pillar",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:purpur_stairs", "item:minecraft:purpur_stairs", 4, [
      ["item:minecraft:purpur_block|item:minecraft:purpur_pillar", "", ""],
      [
        "item:minecraft:purpur_block|item:minecraft:purpur_pillar",
        "item:minecraft:purpur_block|item:minecraft:purpur_pillar",
        "",
      ],
      [
        "item:minecraft:purpur_block|item:minecraft:purpur_pillar",
        "item:minecraft:purpur_block|item:minecraft:purpur_pillar",
        "item:minecraft:purpur_block|item:minecraft:purpur_pillar",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:quartz_block", "item:minecraft:quartz_block", 1, [
      ["item:minecraft:quartz", "item:minecraft:quartz"],
      ["item:minecraft:quartz", "item:minecraft:quartz"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:quartz_bricks", "item:minecraft:quartz_bricks", 4, [
      ["item:minecraft:quartz_block", "item:minecraft:quartz_block"],
      ["item:minecraft:quartz_block", "item:minecraft:quartz_block"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:quartz_pillar", "item:minecraft:quartz_pillar", 2, [
      ["item:minecraft:quartz_block"],
      ["item:minecraft:quartz_block"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:quartz_railing_gate", "item:mcwfences:quartz_railing_gate", 1, [
      ["item:minecraft:iron_bars", "item:minecraft:quartz_block", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:quartz_block", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:quartz_slab", "item:minecraft:quartz_slab", 6, [
      [
        "item:minecraft:chiseled_quartz_block|item:minecraft:quartz_block|item:minecraft:quartz_pillar",
        "item:minecraft:chiseled_quartz_block|item:minecraft:quartz_block|item:minecraft:quartz_pillar",
        "item:minecraft:chiseled_quartz_block|item:minecraft:quartz_block|item:minecraft:quartz_pillar",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:quartz_stairs", "item:minecraft:quartz_stairs", 4, [
      ["item:minecraft:chiseled_quartz_block|item:minecraft:quartz_block|item:minecraft:quartz_pillar", "", ""],
      [
        "item:minecraft:chiseled_quartz_block|item:minecraft:quartz_block|item:minecraft:quartz_pillar",
        "item:minecraft:chiseled_quartz_block|item:minecraft:quartz_block|item:minecraft:quartz_pillar",
        "",
      ],
      [
        "item:minecraft:chiseled_quartz_block|item:minecraft:quartz_block|item:minecraft:quartz_pillar",
        "item:minecraft:chiseled_quartz_block|item:minecraft:quartz_block|item:minecraft:quartz_pillar",
        "item:minecraft:chiseled_quartz_block|item:minecraft:quartz_block|item:minecraft:quartz_pillar",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:rail", "item:minecraft:rail", 16, [
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "item:minecraft:stick", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", "", "item:minecraft:iron_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:railing_andesite_wall", "item:mcwfences:railing_andesite_wall", 6, [
      ["item:minecraft:polished_andesite", "item:minecraft:iron_bars", "item:minecraft:polished_andesite"],
      ["item:minecraft:polished_andesite", "item:minecraft:polished_andesite", "item:minecraft:polished_andesite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:railing_blackstone_wall", "item:mcwfences:railing_blackstone_wall", 6, [
      [
        "item:minecraft:polished_blackstone_bricks",
        "item:minecraft:iron_bars",
        "item:minecraft:polished_blackstone_bricks",
      ],
      [
        "item:minecraft:polished_blackstone_bricks",
        "item:minecraft:polished_blackstone_bricks",
        "item:minecraft:polished_blackstone_bricks",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwfences:railing_deepslate_brick_wall",
      "item:mcwfences:railing_deepslate_brick_wall",
      6,
      [
        ["item:minecraft:deepslate_bricks", "item:minecraft:iron_bars", "item:minecraft:deepslate_bricks"],
        ["item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks", "item:minecraft:deepslate_bricks"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:railing_deepslate_wall", "item:mcwfences:railing_deepslate_wall", 6, [
      ["item:minecraft:deepslate", "item:minecraft:iron_bars", "item:minecraft:deepslate"],
      ["item:minecraft:deepslate", "item:minecraft:deepslate", "item:minecraft:deepslate"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:railing_diorite_wall", "item:mcwfences:railing_diorite_wall", 6, [
      ["item:minecraft:polished_diorite", "item:minecraft:iron_bars", "item:minecraft:polished_diorite"],
      ["item:minecraft:polished_diorite", "item:minecraft:polished_diorite", "item:minecraft:polished_diorite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:railing_end_brick_wall", "item:mcwfences:railing_end_brick_wall", 6, [
      ["item:minecraft:end_stone_bricks", "item:minecraft:iron_bars", "item:minecraft:end_stone_bricks"],
      ["item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks", "item:minecraft:end_stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:railing_granite_wall", "item:mcwfences:railing_granite_wall", 6, [
      ["item:minecraft:polished_granite", "item:minecraft:iron_bars", "item:minecraft:polished_granite"],
      ["item:minecraft:polished_granite", "item:minecraft:polished_granite", "item:minecraft:polished_granite"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:railing_nether_brick_wall", "item:mcwfences:railing_nether_brick_wall", 6, [
      ["item:minecraft:nether_bricks", "item:minecraft:iron_bars", "item:minecraft:nether_bricks"],
      ["item:minecraft:nether_bricks", "item:minecraft:nether_bricks", "item:minecraft:nether_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:railing_prismarine_wall", "item:mcwfences:railing_prismarine_wall", 6, [
      ["item:minecraft:prismarine", "item:minecraft:iron_bars", "item:minecraft:prismarine"],
      ["item:minecraft:prismarine", "item:minecraft:prismarine", "item:minecraft:prismarine"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:railing_quartz_wall", "item:mcwfences:railing_quartz_wall", 6, [
      ["item:minecraft:quartz_block", "item:minecraft:iron_bars", "item:minecraft:quartz_block"],
      ["item:minecraft:quartz_block", "item:minecraft:quartz_block", "item:minecraft:quartz_block"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:railing_red_sandstone_wall", "item:mcwfences:railing_red_sandstone_wall", 6, [
      ["item:minecraft:smooth_red_sandstone", "item:minecraft:iron_bars", "item:minecraft:smooth_red_sandstone"],
      [
        "item:minecraft:smooth_red_sandstone",
        "item:minecraft:smooth_red_sandstone",
        "item:minecraft:smooth_red_sandstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:railing_sandstone_wall", "item:mcwfences:railing_sandstone_wall", 6, [
      ["item:minecraft:smooth_sandstone", "item:minecraft:iron_bars", "item:minecraft:smooth_sandstone"],
      ["item:minecraft:smooth_sandstone", "item:minecraft:smooth_sandstone", "item:minecraft:smooth_sandstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:railing_stone_brick_wall", "item:mcwfences:railing_stone_brick_wall", 6, [
      ["item:minecraft:stone_bricks", "item:minecraft:iron_bars", "item:minecraft:stone_bricks"],
      ["item:minecraft:stone_bricks", "item:minecraft:stone_bricks", "item:minecraft:stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:raw_copper_block", "item:minecraft:raw_copper_block", 1, [
      ["item:minecraft:raw_copper", "item:minecraft:raw_copper", "item:minecraft:raw_copper"],
      ["item:minecraft:raw_copper", "item:minecraft:raw_copper", "item:minecraft:raw_copper"],
      ["item:minecraft:raw_copper", "item:minecraft:raw_copper", "item:minecraft:raw_copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:raw_gold_block", "item:minecraft:raw_gold_block", 1, [
      ["item:minecraft:raw_gold", "item:minecraft:raw_gold", "item:minecraft:raw_gold"],
      ["item:minecraft:raw_gold", "item:minecraft:raw_gold", "item:minecraft:raw_gold"],
      ["item:minecraft:raw_gold", "item:minecraft:raw_gold", "item:minecraft:raw_gold"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:raw_iron_block", "item:minecraft:raw_iron_block", 1, [
      ["item:minecraft:raw_iron", "item:minecraft:raw_iron", "item:minecraft:raw_iron"],
      ["item:minecraft:raw_iron", "item:minecraft:raw_iron", "item:minecraft:raw_iron"],
      ["item:minecraft:raw_iron", "item:minecraft:raw_iron", "item:minecraft:raw_iron"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_banner", "item:minecraft:red_banner", 1, [
      ["item:minecraft:red_wool", "item:minecraft:red_wool", "item:minecraft:red_wool"],
      ["item:minecraft:red_wool", "item:minecraft:red_wool", "item:minecraft:red_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_bed", "item:minecraft:red_bed", 1, [
      ["item:minecraft:red_wool", "item:minecraft:red_wool", "item:minecraft:red_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_carpet", "item:minecraft:red_carpet", 3, [
      ["item:minecraft:red_wool", "item:minecraft:red_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_carpet_from_white_carpet", "item:minecraft:red_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:red_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:red_curtain", "item:mcwwindows:red_curtain", 3, [
      ["item:minecraft:red_wool"],
      ["item:minecraft:red_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:red_mosaic_glass", "item:mcwwindows:red_mosaic_glass", 8, [
      ["item:minecraft:red_stained_glass", "item:minecraft:red_stained_glass", "item:minecraft:red_stained_glass"],
      ["item:minecraft:red_stained_glass", "item:minecraft:red_dye", "item:minecraft:red_stained_glass"],
      ["item:minecraft:red_stained_glass", "item:minecraft:red_stained_glass", "item:minecraft:red_stained_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:red_mosaic_glass_pane", "item:mcwwindows:red_mosaic_glass_pane", 16, [
      ["item:mcwwindows:red_mosaic_glass", "item:mcwwindows:red_mosaic_glass", "item:mcwwindows:red_mosaic_glass"],
      ["item:mcwwindows:red_mosaic_glass", "item:mcwwindows:red_mosaic_glass", "item:mcwwindows:red_mosaic_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_nether_brick_slab", "item:minecraft:red_nether_brick_slab", 6, [
      ["item:minecraft:red_nether_bricks", "item:minecraft:red_nether_bricks", "item:minecraft:red_nether_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_nether_brick_stairs", "item:minecraft:red_nether_brick_stairs", 4, [
      ["item:minecraft:red_nether_bricks", "", ""],
      ["item:minecraft:red_nether_bricks", "item:minecraft:red_nether_bricks", ""],
      ["item:minecraft:red_nether_bricks", "item:minecraft:red_nether_bricks", "item:minecraft:red_nether_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_nether_brick_wall", "item:minecraft:red_nether_brick_wall", 6, [
      ["item:minecraft:red_nether_bricks", "item:minecraft:red_nether_bricks", "item:minecraft:red_nether_bricks"],
      ["item:minecraft:red_nether_bricks", "item:minecraft:red_nether_bricks", "item:minecraft:red_nether_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_nether_bricks", "item:minecraft:red_nether_bricks", 1, [
      ["item:minecraft:nether_brick", "item:minecraft:nether_wart"],
      ["item:minecraft:nether_wart", "item:minecraft:nether_brick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_sandstone", "item:minecraft:red_sandstone", 1, [
      ["item:minecraft:red_sand", "item:minecraft:red_sand"],
      ["item:minecraft:red_sand", "item:minecraft:red_sand"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:red_sandstone_bridge_pier", "item:mcwbridges:red_sandstone_bridge_pier", 3, [
      ["item:minecraft:red_sandstone", "item:minecraft:red_sandstone_wall", "item:minecraft:red_sandstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:red_sandstone_bridge_stair", "item:mcwbridges:red_sandstone_bridge_stair", 6, [
      ["", "", "item:mcwbridges:orange_sandstone_bridge"],
      ["", "item:mcwbridges:orange_sandstone_bridge", "item:mcwbridges:orange_sandstone_bridge"],
      [
        "item:mcwbridges:orange_sandstone_bridge",
        "item:mcwbridges:orange_sandstone_bridge",
        "item:mcwbridges:orange_sandstone_bridge",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:red_sandstone_railing_gate", "item:mcwfences:red_sandstone_railing_gate", 1, [
      ["item:minecraft:iron_bars", "item:minecraft:red_sandstone", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:red_sandstone", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_sandstone_slab", "item:minecraft:red_sandstone_slab", 6, [
      [
        "item:minecraft:red_sandstone|item:minecraft:chiseled_red_sandstone",
        "item:minecraft:red_sandstone|item:minecraft:chiseled_red_sandstone",
        "item:minecraft:red_sandstone|item:minecraft:chiseled_red_sandstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_sandstone_stairs", "item:minecraft:red_sandstone_stairs", 4, [
      ["item:minecraft:red_sandstone|item:minecraft:chiseled_red_sandstone|item:minecraft:cut_red_sandstone", "", ""],
      [
        "item:minecraft:red_sandstone|item:minecraft:chiseled_red_sandstone|item:minecraft:cut_red_sandstone",
        "item:minecraft:red_sandstone|item:minecraft:chiseled_red_sandstone|item:minecraft:cut_red_sandstone",
        "",
      ],
      [
        "item:minecraft:red_sandstone|item:minecraft:chiseled_red_sandstone|item:minecraft:cut_red_sandstone",
        "item:minecraft:red_sandstone|item:minecraft:chiseled_red_sandstone|item:minecraft:cut_red_sandstone",
        "item:minecraft:red_sandstone|item:minecraft:chiseled_red_sandstone|item:minecraft:cut_red_sandstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_sandstone_wall", "item:minecraft:red_sandstone_wall", 6, [
      ["item:minecraft:red_sandstone", "item:minecraft:red_sandstone", "item:minecraft:red_sandstone"],
      ["item:minecraft:red_sandstone", "item:minecraft:red_sandstone", "item:minecraft:red_sandstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_stained_glass", "item:minecraft:red_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:red_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_stained_glass_pane", "item:minecraft:red_stained_glass_pane", 16, [
      ["item:minecraft:red_stained_glass", "item:minecraft:red_stained_glass", "item:minecraft:red_stained_glass"],
      ["item:minecraft:red_stained_glass", "item:minecraft:red_stained_glass", "item:minecraft:red_stained_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:red_stained_glass_pane_from_glass_pane",
      "item:minecraft:red_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:red_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:red_striped_awning", "item:mcwroofs:red_striped_awning", 1, [
      ["item:minecraft:red_carpet", "item:minecraft:white_carpet", "item:minecraft:red_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:red_terracotta", "item:minecraft:red_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:red_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("cccbridge:redrouter_block", "item:cccbridge:redrouter_block", 1, [
      ["item:create:andesite_alloy", "item:minecraft:redstone_torch", "item:create:andesite_alloy"],
      ["item:minecraft:redstone_torch", "item:computercraft:monitor_normal", "item:minecraft:redstone_torch"],
      ["item:create:andesite_alloy", "item:minecraft:redstone_torch", "item:create:andesite_alloy"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:redstone_block", "item:minecraft:redstone_block", 1, [
      ["item:minecraft:redstone", "item:minecraft:redstone", "item:minecraft:redstone"],
      ["item:minecraft:redstone", "item:minecraft:redstone", "item:minecraft:redstone"],
      ["item:minecraft:redstone", "item:minecraft:redstone", "item:minecraft:redstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:redstone_lamp", "item:minecraft:redstone_lamp", 1, [
      ["", "item:minecraft:redstone", ""],
      ["item:minecraft:redstone", "item:minecraft:glowstone", "item:minecraft:redstone"],
      ["", "item:minecraft:redstone", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:redstone_torch", "item:minecraft:redstone_torch", 1, [
      ["item:minecraft:redstone"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:repeater", "item:minecraft:repeater", 1, [
      ["item:minecraft:redstone_torch", "item:minecraft:redstone", "item:minecraft:redstone_torch"],
      ["item:minecraft:stone", "item:minecraft:stone", "item:minecraft:stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:respawn_anchor", "item:minecraft:respawn_anchor", 1, [
      ["item:minecraft:crying_obsidian", "item:minecraft:crying_obsidian", "item:minecraft:crying_obsidian"],
      ["item:minecraft:glowstone", "item:minecraft:glowstone", "item:minecraft:glowstone"],
      ["item:minecraft:crying_obsidian", "item:minecraft:crying_obsidian", "item:minecraft:crying_obsidian"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:rice_bag", "item:farmersdelight:rice_bag", 1, [
      ["item:farmersdelight:rice", "item:farmersdelight:rice", "item:farmersdelight:rice"],
      ["item:farmersdelight:rice", "item:farmersdelight:rice", "item:farmersdelight:rice"],
      ["item:farmersdelight:rice", "item:farmersdelight:rice", "item:farmersdelight:rice"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:rice_bale", "item:farmersdelight:rice_bale", 1, [
      ["item:farmersdelight:rice_panicle", "item:farmersdelight:rice_panicle", "item:farmersdelight:rice_panicle"],
      ["item:farmersdelight:rice_panicle", "item:farmersdelight:rice_panicle", "item:farmersdelight:rice_panicle"],
      ["item:farmersdelight:rice_panicle", "item:farmersdelight:rice_panicle", "item:farmersdelight:rice_panicle"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:roofing_hammer", "item:mcwroofs:roofing_hammer", 1, [
      ["", "item:minecraft:iron_ingot", ""],
      ["", "item:minecraft:iron_nugget", "item:minecraft:iron_nugget"],
      ["item:minecraft:stick", "", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:rope", "item:farmersdelight:rope", 3, [
      ["item:farmersdelight:straw"],
      ["item:farmersdelight:straw"],
      ["item:farmersdelight:straw"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:rope_acacia_bridge", "item:mcwbridges:rope_acacia_bridge", 4, [
      ["item:minecraft:string", "", "item:minecraft:string"],
      ["item:minecraft:acacia_slab", "item:minecraft:acacia_slab", "item:minecraft:acacia_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:rope_birch_bridge", "item:mcwbridges:rope_birch_bridge", 4, [
      ["item:minecraft:string", "", "item:minecraft:string"],
      ["item:minecraft:birch_slab", "item:minecraft:birch_slab", "item:minecraft:birch_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:rope_crimson_bridge", "item:mcwbridges:rope_crimson_bridge", 4, [
      ["item:minecraft:string", "", "item:minecraft:string"],
      ["item:minecraft:crimson_slab", "item:minecraft:crimson_slab", "item:minecraft:crimson_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:rope_dark_oak_bridge", "item:mcwbridges:rope_dark_oak_bridge", 4, [
      ["item:minecraft:string", "", "item:minecraft:string"],
      ["item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_slab", "item:minecraft:dark_oak_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:rope_jungle_bridge", "item:mcwbridges:rope_jungle_bridge", 4, [
      ["item:minecraft:string", "", "item:minecraft:string"],
      ["item:minecraft:jungle_slab", "item:minecraft:jungle_slab", "item:minecraft:jungle_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:rope_oak_bridge", "item:mcwbridges:rope_oak_bridge", 4, [
      ["item:minecraft:string", "", "item:minecraft:string"],
      ["item:minecraft:oak_slab", "item:minecraft:oak_slab", "item:minecraft:oak_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:rope_spruce_bridge", "item:mcwbridges:rope_spruce_bridge", 4, [
      ["item:minecraft:string", "", "item:minecraft:string"],
      ["item:minecraft:spruce_slab", "item:minecraft:spruce_slab", "item:minecraft:spruce_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:rope_warped_bridge", "item:mcwbridges:rope_warped_bridge", 4, [
      ["item:minecraft:string", "", "item:minecraft:string"],
      ["item:minecraft:warped_slab", "item:minecraft:warped_slab", "item:minecraft:warped_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:safety_net", "item:farmersdelight:safety_net", 1, [
      ["item:farmersdelight:rope", "item:farmersdelight:rope"],
      ["item:farmersdelight:rope", "item:farmersdelight:rope"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:sandstone", "item:minecraft:sandstone", 1, [
      ["item:minecraft:sand", "item:minecraft:sand"],
      ["item:minecraft:sand", "item:minecraft:sand"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:sandstone_bridge", "item:mcwbridges:sandstone_bridge", 4, [
      ["item:minecraft:sandstone_wall", "", "item:minecraft:sandstone_wall"],
      ["item:minecraft:sandstone_slab", "item:minecraft:sandstone_slab", "item:minecraft:sandstone_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:sandstone_bridge_pier", "item:mcwbridges:sandstone_bridge_pier", 3, [
      ["item:minecraft:sandstone", "item:minecraft:sandstone_wall", "item:minecraft:sandstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:sandstone_bridge_stair", "item:mcwbridges:sandstone_bridge_stair", 6, [
      ["", "", "item:mcwbridges:sandstone_bridge"],
      ["", "item:mcwbridges:sandstone_bridge", "item:mcwbridges:sandstone_bridge"],
      ["item:mcwbridges:sandstone_bridge", "item:mcwbridges:sandstone_bridge", "item:mcwbridges:sandstone_bridge"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:sandstone_railing_gate", "item:mcwfences:sandstone_railing_gate", 1, [
      ["item:minecraft:iron_bars", "item:minecraft:sandstone", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:sandstone", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:sandstone_slab", "item:minecraft:sandstone_slab", 6, [
      [
        "item:minecraft:sandstone|item:minecraft:chiseled_sandstone",
        "item:minecraft:sandstone|item:minecraft:chiseled_sandstone",
        "item:minecraft:sandstone|item:minecraft:chiseled_sandstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:sandstone_stairs", "item:minecraft:sandstone_stairs", 4, [
      ["item:minecraft:sandstone|item:minecraft:chiseled_sandstone|item:minecraft:cut_sandstone", "", ""],
      [
        "item:minecraft:sandstone|item:minecraft:chiseled_sandstone|item:minecraft:cut_sandstone",
        "item:minecraft:sandstone|item:minecraft:chiseled_sandstone|item:minecraft:cut_sandstone",
        "",
      ],
      [
        "item:minecraft:sandstone|item:minecraft:chiseled_sandstone|item:minecraft:cut_sandstone",
        "item:minecraft:sandstone|item:minecraft:chiseled_sandstone|item:minecraft:cut_sandstone",
        "item:minecraft:sandstone|item:minecraft:chiseled_sandstone|item:minecraft:cut_sandstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:sandstone_wall", "item:minecraft:sandstone_wall", 6, [
      ["item:minecraft:sandstone", "item:minecraft:sandstone", "item:minecraft:sandstone"],
      ["item:minecraft:sandstone", "item:minecraft:sandstone", "item:minecraft:sandstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:scaffolding", "item:minecraft:scaffolding", 6, [
      ["item:minecraft:bamboo", "item:minecraft:string", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:scaffolding_from_canvas", "item:minecraft:scaffolding", 6, [
      ["item:minecraft:bamboo", "item:farmersdelight:canvas", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "", "item:minecraft:bamboo"],
      ["item:minecraft:bamboo", "", "item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("cccbridge:scroller_block", "item:cccbridge:scroller_block", 2, [
      ["item:create:brass_nugget", "item:create:precision_mechanism", "item:create:brass_nugget"],
      ["item:create:brass_nugget", "item:create:brass_casing", "item:create:brass_nugget"],
      ["item:create:brass_nugget", "item:computercraft:wired_modem", "item:create:brass_nugget"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:sea_lantern", "item:minecraft:sea_lantern", 1, [
      ["item:minecraft:prismarine_shard", "item:minecraft:prismarine_crystals", "item:minecraft:prismarine_shard"],
      [
        "item:minecraft:prismarine_crystals",
        "item:minecraft:prismarine_crystals",
        "item:minecraft:prismarine_crystals",
      ],
      ["item:minecraft:prismarine_shard", "item:minecraft:prismarine_crystals", "item:minecraft:prismarine_shard"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:shears", "item:minecraft:shears", 1, [
      ["", "item:minecraft:iron_ingot"],
      ["item:minecraft:iron_ingot", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:shield", "item:minecraft:shield", 1, [
      ["tag:items:minecraft:planks", "item:minecraft:iron_ingot", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["", "tag:items:minecraft:planks", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:shulker_box", "item:minecraft:shulker_box", 1, [
      ["item:minecraft:shulker_shell"],
      ["item:minecraft:chest"],
      ["item:minecraft:shulker_shell"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:skillet", "item:farmersdelight:skillet", 1, [
      ["", "tag:items:c:iron_ingots", "tag:items:c:iron_ingots"],
      ["", "tag:items:c:iron_ingots", "tag:items:c:iron_ingots"],
      ["item:minecraft:brick", "", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:slime_block", "item:minecraft:slime_block", 1, [
      ["item:minecraft:slime_ball", "item:minecraft:slime_ball", "item:minecraft:slime_ball"],
      ["item:minecraft:slime_ball", "item:minecraft:slime_ball", "item:minecraft:slime_ball"],
      ["item:minecraft:slime_ball", "item:minecraft:slime_ball", "item:minecraft:slime_ball"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_andesite_brick_slab", "item:create:small_andesite_brick_slab", 6, [
      ["item:create:small_andesite_bricks", "item:create:small_andesite_bricks", "item:create:small_andesite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_andesite_brick_stairs", "item:create:small_andesite_brick_stairs", 4, [
      ["item:create:small_andesite_bricks", "", ""],
      ["item:create:small_andesite_bricks", "item:create:small_andesite_bricks", ""],
      ["item:create:small_andesite_bricks", "item:create:small_andesite_bricks", "item:create:small_andesite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_andesite_brick_wall", "item:create:small_andesite_brick_wall", 6, [
      ["item:create:small_andesite_bricks", "item:create:small_andesite_bricks", "item:create:small_andesite_bricks"],
      ["item:create:small_andesite_bricks", "item:create:small_andesite_bricks", "item:create:small_andesite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_asurine_brick_slab", "item:create:small_asurine_brick_slab", 6, [
      ["item:create:small_asurine_bricks", "item:create:small_asurine_bricks", "item:create:small_asurine_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_asurine_brick_stairs", "item:create:small_asurine_brick_stairs", 4, [
      ["item:create:small_asurine_bricks", "", ""],
      ["item:create:small_asurine_bricks", "item:create:small_asurine_bricks", ""],
      ["item:create:small_asurine_bricks", "item:create:small_asurine_bricks", "item:create:small_asurine_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_asurine_brick_wall", "item:create:small_asurine_brick_wall", 6, [
      ["item:create:small_asurine_bricks", "item:create:small_asurine_bricks", "item:create:small_asurine_bricks"],
      ["item:create:small_asurine_bricks", "item:create:small_asurine_bricks", "item:create:small_asurine_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_calcite_brick_slab", "item:create:small_calcite_brick_slab", 6, [
      ["item:create:small_calcite_bricks", "item:create:small_calcite_bricks", "item:create:small_calcite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_calcite_brick_stairs", "item:create:small_calcite_brick_stairs", 4, [
      ["item:create:small_calcite_bricks", "", ""],
      ["item:create:small_calcite_bricks", "item:create:small_calcite_bricks", ""],
      ["item:create:small_calcite_bricks", "item:create:small_calcite_bricks", "item:create:small_calcite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_calcite_brick_wall", "item:create:small_calcite_brick_wall", 6, [
      ["item:create:small_calcite_bricks", "item:create:small_calcite_bricks", "item:create:small_calcite_bricks"],
      ["item:create:small_calcite_bricks", "item:create:small_calcite_bricks", "item:create:small_calcite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_crimsite_brick_slab", "item:create:small_crimsite_brick_slab", 6, [
      ["item:create:small_crimsite_bricks", "item:create:small_crimsite_bricks", "item:create:small_crimsite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_crimsite_brick_stairs", "item:create:small_crimsite_brick_stairs", 4, [
      ["item:create:small_crimsite_bricks", "", ""],
      ["item:create:small_crimsite_bricks", "item:create:small_crimsite_bricks", ""],
      ["item:create:small_crimsite_bricks", "item:create:small_crimsite_bricks", "item:create:small_crimsite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_crimsite_brick_wall", "item:create:small_crimsite_brick_wall", 6, [
      ["item:create:small_crimsite_bricks", "item:create:small_crimsite_bricks", "item:create:small_crimsite_bricks"],
      ["item:create:small_crimsite_bricks", "item:create:small_crimsite_bricks", "item:create:small_crimsite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_deepslate_brick_slab", "item:create:small_deepslate_brick_slab", 6, [
      [
        "item:create:small_deepslate_bricks",
        "item:create:small_deepslate_bricks",
        "item:create:small_deepslate_bricks",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_deepslate_brick_stairs", "item:create:small_deepslate_brick_stairs", 4, [
      ["item:create:small_deepslate_bricks", "", ""],
      ["item:create:small_deepslate_bricks", "item:create:small_deepslate_bricks", ""],
      [
        "item:create:small_deepslate_bricks",
        "item:create:small_deepslate_bricks",
        "item:create:small_deepslate_bricks",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_deepslate_brick_wall", "item:create:small_deepslate_brick_wall", 6, [
      [
        "item:create:small_deepslate_bricks",
        "item:create:small_deepslate_bricks",
        "item:create:small_deepslate_bricks",
      ],
      [
        "item:create:small_deepslate_bricks",
        "item:create:small_deepslate_bricks",
        "item:create:small_deepslate_bricks",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_diorite_brick_slab", "item:create:small_diorite_brick_slab", 6, [
      ["item:create:small_diorite_bricks", "item:create:small_diorite_bricks", "item:create:small_diorite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_diorite_brick_stairs", "item:create:small_diorite_brick_stairs", 4, [
      ["item:create:small_diorite_bricks", "", ""],
      ["item:create:small_diorite_bricks", "item:create:small_diorite_bricks", ""],
      ["item:create:small_diorite_bricks", "item:create:small_diorite_bricks", "item:create:small_diorite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_diorite_brick_wall", "item:create:small_diorite_brick_wall", 6, [
      ["item:create:small_diorite_bricks", "item:create:small_diorite_bricks", "item:create:small_diorite_bricks"],
      ["item:create:small_diorite_bricks", "item:create:small_diorite_bricks", "item:create:small_diorite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_dripstone_brick_slab", "item:create:small_dripstone_brick_slab", 6, [
      [
        "item:create:small_dripstone_bricks",
        "item:create:small_dripstone_bricks",
        "item:create:small_dripstone_bricks",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_dripstone_brick_stairs", "item:create:small_dripstone_brick_stairs", 4, [
      ["item:create:small_dripstone_bricks", "", ""],
      ["item:create:small_dripstone_bricks", "item:create:small_dripstone_bricks", ""],
      [
        "item:create:small_dripstone_bricks",
        "item:create:small_dripstone_bricks",
        "item:create:small_dripstone_bricks",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_dripstone_brick_wall", "item:create:small_dripstone_brick_wall", 6, [
      [
        "item:create:small_dripstone_bricks",
        "item:create:small_dripstone_bricks",
        "item:create:small_dripstone_bricks",
      ],
      [
        "item:create:small_dripstone_bricks",
        "item:create:small_dripstone_bricks",
        "item:create:small_dripstone_bricks",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_granite_brick_slab", "item:create:small_granite_brick_slab", 6, [
      ["item:create:small_granite_bricks", "item:create:small_granite_bricks", "item:create:small_granite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_granite_brick_stairs", "item:create:small_granite_brick_stairs", 4, [
      ["item:create:small_granite_bricks", "", ""],
      ["item:create:small_granite_bricks", "item:create:small_granite_bricks", ""],
      ["item:create:small_granite_bricks", "item:create:small_granite_bricks", "item:create:small_granite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_granite_brick_wall", "item:create:small_granite_brick_wall", 6, [
      ["item:create:small_granite_bricks", "item:create:small_granite_bricks", "item:create:small_granite_bricks"],
      ["item:create:small_granite_bricks", "item:create:small_granite_bricks", "item:create:small_granite_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_limestone_brick_slab", "item:create:small_limestone_brick_slab", 6, [
      [
        "item:create:small_limestone_bricks",
        "item:create:small_limestone_bricks",
        "item:create:small_limestone_bricks",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_limestone_brick_stairs", "item:create:small_limestone_brick_stairs", 4, [
      ["item:create:small_limestone_bricks", "", ""],
      ["item:create:small_limestone_bricks", "item:create:small_limestone_bricks", ""],
      [
        "item:create:small_limestone_bricks",
        "item:create:small_limestone_bricks",
        "item:create:small_limestone_bricks",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_limestone_brick_wall", "item:create:small_limestone_brick_wall", 6, [
      [
        "item:create:small_limestone_bricks",
        "item:create:small_limestone_bricks",
        "item:create:small_limestone_bricks",
      ],
      [
        "item:create:small_limestone_bricks",
        "item:create:small_limestone_bricks",
        "item:create:small_limestone_bricks",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_ochrum_brick_slab", "item:create:small_ochrum_brick_slab", 6, [
      ["item:create:small_ochrum_bricks", "item:create:small_ochrum_bricks", "item:create:small_ochrum_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_ochrum_brick_stairs", "item:create:small_ochrum_brick_stairs", 4, [
      ["item:create:small_ochrum_bricks", "", ""],
      ["item:create:small_ochrum_bricks", "item:create:small_ochrum_bricks", ""],
      ["item:create:small_ochrum_bricks", "item:create:small_ochrum_bricks", "item:create:small_ochrum_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_ochrum_brick_wall", "item:create:small_ochrum_brick_wall", 6, [
      ["item:create:small_ochrum_bricks", "item:create:small_ochrum_bricks", "item:create:small_ochrum_bricks"],
      ["item:create:small_ochrum_bricks", "item:create:small_ochrum_bricks", "item:create:small_ochrum_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_scorchia_brick_slab", "item:create:small_scorchia_brick_slab", 6, [
      ["item:create:small_scorchia_bricks", "item:create:small_scorchia_bricks", "item:create:small_scorchia_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_scorchia_brick_stairs", "item:create:small_scorchia_brick_stairs", 4, [
      ["item:create:small_scorchia_bricks", "", ""],
      ["item:create:small_scorchia_bricks", "item:create:small_scorchia_bricks", ""],
      ["item:create:small_scorchia_bricks", "item:create:small_scorchia_bricks", "item:create:small_scorchia_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_scorchia_brick_wall", "item:create:small_scorchia_brick_wall", 6, [
      ["item:create:small_scorchia_bricks", "item:create:small_scorchia_bricks", "item:create:small_scorchia_bricks"],
      ["item:create:small_scorchia_bricks", "item:create:small_scorchia_bricks", "item:create:small_scorchia_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_scoria_brick_slab", "item:create:small_scoria_brick_slab", 6, [
      ["item:create:small_scoria_bricks", "item:create:small_scoria_bricks", "item:create:small_scoria_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_scoria_brick_stairs", "item:create:small_scoria_brick_stairs", 4, [
      ["item:create:small_scoria_bricks", "", ""],
      ["item:create:small_scoria_bricks", "item:create:small_scoria_bricks", ""],
      ["item:create:small_scoria_bricks", "item:create:small_scoria_bricks", "item:create:small_scoria_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_scoria_brick_wall", "item:create:small_scoria_brick_wall", 6, [
      ["item:create:small_scoria_bricks", "item:create:small_scoria_bricks", "item:create:small_scoria_bricks"],
      ["item:create:small_scoria_bricks", "item:create:small_scoria_bricks", "item:create:small_scoria_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_tuff_brick_slab", "item:create:small_tuff_brick_slab", 6, [
      ["item:create:small_tuff_bricks", "item:create:small_tuff_bricks", "item:create:small_tuff_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_tuff_brick_stairs", "item:create:small_tuff_brick_stairs", 4, [
      ["item:create:small_tuff_bricks", "", ""],
      ["item:create:small_tuff_bricks", "item:create:small_tuff_bricks", ""],
      ["item:create:small_tuff_bricks", "item:create:small_tuff_bricks", "item:create:small_tuff_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_tuff_brick_wall", "item:create:small_tuff_brick_wall", 6, [
      ["item:create:small_tuff_bricks", "item:create:small_tuff_bricks", "item:create:small_tuff_bricks"],
      ["item:create:small_tuff_bricks", "item:create:small_tuff_bricks", "item:create:small_tuff_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_veridium_brick_slab", "item:create:small_veridium_brick_slab", 6, [
      ["item:create:small_veridium_bricks", "item:create:small_veridium_bricks", "item:create:small_veridium_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_veridium_brick_stairs", "item:create:small_veridium_brick_stairs", 4, [
      ["item:create:small_veridium_bricks", "", ""],
      ["item:create:small_veridium_bricks", "item:create:small_veridium_bricks", ""],
      ["item:create:small_veridium_bricks", "item:create:small_veridium_bricks", "item:create:small_veridium_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:small_veridium_brick_wall", "item:create:small_veridium_brick_wall", 6, [
      ["item:create:small_veridium_bricks", "item:create:small_veridium_bricks", "item:create:small_veridium_bricks"],
      ["item:create:small_veridium_bricks", "item:create:small_veridium_bricks", "item:create:small_veridium_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:smithing_table", "item:minecraft:smithing_table", 1, [
      ["item:minecraft:iron_ingot", "item:minecraft:iron_ingot"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:smoker", "item:minecraft:smoker", 1, [
      ["", "tag:items:minecraft:logs", ""],
      ["tag:items:minecraft:logs", "item:minecraft:furnace", "tag:items:minecraft:logs"],
      ["", "tag:items:minecraft:logs", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:smooth_quartz_slab", "item:minecraft:smooth_quartz_slab", 6, [
      ["item:minecraft:smooth_quartz", "item:minecraft:smooth_quartz", "item:minecraft:smooth_quartz"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:smooth_quartz_stairs", "item:minecraft:smooth_quartz_stairs", 4, [
      ["item:minecraft:smooth_quartz", "", ""],
      ["item:minecraft:smooth_quartz", "item:minecraft:smooth_quartz", ""],
      ["item:minecraft:smooth_quartz", "item:minecraft:smooth_quartz", "item:minecraft:smooth_quartz"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:smooth_red_sandstone_slab", "item:minecraft:smooth_red_sandstone_slab", 6, [
      [
        "item:minecraft:smooth_red_sandstone",
        "item:minecraft:smooth_red_sandstone",
        "item:minecraft:smooth_red_sandstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:smooth_red_sandstone_stairs", "item:minecraft:smooth_red_sandstone_stairs", 4, [
      ["item:minecraft:smooth_red_sandstone", "", ""],
      ["item:minecraft:smooth_red_sandstone", "item:minecraft:smooth_red_sandstone", ""],
      [
        "item:minecraft:smooth_red_sandstone",
        "item:minecraft:smooth_red_sandstone",
        "item:minecraft:smooth_red_sandstone",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:smooth_sandstone_slab", "item:minecraft:smooth_sandstone_slab", 6, [
      ["item:minecraft:smooth_sandstone", "item:minecraft:smooth_sandstone", "item:minecraft:smooth_sandstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:smooth_sandstone_stairs", "item:minecraft:smooth_sandstone_stairs", 4, [
      ["item:minecraft:smooth_sandstone", "", ""],
      ["item:minecraft:smooth_sandstone", "item:minecraft:smooth_sandstone", ""],
      ["item:minecraft:smooth_sandstone", "item:minecraft:smooth_sandstone", "item:minecraft:smooth_sandstone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:smooth_stone_slab", "item:minecraft:smooth_stone_slab", 6, [
      ["item:minecraft:smooth_stone", "item:minecraft:smooth_stone", "item:minecraft:smooth_stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:snow", "item:minecraft:snow", 6, [
      ["item:minecraft:snow_block", "item:minecraft:snow_block", "item:minecraft:snow_block"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:snow_block", "item:minecraft:snow_block", 1, [
      ["item:minecraft:snowball", "item:minecraft:snowball"],
      ["item:minecraft:snowball", "item:minecraft:snowball"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:soul_campfire", "item:minecraft:soul_campfire", 1, [
      ["", "item:minecraft:stick", ""],
      ["item:minecraft:stick", "tag:items:minecraft:soul_fire_base_blocks", "item:minecraft:stick"],
      ["tag:items:minecraft:logs", "tag:items:minecraft:logs", "tag:items:minecraft:logs"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:soul_lantern", "item:minecraft:soul_lantern", 1, [
      ["item:minecraft:iron_nugget", "item:minecraft:iron_nugget", "item:minecraft:iron_nugget"],
      ["item:minecraft:iron_nugget", "item:minecraft:soul_torch", "item:minecraft:iron_nugget"],
      ["item:minecraft:iron_nugget", "item:minecraft:iron_nugget", "item:minecraft:iron_nugget"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:soul_torch", "item:minecraft:soul_torch", 4, [
      ["item:minecraft:coal|item:minecraft:charcoal"],
      ["item:minecraft:stick"],
      ["tag:items:minecraft:soul_fire_base_blocks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("cccbridge:source_block", "item:cccbridge:source_block", 2, [
      ["item:create:golden_sheet", "item:computercraft:disk", "item:create:golden_sheet"],
      ["item:minecraft:paper", "item:create:brass_casing", "item:minecraft:paper"],
      ["item:create:golden_sheet", "item:minecraft:glass", "item:create:golden_sheet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:speaker", "item:computercraft:speaker", 1, [
      ["tag:items:c:stones", "tag:items:c:stones", "tag:items:c:stones"],
      ["tag:items:c:stones", "item:minecraft:note_block", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:redstone_dusts", "tag:items:c:stones"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:spectral_arrow", "item:minecraft:spectral_arrow", 2, [
      ["", "item:minecraft:glowstone_dust", ""],
      ["item:minecraft:glowstone_dust", "item:minecraft:arrow", "item:minecraft:glowstone_dust"],
      ["", "item:minecraft:glowstone_dust", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:spruce_attic_roof", "item:mcwroofs:spruce_attic_roof", 2, [
      ["", "item:minecraft:spruce_log"],
      ["item:minecraft:spruce_log", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:spruce_bamboo_trapdoor", "item:mcwtrpdoors:spruce_bamboo_trapdoor", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwtrpdoors:print_bamboo"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_bark_glass_door", "item:mcwdoors:spruce_bark_glass_door", 3, [
      ["item:minecraft:spruce_log", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:spruce_log", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:spruce_bark_trapdoor", "item:mcwtrpdoors:spruce_bark_trapdoor", 2, [
      ["item:minecraft:spruce_log", "item:minecraft:glass_pane", "item:minecraft:spruce_log"],
      ["item:minecraft:spruce_log", "item:minecraft:glass_pane", "item:minecraft:spruce_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_barn_door", "item:mcwdoors:spruce_barn_door", 2, [
      ["item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_barn_glass_door", "item:mcwdoors:spruce_barn_glass_door", 3, [
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:spruce_barn_trapdoor", "item:mcwtrpdoors:spruce_barn_trapdoor", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwtrpdoors:spruce_glass_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:spruce_barred_trapdoor", "item:mcwtrpdoors:spruce_barred_trapdoor", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwtrpdoors:print_barred"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_beach_door", "item:mcwdoors:spruce_beach_door", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwdoors:print_jungle"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:spruce_beach_trapdoor", "item:mcwtrpdoors:spruce_beach_trapdoor", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwtrpdoors:print_beach"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:spruce_blinds", "item:mcwwindows:spruce_blinds", 3, [
      ["item:minecraft:spruce_slab", "item:minecraft:spruce_slab", "item:minecraft:spruce_slab"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:spruce_boat", "item:minecraft:spruce_boat", 1, [
      ["item:minecraft:spruce_planks", "", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:spruce_bridge_pier", "item:mcwbridges:spruce_bridge_pier", 3, [
      ["item:minecraft:spruce_log", "item:minecraft:spruce_fence", "item:minecraft:spruce_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:spruce_cabinet", "item:farmersdelight:spruce_cabinet", 1, [
      ["item:minecraft:spruce_slab", "item:minecraft:spruce_slab", "item:minecraft:spruce_slab"],
      ["item:minecraft:spruce_trapdoor", "", "item:minecraft:spruce_trapdoor"],
      ["item:minecraft:spruce_slab", "item:minecraft:spruce_slab", "item:minecraft:spruce_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_classic_door", "item:mcwdoors:spruce_classic_door", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwdoors:print_oak"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:spruce_classic_trapdoor", "item:mcwtrpdoors:spruce_classic_trapdoor", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwtrpdoors:print_classic"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:spruce_door", "item:minecraft:spruce_door", 3, [
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:spruce_fence", "item:minecraft:spruce_fence", 3, [
      ["item:minecraft:spruce_planks", "item:minecraft:stick", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:stick", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:spruce_fence_gate", "item:minecraft:spruce_fence_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:spruce_planks", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:spruce_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_four_panel_door", "item:mcwdoors:spruce_four_panel_door", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwdoors:print_dark_oak"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwtrpdoors:spruce_four_panel_trapdoor",
      "item:mcwtrpdoors:spruce_four_panel_trapdoor",
      1,
      [["item:minecraft:spruce_planks"], ["item:mcwtrpdoors:print_four_panel"], ["item:minecraft:spruce_planks"]]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:spruce_four_window", "item:mcwwindows:spruce_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:spruce_log", "item:mcwwindows:window_centre_bar_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_glass_door", "item:mcwdoors:spruce_glass_door", 3, [
      ["item:minecraft:spruce_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:spruce_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:spruce_glass_trapdoor", "item:mcwtrpdoors:spruce_glass_trapdoor", 2, [
      ["item:minecraft:spruce_planks", "item:minecraft:glass_pane", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:glass_pane", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:spruce_hedge", "item:mcwfences:spruce_hedge", 4, [
      ["item:minecraft:spruce_leaves", "item:minecraft:spruce_leaves"],
      ["item:minecraft:spruce_leaves", "item:minecraft:spruce_leaves"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:spruce_highley_gate", "item:mcwfences:spruce_highley_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:spruce_log", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:spruce_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:spruce_horse_fence", "item:mcwfences:spruce_horse_fence", 3, [
      ["item:minecraft:spruce_log", "item:minecraft:stick", "item:minecraft:spruce_log"],
      ["item:minecraft:stick", "item:minecraft:spruce_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_japanese2_door", "item:mcwdoors:spruce_japanese2_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:spruce_slab", "item:minecraft:spruce_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_japanese_door", "item:mcwdoors:spruce_japanese_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:spruce_log_bridge_middle", "item:mcwbridges:spruce_log_bridge_middle", 4, [
      ["item:minecraft:spruce_fence", "", "item:minecraft:spruce_fence"],
      ["item:minecraft:spruce_slab", "item:minecraft:spruce_slab", "item:minecraft:spruce_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:spruce_log_bridge_stair", "item:mcwbridges:spruce_log_bridge_stair", 6, [
      ["", "", "item:mcwbridges:spruce_log_bridge_middle"],
      ["", "item:mcwbridges:spruce_log_bridge_middle", "item:mcwbridges:spruce_log_bridge_middle"],
      [
        "item:mcwbridges:spruce_log_bridge_middle",
        "item:mcwbridges:spruce_log_bridge_middle",
        "item:mcwbridges:spruce_log_bridge_middle",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:spruce_log_parapet", "item:mcwwindows:spruce_log_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:spruce_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:spruce_louvered_shutter", "item:mcwwindows:spruce_louvered_shutter", 3, [
      ["item:minecraft:spruce_slab"],
      ["item:minecraft:spruce_slab"],
      ["item:minecraft:spruce_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:spruce_lower_roof", "item:mcwroofs:spruce_lower_roof", 4, [
      ["", "item:minecraft:spruce_log", "item:minecraft:spruce_log"],
      ["item:minecraft:spruce_log", "item:minecraft:spruce_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_modern_door", "item:mcwdoors:spruce_modern_door", 3, [
      ["item:minecraft:spruce_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_mystic_door", "item:mcwdoors:spruce_mystic_door", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwdoors:print_mystic"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:spruce_mystic_trapdoor", "item:mcwtrpdoors:spruce_mystic_trapdoor", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwtrpdoors:print_mystic"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_nether_door", "item:mcwdoors:spruce_nether_door", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwdoors:print_nether"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_paper_door", "item:mcwdoors:spruce_paper_door", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwdoors:print_birch"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:spruce_paper_trapdoor", "item:mcwtrpdoors:spruce_paper_trapdoor", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwtrpdoors:print_paper"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:spruce_picket_fence", "item:mcwfences:spruce_picket_fence", 3, [
      ["item:minecraft:spruce_log", "item:minecraft:spruce_planks", "item:minecraft:spruce_log"],
      ["item:minecraft:spruce_log", "item:minecraft:stick", "item:minecraft:spruce_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:spruce_plank_four_window", "item:mcwwindows:spruce_plank_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:spruce_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:spruce_plank_parapet", "item:mcwwindows:spruce_plank_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:spruce_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:spruce_plank_window", "item:mcwwindows:spruce_plank_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:spruce_planks", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:spruce_plank_window2", "item:mcwwindows:spruce_plank_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:spruce_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:spruce_planks_attic_roof", "item:mcwroofs:spruce_planks_attic_roof", 2, [
      ["", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:spruce_planks_lower_roof", "item:mcwroofs:spruce_planks_lower_roof", 4, [
      ["", "item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwpaths:spruce_planks_path", "item:mcwpaths:spruce_planks_path", 6, [
      ["item:minecraft:spruce_slab", "item:minecraft:spruce_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:spruce_planks_roof", "item:mcwroofs:spruce_planks_roof", 2, [
      ["", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:spruce_planks_steep_roof", "item:mcwroofs:spruce_planks_steep_roof", 4, [
      ["", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:spruce_planks_top_roof", "item:mcwroofs:spruce_planks_top_roof", 2, [
      ["item:minecraft:spruce_planks", "item:minecraft:stick", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:spruce_planks_upper_lower_roof",
      "item:mcwroofs:spruce_planks_upper_lower_roof",
      3,
      [
        ["", "", "item:minecraft:spruce_planks"],
        ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:spruce_planks_upper_steep_roof",
      "item:mcwroofs:spruce_planks_upper_steep_roof",
      3,
      [
        ["", "item:minecraft:spruce_planks"],
        ["", "item:minecraft:spruce_planks"],
        ["item:minecraft:spruce_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:spruce_pressure_plate", "item:minecraft:spruce_pressure_plate", 1, [
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:spruce_pyramid_gate", "item:mcwfences:spruce_pyramid_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:spruce_log", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:spruce_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:spruce_rail_bridge", "item:mcwbridges:spruce_rail_bridge", 4, [
      ["item:minecraft:spruce_fence", "", "item:minecraft:spruce_fence"],
      ["item:minecraft:spruce_fence", "item:minecraft:spruce_slab", "item:minecraft:spruce_fence"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:spruce_ranch_trapdoor", "item:mcwtrpdoors:spruce_ranch_trapdoor", 2, [
      ["item:minecraft:spruce_log", "item:minecraft:stick", "item:minecraft:spruce_log"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:spruce_log", "item:minecraft:stick", "item:minecraft:spruce_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:spruce_roof", "item:mcwroofs:spruce_roof", 2, [
      ["", "item:minecraft:spruce_log"],
      ["item:minecraft:spruce_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:spruce_rope_bridge_stair", "item:mcwbridges:spruce_rope_bridge_stair", 6, [
      ["", "", "item:mcwbridges:rope_spruce_bridge"],
      ["", "item:mcwbridges:rope_spruce_bridge", "item:mcwbridges:rope_spruce_bridge"],
      [
        "item:mcwbridges:rope_spruce_bridge",
        "item:mcwbridges:rope_spruce_bridge",
        "item:mcwbridges:rope_spruce_bridge",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:spruce_shutter", "item:mcwwindows:spruce_shutter", 3, [
      ["item:minecraft:spruce_trapdoor"],
      ["item:minecraft:spruce_trapdoor"],
      ["item:minecraft:spruce_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:spruce_sign", "item:minecraft:spruce_sign", 3, [
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:spruce_slab", "item:minecraft:spruce_slab", 6, [
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_stable_door", "item:mcwdoors:spruce_stable_door", 3, [
      ["item:minecraft:iron_bars", "item:minecraft:iron_bars"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_stable_head_door", "item:mcwdoors:spruce_stable_head_door", 1, [
      ["item:mcwdoors:spruce_stable_door"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:spruce_stairs", "item:minecraft:spruce_stairs", 4, [
      ["item:minecraft:spruce_planks", "", ""],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks", ""],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:spruce_steep_roof", "item:mcwroofs:spruce_steep_roof", 4, [
      ["", "item:minecraft:spruce_log"],
      ["item:minecraft:spruce_log", "item:minecraft:spruce_log"],
      ["item:minecraft:spruce_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:spruce_stockade_fence", "item:mcwfences:spruce_stockade_fence", 3, [
      ["item:minecraft:spruce_log", "item:minecraft:spruce_planks", "item:minecraft:spruce_log"],
      ["item:minecraft:spruce_log", "item:minecraft:spruce_planks", "item:minecraft:spruce_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_swamp_door", "item:mcwdoors:spruce_swamp_door", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwdoors:print_swamp"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:spruce_swamp_trapdoor", "item:mcwtrpdoors:spruce_swamp_trapdoor", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwtrpdoors:print_swamp"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:spruce_top_roof", "item:mcwroofs:spruce_top_roof", 2, [
      ["item:minecraft:spruce_log", "item:minecraft:stick", "item:minecraft:spruce_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:spruce_trapdoor", "item:minecraft:spruce_trapdoor", 2, [
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_tropical_door", "item:mcwdoors:spruce_tropical_door", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwdoors:print_acacia"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:spruce_tropical_trapdoor", "item:mcwtrpdoors:spruce_tropical_trapdoor", 1, [
      ["item:minecraft:spruce_planks"],
      ["item:mcwtrpdoors:print_tropical"],
      ["item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:spruce_upper_lower_roof", "item:mcwroofs:spruce_upper_lower_roof", 3, [
      ["", "", "item:minecraft:spruce_log"],
      ["item:minecraft:spruce_log", "item:minecraft:spruce_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:spruce_upper_steep_roof", "item:mcwroofs:spruce_upper_steep_roof", 3, [
      ["", "item:minecraft:spruce_log"],
      ["", "item:minecraft:spruce_log"],
      ["item:minecraft:spruce_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:spruce_western_door", "item:mcwdoors:spruce_western_door", 3, [
      ["", "", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_slab", "item:minecraft:spruce_planks"],
      ["item:minecraft:spruce_planks", "item:minecraft:spruce_planks", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:spruce_window", "item:create:spruce_window", 2, [
      ["", "item:minecraft:spruce_planks", ""],
      ["item:minecraft:spruce_planks", "tag:items:c:glass/colorless", "item:minecraft:spruce_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:spruce_window", "item:mcwwindows:spruce_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:spruce_log", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:spruce_window2", "item:mcwwindows:spruce_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:spruce_log", "item:mcwwindows:window_centre_bar_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:spruce_window_pane", "item:create:spruce_window_pane", 16, [
      ["item:create:spruce_window", "item:create:spruce_window", "item:create:spruce_window"],
      ["item:create:spruce_window", "item:create:spruce_window", "item:create:spruce_window"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:spruce_wired_fence", "item:mcwfences:spruce_wired_fence", 3, [
      ["item:minecraft:stick", "item:minecraft:iron_bars", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:spruce_log", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:spruce_wood", "item:minecraft:spruce_wood", 3, [
      ["item:minecraft:spruce_log", "item:minecraft:spruce_log"],
      ["item:minecraft:spruce_log", "item:minecraft:spruce_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:spyglass", "item:minecraft:spyglass", 1, [
      ["item:minecraft:amethyst_shard"],
      ["item:minecraft:copper_ingot"],
      ["item:minecraft:copper_ingot"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stick", "item:minecraft:stick", 4, [
      ["tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stick_from_bamboo_item", "item:minecraft:stick", 1, [
      ["item:minecraft:bamboo"],
      ["item:minecraft:bamboo"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:sticky_piston", "item:minecraft:sticky_piston", 1, [
      ["item:minecraft:slime_ball"],
      ["item:minecraft:piston"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stone_axe", "item:minecraft:stone_axe", 1, [
      ["tag:items:minecraft:stone_tool_materials", "tag:items:minecraft:stone_tool_materials"],
      ["tag:items:minecraft:stone_tool_materials", "item:minecraft:stick"],
      ["", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:stone_brick_arrow_slit", "item:mcwwindows:stone_brick_arrow_slit", 3, [
      ["item:minecraft:stone_bricks", "item:minecraft:stone_bricks"],
      ["item:minecraft:stone_brick_slab", "item:minecraft:stone_brick_slab"],
      ["item:minecraft:stone_bricks", "item:minecraft:stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:stone_brick_bridge", "item:mcwbridges:stone_brick_bridge", 4, [
      ["item:minecraft:stone_brick_wall", "", "item:minecraft:stone_brick_wall"],
      ["item:minecraft:stone_brick_slab", "item:minecraft:stone_brick_slab", "item:minecraft:stone_brick_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:stone_brick_bridge_stair", "item:mcwbridges:stone_brick_bridge_stair", 6, [
      ["", "", "item:mcwbridges:stone_brick_bridge"],
      ["", "item:mcwbridges:stone_brick_bridge", "item:mcwbridges:stone_brick_bridge"],
      [
        "item:mcwbridges:stone_brick_bridge",
        "item:mcwbridges:stone_brick_bridge",
        "item:mcwbridges:stone_brick_bridge",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:stone_brick_gothic", "item:mcwwindows:stone_brick_gothic", 4, [
      ["", "item:minecraft:stone_bricks", ""],
      ["item:minecraft:stone_bricks", "item:minecraft:glass_pane", "item:minecraft:stone_bricks"],
      ["", "item:minecraft:stone_bricks", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:stone_brick_railing_gate", "item:mcwfences:stone_brick_railing_gate", 1, [
      ["item:minecraft:iron_bars", "item:minecraft:stone_bricks", "item:minecraft:iron_bars"],
      ["item:minecraft:iron_bars", "item:minecraft:stone_bricks", "item:minecraft:iron_bars"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stone_brick_slab", "item:minecraft:stone_brick_slab", 6, [
      ["item:minecraft:stone_bricks", "item:minecraft:stone_bricks", "item:minecraft:stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stone_brick_stairs", "item:minecraft:stone_brick_stairs", 4, [
      ["item:minecraft:stone_bricks", "", ""],
      ["item:minecraft:stone_bricks", "item:minecraft:stone_bricks", ""],
      ["item:minecraft:stone_bricks", "item:minecraft:stone_bricks", "item:minecraft:stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stone_brick_wall", "item:minecraft:stone_brick_wall", 6, [
      ["item:minecraft:stone_bricks", "item:minecraft:stone_bricks", "item:minecraft:stone_bricks"],
      ["item:minecraft:stone_bricks", "item:minecraft:stone_bricks", "item:minecraft:stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stone_bricks", "item:minecraft:stone_bricks", 4, [
      ["item:minecraft:stone", "item:minecraft:stone"],
      ["item:minecraft:stone", "item:minecraft:stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:stone_bridge_pier", "item:mcwbridges:stone_bridge_pier", 3, [
      ["item:minecraft:stone_bricks", "item:minecraft:stone_brick_wall", "item:minecraft:stone_bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:stone_four_window", "item:mcwwindows:stone_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:stone", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stone_hoe", "item:minecraft:stone_hoe", 1, [
      ["tag:items:minecraft:stone_tool_materials", "tag:items:minecraft:stone_tool_materials"],
      ["", "item:minecraft:stick"],
      ["", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stone_pickaxe", "item:minecraft:stone_pickaxe", 1, [
      [
        "tag:items:minecraft:stone_tool_materials",
        "tag:items:minecraft:stone_tool_materials",
        "tag:items:minecraft:stone_tool_materials",
      ],
      ["", "item:minecraft:stick", ""],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stone_pressure_plate", "item:minecraft:stone_pressure_plate", 1, [
      ["item:minecraft:stone", "item:minecraft:stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stone_shovel", "item:minecraft:stone_shovel", 1, [
      ["tag:items:minecraft:stone_tool_materials"],
      ["item:minecraft:stick"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stone_slab", "item:minecraft:stone_slab", 6, [
      ["item:minecraft:stone", "item:minecraft:stone", "item:minecraft:stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stone_stairs", "item:minecraft:stone_stairs", 4, [
      ["item:minecraft:stone", "", ""],
      ["item:minecraft:stone", "item:minecraft:stone", ""],
      ["item:minecraft:stone", "item:minecraft:stone", "item:minecraft:stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stone_sword", "item:minecraft:stone_sword", 1, [
      ["tag:items:minecraft:stone_tool_materials"],
      ["tag:items:minecraft:stone_tool_materials"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:stone_window", "item:mcwwindows:stone_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_centre_bar_base", "item:minecraft:stone", "item:mcwwindows:window_centre_bar_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:stone_window2", "item:mcwwindows:stone_window2", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:stone", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stonecutter", "item:minecraft:stonecutter", 1, [
      ["", "item:minecraft:iron_ingot", ""],
      ["item:minecraft:stone", "item:minecraft:stone", "item:minecraft:stone"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:stove", "item:farmersdelight:stove", 1, [
      ["tag:items:c:iron_ingots", "tag:items:c:iron_ingots", "tag:items:c:iron_ingots"],
      ["item:minecraft:bricks", "", "item:minecraft:bricks"],
      ["item:minecraft:bricks", "item:minecraft:campfire", "item:minecraft:bricks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:straw_bale", "item:farmersdelight:straw_bale", 1, [
      ["item:farmersdelight:straw", "item:farmersdelight:straw", "item:farmersdelight:straw"],
      ["item:farmersdelight:straw", "item:farmersdelight:straw", "item:farmersdelight:straw"],
      ["item:farmersdelight:straw", "item:farmersdelight:straw", "item:farmersdelight:straw"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_acacia_log_four_window",
      "item:mcwwindows:stripped_acacia_log_four_window",
      8,
      [
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_acacia_log",
          "item:mcwwindows:window_centre_bar_base",
        ],
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:stripped_acacia_log_window", "item:mcwwindows:stripped_acacia_log_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:stripped_acacia_log", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_acacia_log_window2",
      "item:mcwwindows:stripped_acacia_log_window2",
      8,
      [
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
        ],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_acacia_log",
          "item:mcwwindows:window_centre_bar_base",
        ],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stripped_acacia_wood", "item:minecraft:stripped_acacia_wood", 3, [
      ["item:minecraft:stripped_acacia_log", "item:minecraft:stripped_acacia_log"],
      ["item:minecraft:stripped_acacia_log", "item:minecraft:stripped_acacia_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_birch_log_four_window",
      "item:mcwwindows:stripped_birch_log_four_window",
      8,
      [
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_birch_log",
          "item:mcwwindows:window_centre_bar_base",
        ],
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:stripped_birch_log_window", "item:mcwwindows:stripped_birch_log_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:stripped_birch_log", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:stripped_birch_log_window2", "item:mcwwindows:stripped_birch_log_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:stripped_birch_log",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stripped_birch_wood", "item:minecraft:stripped_birch_wood", 3, [
      ["item:minecraft:stripped_birch_log", "item:minecraft:stripped_birch_log"],
      ["item:minecraft:stripped_birch_log", "item:minecraft:stripped_birch_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stripped_crimson_hyphae", "item:minecraft:stripped_crimson_hyphae", 3, [
      ["item:minecraft:stripped_crimson_stem", "item:minecraft:stripped_crimson_stem"],
      ["item:minecraft:stripped_crimson_stem", "item:minecraft:stripped_crimson_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_crimson_stem_four_window",
      "item:mcwwindows:stripped_crimson_stem_four_window",
      8,
      [
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_crimson_stem",
          "item:mcwwindows:window_centre_bar_base",
        ],
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_crimson_stem_window",
      "item:mcwwindows:stripped_crimson_stem_window",
      8,
      [
        ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
        ["item:mcwwindows:window_base", "item:minecraft:stripped_crimson_stem", "item:mcwwindows:window_base"],
        ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_crimson_stem_window2",
      "item:mcwwindows:stripped_crimson_stem_window2",
      8,
      [
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
        ],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_crimson_stem",
          "item:mcwwindows:window_centre_bar_base",
        ],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_dark_oak_log_four_window",
      "item:mcwwindows:stripped_dark_oak_log_four_window",
      8,
      [
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_dark_oak_log",
          "item:mcwwindows:window_centre_bar_base",
        ],
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_dark_oak_log_window",
      "item:mcwwindows:stripped_dark_oak_log_window",
      8,
      [
        ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
        ["item:mcwwindows:window_base", "item:minecraft:stripped_dark_oak_log", "item:mcwwindows:window_base"],
        ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_dark_oak_log_window2",
      "item:mcwwindows:stripped_dark_oak_log_window2",
      8,
      [
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
        ],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_dark_oak_log",
          "item:mcwwindows:window_centre_bar_base",
        ],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stripped_dark_oak_wood", "item:minecraft:stripped_dark_oak_wood", 3, [
      ["item:minecraft:stripped_dark_oak_log", "item:minecraft:stripped_dark_oak_log"],
      ["item:minecraft:stripped_dark_oak_log", "item:minecraft:stripped_dark_oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_jungle_log_four_window",
      "item:mcwwindows:stripped_jungle_log_four_window",
      8,
      [
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_jungle_log",
          "item:mcwwindows:window_centre_bar_base",
        ],
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:stripped_jungle_log_window", "item:mcwwindows:stripped_jungle_log_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:stripped_jungle_log", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_jungle_log_window2",
      "item:mcwwindows:stripped_jungle_log_window2",
      8,
      [
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
        ],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_jungle_log",
          "item:mcwwindows:window_centre_bar_base",
        ],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stripped_jungle_wood", "item:minecraft:stripped_jungle_wood", 3, [
      ["item:minecraft:stripped_jungle_log", "item:minecraft:stripped_jungle_log"],
      ["item:minecraft:stripped_jungle_log", "item:minecraft:stripped_jungle_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_oak_log_four_window",
      "item:mcwwindows:stripped_oak_log_four_window",
      8,
      [
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_oak_log",
          "item:mcwwindows:window_centre_bar_base",
        ],
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:stripped_oak_log_window", "item:mcwwindows:stripped_oak_log_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:stripped_oak_log", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:stripped_oak_log_window2", "item:mcwwindows:stripped_oak_log_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:stripped_oak_log",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stripped_oak_wood", "item:minecraft:stripped_oak_wood", 3, [
      ["item:minecraft:stripped_oak_log", "item:minecraft:stripped_oak_log"],
      ["item:minecraft:stripped_oak_log", "item:minecraft:stripped_oak_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_spruce_log_four_window",
      "item:mcwwindows:stripped_spruce_log_four_window",
      8,
      [
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_spruce_log",
          "item:mcwwindows:window_centre_bar_base",
        ],
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:stripped_spruce_log_window", "item:mcwwindows:stripped_spruce_log_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:stripped_spruce_log", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_spruce_log_window2",
      "item:mcwwindows:stripped_spruce_log_window2",
      8,
      [
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
        ],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_spruce_log",
          "item:mcwwindows:window_centre_bar_base",
        ],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stripped_spruce_wood", "item:minecraft:stripped_spruce_wood", 3, [
      ["item:minecraft:stripped_spruce_log", "item:minecraft:stripped_spruce_log"],
      ["item:minecraft:stripped_spruce_log", "item:minecraft:stripped_spruce_log"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:stripped_warped_hyphae", "item:minecraft:stripped_warped_hyphae", 3, [
      ["item:minecraft:stripped_warped_stem", "item:minecraft:stripped_warped_stem"],
      ["item:minecraft:stripped_warped_stem", "item:minecraft:stripped_warped_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_warped_stem_four_window",
      "item:mcwwindows:stripped_warped_stem_four_window",
      8,
      [
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_warped_stem",
          "item:mcwwindows:window_centre_bar_base",
        ],
        ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_warped_stem_window",
      "item:mcwwindows:stripped_warped_stem_window",
      8,
      [
        ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
        ["item:mcwwindows:window_base", "item:minecraft:stripped_warped_stem", "item:mcwwindows:window_base"],
        ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwwindows:stripped_warped_stem_window2",
      "item:mcwwindows:stripped_warped_stem_window2",
      8,
      [
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
        ],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:minecraft:stripped_warped_stem",
          "item:mcwwindows:window_centre_bar_base",
        ],
        [
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
          "item:mcwwindows:window_centre_bar_base",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:sweet_berry_cheesecake", "item:farmersdelight:sweet_berry_cheesecake", 1, [
      ["item:minecraft:sweet_berries", "item:minecraft:sweet_berries", "item:minecraft:sweet_berries"],
      ["item:minecraft:sweet_berries", "item:minecraft:sweet_berries", "item:minecraft:sweet_berries"],
      ["tag:items:c:milk", "item:farmersdelight:pie_crust", "tag:items:c:milk"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "farmersdelight:sweet_berry_cheesecake_from_slices",
      "item:farmersdelight:sweet_berry_cheesecake",
      1,
      [
        ["item:farmersdelight:sweet_berry_cheesecake_slice", "item:farmersdelight:sweet_berry_cheesecake_slice"],
        ["item:farmersdelight:sweet_berry_cheesecake_slice", "item:farmersdelight:sweet_berry_cheesecake_slice"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:target", "item:minecraft:target", 1, [
      ["", "item:minecraft:redstone", ""],
      ["item:minecraft:redstone", "item:minecraft:hay_block", "item:minecraft:redstone"],
      ["", "item:minecraft:redstone", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:tatami", "item:farmersdelight:tatami", 2, [
      ["item:farmersdelight:canvas", "item:farmersdelight:straw"],
      ["item:farmersdelight:straw", "item:farmersdelight:canvas"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:thatch_attic_roof", "item:mcwroofs:thatch_attic_roof", 2, [
      ["", "item:minecraft:hay_block"],
      ["item:minecraft:hay_block", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:thatch_lower_roof", "item:mcwroofs:thatch_lower_roof", 4, [
      ["", "item:minecraft:hay_block", "item:minecraft:hay_block"],
      ["item:minecraft:hay_block", "item:minecraft:hay_block", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:thatch_roof", "item:mcwroofs:thatch_roof", 2, [
      ["", "item:minecraft:hay_block"],
      ["item:minecraft:hay_block", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:thatch_steep_roof", "item:mcwroofs:thatch_steep_roof", 4, [
      ["", "item:minecraft:hay_block"],
      ["item:minecraft:hay_block", "item:minecraft:hay_block"],
      ["item:minecraft:hay_block", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:thatch_top_roof", "item:mcwroofs:thatch_top_roof", 2, [
      ["item:minecraft:hay_block", "item:minecraft:stick", "item:minecraft:hay_block"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:thatch_upper_lower_roof", "item:mcwroofs:thatch_upper_lower_roof", 3, [
      ["", "", "item:minecraft:hay_block"],
      ["item:minecraft:hay_block", "item:minecraft:hay_block", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:thatch_upper_steep_roof", "item:mcwroofs:thatch_upper_steep_roof", 3, [
      ["", "item:minecraft:hay_block"],
      ["", "item:minecraft:hay_block"],
      ["item:minecraft:hay_block", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:tiled_glass_pane", "item:create:tiled_glass_pane", 16, [
      ["item:create:tiled_glass", "item:create:tiled_glass", "item:create:tiled_glass"],
      ["item:create:tiled_glass", "item:create:tiled_glass", "item:create:tiled_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:tinted_glass", "item:minecraft:tinted_glass", 2, [
      ["", "item:minecraft:amethyst_shard", ""],
      ["item:minecraft:amethyst_shard", "item:minecraft:glass", "item:minecraft:amethyst_shard"],
      ["", "item:minecraft:amethyst_shard", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:tnt", "item:minecraft:tnt", 1, [
      ["item:minecraft:gunpowder", "item:minecraft:sand|item:minecraft:red_sand", "item:minecraft:gunpowder"],
      [
        "item:minecraft:sand|item:minecraft:red_sand",
        "item:minecraft:gunpowder",
        "item:minecraft:sand|item:minecraft:red_sand",
      ],
      ["item:minecraft:gunpowder", "item:minecraft:sand|item:minecraft:red_sand", "item:minecraft:gunpowder"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:tnt_minecart", "item:minecraft:tnt_minecart", 1, [
      ["item:minecraft:tnt"],
      ["item:minecraft:minecart"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:tomato_crate", "item:farmersdelight:tomato_crate", 1, [
      ["item:farmersdelight:tomato", "item:farmersdelight:tomato", "item:farmersdelight:tomato"],
      ["item:farmersdelight:tomato", "item:farmersdelight:tomato", "item:farmersdelight:tomato"],
      ["item:farmersdelight:tomato", "item:farmersdelight:tomato", "item:farmersdelight:tomato"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:torch", "item:minecraft:torch", 4, [
      ["item:minecraft:coal|item:minecraft:charcoal"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:tripwire_hook", "item:minecraft:tripwire_hook", 2, [
      ["item:minecraft:iron_ingot"],
      ["item:minecraft:stick"],
      ["tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:turtle_helmet", "item:minecraft:turtle_helmet", 1, [
      ["item:minecraft:scute", "item:minecraft:scute", "item:minecraft:scute"],
      ["item:minecraft:scute", "", "item:minecraft:scute"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:vertical_framed_glass_pane", "item:create:vertical_framed_glass_pane", 16, [
      ["item:create:vertical_framed_glass", "item:create:vertical_framed_glass", "item:create:vertical_framed_glass"],
      ["item:create:vertical_framed_glass", "item:create:vertical_framed_glass", "item:create:vertical_framed_glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:warped_attic_roof", "item:mcwroofs:warped_attic_roof", 2, [
      ["", "item:minecraft:warped_stem"],
      ["item:minecraft:warped_stem", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:warped_bamboo_trapdoor", "item:mcwtrpdoors:warped_bamboo_trapdoor", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwtrpdoors:print_bamboo"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:warped_bark_trapdoor", "item:mcwtrpdoors:warped_bark_trapdoor", 2, [
      ["item:minecraft:warped_stem", "item:minecraft:glass_pane", "item:minecraft:warped_stem"],
      ["item:minecraft:warped_stem", "item:minecraft:glass_pane", "item:minecraft:warped_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_barn_door", "item:mcwdoors:warped_barn_door", 2, [
      ["item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_barn_glass_door", "item:mcwdoors:warped_barn_glass_door", 3, [
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:warped_barn_trapdoor", "item:mcwtrpdoors:warped_barn_trapdoor", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwtrpdoors:warped_glass_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:warped_barred_trapdoor", "item:mcwtrpdoors:warped_barred_trapdoor", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwtrpdoors:print_barred"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_beach_door", "item:mcwdoors:warped_beach_door", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwdoors:print_jungle"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:warped_beach_trapdoor", "item:mcwtrpdoors:warped_beach_trapdoor", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwtrpdoors:print_beach"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:warped_blinds", "item:mcwwindows:warped_blinds", 3, [
      ["item:minecraft:warped_slab", "item:minecraft:warped_slab", "item:minecraft:warped_slab"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:warped_bridge_pier", "item:mcwbridges:warped_bridge_pier", 3, [
      ["item:minecraft:warped_stem", "item:minecraft:warped_fence", "item:minecraft:warped_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:warped_cabinet", "item:farmersdelight:warped_cabinet", 1, [
      ["item:minecraft:warped_slab", "item:minecraft:warped_slab", "item:minecraft:warped_slab"],
      ["item:minecraft:warped_trapdoor", "", "item:minecraft:warped_trapdoor"],
      ["item:minecraft:warped_slab", "item:minecraft:warped_slab", "item:minecraft:warped_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_classic_door", "item:mcwdoors:warped_classic_door", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwdoors:print_oak"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:warped_classic_trapdoor", "item:mcwtrpdoors:warped_classic_trapdoor", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwtrpdoors:print_classic"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_cottage_door", "item:mcwdoors:warped_cottage_door", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwdoors:print_spruce"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:warped_cottage_trapdoor", "item:mcwtrpdoors:warped_cottage_trapdoor", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwtrpdoors:print_cottage"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:warped_door", "item:minecraft:warped_door", 3, [
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:warped_fence", "item:minecraft:warped_fence", 3, [
      ["item:minecraft:warped_planks", "item:minecraft:stick", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:stick", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:warped_fence_gate", "item:minecraft:warped_fence_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:warped_planks", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:warped_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_four_panel_door", "item:mcwdoors:warped_four_panel_door", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwdoors:print_dark_oak"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwtrpdoors:warped_four_panel_trapdoor",
      "item:mcwtrpdoors:warped_four_panel_trapdoor",
      1,
      [["item:minecraft:warped_planks"], ["item:mcwtrpdoors:print_four_panel"], ["item:minecraft:warped_planks"]]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:warped_fungus_on_a_stick", "item:minecraft:warped_fungus_on_a_stick", 1, [
      ["item:minecraft:fishing_rod", ""],
      ["", "item:minecraft:warped_fungus"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_glass_door", "item:mcwdoors:warped_glass_door", 3, [
      ["item:minecraft:warped_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ["item:minecraft:warped_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:warped_glass_trapdoor", "item:mcwtrpdoors:warped_glass_trapdoor", 2, [
      ["item:minecraft:warped_planks", "item:minecraft:glass_pane", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:glass_pane", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:warped_highley_gate", "item:mcwfences:warped_highley_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:warped_stem", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:warped_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:warped_horse_fence", "item:mcwfences:warped_horse_fence", 3, [
      ["item:minecraft:warped_stem", "item:minecraft:stick", "item:minecraft:warped_stem"],
      ["item:minecraft:stick", "item:minecraft:warped_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:warped_hyphae", "item:minecraft:warped_hyphae", 3, [
      ["item:minecraft:warped_stem", "item:minecraft:warped_stem"],
      ["item:minecraft:warped_stem", "item:minecraft:warped_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_japanese2_door", "item:mcwdoors:warped_japanese2_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:warped_slab", "item:minecraft:warped_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_japanese_door", "item:mcwdoors:warped_japanese_door", 3, [
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:warped_log_bridge_middle", "item:mcwbridges:warped_log_bridge_middle", 4, [
      ["item:minecraft:warped_fence", "", "item:minecraft:warped_fence"],
      ["item:minecraft:warped_slab", "item:minecraft:warped_slab", "item:minecraft:warped_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:warped_log_bridge_stair", "item:mcwbridges:warped_log_bridge_stair", 6, [
      ["", "", "item:mcwbridges:warped_log_bridge_middle"],
      ["", "item:mcwbridges:warped_log_bridge_middle", "item:mcwbridges:warped_log_bridge_middle"],
      [
        "item:mcwbridges:warped_log_bridge_middle",
        "item:mcwbridges:warped_log_bridge_middle",
        "item:mcwbridges:warped_log_bridge_middle",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:warped_louvered_shutter", "item:mcwwindows:warped_louvered_shutter", 3, [
      ["item:minecraft:warped_slab"],
      ["item:minecraft:warped_slab"],
      ["item:minecraft:warped_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:warped_lower_roof", "item:mcwroofs:warped_lower_roof", 4, [
      ["", "item:minecraft:warped_stem", "item:minecraft:warped_stem"],
      ["item:minecraft:warped_stem", "item:minecraft:warped_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_modern_door", "item:mcwdoors:warped_modern_door", 3, [
      ["item:minecraft:warped_planks", "item:minecraft:glass_pane"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:glass_pane"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_mystic_door", "item:mcwdoors:warped_paper_door", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwdoors:print_mystic"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_nether_door", "item:mcwdoors:warped_nether_door", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwdoors:print_nether"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_paper_door", "item:mcwdoors:warped_paper_door", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwdoors:print_birch"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:warped_paper_trapdoor", "item:mcwtrpdoors:warped_paper_trapdoor", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwtrpdoors:print_paper"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:warped_picket_fence", "item:mcwfences:warped_picket_fence", 3, [
      ["item:minecraft:warped_stem", "item:minecraft:warped_planks", "item:minecraft:warped_stem"],
      ["item:minecraft:warped_stem", "item:minecraft:stick", "item:minecraft:warped_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:warped_plank_parapet", "item:mcwwindows:warped_plank_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:warped_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:warped_planks_attic_roof", "item:mcwroofs:warped_planks_attic_roof", 2, [
      ["", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:warped_planks_four_window", "item:mcwwindows:warped_planks_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:warped_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:warped_planks_lower_roof", "item:mcwroofs:warped_planks_lower_roof", 4, [
      ["", "item:minecraft:warped_planks", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwpaths:warped_planks_path", "item:mcwpaths:warped_planks_path", 6, [
      ["item:minecraft:warped_slab", "item:minecraft:warped_slab"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:warped_planks_roof", "item:mcwroofs:warped_planks_roof", 2, [
      ["", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:warped_planks_steep_roof", "item:mcwroofs:warped_planks_steep_roof", 4, [
      ["", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:warped_planks_top_roof", "item:mcwroofs:warped_planks_top_roof", 2, [
      ["item:minecraft:warped_planks", "item:minecraft:stick", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:warped_planks_upper_lower_roof",
      "item:mcwroofs:warped_planks_upper_lower_roof",
      3,
      [
        ["", "", "item:minecraft:warped_planks"],
        ["item:minecraft:warped_planks", "item:minecraft:warped_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "mcwroofs:warped_planks_upper_steep_roof",
      "item:mcwroofs:warped_planks_upper_steep_roof",
      3,
      [
        ["", "item:minecraft:warped_planks"],
        ["", "item:minecraft:warped_planks"],
        ["item:minecraft:warped_planks", "item:minecraft:stick"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:warped_planks_window", "item:mcwwindows:warped_planks_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:warped_planks", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:warped_planks_window2", "item:mcwwindows:warped_planks_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:warped_planks",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:warped_pressure_plate", "item:minecraft:warped_pressure_plate", 1, [
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:warped_pyramid_gate", "item:mcwfences:warped_pyramid_gate", 1, [
      ["item:minecraft:stick", "item:minecraft:warped_stem", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:warped_planks", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:warped_rail_bridge", "item:mcwbridges:warped_rail_bridge", 4, [
      ["item:minecraft:warped_fence", "", "item:minecraft:warped_fence"],
      ["item:minecraft:warped_fence", "item:minecraft:warped_slab", "item:minecraft:warped_fence"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:warped_ranch_trapdoor", "item:mcwtrpdoors:warped_ranch_trapdoor", 2, [
      ["item:minecraft:warped_stem", "item:minecraft:stick", "item:minecraft:warped_stem"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:warped_stem", "item:minecraft:stick", "item:minecraft:warped_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:warped_roof", "item:mcwroofs:warped_roof", 2, [
      ["", "item:minecraft:warped_stem"],
      ["item:minecraft:warped_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwbridges:warped_rope_bridge_stair", "item:mcwbridges:warped_rope_bridge_stair", 6, [
      ["", "", "item:mcwbridges:rope_warped_bridge"],
      ["", "item:mcwbridges:rope_warped_bridge", "item:mcwbridges:rope_warped_bridge"],
      [
        "item:mcwbridges:rope_warped_bridge",
        "item:mcwbridges:rope_warped_bridge",
        "item:mcwbridges:rope_warped_bridge",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:warped_shutter", "item:mcwwindows:warped_shutter", 3, [
      ["item:minecraft:warped_trapdoor"],
      ["item:minecraft:warped_trapdoor"],
      ["item:minecraft:warped_trapdoor"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:warped_sign", "item:minecraft:warped_sign", 3, [
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks", "item:minecraft:warped_planks"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:warped_slab", "item:minecraft:warped_slab", 6, [
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_stable_door", "item:mcwdoors:warped_stable_door", 3, [
      ["item:minecraft:iron_bars", "item:minecraft:iron_bars"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_stable_head_door", "item:mcwdoors:warped_stable_head_door", 1, [
      ["item:mcwdoors:warped_stable_door"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:warped_stairs", "item:minecraft:warped_stairs", 4, [
      ["item:minecraft:warped_planks", "", ""],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks", ""],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:warped_steep_roof", "item:mcwroofs:warped_steep_roof", 4, [
      ["", "item:minecraft:warped_stem"],
      ["item:minecraft:warped_stem", "item:minecraft:warped_stem"],
      ["item:minecraft:warped_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:warped_stem_four_window", "item:mcwwindows:warped_stem_four_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:warped_stem",
        "item:mcwwindows:window_centre_bar_base",
      ],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_centre_bar_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_stem_glass_door", "item:mcwdoors:warped_stem_glass_door", 3, [
      ["item:minecraft:warped_stem", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:warped_stem", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:warped_stem_parapet", "item:mcwwindows:warped_stem_parapet", 5, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:warped_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:warped_stem_window", "item:mcwwindows:warped_stem_window", 8, [
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:minecraft:warped_stem", "item:mcwwindows:window_base"],
      ["item:mcwwindows:window_base", "item:mcwwindows:window_base", "item:mcwwindows:window_base"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:warped_stem_window2", "item:mcwwindows:warped_stem_window2", 8, [
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:minecraft:warped_stem",
        "item:mcwwindows:window_centre_bar_base",
      ],
      [
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
        "item:mcwwindows:window_centre_bar_base",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:warped_stockade_fence", "item:mcwfences:warped_stockade_fence", 3, [
      ["item:minecraft:warped_stem", "item:minecraft:warped_planks", "item:minecraft:warped_stem"],
      ["item:minecraft:warped_stem", "item:minecraft:warped_planks", "item:minecraft:warped_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_swamp_door", "item:mcwdoors:warped_swamp_door", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwdoors:print_swamp"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:warped_swamp_trapdoor", "item:mcwtrpdoors:warped_swamp_trapdoor", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwtrpdoors:print_swamp"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:warped_top_roof", "item:mcwroofs:warped_top_roof", 2, [
      ["item:minecraft:warped_stem", "item:minecraft:stick", "item:minecraft:warped_stem"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:warped_trapdoor", "item:minecraft:warped_trapdoor", 2, [
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_tropical_door", "item:mcwdoors:warped_tropical_door", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwdoors:print_acacia"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwtrpdoors:warped_tropical_trapdoor", "item:mcwtrpdoors:warped_tropical_trapdoor", 1, [
      ["item:minecraft:warped_planks"],
      ["item:mcwtrpdoors:print_tropical"],
      ["item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:warped_upper_lower_roof", "item:mcwroofs:warped_upper_lower_roof", 3, [
      ["", "", "item:minecraft:warped_stem"],
      ["item:minecraft:warped_stem", "item:minecraft:warped_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:warped_upper_steep_roof", "item:mcwroofs:warped_upper_steep_roof", 3, [
      ["", "item:minecraft:warped_stem"],
      ["", "item:minecraft:warped_stem"],
      ["item:minecraft:warped_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwdoors:warped_western_door", "item:mcwdoors:warped_western_door", 3, [
      ["", "", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_slab", "item:minecraft:warped_planks"],
      ["item:minecraft:warped_planks", "item:minecraft:warped_planks", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:warped_window", "item:create:warped_window", 2, [
      ["", "item:minecraft:warped_planks", ""],
      ["item:minecraft:warped_planks", "tag:items:c:glass/colorless", "item:minecraft:warped_planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:warped_window_pane", "item:create:warped_window_pane", 16, [
      ["item:create:warped_window", "item:create:warped_window", "item:create:warped_window"],
      ["item:create:warped_window", "item:create:warped_window", "item:create:warped_window"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwfences:warped_wired_fence", "item:mcwfences:warped_wired_fence", 3, [
      ["item:minecraft:stick", "item:minecraft:iron_bars", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:warped_stem", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:waxed_cut_copper", "item:minecraft:waxed_cut_copper", 4, [
      ["item:minecraft:waxed_copper_block", "item:minecraft:waxed_copper_block"],
      ["item:minecraft:waxed_copper_block", "item:minecraft:waxed_copper_block"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:waxed_cut_copper_slab", "item:minecraft:waxed_cut_copper_slab", 6, [
      ["item:minecraft:waxed_cut_copper", "item:minecraft:waxed_cut_copper", "item:minecraft:waxed_cut_copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:waxed_cut_copper_stairs", "item:minecraft:waxed_cut_copper_stairs", 4, [
      ["item:minecraft:waxed_cut_copper", "", ""],
      ["item:minecraft:waxed_cut_copper", "item:minecraft:waxed_cut_copper", ""],
      ["item:minecraft:waxed_cut_copper", "item:minecraft:waxed_cut_copper", "item:minecraft:waxed_cut_copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:waxed_exposed_cut_copper", "item:minecraft:waxed_exposed_cut_copper", 4, [
      ["item:minecraft:waxed_exposed_copper", "item:minecraft:waxed_exposed_copper"],
      ["item:minecraft:waxed_exposed_copper", "item:minecraft:waxed_exposed_copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:waxed_exposed_cut_copper_slab",
      "item:minecraft:waxed_exposed_cut_copper_slab",
      6,
      [
        [
          "item:minecraft:waxed_exposed_cut_copper",
          "item:minecraft:waxed_exposed_cut_copper",
          "item:minecraft:waxed_exposed_cut_copper",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:waxed_exposed_cut_copper_stairs",
      "item:minecraft:waxed_exposed_cut_copper_stairs",
      4,
      [
        ["item:minecraft:waxed_exposed_cut_copper", "", ""],
        ["item:minecraft:waxed_exposed_cut_copper", "item:minecraft:waxed_exposed_cut_copper", ""],
        [
          "item:minecraft:waxed_exposed_cut_copper",
          "item:minecraft:waxed_exposed_cut_copper",
          "item:minecraft:waxed_exposed_cut_copper",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:waxed_oxidized_cut_copper", "item:minecraft:waxed_oxidized_cut_copper", 4, [
      ["item:minecraft:waxed_oxidized_copper", "item:minecraft:waxed_oxidized_copper"],
      ["item:minecraft:waxed_oxidized_copper", "item:minecraft:waxed_oxidized_copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:waxed_oxidized_cut_copper_slab",
      "item:minecraft:waxed_oxidized_cut_copper_slab",
      6,
      [
        [
          "item:minecraft:waxed_oxidized_cut_copper",
          "item:minecraft:waxed_oxidized_cut_copper",
          "item:minecraft:waxed_oxidized_cut_copper",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:waxed_oxidized_cut_copper_stairs",
      "item:minecraft:waxed_oxidized_cut_copper_stairs",
      4,
      [
        ["item:minecraft:waxed_oxidized_cut_copper", "", ""],
        ["item:minecraft:waxed_oxidized_cut_copper", "item:minecraft:waxed_oxidized_cut_copper", ""],
        [
          "item:minecraft:waxed_oxidized_cut_copper",
          "item:minecraft:waxed_oxidized_cut_copper",
          "item:minecraft:waxed_oxidized_cut_copper",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:waxed_weathered_cut_copper", "item:minecraft:waxed_weathered_cut_copper", 4, [
      ["item:minecraft:waxed_weathered_copper", "item:minecraft:waxed_weathered_copper"],
      ["item:minecraft:waxed_weathered_copper", "item:minecraft:waxed_weathered_copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:waxed_weathered_cut_copper_slab",
      "item:minecraft:waxed_weathered_cut_copper_slab",
      6,
      [
        [
          "item:minecraft:waxed_weathered_cut_copper",
          "item:minecraft:waxed_weathered_cut_copper",
          "item:minecraft:waxed_weathered_cut_copper",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:waxed_weathered_cut_copper_stairs",
      "item:minecraft:waxed_weathered_cut_copper_stairs",
      4,
      [
        ["item:minecraft:waxed_weathered_cut_copper", "", ""],
        ["item:minecraft:waxed_weathered_cut_copper", "item:minecraft:waxed_weathered_cut_copper", ""],
        [
          "item:minecraft:waxed_weathered_cut_copper",
          "item:minecraft:waxed_weathered_cut_copper",
          "item:minecraft:waxed_weathered_cut_copper",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("create:weathered_copper_shingle_slab", "item:create:weathered_copper_shingle_slab", 6, [
      [
        "item:create:weathered_copper_shingles",
        "item:create:weathered_copper_shingles",
        "item:create:weathered_copper_shingles",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "create:weathered_copper_shingle_stairs",
      "item:create:weathered_copper_shingle_stairs",
      4,
      [
        ["item:create:weathered_copper_shingles", "", ""],
        ["item:create:weathered_copper_shingles", "item:create:weathered_copper_shingles", ""],
        [
          "item:create:weathered_copper_shingles",
          "item:create:weathered_copper_shingles",
          "item:create:weathered_copper_shingles",
        ],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("create:weathered_copper_tile_slab", "item:create:weathered_copper_tile_slab", 6, [
      [
        "item:create:weathered_copper_tiles",
        "item:create:weathered_copper_tiles",
        "item:create:weathered_copper_tiles",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("create:weathered_copper_tile_stairs", "item:create:weathered_copper_tile_stairs", 4, [
      ["item:create:weathered_copper_tiles", "", ""],
      ["item:create:weathered_copper_tiles", "item:create:weathered_copper_tiles", ""],
      [
        "item:create:weathered_copper_tiles",
        "item:create:weathered_copper_tiles",
        "item:create:weathered_copper_tiles",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:weathered_cut_copper", "item:minecraft:weathered_cut_copper", 4, [
      ["item:minecraft:weathered_copper", "item:minecraft:weathered_copper"],
      ["item:minecraft:weathered_copper", "item:minecraft:weathered_copper"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:weathered_cut_copper_slab", "item:minecraft:weathered_cut_copper_slab", 6, [
      [
        "item:minecraft:weathered_cut_copper",
        "item:minecraft:weathered_cut_copper",
        "item:minecraft:weathered_cut_copper",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:weathered_cut_copper_stairs", "item:minecraft:weathered_cut_copper_stairs", 4, [
      ["item:minecraft:weathered_cut_copper", "", ""],
      ["item:minecraft:weathered_cut_copper", "item:minecraft:weathered_cut_copper", ""],
      [
        "item:minecraft:weathered_cut_copper",
        "item:minecraft:weathered_cut_copper",
        "item:minecraft:weathered_cut_copper",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("farmersdelight:wheat_dough", "item:farmersdelight:wheat_dough", 3, [
      ["item:minecraft:wheat", "item:minecraft:wheat", "item:minecraft:wheat"],
      ["", "item:minecraft:water_bucket", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:white_banner", "item:minecraft:white_banner", 1, [
      ["item:minecraft:white_wool", "item:minecraft:white_wool", "item:minecraft:white_wool"],
      ["item:minecraft:white_wool", "item:minecraft:white_wool", "item:minecraft:white_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:white_bed", "item:minecraft:white_bed", 1, [
      ["item:minecraft:white_wool", "item:minecraft:white_wool", "item:minecraft:white_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:white_carpet", "item:minecraft:white_carpet", 3, [
      ["item:minecraft:white_wool", "item:minecraft:white_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:white_curtain", "item:mcwwindows:white_curtain", 3, [
      ["item:minecraft:white_wool"],
      ["item:minecraft:white_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:white_mosaic_glass", "item:mcwwindows:white_mosaic_glass", 8, [
      [
        "item:minecraft:white_stained_glass",
        "item:minecraft:white_stained_glass",
        "item:minecraft:white_stained_glass",
      ],
      ["item:minecraft:white_stained_glass", "item:minecraft:white_dye", "item:minecraft:white_stained_glass"],
      [
        "item:minecraft:white_stained_glass",
        "item:minecraft:white_stained_glass",
        "item:minecraft:white_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:white_mosaic_glass_pane", "item:mcwwindows:white_mosaic_glass_pane", 16, [
      [
        "item:mcwwindows:white_mosaic_glass",
        "item:mcwwindows:white_mosaic_glass",
        "item:mcwwindows:white_mosaic_glass",
      ],
      [
        "item:mcwwindows:white_mosaic_glass",
        "item:mcwwindows:white_mosaic_glass",
        "item:mcwwindows:white_mosaic_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:white_stained_glass", "item:minecraft:white_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:white_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:white_stained_glass_pane", "item:minecraft:white_stained_glass_pane", 16, [
      [
        "item:minecraft:white_stained_glass",
        "item:minecraft:white_stained_glass",
        "item:minecraft:white_stained_glass",
      ],
      [
        "item:minecraft:white_stained_glass",
        "item:minecraft:white_stained_glass",
        "item:minecraft:white_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:white_stained_glass_pane_from_glass_pane",
      "item:minecraft:white_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:white_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:white_terracotta", "item:minecraft:white_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:white_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:white_wool_from_string", "item:minecraft:white_wool", 1, [
      ["item:minecraft:string", "item:minecraft:string"],
      ["item:minecraft:string", "item:minecraft:string"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:window_base", "item:mcwwindows:window_base", 4, [
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:glass_pane", "item:minecraft:stick"],
      ["item:minecraft:stick", "item:minecraft:stick", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:window_centre_bar_base", "item:mcwwindows:window_centre_bar_base", 2, [
      ["", "item:minecraft:stick", ""],
      ["item:minecraft:stick", "item:mcwwindows:window_base", "item:minecraft:stick"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:wired_modem", "item:computercraft:wired_modem", 1, [
      ["tag:items:c:stones", "tag:items:c:stones", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:redstone_dusts", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:stones", "tag:items:c:stones"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:wireless_modem_advanced", "item:computercraft:wireless_modem_advanced", 1, [
      ["tag:items:c:gold_ingots", "tag:items:c:gold_ingots", "tag:items:c:gold_ingots"],
      ["tag:items:c:gold_ingots", "item:minecraft:ender_eye", "tag:items:c:gold_ingots"],
      ["tag:items:c:gold_ingots", "tag:items:c:gold_ingots", "tag:items:c:gold_ingots"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:wireless_modem_normal", "item:computercraft:wireless_modem_normal", 1, [
      ["tag:items:c:stones", "tag:items:c:stones", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:ender_pearls", "tag:items:c:stones"],
      ["tag:items:c:stones", "tag:items:c:stones", "tag:items:c:stones"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("betteranimalsplus:wolf_cape_arctic", "item:betteranimalsplus:wolf_cape_arctic", 1, [
      ["item:betteranimalsplus:wolf_pelt_arctic", "", "item:betteranimalsplus:wolf_pelt_arctic"],
      [
        "item:betteranimalsplus:wolf_pelt_arctic",
        "item:betteranimalsplus:wolf_pelt_arctic",
        "item:betteranimalsplus:wolf_pelt_arctic",
      ],
      ["", "item:betteranimalsplus:wolf_pelt_arctic", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("betteranimalsplus:wolf_cape_black", "item:betteranimalsplus:wolf_cape_black", 1, [
      ["item:betteranimalsplus:wolf_pelt_black", "", "item:betteranimalsplus:wolf_pelt_black"],
      [
        "item:betteranimalsplus:wolf_pelt_black",
        "item:betteranimalsplus:wolf_pelt_black",
        "item:betteranimalsplus:wolf_pelt_black",
      ],
      ["", "item:betteranimalsplus:wolf_pelt_black", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("betteranimalsplus:wolf_cape_brown", "item:betteranimalsplus:wolf_cape_brown", 1, [
      ["item:betteranimalsplus:wolf_pelt_brown", "", "item:betteranimalsplus:wolf_pelt_brown"],
      [
        "item:betteranimalsplus:wolf_pelt_brown",
        "item:betteranimalsplus:wolf_pelt_brown",
        "item:betteranimalsplus:wolf_pelt_brown",
      ],
      ["", "item:betteranimalsplus:wolf_pelt_brown", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("betteranimalsplus:wolf_cape_classic", "item:betteranimalsplus:wolf_cape_classic", 1, [
      ["item:betteranimalsplus:wolf_pelt_snowy", "", "item:betteranimalsplus:wolf_pelt_snowy"],
      [
        "item:betteranimalsplus:wolf_pelt_snowy",
        "item:betteranimalsplus:wolf_pelt_snowy",
        "item:betteranimalsplus:wolf_pelt_snowy",
      ],
      ["", "item:betteranimalsplus:wolf_pelt_snowy", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("betteranimalsplus:wolf_cape_red", "item:betteranimalsplus:wolf_cape_red", 1, [
      ["item:betteranimalsplus:wolf_pelt_red", "", "item:betteranimalsplus:wolf_pelt_red"],
      [
        "item:betteranimalsplus:wolf_pelt_red",
        "item:betteranimalsplus:wolf_pelt_red",
        "item:betteranimalsplus:wolf_pelt_red",
      ],
      ["", "item:betteranimalsplus:wolf_pelt_red", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("betteranimalsplus:wolf_cape_timber", "item:betteranimalsplus:wolf_cape_timber", 1, [
      ["item:betteranimalsplus:wolf_pelt_timber", "", "item:betteranimalsplus:wolf_pelt_timber"],
      [
        "item:betteranimalsplus:wolf_pelt_timber",
        "item:betteranimalsplus:wolf_pelt_timber",
        "item:betteranimalsplus:wolf_pelt_timber",
      ],
      ["", "item:betteranimalsplus:wolf_pelt_timber", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:wooden_axe", "item:minecraft:wooden_axe", 1, [
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "item:minecraft:stick"],
      ["", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:wooden_hoe", "item:minecraft:wooden_hoe", 1, [
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["", "item:minecraft:stick"],
      ["", "item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:wooden_pickaxe", "item:minecraft:wooden_pickaxe", 1, [
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["", "item:minecraft:stick", ""],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:wooden_shovel", "item:minecraft:wooden_shovel", 1, [
      ["tag:items:minecraft:planks"],
      ["item:minecraft:stick"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:wooden_sword", "item:minecraft:wooden_sword", 1, [
      ["tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks"],
      ["item:minecraft:stick"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("chiselsandbits:wrench", "item:chiselsandbits:wrench", 1, [
      ["", "tag:items:minecraft:planks", "item:chiselsandbits:block_bit"],
      ["", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
      ["tag:items:minecraft:planks", "", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:yellow_banner", "item:minecraft:yellow_banner", 1, [
      ["item:minecraft:yellow_wool", "item:minecraft:yellow_wool", "item:minecraft:yellow_wool"],
      ["item:minecraft:yellow_wool", "item:minecraft:yellow_wool", "item:minecraft:yellow_wool"],
      ["", "item:minecraft:stick", ""],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:yellow_bed", "item:minecraft:yellow_bed", 1, [
      ["item:minecraft:yellow_wool", "item:minecraft:yellow_wool", "item:minecraft:yellow_wool"],
      ["tag:items:minecraft:planks", "tag:items:minecraft:planks", "tag:items:minecraft:planks"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:yellow_carpet", "item:minecraft:yellow_carpet", 3, [
      ["item:minecraft:yellow_wool", "item:minecraft:yellow_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:yellow_carpet_from_white_carpet", "item:minecraft:yellow_carpet", 8, [
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:yellow_dye", "item:minecraft:white_carpet"],
      ["item:minecraft:white_carpet", "item:minecraft:white_carpet", "item:minecraft:white_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:yellow_curtain", "item:mcwwindows:yellow_curtain", 3, [
      ["item:minecraft:yellow_wool"],
      ["item:minecraft:yellow_wool"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:yellow_mosaic_glass", "item:mcwwindows:yellow_mosaic_glass", 8, [
      [
        "item:minecraft:yellow_stained_glass",
        "item:minecraft:yellow_stained_glass",
        "item:minecraft:yellow_stained_glass",
      ],
      ["item:minecraft:yellow_stained_glass", "item:minecraft:yellow_dye", "item:minecraft:yellow_stained_glass"],
      [
        "item:minecraft:yellow_stained_glass",
        "item:minecraft:yellow_stained_glass",
        "item:minecraft:yellow_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("mcwwindows:yellow_mosaic_glass_pane", "item:mcwwindows:yellow_mosaic_glass_pane", 16, [
      [
        "item:mcwwindows:yellow_mosaic_glass",
        "item:mcwwindows:yellow_mosaic_glass",
        "item:mcwwindows:yellow_mosaic_glass",
      ],
      [
        "item:mcwwindows:yellow_mosaic_glass",
        "item:mcwwindows:yellow_mosaic_glass",
        "item:mcwwindows:yellow_mosaic_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:yellow_stained_glass", "item:minecraft:yellow_stained_glass", 8, [
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:yellow_dye", "item:minecraft:glass"],
      ["item:minecraft:glass", "item:minecraft:glass", "item:minecraft:glass"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:yellow_stained_glass_pane", "item:minecraft:yellow_stained_glass_pane", 16, [
      [
        "item:minecraft:yellow_stained_glass",
        "item:minecraft:yellow_stained_glass",
        "item:minecraft:yellow_stained_glass",
      ],
      [
        "item:minecraft:yellow_stained_glass",
        "item:minecraft:yellow_stained_glass",
        "item:minecraft:yellow_stained_glass",
      ],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe(
      "minecraft:yellow_stained_glass_pane_from_glass_pane",
      "item:minecraft:yellow_stained_glass_pane",
      8,
      [
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:yellow_dye", "item:minecraft:glass_pane"],
        ["item:minecraft:glass_pane", "item:minecraft:glass_pane", "item:minecraft:glass_pane"],
      ]
    )
  );
  manager.add(
    new ShapedCraftingRecipe("mcwroofs:yellow_striped_awning", "item:mcwroofs:yellow_striped_awning", 1, [
      ["item:minecraft:yellow_carpet", "item:minecraft:white_carpet", "item:minecraft:yellow_carpet"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:yellow_terracotta", "item:minecraft:yellow_terracotta", 8, [
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:yellow_dye", "item:minecraft:terracotta"],
      ["item:minecraft:terracotta", "item:minecraft:terracotta", "item:minecraft:terracotta"],
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:acacia_button", "item:minecraft:acacia_button", 1, [
      "item:minecraft:acacia_planks",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:acacia_log_bridge_stair_recycle",
      "item:mcwbridges:acacia_log_bridge_middle",
      1,
      ["item:mcwbridges:acacia_log_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:acacia_planks", "item:minecraft:acacia_planks", 4, [
      "tag:items:minecraft:acacia_logs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:acacia_rope_bridge_stair_recycle",
      "item:mcwbridges:rope_acacia_bridge",
      1,
      ["item:mcwbridges:acacia_rope_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:andesite", "item:minecraft:andesite", 2, [
      "item:minecraft:diorite",
      "item:minecraft:cobblestone",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("betteranimalsplus:antler_bonemeal", "item:minecraft:bone_meal", 3, [
      "item:betteranimalsplus:antler",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:bacon_and_eggs", "item:farmersdelight:bacon_and_eggs", 1, [
      "item:farmersdelight:cooked_bacon",
      "item:farmersdelight:cooked_bacon",
      "item:minecraft:bowl",
      "tag:items:c:cooked_eggs",
      "tag:items:c:cooked_eggs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:bacon_sandwich", "item:farmersdelight:bacon_sandwich", 1, [
      "tag:items:c:bread",
      "tag:items:c:cooked_bacon",
      "tag:items:c:salad_ingredients",
      "tag:items:c:crops/tomato",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("mcwbridges:bamboo_bridge_stair_recycle", "item:mcwbridges:bamboo_bridge", 1, [
      "item:mcwbridges:bamboo_bridge_stair",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:barbecue_stick", "item:farmersdelight:barbecue_stick", 1, [
      "tag:items:c:crops/tomato",
      "tag:items:c:crops/onion",
      "tag:items:c:cooked_beef|tag:items:c:cooked_pork|tag:items:c:cooked_chicken|tag:items:c:cooked_mutton|tag:items:c:cooked_fishes|item:minecraft:cooked_rabbit",
      "item:minecraft:stick",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("betteranimalsplus:bear_skin_black_wool", "item:minecraft:black_wool", 1, [
      "item:betteranimalsplus:bear_skin_black",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("betteranimalsplus:bear_skin_brown_wool", "item:minecraft:brown_wool", 1, [
      "item:betteranimalsplus:bear_skin_brown",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("betteranimalsplus:bear_skin_kermode_wool", "item:minecraft:white_wool", 1, [
      "item:betteranimalsplus:bear_skin_kermode",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:beetroot_from_crate", "item:minecraft:beetroot", 9, [
      "item:farmersdelight:beetroot_crate",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:beetroot_soup", "item:minecraft:beetroot_soup", 1, [
      "item:minecraft:bowl",
      "item:minecraft:beetroot",
      "item:minecraft:beetroot",
      "item:minecraft:beetroot",
      "item:minecraft:beetroot",
      "item:minecraft:beetroot",
      "item:minecraft:beetroot",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:birch_button", "item:minecraft:birch_button", 1, [
      "item:minecraft:birch_planks",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:birch_log_bridge_stair_recycle",
      "item:mcwbridges:birch_log_bridge_middle",
      1,
      ["item:mcwbridges:birch_log_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:birch_planks", "item:minecraft:birch_planks", 4, [
      "tag:items:minecraft:birch_logs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("mcwbridges:birch_rope_bridge_stair_recycle", "item:mcwbridges:rope_birch_bridge", 1, [
      "item:mcwbridges:birch_rope_bridge_stair",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:black_bed_from_white_bed", "item:minecraft:black_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:black_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:black_candle", "item:minecraft:black_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:black_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:black_canvas_sign", "item:farmersdelight:black_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:black_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:black_concrete_powder", "item:minecraft:black_concrete_powder", 8, [
      "item:minecraft:black_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:black_dye", "item:minecraft:black_dye", 1, ["item:minecraft:ink_sac"])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:black_dye_from_wither_rose", "item:minecraft:black_dye", 1, [
      "item:minecraft:wither_rose",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:black_wool", "item:minecraft:black_wool", 1, [
      "item:minecraft:black_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("mcwbridges:blackstone_bridge_stair_recycle", "item:mcwbridges:blackstone_bridge", 1, [
      "item:mcwbridges:blackstone_bridge_stair",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:blaze_powder", "item:minecraft:blaze_powder", 2, [
      "item:minecraft:blaze_rod",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:blue_bed_from_white_bed", "item:minecraft:blue_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:blue_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:blue_candle", "item:minecraft:blue_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:blue_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:blue_canvas_sign", "item:farmersdelight:blue_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:blue_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:blue_concrete_powder", "item:minecraft:blue_concrete_powder", 8, [
      "item:minecraft:blue_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:blue_dye", "item:minecraft:blue_dye", 1, ["item:minecraft:lapis_lazuli"])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:blue_dye_from_cornflower", "item:minecraft:blue_dye", 1, [
      "item:minecraft:cornflower",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:blue_wool", "item:minecraft:blue_wool", 1, [
      "item:minecraft:blue_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:bone_meal", "item:minecraft:bone_meal", 3, ["item:minecraft:bone"])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:bone_meal_from_bone_block", "item:minecraft:bone_meal", 9, [
      "item:minecraft:bone_block",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:book", "item:minecraft:book", 1, [
      "item:minecraft:paper",
      "item:minecraft:paper",
      "item:minecraft:paper",
      "item:minecraft:leather",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:book_from_canvas", "item:minecraft:book", 1, [
      "item:minecraft:paper",
      "item:minecraft:paper",
      "item:minecraft:paper",
      "item:farmersdelight:canvas",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("mcwbridges:brick_bridge_stair_recycle", "item:mcwbridges:brick_bridge", 1, [
      "item:mcwbridges:brick_bridge_stair",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:brown_bed_from_white_bed", "item:minecraft:brown_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:brown_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:brown_candle", "item:minecraft:brown_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:brown_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:brown_canvas_sign", "item:farmersdelight:brown_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:brown_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:brown_concrete_powder", "item:minecraft:brown_concrete_powder", 8, [
      "item:minecraft:brown_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:brown_dye", "item:minecraft:brown_dye", 1, ["item:minecraft:cocoa_beans"])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:brown_wool", "item:minecraft:brown_wool", 1, [
      "item:minecraft:brown_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:cabbage", "item:farmersdelight:cabbage", 9, [
      "item:farmersdelight:cabbage_crate",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:cabbage_from_leaves", "item:farmersdelight:cabbage", 1, [
      "item:farmersdelight:cabbage_leaf",
      "item:farmersdelight:cabbage_leaf",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:cake_from_slices", "item:minecraft:cake", 1, [
      "item:farmersdelight:cake_slice",
      "item:farmersdelight:cake_slice",
      "item:farmersdelight:cake_slice",
      "item:farmersdelight:cake_slice",
      "item:farmersdelight:cake_slice",
      "item:farmersdelight:cake_slice",
      "item:farmersdelight:cake_slice",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:canvas_from_canvas_rug", "item:farmersdelight:canvas", 1, [
      "item:farmersdelight:canvas_rug",
      "item:farmersdelight:canvas_rug",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:canvas_rug", "item:farmersdelight:canvas_rug", 2, [
      "item:farmersdelight:canvas",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:carrot_from_crate", "item:minecraft:carrot", 9, [
      "item:farmersdelight:carrot_crate",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:chicken_sandwich", "item:farmersdelight:chicken_sandwich", 1, [
      "tag:items:c:bread",
      "tag:items:c:cooked_chicken",
      "tag:items:c:salad_ingredients",
      "item:minecraft:carrot",
    ])
  );
  manager.add(new ShapelessCraftingRecipe("minecraft:coal", "item:minecraft:coal", 9, ["item:minecraft:coal_block"]));
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:cod_roll", "item:farmersdelight:cod_roll", 2, [
      "item:farmersdelight:cod_slice",
      "item:farmersdelight:cod_slice",
      "item:farmersdelight:cooked_rice",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:copper_ingot", "item:minecraft:copper_ingot", 9, [
      "item:minecraft:copper_block",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:copper_ingot_from_waxed_copper_block", "item:minecraft:copper_ingot", 9, [
      "item:minecraft:waxed_copper_block",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/appliances/crafting_blueprint", "item:create:crafting_blueprint", 1, [
      "item:minecraft:painting",
      "item:minecraft:crafting_table",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/appliances/dough", "item:create:dough", 1, [
      "tag:items:c:flour/wheat",
      "item:minecraft:water_bucket",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/appliances/slime_ball", "item:minecraft:slime_ball", 1, [
      "item:create:dough",
      "tag:items:c:lime_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/appliances/tree_fertilizer", "item:create:tree_fertilizer", 2, [
      "tag:items:minecraft:small_flowers",
      "tag:items:minecraft:small_flowers",
      "item:minecraft:horn_coral|item:minecraft:brain_coral|item:minecraft:tube_coral|item:minecraft:bubble_coral|item:minecraft:fire_coral",
      "item:minecraft:bone_meal",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_copper_shingle_slab_from_honeycomb",
      "item:create:waxed_copper_shingle_slab",
      1,
      ["item:create:copper_shingle_slab", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_copper_shingle_stairs_from_honeycomb",
      "item:create:waxed_copper_shingle_stairs",
      1,
      ["item:create:copper_shingle_stairs", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_copper_shingles_from_honeycomb",
      "item:create:waxed_copper_shingles",
      1,
      ["item:create:copper_shingles", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_copper_tile_slab_from_honeycomb",
      "item:create:waxed_copper_tile_slab",
      1,
      ["item:create:copper_tile_slab", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_copper_tile_stairs_from_honeycomb",
      "item:create:waxed_copper_tile_stairs",
      1,
      ["item:create:copper_tile_stairs", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_copper_tiles_from_honeycomb",
      "item:create:waxed_copper_tiles",
      1,
      ["item:create:copper_tiles", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_exposed_copper_shingle_slab_from_honeycomb",
      "item:create:waxed_exposed_copper_shingle_slab",
      1,
      ["item:create:exposed_copper_shingle_slab", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_exposed_copper_shingle_stairs_from_honeycomb",
      "item:create:waxed_exposed_copper_shingle_stairs",
      1,
      ["item:create:exposed_copper_shingle_stairs", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_exposed_copper_shingles_from_honeycomb",
      "item:create:waxed_exposed_copper_shingles",
      1,
      ["item:create:exposed_copper_shingles", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_exposed_copper_tile_slab_from_honeycomb",
      "item:create:waxed_exposed_copper_tile_slab",
      1,
      ["item:create:exposed_copper_tile_slab", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_exposed_copper_tile_stairs_from_honeycomb",
      "item:create:waxed_exposed_copper_tile_stairs",
      1,
      ["item:create:exposed_copper_tile_stairs", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_exposed_copper_tiles_from_honeycomb",
      "item:create:waxed_exposed_copper_tiles",
      1,
      ["item:create:exposed_copper_tiles", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_oxidized_copper_shingle_slab_from_honeycomb",
      "item:create:waxed_oxidized_copper_shingle_slab",
      1,
      ["item:create:oxidized_copper_shingle_slab", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_oxidized_copper_shingle_stairs_from_honeycomb",
      "item:create:waxed_oxidized_copper_shingle_stairs",
      1,
      ["item:create:oxidized_copper_shingle_stairs", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_oxidized_copper_shingles_from_honeycomb",
      "item:create:waxed_oxidized_copper_shingles",
      1,
      ["item:create:oxidized_copper_shingles", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_oxidized_copper_tile_slab_from_honeycomb",
      "item:create:waxed_oxidized_copper_tile_slab",
      1,
      ["item:create:oxidized_copper_tile_slab", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_oxidized_copper_tile_stairs_from_honeycomb",
      "item:create:waxed_oxidized_copper_tile_stairs",
      1,
      ["item:create:oxidized_copper_tile_stairs", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_oxidized_copper_tiles_from_honeycomb",
      "item:create:waxed_oxidized_copper_tiles",
      1,
      ["item:create:oxidized_copper_tiles", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_weathered_copper_shingle_slab_from_honeycomb",
      "item:create:waxed_weathered_copper_shingle_slab",
      1,
      ["item:create:weathered_copper_shingle_slab", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_weathered_copper_shingle_stairs_from_honeycomb",
      "item:create:waxed_weathered_copper_shingle_stairs",
      1,
      ["item:create:weathered_copper_shingle_stairs", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_weathered_copper_shingles_from_honeycomb",
      "item:create:waxed_weathered_copper_shingles",
      1,
      ["item:create:weathered_copper_shingles", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_weathered_copper_tile_slab_from_honeycomb",
      "item:create:waxed_weathered_copper_tile_slab",
      1,
      ["item:create:weathered_copper_tile_slab", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_weathered_copper_tile_stairs_from_honeycomb",
      "item:create:waxed_weathered_copper_tile_stairs",
      1,
      ["item:create:weathered_copper_tile_stairs", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/copper/waxed_weathered_copper_tiles_from_honeycomb",
      "item:create:waxed_weathered_copper_tiles",
      1,
      ["item:create:weathered_copper_tiles", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/adjustable_chain_gearshift",
      "item:create:adjustable_chain_gearshift",
      1,
      ["item:create:encased_chain_drive", "item:create:electron_tube"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/black_seat", "item:create:black_seat", 1, [
      "item:minecraft:black_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/black_seat_from_other_seat", "item:create:black_seat", 1, [
      "tag:items:c:black_dyes",
      "tag:items:create:seats",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/black_valve_handle_from_other_valve_handle",
      "item:create:black_valve_handle",
      1,
      ["tag:items:c:black_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/blue_seat", "item:create:blue_seat", 1, [
      "item:minecraft:blue_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/blue_seat_from_other_seat", "item:create:blue_seat", 1, [
      "tag:items:c:blue_dyes",
      "tag:items:create:seats",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/blue_valve_handle_from_other_valve_handle",
      "item:create:blue_valve_handle",
      1,
      ["tag:items:c:blue_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/brown_seat", "item:create:brown_seat", 1, [
      "item:minecraft:brown_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/brown_seat_from_other_seat", "item:create:brown_seat", 1, [
      "tag:items:c:brown_dyes",
      "tag:items:create:seats",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/brown_valve_handle_from_other_valve_handle",
      "item:create:brown_valve_handle",
      1,
      ["tag:items:c:brown_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/clutch", "item:create:clutch", 1, [
      "item:create:andesite_casing",
      "item:create:shaft",
      "tag:items:c:dusts/redstone",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/cogwheel", "item:create:cogwheel", 1, [
      "item:create:shaft",
      "tag:items:minecraft:planks",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/copper_valve_handle_from_others",
      "item:create:copper_valve_handle",
      1,
      ["tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/cyan_seat", "item:create:cyan_seat", 1, [
      "item:minecraft:cyan_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/cyan_seat_from_other_seat", "item:create:cyan_seat", 1, [
      "tag:items:c:cyan_dyes",
      "tag:items:create:seats",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/cyan_valve_handle_from_other_valve_handle",
      "item:create:cyan_valve_handle",
      1,
      ["tag:items:c:cyan_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/depot", "item:create:depot", 1, [
      "item:create:andesite_alloy",
      "item:create:andesite_casing",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/encased_chain_drive", "item:create:encased_chain_drive", 1, [
      "item:create:andesite_casing",
      "tag:items:c:nuggets/iron",
      "tag:items:c:nuggets/iron",
      "tag:items:c:nuggets/iron",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/fluid_valve", "item:create:fluid_valve", 1, [
      "tag:items:c:plates/iron",
      "item:create:fluid_pipe",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/framed_glass_door", "item:create:framed_glass_door", 1, [
      "tag:items:minecraft:wooden_doors",
      "item:create:framed_glass",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/framed_glass_trapdoor",
      "item:create:framed_glass_trapdoor",
      1,
      ["tag:items:minecraft:wooden_trapdoors", "item:create:framed_glass"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/furnace_minecart_from_contraption_cart",
      "item:minecraft:furnace_minecart",
      1,
      ["item:create:furnace_minecart_contraption"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/gearboxfrom_conversion", "item:create:gearbox", 1, [
      "item:create:vertical_gearbox",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/gearshift", "item:create:gearshift", 1, [
      "item:create:andesite_casing",
      "item:create:cogwheel",
      "tag:items:c:dusts/redstone",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/gray_seat", "item:create:gray_seat", 1, [
      "item:minecraft:gray_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/gray_seat_from_other_seat", "item:create:gray_seat", 1, [
      "tag:items:c:gray_dyes",
      "tag:items:create:seats",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/gray_valve_handle_from_other_valve_handle",
      "item:create:gray_valve_handle",
      1,
      ["tag:items:c:gray_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/green_seat", "item:create:green_seat", 1, [
      "item:minecraft:green_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/green_seat_from_other_seat", "item:create:green_seat", 1, [
      "tag:items:c:green_dyes",
      "tag:items:create:seats",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/green_valve_handle_from_other_valve_handle",
      "item:create:green_valve_handle",
      1,
      ["tag:items:c:green_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/large_cogwheel", "item:create:large_cogwheel", 1, [
      "item:create:shaft",
      "tag:items:minecraft:planks",
      "tag:items:minecraft:planks",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/large_cogwheelfrom_little", "item:create:large_cogwheel", 1, [
      "item:create:cogwheel",
      "tag:items:minecraft:planks",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/light_blue_seat", "item:create:light_blue_seat", 1, [
      "item:minecraft:light_blue_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/light_blue_seat_from_other_seat",
      "item:create:light_blue_seat",
      1,
      ["tag:items:c:light_blue_dyes", "tag:items:create:seats"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/light_blue_valve_handle_from_other_valve_handle",
      "item:create:light_blue_valve_handle",
      1,
      ["tag:items:c:light_blue_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/light_gray_seat", "item:create:light_gray_seat", 1, [
      "item:minecraft:light_gray_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/light_gray_seat_from_other_seat",
      "item:create:light_gray_seat",
      1,
      ["tag:items:c:light_gray_dyes", "tag:items:create:seats"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/light_gray_valve_handle_from_other_valve_handle",
      "item:create:light_gray_valve_handle",
      1,
      ["tag:items:c:light_gray_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/lime_seat", "item:create:lime_seat", 1, [
      "item:minecraft:lime_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/lime_seat_from_other_seat", "item:create:lime_seat", 1, [
      "tag:items:c:lime_dyes",
      "tag:items:create:seats",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/lime_valve_handle_from_other_valve_handle",
      "item:create:lime_valve_handle",
      1,
      ["tag:items:c:lime_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/linear_chassisfrom_conversion",
      "item:create:linear_chassis",
      1,
      ["item:create:secondary_linear_chassis"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/magenta_seat", "item:create:magenta_seat", 1, [
      "item:minecraft:magenta_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/magenta_seat_from_other_seat",
      "item:create:magenta_seat",
      1,
      ["tag:items:c:magenta_dyes", "tag:items:create:seats"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/magenta_valve_handle_from_other_valve_handle",
      "item:create:magenta_valve_handle",
      1,
      ["tag:items:c:magenta_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/mechanical_pump", "item:create:mechanical_pump", 1, [
      "item:create:cogwheel",
      "item:create:fluid_pipe",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/minecart_from_contraption_cart",
      "item:minecraft:minecart",
      1,
      ["item:create:minecart_contraption"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/nixie_tube", "item:create:nixie_tube", 4, [
      "item:create:electron_tube",
      "item:create:electron_tube",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/orange_seat", "item:create:orange_seat", 1, [
      "item:minecraft:orange_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/orange_seat_from_other_seat", "item:create:orange_seat", 1, [
      "tag:items:c:orange_dyes",
      "tag:items:create:seats",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/orange_valve_handle_from_other_valve_handle",
      "item:create:orange_valve_handle",
      1,
      ["tag:items:c:orange_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/pink_seat", "item:create:pink_seat", 1, [
      "item:minecraft:pink_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/pink_seat_from_other_seat", "item:create:pink_seat", 1, [
      "tag:items:c:pink_dyes",
      "tag:items:create:seats",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/pink_valve_handle_from_other_valve_handle",
      "item:create:pink_valve_handle",
      1,
      ["tag:items:c:pink_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/placard", "item:create:placard", 1, [
      "item:minecraft:item_frame",
      "tag:items:c:plates/brass",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/portable_fluid_interface",
      "item:create:portable_fluid_interface",
      1,
      ["item:create:copper_casing", "item:create:chute"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/portable_storage_interface",
      "item:create:portable_storage_interface",
      1,
      ["item:create:andesite_casing", "item:create:chute"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/purple_seat", "item:create:purple_seat", 1, [
      "item:minecraft:purple_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/purple_seat_from_other_seat", "item:create:purple_seat", 1, [
      "tag:items:c:purple_dyes",
      "tag:items:create:seats",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/purple_valve_handle_from_other_valve_handle",
      "item:create:purple_valve_handle",
      1,
      ["tag:items:c:purple_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/red_seat", "item:create:red_seat", 1, [
      "item:minecraft:red_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/red_seat_from_other_seat", "item:create:red_seat", 1, [
      "tag:items:c:red_dyes",
      "tag:items:create:seats",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/red_valve_handle_from_other_valve_handle",
      "item:create:red_valve_handle",
      1,
      ["tag:items:c:red_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/rose_quartz_lamp", "item:create:rose_quartz_lamp", 1, [
      "item:create:polished_rose_quartz",
      "tag:items:c:dusts/redstone",
      "tag:items:c:ingots/zinc",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/sail_framefrom_conversion", "item:create:sail_frame", 1, [
      "item:create:white_sail",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/schedule", "item:create:schedule", 4, [
      "tag:items:c:plates/obsidian",
      "item:minecraft:paper",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/secondary_linear_chassisfrom_conversion",
      "item:create:secondary_linear_chassis",
      1,
      ["item:create:linear_chassis"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/sequenced_gearshift", "item:create:sequenced_gearshift", 1, [
      "item:create:brass_casing",
      "item:create:cogwheel",
      "item:create:electron_tube",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/speedometerfrom_conversion", "item:create:speedometer", 1, [
      "item:create:stressometer",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/stressometerfrom_conversion", "item:create:stressometer", 1, [
      "item:create:speedometer",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/track_observer", "item:create:track_observer", 2, [
      "item:create:railway_casing",
      "tag:items:minecraft:wooden_pressure_plates",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/track_observer_from_other_plates",
      "item:create:track_observer",
      2,
      [
        "item:create:railway_casing",
        "item:minecraft:stone_pressure_plate|item:minecraft:polished_blackstone_pressure_plate|item:minecraft:heavy_weighted_pressure_plate|item:minecraft:light_weighted_pressure_plate",
      ]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/track_signal", "item:create:track_signal", 4, [
      "item:create:railway_casing",
      "item:create:electron_tube",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/track_station", "item:create:track_station", 2, [
      "item:create:railway_casing",
      "item:minecraft:compass",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/train_door", "item:create:train_door", 1, [
      "tag:items:minecraft:wooden_doors",
      "tag:items:c:plates/brass",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/train_trapdoor", "item:create:train_trapdoor", 1, [
      "tag:items:minecraft:wooden_trapdoors",
      "tag:items:c:plates/brass",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/vertical_gearboxfrom_conversion",
      "item:create:vertical_gearbox",
      1,
      ["item:create:gearbox"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/white_sailfrom_conversion", "item:create:white_sail", 1, [
      "item:create:sail_frame",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/white_seat", "item:create:white_seat", 1, [
      "item:minecraft:white_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/white_seat_from_other_seat", "item:create:white_seat", 1, [
      "tag:items:c:white_dyes",
      "tag:items:create:seats",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/white_valve_handle_from_other_valve_handle",
      "item:create:white_valve_handle",
      1,
      ["tag:items:c:white_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/yellow_seat", "item:create:yellow_seat", 1, [
      "item:minecraft:yellow_wool",
      "tag:items:minecraft:wooden_slabs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/kinetics/yellow_seat_from_other_seat", "item:create:yellow_seat", 1, [
      "tag:items:c:yellow_dyes",
      "tag:items:create:seats",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/kinetics/yellow_valve_handle_from_other_valve_handle",
      "item:create:yellow_valve_handle",
      1,
      ["tag:items:c:yellow_dyes", "tag:items:create:valve_handles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/logistics/content_observerfrom_conversion",
      "item:create:content_observer",
      1,
      ["item:create:stockpile_switch"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/logistics/stockpile_switchfrom_conversion",
      "item:create:stockpile_switch",
      1,
      ["item:create:content_observer"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/materials/brass_ingot_from_decompacting",
      "item:create:brass_ingot",
      9,
      ["tag:items:c:storage_blocks/brass"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/materials/brass_nugget_from_decompacting",
      "item:create:brass_nugget",
      9,
      ["tag:items:c:ingots/brass"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/materials/copper_nugget", "item:create:copper_nugget", 9, [
      "item:minecraft:copper_ingot",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/materials/raw_zinc", "item:create:raw_zinc", 9, [
      "item:create:raw_zinc_block",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/materials/red_sand_paper", "item:create:red_sand_paper", 1, [
      "item:minecraft:paper",
      "tag:items:c:sand/red",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/materials/rose_quartz", "item:create:rose_quartz", 1, [
      "tag:items:c:gems/quartz",
      "tag:items:c:dusts/redstone",
      "tag:items:c:dusts/redstone",
      "tag:items:c:dusts/redstone",
      "tag:items:c:dusts/redstone",
      "tag:items:c:dusts/redstone",
      "tag:items:c:dusts/redstone",
      "tag:items:c:dusts/redstone",
      "tag:items:c:dusts/redstone",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/materials/rose_quartz_tilesfrom_conversion",
      "item:create:rose_quartz_tiles",
      1,
      ["item:create:small_rose_quartz_tiles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/materials/sand_paper", "item:create:sand_paper", 1, [
      "item:minecraft:paper",
      "tag:items:c:sand/colorless",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/materials/small_rose_quartz_tilesfrom_conversion",
      "item:create:small_rose_quartz_tiles",
      1,
      ["item:create:rose_quartz_tiles"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/materials/zinc_ingot_from_decompacting", "item:create:zinc_ingot", 9, [
      "tag:items:c:storage_blocks/zinc",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/materials/zinc_nugget_from_decompacting",
      "item:create:zinc_nugget",
      9,
      ["tag:items:c:ingots/zinc"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:crafting/schematics/empty_schematic", "item:create:empty_schematic", 1, [
      "item:minecraft:paper",
      "tag:items:c:light_blue_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:crafting/schematics/schematic_and_quill",
      "item:create:schematic_and_quill",
      1,
      ["item:create:empty_schematic", "tag:items:c:feathers"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:creeper_banner_pattern", "item:minecraft:creeper_banner_pattern", 1, [
      "item:minecraft:paper",
      "item:minecraft:creeper_head",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:crimson_button", "item:minecraft:crimson_button", 1, [
      "item:minecraft:crimson_planks",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:crimson_log_bridge_stair_recycle",
      "item:mcwbridges:crimson_log_bridge_middle",
      1,
      ["item:mcwbridges:crimson_log_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:crimson_planks", "item:minecraft:crimson_planks", 4, [
      "tag:items:minecraft:crimson_stems",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:crimson_rope_bridge_stair_recycle",
      "item:mcwbridges:rope_crimson_bridge",
      1,
      ["item:mcwbridges:crimson_rope_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_andesite_brick_slab_recycling", "item:create:cut_andesite_bricks", 1, [
      "item:create:cut_andesite_brick_slab",
      "item:create:cut_andesite_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_andesite_slab_recycling", "item:create:cut_andesite", 1, [
      "item:create:cut_andesite_slab",
      "item:create:cut_andesite_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_asurine_brick_slab_recycling", "item:create:cut_asurine_bricks", 1, [
      "item:create:cut_asurine_brick_slab",
      "item:create:cut_asurine_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_asurine_slab_recycling", "item:create:cut_asurine", 1, [
      "item:create:cut_asurine_slab",
      "item:create:cut_asurine_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_calcite_brick_slab_recycling", "item:create:cut_calcite_bricks", 1, [
      "item:create:cut_calcite_brick_slab",
      "item:create:cut_calcite_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_calcite_slab_recycling", "item:create:cut_calcite", 1, [
      "item:create:cut_calcite_slab",
      "item:create:cut_calcite_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_crimsite_brick_slab_recycling", "item:create:cut_crimsite_bricks", 1, [
      "item:create:cut_crimsite_brick_slab",
      "item:create:cut_crimsite_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_crimsite_slab_recycling", "item:create:cut_crimsite", 1, [
      "item:create:cut_crimsite_slab",
      "item:create:cut_crimsite_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_deepslate_brick_slab_recycling", "item:create:cut_deepslate_bricks", 1, [
      "item:create:cut_deepslate_brick_slab",
      "item:create:cut_deepslate_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_deepslate_slab_recycling", "item:create:cut_deepslate", 1, [
      "item:create:cut_deepslate_slab",
      "item:create:cut_deepslate_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_diorite_brick_slab_recycling", "item:create:cut_diorite_bricks", 1, [
      "item:create:cut_diorite_brick_slab",
      "item:create:cut_diorite_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_diorite_slab_recycling", "item:create:cut_diorite", 1, [
      "item:create:cut_diorite_slab",
      "item:create:cut_diorite_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_dripstone_brick_slab_recycling", "item:create:cut_dripstone_bricks", 1, [
      "item:create:cut_dripstone_brick_slab",
      "item:create:cut_dripstone_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_dripstone_slab_recycling", "item:create:cut_dripstone", 1, [
      "item:create:cut_dripstone_slab",
      "item:create:cut_dripstone_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_granite_brick_slab_recycling", "item:create:cut_granite_bricks", 1, [
      "item:create:cut_granite_brick_slab",
      "item:create:cut_granite_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_granite_slab_recycling", "item:create:cut_granite", 1, [
      "item:create:cut_granite_slab",
      "item:create:cut_granite_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_limestone_brick_slab_recycling", "item:create:cut_limestone_bricks", 1, [
      "item:create:cut_limestone_brick_slab",
      "item:create:cut_limestone_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_limestone_slab_recycling", "item:create:cut_limestone", 1, [
      "item:create:cut_limestone_slab",
      "item:create:cut_limestone_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_ochrum_brick_slab_recycling", "item:create:cut_ochrum_bricks", 1, [
      "item:create:cut_ochrum_brick_slab",
      "item:create:cut_ochrum_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_ochrum_slab_recycling", "item:create:cut_ochrum", 1, [
      "item:create:cut_ochrum_slab",
      "item:create:cut_ochrum_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_scorchia_brick_slab_recycling", "item:create:cut_scorchia_bricks", 1, [
      "item:create:cut_scorchia_brick_slab",
      "item:create:cut_scorchia_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_scorchia_slab_recycling", "item:create:cut_scorchia", 1, [
      "item:create:cut_scorchia_slab",
      "item:create:cut_scorchia_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_scoria_brick_slab_recycling", "item:create:cut_scoria_bricks", 1, [
      "item:create:cut_scoria_brick_slab",
      "item:create:cut_scoria_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_scoria_slab_recycling", "item:create:cut_scoria", 1, [
      "item:create:cut_scoria_slab",
      "item:create:cut_scoria_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_tuff_brick_slab_recycling", "item:create:cut_tuff_bricks", 1, [
      "item:create:cut_tuff_brick_slab",
      "item:create:cut_tuff_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_tuff_slab_recycling", "item:create:cut_tuff", 1, [
      "item:create:cut_tuff_slab",
      "item:create:cut_tuff_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_veridium_brick_slab_recycling", "item:create:cut_veridium_bricks", 1, [
      "item:create:cut_veridium_brick_slab",
      "item:create:cut_veridium_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:cut_veridium_slab_recycling", "item:create:cut_veridium", 1, [
      "item:create:cut_veridium_slab",
      "item:create:cut_veridium_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:cyan_bed_from_white_bed", "item:minecraft:cyan_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:cyan_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:cyan_candle", "item:minecraft:cyan_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:cyan_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:cyan_canvas_sign", "item:farmersdelight:cyan_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:cyan_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:cyan_concrete_powder", "item:minecraft:cyan_concrete_powder", 8, [
      "item:minecraft:cyan_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:cyan_dye", "item:minecraft:cyan_dye", 2, [
      "item:minecraft:blue_dye",
      "item:minecraft:green_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:cyan_wool", "item:minecraft:cyan_wool", 1, [
      "item:minecraft:cyan_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:dark_oak_button", "item:minecraft:dark_oak_button", 1, [
      "item:minecraft:dark_oak_planks",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:dark_oak_log_bridge_stair_recycle",
      "item:mcwbridges:dark_oak_log_bridge_middle",
      1,
      ["item:mcwbridges:dark_oak_log_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:dark_oak_planks", "item:minecraft:dark_oak_planks", 4, [
      "tag:items:minecraft:dark_oak_logs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:dark_oak_rope_bridge_stair_recycle",
      "item:mcwbridges:rope_dark_oak_bridge",
      1,
      ["item:mcwbridges:dark_oak_rope_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:deepslate_brick_bridge_stair_recycle",
      "item:mcwbridges:deepslate_brick_bridge",
      1,
      ["item:mcwbridges:deepslate_brick_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:deepslate_tile_bridge_stair_recycle",
      "item:mcwbridges:deepslate_tile_bridge",
      1,
      ["item:mcwbridges:deepslate_tile_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:diamond", "item:minecraft:diamond", 9, ["item:minecraft:diamond_block"])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:dried_kelp", "item:minecraft:dried_kelp", 9, [
      "item:minecraft:dried_kelp_block",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("mcwbridges:dry_bamboo_bridge_stair_recycle", "item:mcwbridges:dry_bamboo_bridge", 1, [
      "item:mcwbridges:dry_bamboo_bridge_stair",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:egg_sandwich", "item:farmersdelight:egg_sandwich", 1, [
      "tag:items:c:bread",
      "tag:items:c:cooked_eggs",
      "tag:items:c:cooked_eggs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:emerald", "item:minecraft:emerald", 9, ["item:minecraft:emerald_block"])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:ender_eye", "item:minecraft:ender_eye", 1, [
      "item:minecraft:ender_pearl",
      "item:minecraft:blaze_powder",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:fermented_spider_eye", "item:minecraft:fermented_spider_eye", 1, [
      "item:minecraft:spider_eye",
      "item:minecraft:brown_mushroom",
      "item:minecraft:sugar",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:fire_charge", "item:minecraft:fire_charge", 3, [
      "item:minecraft:gunpowder",
      "item:minecraft:blaze_powder",
      "item:minecraft:coal|item:minecraft:charcoal",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:firework_rocket_simple", "item:minecraft:firework_rocket", 3, [
      "item:minecraft:gunpowder",
      "item:minecraft:paper",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:flint_and_steel", "item:minecraft:flint_and_steel", 1, [
      "item:minecraft:iron_ingot",
      "item:minecraft:flint",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:flower_banner_pattern", "item:minecraft:flower_banner_pattern", 1, [
      "item:minecraft:paper",
      "item:minecraft:oxeye_daisy",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:fruit_salad", "item:farmersdelight:fruit_salad", 1, [
      "item:minecraft:apple",
      "item:minecraft:melon_slice",
      "item:minecraft:melon_slice",
      "tag:items:c:berries",
      "tag:items:c:berries",
      "item:farmersdelight:pumpkin_slice",
      "item:minecraft:bowl",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:full_tatami_mat", "item:farmersdelight:full_tatami_mat", 2, [
      "item:farmersdelight:tatami",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "farmersdelight:full_tatami_mat_from_halves",
      "item:farmersdelight:full_tatami_mat",
      1,
      ["item:farmersdelight:half_tatami_mat", "item:farmersdelight:half_tatami_mat"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:glow_item_frame", "item:minecraft:glow_item_frame", 1, [
      "item:minecraft:item_frame",
      "item:minecraft:glow_ink_sac",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:gold_ingot_from_gold_block", "item:minecraft:gold_ingot", 9, [
      "item:minecraft:gold_block",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:gold_nugget", "item:minecraft:gold_nugget", 9, ["item:minecraft:gold_ingot"])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:granite", "item:minecraft:granite", 1, [
      "item:minecraft:diorite",
      "item:minecraft:quartz",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:gray_bed_from_white_bed", "item:minecraft:gray_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:gray_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:gray_candle", "item:minecraft:gray_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:gray_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:gray_canvas_sign", "item:farmersdelight:gray_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:gray_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:gray_concrete_powder", "item:minecraft:gray_concrete_powder", 8, [
      "item:minecraft:gray_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:gray_dye", "item:minecraft:gray_dye", 2, [
      "item:minecraft:black_dye",
      "item:minecraft:white_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:gray_wool", "item:minecraft:gray_wool", 1, [
      "item:minecraft:gray_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:green_bed_from_white_bed", "item:minecraft:green_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:green_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:green_candle", "item:minecraft:green_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:green_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:green_canvas_sign", "item:farmersdelight:green_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:green_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:green_concrete_powder", "item:minecraft:green_concrete_powder", 8, [
      "item:minecraft:green_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:green_wool", "item:minecraft:green_wool", 1, [
      "item:minecraft:green_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:grilled_salmon", "item:farmersdelight:grilled_salmon", 1, [
      "tag:items:c:cooked_fishes/salmon",
      "item:minecraft:sweet_berries",
      "item:minecraft:bowl",
      "tag:items:c:crops/cabbage",
      "tag:items:c:crops/onion",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:half_tatami_mat", "item:farmersdelight:half_tatami_mat", 2, [
      "item:farmersdelight:full_tatami_mat",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:hamburger", "item:farmersdelight:hamburger", 1, [
      "tag:items:c:bread",
      "item:farmersdelight:beef_patty",
      "tag:items:c:salad_ingredients",
      "tag:items:c:crops/tomato",
      "tag:items:c:crops/onion",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:honey_bottle", "item:minecraft:honey_bottle", 4, [
      "item:minecraft:honey_block",
      "item:minecraft:glass_bottle",
      "item:minecraft:glass_bottle",
      "item:minecraft:glass_bottle",
      "item:minecraft:glass_bottle",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:honey_cookie", "item:farmersdelight:honey_cookie", 8, [
      "item:minecraft:honey_bottle",
      "item:minecraft:wheat",
      "item:minecraft:wheat",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "farmersdelight:honey_glazed_ham_block",
      "item:farmersdelight:honey_glazed_ham_block",
      1,
      [
        "item:minecraft:sweet_berries",
        "item:minecraft:honey_bottle",
        "item:minecraft:sweet_berries",
        "item:minecraft:sweet_berries",
        "item:farmersdelight:smoked_ham",
        "item:minecraft:sweet_berries",
        "item:farmersdelight:cooked_rice",
        "item:minecraft:bowl",
        "item:farmersdelight:cooked_rice",
      ]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:horse_feed", "item:farmersdelight:horse_feed", 1, [
      "item:minecraft:hay_block|item:farmersdelight:rice_bale",
      "item:minecraft:apple",
      "item:minecraft:apple",
      "item:minecraft:golden_carrot",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("mcwbridges:iron_bridge_stair_recycle", "item:mcwbridges:iron_bridge", 1, [
      "item:mcwbridges:iron_bridge_stair",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:iron_ingot_from_iron_block", "item:minecraft:iron_ingot", 9, [
      "item:minecraft:iron_block",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:iron_nugget", "item:minecraft:iron_nugget", 9, ["item:minecraft:iron_ingot"])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:jungle_button", "item:minecraft:jungle_button", 1, [
      "item:minecraft:jungle_planks",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:jungle_log_bridge_stair_recycle",
      "item:mcwbridges:jungle_log_bridge_middle",
      1,
      ["item:mcwbridges:jungle_log_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:jungle_planks", "item:minecraft:jungle_planks", 4, [
      "tag:items:minecraft:jungle_logs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:jungle_rope_bridge_stair_recycle",
      "item:mcwbridges:rope_jungle_bridge",
      1,
      ["item:mcwbridges:jungle_rope_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:lapis_lazuli", "item:minecraft:lapis_lazuli", 9, [
      "item:minecraft:lapis_block",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:light_blue_bed_from_white_bed", "item:minecraft:light_blue_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:light_blue_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:light_blue_candle", "item:minecraft:light_blue_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:light_blue_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "farmersdelight:light_blue_canvas_sign",
      "item:farmersdelight:light_blue_canvas_sign",
      1,
      ["tag:items:farmersdelight:canvas_signs", "tag:items:c:light_blue_dyes"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:light_blue_concrete_powder",
      "item:minecraft:light_blue_concrete_powder",
      8,
      [
        "item:minecraft:light_blue_dye",
        "item:minecraft:sand",
        "item:minecraft:sand",
        "item:minecraft:sand",
        "item:minecraft:sand",
        "item:minecraft:gravel",
        "item:minecraft:gravel",
        "item:minecraft:gravel",
        "item:minecraft:gravel",
      ]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:light_blue_dye_from_blue_orchid", "item:minecraft:light_blue_dye", 1, [
      "item:minecraft:blue_orchid",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:light_blue_dye_from_blue_white_dye", "item:minecraft:light_blue_dye", 2, [
      "item:minecraft:blue_dye",
      "item:minecraft:white_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:light_blue_wool", "item:minecraft:light_blue_wool", 1, [
      "item:minecraft:light_blue_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:light_gray_bed_from_white_bed", "item:minecraft:light_gray_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:light_gray_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:light_gray_candle", "item:minecraft:light_gray_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:light_gray_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "farmersdelight:light_gray_canvas_sign",
      "item:farmersdelight:light_gray_canvas_sign",
      1,
      ["tag:items:farmersdelight:canvas_signs", "tag:items:c:light_gray_dyes"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:light_gray_concrete_powder",
      "item:minecraft:light_gray_concrete_powder",
      8,
      [
        "item:minecraft:light_gray_dye",
        "item:minecraft:sand",
        "item:minecraft:sand",
        "item:minecraft:sand",
        "item:minecraft:sand",
        "item:minecraft:gravel",
        "item:minecraft:gravel",
        "item:minecraft:gravel",
        "item:minecraft:gravel",
      ]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:light_gray_dye_from_azure_bluet", "item:minecraft:light_gray_dye", 1, [
      "item:minecraft:azure_bluet",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:light_gray_dye_from_black_white_dye", "item:minecraft:light_gray_dye", 3, [
      "item:minecraft:black_dye",
      "item:minecraft:white_dye",
      "item:minecraft:white_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:light_gray_dye_from_gray_white_dye", "item:minecraft:light_gray_dye", 2, [
      "item:minecraft:gray_dye",
      "item:minecraft:white_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:light_gray_dye_from_oxeye_daisy", "item:minecraft:light_gray_dye", 1, [
      "item:minecraft:oxeye_daisy",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:light_gray_dye_from_white_tulip", "item:minecraft:light_gray_dye", 1, [
      "item:minecraft:white_tulip",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:light_gray_wool", "item:minecraft:light_gray_wool", 1, [
      "item:minecraft:light_gray_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:lime_bed_from_white_bed", "item:minecraft:lime_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:lime_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:lime_candle", "item:minecraft:lime_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:lime_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:lime_canvas_sign", "item:farmersdelight:lime_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:lime_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:lime_concrete_powder", "item:minecraft:lime_concrete_powder", 8, [
      "item:minecraft:lime_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:lime_dye", "item:minecraft:lime_dye", 2, [
      "item:minecraft:green_dye",
      "item:minecraft:white_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:lime_wool", "item:minecraft:lime_wool", 1, [
      "item:minecraft:lime_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:magenta_bed_from_white_bed", "item:minecraft:magenta_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:magenta_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:magenta_candle", "item:minecraft:magenta_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:magenta_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:magenta_canvas_sign", "item:farmersdelight:magenta_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:magenta_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:magenta_concrete_powder", "item:minecraft:magenta_concrete_powder", 8, [
      "item:minecraft:magenta_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:magenta_dye_from_allium", "item:minecraft:magenta_dye", 1, [
      "item:minecraft:allium",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:magenta_dye_from_blue_red_pink", "item:minecraft:magenta_dye", 3, [
      "item:minecraft:blue_dye",
      "item:minecraft:red_dye",
      "item:minecraft:pink_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:magenta_dye_from_blue_red_white_dye", "item:minecraft:magenta_dye", 4, [
      "item:minecraft:blue_dye",
      "item:minecraft:red_dye",
      "item:minecraft:red_dye",
      "item:minecraft:white_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:magenta_dye_from_lilac", "item:minecraft:magenta_dye", 2, [
      "item:minecraft:lilac",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:magenta_dye_from_purple_and_pink", "item:minecraft:magenta_dye", 2, [
      "item:minecraft:purple_dye",
      "item:minecraft:pink_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:magenta_wool", "item:minecraft:magenta_wool", 1, [
      "item:minecraft:magenta_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:magma_cream", "item:minecraft:magma_cream", 1, [
      "item:minecraft:blaze_powder",
      "item:minecraft:slime_ball",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:melon_juice", "item:farmersdelight:melon_juice", 1, [
      "item:minecraft:melon_slice",
      "item:minecraft:melon_slice",
      "item:minecraft:sugar",
      "item:minecraft:melon_slice",
      "item:minecraft:melon_slice",
      "item:minecraft:glass_bottle",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:melon_seeds", "item:minecraft:melon_seeds", 1, [
      "item:minecraft:melon_slice",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:milk_bottle", "item:farmersdelight:milk_bottle", 4, [
      "item:minecraft:milk_bucket",
      "item:minecraft:glass_bottle",
      "item:minecraft:glass_bottle",
      "item:minecraft:glass_bottle",
      "item:minecraft:glass_bottle",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:milk_bucket_from_bottles", "item:minecraft:milk_bucket", 1, [
      "item:minecraft:bucket",
      "item:farmersdelight:milk_bottle",
      "item:farmersdelight:milk_bottle",
      "item:farmersdelight:milk_bottle",
      "item:farmersdelight:milk_bottle",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:mixed_salad", "item:farmersdelight:mixed_salad", 1, [
      "tag:items:c:salad_ingredients",
      "tag:items:c:crops/tomato",
      "item:minecraft:beetroot",
      "item:minecraft:bowl",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:mojang_banner_pattern", "item:minecraft:mojang_banner_pattern", 1, [
      "item:minecraft:paper",
      "item:minecraft:enchanted_golden_apple",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:mossy_cobblestone_from_moss_block", "item:minecraft:mossy_cobblestone", 1, [
      "item:minecraft:cobblestone",
      "item:minecraft:moss_block",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:mossy_cobblestone_from_vine", "item:minecraft:mossy_cobblestone", 1, [
      "item:minecraft:cobblestone",
      "item:minecraft:vine",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:mossy_stone_bricks_from_moss_block",
      "item:minecraft:mossy_stone_bricks",
      1,
      ["item:minecraft:stone_bricks", "item:minecraft:moss_block"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:mossy_stone_bricks_from_vine", "item:minecraft:mossy_stone_bricks", 1, [
      "item:minecraft:stone_bricks",
      "item:minecraft:vine",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:mossy_stone_bridge_stair_recycle",
      "item:mcwbridges:mossy_stone_brick_bridge",
      1,
      ["item:mcwbridges:mossy_stone_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:mushroom_stew", "item:minecraft:mushroom_stew", 1, [
      "item:minecraft:brown_mushroom",
      "item:minecraft:red_mushroom",
      "item:minecraft:bowl",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:mutton_wrap", "item:farmersdelight:mutton_wrap", 1, [
      "tag:items:c:bread",
      "tag:items:c:cooked_mutton",
      "tag:items:c:salad_ingredients",
      "tag:items:c:crops/onion",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:nether_salad", "item:farmersdelight:nether_salad", 1, [
      "item:minecraft:crimson_fungus",
      "item:minecraft:warped_fungus",
      "item:minecraft:bowl",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:netherite_ingot", "item:minecraft:netherite_ingot", 1, [
      "item:minecraft:netherite_scrap",
      "item:minecraft:netherite_scrap",
      "item:minecraft:netherite_scrap",
      "item:minecraft:netherite_scrap",
      "item:minecraft:gold_ingot",
      "item:minecraft:gold_ingot",
      "item:minecraft:gold_ingot",
      "item:minecraft:gold_ingot",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:netherite_ingot_from_netherite_block", "item:minecraft:netherite_ingot", 9, [
      "item:minecraft:netherite_block",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:oak_button", "item:minecraft:oak_button", 1, ["item:minecraft:oak_planks"])
  );
  manager.add(
    new ShapelessCraftingRecipe("mcwbridges:oak_log_bridge_stair_recycle", "item:mcwbridges:oak_log_bridge_middle", 1, [
      "item:mcwbridges:oak_log_bridge_stair",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:oak_planks", "item:minecraft:oak_planks", 4, [
      "tag:items:minecraft:oak_logs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("mcwbridges:oak_rope_bridge_stair_recycle", "item:mcwbridges:rope_oak_bridge", 1, [
      "item:mcwbridges:oak_rope_bridge_stair",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:onion", "item:farmersdelight:onion", 9, [
      "item:farmersdelight:onion_crate",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:orange_bed_from_white_bed", "item:minecraft:orange_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:orange_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:orange_candle", "item:minecraft:orange_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:orange_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:orange_canvas_sign", "item:farmersdelight:orange_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:orange_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:orange_concrete_powder", "item:minecraft:orange_concrete_powder", 8, [
      "item:minecraft:orange_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:orange_dye_from_orange_tulip", "item:minecraft:orange_dye", 1, [
      "item:minecraft:orange_tulip",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:orange_dye_from_red_yellow", "item:minecraft:orange_dye", 2, [
      "item:minecraft:red_dye",
      "item:minecraft:yellow_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:orange_wool", "item:minecraft:orange_wool", 1, [
      "item:minecraft:orange_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "farmersdelight:organic_compost_from_rotten_flesh",
      "item:farmersdelight:organic_compost",
      1,
      [
        "item:minecraft:dirt",
        "item:minecraft:rotten_flesh",
        "item:minecraft:rotten_flesh",
        "item:farmersdelight:straw",
        "item:farmersdelight:straw",
        "item:minecraft:bone_meal",
        "item:minecraft:bone_meal",
        "item:minecraft:bone_meal",
        "item:minecraft:bone_meal",
      ]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "farmersdelight:organic_compost_from_tree_bark",
      "item:farmersdelight:organic_compost",
      1,
      [
        "item:minecraft:dirt",
        "item:farmersdelight:straw",
        "item:farmersdelight:straw",
        "item:minecraft:bone_meal",
        "item:minecraft:bone_meal",
        "item:farmersdelight:tree_bark",
        "item:farmersdelight:tree_bark",
        "item:farmersdelight:tree_bark",
        "item:farmersdelight:tree_bark",
      ]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:packed_ice", "item:minecraft:packed_ice", 1, [
      "item:minecraft:ice",
      "item:minecraft:ice",
      "item:minecraft:ice",
      "item:minecraft:ice",
      "item:minecraft:ice",
      "item:minecraft:ice",
      "item:minecraft:ice",
      "item:minecraft:ice",
      "item:minecraft:ice",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:paper_from_tree_bark", "item:minecraft:paper", 1, [
      "item:farmersdelight:tree_bark",
      "item:farmersdelight:tree_bark",
      "item:farmersdelight:tree_bark",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("betteranimalsplus:pelts_to_leather", "item:minecraft:leather", 2, [
      "tag:items:betteranimalsplus:pelts",
      "tag:items:betteranimalsplus:pelts",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:pink_bed_from_white_bed", "item:minecraft:pink_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:pink_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:pink_candle", "item:minecraft:pink_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:pink_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:pink_canvas_sign", "item:farmersdelight:pink_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:pink_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:pink_concrete_powder", "item:minecraft:pink_concrete_powder", 8, [
      "item:minecraft:pink_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:pink_dye_from_peony", "item:minecraft:pink_dye", 2, ["item:minecraft:peony"])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:pink_dye_from_pink_tulip", "item:minecraft:pink_dye", 1, [
      "item:minecraft:pink_tulip",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:pink_dye_from_red_white_dye", "item:minecraft:pink_dye", 2, [
      "item:minecraft:red_dye",
      "item:minecraft:white_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:pink_wool", "item:minecraft:pink_wool", 1, [
      "item:minecraft:pink_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:polished_blackstone_button",
      "item:minecraft:polished_blackstone_button",
      1,
      ["item:minecraft:polished_blackstone"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:polished_cut_andesite_slab_recycling", "item:create:polished_cut_andesite", 1, [
      "item:create:polished_cut_andesite_slab",
      "item:create:polished_cut_andesite_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:polished_cut_asurine_slab_recycling", "item:create:polished_cut_asurine", 1, [
      "item:create:polished_cut_asurine_slab",
      "item:create:polished_cut_asurine_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:polished_cut_calcite_slab_recycling", "item:create:polished_cut_calcite", 1, [
      "item:create:polished_cut_calcite_slab",
      "item:create:polished_cut_calcite_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:polished_cut_crimsite_slab_recycling", "item:create:polished_cut_crimsite", 1, [
      "item:create:polished_cut_crimsite_slab",
      "item:create:polished_cut_crimsite_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:polished_cut_deepslate_slab_recycling",
      "item:create:polished_cut_deepslate",
      1,
      ["item:create:polished_cut_deepslate_slab", "item:create:polished_cut_deepslate_slab"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:polished_cut_diorite_slab_recycling", "item:create:polished_cut_diorite", 1, [
      "item:create:polished_cut_diorite_slab",
      "item:create:polished_cut_diorite_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:polished_cut_dripstone_slab_recycling",
      "item:create:polished_cut_dripstone",
      1,
      ["item:create:polished_cut_dripstone_slab", "item:create:polished_cut_dripstone_slab"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:polished_cut_granite_slab_recycling", "item:create:polished_cut_granite", 1, [
      "item:create:polished_cut_granite_slab",
      "item:create:polished_cut_granite_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:polished_cut_limestone_slab_recycling",
      "item:create:polished_cut_limestone",
      1,
      ["item:create:polished_cut_limestone_slab", "item:create:polished_cut_limestone_slab"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:polished_cut_ochrum_slab_recycling", "item:create:polished_cut_ochrum", 1, [
      "item:create:polished_cut_ochrum_slab",
      "item:create:polished_cut_ochrum_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:polished_cut_scorchia_slab_recycling", "item:create:polished_cut_scorchia", 1, [
      "item:create:polished_cut_scorchia_slab",
      "item:create:polished_cut_scorchia_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:polished_cut_scoria_slab_recycling", "item:create:polished_cut_scoria", 1, [
      "item:create:polished_cut_scoria_slab",
      "item:create:polished_cut_scoria_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:polished_cut_tuff_slab_recycling", "item:create:polished_cut_tuff", 1, [
      "item:create:polished_cut_tuff_slab",
      "item:create:polished_cut_tuff_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:polished_cut_veridium_slab_recycling", "item:create:polished_cut_veridium", 1, [
      "item:create:polished_cut_veridium_slab",
      "item:create:polished_cut_veridium_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:potato_from_crate", "item:minecraft:potato", 9, [
      "item:farmersdelight:potato_crate",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:pumpkin_pie", "item:minecraft:pumpkin_pie", 1, [
      "item:minecraft:pumpkin",
      "item:minecraft:sugar",
      "item:minecraft:egg",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:pumpkin_seeds", "item:minecraft:pumpkin_seeds", 4, [
      "item:minecraft:pumpkin",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:pumpkin_seeds_from_slice", "item:minecraft:pumpkin_seeds", 1, [
      "item:farmersdelight:pumpkin_slice",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:purple_bed_from_white_bed", "item:minecraft:purple_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:purple_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:purple_candle", "item:minecraft:purple_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:purple_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:purple_canvas_sign", "item:farmersdelight:purple_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:purple_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:purple_concrete_powder", "item:minecraft:purple_concrete_powder", 8, [
      "item:minecraft:purple_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:purple_dye", "item:minecraft:purple_dye", 2, [
      "item:minecraft:blue_dye",
      "item:minecraft:red_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:purple_wool", "item:minecraft:purple_wool", 1, [
      "item:minecraft:purple_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("chiselsandbits:quill", "item:chiselsandbits:quill", 1, [
      "tag:items:forge:feathers",
      "tag:items:forge:dyes/black",
      "tag:items:forge:dyes/yellow",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:rabbit_stew_from_brown_mushroom", "item:minecraft:rabbit_stew", 1, [
      "item:minecraft:baked_potato",
      "item:minecraft:cooked_rabbit",
      "item:minecraft:bowl",
      "item:minecraft:carrot",
      "item:minecraft:brown_mushroom",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:rabbit_stew_from_red_mushroom", "item:minecraft:rabbit_stew", 1, [
      "item:minecraft:baked_potato",
      "item:minecraft:cooked_rabbit",
      "item:minecraft:bowl",
      "item:minecraft:carrot",
      "item:minecraft:red_mushroom",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:raw_copper", "item:minecraft:raw_copper", 9, [
      "item:minecraft:raw_copper_block",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:raw_gold", "item:minecraft:raw_gold", 9, ["item:minecraft:raw_gold_block"])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:raw_iron", "item:minecraft:raw_iron", 9, ["item:minecraft:raw_iron_block"])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:raw_pasta_from_eggs", "item:farmersdelight:raw_pasta", 1, [
      "tag:items:c:eggs",
      "item:minecraft:wheat",
      "item:minecraft:wheat",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:raw_pasta_from_water", "item:farmersdelight:raw_pasta", 2, [
      "item:minecraft:water_bucket",
      "item:minecraft:wheat",
      "item:minecraft:wheat",
      "item:minecraft:wheat",
      "item:minecraft:wheat",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:red_bed_from_white_bed", "item:minecraft:red_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:red_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:red_candle", "item:minecraft:red_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:red_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:red_canvas_sign", "item:farmersdelight:red_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:red_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:red_concrete_powder", "item:minecraft:red_concrete_powder", 8, [
      "item:minecraft:red_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:red_dye_from_beetroot", "item:minecraft:red_dye", 1, [
      "item:minecraft:beetroot",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:red_dye_from_poppy", "item:minecraft:red_dye", 1, ["item:minecraft:poppy"])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:red_dye_from_rose_bush", "item:minecraft:red_dye", 2, [
      "item:minecraft:rose_bush",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:red_dye_from_tulip", "item:minecraft:red_dye", 1, [
      "item:minecraft:red_tulip",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:red_sandstone_bridge_stair_recycle",
      "item:mcwbridges:orange_sandstone_bridge",
      1,
      ["item:mcwbridges:red_sandstone_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:red_wool", "item:minecraft:red_wool", 1, [
      "item:minecraft:red_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:redstone", "item:minecraft:redstone", 9, ["item:minecraft:redstone_block"])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:rice", "item:farmersdelight:rice", 1, [
      "item:farmersdelight:rice_panicle",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:rice_from_bag", "item:farmersdelight:rice", 9, [
      "item:farmersdelight:rice_bag",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:rice_panicle", "item:farmersdelight:rice_panicle", 9, [
      "item:farmersdelight:rice_bale",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "farmersdelight:rice_roll_medley_block",
      "item:farmersdelight:rice_roll_medley_block",
      1,
      [
        "item:farmersdelight:kelp_roll_slice",
        "item:farmersdelight:kelp_roll_slice",
        "item:farmersdelight:kelp_roll_slice",
        "item:farmersdelight:salmon_roll",
        "item:farmersdelight:salmon_roll",
        "item:farmersdelight:salmon_roll",
        "item:farmersdelight:cod_roll",
        "item:minecraft:bowl",
        "item:farmersdelight:cod_roll",
      ]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:roast_chicken_block", "item:farmersdelight:roast_chicken_block", 1, [
      "tag:items:c:crops/onion",
      "tag:items:c:eggs",
      "item:minecraft:bread",
      "item:minecraft:carrot",
      "item:minecraft:cooked_chicken",
      "item:minecraft:baked_potato",
      "item:minecraft:carrot",
      "item:minecraft:bowl",
      "item:minecraft:baked_potato",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:roasted_mutton_chops", "item:farmersdelight:roasted_mutton_chops", 1, [
      "item:farmersdelight:cooked_mutton_chops",
      "item:minecraft:beetroot",
      "item:minecraft:bowl",
      "item:farmersdelight:cooked_rice",
      "tag:items:c:crops/tomato",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:rope_from_safety_net", "item:farmersdelight:rope", 4, [
      "item:farmersdelight:safety_net",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:salmon_roll", "item:farmersdelight:salmon_roll", 2, [
      "item:farmersdelight:salmon_slice",
      "item:farmersdelight:salmon_slice",
      "item:farmersdelight:cooked_rice",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("mcwbridges:sandstone_bridge_stair_recycle", "item:mcwbridges:sandstone_bridge", 1, [
      "item:mcwbridges:sandstone_bridge_stair",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("chiselsandbits:sealant", "item:chiselsandbits:sealant", 1, [
      "tag:items:forge:slimeballs",
      "item:minecraft:honey_bottle",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:shepherds_pie_block", "item:farmersdelight:shepherds_pie_block", 1, [
      "item:minecraft:baked_potato",
      "tag:items:c:milk",
      "item:minecraft:baked_potato",
      "tag:items:c:cooked_mutton",
      "tag:items:c:cooked_mutton",
      "tag:items:c:cooked_mutton",
      "tag:items:c:crops/onion",
      "item:minecraft:bowl",
      "tag:items:c:crops/onion",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:skull_banner_pattern", "item:minecraft:skull_banner_pattern", 1, [
      "item:minecraft:paper",
      "item:minecraft:wither_skeleton_skull",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:slime_ball", "item:minecraft:slime_ball", 9, ["item:minecraft:slime_block"])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:small_andesite_brick_slab_recycling", "item:create:small_andesite_bricks", 1, [
      "item:create:small_andesite_brick_slab",
      "item:create:small_andesite_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:small_asurine_brick_slab_recycling", "item:create:small_asurine_bricks", 1, [
      "item:create:small_asurine_brick_slab",
      "item:create:small_asurine_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:small_calcite_brick_slab_recycling", "item:create:small_calcite_bricks", 1, [
      "item:create:small_calcite_brick_slab",
      "item:create:small_calcite_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:small_crimsite_brick_slab_recycling", "item:create:small_crimsite_bricks", 1, [
      "item:create:small_crimsite_brick_slab",
      "item:create:small_crimsite_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:small_deepslate_brick_slab_recycling",
      "item:create:small_deepslate_bricks",
      1,
      ["item:create:small_deepslate_brick_slab", "item:create:small_deepslate_brick_slab"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:small_diorite_brick_slab_recycling", "item:create:small_diorite_bricks", 1, [
      "item:create:small_diorite_brick_slab",
      "item:create:small_diorite_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:small_dripstone_brick_slab_recycling",
      "item:create:small_dripstone_bricks",
      1,
      ["item:create:small_dripstone_brick_slab", "item:create:small_dripstone_brick_slab"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:small_granite_brick_slab_recycling", "item:create:small_granite_bricks", 1, [
      "item:create:small_granite_brick_slab",
      "item:create:small_granite_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "create:small_limestone_brick_slab_recycling",
      "item:create:small_limestone_bricks",
      1,
      ["item:create:small_limestone_brick_slab", "item:create:small_limestone_brick_slab"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("create:small_ochrum_brick_slab_recycling", "item:create:small_ochrum_bricks", 1, [
      "item:create:small_ochrum_brick_slab",
      "item:create:small_ochrum_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:small_scorchia_brick_slab_recycling", "item:create:small_scorchia_bricks", 1, [
      "item:create:small_scorchia_brick_slab",
      "item:create:small_scorchia_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:small_scoria_brick_slab_recycling", "item:create:small_scoria_bricks", 1, [
      "item:create:small_scoria_brick_slab",
      "item:create:small_scoria_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:small_tuff_brick_slab_recycling", "item:create:small_tuff_bricks", 1, [
      "item:create:small_tuff_brick_slab",
      "item:create:small_tuff_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("create:small_veridium_brick_slab_recycling", "item:create:small_veridium_bricks", 1, [
      "item:create:small_veridium_brick_slab",
      "item:create:small_veridium_brick_slab",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:spruce_button", "item:minecraft:spruce_button", 1, [
      "item:minecraft:spruce_planks",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:spruce_log_bridge_stair_recycle",
      "item:mcwbridges:spruce_log_bridge_middle",
      1,
      ["item:mcwbridges:spruce_log_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:spruce_planks", "item:minecraft:spruce_planks", 4, [
      "tag:items:minecraft:spruce_logs",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:spruce_rope_bridge_stair_recycle",
      "item:mcwbridges:rope_spruce_bridge",
      1,
      ["item:mcwbridges:spruce_rope_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:steak_and_potatoes", "item:farmersdelight:steak_and_potatoes", 1, [
      "item:minecraft:baked_potato",
      "item:minecraft:cooked_beef",
      "item:minecraft:bowl",
      "tag:items:c:crops/onion",
      "item:farmersdelight:cooked_rice",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:stone_brick_bridge_stair_recycle",
      "item:mcwbridges:stone_brick_bridge",
      1,
      ["item:mcwbridges:stone_brick_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:stone_button", "item:minecraft:stone_button", 1, ["item:minecraft:stone"])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:straw", "item:farmersdelight:straw", 9, [
      "item:farmersdelight:straw_bale",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:stuffed_potato", "item:farmersdelight:stuffed_potato", 1, [
      "item:minecraft:baked_potato",
      "tag:items:c:cooked_beef",
      "tag:items:c:milk",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:sugar_from_honey_bottle", "item:minecraft:sugar", 3, [
      "item:minecraft:honey_bottle",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:sugar_from_sugar_cane", "item:minecraft:sugar", 1, [
      "item:minecraft:sugar_cane",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:sweet_berry_cookie", "item:farmersdelight:sweet_berry_cookie", 8, [
      "item:minecraft:sweet_berries",
      "item:minecraft:wheat",
      "item:minecraft:wheat",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:tatami_block_from_full", "item:farmersdelight:tatami", 1, [
      "item:farmersdelight:full_tatami_mat",
      "item:farmersdelight:full_tatami_mat",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("cccbridge:to_source_block", "item:cccbridge:source_block", 1, [
      "item:cccbridge:target_block",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("cccbridge:to_target_block", "item:cccbridge:target_block", 1, [
      "item:cccbridge:source_block",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:tomato", "item:farmersdelight:tomato", 9, [
      "item:farmersdelight:tomato_crate",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:tomato_seeds", "item:farmersdelight:tomato_seeds", 1, [
      "item:farmersdelight:tomato|item:farmersdelight:rotten_tomato",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:trapped_chest", "item:minecraft:trapped_chest", 1, [
      "item:minecraft:chest",
      "item:minecraft:tripwire_hook",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("chiselsandbits:unseal", "item:chiselsandbits:unseal", 1, ["item:minecraft:wet_sponge"])
  );
  manager.add(
    new ShapelessCraftingRecipe("createplus:vanilla/crafting/limestone", "item:create:limestone", 2, [
      "item:minecraft:calcite",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:warped_button", "item:minecraft:warped_button", 1, [
      "item:minecraft:warped_planks",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:warped_log_bridge_stair_recycle",
      "item:mcwbridges:warped_log_bridge_middle",
      1,
      ["item:mcwbridges:warped_log_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:warped_planks", "item:minecraft:warped_planks", 4, [
      "tag:items:minecraft:warped_stems",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "mcwbridges:warped_rope_bridge_stair_recycle",
      "item:mcwbridges:rope_warped_bridge",
      1,
      ["item:mcwbridges:warped_rope_bridge_stair"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:waxed_copper_block_from_honeycomb", "item:minecraft:waxed_copper_block", 1, [
      "item:minecraft:copper_block",
      "item:minecraft:honeycomb",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:waxed_cut_copper_from_honeycomb", "item:minecraft:waxed_cut_copper", 1, [
      "item:minecraft:cut_copper",
      "item:minecraft:honeycomb",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_cut_copper_slab_from_honeycomb",
      "item:minecraft:waxed_cut_copper_slab",
      1,
      ["item:minecraft:cut_copper_slab", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_cut_copper_stairs_from_honeycomb",
      "item:minecraft:waxed_cut_copper_stairs",
      1,
      ["item:minecraft:cut_copper_stairs", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_exposed_copper_from_honeycomb",
      "item:minecraft:waxed_exposed_copper",
      1,
      ["item:minecraft:exposed_copper", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_exposed_cut_copper_from_honeycomb",
      "item:minecraft:waxed_exposed_cut_copper",
      1,
      ["item:minecraft:exposed_cut_copper", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_exposed_cut_copper_slab_from_honeycomb",
      "item:minecraft:waxed_exposed_cut_copper_slab",
      1,
      ["item:minecraft:exposed_cut_copper_slab", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_exposed_cut_copper_stairs_from_honeycomb",
      "item:minecraft:waxed_exposed_cut_copper_stairs",
      1,
      ["item:minecraft:exposed_cut_copper_stairs", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_oxidized_copper_from_honeycomb",
      "item:minecraft:waxed_oxidized_copper",
      1,
      ["item:minecraft:oxidized_copper", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_oxidized_cut_copper_from_honeycomb",
      "item:minecraft:waxed_oxidized_cut_copper",
      1,
      ["item:minecraft:oxidized_cut_copper", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_oxidized_cut_copper_slab_from_honeycomb",
      "item:minecraft:waxed_oxidized_cut_copper_slab",
      1,
      ["item:minecraft:oxidized_cut_copper_slab", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_oxidized_cut_copper_stairs_from_honeycomb",
      "item:minecraft:waxed_oxidized_cut_copper_stairs",
      1,
      ["item:minecraft:oxidized_cut_copper_stairs", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_weathered_copper_from_honeycomb",
      "item:minecraft:waxed_weathered_copper",
      1,
      ["item:minecraft:weathered_copper", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_weathered_cut_copper_from_honeycomb",
      "item:minecraft:waxed_weathered_cut_copper",
      1,
      ["item:minecraft:weathered_cut_copper", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_weathered_cut_copper_slab_from_honeycomb",
      "item:minecraft:waxed_weathered_cut_copper_slab",
      1,
      ["item:minecraft:weathered_cut_copper_slab", "item:minecraft:honeycomb"]
    )
  );
  manager.add(
    new ShapelessCraftingRecipe(
      "minecraft:waxed_weathered_cut_copper_stairs_from_honeycomb",
      "item:minecraft:waxed_weathered_cut_copper_stairs",
      1,
      ["item:minecraft:weathered_cut_copper_stairs", "item:minecraft:honeycomb"]
    )
  );
  manager.add(new ShapelessCraftingRecipe("minecraft:wheat", "item:minecraft:wheat", 9, ["item:minecraft:hay_block"]));
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:wheat_dough_from_eggs", "item:farmersdelight:wheat_dough", 3, [
      "tag:items:c:eggs",
      "item:minecraft:wheat",
      "item:minecraft:wheat",
      "item:minecraft:wheat",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:wheat_dough_from_water", "item:farmersdelight:wheat_dough", 3, [
      "item:minecraft:water_bucket",
      "item:minecraft:wheat",
      "item:minecraft:wheat",
      "item:minecraft:wheat",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:white_candle", "item:minecraft:white_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:white_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:white_canvas_sign", "item:farmersdelight:white_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:white_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:white_concrete_powder", "item:minecraft:white_concrete_powder", 8, [
      "item:minecraft:white_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:white_dye", "item:minecraft:white_dye", 1, ["item:minecraft:bone_meal"])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:white_dye_from_lily_of_the_valley", "item:minecraft:white_dye", 1, [
      "item:minecraft:lily_of_the_valley",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("computercraft:wired_modem_full_from", "item:computercraft:wired_modem_full", 1, [
      "item:computercraft:wired_modem",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("computercraft:wired_modem_full_to", "item:computercraft:wired_modem", 1, [
      "item:computercraft:wired_modem_full",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("betteranimalsplus:wolf_pelt_arctic_wool", "item:minecraft:white_wool", 1, [
      "item:betteranimalsplus:wolf_pelt_arctic",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("betteranimalsplus:wolf_pelt_black_wool", "item:minecraft:black_wool", 1, [
      "item:betteranimalsplus:wolf_pelt_black",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("betteranimalsplus:wolf_pelt_brown_wool", "item:minecraft:brown_wool", 1, [
      "item:betteranimalsplus:wolf_pelt_brown",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("betteranimalsplus:wolf_pelt_red_wool", "item:minecraft:red_wool", 1, [
      "item:betteranimalsplus:wolf_pelt_red",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("betteranimalsplus:wolf_pelt_snowy_wool", "item:minecraft:white_wool", 1, [
      "item:betteranimalsplus:wolf_pelt_snowy",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("betteranimalsplus:wolf_pelt_timber_wool", "item:minecraft:light_gray_wool", 1, [
      "item:betteranimalsplus:wolf_pelt_timber",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:writable_book", "item:minecraft:writable_book", 1, [
      "item:minecraft:book",
      "item:minecraft:ink_sac",
      "item:minecraft:feather",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:yellow_bed_from_white_bed", "item:minecraft:yellow_bed", 1, [
      "item:minecraft:white_bed",
      "item:minecraft:yellow_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:yellow_candle", "item:minecraft:yellow_candle", 1, [
      "item:minecraft:candle",
      "item:minecraft:yellow_dye",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("farmersdelight:yellow_canvas_sign", "item:farmersdelight:yellow_canvas_sign", 1, [
      "tag:items:farmersdelight:canvas_signs",
      "tag:items:c:yellow_dyes",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:yellow_concrete_powder", "item:minecraft:yellow_concrete_powder", 8, [
      "item:minecraft:yellow_dye",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:sand",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
      "item:minecraft:gravel",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:yellow_dye_from_dandelion", "item:minecraft:yellow_dye", 1, [
      "item:minecraft:dandelion",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:yellow_dye_from_sunflower", "item:minecraft:yellow_dye", 2, [
      "item:minecraft:sunflower",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("minecraft:yellow_wool", "item:minecraft:yellow_wool", 1, [
      "item:minecraft:yellow_dye",
      "item:minecraft:white_wool",
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("minecraft:map_extending", "item:minecraft:map", 1, [
      ["item:minecraft:paper", "item:minecraft:paper", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:filled_map", "item:minecraft:paper"],
      ["item:minecraft:paper", "item:minecraft:paper", "item:minecraft:paper"],
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("computercraft:printed_book", "item:computercraft:printed_book", 1, [
      "item:minecraft:leather",
      "item:computercraft:printed_page",
      "item:minecraft:string",
    ])
  );
  manager.add(
    new ShapelessCraftingRecipe("computercraft:printed_pages", "item:computercraft:printed_pages", 1, [
      "item:computercraft:printed_page",
      "item:computercraft:printed_page",
      "item:minecraft:string",
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:turtle_advanced", "item:computercraft:turtle_advanced", 1, [
      ["tag:items:c:gold_ingots", "tag:items:c:gold_ingots", "tag:items:c:gold_ingots"],
      ["tag:items:c:gold_ingots", "item:computercraft:computer_advanced", "tag:items:c:gold_ingots"],
      ["tag:items:c:gold_ingots", "tag:items:c:wooden_chests", "tag:items:c:gold_ingots"],
    ])
  );
  manager.add(
    new ShapedCraftingRecipe("computercraft:turtle_normal", "item:computercraft:turtle_normal", 1, [
      ["tag:items:c:iron_ingots", "tag:items:c:iron_ingots", "tag:items:c:iron_ingots"],
      ["tag:items:c:iron_ingots", "item:computercraft:computer_normal", "tag:items:c:iron_ingots"],
      ["tag:items:c:iron_ingots", "tag:items:c:wooden_chests", "tag:items:c:iron_ingots"],
    ])
  );
}
