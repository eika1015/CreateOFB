ServerEvents.recipes(event => {

    event.remove({
        type: 'mekanism:reaction'
    });

    event.custom({
        "type": "mekanism:reaction",
        "duration": 100,
        "fluidInput": {
          "amount": 1000,
          "fluid": "minecraft:water"
        },
        "gasInput": {
          "amount": 1000,
          "gas": "mekanism:plutonium"
        },
        "gasOutput": {
          "amount": 1000,
          "gas": "mekanism:spent_nuclear_waste"
        },
        "itemInput": {
          "ingredient": {
            "tag": "forge:dusts/fluorite"
          }
        },
        "itemOutput": {
          "item": "mekanism:pellet_plutonium"
        }
      });

      event.custom({
            "type": "mekanism:reaction",
            "duration": 100,
            "fluidInput": {
              "amount": 1000,
              "fluid": "minecraft:water"
            },
            "gasInput": {
              "amount": 1000,
              "gas": "mekanism:polonium"
            },
            "gasOutput": {
              "amount": 1000,
              "gas": "mekanism:spent_nuclear_waste"
            },
            "itemInput": {
              "ingredient": {
                "tag": "forge:dusts/fluorite"
              }
            },
            "itemOutput": {
              "item": "mekanism:pellet_polonium"
            }
        });

    event.custom({
            "type": "mekanism:reaction",
            "duration": 60,
            "energyRequired": 1000,
            "fluidInput": {
              "amount": 50,
              "fluid": "mekanism:ethene"
            },
            "gasInput": {
              "amount": 10,
              "gas": "mekanism:oxygen"
            },
            "itemInput": {
              "ingredient": {
                "item": "mekanism:substrate"
              }
            },
            "itemOutput": {
              "item": "mekanism:hdpe_pellet"
            }
          })
})