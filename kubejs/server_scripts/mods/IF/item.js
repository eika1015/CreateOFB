ServerEvents.recipes((event) => {

    event.remove({output: 'industrialforegoing:conveyor'});
    event.remove({output: 'industrialforegoing:conveyor_extraction_upgrade'});
    event.remove({output: 'industrialforegoing:conveyor_insertion_upgrade'});
    event.remove({output: 'industrialforegoing:conveyor_detection_upgrade'});
    event.remove({output: 'industrialforegoing:conveyor_bouncing_upgrade'});
    event.remove({output: 'industrialforegoing:conveyor_dropping_upgrade'});
    event.remove({output: 'industrialforegoing:conveyor_blinking_upgrade'});
    event.remove({output: 'industrialforegoing:conveyor_splitting_upgrade'});
    event.remove({output: 'industrialforegoing:item_transporter_type'});
    event.remove({output: 'industrialforegoing:fluid_transporter_type'});
    event.remove({output: 'industrialforegoing:world_transporter_type'});

    let base = '#minecraft:logs'

    event.remove({output: 'industrialforegoing:machine_frame_pity'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:machine_frame_pity').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'create:precision_mechanism']),
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createDeploying(base, [base, 'minecraft:redstone_block']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 200)])
    ]).transitionalItem(base).loops(2).id('createofb:if/item/machine_frame_pity');


    event.remove({output: 'industrialforegoing:machine_frame_simple'});
    event.custom({
          "type": "industrialforegoing:dissolution_chamber",
          "input": [
        {
          "tag": "forge:plastic"
        },
        {
          "tag": "industrialforegoing:machine_frame/pity"
        },
        {
          "tag": "forge:plastic"
        },
        {
          "item": "create:electron_tube"
        },
        {
          "item": "create:electron_tube"
        },
        {
          "tag": "forge:gears/iron"
        },
        {
          "item": "create_dd:calculation_mechanism"
        },
        {
          "tag": "forge:gears/iron"
        }
    ],
      "inputFluid": "{Amount:500,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:machine_frame_simple"
      },
      "processingTime": 480
    }).id('createofb:if/item/machine_frame_simple');


    event.remove({output: 'industrialforegoing:machine_frame_advanced'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:plastic"
        },
        {
          "tag": "industrialforegoing:machine_frame/simple"
        },
        {
          "tag": "forge:plastic"
        },
        {
          "item": "minecraft:netherite_scrap"
        },
        {
          "item": "minecraft:netherite_scrap"
        },
        {
          "tag": "forge:gears/diamond"
        },
        {
          "item": "create_dd:infernal_mechanism"
        },
        {
          "tag": "forge:gears/diamond"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"industrialforegoing:pink_slime\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:machine_frame_advanced"
      },
      "processingTime": 540
    }).id('createofb:if/item/machine_frame_advanced');


    event.remove({output: 'industrialforegoing:machine_frame_supreme'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:plastic"
        },
        {
          "tag": "industrialforegoing:machine_frame/advanced"
        },
        {
          "tag": "forge:plastic"
        },
        {
          "item": "createutilities:void_steel_sheet"
        },
        {
          "item": "createutilities:void_steel_sheet"
        },
        {
          "tag": "forge:gears/netherite"
        },
        {
          "item": "create_dd:sealed_mechanism"
        },
        {
          "tag": "forge:gears/netherite"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"tconstruct:molten_enderium\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:machine_frame_supreme"
      },
      "processingTime": 600
    }).id('createofb:if/item/machine_frame_supreme');

    base = 'industrialforegoing:machine_frame_pity'

    event.remove({output: 'industrialforegoing:common_black_hole_unit'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:common_black_hole_unit').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, '#forge:ingots/iron']),
      event.recipes.createDeploying(base, [base, '#forge:chests/wooden']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 300)])
    ]).transitionalItem(base).loops(5).id('createofb:if/machine/common_black_hole_unit');

    event.remove({output: 'industrialforegoing:common_black_hole_tank'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:common_black_hole_tank').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:gears/iron']),
      event.recipes.createDeploying(base, [base, '#forge:ingots/iron']),
      event.recipes.createDeploying(base, [base, 'create:fluid_tank']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 300)])
    ]).transitionalItem(base).loops(5).id('createofb:if/machine/common_black_hole_tank');

    base = 'industrialforegoing:common_black_hole_unit'

    event.remove({output: 'industrialforegoing:pity_black_hole_unit'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:pity_black_hole_unit').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:chests/wooden']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_eye']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_pearl']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:machine_frame_pity']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(4).id('createofb:if/machine/pity_black_hole_unit');

    base = 'industrialforegoing:pity_black_hole_unit'

    event.remove({output: 'industrialforegoing:simple_black_hole_unit'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:simple_black_hole_unit').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:chests/wooden']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_eye']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_pearl']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:machine_frame_simple']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(3).id('createofb:if/machine/simple_black_hole_unit');

    base = 'industrialforegoing:simple_black_hole_unit'

    event.remove({output: 'industrialforegoing:advanced_black_hole_unit'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:advanced_black_hole_unit').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:chests/wooden']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_eye']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_pearl']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:machine_frame_advanced']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/advanced_black_hole_unit');

    base = 'industrialforegoing:advanced_black_hole_unit'

    event.remove({output: 'industrialforegoing:supreme_black_hole_unit'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:supreme_black_hole_unit').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, '#forge:chests/wooden']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_eye']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_pearl']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:machine_frame_supreme']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(1).id('createofb:if/machine/supreme_black_hole_unit');

    base = 'industrialforegoing:common_black_hole_tank'

    event.remove({output: 'industrialforegoing:pity_black_hole_tank'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:pity_black_hole_tank').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'create:fluid_tank']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_eye']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_pearl']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:machine_frame_pity']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(4).id('createofb:if/machine/pity_black_hole_tank');

    base = 'industrialforegoing:pity_black_hole_tank'

    event.remove({output: 'industrialforegoing:simple_black_hole_tank'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:simple_black_hole_tank').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'create:fluid_tank']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_eye']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_pearl']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:machine_frame_simple']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(3).id('createofb:if/machine/simple_black_hole_tank');

    base = 'industrialforegoing:simple_black_hole_tank'

    event.remove({output: 'industrialforegoing:advanced_black_hole_tank'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:advanced_black_hole_tank').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'create:fluid_tank']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_eye']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_pearl']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:machine_frame_advanced']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(2).id('createofb:if/machine/advanced_black_hole_tank');

    base = 'industrialforegoing:advanced_black_hole_tank'

    event.remove({output: 'industrialforegoing:supreme_black_hole_tank'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:supreme_black_hole_tank').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'create:fluid_tank']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_eye']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_pearl']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:machine_frame_supreme']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(1).id('createofb:if/machine/supreme_black_hole_tank');

    base = 'industrialforegoing:machine_frame_supreme'

    event.remove({output: 'industrialforegoing:black_hole_controller'});
    event.recipes.create.sequenced_assembly([
      Item.of('industrialforegoing:black_hole_controller').withChance(100.0)
    ], base, [ 
      event.recipes.createDeploying(base, [base, 'industrialforegoing:supreme_black_hole_unit']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:supreme_black_hole_tank']),
      event.recipes.createDeploying(base, [base, '#forge:gears/diamond']),
      event.recipes.createDeploying(base, [base, 'minecraft:ender_chest']),
      event.recipes.createDeploying(base, [base, 'industrialforegoing:plastic']),
      event.recipes.createFilling(base, [base, Fluid.of('tfmg:lubrication_oil', 1000)])
    ]).transitionalItem(base).loops(1).id('createofb:if/machine/black_hole_controller');

    event.remove({output: 'industrialforegoing:range_addon0'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "minecraft:lapis_lazuli"
        },
        {
          "item": "minecraft:lapis_lazuli"
        },
        {
          "item": "minecraft:lapis_lazuli"
        },
        {
          "item": "minecraft:lapis_lazuli"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:range_addon0"
      },
      "processingTime": 300
    }).id('createofb:if/item/addon0');

    event.remove({output: 'industrialforegoing:range_addon1'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "minecraft:copper_ingot"
        },
        {
          "item": "minecraft:copper_ingot"
        },
        {
          "item": "minecraft:copper_ingot"
        },
        {
          "item": "minecraft:copper_ingot"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:range_addon1"
      },
      "processingTime": 300
    }).id('createofb:if/item/addon1');

    event.remove({output: 'industrialforegoing:range_addon2'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "minecraft:iron_ingot"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:range_addon2"
      },
      "processingTime": 300
    }).id('createofb:if/item/addon2');

    event.remove({output: 'industrialforegoing:range_addon3'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "minecraft:gold_ingot"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:range_addon3"
      },
      "processingTime": 300
    }).id('createofb:if/item/addon3');

    event.remove({output: 'industrialforegoing:range_addon4'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "create:brass_ingot"
        },
        {
          "item": "create:brass_ingot"
        },
        {
          "item": "create:brass_ingot"
        },
        {
          "item": "create:brass_ingot"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:range_addon4"
      },
      "processingTime": 300
    }).id('createofb:if/item/addon4');

    event.remove({output: 'industrialforegoing:range_addon5'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "mekanism:ingot_osmium"
        },
        {
          "item": "mekanism:ingot_osmium"
        },
        {
          "item": "mekanism:ingot_osmium"
        },
        {
          "item": "mekanism:ingot_osmium"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:range_addon5"
      },
      "processingTime": 300
    }).id('createofb:if/item/addon5');

    event.remove({output: 'industrialforegoing:range_addon6'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "minecraft:diamond"
        },
        {
          "item": "minecraft:diamond"
        },
        {
          "item": "minecraft:diamond"
        },
        {
          "item": "minecraft:diamond"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:range_addon6"
      },
      "processingTime": 300
    }).id('createofb:if/item/addon6');

    event.remove({output: 'industrialforegoing:range_addon7'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "tconstruct:cobalt_ingot"
        },
        {
          "item": "tconstruct:cobalt_ingot"
        },
        {
          "item": "tconstruct:cobalt_ingot"
        },
        {
          "item": "tconstruct:cobalt_ingot"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:range_addon7"
      },
      "processingTime": 300
    }).id('createofb:if/item/addon7');

    event.remove({output: 'industrialforegoing:range_addon8'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "minecraft:emerald"
        },
        {
          "item": "minecraft:emerald"
        },
        {
          "item": "minecraft:emerald"
        },
        {
          "item": "minecraft:emerald"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:range_addon8"
      },
      "processingTime": 300
    }).id('createofb:if/item/addon8');

    event.remove({output: 'industrialforegoing:range_addon9'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "minecraft:netherite_ingot"
        },
        {
          "item": "minecraft:netherite_ingot"
        },
        {
          "item": "minecraft:netherite_ingot"
        },
        {
          "item": "minecraft:netherite_ingot"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:range_addon9"
      },
      "processingTime": 300
    }).id('createofb:if/item/addon9');

    event.remove({output: 'industrialforegoing:range_addon10'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "tconstruct:manyullyn_ingot"
        },
        {
          "item": "tconstruct:manyullyn_ingot"
        },
        {
          "item": "tconstruct:manyullyn_ingot"
        },
        {
          "item": "tconstruct:manyullyn_ingot"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:range_addon10"
      },
      "processingTime": 300
    }).id('createofb:if/item/addon10');

    event.remove({output: 'industrialforegoing:range_addon11'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "createutilities:void_steel_ingot"
        },
        {
          "item": "createutilities:void_steel_ingot"
        },
        {
          "item": "createutilities:void_steel_ingot"
        },
        {
          "item": "createutilities:void_steel_ingot"
        }
      ],
      "inputFluid": "{Amount:500,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:range_addon11"
      },
      "processingTime": 300
    }).id('createofb:if/item/addon11');

    event.remove({output: 'industrialforegoing:speed_addon_1'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "tag": "forge:gears/gold"
        },
        {
          "tag": "forge:gears/gold"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "inputFluid": "{Amount:1000,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:speed_addon_1"
      },
      "processingTime": 300
    }).id('createofb:if/item/speed_addon_1');

    event.remove({output: 'industrialforegoing:speed_addon_2'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "tag": "forge:gears/diamond"
        },
        {
          "tag": "forge:gears/diamond"
        },
        {
          "item": "minecraft:sugar"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "inputFluid": "{Amount:1000,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:speed_addon_2"
      },
      "processingTime": 480
    }).id('createofb:if/item/speed_addon_2');

    event.remove({output: 'industrialforegoing:efficiency_addon_1'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "tag": "forge:gears/gold"
        },
        {
          "tag": "forge:gears/gold"
        },
        {
          "item": "minecraft:blaze_rod"
        },
        {
          "item": "minecraft:blaze_rod"
        }
      ],
      "inputFluid": "{Amount:1000,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:efficiency_addon_1"
      },
      "processingTime": 300
    }).id('createofb:if/item/efficiency_addon_1');

    event.remove({output: 'industrialforegoing:efficiency_addon_2'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "tag": "forge:gears/diamond"
        },
        {
          "tag": "forge:gears/diamond"
        },
        {
          "item": "minecraft:blaze_rod"
        },
        {
          "item": "minecraft:blaze_rod"
        }
      ],
      "inputFluid": "{Amount:1000,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:efficiency_addon_2"
      },
      "processingTime": 480
    }).id('createofb:if/item/efficiency_addon_2');

    event.remove({output: 'industrialforegoing:proccessing_addon_1'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "tag": "forge:gears/gold"
        },
        {
          "tag": "forge:gears/gold"
        },
        {
          "item": "minecraft:crafting_table"
        },
        {
          "item": "minecraft:furnace"
        }
      ],
      "inputFluid": "{Amount:1000,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:proccessing_addon_1"
      },
      "processingTime": 300
    }).id('createofb:if/item/proccessing_addon_1');

    event.remove({output: 'industrialforegoing:proccessing_addon_2'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "create:polished_rose_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "item": "enderio:fused_quartz"
        },
        {
          "tag": "forge:gears/diamond"
        },
        {
          "tag": "forge:gears/diamond"
        },
        {
          "item": "minecraft:crafting_table"
        },
        {
          "item": "minecraft:furnace"
        }
      ],
      "inputFluid": "{Amount:1000,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:proccessing_addon_2"
      },
      "processingTime": 480
    }).id('createofb:if/item/proccessing_addon_2');

    event.remove({output: 'industrialforegoing:infinity_nuke'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "minecraft:tnt"
        },
        {
          "item": "minecraft:tnt"
        },
        {
          "item": "minecraft:tnt"
        },
        {
          "item": "minecraft:tnt"
        },
        {
          "item": "industrialforegoing:range_addon11"
        },
        {
          "item": "minecraft:diamond_block"
        },
        {
          "item": "minecraft:nether_star"
        },
        {
          "item": "minecraft:nether_star"
        }
      ],
      "inputFluid": "{Amount:1000,FluidName:\"ticex:molten_etheric\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:infinity_nuke"
      },
      "processingTime": 780
    }).id('createofb:if/item/infinity_nuke');

    event.remove({output: 'industrialforegoing:laser_lens0'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:white_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens0"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens0');

    event.remove({output: 'industrialforegoing:laser_lens1'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:orange_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens1"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens1');

    event.remove({output: 'industrialforegoing:laser_lens2'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:magenta_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens2"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens2');

    event.remove({output: 'industrialforegoing:laser_lens3'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:light_blue_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens3"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens3');

    event.remove({output: 'industrialforegoing:laser_lens4'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:yellow_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens4"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens4');

    event.remove({output: 'industrialforegoing:laser_lens5'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:lime_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens5"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens5');

    event.remove({output: 'industrialforegoing:laser_lens6'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:pink_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens6"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens6');

    event.remove({output: 'industrialforegoing:laser_lens7'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:gray_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens7"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens7');

    event.remove({output: 'industrialforegoing:laser_lens8'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:light_gray_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens8"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens8');

    event.remove({output: 'industrialforegoing:laser_lens9'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:cyan_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens9"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens9');

    event.remove({output: 'industrialforegoing:laser_lens10'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:purple_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens10"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens10');

    event.remove({output: 'industrialforegoing:laser_lens11'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:blue_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens11"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens11');

    event.remove({output: 'industrialforegoing:laser_lens12'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:brown_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens12"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens12');

    event.remove({output: 'industrialforegoing:laser_lens13'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:green_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens13"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens13');

    event.remove({output: 'industrialforegoing:laser_lens14'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:red_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens14"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens14');

    event.remove({output: 'industrialforegoing:laser_lens15'});
    event.custom(
        {
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "tag": "forge:glass_panes"
        },
        {
          "item": "minecraft:black_dye"
        }
      ],
      "inputFluid": "{Amount:300,FluidName:\"tfmg:liquid_plastic\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:laser_lens15"
      },
      "processingTime": 300
    }).id('createofb:if/item/laser_lens15');

})