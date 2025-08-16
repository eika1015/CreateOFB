ServerEvents.recipes((event) => {
    
    event.recipes.thermal.compression_fuel('tfmg:gasoline').energy(1800000)

    event.recipes.thermal.compression_fuel('tfmg:diesel').energy(2500000)

  })