ServerEvents.recipes(event => {

    event.remove({output: 'rftoolsutility:spawner'});
    event.remove({output: 'rftoolsutility:crafter1'});
    event.remove({output: 'rftoolsutility:crafter2'});
    event.remove({output: 'rftoolsutility:crafter3'});

    //rftools item adding recipe
    event.remove({output: 'rftoolsbase:machine_frame'});
    event.shaped(
        Item.of('rftoolsbase:machine_frame', 2),
        [
          'ABA',
          'BCB',
          'ABA'
        ],
        {
          A: 'minecraft:iron_block',
          B: 'minecraft:gold_block',
          C: 'create_dd:calculation_mechanism'
        }
    ).id('createofb:rftools/item/machine_frame');

    //enscriber
    let casing = 'rftoolsbase:machine_frame'
    event.remove({output: 'rftoolsdim:enscriber'});
    event.recipes.create.sequenced_assembly([
      Item.of('rftoolsdim:enscriber').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'rftoolsdim:empty_dimlet']),
      event.recipes.createDeploying(casing, [casing, 'mekanism:teleportation_core']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'industrialforegoing:plastic']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'ae2:molecular_assembler'])
    ]).transitionalItem(casing).loops(2).id('createofb:rftools/item/enscriber');

    //dimension editor
    event.remove({output: 'rftoolsdim:dimension_editor'});
    event.recipes.create.sequenced_assembly([
      Item.of('rftoolsdim:dimension_editor').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'rftoolsbase:infused_enderpearl']),
      event.recipes.createDeploying(casing, [casing, 'mekanism:teleportation_core']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'createteleporters:custom_portal']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'ae2:molecular_assembler'])
    ]).transitionalItem(casing).loops(2).id('createofb:rftools/item/dimension_editor');

    //Machine Infuser
    event.remove({output: 'rftoolsbase:machine_infuser'});
    event.recipes.create.sequenced_assembly([
      Item.of('rftoolsbase:machine_infuser').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'rftoolsbase:dimensionalshard']),
      event.recipes.createDeploying(casing, [casing, 'mekanism:teleportation_core']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'minecraft:diamond']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'ae2:molecular_assembler'])
    ]).transitionalItem(casing).loops(2).id('createofb:rftools/item/machine_infuser');

    //Dimension Builder
    event.remove({output: 'rftoolsdim:dimension_builder'});
    event.recipes.create.sequenced_assembly([
      Item.of('rftoolsdim:dimension_builder').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'rftoolsbase:infused_enderpearl']),
      event.recipes.createDeploying(casing, [casing, 'rainbowcompound:rainbow_compound']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'rftoolsbase:infused_diamond']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'ae2:molecular_assembler'])
    ]).transitionalItem(casing).loops(2).id('createofb:rftools/item/dimension_builder');

    //Dimlet Workbench
    event.remove({output: 'rftoolsdim:dimlet_workbench'});
    event.recipes.create.sequenced_assembly([
      Item.of('rftoolsdim:dimlet_workbench').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'immersiveengineering:workbench']),
      event.recipes.createDeploying(casing, [casing, 'rftoolsdim:empty_dimlet']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'rftoolsbase:infused_diamond']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'ae2:molecular_assembler'])
    ]).transitionalItem(casing).loops(2).id('createofb:rftools/item/dimlet_workbench');

    //knowledge holder
    event.remove({output: 'rftoolsdim:knowledge_holder'});
    event.recipes.create.sequenced_assembly([
      Item.of('rftoolsdim:knowledge_holder').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'industrialforegoing:simple_black_hole_unit']),
      event.recipes.createDeploying(casing, [casing, 'rftoolsdim:empty_dimlet']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'rftoolsbase:infused_diamond']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'ae2:molecular_assembler'])
    ]).transitionalItem(casing).loops(2).id('createofb:rftools/item/knowledge_holder');

    //Researcher
    event.remove({output: 'rftoolsdim:researcher'});
    event.recipes.create.sequenced_assembly([
      Item.of('rftoolsdim:researcher').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'mysticalagriculture:enchanter']),
      event.recipes.createDeploying(casing, [casing, 'rftoolsdim:empty_dimlet']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'createchromaticreturn:multiplite_tube']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'ae2:molecular_assembler'])
    ]).transitionalItem(casing).loops(2).id('createofb:rftools/item/researcher');

    //transmitter
    event.remove({output: 'rftoolsutility:matter_transmitter'});
    event.recipes.create.sequenced_assembly([
      Item.of('rftoolsutility:matter_transmitter').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'rftoolsbase:infused_enderpearl']),
      event.recipes.createDeploying(casing, [casing, 'industrialforegoing:mob_imprisonment_tool']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'createchromaticreturn:multiplite_tube']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'createteleporters:custom_portal'])
    ]).transitionalItem(casing).loops(2).id('createofb:rftools/item/matter_transmitter');

    //receiver
    event.remove({output: 'rftoolsutility:matter_receiver'});
    event.recipes.create.sequenced_assembly([
      Item.of('rftoolsutility:matter_receiver').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'industrialforegoing:mob_imprisonment_tool']),
      event.recipes.createDeploying(casing, [casing, 'rftoolsbase:infused_enderpearl']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'createchromaticreturn:multiplite_tube']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'createteleporters:custom_portal'])
    ]).transitionalItem(casing).loops(2).id('createofb:rftools/item/matter_receiver');

    //dialing device
    event.remove({output: 'rftoolsutility:dialing_device'});
    event.recipes.create.sequenced_assembly([
      Item.of('rftoolsutility:dialing_device').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'createchromaticreturn:multiplite_tube']),
      event.recipes.createDeploying(casing, [casing, 'rftoolsbase:infused_enderpearl']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'ae2:molecular_assembler']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'ae2:wireless_receiver'])
    ]).transitionalItem(casing).loops(2).id('createofb:rftools/item/dialing_device');

    //destination analyzer
    event.remove({output: 'rftoolsutility:destination_analyzer'});
    event.recipes.create.sequenced_assembly([
      Item.of('rftoolsutility:destination_analyzer').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'enderio:redstone_alloy_block']),
      event.recipes.createDeploying(casing, [casing, 'createchromaticreturn:multiplite_tube']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'rftoolsbase:infused_enderpearl']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'ae2:wireless_receiver'])
    ]).transitionalItem(casing).loops(2).id('createofb:rftools/item/destination_analyzer');

    //draconium fusion crafting injetor
    event.remove({id: 'rftoolsutility:matter_booster'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: casing},
        loops: 3,
        results: [{count: 1,item: "rftoolsutility:matter_booster"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "enderio:redstone_alloy_block"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "enderio:redstone_alloy_block"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create_dd:infernal_mechanism"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "ae2:molecular_assembler"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: casing},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 1000000,
            ingredients: [
              {item: casing}
            ],
            results: [
              {item: casing}
            ]
          },
        ],
        transitionalItem: {
          item: casing
        }
      }
    ).id('createofb:draconicevolution/machine/matter_booster');



})