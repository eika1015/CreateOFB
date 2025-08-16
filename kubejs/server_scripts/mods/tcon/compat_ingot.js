ServerEvents.recipes((event) => {
    const { tconstruct } = event.recipes;

    //iron
    event.recipes.tfmg.industrial_blasting(
        "create:crushed_raw_iron", 
        [
            Fluid.of("tconstruct:molten_iron", 180),
            Fluid.of("tconstruct:molten_steel", 30)
        ], 1
    ).id('createofb:compat/tfmg/molten_metal/iron');


    //gold
    event.recipes.tfmg.industrial_blasting(
        "create:crushed_raw_gold", 
        [
            Fluid.of("tconstruct:molten_gold", 180),
            Fluid.of("tconstruct:molten_cobalt", 30)
        ], 1
    ).id('createofb:compat/tfmg/molten_metal/gold');


    //copper
    event.recipes.tfmg.industrial_blasting(
        "create:crushed_raw_copper", 
        [
            Fluid.of("tconstruct:molten_copper", 180),
            Fluid.of("tconstruct:molten_gold", 30)
        ], 1
    ).id('createofb:compat/tfmg/molten_metal/copper');



})