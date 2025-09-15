ServerEvents.recipes(event => {

    //compat slag
    event.remove({output: 'tfmg:mixing/slag'});
    event.recipes.create.mixing(
        '5x immersiveengineering:slag', Fluid.of('tfmg:molten_slag',1000)
    ).id('createofb:tfmg/compat/slag');

    //compat coke
    event.remove({output: 'thermal:coal_coke'});
    event.remove({id: 'immersiveengineering:cokeoven/coke_block'});
    event.remove({id: 'thermal:machine/pyrolyzer/pyrolyzer_coal'});

    //compat charcoal
    event.remove({id: 'immersiveengineering:cokeoven/charcoal'});
    event.remove({id: 'thermal:machines/pyrolyzer/pyrolyzer_logs'});
    event.recipes.tfmg.coking(
        "#minecraft:logs", 
        [
            "minecraft:charcoal", 
            Fluid.of("tfmg:creosote", 1)
        ], 200
    ).id('createofb:tfmg/compat/charcoal');


})