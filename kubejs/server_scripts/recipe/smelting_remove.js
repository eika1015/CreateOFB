ServerEvents.recipes(event => {

        event.remove([
            {
                type: 'minecraft:smelting',
                output: 'minecraft:netherite_scrap'
            },
            {
                type: 'minecraft:blasting',
                output: 'minecraft:netherite_scrap'
            }
        ]);

        event.remove([
            {
                type: 'minecraft:smelting',
                output: '#forge:ingots'
            }
        ]);

        event.remove([
            {
                type: 'minecraft:blasting',
                output: '#forge:ingots'
            }
        ])
})