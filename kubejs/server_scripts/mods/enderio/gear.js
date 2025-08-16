ServerEvents.recipes(event => {

    event.shaped(
        Item.of('enderio:wood_gear'),
        [
          ' A ',
          'A A',
          ' A '
        ],
        {
          A: '#minecraft:planks',
        }
      );

    event.shaped(
        Item.of('enderio:stone_gear'),
        [
          ' A ',
          'ABA',
          ' A '
        ],
        {
          A: '#forge:cobblestone',
          B: 'enderio:wood_gear'
        }
      );
      
      event.shaped(
        Item.of('enderio:energized_gear'),
        [
          'CAC',
          'ABA',
          'CAC'
        ],
        {
          A: 'enderio:energetic_alloy_ingot',
          B: 'thermal:iron_gear',
          C: 'enderio:energetic_alloy_nugget'
        }
      );

      event.shaped(
        Item.of('enderio:vibrant_gear'),
        [
          'CAC',
          'ABA',
          'CAC'
        ],
        {
          A: 'enderio:vibrant_alloy_ingot',
          B: 'enderio:energized_gear',
          C: 'enderio:vibrant_alloy_nugget'
        }
      );

      event.shaped(
        Item.of('enderio:dark_bimetal_gear'),
        [
          'CAC',
          'ABA',
          'CAC'
        ],
        {
          A: 'enderio:dark_steel_ingot',
          B: 'thermal:iron_gear',
          C: 'enderio:dark_steel_nugget'
        }
      );

      
})