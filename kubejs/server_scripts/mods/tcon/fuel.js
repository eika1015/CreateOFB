ServerEvents.recipes(event => {

    event.custom(
    {
        type: "tconstruct:melting_fuel",
        conditions: [
          {
            type: "forge:or",
            values: [
              {
                type: "tconstruct:config",
                prop: "force_integration_materials"
              },
              {
                type: "forge:mod_loaded",
                modid: "tfmg"
              }
            ]
          }
        ],
        duration: 1000,
        fluid: {
          amount: 10,
          fluid: "tfmg:gasoline"
        },
        rate: 50,
        temperature: 2000
      });

      event.custom(
        {
            type: "tconstruct:melting_fuel",
            conditions: [
              {
                type: "forge:or",
                values: [
                  {
                    type: "tconstruct:config",
                    prop: "force_integration_materials"
                  },
                  {
                    type: "forge:mod_loaded",
                    modid: "tfmg"
                  }
                ]
              }
            ],
            duration: 1000,
            fluid: {
              amount: 10,
              fluid: "tfmg:molten_slag"
            },
            rate: 100,
            temperature: 800
          });

  })