ServerEvents.recipes(event => {

    //crafting core
    let casing = 'draconicevolution:draconium_block'
    event.remove({output: 'draconicevolution:crafting_core'});
    event.recipes.create.sequenced_assembly([
      Item.of('draconicevolution:crafting_core').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, 'minecraft:lapis_block']),
      event.recipes.createDeploying(casing, [casing, 'create_dd:infernal_mechanism']),
      event.recipes.createDeploying(casing, [casing, 'ticex:draconium_crystal']),
      event.recipes.createDeploying(casing, [casing, 'draconicevolution:dragon_heart']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(casing, [casing, 'minecraft:lapis_block'])
    ]).transitionalItem(casing).loops(3).id('createofb:draconicevolution/machine/crafting_core');


    casing = "allthecompressed:iron_block_1x"
    //draconium fusion crafting injetor
    event.remove({id: 'draconicevolution:machines/basic_crafting_injector'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: casing},
        loops: 3,
        results: [{count: 1,item: "draconicevolution:basic_crafting_injector"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "ticex:draconium_crystal"}]
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
              [{item: "ae2:molecular_assembler"}]
            ],
            results: [
              {item: casing}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "ae2:controller"}]
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
            energy_needed: 50000,
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
    ).id('createofb:draconicevolution/machine/draconium_fusion_crafting_injector');

    casing = "draconicevolution:basic_crafting_injector"
    //draconium fusion crafting injetor
    event.remove({id: 'draconicevolution:machines/wyvern_crafting_injector'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: casing},
        loops: 3,
        results: [{count: 1,item: "draconicevolution:wyvern_crafting_injector"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "ticex:wyvern_crystal"}]
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
            type: "create:deploying",
            ingredients: [
              {item: casing},
              [{item: "ae2:controller"}]
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
    ).id('createofb:draconicevolution/machine/wyvern_fusion_crafting_injector');

  event.remove({id: 'draconicevolution:machines/awakened_crafting_injector'})
  event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "type": "draconicevolution:ingredient_stack",
          "count": 1,
          "items": [
            {
              "item": "draconicevolution:wyvern_crafting_injector"
            }
          ]
        },
        "ingredients": [
          {
            "item": "ticex:wyvern_crystal"
          },
          {
            "item": "ticex:wyvern_crystal"
          },
          {
            "item": "draconicevolution:awakened_draconium_block"
          },
          {
            "item": "minecraft:diamond_block"
          },
          {
            "item": "create_dd:sealed_mechanism"
          },
          {
            "item": "ae2:molecular_assembler"
          },
          {
            "item": "ae2:molecular_assembler"
          },
          {
            "item": "ae2:controller"
          }
        ],
        "result": {
          "count": 1,
          "item": "draconicevolution:awakened_crafting_injector"
        },
        "tier": "WYVERN",
        "total_energy": 512000
      }).id('createofb:draconicevolution/machine/doraconic_fusion_crafting_injector');

  event.remove({id: 'draconicevolution:machines/chaotic_crafting_injector'})
  event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "type": "draconicevolution:ingredient_stack",
          "count": 1,
          "items": [
            {
              "item": "draconicevolution:awakened_crafting_injector"
            }
          ]
        },
        "ingredients": [
          {
            "item": "ticex:draconic_crystal"
          },
          {
            "item": "ticex:draconic_crystal"
          },
          {
            "item": "ticex:draconic_crystal"
          },
          {
            "item": "ticex:draconic_crystal"
          },
          {
            "item": "draconicevolution:large_chaos_frag"
          },
          {
            "item": "draconicevolution:large_chaos_frag"
          },
          {
            "item": "minecraft:dragon_egg"
          },
          {
            "item": "create_dd:abstruse_mechanism"
          },
          {
            "item": "ae2:molecular_assembler"
          },
          {
            "item": "ae2:controller"
          }
        ],
        "result": {
          "count": 1,
          "item": "draconicevolution:chaotic_crafting_injector"
        },
        "tier": "DRACONIC",
        "total_energy": 512000
      }).id('createofb:draconicevolution/machine/draconic_fusion_crafting_injector');

})