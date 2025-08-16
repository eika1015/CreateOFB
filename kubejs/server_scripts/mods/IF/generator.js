ServerEvents.recipes((event) => {

    //pitiful generator
    event.remove({output: 'industrialforegoing:pitiful_generator'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "industrialforegoing:machine_frame_pity"},
        loops: 2,
        results: [{count: 1,item: "industrialforegoing:pitiful_generator"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              [{item: "minecraft:furnace"}]
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              [{item: "industrialforegoing:plastic"}]
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              [{tag: "forge:gears/gold"}]
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              [{item: "tfmg:turbine_engine"}]
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              {
                amount: 500,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"}
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
        ],
        transitionalItem: {
          item: "industrialforegoing:machine_frame_pity"
        }
      }
    ).id('createofb:if/generator/pitiful');

    //bio generator
    event.remove({output: 'industrialforegoing:bioreactor'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "industrialforegoing:machine_frame_pity"},
        loops: 2,
        results: [{count: 1,item: "industrialforegoing:bioreactor"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              [{tag: "forge:slimeballs"}]
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              [{item: "industrialforegoing:plastic"}]
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              [{tag: "forge:gears/diamond"}]
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              [{item: "tfmg:turbine_engine"}]
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              {
                amount: 500,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"}
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
        ],
        transitionalItem: {
          item: "industrialforegoing:machine_frame_pity"
        }
      }
    ).id('createofb:if/generator/bio');

    //biofuel generator
    event.remove({output: 'industrialforegoing:biofuel_generator'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "industrialforegoing:machine_frame_pity"},
        loops: 2,
        results: [{count: 1,item: "industrialforegoing:biofuel_generator"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              [{item: "minecraft:piston"}]
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              [{item: "industrialforegoing:plastic"}]
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              [{tag: "forge:gears/gold"}]
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              [{item: "tfmg:turbine_engine"}]
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"},
              {
                amount: 500,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "industrialforegoing:machine_frame_pity"}
            ],
            results: [
              {item: "industrialforegoing:machine_frame_pity"}
            ]
          },
        ],
        transitionalItem: {
          item: "industrialforegoing:machine_frame_pity"
        }
      }
    ).id('createofb:if/generator/biofuel');

    event.remove({output: 'industrialforegoing:mycelial_reactor'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:plastic"
        },
        {
          "tag": "industrialforegoing:machine_frame/supreme"
        },
        {
          "tag": "forge:plastic"
        },
        {
          "item": "createutilities:void_steel_sheet"
        },
        {
          "item": "createutilities:void_steel_sheet"
        },
        {
          "tag": "forge:gears/netherite"
        },
        {
          "item": "create_dd:abstruse_mechanism"
        },
        {
          "tag": "forge:gears/netherite"
        }
      ],
      "inputFluid": "{Amount:1000,FluidName:\"ticex:molten_etheric\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:mycelial_reactor"
      },
      "processingTime": 1000
    }).id('createofb:if/generator/mycelial/reactor');

    let base = 'industrialforegoing:mycelial_reactor'

    event.remove({output: 'industrialforegoing:mycelial_furnace'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_furnace').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:furnace']),
      event.recipes.createDeploying(base, [base, '#forge:storage_blocks/coal']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/furnace');

    event.remove({output: 'industrialforegoing:mycelial_slimey'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_slimey').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:slime_block']),
      event.recipes.createDeploying(base, [base, 'minecraft:milk_bucket']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/slimey');

    event.remove({output: 'industrialforegoing:mycelial_culinary'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_culinary').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:crops']),
      event.recipes.createDeploying(base, [base, 'minecraft:cooked_beef']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/culinary');

    event.remove({output: 'industrialforegoing:mycelial_potion'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_potion').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:nether_wart']),
      event.recipes.createDeploying(base, [base, 'minecraft:brewing_stand']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/potion');

    event.remove({output: 'industrialforegoing:mycelial_disenchantment'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_disenchantment').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:book']),
      event.recipes.createDeploying(base, [base, 'minecraft:grindstone']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/disenchantment');

    event.remove({output: 'industrialforegoing:mycelial_ender'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_ender').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:ender_eye']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_pearl']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/ender');

   event.remove({output: 'industrialforegoing:mycelial_explasive'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_explasive').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:tnt']),
      event.recipes.createDeploying(base, [base, 'minecraft:redstone_torch']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/explasive');

   event.remove({output: 'industrialforegoing:mycelial_frosty'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_frosty').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:snowball']),
      event.recipes.createDeploying(base, [base, 'minecraft:ice']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/frosty');

   event.remove({output: 'industrialforegoing:mycelial_halitosis'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_halitosis').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:purpur_block']),
      event.recipes.createDeploying(base, [base, 'minecraft:end_rod']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/halitosis');

   event.remove({output: 'industrialforegoing:mycelial_magma'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_magma').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:redstone_block']),
      event.recipes.createDeploying(base, [base, 'minecraft:lava_bucket']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/magma');

   event.remove({output: 'industrialforegoing:mycelial_pink'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_pink').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:pink_dye']),
      event.recipes.createDeploying(base, [base, 'minecraft:pink_wool']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/pink');

   event.remove({output: 'industrialforegoing:mycelial_netherstar'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_netherstar').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:wither_skeleton_skull']),
      event.recipes.createDeploying(base, [base, 'minecraft:nether_star']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/netherstar');

   event.remove({output: 'industrialforegoing:mycelial_death'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_death').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:rotten_flesh']),
      event.recipes.createDeploying(base, [base, 'minecraft:bone']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/death');

   event.remove({output: 'industrialforegoing:mycelial_rocket'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_rocket').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:gunpowder']),
      event.recipes.createDeploying(base, [base, 'minecraft:paper']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/rocket');

   event.remove({output: 'industrialforegoing:mycelial_crimed'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_crimed').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:nether_wart_block']),
      event.recipes.createDeploying(base, [base, 'minecraft:crimson_fungus']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/crimed');

   event.remove({output: 'industrialforegoing:mycelial_meatallurgic'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_meatallurgic').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:ingots']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:meat_bucket']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/meatallurgic');

   event.remove({output: 'industrialforegoing:mycelial_explosive'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:mycelial_explosive').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'minecraft:tnt']),
      event.recipes.createDeploying(base, [base, 'minecraft:redstoe_torch']),
      event.recipes.createDeploying(base, [base, 'create:electron_tube']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/generator/mycelial/explosive');

})