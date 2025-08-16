ServerEvents.recipes(event => {
    const { tconstruct } = event.recipes;

    //compat plastic recipes
    event.remove({output: 'industrialforegoing:plastic'});
    event.remove({output: 'tfmg:plastic_sheet'});
    event.remove({output: 'industrialforegoing:dryrubber'});
    event.remove({output: 'industrialforegoing:latex_processing_unit'});
    event.remove({id: 'tfmg:mixing/liquid_plastic_from_ethylene'});
    event.remove({id: 'tfmg:mixing/liquid_plastic_from_propylene'});

    //硫酸エチル
    event.custom(
        {
            "type": "mekanism:chemical_infusing",
            "leftInput": {
              "amount": 1,
              "gas": "mekanism:ethene"
            },
            "output": {
              "amount": 1,
              "gas": "kubejs:ethyl_sulfate"
            },
            "rightInput": {
              "amount": 1,
              "gas": "mekanism:sulfuric_acid"
            }
          }
    ).id('craeteofb:compat/plastic/ethyl_sulfate');

    //エタノール
    event.custom(
        {
            "type": "mekanism:chemical_infusing",
            "leftInput": {
              "amount": 1,
              "gas": "mekanism:steam"
            },
            "output": {
              "amount": 1,
              "gas": "kubejs:ethanol"
            },
            "rightInput": {
              "amount": 1,
              "gas": "kubejs:ethyl_sulfate"
            }
          }
    ).id('craeteofb:compat/plastic/ethanol');

    //臭化エチル
    event.custom({
        "type": "mekanism:reaction",
        "duration": 100,
        "fluidInput": {
          "amount": 100,
          "fluid": "kubejs:ethanol"
        },
        "gasInput": {
          "amount": 100,
          "gas": "kubejs:bromine"
        },
        "gasOutput": {
          "amount": 50,
          "gas": "kubejs:bromoethane"
        },
        "itemInput": {
          "ingredient": {
            "item": "createbb:white_phosphorus"
          }
        }
    }).id('craeteofb:compat/plastic/bromoethane');

    //ヨウ素
    event.custom({
        "type": "mekanism:oxidizing",
        "input": {
          "ingredient": {
            "item": "minecraft:dried_kelp"
          }
        },
        "output": {
          "amount": 10,
          "gas": "kubejs:iodine"
        }
      }).id('craeteofb:compat/plastic/iodine');

    //臭素
    event.custom({
        "type": "mekanism:oxidizing",
        "input": {
          "ingredient": {
            "item": "minecraft:podzol"
          }
        },
        "output": {
          "amount": 10,
          "gas": "kubejs:bromine"
        }
      }).id('craeteofb:compat/plastic/bromine');

    //ヨウ化エチル
    event.custom({
        "type": "mekanism:reaction",
        "duration": 100,
        "fluidInput": {
          "amount": 100,
          "fluid": "kubejs:ethanol"
        },
        "gasInput": {
          "amount": 100,
          "gas": "kubejs:iodine"
        },
        "gasOutput": {
          "amount": 50,
          "gas": "kubejs:ethyl_odide"
        },
        "itemInput": {
          "ingredient": {
            "item": "createbb:red_phosphorus"
          }
        }
    }).id('craeteofb:compat/plastic/ethyl_odide');

    //ジエチル亜鉛
    event.custom({
        "type": "mekanism:reaction",
        "duration": 100,
        "fluidInput": {
          "amount": 100,
          "fluid": "kubejs:ethyl_odide"
        },
        "gasInput": {
          "amount": 100,
          "gas": "kubejs:bromoethane"
        },
        "gasOutput": {
          "amount": 50,
          "gas": "kubejs:diethylzinc"
        },
        "itemInput": {
          "ingredient": {
            "item": "create:brass_ingot"
          }
        }
    }).id('craeteofb:compat/plastic/diethylzinc');

    //トリエチルアルミニウム
    event.custom({
        "type": "mekanism:reaction",
        "duration": 100,
        "fluidInput": {
          "amount": 100,
          "fluid": "mekanism:hydrogen"
        },
        "gasInput": {
          "amount": 100,
          "gas": "kubejs:diethylzinc"
        },
        "gasOutput": {
          "amount": 50,
          "gas": "kubejs:triethylaluminium"
        },
        "itemInput": {
          "ingredient": {
            "tag": "forge:ingots/aluminum"
          }
        }
    }).id('craeteofb:compat/plastic/triethylaluminium');

    //四酸化オスミウム
    event.custom(
      {
        "type": "createmetallurgy:alloying",
        "heatRequirement": "superheated",
        "ingredients": [
          {
            "item": "tfmg:coal_coke"
          },
          {
            "item": "mekanism:ingot_osmium"
          },
          {
            "amount": 100,
            "fluid": "mekanism:chlorine",
            "nbt": {}
          },
        ],
        "processingTime": 40,
        "results": [
          {
            "amount": 50,
            "fluid": "kubejs:osmium_tetrachloride",
            "nbt": {}
          }
        ]
    }).id('craeteofb:compat/plastic/osmium_tetrachloride');

    //液体プラスチック
    event.custom(
        {
          "type": "createmetallurgy:alloying",
          "heatRequirement": "superheated",
          "ingredients": [
            {
                "amount": 100,
                "fluid": "kubejs:osmium_tetrachloride",
                "nbt": {}
            },
            {
                "amount": 100,
                "fluid": "kubejs:triethylaluminium",
                "nbt": {}
            },
            {
                "amount": 100,
                "fluid": "tfmg:propylene",
                "nbt": {}
            }
          ],
          "processingTime": 40,
          "results": [
            {
              "amount": 100,
              "fluid": "tfmg:liquid_plastic",
              "nbt": {}
            }
          ]
      }).id('craeteofb:compat/plastic/liquid_plastic');

    tconstruct
    .casting_table("industrialforegoing:plastic", 
        Fluid.of("tfmg:liquid_plastic", 250), 
        "tconstruct:ingot_cast")
    .cooling_time(200)
    .switch_slots(true).id('craeteofb:compat/plastic/plastic');

})