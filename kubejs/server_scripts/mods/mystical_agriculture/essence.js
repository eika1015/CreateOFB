ServerEvents.recipes(event => {


  event.remove({input: '#mysticalagriculture:essences'});

  //iron
  event.recipes.createMixing('minecraft:iron_ingot', [
    'mysticalagriculture:iron_essence',
    'mysticalagriculture:iron_essence',
    'mysticalagriculture:iron_essence',
    'mysticalagriculture:iron_essence',
    'mysticalagriculture:iron_essence',
    'mysticalagriculture:iron_essence',
    'mysticalagriculture:iron_essence',
    'mysticalagriculture:iron_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/iron_ingot');

  //gold
  event.recipes.createMixing('minecraft:gold_ingot', [
    'mysticalagriculture:gold_essence',
    'mysticalagriculture:gold_essence',
    'mysticalagriculture:gold_essence',
    'mysticalagriculture:gold_essence',
    'mysticalagriculture:gold_essence',
    'mysticalagriculture:gold_essence',
    'mysticalagriculture:gold_essence',
    'mysticalagriculture:gold_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/gold_ingot');

  //copper
  event.recipes.createMixing('minecraft:copper_ingot', [
    'mysticalagriculture:copper_essence',
    'mysticalagriculture:copper_essence',
    'mysticalagriculture:copper_essence',
    'mysticalagriculture:copper_essence',
    'mysticalagriculture:copper_essence',
    'mysticalagriculture:copper_essence',
    'mysticalagriculture:copper_essence',
    'mysticalagriculture:copper_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/copper_ingot');

  //nether quartz
  event.recipes.createMixing('4x minecraft:quartz', [
    'mysticalagriculture:nether_quartz_essence',
    'mysticalagriculture:nether_quartz_essence',
    'mysticalagriculture:nether_quartz_essence',
    'mysticalagriculture:nether_quartz_essence',
    'mysticalagriculture:nether_quartz_essence',
    'mysticalagriculture:nether_quartz_essence',
    'mysticalagriculture:nether_quartz_essence',
    'mysticalagriculture:nether_quartz_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/nether_quartz');

  //glowstone
  event.recipes.createMixing('4x minecraft:glowstone_dust', [
    'mysticalagriculture:glowstone_essence',
    'mysticalagriculture:glowstone_essence',
    'mysticalagriculture:glowstone_essence',
    'mysticalagriculture:glowstone_essence',
    'mysticalagriculture:glowstone_essence',
    'mysticalagriculture:glowstone_essence',
    'mysticalagriculture:glowstone_essence',
    'mysticalagriculture:glowstone_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/glowstone');

  //redstone
  event.recipes.createMixing('4x minecraft:redstone', [
    'mysticalagriculture:redstone_essence',
    'mysticalagriculture:redstone_essence',
    'mysticalagriculture:redstone_essence',
    'mysticalagriculture:redstone_essence',
    'mysticalagriculture:redstone_essence',
    'mysticalagriculture:redstone_essence',
    'mysticalagriculture:redstone_essence',
    'mysticalagriculture:redstone_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/redstone');

  //obsidian
  event.recipes.createMixing('4x minecraft:obsidian', [
    'mysticalagriculture:obsidian_essence',
    'mysticalagriculture:obsidian_essence',
    'mysticalagriculture:obsidian_essence',
    'mysticalagriculture:obsidian_essence',
    'mysticalagriculture:obsidian_essence',
    'mysticalagriculture:obsidian_essence',
    'mysticalagriculture:obsidian_essence',
    'mysticalagriculture:obsidian_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/obsidian');

  //prismarine shard
  event.recipes.createMixing('4x minecraft:prismarine_shard', [
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:prismarine_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/prismarine_shard');

  //prismarine crystals
  event.recipes.createMixing('4x minecraft:prismarine_crystals', [
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:prismarine_essence',
    'minecraft:soul_soil',
    'minecraft:soul_soil',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/prismarine_crystals');

  //nautilus shell
  event.recipes.createMixing('minecraft:nautilus_shell', [
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:fish_essence',
    'mysticalagriculture:fish_essence',
    'mysticalagriculture:fish_essence',
    'minecraft:gravel',
    'minecraft:gravel',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/nautilus_shell');

  //heart of the sea
  event.recipes.createMixing('minecraft:heart_of_the_sea', [
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:prismarine_essence',
    'mysticalagriculture:diamond_essence',
    'mysticalagriculture:diamond_essence',
    'mysticalagriculture:diamond_essence',
    'mysticalagriculture:diamond_essence',
    'mysticalagriculture:enderman_essence',
    'mysticalagriculture:enderman_essence',
    'minecraft:nautilus_shell',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/heart_of_the_sea');

  //rotten_flesh
  event.recipes.createMixing('4x minecraft:rotten_flesh', [
    'mysticalagriculture:zombie_essence',
    'mysticalagriculture:zombie_essence',
    'mysticalagriculture:zombie_essence',
    'mysticalagriculture:zombie_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/rotten_flesh');

  //arrow
  event.recipes.createMixing('4x minecraft:arrow', [
    'mysticalagriculture:skelton_essence',
    'mysticalagriculture:skelton_essence',
    'mysticalagriculture:skelton_essence',
    'mysticalagriculture:skelton_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/arrow');

  //bone
  event.recipes.createMixing('4x minecraft:bone', [
    'mysticalagriculture:skelton_essence',
    'mysticalagriculture:skelton_essence',
    'mysticalagriculture:skelton_essence',
    'mysticalagriculture:skelton_essence',
    'minecraft:soul_soil',
    'minecraft:soul_soil',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/bone');

  //gunpowder
  event.recipes.createMixing('3x minecraft:gunpowder', [
    'mysticalagriculture:creeper_essence',
    'mysticalagriculture:creeper_essence',
    'mysticalagriculture:creeper_essence',
    'mysticalagriculture:creeper_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/gunpowder');

  //spider eye
  event.recipes.createMixing('minecraft:spider_eye', [
    'mysticalagriculture:spider_essence',
    'mysticalagriculture:spider_essence',
    'mysticalagriculture:spider_essence',
    'mysticalagriculture:spider_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/spider_eye');

  //string
  event.recipes.createMixing('minecraft:string', [
    'mysticalagriculture:spider_essence',
    'mysticalagriculture:spider_essence',
    'mysticalagriculture:spider_essence',
    'mysticalagriculture:spider_essence',
    'minecraft:soul_soil',
    'minecraft:soul_soil',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/string');

  //rabbit foot
  event.recipes.createMixing('minecraft:rabbit_foot', [
    'mysticalagriculture:rabbit_essence',
    'mysticalagriculture:rabbit_essence',
    'mysticalagriculture:rabbit_essence',
    'mysticalagriculture:rabbit_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/rabbit_foot');

  //rabbit hide
  event.recipes.createMixing('4x minecraft:rabbit_hide', [
    'mysticalagriculture:rabbit_essence',
    'mysticalagriculture:rabbit_essence',
    'mysticalagriculture:rabbit_essence',
    'mysticalagriculture:rabbit_essence',
    'minecraft:soul_soil',
    'minecraft:soul_soil',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/rabbit_hide');

  //rabbit
  event.recipes.createMixing('2x minecraft:rabbit', [
    'mysticalagriculture:rabbit_essence',
    'mysticalagriculture:rabbit_essence',
    'mysticalagriculture:rabbit_essence',
    'mysticalagriculture:rabbit_essence',
    'minecraft:sand',
    'minecraft:sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/rabbit');

  //tin
  event.recipes.createMixing('thermal:tin_ingot', [
    'mysticalagriculture:tin_essence',
    'mysticalagriculture:tin_essence',
    'mysticalagriculture:tin_essence',
    'mysticalagriculture:tin_essence',
    'mysticalagriculture:tin_essence',
    'mysticalagriculture:tin_essence',
    'mysticalagriculture:tin_essence',
    'mysticalagriculture:tin_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/tin_ingot');

  //bronze
  event.recipes.createMixing('thermal:bronze_ingot', [
    'mysticalagriculture:bronze_essence',
    'mysticalagriculture:bronze_essence',
    'mysticalagriculture:bronze_essence',
    'mysticalagriculture:bronze_essence',
    'mysticalagriculture:bronze_essence',
    'mysticalagriculture:bronze_essence',
    'mysticalagriculture:bronze_essence',
    'mysticalagriculture:bronze_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/bronze_ingot');

  //zinc
  event.recipes.createMixing('create:zinc_ingot', [
    'mysticalagriculture:zinc_essence',
    'mysticalagriculture:zinc_essence',
    'mysticalagriculture:zinc_essence',
    'mysticalagriculture:zinc_essence',
    'mysticalagriculture:zinc_essence',
    'mysticalagriculture:zinc_essence',
    'mysticalagriculture:zinc_essence',
    'mysticalagriculture:zinc_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/zinc_ingot');

  //zinc
  event.recipes.createMixing('create:brass_ingot', [
    'mysticalagriculture:brass_essence',
    'mysticalagriculture:brass_essence',
    'mysticalagriculture:brass_essence',
    'mysticalagriculture:brass_essence',
    'mysticalagriculture:brass_essence',
    'mysticalagriculture:brass_essence',
    'mysticalagriculture:brass_essence',
    'mysticalagriculture:brass_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/brass_ingot');

  //zinc
  event.recipes.createMixing('thermal:silver_ingot', [
    'mysticalagriculture:silver_essence',
    'mysticalagriculture:silver_essence',
    'mysticalagriculture:silver_essence',
    'mysticalagriculture:silver_essence',
    'mysticalagriculture:silver_essence',
    'mysticalagriculture:silver_essence',
    'mysticalagriculture:silver_essence',
    'mysticalagriculture:silver_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/silver_ingot');

  //lead
  event.recipes.createMixing('thermal:lead_ingot', [
    'mysticalagriculture:lead_essence',
    'mysticalagriculture:lead_essence',
    'mysticalagriculture:lead_essence',
    'mysticalagriculture:lead_essence',
    'mysticalagriculture:lead_essence',
    'mysticalagriculture:lead_essence',
    'mysticalagriculture:lead_essence',
    'mysticalagriculture:lead_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/lead_ingot');

  //blizz rod
  event.recipes.createMixing('2x thermal:blizz_rod', [
    'mysticalagriculture:blizz_essence',
    'mysticalagriculture:blizz_essence',
    'mysticalagriculture:blizz_essence',
    'mysticalagriculture:blizz_essence',
    'mysticalagriculture:blizz_essence',
    'mysticalagriculture:blizz_essence',
    'mysticalagriculture:blizz_essence',
    'mysticalagriculture:blizz_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/blizz_rod');

  //blitz rod
  event.recipes.createMixing('2x thermal:blitz_rod', [
    'mysticalagriculture:blitz_essence',
    'mysticalagriculture:blitz_essence',
    'mysticalagriculture:blitz_essence',
    'mysticalagriculture:blitz_essence',
    'mysticalagriculture:blitz_essence',
    'mysticalagriculture:blitz_essence',
    'mysticalagriculture:blitz_essence',
    'mysticalagriculture:blitz_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/blitz_rod');

  //basals rod
  event.recipes.createMixing('2x thermal:basalz_rod', [
    'mysticalagriculture:basalz_essence',
    'mysticalagriculture:basalz_essence',
    'mysticalagriculture:basalz_essence',
    'mysticalagriculture:basalz_essence',
    'mysticalagriculture:basalz_essence',
    'mysticalagriculture:basalz_essence',
    'mysticalagriculture:basalz_essence',
    'mysticalagriculture:basalz_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/basalz_rod');

  //amethyst branze
  event.recipes.createMixing('tconstruct:amethyst_bronze_ingot', [
    'mysticalagriculture:amethyst_bronze_essence',
    'mysticalagriculture:amethyst_bronze_essence',
    'mysticalagriculture:amethyst_bronze_essence',
    'mysticalagriculture:amethyst_bronze_essence',
    'mysticalagriculture:amethyst_bronze_essence',
    'mysticalagriculture:amethyst_bronze_essence',
    'mysticalagriculture:amethyst_bronze_essence',
    'mysticalagriculture:amethyst_bronze_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/amethyst_bronze_ingot');

  //slimesteel
  event.recipes.createMixing('tconstruct:slimesteel_ingot', [
    'mysticalagriculture:slimesteel_essence',
    'mysticalagriculture:slimesteel_essence',
    'mysticalagriculture:slimesteel_essence',
    'mysticalagriculture:slimesteel_essence',
    'mysticalagriculture:slimesteel_essence',
    'mysticalagriculture:slimesteel_essence',
    'mysticalagriculture:slimesteel_essence',
    'mysticalagriculture:slimesteel_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/slimesteel_ingot');

  //pig iron
  event.recipes.createMixing('tconstruct:pig_iron_ingot', [
    'mysticalagriculture:pig_iron_essence',
    'mysticalagriculture:pig_iron_essence',
    'mysticalagriculture:pig_iron_essence',
    'mysticalagriculture:pig_iron_essence',
    'mysticalagriculture:pig_iron_essence',
    'mysticalagriculture:pig_iron_essence',
    'mysticalagriculture:pig_iron_essence',
    'mysticalagriculture:pig_iron_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/pig_iron_ingot');

  //copper alloy
  event.recipes.createMixing('enderio:copper_alloy_ingot', [
    'mysticalagriculture:copper_alloy_essence',
    'mysticalagriculture:copper_alloy_essence',
    'mysticalagriculture:copper_alloy_essence',
    'mysticalagriculture:copper_alloy_essence',
    'mysticalagriculture:copper_alloy_essence',
    'mysticalagriculture:copper_alloy_essence',
    'mysticalagriculture:copper_alloy_essence',
    'mysticalagriculture:copper_alloy_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/copper_alloy_ingot');

  //redstone alloy
  event.recipes.createMixing('enderio:redstone_alloy_ingot', [
    'mysticalagriculture:redstone_alloy_essence',
    'mysticalagriculture:redstone_alloy_essence',
    'mysticalagriculture:redstone_alloy_essence',
    'mysticalagriculture:redstone_alloy_essence',
    'mysticalagriculture:redstone_alloy_essence',
    'mysticalagriculture:redstone_alloy_essence',
    'mysticalagriculture:redstone_alloy_essence',
    'mysticalagriculture:redstone_alloy_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/redstone_alloy_ingot');

  //conductive alloy
  event.recipes.createMixing('enderio:conductive_alloy_ingot', [
    'mysticalagriculture:conductive_alloy_essence',
    'mysticalagriculture:conductive_alloy_essence',
    'mysticalagriculture:conductive_alloy_essence',
    'mysticalagriculture:conductive_alloy_essence',
    'mysticalagriculture:conductive_alloy_essence',
    'mysticalagriculture:conductive_alloy_essence',
    'mysticalagriculture:conductive_alloy_essence',
    'mysticalagriculture:conductive_alloy_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/conductive_alloy_ingot');

  //steeleaf
  event.recipes.createMixing('twilightforest:steeleaf_ingot', [
    'mysticalagriculture:steeleaf_essence',
    'mysticalagriculture:steeleaf_essence',
    'mysticalagriculture:steeleaf_essence',
    'mysticalagriculture:steeleaf_essence',
    'mysticalagriculture:steeleaf_essence',
    'mysticalagriculture:steeleaf_essence',
    'mysticalagriculture:steeleaf_essence',
    'mysticalagriculture:steeleaf_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/steeleaf_ingot');

  //ironwoood
  event.recipes.createMixing('twilightforest:ironwood_ingot', [
    'mysticalagriculture:ironwood_essence',
    'mysticalagriculture:ironwood_essence',
    'mysticalagriculture:ironwood_essence',
    'mysticalagriculture:ironwood_essence',
    'mysticalagriculture:ironwood_essence',
    'mysticalagriculture:ironwood_essence',
    'mysticalagriculture:ironwood_essence',
    'mysticalagriculture:ironwood_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/ironwood_ingot');

  //certus quartz
  event.recipes.createMixing('ae2:certus_quartz_crystal', [
    'mysticalagriculture:certus_quartz_essence',
    'mysticalagriculture:certus_quartz_essence',
    'mysticalagriculture:certus_quartz_essence',
    'mysticalagriculture:certus_quartz_essence',
    'mysticalagriculture:certus_quartz_essence',
    'mysticalagriculture:certus_quartz_essence',
    'mysticalagriculture:certus_quartz_essence',
    'mysticalagriculture:certus_quartz_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/certus_quartz_crystal');

  //lapis lazuli
  event.recipes.createMixing('4x minecraft:lapis_lazuli', [
    'mysticalagriculture:lapis_lazuli_essence',
    'mysticalagriculture:lapis_lazuli_essence',
    'mysticalagriculture:lapis_lazuli_essence',
    'mysticalagriculture:lapis_lazuli_essence',
    'mysticalagriculture:lapis_lazuli_essence',
    'mysticalagriculture:lapis_lazuli_essence',
    'mysticalagriculture:lapis_lazuli_essence',
    'mysticalagriculture:lapis_lazuli_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/lapis_lazuli');

  //end stone
  event.recipes.createMixing('4x minecraft:end_stone', [
    'mysticalagriculture:end_essence',
    'mysticalagriculture:end_essence',
    'mysticalagriculture:end_essence',
    'mysticalagriculture:end_essence',
    'mysticalagriculture:end_essence',
    'mysticalagriculture:end_essence',
    'mysticalagriculture:end_essence',
    'mysticalagriculture:end_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/end_stone');

  //end stone
  event.recipes.createMixing('mysticalagriculture:experience_droplet', [
    'mysticalagriculture:experience_essence',
    'mysticalagriculture:experience_essence',
    'mysticalagriculture:experience_essence',
    'mysticalagriculture:experience_essence',
    'mysticalagriculture:experience_essence',
    'mysticalagriculture:experience_essence',
    'mysticalagriculture:experience_essence',
    'mysticalagriculture:experience_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/experience_droplet');

  //blaze rod
  event.recipes.createMixing('2x minecraft:blaze_rod', [
    'mysticalagriculture:blaze_essence',
    'mysticalagriculture:blaze_essence',
    'mysticalagriculture:blaze_essence',
    'mysticalagriculture:blaze_essence',
    'mysticalagriculture:blaze_essence',
    'mysticalagriculture:blaze_essence',
    'mysticalagriculture:blaze_essence',
    'mysticalagriculture:blaze_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/blaze_rod');

  //ghast tear
  event.recipes.createMixing('minecraft:ghast_tear', [
    'mysticalagriculture:ghast_essence',
    'mysticalagriculture:ghast_essence',
    'mysticalagriculture:ghast_essence',
    'mysticalagriculture:ghast_essence',
    'mysticalagriculture:ghast_essence',
    'mysticalagriculture:ghast_essence',
    'mysticalagriculture:ghast_essence',
    'mysticalagriculture:ghast_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/ghast_tear');

  //ender pearl
  event.recipes.createMixing('minecraft:ender_pearl', [
    'mysticalagriculture:enderman_essence',
    'mysticalagriculture:enderman_essence',
    'mysticalagriculture:enderman_essence',
    'mysticalagriculture:enderman_essence',
    'mysticalagriculture:enderman_essence',
    'mysticalagriculture:enderman_essence',
    'mysticalagriculture:enderman_essence',
    'mysticalagriculture:enderman_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/ender_pearl');

  //steel
  event.recipes.createMixing('thermal:steel_ingot', [
    'mysticalagriculture:steel_essence',
    'mysticalagriculture:steel_essence',
    'mysticalagriculture:steel_essence',
    'mysticalagriculture:steel_essence',
    'mysticalagriculture:steel_essence',
    'mysticalagriculture:steel_essence',
    'mysticalagriculture:steel_essence',
    'mysticalagriculture:steel_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/steel_ingot');

  //nickel
  event.recipes.createMixing('thermal:nickel_ingot', [
    'mysticalagriculture:nickel_essence',
    'mysticalagriculture:nickel_essence',
    'mysticalagriculture:nickel_essence',
    'mysticalagriculture:nickel_essence',
    'mysticalagriculture:nickel_essence',
    'mysticalagriculture:nickel_essence',
    'mysticalagriculture:nickel_essence',
    'mysticalagriculture:nickel_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/nickel_ingot');

  //constantan
  event.recipes.createMixing('thermal:constantan_ingot', [
    'mysticalagriculture:constantan_essence',
    'mysticalagriculture:constantan_essence',
    'mysticalagriculture:constantan_essence',
    'mysticalagriculture:constantan_essence',
    'mysticalagriculture:constantan_essence',
    'mysticalagriculture:constantan_essence',
    'mysticalagriculture:constantan_essence',
    'mysticalagriculture:constantan_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/constantan_ingot');

  //electrum
  event.recipes.createMixing('thermal:electrum_ingot', [
    'mysticalagriculture:electrum_essence',
    'mysticalagriculture:electrum_essence',
    'mysticalagriculture:electrum_essence',
    'mysticalagriculture:electrum_essence',
    'mysticalagriculture:electrum_essence',
    'mysticalagriculture:electrum_essence',
    'mysticalagriculture:electrum_essence',
    'mysticalagriculture:electrum_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/electrum_ingot');

  //inver
  event.recipes.createMixing('thermal:invar_ingot', [
    'mysticalagriculture:invar_essence',
    'mysticalagriculture:invar_essence',
    'mysticalagriculture:invar_essence',
    'mysticalagriculture:invar_essence',
    'mysticalagriculture:invar_essence',
    'mysticalagriculture:invar_essence',
    'mysticalagriculture:invar_essence',
    'mysticalagriculture:invar_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/inver_ingot');

  //ruby
  event.recipes.createMixing('thermal:ruby', [
    'mysticalagriculture:ruby_essence',
    'mysticalagriculture:ruby_essence',
    'mysticalagriculture:ruby_essence',
    'mysticalagriculture:ruby_essence',
    'mysticalagriculture:ruby_essence',
    'mysticalagriculture:ruby_essence',
    'mysticalagriculture:ruby_essence',
    'mysticalagriculture:ruby_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/ruby');

  //ruby
  event.recipes.createMixing('thermal:sapphire', [
    'mysticalagriculture:sapphire_essence',
    'mysticalagriculture:sapphire_essence',
    'mysticalagriculture:sapphire_essence',
    'mysticalagriculture:sapphire_essence',
    'mysticalagriculture:sapphire_essence',
    'mysticalagriculture:sapphire_essence',
    'mysticalagriculture:sapphire_essence',
    'mysticalagriculture:sapphire_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/sapphire');

  //soulium
  event.recipes.createMixing('mysticalagriculture:soulium_dust', [
    'mysticalagriculture:soulium_essence',
    'mysticalagriculture:soulium_essence',
    'mysticalagriculture:soulium_essence',
    'mysticalagriculture:soulium_essence',
    'mysticalagriculture:soulium_essence',
    'mysticalagriculture:soulium_essence',
    'mysticalagriculture:soulium_essence',
    'mysticalagriculture:soulium_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/soulium_dust');

  //signalum
  event.recipes.createMixing('thermal:signalum_ingot', [
    'mysticalagriculture:signalum_essence',
    'mysticalagriculture:signalum_essence',
    'mysticalagriculture:signalum_essence',
    'mysticalagriculture:signalum_essence',
    'mysticalagriculture:signalum_essence',
    'mysticalagriculture:signalum_essence',
    'mysticalagriculture:signalum_essence',
    'mysticalagriculture:signalum_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/signalum_ingot');

  //lumium
  event.recipes.createMixing('thermal:lumium_ingot', [
    'mysticalagriculture:lumium_essence',
    'mysticalagriculture:lumium_essence',
    'mysticalagriculture:lumium_essence',
    'mysticalagriculture:lumium_essence',
    'mysticalagriculture:lumium_essence',
    'mysticalagriculture:lumium_essence',
    'mysticalagriculture:lumium_essence',
    'mysticalagriculture:lumium_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/lumium_ingot');

  //graphite
  event.recipes.createMixing('immersiveengineering:ingot_hop_graphite', [
    'mysticalagriculture:hop_graphite_essence',
    'mysticalagriculture:hop_graphite_essence',
    'mysticalagriculture:hop_graphite_essence',
    'mysticalagriculture:hop_graphite_essence',
    'mysticalagriculture:hop_graphite_essence',
    'mysticalagriculture:hop_graphite_essence',
    'mysticalagriculture:hop_graphite_essence',
    'mysticalagriculture:hop_graphite_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/graphite');

  //cobalt
  event.recipes.createMixing('tconstruct:cobalt_ingot', [
    'mysticalagriculture:cobalt_essence',
    'mysticalagriculture:cobalt_essence',
    'mysticalagriculture:cobalt_essence',
    'mysticalagriculture:cobalt_essence',
    'mysticalagriculture:cobalt_essence',
    'mysticalagriculture:cobalt_essence',
    'mysticalagriculture:cobalt_essence',
    'mysticalagriculture:cobalt_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/cobalt_ingot');

  //rose gold
  event.recipes.createMixing('tconstruct:rose_gold_ingot', [
    'mysticalagriculture:rose_gold_essence',
    'mysticalagriculture:rose_gold_essence',
    'mysticalagriculture:rose_gold_essence',
    'mysticalagriculture:rose_gold_essence',
    'mysticalagriculture:rose_gold_essence',
    'mysticalagriculture:rose_gold_essence',
    'mysticalagriculture:rose_gold_essence',
    'mysticalagriculture:rose_gold_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/rose_gold_ingot');

  //soularium
  event.recipes.createMixing('enderio:soularium_ingot', [
    'mysticalagriculture:soularium_essence',
    'mysticalagriculture:soularium_essence',
    'mysticalagriculture:soularium_essence',
    'mysticalagriculture:soularium_essence',
    'mysticalagriculture:soularium_essence',
    'mysticalagriculture:soularium_essence',
    'mysticalagriculture:soularium_essence',
    'mysticalagriculture:soularium_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/soularium_ingot');

  //dark steel
  event.recipes.createMixing('enderio:dark_steel_ingot', [
    'mysticalagriculture:dark_steel_essence',
    'mysticalagriculture:dark_steel_essence',
    'mysticalagriculture:dark_steel_essence',
    'mysticalagriculture:dark_steel_essence',
    'mysticalagriculture:dark_steel_essence',
    'mysticalagriculture:dark_steel_essence',
    'mysticalagriculture:dark_steel_essence',
    'mysticalagriculture:dark_steel_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/dark_steel_ingot');

  //pulsating alloy
  event.recipes.createMixing('enderio:pulsating_alloy_ingot', [
    'mysticalagriculture:pulsating_alloy_essence',
    'mysticalagriculture:pulsating_alloy_essence',
    'mysticalagriculture:pulsating_alloy_essence',
    'mysticalagriculture:pulsating_alloy_essence',
    'mysticalagriculture:pulsating_alloy_essence',
    'mysticalagriculture:pulsating_alloy_essence',
    'mysticalagriculture:pulsating_alloy_essence',
    'mysticalagriculture:pulsating_alloy_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/pulsating_alloy');

  //energetic alloy
  event.recipes.createMixing('enderio:energetic_alloy_ingot', [
    'mysticalagriculture:energetic_alloy_essence',
    'mysticalagriculture:energetic_alloy_essence',
    'mysticalagriculture:energetic_alloy_essence',
    'mysticalagriculture:energetic_alloy_essence',
    'mysticalagriculture:energetic_alloy_essence',
    'mysticalagriculture:energetic_alloy_essence',
    'mysticalagriculture:energetic_alloy_essence',
    'mysticalagriculture:energetic_alloy_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/enegetic_alloy_ingot');

  //osmium
  event.recipes.createMixing('mekanism:ingot_osmium', [
    'mysticalagriculture:osmium_essence',
    'mysticalagriculture:osmium_essence',
    'mysticalagriculture:osmium_essence',
    'mysticalagriculture:osmium_essence',
    'mysticalagriculture:osmium_essence',
    'mysticalagriculture:osmium_essence',
    'mysticalagriculture:osmium_essence',
    'mysticalagriculture:osmium_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/osmium_ingot');

  //fluorite
  event.recipes.createMixing('mekanism:fluorite_gem', [
    'mysticalagriculture:fluorite_essence',
    'mysticalagriculture:fluorite_essence',
    'mysticalagriculture:fluorite_essence',
    'mysticalagriculture:fluorite_essence',
    'mysticalagriculture:fluorite_essence',
    'mysticalagriculture:fluorite_essence',
    'mysticalagriculture:fluorite_essence',
    'mysticalagriculture:fluorite_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/fluorite');

  //refined glowstone
  event.recipes.createMixing('mekanism:ingot_refined_glowstone', [
    'mysticalagriculture:refined_glowstone_essence',
    'mysticalagriculture:refined_glowstone_essence',
    'mysticalagriculture:refined_glowstone_essence',
    'mysticalagriculture:refined_glowstone_essence',
    'mysticalagriculture:refined_glowstone_essence',
    'mysticalagriculture:refined_glowstone_essence',
    'mysticalagriculture:refined_glowstone_essence',
    'mysticalagriculture:refined_glowstone_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/refined_glowstone_ingot');

  //refined obsidian
  event.recipes.createMixing('mekanism:ingot_refined_obsidian', [
    'mysticalagriculture:refined_obsidian_essence',
    'mysticalagriculture:refined_obsidian_essence',
    'mysticalagriculture:refined_obsidian_essence',
    'mysticalagriculture:refined_obsidian_essence',
    'mysticalagriculture:refined_obsidian_essence',
    'mysticalagriculture:refined_obsidian_essence',
    'mysticalagriculture:refined_obsidian_essence',
    'mysticalagriculture:refined_obsidian_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/refined_obsidian_ingot');

  //knightmetal
  event.recipes.createMixing('twilightforest:knightmetal_ingot', [
    'mysticalagriculture:knightmetal_essence',
    'mysticalagriculture:knightmetal_essence',
    'mysticalagriculture:knightmetal_essence',
    'mysticalagriculture:knightmetal_essence',
    'mysticalagriculture:knightmetal_essence',
    'mysticalagriculture:knightmetal_essence',
    'mysticalagriculture:knightmetal_essence',
    'mysticalagriculture:knightmetal_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/knightmetal_ingot');

  //fiery ingot
  event.recipes.createMixing('twilightforest:fiery_ingot', [
    'mysticalagriculture:fiery_ingot_essence',
    'mysticalagriculture:fiery_ingot_essence',
    'mysticalagriculture:fiery_ingot_essence',
    'mysticalagriculture:fiery_ingot_essence',
    'mysticalagriculture:fiery_ingot_essence',
    'mysticalagriculture:fiery_ingot_essence',
    'mysticalagriculture:fiery_ingot_essence',
    'mysticalagriculture:fiery_ingot_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/fiery_ingot');

  //fluix crystal
  event.recipes.createMixing('ae2:fluix_crystal', [
    'mysticalagriculture:fluix_essence',
    'mysticalagriculture:fluix_essence',
    'mysticalagriculture:fluix_essence',
    'mysticalagriculture:fluix_essence',
    'mysticalagriculture:fluix_essence',
    'mysticalagriculture:fluix_essence',
    'mysticalagriculture:fluix_essence',
    'mysticalagriculture:fluix_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/fluix_crystal');

  //diamond
  event.recipes.createMixing('minecraft:diamond', [
    'mysticalagriculture:diamond_essence',
    'mysticalagriculture:diamond_essence',
    'mysticalagriculture:diamond_essence',
    'mysticalagriculture:diamond_essence',
    'mysticalagriculture:diamond_essence',
    'mysticalagriculture:diamond_essence',
    'mysticalagriculture:diamond_essence',
    'mysticalagriculture:diamond_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/diamond');

  //emerald
  event.recipes.createMixing('minecraft:emerald', [
    'mysticalagriculture:emerald_essence',
    'mysticalagriculture:emerald_essence',
    'mysticalagriculture:emerald_essence',
    'mysticalagriculture:emerald_essence',
    'mysticalagriculture:emerald_essence',
    'mysticalagriculture:emerald_essence',
    'mysticalagriculture:emerald_essence',
    'mysticalagriculture:emerald_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/emerald');

  //netherite ingot
  event.recipes.createMixing('minecraft:netherite_ingot', [
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'mysticalagriculture:netherite_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/netherite_ingot');

  //witherproof block
  event.recipes.createMixing('mysticalagriculture:witherproof_block', [
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:soulstone',
    'mysticalagriculture:soulstone',
    'mysticalagriculture:soulstone',
    'mysticalagriculture:soulstone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/witherproof_block');

  //witherproof glass
  event.recipes.createMixing('mysticalagriculture:witherproof_glass', [
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'mysticalagriculture:wither_skeleton_essence',
    'minecraft:glass',
    'minecraft:glass',
    'minecraft:glass',
    'minecraft:glass',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/witherproof_ingot');

  //platinum
  event.recipes.createMixing('alltheores:platinum_ingot', [
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:platinum_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/platinum_ingot');

  //enderium
  event.recipes.createMixing('thermal:enderium_ingot', [
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'mysticalagriculture:enderium_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/enderium_ingot');

  //manyullyn
  event.recipes.createMixing('tconstruct:manyullyn_ingot', [
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'mysticalagriculture:manyullyn_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/manyullyn_ingot');

  //queens slime
  event.recipes.createMixing('tconstruct:queens_slime_ingot', [
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'mysticalagriculture:queens_slime_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/queens_slime_ingot');

  //queens slime
  event.recipes.createMixing('tconstruct:hepatizon_ingot', [
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'mysticalagriculture:hepatizon_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/hepatizon_ingot');

  //vibrant alloy
  event.recipes.createMixing('enderio:vibrant_alloy_ingot', [
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'mysticalagriculture:vibrant_alloy_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/vibrant_alloy_ingot');

  //end steel
  event.recipes.createMixing('enderio:end_steel_ingot', [
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'mysticalagriculture:end_steel_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/end_steel_ingot');

  //draconium ingot
  event.recipes.createMixing('draconicevolution:draconium_ingot', [
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'mysticalagriculture:draconium_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/draconium_ingot');

  //nether star
  event.recipes.createMixing('mysticalagradditions:nether_star_shard', [
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'mysticalagriculture:nether_star_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/nether_star_shard');

  //dragon egg
  event.recipes.createMixing('mysticalagradditions:dragon_egg_chunk', [
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'mysticalagriculture:dragon_egg_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/dragon_egg');

  //awakened draconium ingot
  event.recipes.createMixing('draconicevolution:awakened_draconium_ingot', [
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'mysticalagriculture:awakened_draconium_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/awakened_draconium_ingot');

  //limestone
  event.recipes.createMixing('4x create:limestone', [
    'mysticalagriculture:limestone_essence',
    'mysticalagriculture:limestone_essence',
    'mysticalagriculture:limestone_essence',
    'mysticalagriculture:limestone_essence',
    'mysticalagriculture:limestone_essence',
    'mysticalagriculture:limestone_essence',
    'mysticalagriculture:limestone_essence',
    'mysticalagriculture:limestone_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/limestone');

  //grains of infinity
  event.recipes.createMixing('2x enderio:grains_of_infinity', [
    'mysticalagriculture:grains_of_infinity_essence',
    'mysticalagriculture:grains_of_infinity_essence',
    'mysticalagriculture:grains_of_infinity_essence',
    'mysticalagriculture:grains_of_infinity_essence',
    'mysticalagriculture:grains_of_infinity_essence',
    'mysticalagriculture:grains_of_infinity_essence',
    'mysticalagriculture:grains_of_infinity_essence',
    'mysticalagriculture:grains_of_infinity_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/grains_of_infinity');

  //apatite
  event.recipes.createMixing('4x thermal:apatite', [
    'mysticalagriculture:apatite_essence',
    'mysticalagriculture:apatite_essence',
    'mysticalagriculture:apatite_essence',
    'mysticalagriculture:apatite_essence',
    'mysticalagriculture:apatite_essence',
    'mysticalagriculture:apatite_essence',
    'mysticalagriculture:apatite_essence',
    'mysticalagriculture:apatite_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/apatite');

  //aluminum
  event.recipes.createMixing('immersiveengineering:ingot_aluminum', [
    'mysticalagriculture:aluminum_essence',
    'mysticalagriculture:aluminum_essence',
    'mysticalagriculture:aluminum_essence',
    'mysticalagriculture:aluminum_essence',
    'mysticalagriculture:aluminum_essence',
    'mysticalagriculture:aluminum_essence',
    'mysticalagriculture:aluminum_essence',
    'mysticalagriculture:aluminum_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated();

  //sulfur
  event.recipes.createMixing('2x thermal:sulfur_dust', [
    'mysticalagriculture:sulfur_essence',
    'mysticalagriculture:sulfur_essence',
    'mysticalagriculture:sulfur_essence',
    'mysticalagriculture:sulfur_essence',
    'mysticalagriculture:sulfur_essence',
    'mysticalagriculture:sulfur_essence',
    'mysticalagriculture:sulfur_essence',
    'mysticalagriculture:sulfur_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/sulfur');

  //silicon
  event.recipes.createMixing('2x ae2:silicon', [
    'mysticalagriculture:silicon_essence',
    'mysticalagriculture:silicon_essence',
    'mysticalagriculture:silicon_essence',
    'mysticalagriculture:silicon_essence',
    'mysticalagriculture:silicon_essence',
    'mysticalagriculture:silicon_essence',
    'mysticalagriculture:silicon_essence',
    'mysticalagriculture:silicon_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/silicon');

  //rubber
  event.recipes.createMixing('2x thermal:cured_rubber', [
    'mysticalagriculture:rubber_essence',
    'mysticalagriculture:rubber_essence',
    'mysticalagriculture:rubber_essence',
    'mysticalagriculture:rubber_essence',
    'mysticalagriculture:rubber_essence',
    'mysticalagriculture:rubber_essence',
    'mysticalagriculture:rubber_essence',
    'mysticalagriculture:rubber_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/rubber');

  //scute
  event.recipes.createMixing('2x minecraft:scute', [
    'mysticalagriculture:turtle_essence',
    'mysticalagriculture:turtle_essence',
    'mysticalagriculture:turtle_essence',
    'mysticalagriculture:turtle_essence',
    'mysticalagriculture:turtle_essence',
    'mysticalagriculture:turtle_essence',
    'mysticalagriculture:turtle_essence',
    'mysticalagriculture:turtle_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/scute');

  //slime
  event.recipes.createMixing('2x minecraft:slime_ball', [
    'mysticalagriculture:slime_essence',
    'mysticalagriculture:slime_essence',
    'mysticalagriculture:slime_essence',
    'mysticalagriculture:slime_essence',
    'mysticalagriculture:slime_essence',
    'mysticalagriculture:slime_essence',
    'mysticalagriculture:slime_essence',
    'mysticalagriculture:slime_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/slime_ball');

  //squid
  event.recipes.createMixing('minecraft:ink_sac', [
    'mysticalagriculture:squid_essence',
    'mysticalagriculture:squid_essence',
    'mysticalagriculture:squid_essence',
    'mysticalagriculture:squid_essence',
    'mysticalagriculture:squid_essence',
    'mysticalagriculture:squid_essence',
    'mysticalagriculture:squid_essence',
    'mysticalagriculture:squid_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/ink_sac');

  //wool
  event.recipes.createMixing('minecraft:white_wool', [
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/white_wool');

  //mutton
  event.recipes.createMixing('minecraft:mutton', [
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'mysticalagriculture:sheep_essence',
    'minecraft:soul_soil',
    'minecraft:soul_soil',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/mutton');

  //beef
  event.recipes.createMixing('minecraft:beef', [
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/beef');

  //leather
  event.recipes.createMixing('minecraft:leather', [
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'minecraft:soul_soil',
    'minecraft:soul_soil',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/leather');

  //milk
  event.recipes.createMixing([Fluid.of('minecraft:milk', 100)], [
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'mysticalagriculture:cow_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('minecraft:water', 1000)
  ]).superheated().id('createofb:mysticalagriculture/essence/milk');

  //chicken
  event.recipes.createMixing('minecraft:chicken', [
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/chicken');

  //egg
  event.recipes.createMixing('minecraft:egg', [
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'minecraft:soul_soil',
    'minecraft:soul_soil',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/egg');

  //feather
  event.recipes.createMixing('minecraft:feather', [
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'mysticalagriculture:chicken_essence',
    'minecraft:soul_soil',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/feather');

  //pig
  event.recipes.createMixing('minecraft:porkchop', [
    'mysticalagriculture:pig_essence',
    'mysticalagriculture:pig_essence',
    'mysticalagriculture:pig_essence',
    'mysticalagriculture:pig_essence',
    'mysticalagriculture:pig_essence',
    'mysticalagriculture:pig_essence',
    'mysticalagriculture:pig_essence',
    'mysticalagriculture:pig_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/porkchop');

  //amethyst
  event.recipes.createMixing('5x minecraft:amethyst', [
    'mysticalagriculture:amethyst_essence',
    'mysticalagriculture:amethyst_essence',
    'mysticalagriculture:amethyst_essence',
    'mysticalagriculture:amethyst_essence',
    'mysticalagriculture:amethyst_essence',
    'mysticalagriculture:amethyst_essence',
    'mysticalagriculture:amethyst_essence',
    'mysticalagriculture:amethyst_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/amethyst');

  //calcite
  event.recipes.createMixing('5x minecraft:calcite', [
    'mysticalagriculture:amethyst_essence',
    'mysticalagriculture:amethyst_essence',
    'mysticalagriculture:amethyst_essence',
    'mysticalagriculture:amethyst_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/calcite');

  //honey
  event.recipes.createMixing('minecraft:honeycomb', [
    'mysticalagriculture:honey_essence',
    'mysticalagriculture:honey_essence',
    'mysticalagriculture:honey_essence',
    'mysticalagriculture:honey_essence',
    'mysticalagriculture:honey_essence',
    'mysticalagriculture:honey_essence',
    'mysticalagriculture:honey_essence',
    'mysticalagriculture:honey_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    Fluid.of('create_enchantment_industry:experience', 30)
  ]).superheated().id('createofb:mysticalagriculture/essence/honeycomb');

  //horn coral
  event.recipes.createMixing('2x minecraft:horn_coral', [
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'minecraft:yellow_dye',
    'minecraft:yellow_dye',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/horn_coral');

  //tube coral
  event.recipes.createMixing('2x minecraft:tube_coral', [
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'minecraft:blue_dye',
    'minecraft:blue_dye',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/tube_coral');

  //bubble coral
  event.recipes.createMixing('2x minecraft:bubble_coral', [
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'minecraft:magenta_dye',
    'minecraft:magenta_dye',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/bubble_coral');

  //brain coral
  event.recipes.createMixing('2x minecraft:brain_coral', [
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'minecraft:pink_dye',
    'minecraft:pink_dye',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/brain_coral');

  //fire coral
  event.recipes.createMixing('2x minecraft:fire_coral', [
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'minecraft:red_dye',
    'minecraft:red_dye',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/fire_coral');

  //bubble coral fan
  event.recipes.createMixing('minecraft:bubble_coral_fan', [
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'minecraft:magenta_dye',
    'minecraft:magenta_dye',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/bubble_coral_fan');

  //tube coral fan
  event.recipes.createMixing('minecraft:tube_coral_fan', [
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'minecraft:blue_dye',
    'minecraft:blue_dye',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/tube_coral_fan');

  //brain coral fan
  event.recipes.createMixing('minecraft:brain_coral_fan', [
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'minecraft:pink_dye',
    'minecraft:pink_dye',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/brain_coral_fan');

  //horn coral fan
  event.recipes.createMixing('minecraft:horn_coral_fan', [
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'minecraft:yellow_dye',
    'minecraft:yellow_dye',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/horn_coral_fan');

  //fire coral fan
  event.recipes.createMixing('minecraft:fire_coral_fan', [
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'mysticalagriculture:coral_essence',
    'minecraft:red_dye',
    'minecraft:red_dye',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/fire_coral_fan');

  //coal
  event.recipes.createMixing('2x minecraft:coal', [
    'mysticalagriculture:coal_essence',
    'mysticalagriculture:coal_essence',
    'mysticalagriculture:coal_essence',
    'mysticalagriculture:coal_essence',
    'mysticalagriculture:coal_essence',
    'mysticalagriculture:coal_essence',
    'mysticalagriculture:coal_essence',
    'mysticalagriculture:coal_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/coal');

  //charcoal
  event.recipes.createMixing('2x minecraft:charcoal', [
    'mysticalagriculture:coal_essence',
    'mysticalagriculture:coal_essence',
    'mysticalagriculture:wood_essence',
    'mysticalagriculture:wood_essence',
    'mysticalagriculture:wood_essence',
    'mysticalagriculture:wood_essence',
    'mysticalagriculture:wood_essence',
    'mysticalagriculture:wood_essence',
    'mysticalagriculture:wood_essence',
    'mysticalagriculture:wood_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/charcoal');

  //warped stem
  event.recipes.createMixing('4x minecraft:warped_stem', [
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:wood_essence',
    'mysticalagriculture:wood_essence',
    'mysticalagriculture:wood_essence',
    'mysticalagriculture:wood_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/warped_stem');

  //crimson fungus
  event.recipes.createMixing('minecraft:crimson_fungus', [
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nature_essence',
    'mysticalagriculture:nature_essence',
    'mysticalagriculture:nature_essence',
    'mysticalagriculture:nature_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/crimson_fungus');

  //blackstone
  event.recipes.createMixing('6x minecraft:blackstone', [
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/blackstone');

  //basalt
  event.recipes.createMixing('6x minecraft:basalt', [
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:ice_essence',
    'mysticalagriculture:ice_essence',
    'mysticalagriculture:ice_essence',
    'mysticalagriculture:ice_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/basalt');

  //soul sand
  event.recipes.createMixing('2x minecraft:soul_sand', [
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:fire_essence',
    'mysticalagriculture:fire_essence',
    'mysticalagriculture:fire_essence',
    'mysticalagriculture:fire_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/soul_sand');

  //crimson stem
  event.recipes.createMixing('4x minecraft:crimson_stem', [
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:wood_essence',
    'mysticalagriculture:wood_essence',
    'mysticalagriculture:wood_essence',
    'mysticalagriculture:wood_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/crimson_stem');

  //warped fungus
  event.recipes.createMixing('minecraft:warped_fungus', [
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nature_essence',
    'mysticalagriculture:nature_essence',
    'mysticalagriculture:nature_essence',
    'mysticalagriculture:nature_essence',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:soul_sand',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/warped_fungus');

  //netherrack
  event.recipes.createMixing('4x minecraft:netherrack', [
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/netherrack');

  //nether wart
  event.recipes.createMixing('2x minecraft:nether_wart', [
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nature_essence',
    'mysticalagriculture:nature_essence',
    'mysticalagriculture:nature_essence',
    'mysticalagriculture:nature_essence',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/nether_wart');

  //soul soil
  event.recipes.createMixing('4x minecraft:soul_soil', [
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:nether_essence',
    'mysticalagriculture:earth_essence',
    'mysticalagriculture:earth_essence',
    'mysticalagriculture:earth_essence',
    'mysticalagriculture:earth_essence',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/soul_soil');

  //veridium
  event.recipes.createMixing('8x create:veridium', [
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:copper_essence',
    'mysticalagriculture:copper_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/veridium');

  //gravel
  event.recipes.createMixing('8x minecraft:gravel', [
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/gravel');

  //ochrum
  event.recipes.createMixing('8x create:ochrum', [
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:gold_essence',
    'mysticalagriculture:gold_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/ochrum');

  //crimsite
  event.recipes.createMixing('8x create:crimsite', [
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:iron_essence',
    'mysticalagriculture:iron_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/crimsite');

  //crimsite
  event.recipes.createMixing('8x create:crimsite', [
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'mysticalagriculture:water_essence',
    'mysticalagriculture:water_essence',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/pointed_dripstone');

  //tuff
  event.recipes.createMixing('minecraft:tuff', [
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'mysticalagriculture:fire_essence',
    'mysticalagriculture:fire_essence',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/tuff');

  //asurine
  event.recipes.createMixing('minecraft:asurine', [
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:stone_essence',
    'mysticalagriculture:zinc_essence',
    'mysticalagriculture:zinc_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/asurine');

  //red sand
  event.recipes.createMixing('8x minecraft:red_sand', [
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:fire_essence',
    'mysticalagriculture:fire_essence',
    'mysticalagriculture:fire_essence',
    'mysticalagriculture:fire_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/redsand');

  //sand
  event.recipes.createMixing('8x minecraft:sand', [
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:fire_essence',
    'mysticalagriculture:fire_essence',
    'mysticalagriculture:fire_essence',
    'mysticalagriculture:fire_essence',
    'minecraft:gravel',
    'minecraft:gravel',
    'minecraft:gravel',
    'minecraft:gravel',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/sand');

  //podzol
  event.recipes.createMixing('8x minecraft:podzol', [
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:nature_essence',
    'mysticalagriculture:nature_essence',
    'mysticalagriculture:nature_essence',
    'mysticalagriculture:nature_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/podzol');

  //mud
  event.recipes.createMixing('8x minecraft:mud', [
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:water_essence',
    'mysticalagriculture:water_essence',
    'mysticalagriculture:water_essence',
    'mysticalagriculture:water_essence',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/mud');

  //clay
  event.recipes.createMixing('8x minecraft:clay_ball', [
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:water_essence',
    'mysticalagriculture:water_essence',
    'mysticalagriculture:water_essence',
    'mysticalagriculture:water_essence',
    'minecraft:gravel',
    'minecraft:gravel',
    'minecraft:gravel',
    'minecraft:gravel',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/clay');

  //dirt
  event.recipes.createMixing('8x minecraft:dirt', [
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'mysticalagriculture:dirt_essence',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:flint',
    'minecraft:flint',
    Fluid.of('minecraft:lava', 100)
  ]).superheated().id('createofb:mysticalagriculture/essence/dirt');

  })