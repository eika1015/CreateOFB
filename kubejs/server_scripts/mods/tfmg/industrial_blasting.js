ServerEvents.recipes(event => {

    event.recipes.tfmg.industrial_blasting(
        "create:crushed_raw_zinc", 
        [
            Fluid.of("tconstruct:molten_zinc", 80), 
            Fluid.of("tconstruct:molten_tin", 60)
        ], 1
    ).id('createofb:compat/industrial_blasting/zinc');


    event.recipes.tfmg.industrial_blasting(
        "create:crushed_raw_osmium", 
        [
            Fluid.of("tconstruct:molten_osmium", 80), 
            Fluid.of("tconstruct:molten_nickel", 60)
        ], 1
    ).id('createofb:compat/industrial_blasting/osmium');


    event.recipes.tfmg.industrial_blasting(
        "create:crushed_raw_platinum", 
        [
            Fluid.of("tconstruct:molten_platinum", 80), 
            Fluid.of("tconstruct:molten_osmium", 60)
        ], 1
    ).id('createofb:compat/industrial_blasting/platinum');


    event.recipes.tfmg.industrial_blasting(
        "create:crushed_raw_silver", 
        [
            Fluid.of("tconstruct:molten_silver", 80), 
            Fluid.of("tconstruct:molten_lead", 60)
        ], 1
    ).id('createofb:compat/industrial_blasting/silver');


    event.recipes.tfmg.industrial_blasting(
        "create:crushed_raw_tin", 
        [
            Fluid.of("tconstruct:molten_tin", 80), 
            Fluid.of("tconstruct:molten_copper", 60)
        ], 1
    ).id('createofb:compat/industrial_blasting/tin');


    event.recipes.tfmg.industrial_blasting(
        "create:crushed_raw_lead", 
        [
            Fluid.of("tconstruct:molten_lead", 80), 
            Fluid.of("tconstruct:molten_aluminum", 60)
        ], 1
    ).id('createofb:compat/industrial_blasting/lead');


    event.recipes.tfmg.industrial_blasting(
        "create:crushed_raw_aluminum", 
        [
            Fluid.of("tconstruct:molten_aluminum", 80), 
            Fluid.of("tconstruct:molten_zinc", 60)
        ], 1
    ).id('createofb:compat/industrial_blasting/aluminum');


    event.recipes.tfmg.industrial_blasting(
        "create:crushed_raw_nickel", 
        [
            Fluid.of("tconstruct:molten_nickel", 80), 
            Fluid.of("tconstruct:molten_platinum", 60)
        ], 1
    ).id('createofb:compat/industrial_blasting/nickel');


    event.recipes.tfmg.industrial_blasting(
        "create:crushed_raw_uranium", 
        [
            Fluid.of("tconstruct:molten_uranium", 80), 
            Fluid.of("tconstruct:molten_debris", 60)
        ], 1
    ).id('createofb:compat/industrial_blasting/uranium');


    event.recipes.tfmg.industrial_blasting(
        "createmetalwork:netherite_scrap_dust", 
        [
            Fluid.of("tconstruct:molten_netherite", 80), 
            Fluid.of("tconstruct:molten_diamond", 60)
        ], 1
    ).id('createofb:compat/industrial_blasting/netherite');

    event.recipes.tfmg.industrial_blasting(
        "kubejs:crush_raw_cobalt", 
        [
            Fluid.of("tconstruct:molten_cobalt", 80), 
            Fluid.of("tconstruct:molten_netherite", 60)
        ], 1
    ).id('createofb:compat/industrial_blasting/cobalt');

})
