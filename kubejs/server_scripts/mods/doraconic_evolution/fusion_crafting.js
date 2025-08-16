ServerEvents.recipes(event => {

event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "type": "draconicevolution:ingredient_stack",
          "count": 3,
          "items": [
            {
              "tag": "forge:storage_blocks/draconium"
            }
          ]
        },
        "ingredients": [
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:dragon_heart"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:draconium_core"
          }
        ],
        "result": {
          "count": 3,
          "item": "draconicevolution:awakened_draconium_block"
        },
        "tier": "WYVERN",
        "total_energy": 50000000
      })

})