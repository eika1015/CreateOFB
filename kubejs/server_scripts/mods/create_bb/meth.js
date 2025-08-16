ServerEvents.recipes(event => {

    event.remove({id: 'createbb:phase2/acetic_anhydride_mixing'});
    event.custom({
    "type": "create:mixing",
    "ingredients": [
        {
            "amount": 25,
            "fluid": "mekanism:hydrogen"
        },
        {
            "item": "minecraft:sugar"
        }
    ],
    "results": [
        {
            "amount": 50,
            "fluid": "createbb:acetic_anhydride"
        }
    ]
}).id('createofb:create_bb/meth/acetic_anhydride');

    event.remove({id: 'createbb:phase2/methanol_mixing'});
    event.custom({
    "type": "create:mixing",
    "ingredients": [
        {
            "tag": "minecraft:coals"
        },
        {
            "item": "createbb:copper_zinc_catalyst"
        },
        {
            "amount": 50,
            "fluid": "mekanism:hydrogen"
        }

    ],
    "results": [
        {
            "amount": 50,
            "fluid": "createbb:methanol"
        },
        {
            "item": "createbb:copper_zinc_catalyst"
        }
    ]
}).id('createofb:create_bb/meth/methanol');

})