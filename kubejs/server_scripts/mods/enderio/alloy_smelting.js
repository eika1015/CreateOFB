ServerEvents.recipes(event => {

  event.remove({ type: "enderio:alloy_smelting" });

event.recipes.enderio.alloy_smelting(
  Item.of("enderio:copper_alloy_ingot"),
  [Ingredient.of("#forge:ingots/copper"), "#forge:silicon", "create:andesite_alloy"]
).energy(5000).experience(5);

event.recipes.enderio.alloy_smelting(
  Item.of("enderio:energetic_alloy_ingot"),
  [Ingredient.of("create:polished_rose_quartz"), "2x minecraft:gold_ingot", "minecraft:glowstone_dust"]
).energy(6800).experience(5);

event.recipes.enderio.alloy_smelting(
  Item.of("enderio:vibrant_alloy_ingot"),
  [Ingredient.of("enderio:energetic_alloy_ingot"), "minecraft:ender_pearl", "2x create:andesite_alloy"]
).energy(6800).experience(5);

event.recipes.enderio.alloy_smelting(
  Item.of("enderio:redstone_alloy_ingot"),
  [Ingredient.of("create:polished_rose_quartz"), "#forge:silicon", "create:andesite_alloy"]
).energy(5000).experience(5);

event.recipes.enderio.alloy_smelting(
  Item.of("enderio:conductive_alloy_ingot"),
  [Ingredient.of("enderio:copper_alloy_ingot"), "minecraft:iron_ingot", "create:polished_rose_quartz"]
).energy(9600).experience(5);

event.recipes.enderio.alloy_smelting(
  Item.of("enderio:pulsating_alloy_ingot"),
  [Ingredient.of("minecraft:iron_ingot"), "minecraft:ender_pearl", "create:andesite_alloy"]
).energy(9600).experience(5);

event.recipes.enderio.alloy_smelting(
  Item.of("enderio:dark_steel_ingot"),
  [Ingredient.of("minecraft:iron_ingot"), "#forge:dusts/coal_coke", "minecraft:obsidian"]
).energy(9600).experience(5);

event.recipes.enderio.alloy_smelting(
  Item.of("enderio:soularium_ingot"),
  [Ingredient.of("minecraft:soul_sand"), "minecraft:gold_ingot", "2x create:andesite_alloy"]
).energy(9600).experience(5);

event.recipes.enderio.alloy_smelting(
  Item.of("enderio:end_steel_ingot"),
  [Ingredient.of("minecraft:end_stone"), "enderio:dark_steel_ingot", "2x minecraft:obsidian"]
).energy(9600).experience(5);

event.recipes.enderio.alloy_smelting(
  Item.of("enderio:clayed_glowstone"),
  [Ingredient.of("minecraft:glowstone_dust"), "minecraft:clay_ball"]
).energy(5000).experience(5);

event.recipes.enderio.alloy_smelting(
  Item.of("enderio:nethercotta"),
  [Ingredient.of("minecraft:nether_brick"), "4x minecraft:nether_wart", "6x minecraft:clay_ball"]
).energy(9600).experience(5);

event.recipes.enderio.alloy_smelting(
  Item.of("enderio:industrial_insulation_block"),
  [Ingredient.of("#forge:dusts/lapis"), "#minecraft:wool", "#enderio:insulation_metals"]
).energy(9600).experience(5);

event.recipes.enderio.alloy_smelting(
  Item.of("enderio:conduit_binder"),
  [Ingredient.of("enderio:conduit_binder_composite")]
).energy(3200).experience(5);

})