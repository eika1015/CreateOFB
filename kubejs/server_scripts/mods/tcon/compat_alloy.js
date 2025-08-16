ServerEvents.recipes((event) => {

    const { tconstruct } = event.recipes;

    // compat alloy Iron
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_iron", 180), 
        [
            Fluid.of("tconstruct:molten_iron", 90), 
            Fluid.of("createmetallurgy:molten_iron", 90)
        ]
    ).temperature(1000);


    // compat alloy Gold
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_gold", 180), 
        [
            Fluid.of("tconstruct:molten_gold", 90), 
            Fluid.of("createmetallurgy:molten_gold", 90)
        ]
    ).temperature(1000);


    // compat alloy copper
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_copper", 180), 
        [
            Fluid.of("tconstruct:molten_copper", 90), 
            Fluid.of("createmetallurgy:molten_copper", 90)
        ]
    ).temperature(1000);


    // compat alloy zinc
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_zinc", 180), 
        [
            Fluid.of("tconstruct:molten_zinc", 90), 
            Fluid.of("createmetallurgy:molten_zinc", 90)
        ]
    ).temperature(1000);

    // compat alloy brass
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_brass", 180), 
        [
            Fluid.of("tconstruct:molten_brass", 90), 
            Fluid.of("createmetallurgy:molten_brass", 90)
        ]
    ).temperature(1000);

    // compat alloy silver
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_silver", 180), 
        [
            Fluid.of("tconstruct:molten_silver", 90), 
            Fluid.of("createmetallurgy:molten_silver", 90)
        ]
    ).temperature(1000);

    // compat alloy electrum
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_electrum", 180), 
        [
            Fluid.of("tconstruct:molten_electrum", 90), 
            Fluid.of("createmetallurgy:molten_electrum", 90)
        ]
    ).temperature(1000);

    // compat alloy steel
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_steel", 180), 
        [
            Fluid.of("tconstruct:molten_steel", 90), 
            Fluid.of("createmetallurgy:molten_steel", 90)
        ]
    ).temperature(1000);

    // compat alloy tin
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_tin", 180), 
        [
            Fluid.of("tconstruct:molten_tin", 90), 
            Fluid.of("createmetallurgy:molten_tin", 90)
        ]
    ).temperature(1000);

    // compat alloy aluminum
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_aluminum", 180), 
        [
            Fluid.of("tconstruct:molten_aluminum", 90), 
            Fluid.of("createmetallurgy:molten_aluminum", 90)
        ]
    ).temperature(1000);

    // compat alloy lead
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_lead", 180), 
        [
            Fluid.of("tconstruct:molten_lead", 90), 
            Fluid.of("createmetallurgy:molten_lead", 90)
        ]
    ).temperature(1000);

    // compat alloy nickel
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_nickel", 180), 
        [
            Fluid.of("tconstruct:molten_nickel", 90), 
            Fluid.of("createmetallurgy:molten_nickel", 90)
        ]
    ).temperature(1000);

    // compat alloy bronze
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_bronze", 180), 
        [
            Fluid.of("tconstruct:molten_bronze", 90), 
            Fluid.of("createmetallurgy:molten_bronze", 90)
        ]
    ).temperature(1000);

    // compat alloy tungsten
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_tungsten", 180), 
        [
            Fluid.of("tconstruct:molten_tungsten", 90), 
            Fluid.of("createmetallurgy:molten_tungsten", 90)
        ]
    ).temperature(1000);

    // compat alloy osmium
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_osmium", 180), 
        [
            Fluid.of("tconstruct:molten_osmium", 90), 
            Fluid.of("createmetallurgy:molten_osmium", 90)
        ]
    ).temperature(1000);

    // compat alloy constantan
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_constantan", 180), 
        [
            Fluid.of("tconstruct:molten_constantan", 90), 
            Fluid.of("createmetallurgy:molten_constantan", 90)
        ]
    ).temperature(1000);

    // compat alloy invar
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_invar", 180), 
        [
            Fluid.of("tconstruct:molten_invar", 90), 
            Fluid.of("createmetallurgy:molten_invar", 90)
        ]
    ).temperature(1000);

    // compat alloy netherite
    tconstruct.alloy(
        Fluid.of("tconstruct:molten_netherite", 180), 
        [
            Fluid.of("tconstruct:molten_netherite", 90), 
            Fluid.of("createmetallurgy:molten_netherite", 90)
        ]
    ).temperature(1000);


})