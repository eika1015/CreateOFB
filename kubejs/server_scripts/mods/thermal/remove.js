ServerEvents.recipes((event) => {

    event.remove({type: 'thermal:pulverizer'});
    event.remove({type: 'thermal:smelter'});

})