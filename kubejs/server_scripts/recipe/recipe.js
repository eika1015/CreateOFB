ServerEvents.recipes(event => {

    let casing = 'minecraft:cobblestone'
    //piston
    event.remove({output: 'minecraft:piston'});
    event.recipes.create.sequenced_assembly([
      Item.of('minecraft:piston').withChance(100.0)
    ], casing, [ 
      event.recipes.createDeploying(casing, [casing, '#minecraft:logs']),
      event.recipes.createDeploying(casing, [casing, 'create:polished_rose_quartz']),
      event.recipes.createDeploying(casing, [casing, 'create:andesite_alloy']),
      event.recipes.createDeploying(casing, [casing, 'create:shaft']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:lubrication_oil', 180)]),
      event.recipes.createDeploying(casing, [casing, '#minecraft:cobblestone'])
    ]).transitionalItem(casing).loops(1).id('createofb:minecraft/item/piston');

    //crying_obsidian
    casing = 'minecraft:obsidian'
    event.remove({output: 'minecraft:crying_obsidian'});
    event.recipes.create.sequenced_assembly([
      Item.of('minecraft:crying_obsidian').withChance(100.0)
    ], casing, [ 
      event.recipes.createPressing(casing, casing),
      event.recipes.createPressing(casing, casing),
      event.recipes.createPressing(casing, casing),
      event.recipes.createPressing(casing, casing),
      event.recipes.createPressing(casing, casing),
      event.recipes.createPressing(casing, casing),
      event.recipes.createPressing(casing, casing),
      event.recipes.createPressing(casing, casing)
    ]).transitionalItem(casing).loops(4).id('createofb:minecraft/item/crying_obsidian');

})