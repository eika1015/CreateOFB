ServerEvents.recipes(event => {
    
    event.remove({
        output: '#forge:gears',
        type: 'minecraft:crafting_shaped'
    });

    event.remove({output: 'createmetallurgy:coke'});
    event.remove({output: 'immersiveengineering:coal_coke'});
    event.remove({id: 'immersiveengineering:blastfurnace/steel'});
    event.remove({id: 'immersiveengineering:blastfurnace/steel_block'});
  
    })