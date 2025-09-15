ServerEvents.recipes(event => {

    event.remove({output: 'mekanismgenerators:gas_burning_generator'});
    event.recipes.create.sequenced_assembly([
      Item.of('mekanismgenerators:gas_burning_generator').withChance(100.0)
    ], 'mekanismgenerators:heat_generator', [ 
      event.recipes.createDeploying('mekanismgenerators:heat_generator', ['mekanismgenerators:heat_generator', 'mekanism:ultimate_energy_cube']),
      event.recipes.createDeploying('mekanismgenerators:heat_generator', ['mekanismgenerators:heat_generator', 'create_dd:abstruse_mechanism']),
      event.recipes.createDeploying('mekanismgenerators:heat_generator', ['mekanismgenerators:heat_generator', 'create:creative_blaze_cake']),
      event.recipes.createDeploying('mekanismgenerators:heat_generator', ['mekanismgenerators:heat_generator', 'mekanismgenerators:turbine_blade']),
      event.recipes.createFilling('mekanismgenerators:heat_generator', ['mekanismgenerators:heat_generator', Fluid.of('mekanism:ethene', 1000)]),
      event.recipes.createFilling('mekanismgenerators:heat_generator', ['mekanismgenerators:heat_generator', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('mekanismgenerators:heat_generator', ['mekanismgenerators:heat_generator', 'mekanism:ultimate_energy_cube'])
    ]).transitionalItem('mekanismgenerators:heat_generator').loops(5).id('createofb:mekanism/generators/gas');

    //heat generator
    event.remove({output: 'mekanismgenerators:heat_generator'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "enderio:basic_capacitor_bank"},
        loops: 2,
        results: [{count: 1,item: "mekanismgenerators:heat_generator"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "enderio:basic_capacitor_bank"},
              [{item: "tfmg:electric_motor"}]
            ],
            results: [
              {item: "enderio:basic_capacitor_bank"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "enderio:basic_capacitor_bank"},
              [{item: "create_dd:calculation_mechanism"}]
            ],
            results: [
              {item: "enderio:basic_capacitor_bank"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "enderio:basic_capacitor_bank"},
              [{item: "createaddition:tesla_coil"}]
            ],
            results: [
              {item: "enderio:basic_capacitor_bank"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "enderio:basic_capacitor_bank"},
              [{item: "tfmg:diesel_engine"}]
            ],
            results: [
              {item: "enderio:basic_capacitor_bank"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "enderio:basic_capacitor_bank"},
              {
                amount: 500,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "enderio:basic_capacitor_bank"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "enderio:basic_capacitor_bank"}
            ],
            results: [
              {item: "enderio:basic_capacitor_bank"}
            ]
          },
        ],
        transitionalItem: {
          item: "enderio:basic_capacitor_bank"
        }
      }
    ).id('createofb:mekanism/generators/heat');

    //solar generator
    event.remove({output: 'mekanismgenerators:solar_generator'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanismgenerators:solar_panel"},
        loops: 2,
        results: [{count: 1,item: "mekanismgenerators:solar_generator"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:solar_panel"},
              [{item: "mekanismgenerators:solar_panel"}]
            ],
            results: [
              {item: "mekanismgenerators:solar_panel"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:solar_panel"},
              [{item: "create_dd:calculation_mechanism"}]
            ],
            results: [
              {item: "mekanismgenerators:solar_panel"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:solar_panel"},
              [{item: "mekanismgenerators:turbine_casing"}]
            ],
            results: [
              {item: "mekanismgenerators:solar_panel"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:solar_panel"},
              [{item: "tfmg:diesel_engine"}]
            ],
            results: [
              {item: "mekanismgenerators:solar_panel"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanismgenerators:solar_panel"},
              {
                amount: 500,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanismgenerators:solar_panel"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "mekanismgenerators:solar_panel"}
            ],
            results: [
              {item: "mekanismgenerators:solar_panel"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanismgenerators:solar_panel"
        }
      }
    ).id('createofb:mekanism/generators/solar');

    //solar generator
    event.remove({output: 'mekanismgenerators:advanced_solar_generator'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanismgenerators:solar_generator"},
        loops: 2,
        results: [{count: 1,item: "mekanismgenerators:advanced_solar_generator"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:solar_generator"},
              [{item: "crystal_clear:brass_clear_glass_casing"}]
            ],
            results: [
              {item: "mekanismgenerators:solar_generator"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:solar_generator"},
              [{item: "create_dd:infernal_mechanism"}]
            ],
            results: [
              {item: "mekanismgenerators:solar_generator"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:solar_generator"},
              [{item: "mekanismgenerators:turbine_casing"}]
            ],
            results: [
              {item: "mekanismgenerators:solar_generator"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:solar_generator"},
              [{item: "mekanismgenerators:solar_generator"}]
            ],
            results: [
              {item: "mekanismgenerators:solar_generator"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanismgenerators:solar_generator"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanismgenerators:solar_generator"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 100000,
            ingredients: [
              {item: "mekanismgenerators:solar_generator"}
            ],
            results: [
              {item: "mekanismgenerators:solar_generator"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanismgenerators:solar_generator"
        }
      }
    ).id('createofb:mekanism/generators/advanced_solar');

    //wind generator
    event.remove({output: 'mekanismgenerators:wind_generator'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanismgenerators:turbine_casing"},
        loops: 2,
        results: [{count: 1,item: "mekanismgenerators:wind_generator"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:turbine_casing"},
              [{item: "create:gearbox"}]
            ],
            results: [
              {item: "mekanismgenerators:turbine_casing"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:turbine_casing"},
              [{item: "create_dd:calculation_mechanism"}]
            ],
            results: [
              {item: "mekanismgenerators:turbine_casing"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:turbine_casing"},
              [{item: "mekanismgenerators:turbine_blade"}]
            ],
            results: [
              {item: "mekanismgenerators:turbine_casing"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:turbine_casing"},
              [{item: "tfmg:large_steel_cogwheel"}]
            ],
            results: [
              {item: "mekanismgenerators:turbine_casing"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanismgenerators:turbine_casing"},
              {
                amount: 1000,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanismgenerators:turbine_casing"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 100000,
            ingredients: [
              {item: "mekanismgenerators:turbine_casing"}
            ],
            results: [
              {item: "mekanismgenerators:turbine_casing"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanismgenerators:turbine_casing"
        }
      }
    ).id('createofb:mekanism/generators/wind');

    //wind generator
    event.remove({output: 'mekanismgenerators:bio_generator'});
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {item: "mekanismgenerators:turbine_casing"},
        loops: 2,
        results: [{count: 1,item: "mekanismgenerators:bio_generator"}],
        sequence: [
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:turbine_casing"},
              [{item: "create:gearbox"}]
            ],
            results: [
              {item: "mekanismgenerators:turbine_casing"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:turbine_casing"},
              [{item: "create_dd:calculation_mechanism"}]
            ],
            results: [
              {item: "mekanismgenerators:turbine_casing"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:turbine_casing"},
              [{item: "mekanism:bio_fuel"}]
            ],
            results: [
              {item: "mekanismgenerators:turbine_casing"}
            ]
          },
          {
            type: "create:deploying",
            ingredients: [
              {item: "mekanismgenerators:turbine_casing"},
              [{item: "tfmg:diesel_engine"}]
            ],
            results: [
              {item: "mekanismgenerators:turbine_casing"}
            ]
          },
          {
            type: "create:filling",
            ingredients: [
              {item: "mekanismgenerators:turbine_casing"},
              {
                amount: 500,
                fluid: "tfmg:lubrication_oil",
                nbt: {}
              }
            ],
            results: [
              {item: "mekanismgenerators:turbine_casing"}
            ]
          },
          {
            type: "create_new_age:energising",
            energy_needed: 10000,
            ingredients: [
              {item: "mekanismgenerators:turbine_casing"}
            ],
            results: [
              {item: "mekanismgenerators:turbine_casing"}
            ]
          },
        ],
        transitionalItem: {
          item: "mekanismgenerators:turbine_casing"
        }
      }
    ).id('createofb:mekanism/generators/bio');

})