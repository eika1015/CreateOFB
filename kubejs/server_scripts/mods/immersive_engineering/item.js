ServerEvents.recipes(event => {
    
    //immersive engineering item adding recipe
    //grars remove
    event.remove({
        output: '#forge:gears',
        type: 'minecraft:crafting_shaped'
    });

    event.remove({output: 'createmetallurgy:coke'});
    event.remove({output: 'immersiveengineering:coal_coke'});
  
    })