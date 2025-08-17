ServerEvents.recipes(event => {

    let base = "minecraft:diamond"
    //draconium core
    event.remove({output: 'draconicevolution:draconium_core'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: base},
        loops: 4,
        results: [{count: 1,item: "draconicevolution:draconium_core"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: base},
              [{item: "draconicevolution:draconium_ingot"}]
            ],
            results: [
              {item: base}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: base},
              [{item: "minecraft:gold_ingot"}]
            ],
            results: [
              {item: base}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: base},
              [{item: "create_dd:integrated_mechanism"}]
            ],
            results: [
              {item: base}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: base},
              [{item: "rainbowcompound:rainbow_compound"}]
            ],
            results: [
              {item: base}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: base},
              [{item: "create_ethium:polished_stellarite"}]
            ],
            results: [
              {item: base}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 50000,
            ingredients: [
              {item: base}
            ],
            results: [
              {item: base}
            ]
          },
        ],
        transitionalItem: {
          item: base
        }
      }
    ).id('createofb:draconicevolution/item/draconium_core');

    base = 'minecraft:nether_star'
    //wyvern core
    event.remove({output: 'draconicevolution:wyvern_core'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: base},
        loops: 4,
        results: [{count: 1,item: "draconicevolution:wyvern_core"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: base},
              [{item: "draconicevolution:draconium_ingot"}]
            ],
            results: [
              {item: base}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: base},
              [{item: "ticex:draconium_crystal"}]
            ],
            results: [
              {item: base}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: base},
              [{item: "create_dd:infernal_mechanism"}]
            ],
            results: [
              {item: base}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: base},
              [{item: "createchromaticreturn:multiplite_ingot"}]
            ],
            results: [
              {item: base}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: base},
              [{item: "create_ethium:ethium_ingot"}]
            ],
            results: [
              {item: base}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 100000,
            ingredients: [
              {item: base}
            ],
            results: [
              {item: base}
            ]
          },
        ],
        transitionalItem: {
          item: base
        }
      }
    ).id('createofb:draconicevolution/item/wyvern_core');

  event.remove({output: 'draconicevolution:awakened_core'})
  event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "type": "draconicevolution:ingredient_stack",
          "count": 1,
          "items": [
            {
              "item": "extendedcrafting:ender_star"
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
            "item": "ticex:wyvern_crystal"
          },
          {
            "item": "ticex:wyvern_crystal"
          },
          {
            "item": "rainbowcompound:netherstar_ingot"
          },
          {
            "item": "mekanism:pellet_antimatter"
          },
          {
            "item": "create_dd:sealed_mechanism"
          },
          {
            "item": "mysticalagriculture:awakened_supremium_ingot_block"
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
          "item": "draconicevolution:awakened_core"
        },
        "tier": "WYVERN",
        "total_energy": 16000000
      }).id('createofb:draconicevolution/item/awakened_core');


  event.remove({output: 'draconicevolution:chaotic_core'})
  event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "type": "draconicevolution:ingredient_stack",
          "count": 1,
          "items": [
            {
              "item": "extendedcrafting:crystaltine_ingot"
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
            "item": "rainbowcompound:netherstar_ingot"
          },
          {
            "item": "draconicevolution:large_chaos_frag"
          },
          {
            "item": "create_dd:sealed_mechanism"
          },
          {
            "item": "draconicevolution:large_chaos_frag"
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
          "item": "draconicevolution:chaotic_core"
        },
        "tier": "DRACONIC",
        "total_energy": 120000000
      }).id('createofb:draconicevolution/item/chaotic_core');

})