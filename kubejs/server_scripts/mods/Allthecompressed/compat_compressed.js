ServerEvents.recipes(event => {

    let material = 'minecraft:cobblestone'
    //compressed cobblestone 1
    event.remove({output: 'allthecompressed:cobblestone_1x'});
    event.recipes.create.sequenced_assembly([
      Item.of('allthecompressed:cobblestone_1x').withChance(100.0)
    ], material, [ 
      event.recipes.createDeploying(material, [material, 'minecraft:cobblestone']),
      event.recipes.createPressing(material, material)
    ]).transitionalItem(material).loops(8).id('createofb:allthecompressed/cobblestone/1x');

    material = 'allthecompressed:cobblestone_1x'
    //compressed cobblestone 2
    event.remove({output: 'allthecompressed:cobblestone_2x'});
    event.recipes.create.sequenced_assembly([
      Item.of('allthecompressed:cobblestone_2x').withChance(100.0)
    ], material, [ 
      event.recipes.createDeploying(material, [material, material]),
      event.recipes.createPressing(material, material)
    ]).transitionalItem(material).loops(8).id('createofb:allthecompressed/cobblestone/2x');

    material = 'allthecompressed:cobblestone_2x'
    //compressed cobblestone 3
    event.remove({output: 'allthecompressed:cobblestone_3x'});
    event.recipes.create.sequenced_assembly([
      Item.of('allthecompressed:cobblestone_3x').withChance(100.0)
    ], material, [ 
      event.recipes.createDeploying(material, [material, material]),
      event.recipes.createPressing(material, material)
    ]).transitionalItem(material).loops(8).id('createofb:allthecompressed/cobblestone/3x');

    material = 'allthecompressed:cobblestone_3x'
    //compressed cobblestone 4
    event.remove({output: 'allthecompressed:cobblestone_4x'});
    event.recipes.create.sequenced_assembly([
      Item.of('allthecompressed:cobblestone_4x').withChance(100.0)
    ], material, [ 
      event.recipes.createDeploying(material, [material, material]),
      event.recipes.createPressing(material, material)
    ]).transitionalItem(material).loops(8).id('createofb:allthecompressed/cobblestone/4x');

    material = 'allthecompressed:cobblestone_4x'
    //compressed cobblestone 5
    event.remove({output: 'allthecompressed:cobblestone_5x'});
    event.recipes.create.sequenced_assembly([
      Item.of('allthecompressed:cobblestone_5x').withChance(100.0)
    ], material, [ 
      event.recipes.createDeploying(material, [material, material]),
      event.recipes.createPressing(material, material)
    ]).transitionalItem(material).loops(8).id('createofb:allthecompressed/cobblestone/5x');

    material = 'allthecompressed:cobblestone_5x'
    //compressed cobblestone 6
    event.remove({output: 'allthecompressed:cobblestone_6x'});
    event.recipes.create.sequenced_assembly([
      Item.of('allthecompressed:cobblestone_6x').withChance(100.0)
    ], material, [ 
      event.recipes.createDeploying(material, [material, material]),
      event.recipes.createPressing(material, material)
    ]).transitionalItem(material).loops(8).id('createofb:allthecompressed/cobblestone/6x');

    material = 'allthecompressed:cobblestone_6x'
    //compressed cobblestone 7
    event.remove({output: 'allthecompressed:cobblestone_7x'});
    event.recipes.create.sequenced_assembly([
      Item.of('allthecompressed:cobblestone_7x').withChance(100.0)
    ], material, [ 
      event.recipes.createDeploying(material, [material, material]),
      event.recipes.createPressing(material, material)
    ]).transitionalItem(material).loops(8).id('createofb:allthecompressed/cobblestone/7x');

    material = 'allthecompressed:cobblestone_7x'
    //compressed cobblestone 8
    event.remove({output: 'allthecompressed:cobblestone_8x'});
    event.recipes.create.sequenced_assembly([
      Item.of('allthecompressed:cobblestone_8x').withChance(100.0)
    ], material, [ 
      event.recipes.createDeploying(material, [material, material]),
      event.recipes.createPressing(material, material)
    ]).transitionalItem(material).loops(8).id('createofb:allthecompressed/cobblestone/8x');

    material = 'allthecompressed:cobblestone_8x'
    //compressed cobblestone 9
    event.remove({output: 'allthecompressed:cobblestone_9x'});
    event.recipes.create.sequenced_assembly([
      Item.of('allthecompressed:cobblestone_9x').withChance(100.0)
    ], material, [ 
      event.recipes.createDeploying(material, [material, material]),
      event.recipes.createPressing(material, material)
    ]).transitionalItem(material).loops(8).id('createofb:allthecompressed/cobblestone/9x');

})