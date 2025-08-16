ServerEvents.recipes(event => {

    event.remove({output: 'enderio:void_chassis',});
    event.shaped(
        Item.of('enderio:void_chassis'),
        [
          'CAC',
          'ABA',
          'CAC'
        ],
        {
          A: 'enderio:grains_of_infinity',
          B: 'create:precision_mechanism',
          C: '#forge:ingots/iron'
        }
      ).id('createofb:enderio/item/void_chassis');

    event.remove({output: 'enderio:ensouled_chassis'});
    event.recipes.create.mechanical_crafting('enderio:ensouled_chassis', [
      'CSSSC',
      'SCBCS',
      'SBIBS',
      'SCBCS',
      'CSSSC'
    ], {
      C: 'enderio:soul_chain',
      S: 'enderio:soularium_ingot',
      B: 'create:brass_ingot',
      I: 'create_dd:infernal_mechanism'
    }).id('createofb:enderio/item/ensouled_chassis');

    event.remove({output: 'enderio:basic_capacitor_bank'});
    event.recipes.create.mechanical_crafting('enderio:basic_capacitor_bank', [
      'MMMMM',
      'MCECM',
      'MEAEM',
      'MCECM',
      'MMMMM'
    ], {
      A: 'create:precision_mechanism',
      C: 'enderio:basic_capacitor',
      E: 'create:electron_tube',
      M: 'tfmg:magnetic_ingot'
    }).id('createofb:enderio/item/basic_capacitor_bank');

    event.remove({output: 'enderio:advanced_capacitor_bank'});
    event.recipes.create.mechanical_crafting('enderio:advanced_capacitor_bank', [
      'MMMMM',
      'MCECM',
      'MEAEM',
      'MCECM',
      'MMMMM'
    ], {
      A: 'create_dd:integrated_mechanism',
      C: 'enderio:double_layer_capacitor',
      E: 'create:electron_tube',
      M: 'enderio:energetic_alloy_block'
    }).id('createofb:enderio/item/advanced_capacitor_bank');

    event.remove({output: 'enderio:vibrant_capacitor_bank'});
    event.recipes.create.mechanical_crafting('enderio:vibrant_capacitor_bank', [
      'MMMMM',
      'MCECM',
      'MEAEM',
      'MCECM',
      'MMMMM'
    ], {
      A: 'create_dd:calculation_mechanism',
      C: 'enderio:octadic_capacitor',
      E: 'create:electron_tube',
      M: 'enderio:vibrant_alloy_block'
    }).id('createofb:enderio/item/vibrant_capacitor_bank');

    event.remove({output: 'enderio:energy_conduit'});
    event.recipes.create.mechanical_crafting('16x enderio:energy_conduit', [
      'MMMMM',
      'MCCCM',
      'MCACM',
      'MCCCM',
      'MMMMM'
    ], {
      A: 'create_dd:infernal_mechanism',
      C: 'enderio:conductive_alloy_ingot',
      M: 'enderio:conduit_binder'
    }).id('createofb:enderio/item/energy_conduit');

    event.remove({output: 'enderio:fluid_conduit'});
    event.recipes.create.mechanical_crafting('16x enderio:fluid_conduit', [
      'MMMMM',
      'MCCCM',
      'MCACM',
      'MCCCM',
      'MMMMM'
    ], {
      A: 'create_dd:calculation_mechanism',
      C: '#enderio:clear_glass',
      M: 'enderio:conduit_binder'
    }).id('createofb:enderio/item/fluid_conduit');

    event.remove({output: 'enderio:pressurized_fluid_conduit'});
    event.recipes.create.mechanical_crafting('32x enderio:pressurized_fluid_conduit', [
      'MMMMM',
      'MCCCM',
      'MCACM',
      'MCCCM',
      'MMMMM'
    ], {
      A: 'create_dd:infernal_mechanism',
      C: 'enderio:fluid_conduit',
      M: 'enderio:conduit_binder'
    }).id('createofb:enderio/item/pressurized_fluid_conduit');

    event.remove({output: 'enderio:ender_fluid_conduit'});
    event.recipes.create.mechanical_crafting('64x enderio:ender_fluid_conduit', [
      'MMMMM',
      'MCCCM',
      'MCACM',
      'MCCCM',
      'MMMMM'
    ], {
      A: 'create_dd:infernal_mechanism',
      C: 'enderio:vibrant_alloy_ingot',
      M: 'enderio:pressurized_fluid_conduit'
    }).id('createofb:enderio/item/ender_fluid_conduit');

    event.remove({output: 'enderio:redstone_conduit'});
    event.recipes.create.mechanical_crafting('16x enderio:redstone_conduit', [
      'MMMMM',
      'MCCCM',
      'MCACM',
      'MCCCM',
      'MMMMM'
    ], {
      A: 'create_dd:infernal_mechanism',
      C: 'enderio:redstone_alloy_ingot',
      M: 'enderio:conduit_binder'
    }).id('createofb:enderio/item/redstone_conduit');

    event.remove({output: 'enderio:item_conduit'});
    event.recipes.create.mechanical_crafting('16x enderio:item_conduit', [
      'MMMMM',
      'MCCCM',
      'MCACM',
      'MCCCM',
      'MMMMM'
    ], {
      A: 'create_dd:sealed_mechanism',
      C: 'enderio:pulsating_alloy_ingot',
      M: 'enderio:conduit_binder'
    }).id('createofb:enderio/item/item_conduit');

    event.remove({output: 'enderio:basic_item_filter'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:basic_item_filter').withChance(100.0)
    ], 'minecraft:hopper', [ 
      event.recipes.createPressing('minecraft:hopper', 'minecraft:hopper'),
      event.recipes.createPressing('minecraft:hopper', 'minecraft:hopper'),
      event.recipes.createPressing('minecraft:hopper', 'minecraft:hopper'),
      event.recipes.createPressing('minecraft:hopper', 'minecraft:hopper')
    ]).transitionalItem('minecraft:hopper').loops(1).id('createofb:enderio/item/basic_item_filter');
  
    let base = 'enderio:basic_item_filter'
    event.remove({output: 'enderio:extraction_speed_upgrade_1'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:extraction_speed_upgrade_1').withChance(100.0)
    ], base, [ 
      event.recipes.createPressing(base, base),
      event.recipes.createDeploying(base, [base, 'enderio:redstone_alloy_ingot']),
      event.recipes.createDeploying(base, [base, 'createutilities:void_steel_ingot']),
      event.recipes.createDeploying(base, [base, 'create_dd:integrated_mechanism']),
      event.recipes.createFilling(base, [base, Fluid.of('createbb:methanol', 300)]),
    ]).transitionalItem(base).loops(1).id('createofb:enderio/item/extraction_speed_upgrade_1');

    base = 'enderio:extraction_speed_upgrade_1'
    event.remove({output: 'enderio:extraction_speed_upgrade_2'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:extraction_speed_upgrade_2').withChance(100.0)
    ], base, [ 
      event.recipes.createPressing(base, base),
      event.recipes.createDeploying(base, [base, 'enderio:conductive_alloy_ingot']),
      event.recipes.createDeploying(base, [base, 'createutilities:void_steel_ingot']),
      event.recipes.createDeploying(base, [base, 'create_dd:calculation_mechanism']),
      event.recipes.createFilling(base, [base, Fluid.of('createbb:methanol', 300)]),
    ]).transitionalItem(base).loops(1).id('createofb:enderio/item/extraction_speed_upgrade_2');

    base = 'enderio:extraction_speed_upgrade_2'
    event.remove({output: 'enderio:extraction_speed_upgrade_3'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:extraction_speed_upgrade_3').withChance(100.0)
    ], base, [ 
      event.recipes.createPressing(base, base),
      event.recipes.createDeploying(base, [base, 'enderio:soularium_ingot']),
      event.recipes.createDeploying(base, [base, 'createutilities:void_steel_ingot']),
      event.recipes.createDeploying(base, [base, 'create_dd:infernal_mechanism']),
      event.recipes.createFilling(base, [base, Fluid.of('createbb:methanol', 500)]),
    ]).transitionalItem(base).loops(1).id('createofb:enderio/item/extraction_speed_upgrade_3');

    base = 'enderio:extraction_speed_upgrade_3'
    event.remove({output: 'enderio:extraction_speed_upgrade_4'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:extraction_speed_upgrade_4').withChance(100.0)
    ], base, [ 
      event.recipes.createPressing(base, base),
      event.recipes.createDeploying(base, [base, 'enderio:energetic_alloy_ingot']),
      event.recipes.createDeploying(base, [base, 'createutilities:void_steel_ingot']),
      event.recipes.createDeploying(base, [base, 'create_dd:sealed_mechanism']),
      event.recipes.createFilling(base, [base, Fluid.of('createbb:methanol', 1000)]),
    ]).transitionalItem(base).loops(1).id('createofb:enderio/item/extraction_speed_upgrade_4');

    event.remove({output: 'enderio:dense_me_conduit'});
    event.recipes.create.mechanical_crafting('8x enderio:dense_me_conduit', [
      'MMMMM',
      'MCCCM',
      'MCACM',
      'MCCCM',
      'MMMMM'
    ], {
      A: 'create_dd:infernal_mechanism',
      C: '#ae2:covered_dense_cable',
      M: 'enderio:conduit_binder'
    }).id('createofb:enderio/item/dense_me_conduit');

    event.remove({output: 'enderio:me_conduit'});
    event.recipes.create.mechanical_crafting('8x enderio:me_conduit', [
      'MMMMM',
      'MCCCM',
      'MCACM',
      'MCCCM',
      'MMMMM'
    ], {
      A: 'create_dd:sealed_mechanism',
      C: '#ae2:covered_cable',
      M: 'enderio:conduit_binder'
    }).id('createofb:enderio/item/me_conduit_1');

    event.remove({output: 'enderio:me_conduit'});
    event.recipes.create.mechanical_crafting('8x enderio:me_conduit', [
      'MMMMM',
      'MCCCM',
      'MCACM',
      'MCCCM',
      'MMMMM'
    ], {
      A: 'create_dd:sealed_mechanism',
      C: '#ae2:glass_cable',
      M: 'enderio:conduit_binder'
    }).id('createofb:enderio/item/me_conduit_2');

    event.remove({output: 'enderio:chemical_conduit'});
    event.recipes.create.mechanical_crafting('8x enderio:chemical_conduit', [
      'MMMMM',
      'MCCCM',
      'MCACM',
      'MCCCM',
      'MMMMM'
    ], {
      A: 'create_dd:calculation_mechanism',
      C: 'mekanism:basic_pressurized_tube',
      M: 'enderio:conduit_binder'
    }).id('createofb:enderio/item/chemical_conduit');

    event.remove({output: 'enderio:pressurized_chemical_conduit'});
    event.recipes.create.mechanical_crafting('8x enderio:pressurized_chemical_conduit', [
      'MMMMM',
      'MCCCM',
      'MCACM',
      'MCCCM',
      'MMMMM'
    ], {
      A: 'create_dd:infernal_mechanism',
      C: 'mekanism:advanced_pressurized_tube',
      M: 'enderio:conduit_binder'
    }).id('createofb:enderio/item/pressurized_chemical_conduit');

    event.remove({output: 'enderio:ender_chemical_conduit'});
    event.recipes.create.mechanical_crafting('8x enderio:ender_chemical_conduit', [
      'MMMMM',
      'MCCCM',
      'MCACM',
      'MCCCM',
      'MMMMM'
    ], {
      A: 'create_dd:sealed_mechanism',
      C: 'mekanism:elite_pressurized_tube',
      M: 'enderio:conduit_binder'
    }).id('createofb:enderio/item/elite_chemical_conduit');

    event.remove({output: 'enderio:heat_conduit'});
    event.recipes.create.mechanical_crafting('8x enderio:heat_conduit', [
      'MMMMM',
      'MCCCM',
      'MCACM',
      'MCCCM',
      'MMMMM'
    ], {
      A: 'create_dd:infernal_mechanism',
      C: 'mekanism:advanced_thermodynamic_conductor',
      M: 'enderio:conduit_binder'
    }).id('createofb:enderio/item/heat_conduit');

    event.remove({output: 'enderio:experience_rod'});
    event.recipes.create.mechanical_crafting('enderio:experience_rod', [
      'M',
      'M',
      'E',
      'S',
      'S'
    ], {
      M: 'enderio:energetic_alloy_ingot',
      E: 'create:experience_block',
      S: 'enderio:soularium_ingot'
    }).id('createofb:enderio/item/experience_rod');

    base = 'enderio:basic_item_filter'
    event.remove({output: 'enderio:advanced_item_filter'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:advanced_item_filter').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'enderio:z_logic_controller']),
      event.recipes.createDeploying(base, [base, 'minecraft:redstone']),
      event.recipes.createDeploying(base, [base, 'create_dd:infernal_mechanism'])
    ]).transitionalItem(base).loops(1).id('createofb:enderio/item/advanced_item_filter');

    event.remove({output: 'enderio:basic_fluid_filter'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:basic_fluid_filter').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:bucket']),
      event.recipes.createDeploying(base, [base, 'minecraft:redstone']),
      event.recipes.createDeploying(base, [base, 'create_dd:infernal_mechanism'])
    ]).transitionalItem(base).loops(1).id('createofb:enderio/item/basic_fluid_filter');

    event.remove({output: 'enderio:entity_filter'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:entity_filter').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'enderio:empty_soul_vial']),
      event.recipes.createDeploying(base, [base, 'minecraft:redstone']),
      event.recipes.createDeploying(base, [base, 'create_dd:infernal_mechanism'])
    ]).transitionalItem(base).loops(1).id('createofb:enderio/item/entity_filter');

    event.remove({output: 'enderio:redstone_filter_base'});
    event.recipes.create.sequenced_assembly([
      Item.of('enderio:redstone_filter_base').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'enderio:redstone_alloy_ingot']),
      event.recipes.createDeploying(base, [base, 'minecraft:redstone']),
      event.recipes.createDeploying(base, [base, 'create_dd:infernal_mechanism'])
    ]).transitionalItem(base).loops(1).id('createofb:enderio/item/redstone_filter_base');
  
})