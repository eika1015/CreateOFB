MoreJSEvents.villagerTrades((event) => {

    event.removeVanillaTrades(['cleric'], 1);
    event.removeModdedTrades(['cleric'], 1);
    event.removeVanillaTrades(['cleric'], 2);
    event.removeModdedTrades(['cleric'], 2);
    event.removeVanillaTrades(['cleric'], 3);
    event.removeModdedTrades(['cleric'], 3);
    event.removeVanillaTrades(['cleric'], 4);
    event.removeModdedTrades(['cleric'], 4);
    event.removeVanillaTrades(['cleric'], 5);
    event.removeModdedTrades(['cleric'], 5);

    //Cleric lv.1 trade. Ingot trade.
    event.addTrade('cleric', 1, [TradeItem.of('createdeco:copper_coin', 4, 4)], 'minecraft:iron_ingot').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 1, [TradeItem.of('createdeco:copper_coin', 2, 2)], 'minecraft:copper_ingot').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 1, [TradeItem.of('createdeco:copper_coin', 8, 8)], 'minecraft:gold_ingot').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 1, [TradeItem.of('createdeco:copper_coin', 1, 1)], 'minecraft:lapis_lazuli').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 1, [TradeItem.of('createdeco:copper_coin', 32, 32)], 'draconicevolution:draconium_ingot').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 1, [TradeItem.of('createdeco:copper_coin', 16, 16)], 'minecraft:diamond').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 1, [TradeItem.of('createdeco:copper_coin', 8, 8)], 'thermal:tin_ingot').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 1, [TradeItem.of('createdeco:copper_coin', 4, 4)], 'thermal:lead_ingot').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 1, [TradeItem.of('createdeco:copper_coin', 8, 8)], 'thermal:silver_ingot').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 1, [TradeItem.of('createdeco:copper_coin', 16, 16)], 'thermal:nickel_ingot').maxUses(100).villagerExperience(5);

    //Cleric lv.2 trade. Mob drop trade.
    event.addTrade('cleric', 2, [TradeItem.of('createdeco:iron_coin', 32, 32)], 'minecraft:blaze_rod').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 2, [TradeItem.of('createdeco:iron_coin', 4, 4)], 'minecraft:slime_ball').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 2, [TradeItem.of('createdeco:iron_coin', 16, 16)], 'tconstruct:ender_slime_ball').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 2, [TradeItem.of('createdeco:iron_coin', 16, 16)], 'minecraft:prismarine_shard').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 2, [TradeItem.of('createdeco:iron_coin', 16, 16)], 'minecraft:magma_cream').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 2, [TradeItem.of('createdeco:iron_coin', 64, 64)], 'minecraft:phantom_membrane').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 2, [TradeItem.of('createdeco:iron_coin', 8, 8)], 'minecraft:bone').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 2, [TradeItem.of('createdeco:iron_coin', 64, 64)], 'minecraft:shulker_shell').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 2, [TradeItem.of('createdeco:iron_coin', 16, 16)], 'tconstruct:sky_slime_ball').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 2, [TradeItem.of('createdeco:iron_coin', 8, 8)], 'minecraft:spider_eye').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 2, [TradeItem.of('createdeco:iron_coin', 32, 32)], 'tconstruct:necrotic_bone').maxUses(100).villagerExperience(5);

    //Cleric lv.3 trade.
    event.addTrade('cleric', 3, [TradeItem.of('createdeco:brass_coin', 64, 64)], 'mekanism:teleportation_core').maxUses(100).villagerExperience(5);
    event.addTrade('cleric', 3, [TradeItem.of('createdeco:brass_coin', 64, 64)], 'minecraft:nether_star').maxUses(100).villagerExperience(5);

    //Cleric lv.4 trade.
    //event.addTrade('cleric', 4, [TradeItem.of('createdeco:gold_coin', 5, 5)], 'create:precision_mechanism').maxUses(100).villagerExperience(5);
    //event.addTrade('cleric', 4, [TradeItem.of('createdeco:gold_coin', 10, 10)], 'create_dd:integrated_mechanism').maxUses(100).villagerExperience(5);
    
    //Cleric lv.5 trade.
    //event.addTrade('cleric', 5, [TradeItem.of('createdeco:netherite_coin', 5, 5)], 'create_dd:calculation_mechanism').maxUses(100).villagerExperience(5);
    //event.addTrade('cleric', 5, [TradeItem.of('createdeco:netherite_coin', 10, 10)], 'create_dd:sealed_mechanism').maxUses(100).villagerExperience(5);
    



    let jobs = 'armorer'

    event.addTrade(jobs, 1, [TradeItem.of('createbb:white_meth', 5, 10)], '3x createdeco:copper_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 2, [TradeItem.of('createbb:white_meth', 10, 20)], '2x createdeco:iron_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 3, [TradeItem.of('createbb:white_meth', 20, 32)], 'createdeco:brass_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 4, [TradeItem.of('createbb:blue_meth', 2, 10)], 'createdeco:gold_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 5, [TradeItem.of('createbb:blue_meth', 10, 30)], 'createdeco:netherite_coin').maxUses(15).villagerExperience(1);

    jobs = 'butcher'

    event.addTrade(jobs, 1, [TradeItem.of('createbb:white_meth', 5, 10)], '3x createdeco:copper_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 2, [TradeItem.of('createbb:white_meth', 10, 20)], '2x createdeco:iron_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 3, [TradeItem.of('createbb:white_meth', 20, 32)], 'createdeco:brass_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 4, [TradeItem.of('createbb:blue_meth', 2, 10)], 'createdeco:gold_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 5, [TradeItem.of('createbb:blue_meth', 10, 30)], 'createdeco:netherite_coin').maxUses(15).villagerExperience(1);

    jobs = 'farmer'

    event.addTrade(jobs, 1, [TradeItem.of('createbb:white_meth', 5, 10)], '3x createdeco:copper_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 2, [TradeItem.of('createbb:white_meth', 10, 20)], '2x createdeco:iron_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 3, [TradeItem.of('createbb:white_meth', 20, 32)], 'createdeco:brass_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 4, [TradeItem.of('createbb:blue_meth', 2, 10)], 'createdeco:gold_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 5, [TradeItem.of('createbb:blue_meth', 10, 30)], 'createdeco:netherite_coin').maxUses(15).villagerExperience(1);

    jobs = 'fisherman'

    event.addTrade(jobs, 1, [TradeItem.of('createbb:white_meth', 5, 10)], '3x createdeco:copper_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 2, [TradeItem.of('createbb:white_meth', 10, 20)], '2x createdeco:iron_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 3, [TradeItem.of('createbb:white_meth', 20, 32)], 'createdeco:brass_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 4, [TradeItem.of('createbb:blue_meth', 2, 10)], 'createdeco:gold_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 5, [TradeItem.of('createbb:blue_meth', 10, 30)], 'createdeco:netherite_coin').maxUses(15).villagerExperience(1);

    jobs = 'fletcher'

    event.addTrade(jobs, 1, [TradeItem.of('createbb:white_meth', 5, 10)], '3x createdeco:copper_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 2, [TradeItem.of('createbb:white_meth', 10, 20)], '2x createdeco:iron_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 3, [TradeItem.of('createbb:white_meth', 20, 32)], 'createdeco:brass_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 4, [TradeItem.of('createbb:blue_meth', 2, 10)], 'createdeco:gold_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 5, [TradeItem.of('createbb:blue_meth', 10, 30)], 'createdeco:netherite_coin').maxUses(15).villagerExperience(1);

    jobs = 'leatherworker'

    event.addTrade(jobs, 1, [TradeItem.of('createbb:white_meth', 5, 10)], '3x createdeco:copper_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 2, [TradeItem.of('createbb:white_meth', 10, 20)], '2x createdeco:iron_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 3, [TradeItem.of('createbb:white_meth', 20, 32)], 'createdeco:brass_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 4, [TradeItem.of('createbb:blue_meth', 2, 10)], 'createdeco:gold_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 5, [TradeItem.of('createbb:blue_meth', 10, 30)], 'createdeco:netherite_coin').maxUses(15).villagerExperience(1);

    jobs = 'librarian'

    event.addTrade(jobs, 1, [TradeItem.of('createbb:white_meth', 5, 10)], '3x createdeco:copper_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 2, [TradeItem.of('createbb:white_meth', 10, 20)], '2x createdeco:iron_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 3, [TradeItem.of('createbb:white_meth', 20, 32)], 'createdeco:brass_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 4, [TradeItem.of('createbb:blue_meth', 2, 10)], 'createdeco:gold_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 5, [TradeItem.of('createbb:blue_meth', 10, 30)], 'createdeco:netherite_coin').maxUses(15).villagerExperience(1);

    jobs = 'mason'

    event.addTrade(jobs, 1, [TradeItem.of('createbb:white_meth', 5, 10)], '3x createdeco:copper_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 2, [TradeItem.of('createbb:white_meth', 10, 20)], '2x createdeco:iron_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 3, [TradeItem.of('createbb:white_meth', 20, 32)], 'createdeco:brass_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 4, [TradeItem.of('createbb:blue_meth', 2, 10)], 'createdeco:gold_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 5, [TradeItem.of('createbb:blue_meth', 10, 30)], 'createdeco:netherite_coin').maxUses(15).villagerExperience(1);

    jobs = 'shepherd'

    event.addTrade(jobs, 1, [TradeItem.of('createbb:white_meth', 5, 10)], '3x createdeco:copper_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 2, [TradeItem.of('createbb:white_meth', 10, 20)], '2x createdeco:iron_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 3, [TradeItem.of('createbb:white_meth', 20, 32)], 'createdeco:brass_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 4, [TradeItem.of('createbb:blue_meth', 2, 10)], 'createdeco:gold_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 5, [TradeItem.of('createbb:blue_meth', 10, 30)], 'createdeco:netherite_coin').maxUses(15).villagerExperience(1);

    jobs = 'toolsmith'

    event.addTrade(jobs, 1, [TradeItem.of('createbb:white_meth', 5, 10)], '3x createdeco:copper_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 2, [TradeItem.of('createbb:white_meth', 10, 20)], '2x createdeco:iron_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 3, [TradeItem.of('createbb:white_meth', 20, 32)], 'createdeco:brass_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 4, [TradeItem.of('createbb:blue_meth', 2, 10)], 'createdeco:gold_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 5, [TradeItem.of('createbb:blue_meth', 10, 30)], 'createdeco:netherite_coin').maxUses(15).villagerExperience(1);

    jobs = 'weaponsmith'

    event.addTrade(jobs, 1, [TradeItem.of('createbb:white_meth', 5, 10)], '3x createdeco:copper_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 2, [TradeItem.of('createbb:white_meth', 10, 20)], '2x createdeco:iron_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 3, [TradeItem.of('createbb:white_meth', 20, 32)], 'createdeco:brass_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 4, [TradeItem.of('createbb:blue_meth', 2, 10)], 'createdeco:gold_coin').maxUses(15).villagerExperience(1);
    event.addTrade(jobs, 5, [TradeItem.of('createbb:blue_meth', 10, 30)], 'createdeco:netherite_coin').maxUses(15).villagerExperience(1);

});