ServerEvents.recipes(event => {



    event.custom({
        "type": "mekanism:reaction",
        "duration": 100,
        "fluidInput": {
          "amount": 10,
          "fluid": "minecraft:water"
        },
        "gasInput": {
          "amount": 100,
          "gas": "mekanism:hydrogen"
        },
        "itemInput": {
          "amount": 2,
          "ingredient": {
            "tag": "forge:fuels/bio"
          }
        },
        "itemOutput": {
          "item": "mekanism:substrate"
        }
      });


})