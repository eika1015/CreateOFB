ServerEvents.recipes(event => {

  //mekanism machine adding recipe
  //metallurgic infuser
    event.remove({output: 'mekanism:metallurgic_infuser'});
    event.recipes.create.mechanical_crafting('mekanism:metallurgic_infuser', [
      'AAAAA',
      'AZCZA',
      'ABEDA',
      'AFCGA',
      'AAAAA'
    ], {
      A: 'create:andesite_casing',
      B: 'create:spout',
      C: 'minecraft:repeater',
      D: 'create:mechanical_mixer',
      E: 'minecraft:redstone',
      F: 'create:depot',
      G: 'create:basin',
      Z: 'mekanism:ingot_osmium'
    }).id('createofb:mekanism/machine/metallurgic_infuser');


  let casing = 'mekanism:steel_casing'

  //enrichment chamber
    event.remove({output: 'mekanism:enrichment_chamber'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:enrichment_chamber').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
      event.recipes.createDeploying(casing, [casing, 'create:precision_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'create:mechanical_press']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/enrichment_chamber');
  

  //osmium compressor
  event.remove({output: 'mekanism:osmium_compressor'});
  event.recipes.create.sequenced_assembly([
    Item.of('mekanism:osmium_compressor').withChance(100.0)
  ], casing, [ 
    event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
    event.recipes.createDeploying(casing, [casing, 'create:precision_mechanism']),
    event.recipes.createDeploying(casing, [casing, 'mekanism:ingot_osmium']),
    event.recipes.createDeploying(casing, [casing, 'create:mechanical_press']),
    event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
    event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
  ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/osmium_compressor');



  //combiner
  event.remove({output: 'mekanism:combiner'});
  event.recipes.create.sequenced_assembly([
    Item.of('mekanism:combiner').withChance(100.0)
  ], casing, [ 
    event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
    event.recipes.createDeploying(casing, [casing, 'create_dd:calculation_mechanism']),
    event.recipes.createDeploying(casing, [casing, '#forge:ingots/brass']),
    event.recipes.createDeploying(casing, [casing, 'create:mechanical_mixer']),
    event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
    event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
  ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/combiner');

    //crusher
    event.remove({output: 'mekanism:crusher'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:crusher').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
      event.recipes.createDeploying(casing, [casing, 'create:precision_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'create:millstone']),
      event.recipes.createDeploying(casing, [casing, 'create:mechanical_drill']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/crusher');

    //purification chamber
    event.remove({output: 'mekanism:purification_chamber'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:purification_chamber').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:integrated_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'create:fluid_pipe']),
      event.recipes.createDeploying(casing, [casing, 'create:mechanical_mixer']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/purification_chamber');

    //energized smelter
    event.remove({output: 'mekanism:energized_smelter'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:energized_smelter').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
      event.recipes.createDeploying(casing, [casing, 'create:precision_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'minecraft:furnace']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/energized_smelter');

    //mechanical infuser
    event.remove({output: 'mekanism:chemical_infuser'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:chemical_infuser').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:integrated_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'mekanism:basic_chemical_tank']),
      event.recipes.createDeploying(casing, [casing, 'create:spout']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/chemical_infuser');

    let machine = 'mekanism:purification_chamber'

    //chemical injection chamber
    event.remove({output: 'mekanism:chemical_injection_chamber'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:chemical_injection_chamber').withChance(100.0)
    ], machine, [ 
      event.recipes.createDeploying(machine, [machine, 'create:andesite_casing']),
      event.recipes.createDeploying(machine, [machine, 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying(machine, [machine, 'minecraft:gold_ingot']),
      event.recipes.createDeploying(machine, [machine, 'mekanism:steel_casing']),
      event.recipes.createFilling(machine, [machine, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(machine, [machine, 'create:andesite_casing'])
    ]).transitionalItem(machine).loops(2).id('createofb:mekanism/machine/chemical_injection_chamber');

    //electrolytic separator
    event.remove({output: 'mekanism:electrolytic_separator'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:electrolytic_separator').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'mekanism:electrolytic_core']),
      event.recipes.createDeploying(casing, [casing, 'create:mechanical_mixer']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/electrolytic_separator');

    //electrolytic separator
    event.remove({output: 'mekanism:precision_sawmill'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:precision_sawmill').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:integrated_mechanism']),
      event.recipes.createDeploying(casing, [casing, '#forge:gears/steel']),
      event.recipes.createDeploying(casing, [casing, 'create:mechanical_saw']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/precision_sawmill');

    //chemical dissolution chamber
    event.remove({output: 'mekanism:chemical_dissolution_chamber'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:chemical_dissolution_chamber').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'mekanism:basic_chemical_tank']),
      event.recipes.createDeploying(casing, [casing, 'create:mechanical_mixer']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/chemical_dissolution_chamber');

    //chemical washer
    event.remove({output: 'mekanism:chemical_washer'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:chemical_washer').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'mekanism:basic_chemical_tank']),
      event.recipes.createDeploying(casing, [casing, 'mekanism:basic_fluid_tank']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/chemical_washer');

    //chemical crystallizer
    event.remove({output: 'mekanism:chemical_crystallizer'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:chemical_crystallizer').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'mekanism:fluorite_gem']),
      event.recipes.createDeploying(casing, [casing, 'create:encased_fan']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/chemical_crystallizer');

    machine = 'createoreexcavation:drilling_machine'

    //digital miner
    event.remove({output: 'mekanism:digital_miner'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:digital_miner').withChance(100.0)
    ], machine, [ 
      event.recipes.createDeploying(machine, [machine, 'mekanism:robit']),
      event.recipes.createDeploying(machine, [machine, 'ae2:terminal']),
      event.recipes.createDeploying(machine, [machine, 'mekanism:steel_casing']),
      event.recipes.createDeploying(machine, [machine, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(machine, [machine, 'create_things_and_misc:radar']),
      event.recipes.createDeploying(machine, [machine, 'createendertransmission:item_transmitter']),
      event.recipes.createFilling(machine, [machine, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(machine).loops(10).id('createofb:mekanism/machine/digital_miner');

    //pressurized reaction chamber
    event.remove({output: 'mekanism:pressurized_reaction_chamber'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:pressurized_reaction_chamber').withChance(100.0)
    ], 'mekanism:enrichment_chamber', [ 
      event.recipes.createDeploying('mekanism:enrichment_chamber', ['mekanism:enrichment_chamber', 'mekanism:basic_chemical_tank']),
      event.recipes.createDeploying('mekanism:enrichment_chamber', ['mekanism:enrichment_chamber', 'create:precision_mechanism']),
      event.recipes.createDeploying('mekanism:enrichment_chamber', ['mekanism:enrichment_chamber', 'mekanism:steel_casing']),
      event.recipes.createDeploying('mekanism:enrichment_chamber', ['mekanism:enrichment_chamber', 'mekanism:basic_pressurized_tube']),
      event.recipes.createFilling('mekanism:enrichment_chamber', ['mekanism:enrichment_chamber', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:enrichment_chamber', ['mekanism:enrichment_chamber', 'createendertransmission:fluid_transmitter'])
    ]).transitionalItem('mekanism:enrichment_chamber').loops(2).id('createofb:mekanism/machine/pressurized_reaction_chamber');

    //basic smelting factory
    event.remove({output: 'mekanism:basic_smelting_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:basic_smelting_factory').withChance(100.0)
    ], 'mekanism:energized_smelter', [ 
      event.recipes.createDeploying('mekanism:energized_smelter', ['mekanism:energized_smelter', 'create:brass_casing']),
      event.recipes.createDeploying('mekanism:energized_smelter', ['mekanism:energized_smelter', 'create_dd:integrated_mechanism']),
      event.recipes.createDeploying('mekanism:energized_smelter', ['mekanism:energized_smelter', 'mekanism:steel_casing']),
      event.recipes.createDeploying('mekanism:energized_smelter', ['mekanism:energized_smelter', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:energized_smelter', ['mekanism:energized_smelter', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:energized_smelter', ['mekanism:energized_smelter', 'create:brass_casing'])
    ]).transitionalItem('mekanism:energized_smelter').loops(2).id('createofb:mekanism/factory/basic_smelting_factory');

    //basic enriching factory
    event.remove({output: 'mekanism:basic_enriching_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:basic_enriching_factory').withChance(100.0)
    ], 'mekanism:enrichment_chamber', [ 
      event.recipes.createDeploying('mekanism:enrichment_chamber', ['mekanism:enrichment_chamber', 'create:brass_casing']),
      event.recipes.createDeploying('mekanism:enrichment_chamber', ['mekanism:enrichment_chamber', 'create_dd:integrated_mechanism']),
      event.recipes.createDeploying('mekanism:enrichment_chamber', ['mekanism:enrichment_chamber', 'mekanism:steel_casing']),
      event.recipes.createDeploying('mekanism:enrichment_chamber', ['mekanism:enrichment_chamber', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:enrichment_chamber', ['mekanism:enrichment_chamber', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:enrichment_chamber', ['mekanism:enrichment_chamber', 'create:brass_casing'])
    ]).transitionalItem('mekanism:enrichment_chamber').loops(2).id('createofb:mekanism/factory/basic_enriching_factory');

    //basic crushing factory
    event.remove({output: 'mekanism:basic_crushing_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:basic_crushing_factory').withChance(100.0)
    ], 'mekanism:crusher', [ 
      event.recipes.createDeploying('mekanism:crusher', ['mekanism:crusher', 'create:brass_casing']),
      event.recipes.createDeploying('mekanism:crusher', ['mekanism:crusher', 'create_dd:integrated_mechanism']),
      event.recipes.createDeploying('mekanism:crusher', ['mekanism:crusher', 'mekanism:steel_casing']),
      event.recipes.createDeploying('mekanism:crusher', ['mekanism:crusher', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:crusher', ['mekanism:crusher', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:crusher', ['mekanism:crusher', 'create:brass_casing'])
    ]).transitionalItem('mekanism:crusher').loops(2).id('createofb:mekanism/factory/basic_crushing_factory');

    //basic compressing factory
    event.remove({output: 'mekanism:basic_compressing_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:basic_compressing_factory').withChance(100.0)
    ], 'mekanism:osmium_compressor', [ 
      event.recipes.createDeploying('mekanism:osmium_compressor', ['mekanism:osmium_compressor', 'create:brass_casing']),
      event.recipes.createDeploying('mekanism:osmium_compressor', ['mekanism:osmium_compressor', 'create_dd:integrated_mechanism']),
      event.recipes.createDeploying('mekanism:osmium_compressor', ['mekanism:osmium_compressor', 'mekanism:steel_casing']),
      event.recipes.createDeploying('mekanism:osmium_compressor', ['mekanism:osmium_compressor', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:osmium_compressor', ['mekanism:osmium_compressor', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:osmium_compressor', ['mekanism:osmium_compressor', 'create:brass_casing'])
    ]).transitionalItem('mekanism:osmium_compressor').loops(2).id('createofb:mekanism/factory/basic_compressing_factory');

    //basic compressing factory
    event.remove({output: 'mekanism:basic_combining_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:basic_combining_factory').withChance(100.0)
    ], 'mekanism:combiner', [ 
      event.recipes.createDeploying('mekanism:combiner', ['mekanism:combiner', 'create:brass_casing']),
      event.recipes.createDeploying('mekanism:combiner', ['mekanism:combiner', 'create_dd:integrated_mechanism']),
      event.recipes.createDeploying('mekanism:combiner', ['mekanism:combiner', 'mekanism:steel_casing']),
      event.recipes.createDeploying('mekanism:combiner', ['mekanism:combiner', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:combiner', ['mekanism:combiner', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:combiner', ['mekanism:combiner', 'create:brass_casing'])
    ]).transitionalItem('mekanism:combiner').loops(2).id('createofb:mekanism/factory/basic_combining_factory');

    //basic purifying factory
    event.remove({output: 'mekanism:basic_purifying_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:basic_purifying_factory').withChance(100.0)
    ], 'mekanism:purification_chamber', [ 
      event.recipes.createDeploying('mekanism:purification_chamber', ['mekanism:purification_chamber', 'create:brass_casing']),
      event.recipes.createDeploying('mekanism:purification_chamber', ['mekanism:purification_chamber', 'create_dd:integrated_mechanism']),
      event.recipes.createDeploying('mekanism:purification_chamber', ['mekanism:purification_chamber', 'mekanism:steel_casing']),
      event.recipes.createDeploying('mekanism:purification_chamber', ['mekanism:purification_chamber', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:purification_chamber', ['mekanism:purification_chamber', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:purification_chamber', ['mekanism:purification_chamber', 'create:brass_casing'])
    ]).transitionalItem('mekanism:purification_chamber').loops(2).id('createofb:mekanism/factory/basic_purifying_factory');

    //basic injecting factory
    event.remove({output: 'mekanism:basic_injecting_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:basic_injecting_factory').withChance(100.0)
    ], 'mekanism:chemical_injection_chamber', [ 
      event.recipes.createDeploying('mekanism:chemical_injection_chamber', ['mekanism:chemical_injection_chamber', 'create:brass_casing']),
      event.recipes.createDeploying('mekanism:chemical_injection_chamber', ['mekanism:chemical_injection_chamber', 'create_dd:integrated_mechanism']),
      event.recipes.createDeploying('mekanism:chemical_injection_chamber', ['mekanism:chemical_injection_chamber', 'mekanism:steel_casing']),
      event.recipes.createDeploying('mekanism:chemical_injection_chamber', ['mekanism:chemical_injection_chamber', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:chemical_injection_chamber', ['mekanism:chemical_injection_chamber', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:chemical_injection_chamber', ['mekanism:chemical_injection_chamber', 'create:brass_casing'])
    ]).transitionalItem('mekanism:chemical_injection_chamber').loops(2).id('createofb:mekanism/factory/basic_injecting_factory');

    //basic infusing factory
    event.remove({output: 'mekanism:basic_infusing_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:basic_infusing_factory').withChance(100.0)
    ], 'mekanism:metallurgic_infuser', [ 
      event.recipes.createDeploying('mekanism:metallurgic_infuser', ['mekanism:metallurgic_infuser', 'create:brass_casing']),
      event.recipes.createDeploying('mekanism:metallurgic_infuser', ['mekanism:metallurgic_infuser', 'create_dd:integrated_mechanism']),
      event.recipes.createDeploying('mekanism:metallurgic_infuser', ['mekanism:metallurgic_infuser', 'mekanism:steel_casing']),
      event.recipes.createDeploying('mekanism:metallurgic_infuser', ['mekanism:metallurgic_infuser', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:metallurgic_infuser', ['mekanism:metallurgic_infuser', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:metallurgic_infuser', ['mekanism:metallurgic_infuser', 'create:brass_casing'])
    ]).transitionalItem('mekanism:metallurgic_infuser').loops(2).id('createofb:mekanism/factory/basic_infusing_factory');

    //basic sawing factory
    event.remove({output: 'mekanism:basic_sawing_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:basic_sawing_factory').withChance(100.0)
    ], 'mekanism:precision_sawmill', [ 
      event.recipes.createDeploying('mekanism:precision_sawmill', ['mekanism:precision_sawmill', 'create:brass_casing']),
      event.recipes.createDeploying('mekanism:precision_sawmill', ['mekanism:precision_sawmill', 'create_dd:integrated_mechanism']),
      event.recipes.createDeploying('mekanism:precision_sawmill', ['mekanism:precision_sawmill', 'mekanism:steel_casing']),
      event.recipes.createDeploying('mekanism:precision_sawmill', ['mekanism:precision_sawmill', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:precision_sawmill', ['mekanism:precision_sawmill', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:precision_sawmill', ['mekanism:precision_sawmill', 'create:brass_casing'])
    ]).transitionalItem('mekanism:precision_sawmill').loops(2).id('createofb:mekanism/factory/basic_sawing_factory');

    //advanced smelting factory
    event.remove({output: 'mekanism:advanced_smelting_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:advanced_smelting_factory').withChance(100.0)
    ], 'mekanism:basic_smelting_factory', [ 
      event.recipes.createDeploying('mekanism:basic_smelting_factory', ['mekanism:basic_smelting_factory', 'createhaven:diamond_casing']),
      event.recipes.createDeploying('mekanism:basic_smelting_factory', ['mekanism:basic_smelting_factory', 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying('mekanism:basic_smelting_factory', ['mekanism:basic_smelting_factory', 'mekanism:advanced_energy_cube']),
      event.recipes.createDeploying('mekanism:basic_smelting_factory', ['mekanism:basic_smelting_factory', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:basic_smelting_factory', ['mekanism:basic_smelting_factory', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:basic_smelting_factory', ['mekanism:basic_smelting_factory', 'createhaven:diamond_casing'])
    ]).transitionalItem('mekanism:basic_smelting_factory').loops(2).id('createofb:mekanism/factory/advanced_smelting_factory');

    //advanced enriching factory
    event.remove({output: 'mekanism:advanced_enriching_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:advanced_enriching_factory').withChance(100.0)
    ], 'mekanism:basic_enriching_factory', [ 
      event.recipes.createDeploying('mekanism:basic_enriching_factory', ['mekanism:basic_enriching_factory', 'createhaven:diamond_casing']),
      event.recipes.createDeploying('mekanism:basic_enriching_factory', ['mekanism:basic_enriching_factory', 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying('mekanism:basic_enriching_factory', ['mekanism:basic_enriching_factory', 'mekanism:advanced_energy_cube']),
      event.recipes.createDeploying('mekanism:basic_enriching_factory', ['mekanism:basic_enriching_factory', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:basic_enriching_factory', ['mekanism:basic_enriching_factory', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:basic_enriching_factory', ['mekanism:basic_enriching_factory', 'createhaven:diamond_casing'])
    ]).transitionalItem('mekanism:basic_enriching_factory').loops(2).id('createofb:mekanism/factory/advanced_enriching_factory');

    //advanced crushing factory
    event.remove({output: 'mekanism:advanced_crushing_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:advanced_crushing_factory').withChance(100.0)
    ], 'mekanism:basic_crushing_factory', [ 
      event.recipes.createDeploying('mekanism:basic_crushing_factory', ['mekanism:basic_crushing_factory', 'createhaven:diamond_casing']),
      event.recipes.createDeploying('mekanism:basic_crushing_factory', ['mekanism:basic_crushing_factory', 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying('mekanism:basic_crushing_factory', ['mekanism:basic_crushing_factory', 'mekanism:advanced_energy_cube']),
      event.recipes.createDeploying('mekanism:basic_crushing_factory', ['mekanism:basic_crushing_factory', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:basic_crushing_factory', ['mekanism:basic_crushing_factory', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:basic_crushing_factory', ['mekanism:basic_crushing_factory', 'createhaven:diamond_casing'])
    ]).transitionalItem('mekanism:basic_crushing_factory').loops(2).id('createofb:mekanism/factory/advanced_crushing_factory');

    //advanced compressing factory
    event.remove({output: 'mekanism:advanced_compressing_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:advanced_compressing_factory').withChance(100.0)
    ], 'mekanism:basic_compressing_factory', [ 
      event.recipes.createDeploying('mekanism:basic_compressing_factory', ['mekanism:basic_compressing_factory', 'createhaven:diamond_casing']),
      event.recipes.createDeploying('mekanism:basic_compressing_factory', ['mekanism:basic_compressing_factory', 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying('mekanism:basic_compressing_factory', ['mekanism:basic_compressing_factory', 'mekanism:advanced_energy_cube']),
      event.recipes.createDeploying('mekanism:basic_compressing_factory', ['mekanism:basic_compressing_factory', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:basic_compressing_factory', ['mekanism:basic_compressing_factory', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:basic_compressing_factory', ['mekanism:basic_compressing_factory', 'createhaven:diamond_casing'])
    ]).transitionalItem('mekanism:basic_compressing_factory').loops(2).id('createofb:mekanism/factory/advanced_compressing_factory');

    //advanced combining factory
    event.remove({output: 'mekanism:advanced_combining_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:advanced_combining_factory').withChance(100.0)
    ], 'mekanism:basic_combining_factory', [ 
      event.recipes.createDeploying('mekanism:basic_combining_factory', ['mekanism:basic_combining_factory', 'createhaven:diamond_casing']),
      event.recipes.createDeploying('mekanism:basic_combining_factory', ['mekanism:basic_combining_factory', 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying('mekanism:basic_combining_factory', ['mekanism:basic_combining_factory', 'mekanism:advanced_energy_cube']),
      event.recipes.createDeploying('mekanism:basic_combining_factory', ['mekanism:basic_combining_factory', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:basic_combining_factory', ['mekanism:basic_combining_factory', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:basic_combining_factory', ['mekanism:basic_combining_factory', 'createhaven:diamond_casing'])
    ]).transitionalItem('mekanism:basic_combining_factory').loops(2).id('createofb:mekanism/factory/advanced_combining_factory');

    //advanced purifying factory
    event.remove({output: 'mekanism:advanced_purifying_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:advanced_purifying_factory').withChance(100.0)
    ], 'mekanism:basic_purifying_factory', [ 
      event.recipes.createDeploying('mekanism:basic_purifying_factory', ['mekanism:basic_purifying_factory', 'createhaven:diamond_casing']),
      event.recipes.createDeploying('mekanism:basic_purifying_factory', ['mekanism:basic_purifying_factory', 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying('mekanism:basic_purifying_factory', ['mekanism:basic_purifying_factory', 'mekanism:advanced_energy_cube']),
      event.recipes.createDeploying('mekanism:basic_purifying_factory', ['mekanism:basic_purifying_factory', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:basic_purifying_factory', ['mekanism:basic_purifying_factory', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:basic_purifying_factory', ['mekanism:basic_purifying_factory', 'createhaven:diamond_casing'])
    ]).transitionalItem('mekanism:basic_purifying_factory').loops(2).id('createofb:mekanism/factory/advanced_urifying_factory');

    //advanced injecting factory
    event.remove({output: 'mekanism:advanced_injecting_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:advanced_injecting_factory').withChance(100.0)
    ], 'mekanism:basic_injecting_factory', [ 
      event.recipes.createDeploying('mekanism:basic_injecting_factory', ['mekanism:basic_injecting_factory', 'createhaven:diamond_casing']),
      event.recipes.createDeploying('mekanism:basic_injecting_factory', ['mekanism:basic_injecting_factory', 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying('mekanism:basic_injecting_factory', ['mekanism:basic_injecting_factory', 'mekanism:advanced_energy_cube']),
      event.recipes.createDeploying('mekanism:basic_injecting_factory', ['mekanism:basic_injecting_factory', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:basic_injecting_factory', ['mekanism:basic_injecting_factory', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:basic_injecting_factory', ['mekanism:basic_injecting_factory', 'createhaven:diamond_casing'])
    ]).transitionalItem('mekanism:basic_injecting_factory').loops(2).id('createofb:mekanism/factory/advanced_injecting_factory');

    //advanced infusing factory
    event.remove({output: 'mekanism:advanced_infusing_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:advanced_infusing_factory').withChance(100.0)
    ], 'mekanism:basic_infusing_factory', [ 
      event.recipes.createDeploying('mekanism:basic_infusing_factory', ['mekanism:basic_infusing_factory', 'createhaven:diamond_casing']),
      event.recipes.createDeploying('mekanism:basic_infusing_factory', ['mekanism:basic_infusing_factory', 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying('mekanism:basic_infusing_factory', ['mekanism:basic_infusing_factory', 'mekanism:advanced_energy_cube']),
      event.recipes.createDeploying('mekanism:basic_infusing_factory', ['mekanism:basic_infusing_factory', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:basic_infusing_factory', ['mekanism:basic_infusing_factory', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:basic_infusing_factory', ['mekanism:basic_infusing_factory', 'createhaven:diamond_casing'])
    ]).transitionalItem('mekanism:basic_infusing_factory').loops(2).id('createofb:mekanism/factory/advanced_infusing_factory');

    //advanced sawing factory
    event.remove({output: 'mekanism:advanced_sawing_factory'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:advanced_sawing_factory').withChance(100.0)
    ], 'mekanism:basic_sawing_factory', [ 
      event.recipes.createDeploying('mekanism:basic_sawing_factory', ['mekanism:basic_sawing_factory', 'createhaven:diamond_casing']),
      event.recipes.createDeploying('mekanism:basic_sawing_factory', ['mekanism:basic_sawing_factory', 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying('mekanism:basic_sawing_factory', ['mekanism:basic_sawing_factory', 'mekanism:advanced_energy_cube']),
      event.recipes.createDeploying('mekanism:basic_sawing_factory', ['mekanism:basic_sawing_factory', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:basic_sawing_factory', ['mekanism:basic_sawing_factory', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:basic_sawing_factory', ['mekanism:basic_sawing_factory', 'createhaven:diamond_casing'])
    ]).transitionalItem('mekanism:basic_sawing_factory').loops(2).id('createofb:mekanism/factory/advanced_sawing_factory');

    //elite smelting factory
    event.remove({output: 'mekanism:elite_smelting_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:advanced_smelting_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:elite_smelting_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_smelting_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_smelting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_smelting_factory"},
              [{item: "create_dd:infernal_mechanism"}]
            ],
            results: [
              {item: "mekanism:advanced_smelting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_smelting_factory"},
              [{item: "mekanism:elite_energy_cube"}]
            ],
            results: [
              {item: "mekanism:advanced_smelting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_smelting_factory"},
              [{item: "createutilities:graviton_tube"}]
            ],
            results: [
              {item: "mekanism:advanced_smelting_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:advanced_smelting_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:advanced_smelting_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "mekanism:advanced_smelting_factory"}
            ],
            results: [
              {item: "mekanism:advanced_smelting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_smelting_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_smelting_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:advanced_smelting_factory"
        }
      }
    ).id('createofb:mekanism/factory/elite_smelting_factory');

    //elite enriching factory
    event.remove({output: 'mekanism:elite_enriching_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:advanced_enriching_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:elite_enriching_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_enriching_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_enriching_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_enriching_factory"},
              [{item: "create_dd:infernal_mechanism"}]
            ],
            results: [
              {item: "mekanism:advanced_enriching_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_enriching_factory"},
              [{item: "mekanism:elite_energy_cube"}]
            ],
            results: [
              {item: "mekanism:advanced_enriching_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_enriching_factory"},
              [{item: "createutilities:graviton_tube"}]
            ],
            results: [
              {item: "mekanism:advanced_enriching_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:advanced_enriching_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:advanced_enriching_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "mekanism:advanced_enriching_factory"}
            ],
            results: [
              {item: "mekanism:advanced_enriching_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_enriching_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_enriching_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:advanced_enriching_factory"
        }
      }
    ).id('createofb:mekanism/factory/elite_enriching_factory');

    //elite crushing factory
    event.remove({output: 'mekanism:elite_crushing_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:advanced_crushing_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:elite_crushing_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_crushing_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_crushing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_crushing_factory"},
              [{item: "create_dd:infernal_mechanism"}]
            ],
            results: [
              {item: "mekanism:advanced_crushing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_crushing_factory"},
              [{item: "mekanism:elite_energy_cube"}]
            ],
            results: [
              {item: "mekanism:advanced_crushing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_crushing_factory"},
              [{item: "createutilities:graviton_tube"}]
            ],
            results: [
              {item: "mekanism:advanced_crushing_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:advanced_crushing_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:advanced_crushing_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "mekanism:advanced_crushing_factory"}
            ],
            results: [
              {item: "mekanism:advanced_crushing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_crushing_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_crushing_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:advanced_crushing_factory"
        }
      }
    ).id('createofb:mekanism/factory/elite_crushing_factory');

    //elite compressing factory
    event.remove({output: 'mekanism:elite_compressing_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:advanced_compressing_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:elite_compressing_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_compressing_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_compressing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_compressing_factory"},
              [{item: "create_dd:infernal_mechanism"}]
            ],
            results: [
              {item: "mekanism:advanced_compressing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_compressing_factory"},
              [{item: "mekanism:elite_energy_cube"}]
            ],
            results: [
              {item: "mekanism:advanced_compressing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_compressing_factory"},
              [{item: "createutilities:graviton_tube"}]
            ],
            results: [
              {item: "mekanism:advanced_compressing_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:advanced_compressing_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:advanced_compressing_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "mekanism:advanced_compressing_factory"}
            ],
            results: [
              {item: "mekanism:advanced_compressing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_compressing_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_compressing_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:advanced_compressing_factory"
        }
      }
    ).id('createofb:mekanism/factory/elite_compressing_factory');
  
    //elite combining factory
    event.remove({output: 'mekanism:elite_combining_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:advanced_combining_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:elite_combining_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_combining_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_combining_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_combining_factory"},
              [{item: "create_dd:infernal_mechanism"}]
            ],
            results: [
              {item: "mekanism:advanced_combining_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_combining_factory"},
              [{item: "mekanism:elite_energy_cube"}]
            ],
            results: [
              {item: "mekanism:advanced_combining_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_combining_factory"},
              [{item: "createutilities:graviton_tube"}]
            ],
            results: [
              {item: "mekanism:advanced_combining_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:advanced_combining_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:advanced_combining_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "mekanism:advanced_combining_factory"}
            ],
            results: [
              {item: "mekanism:advanced_combining_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_combining_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_combining_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:advanced_combining_factory"
        }
      }
    ).id('createofb:mekanism/factory/elite_combining_factory');

    //elite purifying factory
    event.remove({output: 'mekanism:elite_purifying_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:advanced_purifying_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:elite_purifying_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_purifying_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_purifying_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_purifying_factory"},
              [{item: "create_dd:infernal_mechanism"}]
            ],
            results: [
              {item: "mekanism:advanced_purifying_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_purifying_factory"},
              [{item: "mekanism:elite_energy_cube"}]
            ],
            results: [
              {item: "mekanism:advanced_purifying_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_purifying_factory"},
              [{item: "createutilities:graviton_tube"}]
            ],
            results: [
              {item: "mekanism:advanced_purifying_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:advanced_purifying_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:advanced_purifying_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "mekanism:advanced_purifying_factory"}
            ],
            results: [
              {item: "mekanism:advanced_purifying_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_purifying_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_purifying_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:advanced_purifying_factory"
        }
      }
    ).id('createofb:mekanism/factory/elite_purifying_factory');

    //elite injecting factory
    event.remove({output: 'mekanism:elite_injecting_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:advanced_injecting_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:elite_injecting_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_injecting_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_injecting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_injecting_factory"},
              [{item: "create_dd:infernal_mechanism"}]
            ],
            results: [
              {item: "mekanism:advanced_injecting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_injecting_factory"},
              [{item: "mekanism:elite_energy_cube"}]
            ],
            results: [
              {item: "mekanism:advanced_injecting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_injecting_factory"},
              [{item: "createutilities:graviton_tube"}]
            ],
            results: [
              {item: "mekanism:advanced_injecting_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:advanced_injecting_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:advanced_injecting_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "mekanism:advanced_injecting_factory"}
            ],
            results: [
              {item: "mekanism:advanced_injecting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_injecting_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_injecting_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:advanced_injecting_factory"
        }
      }
    ).id('createofb:mekanism/factory/elite_injecting_factory');

    //elite infusing factory
    event.remove({output: 'mekanism:elite_infusing_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:advanced_infusing_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:elite_infusing_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_infusing_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_infusing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_infusing_factory"},
              [{item: "create_dd:infernal_mechanism"}]
            ],
            results: [
              {item: "mekanism:advanced_infusing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_infusing_factory"},
              [{item: "mekanism:elite_energy_cube"}]
            ],
            results: [
              {item: "mekanism:advanced_infusing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_infusing_factory"},
              [{item: "createutilities:graviton_tube"}]
            ],
            results: [
              {item: "mekanism:advanced_infusing_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:advanced_infusing_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:advanced_infusing_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "mekanism:advanced_infusing_factory"}
            ],
            results: [
              {item: "mekanism:advanced_infusing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_infusing_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_infusing_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:advanced_infusing_factory"
        }
      }
    ).id('createofb:mekanism/factory/elite_infusing_factory');

    //elite sawing factory
    event.remove({output: 'mekanism:elite_sawing_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:advanced_sawing_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:elite_sawing_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_sawing_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_sawing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_sawing_factory"},
              [{item: "create_dd:infernal_mechanism"}]
            ],
            results: [
              {item: "mekanism:advanced_sawing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_sawing_factory"},
              [{item: "mekanism:elite_energy_cube"}]
            ],
            results: [
              {item: "mekanism:advanced_sawing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_sawing_factory"},
              [{item: "createutilities:graviton_tube"}]
            ],
            results: [
              {item: "mekanism:advanced_sawing_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:advanced_sawing_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:advanced_sawing_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "mekanism:advanced_sawing_factory"}
            ],
            results: [
              {item: "mekanism:advanced_sawing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:advanced_sawing_factory"},
              [{item: "create:shadow_steel_casing"}]
            ],
            results: [
              {item: "mekanism:advanced_sawing_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:advanced_sawing_factory"
        }
      }
    ).id('createofb:mekanism/factory/elite_sawing_factory');

    //ultimate smelting factory
    event.remove({output: 'mekanism:ultimate_smelting_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:elite_smelting_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:ultimate_smelting_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_smelting_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_smelting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_smelting_factory"},
              [{item: "create_dd:sealed_mechanism"}]
            ],
            results: [
              {item: "mekanism:elite_smelting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_smelting_factory"},
              [{item: "mekanism:ultimate_energy_cube"}]
            ],
            results: [
              {item: "mekanism:elite_smelting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_smelting_factory"},
              [{item: "createchromaticreturn:multiplite_tube"}]
            ],
            results: [
              {item: "mekanism:elite_smelting_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:elite_smelting_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:elite_smelting_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 100000,
            ingredients: [
              {item: "mekanism:elite_smelting_factory"}
            ],
            results: [
              {item: "mekanism:elite_smelting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_smelting_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_smelting_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:elite_smelting_factory"
        }
      }
    ).id('createofb:mekanism/factory/ultimate_smelting_factory');

    //ultimate enriching factory
    event.remove({output: 'mekanism:ultimate_enriching_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:elite_enriching_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:ultimate_enriching_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_enriching_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_enriching_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_enriching_factory"},
              [{item: "create_dd:sealed_mechanism"}]
            ],
            results: [
              {item: "mekanism:elite_enriching_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_enriching_factory"},
              [{item: "mekanism:ultimate_energy_cube"}]
            ],
            results: [
              {item: "mekanism:elite_enriching_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_enriching_factory"},
              [{item: "createchromaticreturn:multiplite_tube"}]
            ],
            results: [
              {item: "mekanism:elite_enriching_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:elite_enriching_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:elite_enriching_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 100000,
            ingredients: [
              {item: "mekanism:elite_enriching_factory"}
            ],
            results: [
              {item: "mekanism:elite_enriching_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_enriching_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_enriching_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:elite_enriching_factory"
        }
      }
    ).id('createofb:mekanism/factory/ultimate_enriching_factory');

    //ultimate crushing factory
    event.remove({output: 'mekanism:ultimate_crushing_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:elite_crushing_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:ultimate_crushing_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_crushing_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_crushing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_crushing_factory"},
              [{item: "create_dd:sealed_mechanism"}]
            ],
            results: [
              {item: "mekanism:elite_crushing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_crushing_factory"},
              [{item: "mekanism:ultimate_energy_cube"}]
            ],
            results: [
              {item: "mekanism:elite_crushing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_crushing_factory"},
              [{item: "createchromaticreturn:multiplite_tube"}]
            ],
            results: [
              {item: "mekanism:elite_crushing_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:elite_crushing_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:elite_crushing_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 100000,
            ingredients: [
              {item: "mekanism:elite_crushing_factory"}
            ],
            results: [
              {item: "mekanism:elite_crushing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_crushing_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_crushing_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:elite_crushing_factory"
        }
      }
    ).id('createofb:mekanism/factory/ultimate_crushing_factory');

    //ultimate compressing factory
    event.remove({output: 'mekanism:ultimate_compressing_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:elite_compressing_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:ultimate_compressing_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_compressing_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_compressing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_compressing_factory"},
              [{item: "create_dd:sealed_mechanism"}]
            ],
            results: [
              {item: "mekanism:elite_compressing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_compressing_factory"},
              [{item: "mekanism:ultimate_energy_cube"}]
            ],
            results: [
              {item: "mekanism:elite_compressing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_compressing_factory"},
              [{item: "createchromaticreturn:multiplite_tube"}]
            ],
            results: [
              {item: "mekanism:elite_compressing_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:elite_compressing_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:elite_compressing_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 100000,
            ingredients: [
              {item: "mekanism:elite_compressing_factory"}
            ],
            results: [
              {item: "mekanism:elite_compressing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_compressing_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_compressing_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:elite_compressing_factory"
        }
      }
    ).id('createofb:mekanism/factory/ultimate_compressing_factory');

    //ultimate combining factory
    event.remove({output: 'mekanism:ultimate_combining_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:elite_combining_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:ultimate_combining_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_combining_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_combining_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_combining_factory"},
              [{item: "create_dd:sealed_mechanism"}]
            ],
            results: [
              {item: "mekanism:elite_combining_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_combining_factory"},
              [{item: "mekanism:ultimate_energy_cube"}]
            ],
            results: [
              {item: "mekanism:elite_combining_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_combining_factory"},
              [{item: "createchromaticreturn:multiplite_tube"}]
            ],
            results: [
              {item: "mekanism:elite_combining_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:elite_combining_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:elite_combining_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 100000,
            ingredients: [
              {item: "mekanism:elite_combining_factory"}
            ],
            results: [
              {item: "mekanism:elite_combining_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_combining_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_combining_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:elite_combining_factory"
        }
      }
    ).id('createofb:mekanism/factory/ultimate_combining_factory');

    //ultimate purifying factory
    event.remove({output: 'mekanism:ultimate_purifying_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:elite_purifying_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:ultimate_purifying_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_purifying_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_purifying_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_purifying_factory"},
              [{item: "create_dd:sealed_mechanism"}]
            ],
            results: [
              {item: "mekanism:elite_purifying_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_purifying_factory"},
              [{item: "mekanism:ultimate_energy_cube"}]
            ],
            results: [
              {item: "mekanism:elite_purifying_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_purifying_factory"},
              [{item: "createchromaticreturn:multiplite_tube"}]
            ],
            results: [
              {item: "mekanism:elite_purifying_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:elite_purifying_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:elite_purifying_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 100000,
            ingredients: [
              {item: "mekanism:elite_purifying_factory"}
            ],
            results: [
              {item: "mekanism:elite_purifying_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_purifying_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_purifying_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:elite_purifying_factory"
        }
      }
    ).id('createofb:mekanism/factory/ultimate_purifying_factory');

    //ultimate injecting factory
    event.remove({output: 'mekanism:ultimate_injecting_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:elite_injecting_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:ultimate_injecting_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_injecting_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_injecting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_injecting_factory"},
              [{item: "create_dd:sealed_mechanism"}]
            ],
            results: [
              {item: "mekanism:elite_injecting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_injecting_factory"},
              [{item: "mekanism:ultimate_energy_cube"}]
            ],
            results: [
              {item: "mekanism:elite_injecting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_injecting_factory"},
              [{item: "createchromaticreturn:multiplite_tube"}]
            ],
            results: [
              {item: "mekanism:elite_injecting_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:elite_injecting_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:elite_injecting_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 100000,
            ingredients: [
              {item: "mekanism:elite_injecting_factory"}
            ],
            results: [
              {item: "mekanism:elite_injecting_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_injecting_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_injecting_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:elite_injecting_factory"
        }
      }
    ).id('createofb:mekanism/factory/ultimate_injecting_factory');

    //ultimate infusing factory
    event.remove({output: 'mekanism:ultimate_infusing_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:elite_infusing_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:ultimate_infusing_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_infusing_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_infusing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_infusing_factory"},
              [{item: "create_dd:sealed_mechanism"}]
            ],
            results: [
              {item: "mekanism:elite_infusing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_infusing_factory"},
              [{item: "mekanism:ultimate_energy_cube"}]
            ],
            results: [
              {item: "mekanism:elite_infusing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_infusing_factory"},
              [{item: "createchromaticreturn:multiplite_tube"}]
            ],
            results: [
              {item: "mekanism:elite_infusing_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:elite_infusing_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:elite_infusing_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 100000,
            ingredients: [
              {item: "mekanism:elite_infusing_factory"}
            ],
            results: [
              {item: "mekanism:elite_infusing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_infusing_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_infusing_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:elite_infusing_factory"
        }
      }
    ).id('createofb:mekanism/factory/ultimate_infusing_factory');

    //ultimate sawing factory
    event.remove({output: 'mekanism:ultimate_sawing_factory'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanism:elite_sawing_factory"},
        loops: 2,
        results: [{count: 1,item: "mekanism:ultimate_sawing_factory"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_sawing_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_sawing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_sawing_factory"},
              [{item: "create_dd:sealed_mechanism"}]
            ],
            results: [
              {item: "mekanism:elite_sawing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_sawing_factory"},
              [{item: "mekanism:ultimate_energy_cube"}]
            ],
            results: [
              {item: "mekanism:elite_sawing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_sawing_factory"},
              [{item: "createchromaticreturn:multiplite_tube"}]
            ],
            results: [
              {item: "mekanism:elite_sawing_factory"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanism:elite_sawing_factory"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanism:elite_sawing_factory"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 100000,
            ingredients: [
              {item: "mekanism:elite_sawing_factory"}
            ],
            results: [
              {item: "mekanism:elite_sawing_factory"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanism:elite_sawing_factory"},
              [{item: "createutilities:void_casing"}]
            ],
            results: [
              {item: "mekanism:elite_sawing_factory"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanism:elite_sawing_factory"
        }
      }
    ).id('createofb:mekanism/factory/ultimate_sawing_factory');

  //basic energy cube
    event.remove({output: 'mekanism:basic_energy_cube'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:basic_energy_cube').withChance(100.0)
    ], 'mekanism:steel_casing', [ 
      event.recipes.createDeploying('mekanism:steel_casing', ['mekanism:steel_casing', 'create:andesite_casing']),
      event.recipes.createDeploying('mekanism:steel_casing', ['mekanism:steel_casing', 'create:precision_mechanism']),
      event.recipes.createDeploying('mekanism:steel_casing', ['mekanism:steel_casing', 'mekanism:energy_tablet']),
      event.recipes.createDeploying('mekanism:steel_casing', ['mekanism:steel_casing', 'createaddition:modular_accumulator']),
      event.recipes.createFilling('mekanism:steel_casing', ['mekanism:steel_casing', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:steel_casing', ['mekanism:steel_casing', 'create:andesite_casing'])
    ]).transitionalItem('mekanism:steel_casing').loops(1).id('createofb:mekanism/enegy_cube/basic');

  //advanced energy cube
    event.remove({output: 'mekanism:advanced_energy_cube'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:advanced_energy_cube').withChance(100.0)
    ], 'mekanism:basic_energy_cube', [ 
      event.recipes.createDeploying('mekanism:basic_energy_cube', ['mekanism:basic_energy_cube', 'create:brass_casing']),
      event.recipes.createDeploying('mekanism:basic_energy_cube', ['mekanism:basic_energy_cube', 'create_dd:integrated_mechanism']),
      event.recipes.createDeploying('mekanism:basic_energy_cube', ['mekanism:basic_energy_cube', 'mekanism:energy_tablet']),
      event.recipes.createDeploying('mekanism:basic_energy_cube', ['mekanism:basic_energy_cube', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:basic_energy_cube', ['mekanism:basic_energy_cube', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:basic_energy_cube', ['mekanism:basic_energy_cube', 'create:brass_casing'])
    ]).transitionalItem('mekanism:basic_energy_cube').loops(2).id('createofb:mekanism/enegy_cube/advanced');

  //elite energy cube
    event.remove({output: 'mekanism:elite_energy_cube'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:elite_energy_cube').withChance(100.0)
    ], 'mekanism:advanced_energy_cube', [ 
      event.recipes.createDeploying('mekanism:advanced_energy_cube', ['mekanism:advanced_energy_cube', 'createhaven:diamond_casing']),
      event.recipes.createDeploying('mekanism:advanced_energy_cube', ['mekanism:advanced_energy_cube', 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying('mekanism:advanced_energy_cube', ['mekanism:advanced_energy_cube', 'mekanism:energy_tablet']),
      event.recipes.createDeploying('mekanism:advanced_energy_cube', ['mekanism:advanced_energy_cube', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:advanced_energy_cube', ['mekanism:advanced_energy_cube', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:advanced_energy_cube', ['mekanism:advanced_energy_cube', 'createhaven:diamond_casing'])
    ]).transitionalItem('mekanism:advanced_energy_cube').loops(3).id('createofb:mekanism/enegy_cube/elite');

  //ultimate energy cube
    event.remove({output: 'mekanism:ultimate_energy_cube'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:ultimate_energy_cube').withChance(100.0)
    ], 'mekanism:elite_energy_cube', [ 
      event.recipes.createDeploying('mekanism:elite_energy_cube', ['mekanism:elite_energy_cube', 'createutilities:void_casing']),
      event.recipes.createDeploying('mekanism:elite_energy_cube', ['mekanism:elite_energy_cube', 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying('mekanism:elite_energy_cube', ['mekanism:elite_energy_cube', 'mekanism:energy_tablet']),
      event.recipes.createDeploying('mekanism:elite_energy_cube', ['mekanism:elite_energy_cube', 'create:electron_tube']),
      event.recipes.createFilling('mekanism:elite_energy_cube', ['mekanism:elite_energy_cube', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanism:elite_energy_cube', ['mekanism:elite_energy_cube', 'createutilities:void_casing'])
    ]).transitionalItem('mekanism:elite_energy_cube').loops(4).id('createofb:mekanism/enegy_cube/ultimate');

  //tereporter
    event.remove({output: 'mekanism:teleporter'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:teleporter').withChance(100.0)
    ], 'mekanism:teleporter_frame', [ 
      event.recipes.createDeploying('mekanism:teleporter_frame', ['mekanism:teleporter_frame', 'mekanism:steel_casing']),
      event.recipes.createDeploying('mekanism:teleporter_frame', ['mekanism:teleporter_frame', 'create_dd:sealed_mechanism']),
      event.recipes.createDeploying('mekanism:teleporter_frame', ['mekanism:teleporter_frame', 'mekanism:teleportation_core']),
      event.recipes.createDeploying('mekanism:teleporter_frame', ['mekanism:teleporter_frame', 'createendertransmission:fluid_transmitter']),
      event.recipes.createFilling('mekanism:teleporter_frame', ['mekanism:teleporter_frame', Fluid.of('createmetallurgy:molten_void_steel', 270)]),
      event.recipes.createDeploying('mekanism:teleporter_frame', ['mekanism:teleporter_frame', 'createutilities:void_casing'])
    ]).transitionalItem('mekanism:teleporter_frame').loops(4).id('createofb:mekanism/machine/teleporter');

  //pump
    event.remove({output: 'mekanism:electric_pump'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:electric_pump').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
      event.recipes.createDeploying(casing, [casing, 'create:precision_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'create:fluid_tank']),
      event.recipes.createDeploying(casing, [casing, 'create:spout']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/pump');

  //sorter
    event.remove({output: 'mekanism:logistical_sorter'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:logistical_sorter').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing']),
      event.recipes.createDeploying(casing, [casing, 'create:precision_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'minecraft:piston']),
      event.recipes.createDeploying(casing, [casing, 'create:brass_funnel']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_casing'])
    ]).transitionalItem(casing).loops(2).id('createofb:mekanism/machine/sorter');

  })