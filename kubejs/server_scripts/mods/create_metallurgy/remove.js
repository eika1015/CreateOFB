ServerEvents.recipes((event) => {

    event.remove({type: "createmetallurgy:casting_in_table"});
    event.remove({type: "createmetallurgy:casting_in_basin"});
    event.remove({output: Fluid.of("createmetallurgy:molten_iron")});
    event.remove({output: Fluid.of("createmetallurgy:molten_gold")});
    event.remove({output: Fluid.of("createmetallurgy:molten_copper")});
    event.remove({output: Fluid.of("createmetallurgy:molten_zinc")});
    event.remove({output: Fluid.of("createmetallurgy:molten_brass")});
    event.remove({output: Fluid.of("createmetallurgy:molten_tungsten")});
    event.remove({output: Fluid.of("createmetallurgy:molten_steel")});
    event.remove({output: Fluid.of("createmetallurgy:molten_netherite")});
    event.remove({output: Fluid.of("createmetallurgy:molten_aluminum")});
    event.remove({output: Fluid.of("createmetallurgy:molten_lead")});
    event.remove({output: Fluid.of("createmetallurgy:molten_nickel")});
    event.remove({output: Fluid.of("createmetallurgy:molten_osmium")});
    event.remove({output: Fluid.of("createmetallurgy:molten_silver")});
    event.remove({output: Fluid.of("createmetallurgy:molten_tin")});
    event.remove({output: Fluid.of("createmetallurgy:molten_invar")});
    event.remove({output: Fluid.of("createmetallurgy:molten_electrum")});
    event.remove({output: Fluid.of("createmetallurgy:molten_bronze")});
    event.remove({output: Fluid.of("createmetallurgy:molten_constantan")});
    event.remove({output: Fluid.of("createmetallurgy:molten_void_steel")});

  })