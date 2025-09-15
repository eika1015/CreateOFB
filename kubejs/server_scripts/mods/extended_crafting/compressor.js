ServerEvents.recipes(event => {

    event.custom(
        {
    "type": "extendedcrafting:compressor",
    "powerCost": 100000,
    "inputCount": 8192,
    "ingredient": {
        "item": "create:precision_mechanism"
    },
    "catalyst": {
        "item": "ticex:chaotic_crystal"
    },
      "result": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": {
              "Id": "extendedcrafting:precision_mechanism"
            }
        }
    }).id('createofb:extendedcrafting/singularity/precision_mechanism');

    event.custom(
        {
    "type": "extendedcrafting:compressor",
    "powerCost": 100000,
    "inputCount": 4096,
    "ingredient": {
        "item": "create_dd:integrated_mechanism"
    },
    "catalyst": {
        "item": "ticex:chaotic_crystal"
    },
      "result": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": {
              "Id": "extendedcrafting:integrated_mechanism"
            }
        }
    }).id('createofb:extendedcrafting/singularity/integrated_mechanism');

    event.custom(
        {
    "type": "extendedcrafting:compressor",
    "powerCost": 100000,
    "inputCount": 2048,
    "ingredient": {
        "item": "create_dd:calculation_mechanism"
    },
    "catalyst": {
        "item": "ticex:chaotic_crystal"
    },
      "result": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": {
              "Id": "extendedcrafting:calculation_mechanism"
            }
        }
    }).id('createofb:extendedcrafting/singularity/calculation_mechanism');

    event.custom(
        {
    "type": "extendedcrafting:compressor",
    "powerCost": 100000,
    "inputCount": 1024,
    "ingredient": {
        "item": "create_dd:infernal_mechanism"
    },
    "catalyst": {
        "item": "ticex:chaotic_crystal"
    },
      "result": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": {
              "Id": "extendedcrafting:infernal_mechanism"
            }
        }
    }).id('createofb:extendedcrafting/singularity/infernal_mechanism');

    event.custom(
        {
    "type": "extendedcrafting:compressor",
    "powerCost": 100000,
    "inputCount": 512,
    "ingredient": {
        "item": "create_dd:sealed_mechanism"
    },
    "catalyst": {
        "item": "ticex:chaotic_crystal"
    },
      "result": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": {
              "Id": "extendedcrafting:sealed_mechanism"
            }
        }
    }).id('createofb:extendedcrafting/singularity/sealed_mechanism');

    event.custom(
        {
    "type": "extendedcrafting:compressor",
    "powerCost": 100000,
    "inputCount": 256,
    "ingredient": {
        "item": "create_dd:abstruse_mechanism"
    },
    "catalyst": {
        "item": "ticex:chaotic_crystal"
    },
      "result": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "nbt": {
              "Id": "extendedcrafting:abstruse_mechanism"
            }
        }
    }).id('createofb:extendedcrafting/singularity/abstruse_mechanism');

})