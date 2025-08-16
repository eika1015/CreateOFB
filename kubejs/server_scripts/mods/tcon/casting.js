ServerEvents.recipes((event) => {
    const { tconstruct } = event.recipes;

    //Casting echo ingot
    tconstruct
    .casting_table("create_deep_dark:echo_ingot", 
        Fluid.of("create_deep_dark:molten_echo", 90), 
        "minecraft:netherite_ingot")
    .cast_consumed(true)
    .cooling_time(200)
    .switch_slots(true);

    
    //Casting echo block
    tconstruct
    .casting_basin("create_deep_dark:echo_block", 
        Fluid.of("create_deep_dark:molten_echo", 810), 
        "minecraft:netherite_block")
    .cast_consumed(true)
    .cooling_time(1000)
    .switch_slots(true);

    

    tconstruct
    .casting_basin("enderio:clear_glass", 
        Fluid.of("tconstruct:molten_glass", 250), 
        "minecraft:glass")
    .cast_consumed(true)
    .cooling_time(100)
    .switch_slots(true);



    tconstruct
    .casting_basin("enderio:fused_quartz", 
        Fluid.of("tconstruct:molten_glass", 1000), 
        "minecraft:quartz_block")
    .cast_consumed(true)
    .cooling_time(100)
    .switch_slots(true);



    tconstruct
    .casting_basin("enderio:clear_glass_d", 
        Fluid.of("tconstruct:molten_glass", 1000), 
        "minecraft:amethyst_block")
    .cast_consumed(true)
    .cooling_time(100)
    .switch_slots(true);



    tconstruct
    .casting_basin("enderio:clear_glass_e", 
        Fluid.of("tconstruct:molten_glass", 1000), 
        "minecraft:glowstone")
    .cast_consumed(true)
    .cooling_time(100)
    .switch_slots(true);


    tconstruct
    .casting_table("draconicevolution:draconium_ingot", 
        Fluid.of("kubejs:molten_draconium", 90), 
        "tconstruct:ingot_cast")
    .cooling_time(200)
    .switch_slots(true);

  })