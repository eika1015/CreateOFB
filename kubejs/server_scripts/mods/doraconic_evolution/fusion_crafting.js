ServerEvents.recipes(event => {
  
  event.remove({output: 'draconicevolution:awakened_draconium_block'})
  event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "type": "draconicevolution:ingredient_stack",
          "count": 3,
          "items": [
            {
              "tag": "forge:storage_blocks/draconium"
            }
          ]
        },
        "ingredients": [
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:dragon_heart"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:draconium_core"
          }
        ],
        "result": {
          "count": 1,
          "item": "draconicevolution:awakened_draconium_block"
        },
        "tier": "WYVERN",
        "total_energy": 50000000
      }).id('createofb:draconicevolution/item/awakened_draconium_block');


  event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "type": "draconicevolution:ingredient_stack",
          "count": 2,
          "items": [
            {
              "item": "minecraft:diamond"
            }
          ]
        },
        "ingredients": [
          {
            "item": "mekanism:advanced_control_circuit"
          },
          {
            "item": "ae2:calculation_processor"
          },
          {
            "item": "enderio:energetic_alloy_ingot"
          },
          {
            "item": "create:electron_tube"
          },
          {
            "item": "rainbowcompound:lapis_sheet"
          }
        ],
        "result": {
          "count": 2,
          "item": "create_dd:integrated_mechanism"
        },
        "tier": "WYVERN",
        "total_energy": 3000000
      }).id('createofb:draconicevolution/mechanism/integrated');
      

  event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "type": "draconicevolution:ingredient_stack",
          "count": 2,
          "items": [
            {
              "item": "create_dd:integrated_mechanism"
            }
          ]
        },
        "ingredients": [
          {
            "item": "mekanism:elite_control_circuit"
          },
          {
            "item": "ae2:engineering_processor"
          },
          {
            "item": "enderio:vibrant_alloy_ingot"
          },
          {
            "item": "thermal:enderium_gear"
          },
          {
            "item": "thermal:steel_plate"
          }
        ],
        "result": {
          "count": 3,
          "item": "create_dd:calculation_mechanism"
        },
        "tier": "WYVERN",
        "total_energy": 10000000
      }).id('createofb:draconicevolution/mechanism/calculation');


  event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "type": "draconicevolution:ingredient_stack",
          "count": 3,
          "items": [
            {
              "item": "create_dd:calculation_mechanism"
            }
          ]
        },
        "ingredients": [
          {
            "item": "mekanism:ultimate_control_circuit"
          },
          {
            "item": "ae2:engineering_processor"
          },
          {
            "item": "enderio:end_steel_ingot"
          },
          {
            "item": "thermal:netherite_plate"
          },
          {
            "item": "industrialforegoing:pink_slime_ingot"
          }
        ],
        "result": {
          "count": 4,
          "item": "create_dd:infernal_mechanism"
        },
        "tier": "DRACONIC",
        "total_energy": 30000000
      }).id('createofb:draconicevolution/mechanism/infernal');


  event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "type": "draconicevolution:ingredient_stack",
          "count": 4,
          "items": [
            {
              "item": "create_dd:infernal_mechanism"
            }
          ]
        },
        "ingredients": [
          {
            "item": "minecraft:totem_of_undying"
          },
          {
            "item": "ae2:engineering_processor"
          },
          {
            "item": "draconicevolution:awakened_draconium_ingot"
          },
          {
            "item": "minecraft:nether_star"
          },
          {
            "item": "rainbowcompound:rainbow_compound"
          }
        ],
        "result": {
          "count": 5,
          "item": "create_dd:sealed_mechanism"
        },
        "tier": "DRACONIC",
        "total_energy": 100000000
      }).id('createofb:draconicevolution/mechanism/sealed');


  event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "type": "draconicevolution:ingredient_stack",
          "count": 5,
          "items": [
            {
              "item": "create_dd:infernal_mechanism"
            }
          ]
        },
        "ingredients": [
          {
            "item": "mekanism:teleportation_core"
          },
          {
            "item": "bigger_ae2:digital_singularity_cell_component"
          },
          {
            "item": "draconicevolution:chaotic_core"
          },
          {
            "item": "rainbowcompound:netherstar_ingot"
          },
          {
            "item": "createutilities:void_casing"
          }
        ],
        "result": {
          "count": 6,
          "item": "create_dd:abstruse_mechanism"
        },
        "tier": "CHAOTIC",
        "total_energy": 100000000
      }).id('createofb:draconicevolution/mechanism/abstruse');


})