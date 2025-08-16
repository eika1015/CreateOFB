ServerEvents.recipes(event => {

    event.remove({
        output: 'mekanism:basic_control_circuit'
    });


    event.custom(
        {
            type: 'mekanism:metallurgic_infusing',
            chemicalInput: {
              amount: 90,
              tag: 'mekanism:redstone'
            },
            itemInput: {
              ingredient: {
                item: 'create:andesite_alloy'
              }
            },
            output: {
              item: 'mekanism:basic_control_circuit'
            }
          }
    );


    event.remove({
      output: 'mekanism:alloy_infused'
  });


  event.custom(
      {
          type: 'mekanism:metallurgic_infusing',
          chemicalInput: {
            amount: 180,
            tag: 'mekanism:redstone'
          },
          itemInput: {
            ingredient: {
              item: 'create:brass_ingot'
            }
          },
          output: {
            item: 'mekanism:alloy_infused'
          }
        }
  );

  event.remove({
    output: 'mekanism:alloy_reinforced'
});

  event.custom(
    {
        type: 'mekanism:metallurgic_infusing',
        chemicalInput: {
          amount: 90,
          tag: 'mekanism:diamond'
        },
        itemInput: {
          ingredient: {
            item: 'mekanism:alloy_infused'
          }
        },
        output: {
          item: 'mekanism:alloy_reinforced'
        }
      }
);

event.remove({
  output: 'mekanism:alloy_atomic'
});

event.custom(
  {
      type: 'mekanism:metallurgic_infusing',
      chemicalInput: {
        amount: 90,
        tag: 'mekanism:refined_obsidian'
      },
      itemInput: {
        ingredient: {
          item: 'mekanism:alloy_reinforced'
        }
      },
      output: {
        item: 'mekanism:alloy_atomic'
      }
    }
);
    
 
  })