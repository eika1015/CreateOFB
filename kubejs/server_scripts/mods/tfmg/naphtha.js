ServerEvents.recipes(event => {

    event.remove({id: 'tfmg:distillation/naphtha'});

    event.recipes.tfmg.distillation(
        Fluid.of("tfmg:naphtha", 100), 
        [Fluid.of("mekanism:ethene", 20), Fluid.of("tfmg:propylene", 60)]
    ).id('createofb:compat/ethylene/distillation');

  })