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


    //vibrant alloy
    tconstruct
    .casting_table("enderio:vibrant_alloy_ingot", 
        Fluid.of("kubejs:molten_vibrant_alloy", 90), 
        "tconstruct:ingot_cast")
    .cooling_time(200)
    .switch_slots(true)
    .id('createofb:compat/ingot/vibrant_alloy');


    //energetic alloy
    tconstruct
    .casting_table("enderio:energetic_alloy_ingot", 
        Fluid.of("kubejs:molten_energetic_alloy", 90), 
        "tconstruct:ingot_cast")
    .cooling_time(200)
    .switch_slots(true)
    .id('createofb:compat/ingot/energetic_alloy');

    //redstone alloy
    tconstruct
    .casting_table("enderio:redstone_alloy_ingot", 
        Fluid.of("kubejs:molten_redstone_alloy", 90), 
        "tconstruct:ingot_cast")
    .cooling_time(200)
    .switch_slots(true)
    .id('createofb:compat/ingot/redstone_alloy');

    //infused diamond
    event.remove({output: 'rftoolsbase:infused_diamond'});
    tconstruct
    .casting_table("rftoolsbase:infused_diamond", 
        Fluid.of("kubejs:dimensionalshard", 90), 
        "minecraft:diamond")
    .cooling_time(200)
    .switch_slots(true)
    .cast_consumed(true)
    .id('createofb:compat/ingot/infused_diamond');

    //infused ender pearl
    event.remove({output: 'rftoolsbase:infused_enderpearl'});
    tconstruct
    .casting_table("rftoolsbase:infused_enderpearl", 
        Fluid.of("kubejs:dimensionalshard", 90), 
        "minecraft:ender_pearl")
    .cooling_time(200)
    .switch_slots(true)
    .cast_consumed(true)
    .id('createofb:compat/ingot/infused_enderpearl');

  })