ServerEvents.recipes(event => {
    // The exact NBT for the Oak Hammer, including Better Combat integration.
    // (We omit the UUID 'id' tag so the game generates a fresh one for each crafted hammer to prevent inventory bugs)
    const exactHammerNBT = {
        "Damage": 0,
        "double/basic_hammer_left_material": "basic_hammer/oak",
        "double/basic_hammer_right_material": "basic_hammer/oak",
        "double/basic_handle_material": "basic_handle/stick",
        "double/handle": "double/basic_handle",
        "double/head_left": "double/basic_hammer_left",
        "double/head_right": "double/basic_hammer_right",
        "weapon_attributes": '{"parent":"bettercombat:hammer","attributes":{"attack_range":3.0,"pose":"bettercombat:pose_two_handed_heavy","two_handed":true,"category":"hammer","attacks":[{"hitbox":"FORWARD_BOX","damage_multiplier":1.0,"angle":0.0,"upswing":0.5,"animation":"bettercombat:two_handed_slam","swing_sound":{"id":"bettercombat:hammer_slam","volume":1.0,"pitch":1.0,"randomness":0.1}}]}}'
    };

    // Remove the default Tetra wooden hammer recipe to prevent conflicts
    event.remove({ output: 'tetra:modular_double', mod: 'tetra', type: 'minecraft:crafting_shaped' });

    // Add our Universal Oak Hammer recipe
    event.shaped(Item.of('tetra:modular_double', exactHammerNBT),[
        ' P ',
        ' SP',
        'S  '
    ], {
        P: '#minecraft:planks',   // Accepts ANY modded or vanilla planks
        S: 'minecraft:stick'      // STRICTLY accepts only vanilla sticks
    }).id('kubejs:universal_tetra_wooden_hammer');
});