ServerEvents.recipes(event => {

  event.remove({output: 'ae2:controller'})
  event.custom(
        {
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "item": "ae2:fluix_crystal"
    },
    {
      "item": "ae2:fluix_crystal"
    },
    {
      "item": "ae2:engineering_processor"
    },
    {
      "item": "ae2:smooth_sky_stone_block"
    },
    {
      "item": "ae2:smooth_sky_stone_block"
    },
    {
      "item": "create_dd:sealed_mechanism"
    },
    {
      "item": "mekanism:elite_energy_cube"
    },
    {
      "item": "mekanism:elite_energy_cube"
    }
  ],
  "inputFluid": "{Amount:1000,FluidName:\"tfmg:liquid_plastic\"}",
  "output": {
    "count": 1,
    "item": "ae2:controller"
  },
  "processingTime": 500
    });

})
