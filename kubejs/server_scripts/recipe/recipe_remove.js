ServerEvents.recipes(event => {
    
    event.remove({
        output: 'create:andesite_alloy'
    });

    event.remove({
        output: 'create:large_cogwheel',
        type: 'minecraft:crafting_shapeless'
    });

    event.remove({
        output: 'create:cogwheel',
        type: 'minecraft:crafting_shapeless'
    });

    event.remove({
        output: 'minecraft:ender_eye',
        type: 'minecraft:crafting_shapeless'
    });


  })