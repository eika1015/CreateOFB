ServerEvents.recipes((event) => {

let casing = 'thermal:machine_frame'
    //redstone furnace
    event.remove({output: 'thermal:machine_furnace'});
    event.recipes.create.sequenced_assembly([
      Item.of('thermal:machine_furnace').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'thermal:rf_coil']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'thermal:steel_gear']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'minecraft:furnace'])
    ]).transitionalItem(casing).loops(2).id('createofb:thermal/machine/machine_furnace');


    //smelter
    event.remove({output: 'thermal:machine_smelter'});
    event.recipes.create.sequenced_assembly([
      Item.of('thermal:machine_smelter').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'thermal:rf_coil']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'thermal:steel_gear']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'minecraft:blast_furnace'])
    ]).transitionalItem(casing).loops(2).id('createofb:thermal/machine/machine_smelter');


    //insolator
    event.remove({output: 'thermal:machine_insolator'});
    event.recipes.create.sequenced_assembly([
      Item.of('thermal:machine_insolator').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'thermal:rf_coil']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'thermal:steel_gear']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'botanypotstiers:elite_terracotta_botany_pot'])
    ]).transitionalItem(casing).loops(2).id('createofb:thermal/machine/machine_insolator');

    //centrifugal separator
    event.remove({output: 'thermal:machine_centrifuge'});
    event.recipes.create.sequenced_assembly([
      Item.of('thermal:machine_centrifuge').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'thermal:rf_coil']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'thermal:constantan_gear']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'minecraft:compass'])
    ]).transitionalItem(casing).loops(2).id('createofb:thermal/machine/machine_centrifuge');

    //centrifugal separator
    event.remove({output: 'thermal:machine_press'});
    event.recipes.create.sequenced_assembly([
      Item.of('thermal:machine_press').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'thermal:rf_coil']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'thermal:constantan_gear']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:mechanical_press'])
    ]).transitionalItem(casing).loops(2).id('createofb:thermal/machine/machine_press');

    //magma crucible
    event.remove({output: 'thermal:machine_crucible'});
    event.recipes.create.sequenced_assembly([
      Item.of('thermal:machine_crucible').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'thermal:rf_coil']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'thermal:invar_gear']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'minecraft:nether_bricks'])
    ]).transitionalItem(casing).loops(2).id('createofb:thermal/machine/machine_crucible');

    //blast chiller
    event.remove({output: 'thermal:machine_chiller'});
    event.recipes.create.sequenced_assembly([
      Item.of('thermal:machine_chiller').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'thermal:rf_coil']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'thermal:invar_gear']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'minecraft:packed_ice'])
    ]).transitionalItem(casing).loops(2).id('createofb:thermal/machine/machine_chiller');

    //fractionating still
    event.remove({output: 'thermal:machine_refinery'});
    event.recipes.create.sequenced_assembly([
      Item.of('thermal:machine_refinery').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'thermal:rf_coil']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'thermal:invar_gear']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:mechanical_mixer'])
    ]).transitionalItem(casing).loops(2).id('createofb:thermal/machine/machine_refinery');

    //fluid encapsulator
    event.remove({output: 'thermal:machine_bottler'});
    event.recipes.create.sequenced_assembly([
      Item.of('thermal:machine_bottler').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'thermal:rf_coil']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'thermal:copper_gear']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'create:mechanical_mixer'])
    ]).transitionalItem(casing).loops(2).id('createofb:thermal/machine/machine_bottler');

    //alchemical imbuer
    event.remove({output: 'thermal:machine_brewer'});
    event.recipes.create.sequenced_assembly([
      Item.of('thermal:machine_brewer').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'thermal:rf_coil']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'thermal:constantan_gear']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'minecraft:brewing_stand'])
    ]).transitionalItem(casing).loops(2).id('createofb:thermal/machine/machine_brewer');

    //crystallizer
    event.remove({output: 'thermal:machine_crystallizer'});
    event.recipes.create.sequenced_assembly([
      Item.of('thermal:machine_crystallizer').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'thermal:rf_coil']),
      event.recipes.createDeploying(casing, [casing, 'create:electron_tube']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:calculation_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'thermal:constantan_gear']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'thermal:signalum_plate'])
    ]).transitionalItem(casing).loops(2).id('createofb:thermal/machine/machine_crystallizer');


    //stirling dynamo
    event.remove({output: 'thermal:dynamo_stirling'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: casing},
        loops: 2,
        results: [{count: 1,item: "thermal:dynamo_stirling"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "thermal:rf_coil"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create:electron_tube"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create_dd:calculation_mechanism"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{tag: "forge:gears/iron"}]
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
            energy_needed: 100000,
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
    ).id('createofb:thermal/machine/stirling_dynamo');


    //compression dynamo
    event.remove({output: 'thermal:dynamo_compression'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: casing},
        loops: 2,
        results: [{count: 1,item: "thermal:dynamo_compression"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "thermal:rf_coil"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create:electron_tube"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create_dd:calculation_mechanism"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{tag: "forge:gears/bronze"}]
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
            energy_needed: 100000,
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
    ).id('createofb:thermal/machine/compression_dynamo');


    //magmatic dynamo
    event.remove({output: 'thermal:dynamo_magmatic'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: casing},
        loops: 2,
        results: [{count: 1,item: "thermal:dynamo_magmatic"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "thermal:rf_coil"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create:electron_tube"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create_dd:calculation_mechanism"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{tag: "forge:gears/invar"}]
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
            energy_needed: 100000,
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
    ).id('createofb:thermal/machine/magmatic_dynamo');


    //numismatic dynamo
    event.remove({output: 'thermal:dynamo_numismatic'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: casing},
        loops: 2,
        results: [{count: 1,item: "thermal:dynamo_numismatic"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "thermal:rf_coil"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create:electron_tube"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create_dd:calculation_mechanism"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{tag: "forge:gears/constantan"}]
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
            energy_needed: 100000,
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
    ).id('createofb:thermal/machine/numismatic_dynamo');


    //lapidary dynamo
    event.remove({output: 'thermal:dynamo_lapidary'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: casing},
        loops: 2,
        results: [{count: 1,item: "thermal:dynamo_lapidary"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "thermal:rf_coil"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create:electron_tube"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create_dd:calculation_mechanism"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{tag: "forge:gears/gold"}]
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
            energy_needed: 100000,
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
    ).id('createofb:thermal/machine/lapidary_dynamo');


    //disenchantment dynamo
    event.remove({output: 'thermal:dynamo_disenchantment'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: casing},
        loops: 2,
        results: [{count: 1,item: "thermal:dynamo_disenchantment"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "thermal:rf_coil"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create:electron_tube"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create_dd:calculation_mechanism"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{tag: "forge:gears/silver"}]
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
            energy_needed: 100000,
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
    ).id('createofb:thermal/machine/disenchantment_dynamo');


    //gourmand dynamo
    event.remove({output: 'thermal:dynamo_gourmand'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: casing},
        loops: 2,
        results: [{count: 1,item: "thermal:dynamo_gourmand"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "thermal:rf_coil"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create:electron_tube"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "create_dd:calculation_mechanism"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{tag: "forge:gears/copper"}]
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
            energy_needed: 100000,
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
    ).id('createofb:thermal/machine/gourmand_dynamo');

})