ServerEvents.recipes(event => {

    let casing = 'minecraft:furnace'
    //primitive alloy smelter
    event.remove({output: 'enderio:primitive_alloy_smelter'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:primitive_alloy_smelter').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
      event.recipes.createDeploying(casing, [casing, 'minecraft:deepslate']),
      event.recipes.createDeploying(casing, [casing, 'enderio:grains_of_infinity']),
      event.recipes.createDeploying(casing, [casing, 'create:blaze_burner']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:enderio/machine/primitive_alloy_smelter');

    //alloy smelter
    casing = 'enderio:primitive_alloy_smelter'
    event.remove({output: 'enderio:alloy_smelter'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:alloy_smelter').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'enderio:void_chassis']),
      event.recipes.createDeploying(casing, [casing, 'thermal:dynamo_fuel_augment']),
      event.recipes.createDeploying(casing, [casing, 'enderio:dark_bimetal_gear']),
      event.recipes.createDeploying(casing, [casing, 'create:blaze_burner']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'enderio:void_chassis'])
    ]).transitionalItem(casing).loops(2).id('createofb:enderio/machine/alloy_smelter');

    //painting machine
    casing = 'enderio:void_chassis'
    event.remove({output: 'enderio:painting_machine'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:painting_machine').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'enderio:copper_alloy_ingot']),
      event.recipes.createDeploying(casing, [casing, 'enderio:redstone_alloy_ingot']),
      event.recipes.createDeploying(casing, [casing, 'create:spout']),
      event.recipes.createDeploying(casing, [casing, 'enderio:pulsating_crystal']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(casing).loops(2).id('createofb:enderio/machine/painting');

    //wired charger
    event.remove({output: 'enderio:wired_charger'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:wired_charger').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'createaddition:tesla_coil']),
      event.recipes.createDeploying(casing, [casing, 'thermal:dynamo_output_augment']),
      event.recipes.createDeploying(casing, [casing, 'enderio:octadic_capacitor']),
      event.recipes.createDeploying(casing, [casing, 'thermal:rf_coil']),
      event.recipes.createDeploying(casing, [casing, 'enderio:energy_conduit']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(casing).loops(2).id('createofb:enderio/machine/wired_charger');

    //stirling generator
    event.remove({output: 'enderio:stirling_generator'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:stirling_generator').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'enderio:dark_bimetal_gear']),
      event.recipes.createDeploying(casing, [casing, 'thermal:dynamo_output_augment']),
      event.recipes.createDeploying(casing, [casing, 'minecraft:furnace']),
      event.recipes.createDeploying(casing, [casing, 'create:blaze_burner']),
      event.recipes.createDeploying(casing, [casing, 'minecraft:piston']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(casing).loops(2).id('createofb:enderio/machine/stirling_generator');

    //sag mill
    event.remove({output: 'enderio:sag_mill'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:sag_mill').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'enderio:dark_steel_block']),
      event.recipes.createDeploying(casing, [casing, 'enderio:dark_bimetal_gear']),
      event.recipes.createDeploying(casing, [casing, 'create:millstone']),
      event.recipes.createDeploying(casing, [casing, 'create:mechanical_drill']),
      event.recipes.createDeploying(casing, [casing, 'minecraft:piston']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(casing).loops(2).id('createofb:enderio/machine/sag_mill');

    //slice and splice
    event.remove({output: 'enderio:slice_and_splice'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:slice_and_splice').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'enderio:ensouled_chassis']),
      event.recipes.createDeploying(casing, [casing, 'enderio:energized_gear']),
      event.recipes.createDeploying(casing, [casing, '#forge:heads']),
      event.recipes.createDeploying(casing, [casing, 'enderio:soularium_ingot']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'enderio:ensouled_chassis'])
    ]).transitionalItem(casing).loops(2).id('createofb:enderio/machine/slice_and_splice');

    //inpulse hopper
    event.remove({output: 'enderio:impulse_hopper'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:impulse_hopper').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'minecraft:hopper']),
      event.recipes.createDeploying(casing, [casing, 'enderio:energized_gear']),
      event.recipes.createDeploying(casing, [casing, 'enderio:copper_alloy_ingot']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'tfmg:heavy_machinery_casing']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(casing).loops(2).id('createofb:enderio/machine/impulse_hopper');

    //soul binder
    event.remove({output: 'enderio:soul_binder'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:soul_binder').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'enderio:ensouled_chassis']),
      event.recipes.createDeploying(casing, [casing, 'enderio:energized_gear']),
      event.recipes.createDeploying(casing, [casing, 'enderio:soularium_block']),
      event.recipes.createDeploying(casing, [casing, 'enderio:z_logic_controller']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'enderio:ensouled_chassis'])
    ]).transitionalItem(casing).loops(2).id('createofb:enderio/machine/soul_binder');

    //powered apawner remove
    event.remove({output: 'enderio:powered_apawner'});

    //vacuum chest
    event.remove({output: 'enderio:vacuum_chest'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:vacuum_chest').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'minecraft:ender_chest']),
      event.recipes.createDeploying(casing, [casing, 'enderstorage:ender_chest']),
      event.recipes.createDeploying(casing, [casing, 'createendertransmission:item_transmitter']),
      event.recipes.createFilling(casing, [casing, Fluid.of('createmetallurgy:molten_void_steel', 500)]),
    ]).transitionalItem(casing).loops(4).id('createofb:enderio/machine/vacuum_chest');

    //XP vacuum
    event.remove({output: 'enderio:xp_vacuum'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:xp_vacuum').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'enderio:pulsating_crystal']),
      event.recipes.createDeploying(casing, [casing, 'enderio:experience_rod']),
      event.recipes.createDeploying(casing, [casing, 'createendertransmission:fluid_transmitter']),
      event.recipes.createFilling(casing, [casing, Fluid.of('create_enchantment_industry:experience', 300)]),
    ]).transitionalItem(casing).loops(4).id('createofb:enderio/machine/xp_vacuum');

    //travel anchor
    event.remove({output: 'enderio:travel_anchor'});

    //crafter
    event.remove({output: 'enderio:crafter'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:crafter').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'createhaven:diamond_casing']),
      event.recipes.createDeploying(casing, [casing, '#forge:gears/iron']),
      event.recipes.createDeploying(casing, [casing, '#forge:silicon']),
      event.recipes.createDeploying(casing, [casing, 'minecraft:crafting_table']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'createhaven:diamond_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:enderio/machine/crafter');

    //soul engine
    event.remove({output: 'enderio:soul_engine'});

    //drain
    event.remove({output: 'enderio:drain'});

    //XP obelisk
    event.remove({output: 'enderio:xp_obelisk'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:xp_obelisk').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'enderio:ensouled_chassis']),
      event.recipes.createDeploying(casing, [casing, 'enderio:soularium_block']),
      event.recipes.createDeploying(casing, [casing, 'enderio:experience_rod']),
      event.recipes.createDeploying(casing, [casing, 'enderio:xp_vacuum']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'enderio:ensouled_chassis'])
    ]).transitionalItem(casing).loops(2).id('createofb:enderio/machine/xp_obelisk');

    //aversion obelisk
    event.remove({output: 'enderio:aversion_obelisk'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:aversion_obelisk').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'enderio:ensouled_chassis']),
      event.recipes.createDeploying(casing, [casing, 'enderio:soularium_block']),
      event.recipes.createDeploying(casing, [casing, 'enderio:enderman_head']),
      event.recipes.createDeploying(casing, [casing, 'enderio:energetic_alloy_block']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'enderio:ensouled_chassis'])
    ]).transitionalItem(casing).loops(2).id('createofb:enderio/machine/aversion_obelisk');

    //enchanter
    event.remove({output: 'enderio:enchanter'});


})