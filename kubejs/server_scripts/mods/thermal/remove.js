ServerEvents.recipes((event) => {

    event.remove({type: 'thermal:smelter'});
    event.remove({output: 'thermal:pyrolyzer'});
    event.remove({output: 'thermal:machine_crafter'});

    //pulverizer remove all
    event.remove({output: 'thermal:machine_pulverizer'});
    event.remove({type: 'thermal:pulverizer'});
    event.remove({id: 'thermal:compat/create/pulverizer_create_diorite_recycle'});
    event.remove({id: 'thermal:compat/create/pulverizer_create_asurine_recycle'});
    event.remove({id: 'thermal:compat/create/pulverizer_create_crimsite_recycle'});
    event.remove({id: 'thermal:compat/create/pulverizer_create_tuff_recycle'});
    event.remove({id: 'thermal:compat/create/pulverizer_create_ochrum_recycle'});
    event.remove({id: 'thermal:machines/pulverizer/pulverizer_diamond_armor'});
    event.remove({id: 'thermal:compat/create/pulverizer_create_veridium_recycle'});
    event.remove({id: 'thermal:compat/create/pulverizer_create_tuff'});
    event.remove({id: 'thermal:machines/pulverizer/pulverizer_diamond_tools'});

    //adv refinery remove all
    event.remove({output: 'thermal_extra:advanced_refinery'});
    event.remove({id: 'thermal_extra:machine/advanced_refinery/light_oil'});
    event.remove({id: 'thermal_extra:machine/advanced_refinery/heavy_oil'});
    event.remove({id: 'thermal_extra:machine/advanced_refinery/flux_infused_oil'});
    event.remove({id: 'thermal_extra:machine/advanced_refinery/refined_sunflower_oil'});

    //nitratic igniter remove all
    event.remove({output: 'thermal_extra:nitratic_igniter'});
    event.remove({type: 'thermal_extra:nitratic_igniter'});

    //fluid mixer remove all
    event.remove({output: 'thermal_extra:fluid_mixer'});
    event.remove({type: 'thermal_extra:fluid_mixer'});

    //component assembly remove all
    event.remove({output: 'thermal_extra:component_assembly'});
    event.remove({type: 'thermal_extra:component_assembly'});

    //endothermic dehydrator remove all
    event.remove({output: 'thermal_extra:endothermic_dehydrator'})
    event.remove({type: 'thermal_extra:endothermic_dehydrator'});

    //sawmill remove all
    event.remove({output: 'thermal:machine_sawmill'});
    event.remove({type: 'thermal:sawmill'});

})