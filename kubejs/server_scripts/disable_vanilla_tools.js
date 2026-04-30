ServerEvents.recipes(event => {
  // List of tool types to disable
  const tools =[
    'sword',
    'pickaxe',
    'axe',
    'shovel',
    'hoe'
  ];

  // List of materials to disable
  const materials =[
    'stone',
    'iron',
    'gold',
    'diamond',
    'netherite',
    'lead',
    'silver'
  ];

  // Iterate and remove vanilla recipes
  tools.forEach(tool => {
    materials.forEach(material => {
      // wood_sword, stone_pickaxe, etc.
      let itemId = `minecraft:${material}_${tool}`;
      if (material === 'wood') itemId = `minecraft:wooden_${tool}`;
      if (material === 'gold') itemId = `minecraft:golden_${tool}`;
      
      event.remove({ output: itemId });
    });
  });

  // Remove specific modded tools if necessary
  event.remove({ mod: 'iceandfire', output: '#forge:tools' }); 

  // === NEW: Remove No Tree Punching Flint Knife ===
  event.remove({ output: 'notreepunching:flint_knife' });
});