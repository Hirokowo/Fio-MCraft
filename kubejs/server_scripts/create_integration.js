// kubejs/server_scripts/create_integration.js

ServerEvents.recipes(event => {
  
  // --- Helper Function for Plate Armor ---
  function plateArmor(output, materialTag) {
    // Remove the vanilla recipe
    event.remove({ output: output })
    
    // Define patterns based on which armor piece it is
    let pattern = []
    if (output.includes('helmet')) pattern = ['PPP', 'P P']
    if (output.includes('chestplate')) pattern = ['P P', 'PPP', 'PPP']
    if (output.includes('leggings')) pattern = ['PPP', 'P P', 'P P']
    if (output.includes('boots')) pattern = ['P P', 'P P']
    
    // Add the new recipe using Plates (Sheets)
    event.shaped(output, pattern, {
      P: materialTag
    })
  }

  // 1. Armor Requires Plates
  // This forces players to set up a Press or use a Hammer to process ingots first.
  plateArmor('minecraft:iron_helmet', '#forge:plates/iron')
  plateArmor('minecraft:iron_chestplate', '#forge:plates/iron')
  plateArmor('minecraft:iron_leggings', '#forge:plates/iron')
  plateArmor('minecraft:iron_boots', '#forge:plates/iron')

  plateArmor('minecraft:golden_helmet', '#forge:plates/gold')
  plateArmor('minecraft:golden_chestplate', '#forge:plates/gold')
  plateArmor('minecraft:golden_leggings', '#forge:plates/gold')
  plateArmor('minecraft:golden_boots', '#forge:plates/gold')

  // 2. Utility Items Require Plates
  // Buckets: Makes liquids harder to move early game without processing iron.
  event.remove({ output: 'minecraft:bucket' })
  event.shaped('minecraft:bucket', [
    'P P',
    ' P '
  ], {
    P: '#forge:plates/iron'
  })

  // Shield: Makes early combat protection require processing.
  event.remove({ output: 'minecraft:shield' })
  event.shaped('minecraft:shield', [
    'WPW',
    'WWW',
    ' W '
  ], {
    W: '#minecraft:planks',
    P: '#forge:plates/iron'
  })

  // Shears: 
  event.remove({ output: 'minecraft:shears' })
  event.shaped('minecraft:shears', [
    ' P',
    'P '
  ], {
    P: '#forge:plates/iron'
  })

  // 3. Heavy Industry Requires Plates
  // Hoppers: Logic being that hoppers are made of sheet metal, not solid blocks of iron.
  event.remove({ output: 'minecraft:hopper' })
  event.shaped('minecraft:hopper', [
    'P P',
    'PCP',
    ' P '
  ], {
    P: '#forge:plates/iron',
    C: '#forge:chests/wooden'
  })

  // 4. Create Mod Integration Ideas
  
  // Pistons require Andesite Alloy
  // This pushes players to dabble in Create's "Andesite Alloy" mixing before they can make Redstone components.
  event.remove({ output: 'minecraft:piston' })
  event.shaped('minecraft:piston', [
    'TTT',
    'CIC',
    'CRC'
  ], {
    T: '#minecraft:planks',
    C: 'minecraft:cobblestone',
    I: 'create:andesite_alloy', // Replaces Iron Ingot
    R: 'minecraft:redstone'
  })

  // Sticky Piston (Optional: keep vanilla shapeless or ensure it uses the new piston)
  // Vanilla recipe usually handles Piston + Slime -> Sticky Piston automatically.

  // Flint and Steel
  // If you want to be mean, make it require an Iron Plate instead of an Ingot.
  event.remove({ output: 'minecraft:flint_and_steel' })
  event.shapeless('minecraft:flint_and_steel', ['minecraft:flint', '#forge:plates/iron'])

})