ServerEvents.recipes(event => {

    event.remove({output: 'rftoolsbase:dimensionalshard'});
    event.recipes.createMixing('rftoolsbase:dimensionalshard', [
        'minecraft:diamond',
        'minecraft:emerald',
        'minecraft:gold_ingot',
        'minecraft:iron_ingot',
        'minecraft:redstone',
        'minecraft:glowstone_dust',
        'minecraft:quartz',
        'minecraft:prismarine_shard',
        Fluid.of('create_enchantment_industry:hyper_experience', 100)
  ]).heated().id('createofb:rftools/item/simensionalshard');

})