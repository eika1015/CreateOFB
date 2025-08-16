ServerEvents.recipes((event) => {
    const { tconstruct } = event.recipes;

    tconstruct.melting(Fluid.of("create_deep_dark:molten_echo", 30), 
    "minecraft:echo_shard").temperature(1500).time(40);

    tconstruct.melting(Fluid.of("createmetallurgy:molten_void_steel", 90), 
    "createutilities:void_steel_ingot").temperature(3200).time(100);

    tconstruct.melting(Fluid.of("kubejs:molten_draconium", 120), 
    "draconicevolution:draconium_dust").temperature(5800).time(100);


  })