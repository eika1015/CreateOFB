ServerEvents.recipes(event => {

    event.remove({output: 'createdeco:gold_coin'});
    event.remove({output: 'createdeco:netherite_coin'});
    event.remove({output: 'createdeco:brass_coin'});
    event.remove({output: 'createdeco:iron_coin'});
    event.remove({output: 'createdeco:copper_coin'});
    event.remove({output: 'createdeco:industrial_iron_coin'});
    event.remove({output: 'createdeco:zinc_coin'});

    event.shapeless(
        Item.of('createdeco:gold_coin',4),
        [
            'createdeco:gold_coinstack'
        ]
    );

    event.shapeless(
        Item.of('createdeco:netherite_coin',4),
        [
            'createdeco:netherite_coinstack'
        ]
    );

    event.shapeless(
        Item.of('createdeco:brass_coin',4),
        [
            'createdeco:brass_coinstack'
        ]
    );

    event.shapeless(
        Item.of('createdeco:iron_coin',4),
        [
            'createdeco:iron_coinstack'
        ]
    );

    event.shapeless(
        Item.of('createdeco:copper_coin',4),
        [
            'createdeco:copper_coinstack'
        ]
    );

    event.shapeless(
        Item.of('createdeco:industrial_iron_coin',4),
        [
            'createdeco:industrial_iron_coinstack'
        ]
    );

    event.shapeless(
        Item.of('createdeco:zinc_coin',4),
        [
            'createdeco:zinc_coinstack'
        ]
    );

})