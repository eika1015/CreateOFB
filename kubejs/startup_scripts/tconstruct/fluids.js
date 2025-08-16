StartupEvents.registry('fluid', event => {
    
  //draconium
  event.create('molten_draconium')
    .displayName('Molten Draconium')
    .stillTexture('createofb:fluid/molten_draconium_still')
    .flowingTexture('createofb:fluid/molten_draconium_flow')
    .bucketColor(0x4b0082)

  //draconium awakened
  event.create('molten_draconium_awakened')
    .displayName('Molten Draconium awakened')
    .stillTexture('createofb:fluid/molten_draconium_awakened_still')
    .flowingTexture('createofb:fluid/molten_draconium_awakened_flow')
    .bucketColor(0xff8c00)

  //energetic alloy
  event.create('molten_energetic_alloy')
    .displayName('Molten Energetic alloy')
    .stillTexture('createofb:fluid/molten_energetic_alloy_still')
    .flowingTexture('createofb:fluid/molten_energetic_alloy_flow')
    .bucketColor(0xffa500)

  //redstone alloy
  event.create('molten_redstone_alloy')
    .displayName('Molten Redstone alloy')
    .stillTexture('createofb:fluid/molten_redstone_alloy_still')
    .flowingTexture('createofb:fluid/molten_redstone_alloy_flow')
    .bucketColor(0xff0000)

  //redstone alloy
  event.create('molten_vibrant_alloy')
    .displayName('Molten Vibrant alloy')
    .stillTexture('createofb:fluid/molten_vibrant_alloy_still')
    .flowingTexture('createofb:fluid/molten_vibrant_alloy_flow')
    .bucketColor(0xadff2f)

})