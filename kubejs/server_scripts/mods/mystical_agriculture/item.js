ServerEvents.recipes(event => {

    event.custom({
        type: "mysticalagriculture:awakening",
        transfer_nbt: true,
        essences: [
          {
            item: "mysticalagriculture:air_essence",
            count: 40
          },
          {
            item: "mysticalagriculture:earth_essence",
            count: 40
          },
          {
            item: "mysticalagriculture:water_essence",
            count: 40
          },
          {
            item: "mysticalagriculture:fire_essence",
            count: 40
          }
        ],
        input: {
          item: "mysticalagriculture:supremium_block"
        },
        ingredients: [
          {
            item: "mysticalagriculture:cognizant_dust"
          },
          {
            item: "mysticalagriculture:cognizant_dust"
          },
          {
            item: "mysticalagriculture:cognizant_dust"
          },
          {
            item: "mysticalagriculture:cognizant_dust"
          }
        ],
        result: {
          item: "mysticalagriculture:awakened_supremium_block"
        }
    }).id('createofb:mysticalagriculture/awakened/supremium_block');

    let base = 'mysticalagriculture:machine_frame' 

    //event.remove({output: 'mysticalagriculture:infusion_pedestal'});
    //event.recipes.create.sequenced_assembly([
    //  Item.of('mysticalagriculture:infusion_pedestal').withChance(100.0)
    //], base, [ 
    //  event.recipes.createDeploying(base, [base, '']),
    //  event.recipes.createDeploying(base, [base, 'create_dd:infernal_mechanism']),
    //  event.recipes.createDeploying(base, [base, 'mekanism:basic_chemical_tank']),
    //  event.recipes.createDeploying(base, [base, 'create:mechanical_mixer']),
    //  event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)]),
    //  event.recipes.createDeploying(base, [base, 'create:andesite_casing'])
    //]).transitionalItem(base).loops(2).id('createofb:mysticalagriculture/item/infusion_pedestal');



})