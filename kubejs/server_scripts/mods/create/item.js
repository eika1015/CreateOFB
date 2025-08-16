ServerEvents.recipes(event => {

	//adding recipe incomplete precision mechanism
	event.recipes.create.sequenced_assembly([
		Item.of('create:precision_mechanism').withChance(100.0)
	], 'create:golden_sheet', [ 
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'mekanism:basic_control_circuit']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'ae2:logic_processor']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'enderio:copper_alloy_ingot']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:gears/gold'])
	]).transitionalItem('create:incomplete_precision_mechanism').loops(2);

	event.recipes.tconstruct
	.casting_table("create:andesite_alloy", 
        Fluid.of("createmetalwork:molten_andesite_alloy", 90), 
        "tconstruct:ingot_cast")
    .cooling_time(60);

    //advanced mechanism
	event.recipes.create.sequenced_assembly([
		Item.of('create_dd:integrated_mechanism').withChance(100.0)
	], 'create:precision_mechanism', [ 
		event.recipes.createDeploying('create_dd:integrated_mechanism', ['create_dd:integrated_mechanism', 'mekanism:advanced_control_circuit']),
        event.recipes.createDeploying('create_dd:integrated_mechanism', ['create_dd:integrated_mechanism', 'ae2:calculation_processor']),
        event.recipes.createDeploying('create_dd:integrated_mechanism', ['create_dd:integrated_mechanism', 'enderio:energetic_alloy_ingot']),
        event.recipes.createDeploying('create_dd:integrated_mechanism', ['create_dd:integrated_mechanism', 'create:electron_tube']),
        event.recipes.createDeploying('create_dd:integrated_mechanism', ['create_dd:integrated_mechanism', 'rainbowcompound:lapis_sheet'])
	]).transitionalItem('create_dd:integrated_mechanism').loops(2);

    //elite mechanism
    event.recipes.create.sequenced_assembly([
		Item.of('create_dd:calculation_mechanism').withChance(100.0)
	], 'create_dd:integrated_mechanism', [ 
		event.recipes.createDeploying('create_dd:calculation_mechanism', ['create_dd:calculation_mechanism', 'mekanism:elite_control_circuit']),
        event.recipes.createDeploying('create_dd:calculation_mechanism', ['create_dd:calculation_mechanism', 'ae2:engineering_processor']),
        event.recipes.createDeploying('create_dd:calculation_mechanism', ['create_dd:calculation_mechanism', 'enderio:vibrant_alloy_ingot']),
        event.recipes.createDeploying('create_dd:calculation_mechanism', ['create_dd:calculation_mechanism', '#forge:gears/enderium']),
        event.recipes.createDeploying('create_dd:calculation_mechanism', ['create_dd:calculation_mechanism', '#forge:plates/steel']),
        event.recipes.createFilling('create_dd:calculation_mechanism', ['create_dd:calculation_mechanism', Fluid.of('tfmg:lubrication_oil', 1000)])
	]).transitionalItem('create_dd:calculation_mechanism').loops(2);

    //atomic mechanism
    event.recipes.create.sequenced_assembly([
		Item.of('create_dd:infernal_mechanism').withChance(100.0)
	], 'create_dd:calculation_mechanism', [ 
		event.recipes.createDeploying('create_dd:infernal_mechanism', ['create_dd:infernal_mechanism', 'mekanism:ultimate_control_circuit']),
        event.recipes.createDeploying('create_dd:infernal_mechanism', ['create_dd:infernal_mechanism', 'ae2:engineering_processor']),
        event.recipes.createDeploying('create_dd:infernal_mechanism', ['create_dd:infernal_mechanism', 'enderio:end_steel_ingot']),
        event.recipes.createFilling('create_dd:infernal_mechanism', ['create_dd:infernal_mechanism', Fluid.of('create_deep_dark:molten_echo', 1000)]),
        event.recipes.createDeploying('create_dd:infernal_mechanism', ['create_dd:infernal_mechanism', '#forge:plates/netherite']),
        event.recipes.createDeploying('create_dd:infernal_mechanism', ['create_dd:infernal_mechanism', 'industrialforegoing:pink_slime_ingot']),
        event.recipes.createFilling('create_dd:infernal_mechanism', ['create_dd:infernal_mechanism', Fluid.of('tfmg:lubrication_oil', 1000)]),
	]).transitionalItem('create_dd:infernal_mechanism').loops(2);

    //ultimate mechanism
    event.recipes.create.sequenced_assembly([
		Item.of('create_dd:sealed_mechanism').withChance(100.0)
	], 'create_dd:infernal_mechanism', [ 
		event.recipes.createDeploying('create_dd:sealed_mechanism', ['create_dd:sealed_mechanism', 'minecraft:totem_of_undying']),
        event.recipes.createDeploying('create_dd:sealed_mechanism', ['create_dd:sealed_mechanism', 'ae2:engineering_processor']),
        event.recipes.createDeploying('create_dd:sealed_mechanism', ['create_dd:sealed_mechanism', 'draconicevolution:awakened_draconium_ingot']),
        event.recipes.createFilling('create_dd:sealed_mechanism', ['create_dd:sealed_mechanism', Fluid.of('tfmg:molten_slag', 1000)]),
        event.recipes.createDeploying('create_dd:sealed_mechanism', ['create_dd:sealed_mechanism', 'minecraft:nether_star']),
        event.recipes.createDeploying('create_dd:sealed_mechanism', ['create_dd:sealed_mechanism', 'rainbowcompound:rainbow_compound']),
        event.recipes.createFilling('create_dd:sealed_mechanism', ['create_dd:sealed_mechanism', Fluid.of('tfmg:lubrication_oil', 1000)]),
	]).transitionalItem('create_dd:sealed_mechanism').loops(2);

    //unknown mechanism
    event.recipes.create.sequenced_assembly([
		Item.of('create_dd:abstruse_mechanism').withChance(100.0)
	], 'create_dd:sealed_mechanism', [ 
		event.recipes.createDeploying('create_dd:abstruse_mechanism', ['create_dd:abstruse_mechanism', 'mekanism:teleportation_core']),
        event.recipes.createDeploying('create_dd:abstruse_mechanism', ['create_dd:abstruse_mechanism', 'bigger_ae2:digital_singularity_cell_component']),
        event.recipes.createDeploying('create_dd:abstruse_mechanism', ['create_dd:abstruse_mechanism', 'draconicevolution:chaotic_core']),
        event.recipes.createFilling('create_dd:abstruse_mechanism', ['create_dd:abstruse_mechanism', Fluid.of('createmetallurgy:molten_void_steel', 1000)]),
        event.recipes.createDeploying('create_dd:abstruse_mechanism', ['create_dd:abstruse_mechanism', 'rainbowcompound:netherstar_ingot']),
        event.recipes.createDeploying('create_dd:abstruse_mechanism', ['create_dd:abstruse_mechanism', 'createutilities:void_casing']),
        event.recipes.createFilling('create_dd:abstruse_mechanism', ['create_dd:abstruse_mechanism', Fluid.of('tfmg:lubrication_oil', 1000)]),
	]).transitionalItem('create_dd:abstruse_mechanism').loops(2);

    event.remove({output: 'create:rose_quartz'})
    event.custom(
        {
            type: 'mekanism:metallurgic_infusing',
            chemicalInput: {
              amount: 360,
              tag: 'mekanism:redstone'
            },
            itemInput: {
              ingredient: {
                item: 'minecraft:quartz_block'
              }
            },
            output: {
              item: 'create:rose_quartz',
              count: 3
            }
          }
    );

})