ServerEvents.recipes(event => {
    
    //mekanism item adding recipe
    event.remove({output: 'mekanism:steel_casing'});
    event.shaped(
        Item.of('mekanism:steel_casing', 2),
        [
          'ABA',
          'BCB',
          'ABA'
        ],
        {
          A: '#forge:storage_blocks/steel',
          B: '#forge:storage_blocks/osmium',
          C: 'create:precision_mechanism'
        }
    ).id('createofb:mekanism/item/steel_casing');

    event.remove({output: 'mekanism:advanced_control_circuit'});
    event.recipes.extendedcrafting.shaped_table(
      'mekanism:advanced_control_circuit', 
      [
        '     ',
        'ABBBA', 
        'A C A', 
        'ABBBA',
        '     '
      ], 
      {
        A: 'mekanism:alloy_infused',
        B: 'minecraft:iron_ingot',
        C: 'mekanism:basic_control_circuit'
      }
    ).tier(2).id('createofb:mekanism/item/advanced_control_circuit');

    event.remove({output: 'mekanism:elite_control_circuit'});
    event.recipes.extendedcrafting.shaped_table(
      'mekanism:elite_control_circuit', 
      [
        '     ',
        'ABBBA', 
        'A C A', 
        'ABBBA',
        '     '
      ], 
      {
        A: 'mekanism:alloy_reinforced',
        B: 'minecraft:gold_ingot',
        C: 'mekanism:advanced_control_circuit'
      }
    ).tier(2).id('createofb:mekanism/item/elite_control_circuit');

    event.remove({output: 'mekanism:ultimate_control_circuit'});
    event.recipes.extendedcrafting.shaped_table(
      'mekanism:ultimate_control_circuit', 
      [
        '     ',
        'ABBBA', 
        'A C A', 
        'ABBBA',
        '     '
      ], 
      {
        A: 'mekanism:alloy_atomic',
        B: 'minecraft:diamond',
        C: 'mekanism:elite_control_circuit'
      }
    ).tier(2).id('createofb:mekanism/item/ultimate_control_circuit');

    event.remove({output: 'mekanism:teleportation_core'});
    event.custom(
      {
          type: 'mekanism:metallurgic_infusing',
          chemicalInput: {
            amount: 90,
            tag: 'mekanism:refined_obsidian'
          },
          itemInput: {
            ingredient: {
              item: 'ae2:quantum_entangled_singularity'
            }
          },
          output: {
            item: 'mekanism:teleportation_core'
          }
        }
  ).id('createofb:mekanism/item/teleportation_core');

    event.remove({output: 'mekanism:seismic_vibrator'});
    event.recipes.create.mechanical_crafting('mekanism:seismic_vibrator', [
      'SIS',
      'SVS',
      'SCS',
      'SPS',
      'SIS'
    ], {
      S: '#forge:ingots/steel',
      I: 'immersiveengineering:steel_scaffolding_standard',
      V: 'create_things_and_misc:vibration_mechanism',
      C: 'mekanism:steel_casing',
      P: 'create:mechanical_press'
    }).id('createofb:mekanism/item/seismic_vibrator');

    event.remove({output: 'mekanism:basic_bin'});
    event.recipes.create.mechanical_crafting('mekanism:basic_bin', [
      'CMC',
      'E E',
      'CCC'
    ], {
      C: 'allthecompressed:cobblestone_2x',
      E: 'create:electron_tube',
      M: 'create_dd:integrated_mechanism'
    }).id('createofb:mekanism/item/basic_bin');

    event.remove({output: 'mekanism:advanced_bin'});
    event.recipes.create.mechanical_crafting('mekanism:advanced_bin', [
      'CMC',
      'EBE',
      'CCC'
    ], {
      B: 'mekanism:basic_bin',
      C: 'allthecompressed:cobblestone_2x',
      E: 'create:electron_tube',
      M: 'create_dd:calculation_mechanism'
    }).id('createofb:mekanism/item/advanced_bin');

    event.remove({output: 'mekanism:elite_bin'});
    event.recipes.create.mechanical_crafting('mekanism:elite_bin', [
      'CMC',
      'EBE',
      'CCC'
    ], {
      B: 'mekanism:advanced_bin',
      C: 'allthecompressed:cobblestone_3x',
      E: 'createutilities:graviton_tube',
      M: 'create_dd:infernal_mechanism'
    }).id('createofb:mekanism/item/elite_bin');

    event.remove({output: 'mekanism:ultimate_bin'});
    event.recipes.create.mechanical_crafting('mekanism:ultimate_bin', [
      'CMC',
      'EBE',
      'CCC'
    ], {
      B: 'mekanism:elite_bin',
      C: 'allthecompressed:cobblestone_4x',
      E: 'createchromaticreturn:multiplite_tube',
      M: 'create_dd:sealed_mechanism'
    }).id('createofb:mekanism/item/ultimate_bin');

    //installer recipe remove
    event.remove({output: 'mekanism:basic_tier_installer'});
    event.remove({output: 'mekanism:advanced_tier_installer'});
    event.remove({output: 'mekanism:elite_tier_installer'});
    event.remove({output: 'mekanism:ultimate_tier_installer'});

    event.remove({output: 'mekanism:isotopic_centrifuge'});
    event.recipes.create.mechanical_crafting('mekanism:isotopic_centrifuge', [
      'SIS',
      'SFS',
      'SMS',
      'STS',
      'lll'
    ], {
      l: '#forge:ingots/lead',
      S: '#forge:ingots/steel',
      I: 'mekanism:advanced_fluid_tank',
      F: 'enderio:fused_quartz',
      M: 'create_dd:infernal_mechanism',
      T: 'mekanism:advanced_chemical_tank'
    }).id('createofb:mekanism/item/isotopic_centrifuge');

    event.remove({output: 'mekanism:basic_fluid_tank'});
    event.recipes.create.mechanical_crafting('mekanism:basic_fluid_tank', [
      'RMR',
      'IFI',
      'RIR'
    ], {
      R: 'create:polished_rose_quartz',
      I: 'minecraft:iron_block',
      F: 'enderio:fused_quartz',
      M: 'create_dd:integrated_mechanism'
    }).id('createofb:mekanism/item/basic_fluid_tank');

    event.remove({output: 'mekanism:advanced_fluid_tank'});
    event.recipes.create.mechanical_crafting('mekanism:advanced_fluid_tank', [
      'RMR',
      'IFI',
      'RIR'
    ], {
      R: 'enderio:fused_quartz',
      I: 'minecraft:iron_block',
      F: 'mekanism:basic_fluid_tank',
      M: 'create_dd:calculation_mechanism'
    }).id('createofb:mekanism/item/advanced_fluid_tank');

    event.remove({output: 'mekanism:elite_fluid_tank'});
    event.recipes.create.mechanical_crafting('mekanism:elite_fluid_tank', [
      'RMR',
      'IFI',
      'RIR'
    ], {
      R: 'enderio:fused_quartz',
      I: 'minecraft:iron_block',
      F: 'mekanism:advanced_fluid_tank',
      M: 'create_dd:infernal_mechanism'
    }).id('createofb:mekanism/item/elite_fluid_tank');

    event.remove({output: 'mekanism:ultimate_fluid_tank'});
    event.recipes.create.mechanical_crafting('mekanism:ultimate_fluid_tank', [
      'RMR',
      'IFI',
      'RIR'
    ], {
      R: 'enderio:fused_quartz',
      I: 'minecraft:iron_block',
      F: 'mekanism:elite_fluid_tank',
      M: 'create_dd:sealed_mechanism'
    }).id('createofb:mekanism/item/ultimate_fluid_tank');

    event.remove({output: 'mekanism:basic_universal_cable'});
    event.recipes.create.mechanical_crafting('32x mekanism:basic_universal_cable', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: '#forge:ingots/steel',
      F: 'enderio:fused_quartz',
      M: 'create:precision_mechanism'
    }).id('createofb:mekanism/item/basic_universal_cable');

    event.remove({output: 'mekanism:advanced_universal_cable'});
    event.recipes.create.mechanical_crafting('10x mekanism:advanced_universal_cable', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:basic_universal_cable',
      F: 'enderio:fused_quartz',
      M: 'create_dd:integrated_mechanism'
    }).id('createofb:mekanism/item/advanced_universal_cable');

    event.remove({output: 'mekanism:elite_universal_cable'});
    event.recipes.create.mechanical_crafting('10x mekanism:elite_universal_cable', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:advanced_universal_cable',
      F: 'enderio:fused_quartz',
      M: 'create_dd:calculation_mechanism'
    }).id('createofb:mekanism/item/elite_universal_cable');

    event.remove({output: 'mekanism:ultimate_universal_cable'});
    event.recipes.create.mechanical_crafting('10x mekanism:ultimate_universal_cable', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:elite_universal_cable',
      F: 'enderio:fused_quartz',
      M: 'create_dd:infernal_mechanism'
    }).id('createofb:mekanism/item/ultimate_universal_cable');
  
    event.remove({output: 'mekanism:basic_mechanical_pipe'});
    event.recipes.create.mechanical_crafting('32x mekanism:basic_mechanical_pipe', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: '#forge:ingots/steel',
      F: 'enderio:clear_glass',
      M: 'create:precision_mechanism'
    }).id('createofb:mekanism/item/basic_mechanical_pipe');

    event.remove({output: 'mekanism:advanced_mechanical_pipe'});
    event.recipes.create.mechanical_crafting('10x mekanism:advanced_mechanical_pipe', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:basic_mechanical_pipe',
      F: 'enderio:clear_glass',
      M: 'create_dd:integrated_mechanism'
    }).id('createofb:mekanism/item/advanced_mechanical_pipe');

    event.remove({output: 'mekanism:elite_mechanical_pipe'});
    event.recipes.create.mechanical_crafting('10x mekanism:elite_mechanical_pipe', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:advanced_mechanical_pipe',
      F: 'enderio:clear_glass',
      M: 'create_dd:calculation_mechanism'
    }).id('createofb:mekanism/item/elite_mechanical_pipe');

    event.remove({output: 'mekanism:ultimate_mechanical_pipe'});
    event.recipes.create.mechanical_crafting('10x mekanism:ultimate_mechanical_pipe', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:elite_mechanical_pipe',
      F: 'enderio:clear_glass',
      M: 'create_dd:infernal_mechanism'
    }).id('createofb:mekanism/item/ultimate_mechanical_pipe');

    event.remove({output: 'mekanism:basic_pressurized_tube'});
    event.recipes.create.mechanical_crafting('32x mekanism:basic_pressurized_tube', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: '#forge:ingots/steel',
      F: '#forge:glass/silica',
      M: 'create:precision_mechanism'
    }).id('createofb:mekanism/item/basic_pressurized_tube');

    event.remove({output: 'mekanism:advanced_pressurized_tube'});
    event.recipes.create.mechanical_crafting('10x mekanism:advanced_pressurized_tube', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:basic_pressurized_tube',
      F: '#forge:glass/silica',
      M: 'create_dd:integrated_mechanism'
    }).id('createofb:mekanism/item/advanced_pressurized_tube');

    event.remove({output: 'mekanism:elite_pressurized_tube'});
    event.recipes.create.mechanical_crafting('10x mekanism:elite_pressurized_tube', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:advanced_pressurized_tube',
      F: '#forge:glass/silica',
      M: 'create_dd:calculation_mechanism'
    }).id('createofb:mekanism/item/elite_pressurized_tube');

    event.remove({output: 'mekanism:ultimate_pressurized_tube'});
    event.recipes.create.mechanical_crafting('10x mekanism:ultimate_pressurized_tube', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:elite_pressurized_tube',
      F: '#forge:glass/silica',
      M: 'create_dd:calculation_mechanism'
    }).id('createofb:mekanism/item/ultimate_pressurized_tube');

    event.remove({output: 'mekanism:basic_logistical_transporter'});
    event.recipes.create.mechanical_crafting('32x mekanism:basic_logistical_transporter', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: '#forge:ingots/steel',
      F: 'ae2:quartz_glass',
      M: 'create:precision_mechanism'
    }).id('createofb:mekanism/item/basic_logistical_transporter');

    event.remove({output: 'mekanism:advanced_logistical_transporter'});
    event.recipes.create.mechanical_crafting('10x mekanism:advanced_logistical_transporter', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:basic_logistical_transporter',
      F: 'ae2:quartz_glass',
      M: 'create_dd:integrated_mechanism'
    }).id('createofb:mekanism/item/advanced_logistical_transporter');

    event.remove({output: 'mekanism:elite_logistical_transporter'});
    event.recipes.create.mechanical_crafting('10x mekanism:elite_logistical_transporter', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:advanced_logistical_transporter',
      F: 'ae2:quartz_glass',
      M: 'create_dd:calculation_mechanism'
    }).id('createofb:mekanism/item/elite_logistical_transporter');

    event.remove({output: 'mekanism:ultimate_logistical_transporter'});
    event.recipes.create.mechanical_crafting('10x mekanism:ultimate_logistical_transporter', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:elite_logistical_transporter',
      F: 'ae2:quartz_glass',
      M: 'create_dd:calculation_mechanism'
    }).id('createofb:mekanism/item/ultimate_logistical_transporter');

    event.remove({output: 'mekanism:restrictive_transporter'});
    event.recipes.create.mechanical_crafting('2x mekanism:restrictive_transporter', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: '#forge:ingots/steel',
      F: 'ae2:quartz_glass',
      M: 'mekanism:basic_logistical_transporter'
    }).id('createofb:mekanism/item/restrictive_transporter');

    event.remove({output: 'mekanism:diversion_transporter'});
    event.recipes.create.mechanical_crafting('2x mekanism:diversion_transporter', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: '#forge:ingots/steel',
      F: 'minecraft:redstone',
      M: 'mekanism:basic_logistical_transporter'
    }).id('createofb:mekanism/item/diversion_transporter');

    event.remove({output: 'mekanism:basic_thermodynamic_conductor'});
    event.recipes.create.mechanical_crafting('32x mekanism:basic_thermodynamic_conductor', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: '#forge:ingots/steel',
      F: '#forge:ingots/copper',
      M: 'create:precision_mechanism'
    }).id('createofb:mekanism/item/basic_thermodynamic_conductor');

    event.remove({output: 'mekanism:advanced_thermodynamic_conductor'});
    event.recipes.create.mechanical_crafting('10x mekanism:advanced_thermodynamic_conductor', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:basic_thermodynamic_conductor',
      F: '#forge:ingots/copper',
      M: 'create_dd:integrated_mechanism'
    }).id('createofb:mekanism/item/advanced_thermodynamic_conductor');

    event.remove({output: 'mekanism:elite_thermodynamic_conductor'});
    event.recipes.create.mechanical_crafting('10x mekanism:elite_thermodynamic_conductor', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:advanced_thermodynamic_conductor',
      F: '#forge:ingots/copper',
      M: 'create_dd:calculation_mechanism'
    }).id('createofb:mekanism/item/elite_thermodynamic_conductor');

    event.remove({output: 'mekanism:ultimate_thermodynamic_conductor'});
    event.recipes.create.mechanical_crafting('10x mekanism:ultimate_thermodynamic_conductor', [
      'SSSSS',
      'SFMFS',
      'SSSSS'
    ], {
      S: 'mekanism:elite_thermodynamic_conductor',
      F: '#forge:ingots/copper',
      M: 'create_dd:infernal_mechanism'
    }).id('createofb:mekanism/item/ultimate_thermodynamic_conductor');

    event.remove({output: 'mekanism:teleporter_frame'});
    event.recipes.create.mechanical_crafting('5x mekanism:teleporter_frame', [
      'OOOOO',
      'OUUUO',
      'OUCUO',
      'OUCUO',
      'OOOOO'
    ], {
      O: 'mekanism:block_refined_obsidian',
      U: 'createutilities:void_casing',
      C: 'mekanism:steel_casing'
    }).id('createofb:mekanism/item/teleporter_frame');

    event.remove({output: 'mekanism:basic_chemical_tank'});
    event.recipes.create.mechanical_crafting('mekanism:basic_chemical_tank', [
      'ROR',
      'OTO',
      'ROR'
    ], {
      O: 'mekanism:block_osmium',
      R: 'create:electron_tube',
      T: 'mekanism:basic_fluid_tank'
    }).id('createofb:mekanism/item/basic_chemical_tank');

    event.remove({output: 'mekanism:advanced_chemical_tank'});
    event.recipes.create.mechanical_crafting('mekanism:advanced_chemical_tank', [
      'RCR',
      'OTO',
      'ROR'
    ], {
      C: 'create_dd:calculation_mechanism',
      O: 'mekanism:block_osmium',
      R: 'extendedcrafting:redstone_ingot_block',
      T: 'mekanism:basic_chemical_tank'
    }).id('createofb:mekanism/item/advanced_chemical_tank');

    event.remove({output: 'mekanism:elite_chemical_tank'});
    event.recipes.create.mechanical_crafting('mekanism:elite_chemical_tank', [
      'RCR',
      'OTO',
      'ROR'
    ], {
      C: 'create_dd:infernal_mechanism',
      O: 'mekanism:block_osmium',
      R: 'extendedcrafting:redstone_ingot_block',
      T: 'mekanism:advanced_chemical_tank'
    }).id('createofb:mekanism/item/elite_chemical_tank');

    event.remove({output: 'mekanism:ultimate_chemical_tank'});
    event.recipes.create.mechanical_crafting('mekanism:ultimate_chemical_tank', [
      'RCR',
      'OTO',
      'ROR'
    ], {
      C: 'create_dd:sealed_mechanism',
      O: 'mekanism:block_osmium',
      R: 'extendedcrafting:redstone_ingot_block',
      T: 'mekanism:elite_chemical_tank'
    }).id('createofb:mekanism/item/ultimate_chemical_tank');

    let base = 'mekanism:hdpe_sheet'
    event.remove({output: 'mekanism:module_base'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:module_base').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createPressing(base, base),
      event.recipes.createDeploying(base, [base, '#forge:wires/copper']),
      event.recipes.createDeploying(base, [base, Item.of('tfmg:screwdriver', {dameage:0})]),
      event.recipes.createFilling(base, [base, Fluid.of('tconstruct:molten_lead', 180)]),
      event.recipes.createDeploying(base, [base, 'ae2:logic_processor'])
    ]).transitionalItem(base).loops(1).id('createofb:mekanism/module/base');

    base = 'mekanism:module_base';
    event.remove({output: 'mekanism:upgrade_speed'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:upgrade_speed').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'ae2:engineering_processor']),
      event.recipes.createFilling(base, [base, Fluid.of('tconstruct:molten_lead', 180)]),
      event.recipes.createDeploying(base, [base, 'create_dd:sealed_mechanism']),
      event.recipes.createDeploying(base, [base, 'minecraft:golden_apple']),
      event.recipes.createDeploying(base, [base, Item.of('tfmg:screwdriver', {dameage:0})]),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic'])
    ]).transitionalItem(base).loops(1).id('createofb:mekanism/upgrade/speed');

    event.remove({output: 'mekanism:upgrade_energy'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:upgrade_energy').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'ae2:engineering_processor']),
      event.recipes.createFilling(base, [base, Fluid.of('tconstruct:molten_lead', 180)]),
      event.recipes.createDeploying(base, [base, 'create_dd:sealed_mechanism']),
      event.recipes.createDeploying(base, [base, 'enderio:vibrant_capacitor_bank']),
      event.recipes.createDeploying(base, [base, Item.of('tfmg:screwdriver', {dameage:0})]),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic'])
    ]).transitionalItem(base).loops(1).id('createofb:mekanism/upgrade/energy');

    event.remove({output: 'mekanism:upgrade_filter'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:upgrade_filter').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'ae2:engineering_processor']),
      event.recipes.createFilling(base, [base, Fluid.of('tconstruct:molten_lead', 180)]),
      event.recipes.createDeploying(base, [base, 'create_dd:sealed_mechanism']),
      event.recipes.createDeploying(base, [base, 'create:attribute_filter']),
      event.recipes.createDeploying(base, [base, Item.of('tfmg:screwdriver', {dameage:0})]),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic'])
    ]).transitionalItem(base).loops(1).id('createofb:mekanism/upgrade/filter');

    event.remove({output: 'mekanism:upgrade_muffling'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:upgrade_muffling').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'ae2:engineering_processor']),
      event.recipes.createFilling(base, [base, Fluid.of('tconstruct:molten_lead', 180)]),
      event.recipes.createDeploying(base, [base, 'create_dd:sealed_mechanism']),
      event.recipes.createDeploying(base, [base, '#forge:wool']),
      event.recipes.createDeploying(base, [base, Item.of('tfmg:screwdriver', {dameage:0})]),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic'])
    ]).transitionalItem(base).loops(1).id('createofb:mekanism/upgrade/muffling');

    event.remove({output: 'mekanism:upgrade_gas'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:upgrade_gas').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'ae2:engineering_processor']),
      event.recipes.createFilling(base, [base, Fluid.of('tconstruct:molten_lead', 180)]),
      event.recipes.createDeploying(base, [base, 'create_dd:sealed_mechanism']),
      event.recipes.createDeploying(base, [base, 'mekanism:ultimate_chemical_tank']),
      event.recipes.createDeploying(base, [base, Item.of('tfmg:screwdriver', {dameage:0})]),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic'])
    ]).transitionalItem(base).loops(1).id('createofb:mekanism/upgrade/gas');

    event.remove({output: 'mekanism:upgrade_anchor'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:upgrade_anchor').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'ae2:engineering_processor']),
      event.recipes.createFilling(base, [base, Fluid.of('tconstruct:molten_lead', 180)]),
      event.recipes.createDeploying(base, [base, 'create_dd:sealed_mechanism']),
      event.recipes.createDeploying(base, [base, 'createendertransmission:chunk_loader']),
      event.recipes.createDeploying(base, [base, Item.of('tfmg:screwdriver', {dameage:0})]),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic'])
    ]).transitionalItem(base).loops(1).id('createofb:mekanism/upgrade/anchor');

    event.remove({output: 'mekanism:upgrade_stone_generator'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanism:upgrade_stone_generator').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'ae2:engineering_processor']),
      event.recipes.createFilling(base, [base, Fluid.of('tconstruct:molten_lead', 180)]),
      event.recipes.createDeploying(base, [base, 'create_dd:sealed_mechanism']),
      event.recipes.createDeploying(base, [base, 'minecraft:cobblestone']),
      event.recipes.createDeploying(base, [base, Item.of('tfmg:screwdriver', {dameage:0})]),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic'])
    ]).transitionalItem(base).loops(1).id('createofb:mekanism/upgrade/stone_generator');

    //mekanism item adding recipe
    event.remove({output: 'mekanismgenerators:turbine_casing'});
    event.shaped(
        Item.of('mekanismgenerators:turbine_casing', 2),
        [
          'ABA',
          'BCB',
          'ABA'
        ],
        {
          A: '#forge:storage_blocks/steel',
          B: '#forge:storage_blocks/osmium',
          C: 'create_dd:calculation_mechanism'
        }
    ).id('createofb:mekanismgenerators/item/turbine_casing');

})