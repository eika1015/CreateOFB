ServerEvents.recipes((event) => {

    event.remove({output: 'industrialforegoing:ore_laser_base'});
    event.remove({output: 'industrialforegoing:laser_drill'});
    event.remove({output: 'industrialforegoing:fluid_laser_base'});

    let base = 'industrialforegoing:machine_frame_pity'

    event.remove({output: 'industrialforegoing:dissolution_chamber'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:dissolution_chamber').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, '#forge:gears/diamond']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, '#forge:chests']),
      event.recipes.createDeploying(base, [base, 'create:depot']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/dissolution_chamber');

    event.remove({output: 'industrialforegoing:plant_gatherer'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:plant_gatherer').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, 'minecraft:iron_axe']),
      event.recipes.createDeploying(base, [base, 'minecraft:iron_hoe']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/plant_gatherer');

    event.remove({output: 'industrialforegoing:sewer'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:sewer').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, 'minecraft:brick']),
      event.recipes.createDeploying(base, [base, 'minecraft:bucket']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/sewer');

    event.remove({output: 'industrialforegoing:sewage_composter'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:sewer').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, 'minecraft:piston']),
      event.recipes.createDeploying(base, [base, 'minecraft:furnace']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:brick']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/sewage_composter');

    event.remove({output: 'industrialforegoing:plant_sower'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:plant_sower').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, 'minecraft:piston']),
      event.recipes.createDeploying(base, [base, 'minecraft:flower_pot']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/plant_sower');

    event.remove({output: 'industrialforegoing:mob_slaughter_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mob_slaughter_factory').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, 'minecraft:iron_sword']),
      event.recipes.createDeploying(base, [base, 'minecraft:iron_axe']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/mob_slaughter_factory');

    event.remove({output: 'industrialforegoing:animal_rancher'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:animal_rancher').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, 'minecraft:shears']),
      event.recipes.createDeploying(base, [base, 'minecraft:bucket']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:mechanical_saw']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/animal_rancher');

    event.remove({output: 'industrialforegoing:animal_feeder'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:animal_feeder').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, 'minecraft:golden_carrot']),
      event.recipes.createDeploying(base, [base, 'minecraft:golden_apple']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'minecraft:purple_dye']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/animal_feeder');

    event.remove({output: 'industrialforegoing:animal_baby_separator'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:animal_baby_separator').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, 'minecraft:golden_carrot']),
      event.recipes.createDeploying(base, [base, 'minecraft:wheat']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'minecraft:purple_dye']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/animal_baby_separator');

    event.remove({output: 'industrialforegoing:resourceful_furnace'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:resourceful_furnace').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, 'minecraft:furnace']),
      event.recipes.createDeploying(base, [base, 'enderio:pressurized_fluid_tank']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'minecraft:bucket']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/resourceful_furnace');

    event.remove({output: 'industrialforegoing:sludge_refiner'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:sludge_refiner').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, 'minecraft:furnace']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'minecraft:bucket']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/sludge_refiner');

    event.remove({output: 'industrialforegoing:water_condensator'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:water_condensator').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, 'minecraft:piston']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'minecraft:water_bucket']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/water_condensator');

    event.remove({output: 'industrialforegoing:block_placer'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:block_placer').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, 'minecraft:dropper']),
      event.recipes.createDeploying(base, [base, 'create:deployer']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/block_placer');

    event.remove({output: 'industrialforegoing:block_breaker'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:block_breaker').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, 'minecraft:iron_shovel']),
      event.recipes.createDeploying(base, [base, 'minecraft:iron_pickaxe']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:mechanical_drill']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/block_breaker');

    event.remove({output: 'industrialforegoing:fluid_collector'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:fluid_collector').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, 'minecraft:bucket']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:basin']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/fluid_collector');

    event.remove({output: 'industrialforegoing:fluid_placer'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:fluid_placer').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, 'minecraft:water_bucket']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:basin']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/fluid_placer');

    event.remove({output: 'industrialforegoing:dye_mixer'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:dye_mixer').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, '#forge:dyes']),
      event.recipes.createDeploying(base, [base, 'create:mechanical_mixer']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/dye_mixer');

    event.remove({output: 'industrialforegoing:spores_recreator'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:spores_recreator').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, '#forge:mushrooms']),
      event.recipes.createDeploying(base, [base, 'create:mechanical_mixer']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/spores_recreator');

    base = 'industrialforegoing:machine_frame_simple'

    event.remove({output: 'industrialforegoing:plant_fertilizer'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:plant_fertilizer').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, '#forge:leather']),
      event.recipes.createDeploying(base, [base, 'create:deployer']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/plant_fertilizer');

    event.remove({output: 'industrialforegoing:hydroponic_bed'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:hydroponic_bed').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, 'minecraft:iron_hoe']),
      event.recipes.createDeploying(base, [base, 'createbb:white_meth']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/hydroponic_bed');

    event.remove({output: 'industrialforegoing:marine_fisher'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:marine_fisher').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, 'minecraft:fishing_rod']),
      event.recipes.createDeploying(base, [base, 'minecraft:bucket']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/marine_fisher');

    event.remove({output: 'industrialforegoing:fermentation_station'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:fermentation_station').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, '#minecraft:logs']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/fermentation_station');

    event.remove({output: 'industrialforegoing:mob_detector'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mob_detector').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:repeater']),
      event.recipes.createDeploying(base, [base, 'minecraft:comparator']),
      event.recipes.createDeploying(base, [base, 'minecraft:observer']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/mob_detector');

    event.remove({output: 'industrialforegoing:material_stonework_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:material_stonework_factory').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:pink_slime']),
      event.recipes.createDeploying(base, [base, 'minecraft:diamond_pickaxe']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/material_stonework_factory');

    event.remove({output: 'industrialforegoing:potion_brewer'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:potion_brewer').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, 'minecraft:repeater']),
      event.recipes.createDeploying(base, [base, 'minecraft:brewing_stand']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/potion_brewer');

    event.remove({output: 'industrialforegoing:mob_crusher'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mob_crusher').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, 'minecraft:book']),
      event.recipes.createDeploying(base, [base, 'minecraft:iron_sword']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/mob_crusher');


    base = 'industrialforegoing:machine_frame_advanced'

    event.remove({output: 'industrialforegoing:washing_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:washing_factory').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/diamond']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:pink_slime_ingot']),
      event.recipes.createDeploying(base, [base, 'minecraft:furnace']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/washing_factory');

    event.remove({output: 'industrialforegoing:fluid_sieving_machine'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:fluid_sieving_machine').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:pink_slime']),
      event.recipes.createDeploying(base, [base, 'minecraft:iron_bars']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/fluid_sieving_machine');

    event.remove({output: 'industrialforegoing:stasis_chamber'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:stasis_chamber').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, 'minecraft:ghast_tear']),
      event.recipes.createDeploying(base, [base, 'minecraft:soul_sand']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/stasis_chamber');

    event.remove({output: 'industrialforegoing:enchantment_sorter'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:enchantment_sorter').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/diamond']),
      event.recipes.createDeploying(base, [base, 'minecraft:book']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_pearl']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/enchantment_sorter');

    event.remove({output: 'industrialforegoing:enchantment_applicator'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:enchantment_applicator').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, 'minecraft:anvil']),
      event.recipes.createDeploying(base, [base, 'minecraft:book']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/enchantment_applicator');

    event.remove({output: 'industrialforegoing:enchantment_extractor'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:enchantment_extractor').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/gold']),
      event.recipes.createDeploying(base, [base, '#forge:gears/diamond']),
      event.recipes.createDeploying(base, [base, 'create:brass_casing']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/enchantment_extractor');

    event.remove({output: 'industrialforegoing:enchantment_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:enchantment_factory').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:enchanting_table']),
      event.recipes.createDeploying(base, [base, '#forge:gears/diamond']),
      event.recipes.createDeploying(base, [base, 'create_enchantment_industry:printer']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/enchantment_factory');

    event.remove({output: 'industrialforegoing:infinity_charger'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:infinity_charger').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/diamond']),
      event.recipes.createDeploying(base, [base, 'minecraft:redstone_block']),
      event.recipes.createDeploying(base, [base, 'minecraft:repeater']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/infinity_charger');

    event.remove({output: 'industrialforegoing:mob_duplicator'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mob_duplicator').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:emerald']),
      event.recipes.createDeploying(base, [base, 'minecraft:nether_wart']),
      event.recipes.createDeploying(base, [base, 'minecraft:magma_cream']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/mob_duplicator');

    base = 'industrialforegoing:machine_frame_supreme'

    event.remove({output: 'industrialforegoing:wither_builder'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:wither_builder').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:wither_skeleton_skull']),
      event.recipes.createDeploying(base, [base, 'minecraft:nether_star']),
      event.recipes.createDeploying(base, [base, 'minecraft:soul_sand']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/wither_builder');


})