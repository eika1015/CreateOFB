ServerEvents.recipes(event => {
    const { tconstruct } = event.recipes;

    //adding recipe andesite alloy
    event.remove({output: Fluid.of('createmetalwork:molten_andesite_alloy')});
    event.remove({output: Fluid.of('createmetalwork:molten_andesite')});
    //event.remove({mod: 'createmetalwork'});

	event.recipes.tconstruct.alloy(
        Fluid.of("createmetalwork:molten_andesite_alloy", 90), 
        [
            Fluid.of("tconstruct:molten_iron", 180), 
            Fluid.of("createmetalwork:molten_andesite", 360)
        ]
    ).temperature(1000).id('createofb:compat/andesite_alloy/molten_andesite_alloy');

    tconstruct.melting(
        Fluid.of("createmetalwork:molten_andesite", 90), 
        "minecraft:andesite"
    ).temperature(600).time(100).id('createofb:compat/andesite_alloy/molten_andesite_1');

    event.recipes.tfmg.industrial_blasting(
        "createmetalwork:andesite_dust", 
        [
            Fluid.of("createmetalwork:molten_andesite", 180), 
            Fluid.of("tconstruct:molten_iron", 10)
        ], 1
    ).id('createofb:compat/andesite_alloy/molten_andesite_2');

    tconstruct.melting(
        Fluid.of("createmetalwork:molten_andesite", 90), 
        "createmetalwork:andesite_dust"
    ).temperature(600).time(100).id('createofb:compat/andesite_alloy/molten_andesite_3');

})