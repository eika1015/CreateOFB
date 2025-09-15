ServerEvents.recipes((event) => {
    const { tconstruct } = event.recipes;

    tconstruct.melting(Fluid.of("create_deep_dark:molten_echo", 30), 
    "minecraft:echo_shard").temperature(1500).time(40);

    tconstruct.melting(Fluid.of("createmetallurgy:molten_void_steel", 90), 
    "createutilities:void_steel_ingot").temperature(3200).time(100);

    tconstruct.melting(Fluid.of("kubejs:molten_draconium", 90), 
    "draconicevolution:draconium_dust").temperature(3600).time(100);

    tconstruct.melting(Fluid.of("kubejs:molten_energetic_alloy", 90), 
    "enderio:energetic_alloy_ingot").temperature(2000).time(100);

    tconstruct.melting(Fluid.of("kubejs:molten_vibrant_alloy", 90), 
    "enderio:vibrant_alloy_ingot").temperature(2000).time(100);

    tconstruct.melting(Fluid.of("kubejs:molten_redstone_alloy", 90), 
    "enderio:redstone_alloy_ingot").temperature(2000).time(100);

    tconstruct.melting(Fluid.of("kubejs:dimensionalshard", 10), 
    "rftoolsbase:dimensionalshard").temperature(5800).time(100);

  })