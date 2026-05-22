// Auto-Generated Ascension Ritual Engine for Fio'MCraft
// Place this file in your instance's 'kubejs/server_scripts/' folder.

const AABB = Java.loadClass('net.minecraft.world.phys.AABB');

const RECIPES = {
        "fool_9": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ender_pearl",
            ingredients: ["minecraft:ender_pearl", "alexsmobs:animal_dictionary"],
            result: "fiomcraft_engine:potion_fool_9"
        },
        "fool_8": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ender_pearl",
            ingredients: ["artifacts:whoopee_cushion", "alexsmobs:mimic_octopus_bucket", "minecraft:snowball"],
            result: "fiomcraft_engine:potion_fool_8"
        },
        "fool_7": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ender_pearl",
            ingredients: ["irons_spellbooks:evocation_upgrade_orb", "goety:magic_emerald", "supplementaries:bomb", "minecraft:firework_rocket"],
            result: "fiomcraft_engine:potion_fool_7"
        },
        "fool_6": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ender_pearl",
            ingredients: ["alexscaves:totem_of_possession", "mowziesmobs:sol_visage", "artifacts:villager_hat", "born_in_chaos_v1:spiritual_dust", "minecraft:ender_eye"],
            result: "fiomcraft_engine:potion_fool_6"
        },
        "fool_5": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ender_pearl",
            ingredients: ["cataclysm:void_core", "goety:pine_wood", "alexscaves:moth_dust", "irons_spellbooks:ender_upgrade_orb", "iceandfire:ectoplasm", "minecraft:lead"],
            result: "fiomcraft_engine:potion_fool_5"
        },
        "fool_4": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ender_pearl",
            ingredients: ["cataclysm:abyssal_egg", "alexscaves:pure_darkness", "goety:dark_wand", "irons_spellbooks:blank_rune", "aquamirae:abyssal_tiara", "born_in_chaos_v1:soul_strider", "minecraft:chorus_fruit"],
            result: "fiomcraft_engine:potion_fool_4"
        },
        "fool_3": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ender_pearl",
            ingredients: ["irons_spellbooks:scroll_forge", "alexscaves:telecore", "cataclysm:witherite_ingot", "iceandfire:dread_shard", "goety:unholy_blood", "tetra:pristine_lapis", "artifacts:super_magnet", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_fool_3"
        },
        "fool_2": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ender_pearl",
            ingredients: ["cataclysm:cursium_ingot", "iceandfire:dragonbone", "alexscaves:volcanic_core", "irons_spellbooks:divine_pearl", "goety:howling_soul", "aquamirae:abyssal_amethyst", "mowziesmobs:wrought_helmet", "minecraft:totem_of_undying", "minecraft:enchanted_golden_apple"],
            result: "fiomcraft_engine:potion_fool_2"
        },
        "fool_1": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ender_pearl",
            ingredients: ["tetra:modular_greatsword", "cataclysm:wither_assault_shoulder_weapon", "iceandfire:dragon_skull_fire", "alexscaves:fissile_core", "irons_spellbooks:tarnished_helmet", "goety:dark_wand", "tetra:pristine_diamond", "minecraft:recovery_compass", "minecraft:dragon_breath", "minecraft:beacon"],
            result: "fiomcraft_engine:potion_fool_1"
        },
        "fool_0": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ender_pearl",
            ingredients: ["tetra:modular_double", "cataclysm:enderite_block", "tetra:modular_sword", "alexscaves:tremorzilla_egg", "irons_spellbooks:wayward_compass", "goety:nether_staff", "mowziesmobs:umvuthana_mask_rage", "minecraft:dragon_egg", "minecraft:end_crystal", "minecraft:purpur_block", "minecraft:conduit"],
            result: "fiomcraft_engine:potion_fool_0"
        },
        "demoness_9": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:spider_eye",
            ingredients: ["tetra:modular_sword", "alexsmobs:centipede_leg"],
            result: "fiomcraft_engine:potion_demoness_9"
        },
        "demoness_8": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:spider_eye",
            ingredients: ["alexsmobs:komodo_spit", "goety:foul_berries", "minecraft:spider_eye"],
            result: "fiomcraft_engine:potion_demoness_8"
        },
        "demoness_7": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:spider_eye",
            ingredients: ["born_in_chaos_v1:spider_mandible", "irons_spellbooks:fire_upgrade_orb", "goety:magic_emerald", "minecraft:brewing_stand"],
            result: "fiomcraft_engine:potion_demoness_7"
        },
        "demoness_6": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:spider_eye",
            ingredients: ["iceandfire:gorgon_head", "irons_spellbooks:blood_upgrade_orb", "alexscaves:moth_dust", "aquamirae:fin", "minecraft:ghast_tear"],
            result: "fiomcraft_engine:potion_demoness_6"
        },
        "demoness_5": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:spider_eye",
            ingredients: ["cataclysm:ignitium_ingot", "iceandfire:fire_dragon_blood", "born_in_chaos_v1:pieceofdarkmetal", "goety:unholy_blood", "alexscaves:toxic_paste", "minecraft:poisonous_potato"],
            result: "fiomcraft_engine:potion_demoness_5"
        },
        "demoness_4": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:spider_eye",
            ingredients: ["tetra:modular_sword", "cataclysm:witherite_ingot", "iceandfire:dread_shard", "alexscaves:pure_darkness", "goety:dark_wand", "irons_spellbooks:evocation_upgrade_orb", "minecraft:wither_rose"],
            result: "fiomcraft_engine:potion_demoness_4"
        },
        "demoness_3": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:spider_eye",
            ingredients: ["cataclysm:abyssal_egg", "iceandfire:dragonscales_red", "born_in_chaos_v1:soul_strider", "goety:cursed_knight_chestplate", "alexscaves:vesper_wing", "irons_spellbooks:fire_rune", "tetra:pristine_diamond", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_demoness_3"
        },
        "demoness_2": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:spider_eye",
            ingredients: ["tetra:modular_greatsword", "iceandfire:dragonbone", "alexscaves:volcanic_core", "irons_spellbooks:divine_pearl", "goety:howling_soul", "aquamirae:abyssal_amethyst", "mowziesmobs:naga_fang", "tetra:pristine_emerald", "minecraft:totem_of_undying"],
            result: "fiomcraft_engine:potion_demoness_2"
        },
        "demoness_1": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:spider_eye",
            ingredients: ["cataclysm:bulwark_of_the_flame", "cataclysm:cursium_ingot", "iceandfire:dragon_skull_fire", "alexscaves:fissile_core", "irons_spellbooks:tarnished_helmet", "goety:dark_wand", "tetra:pristine_diamond", "minecraft:dragon_breath", "minecraft:crying_obsidian", "minecraft:beacon"],
            result: "fiomcraft_engine:potion_demoness_1"
        },
        "demoness_0": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:spider_eye",
            ingredients: ["tetra:modular_double", "cataclysm:ignitium_block", "tetra:modular_sword", "alexscaves:tremorzilla_egg", "irons_spellbooks:wayward_compass", "goety:nether_staff", "mowziesmobs:umvuthana_mask_rage", "minecraft:dragon_egg", "minecraft:end_crystal", "minecraft:enchanted_golden_apple", "minecraft:conduit"],
            result: "fiomcraft_engine:potion_demoness_0"
        },
        "hanged_man_9": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ink_sac",
            ingredients: ["minecraft:rotten_flesh", "alexsmobs:maggot"],
            result: "fiomcraft_engine:potion_hanged_man_9"
        },
        "hanged_man_8": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ink_sac",
            ingredients: ["born_in_chaos_v1:spiritual_dust", "goety:foul_berries", "minecraft:bone"],
            result: "fiomcraft_engine:potion_hanged_man_8"
        },
        "hanged_man_7": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ink_sac",
            ingredients: ["alexscaves:corrodent_teeth", "born_in_chaos_v1:pieceofdarkmetal", "iceandfire:troll_leather_forest", "minecraft:spider_eye"],
            result: "fiomcraft_engine:potion_hanged_man_7"
        },
        "hanged_man_6": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ink_sac",
            ingredients: ["born_in_chaos_v1:monster_flesh", "goety:dark_wand", "alexscaves:toxic_paste", "irons_spellbooks:blood_upgrade_orb", "minecraft:wither_rose"],
            result: "fiomcraft_engine:potion_hanged_man_6"
        },
        "hanged_man_5": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ink_sac",
            ingredients: ["goety:unholy_blood", "iceandfire:ectoplasm", "born_in_chaos_v1:spiritual_dust", "alexscaves:pure_darkness", "irons_spellbooks:ender_upgrade_orb", "minecraft:phantom_membrane"],
            result: "fiomcraft_engine:potion_hanged_man_5"
        },
        "hanged_man_4": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ink_sac",
            ingredients: ["cataclysm:witherite_ingot", "goety:cursed_knight_chestplate", "born_in_chaos_v1:lifestealer_bone", "tetra:modular_sword", "aquamirae:abyssal_tiara", "tetra:pristine_amethyst", "minecraft:obsidian"],
            result: "fiomcraft_engine:potion_hanged_man_4"
        },
        "hanged_man_3": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ink_sac",
            ingredients: ["cataclysm:wither_assault_shoulder_weapon", "iceandfire:dread_shard", "alexscaves:vesper_wing", "goety:dark_wand", "irons_spellbooks:blood_rune", "born_in_chaos_v1:soul_strider", "tetra:pristine_diamond", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_hanged_man_3"
        },
        "hanged_man_2": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ink_sac",
            ingredients: ["cataclysm:abyssal_egg", "iceandfire:gorgon_head", "alexscaves:volcanic_core", "goety:howling_soul", "irons_spellbooks:divine_pearl", "aquamirae:abyssal_amethyst", "mowziesmobs:wrought_helmet", "tetra:pristine_emerald", "minecraft:totem_of_undying"],
            result: "fiomcraft_engine:potion_hanged_man_2"
        },
        "hanged_man_1": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ink_sac",
            ingredients: ["tetra:modular_double", "cataclysm:cursium_ingot", "iceandfire:dragonbone", "alexscaves:fissile_core", "goety:dark_wand", "irons_spellbooks:tarnished_helmet", "tetra:pristine_diamond", "born_in_chaos_v1:corpse_maggot", "minecraft:dragon_breath", "minecraft:beacon"],
            result: "fiomcraft_engine:potion_hanged_man_1"
        },
        "hanged_man_0": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:ink_sac",
            ingredients: ["tetra:modular_double", "cataclysm:witherite_block", "tetra:modular_sword", "alexscaves:tremorzilla_egg", "irons_spellbooks:wayward_compass", "goety:nether_staff", "mowziesmobs:umvuthana_mask_rage", "minecraft:dragon_egg", "minecraft:end_crystal", "minecraft:crying_obsidian", "minecraft:conduit"],
            result: "fiomcraft_engine:potion_hanged_man_0"
        },
        "visionary_9": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:amethyst_shard",
            ingredients: ["minecraft:spyglass", "alexsmobs:farseer_arm"],
            result: "fiomcraft_engine:potion_visionary_9"
        },
        "visionary_8": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:amethyst_shard",
            ingredients: ["alexsmobs:cosmic_cod", "irons_spellbooks:arcane_essence", "minecraft:ender_pearl"],
            result: "fiomcraft_engine:potion_visionary_8"
        },
        "visionary_7": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:amethyst_shard",
            ingredients: ["irons_spellbooks:evocation_upgrade_orb", "goety:magic_emerald", "alexscaves:telecore", "minecraft:golden_apple"],
            result: "fiomcraft_engine:potion_visionary_7"
        },
        "visionary_6": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:amethyst_shard",
            ingredients: ["irons_spellbooks:lightning_upgrade_orb", "artifacts:villager_hat", "alexsmobs:mimic_octopus_bucket", "iceandfire:stymphalian_bird_feather", "minecraft:ghast_tear"],
            result: "fiomcraft_engine:potion_visionary_6"
        },
        "visionary_5": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:amethyst_shard",
            ingredients: ["cataclysm:cursium_ingot", "irons_spellbooks:ender_upgrade_orb", "alexscaves:pure_darkness", "goety:dark_wand", "born_in_chaos_v1:spiritual_dust", "minecraft:phantom_membrane"],
            result: "fiomcraft_engine:potion_visionary_5"
        },
        "visionary_4": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:amethyst_shard",
            ingredients: ["cataclysm:void_core", "iceandfire:lightning_dragon_blood", "alexscaves:moth_dust", "irons_spellbooks:blank_rune", "goety:pine_wood", "tetra:pristine_lapis", "minecraft:obsidian"],
            result: "fiomcraft_engine:potion_visionary_4"
        },
        "visionary_3": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:amethyst_shard",
            ingredients: ["irons_spellbooks:scroll_forge", "cataclysm:witherite_ingot", "iceandfire:dread_shard", "alexscaves:uranium", "goety:unholy_blood", "tetra:pristine_diamond", "artifacts:super_magnet", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_visionary_3"
        },
        "visionary_2": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:amethyst_shard",
            ingredients: ["cataclysm:wither_assault_shoulder_weapon", "iceandfire:dragonbone", "alexscaves:volcanic_core", "irons_spellbooks:divine_pearl", "goety:howling_soul", "aquamirae:abyssal_amethyst", "mowziesmobs:naga_fang", "tetra:pristine_emerald", "minecraft:totem_of_undying"],
            result: "fiomcraft_engine:potion_visionary_2"
        },
        "visionary_1": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:amethyst_shard",
            ingredients: ["tetra:modular_greatsword", "cataclysm:abyssal_egg", "iceandfire:dragon_skull_fire", "alexscaves:fissile_core", "irons_spellbooks:tarnished_helmet", "goety:dark_wand", "tetra:pristine_diamond", "minecraft:recovery_compass", "minecraft:dragon_breath", "minecraft:beacon"],
            result: "fiomcraft_engine:potion_visionary_1"
        },
        "visionary_0": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:amethyst_shard",
            ingredients: ["tetra:modular_double", "cataclysm:enderite_block", "tetra:modular_sword", "alexscaves:tremorzilla_egg", "irons_spellbooks:wayward_compass", "goety:nether_staff", "mowziesmobs:umvuthana_mask_rage", "minecraft:dragon_egg", "minecraft:end_crystal", "minecraft:enchanted_golden_apple", "minecraft:conduit"],
            result: "fiomcraft_engine:potion_visionary_0"
        },
        "white_tower_9": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:book",
            ingredients: ["minecraft:book", "ars_nouveau:source_gem"],
            result: "fiomcraft_engine:potion_white_tower_9"
        },
        "white_tower_8": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:book",
            ingredients: ["irons_spellbooks:scroll", "create:experience_nugget", "minecraft:bookshelf"],
            result: "fiomcraft_engine:potion_white_tower_8"
        },
        "white_tower_7": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:book",
            ingredients: ["alexscaves:notor_gizmo", "irons_spellbooks:holy_upgrade_orb", "goety:magic_emerald", "minecraft:spyglass"],
            result: "fiomcraft_engine:potion_white_tower_7"
        },
        "white_tower_6": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:book",
            ingredients: ["create:precision_mechanism", "ars_nouveau:source_jar", "irons_spellbooks:evocation_upgrade_orb", "alexscaves:magnetic_activator", "minecraft:enchanting_table"],
            result: "fiomcraft_engine:potion_white_tower_6"
        },
        "white_tower_5": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:book",
            ingredients: ["cataclysm:ignitium_ingot", "irons_spellbooks:scroll_forge", "irons_spellbooks:holy_rune", "iceandfire:silver_ingot", "alexscaves:telecore", "minecraft:lapis_block"],
            result: "fiomcraft_engine:potion_white_tower_5"
        },
        "white_tower_4": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:book",
            ingredients: ["cataclysm:witherite_ingot", "irons_spellbooks:blank_rune", "ars_nouveau:archmage_spell_book", "alexscaves:heavy_bone", "goety:dark_wand", "tetra:pristine_lapis", "minecraft:obsidian"],
            result: "fiomcraft_engine:potion_white_tower_4"
        },
        "white_tower_3": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:book",
            ingredients: ["cataclysm:void_core", "iceandfire:dragonbone", "alexscaves:uranium", "irons_spellbooks:holy_rune", "goety:unholy_blood", "tetra:pristine_diamond", "artifacts:super_magnet", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_white_tower_3"
        },
        "white_tower_2": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:book",
            ingredients: ["cataclysm:wither_assault_shoulder_weapon", "iceandfire:dread_shard", "alexscaves:volcanic_core", "irons_spellbooks:divine_pearl", "goety:howling_soul", "aquamirae:abyssal_amethyst", "mowziesmobs:wrought_helmet", "tetra:pristine_emerald", "minecraft:totem_of_undying"],
            result: "fiomcraft_engine:potion_white_tower_2"
        },
        "white_tower_1": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:book",
            ingredients: ["tetra:modular_greatsword", "cataclysm:cursium_ingot", "iceandfire:dragon_skull_fire", "alexscaves:fissile_core", "irons_spellbooks:tarnished_helmet", "goety:dark_wand", "tetra:pristine_diamond", "minecraft:recovery_compass", "minecraft:dragon_breath", "minecraft:beacon"],
            result: "fiomcraft_engine:potion_white_tower_1"
        },
        "white_tower_0": {
            base: "irons_spellbooks:common_ink",
            catalyst: "minecraft:book",
            ingredients: ["tetra:modular_double", "cataclysm:ignitium_block", "tetra:modular_sword", "alexscaves:tremorzilla_egg", "irons_spellbooks:wayward_compass", "goety:nether_staff", "mowziesmobs:umvuthana_mask_rage", "minecraft:dragon_egg", "minecraft:end_crystal", "minecraft:enchanted_golden_apple", "minecraft:conduit"],
            result: "fiomcraft_engine:potion_white_tower_0"
        },
        "twilight_9": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:raw_iron",
            ingredients: ["minecraft:iron_block", "tetra:geode"],
            result: "fiomcraft_engine:potion_twilight_9"
        },
        "twilight_8": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:raw_iron",
            ingredients: ["tetra:modular_greatsword", "alexsmobs:bear_fur", "born_in_chaos_v1:dark_metal_ingot"],
            result: "fiomcraft_engine:potion_twilight_8"
        },
        "twilight_7": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:raw_iron",
            ingredients: ["farmersdelight:skillet", "tetra:pristine_lapis", "iceandfire:silver_ingot", "irons_spellbooks:arcane_essence"],
            result: "fiomcraft_engine:potion_twilight_7"
        },
        "twilight_6": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:raw_iron",
            ingredients: ["mowziesmobs:wrought_helmet", "irons_spellbooks:holy_upgrade_orb", "irons_spellbooks:holy_rune", "minecraft:golden_apple", "alexscaves:limestone"],
            result: "fiomcraft_engine:potion_twilight_6"
        },
        "twilight_5": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:raw_iron",
            ingredients: ["artifacts:steadfast_spikes", "tetra:pristine_diamond", "alexscaves:heavy_bone", "iceandfire:stymphalian_bird_feather", "born_in_chaos_v1:pieceofdarkmetal", "minecraft:obsidian"],
            result: "fiomcraft_engine:potion_twilight_5"
        },
        "twilight_4": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:raw_iron",
            ingredients: ["tetra:modular_sword", "goety:dark_wand", "alexscaves:pure_darkness", "born_in_chaos_v1:soul_strider", "irons_spellbooks:blood_upgrade_orb", "tetra:dragon_sinew", "cataclysm:remnant_skull"],
            result: "fiomcraft_engine:potion_twilight_4"
        },
        "twilight_3": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:raw_iron",
            ingredients: ["iceandfire:armor_silver_chestplate", "mowziesmobs:ice_crystal", "alexscaves:uranium", "cataclysm:witherite_ingot", "irons_spellbooks:divine_pearl", "tetra:pristine_emerald", "artifacts:villager_hat", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_twilight_3"
        },
        "twilight_2": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:raw_iron",
            ingredients: ["cataclysm:wither_assault_shoulder_weapon", "cataclysm:bulwark_of_the_flame", "iceandfire:dragonbone", "alexscaves:tectonic_shard", "goety:cursed_knight_chestplate", "irons_spellbooks:tarnished_helmet", "tetra:pristine_amethyst", "minecraft:beacon", "cataclysm:ignitium_ingot"],
            result: "fiomcraft_engine:potion_twilight_2"
        },
        "twilight_1": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:raw_iron",
            ingredients: ["tetra:modular_greatsword", "iceandfire:dragon_skull_fire", "cataclysm:void_core", "alexscaves:tremorzilla_egg", "mowziesmobs:umvuthana_mask_rage", "irons_spellbooks:scroll_forge", "goety:howling_soul", "cataclysm:cursium_ingot", "minecraft:netherite_block", "minecraft:enchanted_golden_apple"],
            result: "fiomcraft_engine:potion_twilight_1"
        },
        "twilight_0": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:raw_iron",
            ingredients: ["tetra:modular_double", "tetra:modular_double", "tetra:modular_sword", "tetra:modular_sword", "tetra:modular_sword", "alexscaves:fissile_core", "cataclysm:ignitium_block", "cataclysm:witherite_block", "cataclysm:enderite_block", "irons_spellbooks:wayward_compass", "minecraft:dragon_egg"],
            result: "fiomcraft_engine:potion_twilight_0"
        },
        "chained_9": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:chain",
            ingredients: ["minecraft:chain", "quark:iron_rod"],
            result: "fiomcraft_engine:potion_chained_9"
        },
        "chained_8": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:chain",
            ingredients: ["born_in_chaos_v1:spiritual_dust", "alexsmobs:komodo_spit", "goety:foul_berries"],
            result: "fiomcraft_engine:potion_chained_8"
        },
        "chained_7": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:chain",
            ingredients: ["alexsmobs:bear_fur", "iceandfire:troll_leather_forest", "born_in_chaos_v1:pieceofdarkmetal", "minecraft:mutton"],
            result: "fiomcraft_engine:potion_chained_7"
        },
        "chained_6": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:chain",
            ingredients: ["born_in_chaos_v1:monster_flesh", "born_in_chaos_v1:corpse_maggot", "alexscaves:toxic_paste", "goety:dark_wand", "minecraft:poisonous_potato"],
            result: "fiomcraft_engine:potion_chained_6"
        },
        "chained_5": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:chain",
            ingredients: ["born_in_chaos_v1:spiritual_dust", "iceandfire:ectoplasm", "goety:ectoplasm", "irons_spellbooks:blood_upgrade_orb", "minecraft:phantom_membrane", "alexscaves:moth_dust"],
            result: "fiomcraft_engine:potion_chained_5"
        },
        "chained_4": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:chain",
            ingredients: ["supplementaries:timber_frame", "artifacts:super_magnet", "alexscaves:corrodent_teeth", "goety:pine_wood", "tetra:pristine_amethyst", "born_in_chaos_v1:lifestealer_bone", "minecraft:cobweb"],
            result: "fiomcraft_engine:potion_chained_4"
        },
        "chained_3": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:chain",
            ingredients: ["alexscaves:pure_darkness", "goety:unholy_blood", "cataclysm:witherite_ingot", "iceandfire:dread_shard", "born_in_chaos_v1:dark_metal_ingot", "irons_spellbooks:evocation_upgrade_orb", "minecraft:sculk_shrieker", "minecraft:echo_shard"],
            result: "fiomcraft_engine:potion_chained_3"
        },
        "chained_2": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:chain",
            ingredients: ["tetra:modular_sword", "cataclysm:abyssal_egg", "goety:howling_soul", "cataclysm:wither_assault_shoulder_weapon", "born_in_chaos_v1:soul_strider", "alexscaves:vesper_wing", "irons_spellbooks:blank_rune", "minecraft:wither_rose", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_chained_2"
        },
        "chained_1": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:chain",
            ingredients: ["tetra:modular_double", "alexscaves:fissile_core", "iceandfire:gorgon_head", "goety:cursed_knight_chestplate", "cataclysm:void_core", "cataclysm:cursium_ingot", "born_in_chaos_v1:corpse_maggot", "irons_spellbooks:wayward_compass", "minecraft:dragon_head", "minecraft:dragon_breath"],
            result: "fiomcraft_engine:potion_chained_1"
        },
        "chained_0": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:chain",
            ingredients: ["tetra:modular_greatsword", "alexscaves:tremorzilla_egg", "tetra:modular_sword", "goety:dark_wand", "cataclysm:abyssal_sacrifice", "cataclysm:ignitium_block", "irons_spellbooks:blood_rune", "tetra:pristine_diamond", "minecraft:netherite_block", "minecraft:dragon_egg", "minecraft:beacon"],
            result: "fiomcraft_engine:potion_chained_0"
        },
        "red_priest_9": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:blaze_powder",
            ingredients: ["tetra:modular_bow", "alexsmobs:animal_dictionary"],
            result: "fiomcraft_engine:potion_red_priest_9"
        },
        "red_priest_8": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:blaze_powder",
            ingredients: ["supplementaries:bomb", "alexsmobs:mosquito_larva", "minecraft:tnt"],
            result: "fiomcraft_engine:potion_red_priest_8"
        },
        "red_priest_7": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:blaze_powder",
            ingredients: ["irons_spellbooks:fire_upgrade_orb", "iceandfire:fire_dragon_blood", "alexscaves:cinder_brick", "minecraft:fire_charge"],
            result: "fiomcraft_engine:potion_red_priest_7"
        },
        "red_priest_6": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:blaze_powder",
            ingredients: ["supplementaries:key", "create:brass_casing", "create:electron_tube", "artifacts:whoopee_cushion", "minecraft:observer"],
            result: "fiomcraft_engine:potion_red_priest_6"
        },
        "red_priest_5": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:blaze_powder",
            ingredients: ["tetra:modular_double", "born_in_chaos_v1:soul_strider", "iceandfire:witherbone", "cataclysm:witherite_ingot", "alexscaves:cycad", "minecraft:wither_skeleton_skull"],
            result: "fiomcraft_engine:potion_red_priest_5"
        },
        "red_priest_4": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:blaze_powder",
            ingredients: ["tetra:pristine_amethyst", "create:crushing_wheel", "cataclysm:ignitium_ingot", "iceandfire:dragonscales_red", "born_in_chaos_v1:dark_metal_ingot", "irons_spellbooks:fire_rune", "minecraft:anvil"],
            result: "fiomcraft_engine:potion_red_priest_4"
        },
        "red_priest_3": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:blaze_powder",
            ingredients: ["cataclysm:ignitium_upgrade_smithing_template", "irons_spellbooks:tarnished_helmet", "artifacts:fire_gauntlet", "alexscaves:volcanic_core", "goety:illager_wand", "mowziesmobs:wrought_helmet", "tetra:dragon_sinew", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_red_priest_3"
        },
        "red_priest_2": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:blaze_powder",
            ingredients: ["irons_spellbooks:lightning_upgrade_orb", "cataclysm:void_core", "iceandfire:lightning_dragon_blood", "alexscaves:telecore", "mowziesmobs:naga_fang", "goety:wind_staff", "aquamirae:abyssal_amethyst", "minecraft:lightning_rod", "minecraft:blue_ice"],
            result: "fiomcraft_engine:potion_red_priest_2"
        },
        "red_priest_1": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:blaze_powder",
            ingredients: ["cataclysm:bulwark_of_the_flame", "iceandfire:dragonforge_fire_core", "alexscaves:tremorzilla_egg", "cataclysm:ignitium_block", "mowziesmobs:umvuthana_mask_rage", "irons_spellbooks:lightning_rune", "tetra:pristine_diamond", "goety:howling_soul", "minecraft:emerald_block", "minecraft:diamond_block"],
            result: "fiomcraft_engine:potion_red_priest_1"
        },
        "red_priest_0": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:blaze_powder",
            ingredients: ["tetra:modular_greatsword", "tetra:modular_double", "iceandfire:fire_dragon_heart", "tetra:modular_sword", "alexscaves:tremorzilla_egg", "irons_spellbooks:wayward_compass", "goety:nether_staff", "cataclysm:witherite_block", "cataclysm:enderite_block", "minecraft:dragon_egg", "minecraft:beacon"],
            result: "fiomcraft_engine:potion_red_priest_0"
        },
        "abyss_9": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:fermented_spider_eye",
            ingredients: ["minecraft:gold_nugget", "alexsmobs:cockroach_wing"],
            result: "fiomcraft_engine:potion_abyss_9"
        },
        "abyss_8": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:fermented_spider_eye",
            ingredients: ["alexsmobs:rattlesnake_rattle", "iceandfire:troll_tusk", "minecraft:rotten_flesh"],
            result: "fiomcraft_engine:potion_abyss_8"
        },
        "abyss_7": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:fermented_spider_eye",
            ingredients: ["born_in_chaos_v1:pieceofdarkmetal", "alexscaves:toxic_paste", "goety:unholy_blood", "minecraft:fermented_spider_eye"],
            result: "fiomcraft_engine:potion_abyss_7"
        },
        "abyss_6": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:fermented_spider_eye",
            ingredients: ["irons_spellbooks:blood_upgrade_orb", "alexscaves:radgill_bucket", "iceandfire:fire_dragon_blood", "born_in_chaos_v1:spiritual_dust", "minecraft:ghast_tear"],
            result: "fiomcraft_engine:potion_abyss_6"
        },
        "abyss_5": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:fermented_spider_eye",
            ingredients: ["cataclysm:witherite_ingot", "goety:dark_wand", "alexscaves:pure_darkness", "born_in_chaos_v1:soul_strider", "tetra:modular_sword", "minecraft:gold_block"],
            result: "fiomcraft_engine:potion_abyss_5"
        },
        "abyss_4": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:fermented_spider_eye",
            ingredients: ["cataclysm:abyssal_egg", "iceandfire:dread_shard", "born_in_chaos_v1:dark_metal_ingot", "goety:cursed_knight_chestplate", "alexscaves:vesper_wing", "irons_spellbooks:blood_rune", "minecraft:obsidian"],
            result: "fiomcraft_engine:potion_abyss_4"
        },
        "abyss_3": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:fermented_spider_eye",
            ingredients: ["cataclysm:void_core", "iceandfire:gorgon_head", "born_in_chaos_v1:lifestealer_bone", "aquamirae:abyssal_tiara", "alexscaves:corrodent_teeth", "goety:howling_soul", "tetra:pristine_emerald", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_abyss_3"
        },
        "abyss_2": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:fermented_spider_eye",
            ingredients: ["tetra:modular_double", "cataclysm:wither_assault_shoulder_weapon", "tetra:modular_sword", "alexscaves:fissile_core", "goety:unholy_blood", "irons_spellbooks:evocation_upgrade_orb", "mowziesmobs:wrought_helmet", "minecraft:redstone_block", "minecraft:crimson_roots"],
            result: "fiomcraft_engine:potion_abyss_2"
        },
        "abyss_1": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:fermented_spider_eye",
            ingredients: ["cataclysm:abyssal_egg", "iceandfire:dragon_skull_fire", "alexscaves:tremorzilla_egg", "cataclysm:cursium_ingot", "born_in_chaos_v1:corpse_maggot", "irons_spellbooks:divine_pearl", "goety:dark_wand", "tetra:pristine_diamond", "minecraft:podzol", "minecraft:soul_sand"],
            result: "fiomcraft_engine:potion_abyss_1"
        },
        "abyss_0": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:fermented_spider_eye",
            ingredients: ["tetra:modular_double", "cataclysm:ignitium_block", "cataclysm:witherite_block", "tetra:modular_sword", "irons_spellbooks:wayward_compass", "tetra:modular_polearm", "mowziesmobs:umvuthana_mask_rage", "goety:nether_staff", "minecraft:dragon_egg", "minecraft:beacon", "minecraft:crying_obsidian"],
            result: "fiomcraft_engine:potion_abyss_0"
        },
        "justiciar_9": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:gold_ingot",
            ingredients: ["minecraft:book", "tetra:geode"],
            result: "fiomcraft_engine:potion_justiciar_9"
        },
        "justiciar_8": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:gold_ingot",
            ingredients: ["create:andesite_alloy", "alexsmobs:moose_antler", "minecraft:iron_chestplate"],
            result: "fiomcraft_engine:potion_justiciar_8"
        },
        "justiciar_7": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:gold_ingot",
            ingredients: ["create:precision_mechanism", "tetra:pristine_lapis", "iceandfire:silver_ingot", "minecraft:chain"],
            result: "fiomcraft_engine:potion_justiciar_7"
        },
        "justiciar_6": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:gold_ingot",
            ingredients: ["alexscaves:magnetic_activator", "irons_spellbooks:holy_upgrade_orb", "mowziesmobs:wrought_helmet", "tetra:pristine_diamond", "minecraft:anvil"],
            result: "fiomcraft_engine:potion_justiciar_6"
        },
        "justiciar_5": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:gold_ingot",
            ingredients: ["cataclysm:ignitium_ingot", "alexscaves:heavy_bone", "iceandfire:stymphalian_bird_feather", "irons_spellbooks:holy_rune", "create:crushing_wheel", "minecraft:golden_chestplate"],
            result: "fiomcraft_engine:potion_justiciar_5"
        },
        "justiciar_4": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:gold_ingot",
            ingredients: ["irons_spellbooks:scroll_forge", "cataclysm:witherite_ingot", "alexscaves:telecore", "tetra:dragon_sinew", "artifacts:steadfast_spikes", "tetra:modular_sword", "minecraft:enchanting_table"],
            result: "fiomcraft_engine:potion_justiciar_4"
        },
        "justiciar_3": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:gold_ingot",
            ingredients: ["cataclysm:wither_assault_shoulder_weapon", "iceandfire:dragonbone", "alexscaves:uranium", "irons_spellbooks:lightning_upgrade_orb", "mowziesmobs:naga_fang", "tetra:pristine_emerald", "create:brass_casing", "minecraft:tnt"],
            result: "fiomcraft_engine:potion_justiciar_3"
        },
        "justiciar_2": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:gold_ingot",
            ingredients: ["cataclysm:bulwark_of_the_flame", "cataclysm:void_core", "alexscaves:tectonic_shard", "iceandfire:lightning_dragon_blood", "irons_spellbooks:tarnished_helmet", "goety:wind_staff", "create:electron_tube", "minecraft:recovery_compass", "minecraft:daylight_detector"],
            result: "fiomcraft_engine:potion_justiciar_2"
        },
        "justiciar_1": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:gold_ingot",
            ingredients: ["tetra:modular_greatsword", "cataclysm:cursium_ingot", "iceandfire:dragon_skull_fire", "alexscaves:fissile_core", "mowziesmobs:umvuthana_mask_rage", "irons_spellbooks:divine_pearl", "goety:howling_soul", "tetra:pristine_diamond", "minecraft:nether_star", "minecraft:emerald_block"],
            result: "fiomcraft_engine:potion_justiciar_1"
        },
        "justiciar_0": {
            base: "irons_spellbooks:blood_vial",
            catalyst: "minecraft:gold_ingot",
            ingredients: ["tetra:modular_double", "tetra:modular_double", "cataclysm:ignitium_block", "tetra:modular_sword", "alexscaves:tremorzilla_egg", "irons_spellbooks:wayward_compass", "goety:nether_staff", "minecraft:dragon_egg", "minecraft:beacon", "minecraft:conduit", "minecraft:jigsaw"],
            result: "fiomcraft_engine:potion_justiciar_0"
        },
        "mother_9": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:apple",
            ingredients: ["minecraft:wheat_seeds", "ars_nouveau:earth_essence"],
            result: "fiomcraft_engine:potion_mother_9"
        },
        "mother_8": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:apple",
            ingredients: ["natures_spirit:lotus_flower", "alexsmobs:leafcutter_ant_pupa", "minecraft:golden_carrot"],
            result: "fiomcraft_engine:potion_mother_8"
        },
        "mother_7": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:apple",
            ingredients: ["mowziesmobs:foliaath_seed", "irons_spellbooks:nature_upgrade_orb", "goety:magic_emerald", "minecraft:melon"],
            result: "fiomcraft_engine:potion_mother_7"
        },
        "mother_6": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:apple",
            ingredients: ["alexscaves:tree_star", "ars_nouveau:source_gem", "irons_spellbooks:holy_upgrade_orb", "alexsmobs:bear_fur", "minecraft:glistering_melon_slice"],
            result: "fiomcraft_engine:potion_mother_6"
        },
        "mother_5": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:apple",
            ingredients: ["iceandfire:stymphalian_bird_feather", "goety:totem_of_roots", "irons_spellbooks:nature_rune", "alexscaves:moth_dust", "born_in_chaos_v1:spider_mandible", "minecraft:oak_sapling"],
            result: "fiomcraft_engine:potion_mother_5"
        },
        "mother_4": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:apple",
            ingredients: ["cataclysm:ignitium_ingot", "irons_spellbooks:scroll_forge", "ars_nouveau:archmage_spell_book", "alexscaves:toxic_paste", "irons_spellbooks:holy_rune", "tetra:pristine_emerald", "minecraft:brewing_stand"],
            result: "fiomcraft_engine:potion_mother_4"
        },
        "mother_3": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:apple",
            ingredients: ["cataclysm:witherite_ingot", "iceandfire:dragonbone", "alexscaves:uranium", "irons_spellbooks:blank_rune", "goety:unholy_blood", "tetra:pristine_diamond", "artifacts:super_magnet", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_mother_3"
        },
        "mother_2": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:apple",
            ingredients: ["cataclysm:wither_assault_shoulder_weapon", "iceandfire:dread_shard", "alexscaves:volcanic_core", "irons_spellbooks:divine_pearl", "goety:howling_soul", "aquamirae:abyssal_amethyst", "mowziesmobs:wrought_helmet", "tetra:pristine_lapis", "minecraft:totem_of_undying"],
            result: "fiomcraft_engine:potion_mother_2"
        },
        "mother_1": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:apple",
            ingredients: ["tetra:modular_greatsword", "cataclysm:cursium_ingot", "iceandfire:dragon_skull_fire", "alexscaves:fissile_core", "irons_spellbooks:tarnished_helmet", "goety:dark_wand", "tetra:pristine_diamond", "minecraft:recovery_compass", "minecraft:dragon_breath", "minecraft:beacon"],
            result: "fiomcraft_engine:potion_mother_1"
        },
        "mother_0": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:apple",
            ingredients: ["tetra:modular_double", "tetra:modular_double", "tetra:modular_sword", "alexscaves:tremorzilla_egg", "irons_spellbooks:wayward_compass", "goety:nether_staff", "mowziesmobs:umvuthana_mask_rage", "minecraft:dragon_egg", "minecraft:end_crystal", "minecraft:enchanted_golden_apple", "minecraft:conduit"],
            result: "fiomcraft_engine:potion_mother_0"
        },
        "sun_9": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:glowstone_dust",
            ingredients: ["minecraft:note_block", "irons_spellbooks:arcane_essence"],
            result: "fiomcraft_engine:potion_sun_9"
        },
        "sun_8": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:glowstone_dust",
            ingredients: ["irons_spellbooks:holy_upgrade_orb", "minecraft:glowstone_dust", "minecraft:gold_ingot"],
            result: "fiomcraft_engine:potion_sun_8"
        },
        "sun_7": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:glowstone_dust",
            ingredients: ["mowziesmobs:sol_visage", "irons_spellbooks:fire_upgrade_orb", "irons_spellbooks:holy_rune", "minecraft:blaze_powder"],
            result: "fiomcraft_engine:potion_sun_7"
        },
        "sun_6": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:glowstone_dust",
            ingredients: ["cataclysm:ignitium_ingot", "alexscaves:dinosaur_nugget", "irons_spellbooks:holy_rune", "create:brass_casing", "minecraft:golden_apple"],
            result: "fiomcraft_engine:potion_sun_6"
        },
        "sun_5": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:glowstone_dust",
            ingredients: ["iceandfire:fire_dragon_blood", "irons_spellbooks:fire_rune", "alexscaves:cinder_brick", "goety:magic_emerald", "tetra:geode", "minecraft:magma_cream"],
            result: "fiomcraft_engine:potion_sun_5"
        },
        "sun_4": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:glowstone_dust",
            ingredients: ["tetra:modular_greatsword", "irons_spellbooks:scroll_forge", "iceandfire:dragonscales_red", "alexscaves:volcanic_core", "goety:illager_wand", "tetra:pristine_diamond", "minecraft:obsidian"],
            result: "fiomcraft_engine:potion_sun_4"
        },
        "sun_3": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:glowstone_dust",
            ingredients: ["cataclysm:bulwark_of_the_flame", "iceandfire:dragonbone", "alexscaves:uranium", "irons_spellbooks:blank_rune", "goety:unholy_blood", "tetra:pristine_emerald", "artifacts:fire_gauntlet", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_sun_3"
        },
        "sun_2": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:glowstone_dust",
            ingredients: ["cataclysm:wither_assault_shoulder_weapon", "iceandfire:dread_shard", "alexscaves:telecore", "irons_spellbooks:divine_pearl", "goety:howling_soul", "aquamirae:abyssal_amethyst", "mowziesmobs:wrought_helmet", "tetra:pristine_lapis", "minecraft:totem_of_undying"],
            result: "fiomcraft_engine:potion_sun_2"
        },
        "sun_1": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:glowstone_dust",
            ingredients: ["cataclysm:ignitium_block", "cataclysm:cursium_ingot", "iceandfire:dragon_skull_fire", "alexscaves:fissile_core", "irons_spellbooks:tarnished_helmet", "goety:dark_wand", "tetra:pristine_diamond", "minecraft:recovery_compass", "minecraft:dragon_breath", "minecraft:beacon"],
            result: "fiomcraft_engine:potion_sun_1"
        },
        "sun_0": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:glowstone_dust",
            ingredients: ["tetra:modular_double", "tetra:modular_double", "tetra:modular_sword", "alexscaves:tremorzilla_egg", "irons_spellbooks:wayward_compass", "goety:nether_staff", "mowziesmobs:umvuthana_mask_rage", "minecraft:dragon_egg", "minecraft:end_crystal", "minecraft:enchanted_golden_apple", "minecraft:conduit"],
            result: "fiomcraft_engine:potion_sun_0"
        },
        "darkness_9": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:phantom_membrane",
            ingredients: ["minecraft:phantom_membrane", "alexscaves:pure_darkness"],
            result: "fiomcraft_engine:potion_darkness_9"
        },
        "darkness_8": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:phantom_membrane",
            ingredients: ["aquamirae:abyssal_amethyst", "irons_spellbooks:ice_upgrade_orb", "minecraft:feather"],
            result: "fiomcraft_engine:potion_darkness_8"
        },
        "darkness_7": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:phantom_membrane",
            ingredients: ["mowziesmobs:ice_crystal", "irons_spellbooks:ender_upgrade_orb", "goety:dark_wand", "minecraft:ender_pearl"],
            result: "fiomcraft_engine:potion_darkness_7"
        },
        "darkness_6": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:phantom_membrane",
            ingredients: ["iceandfire:ice_dragon_blood", "born_in_chaos_v1:spiritual_dust", "alexscaves:moth_dust", "irons_spellbooks:ice_rune", "minecraft:ghast_tear"],
            result: "fiomcraft_engine:potion_darkness_6"
        },
        "darkness_5": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:phantom_membrane",
            ingredients: ["cataclysm:void_core", "goety:pine_wood", "born_in_chaos_v1:spiritual_dust", "iceandfire:ectoplasm", "tetra:pristine_diamond", "minecraft:soul_sand"],
            result: "fiomcraft_engine:potion_darkness_5"
        },
        "darkness_4": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:phantom_membrane",
            ingredients: ["cataclysm:witherite_ingot", "irons_spellbooks:scroll_forge", "alexscaves:telecore", "goety:unholy_blood", "born_in_chaos_v1:pieceofdarkmetal", "tetra:pristine_lapis", "minecraft:obsidian"],
            result: "fiomcraft_engine:potion_darkness_4"
        },
        "darkness_3": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:phantom_membrane",
            ingredients: ["cataclysm:abyssal_egg", "iceandfire:dread_shard", "alexscaves:uranium", "irons_spellbooks:blank_rune", "goety:dark_wand", "tetra:pristine_emerald", "artifacts:super_magnet", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_darkness_3"
        },
        "darkness_2": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:phantom_membrane",
            ingredients: ["cataclysm:wither_assault_shoulder_weapon", "iceandfire:dragonbone", "alexscaves:volcanic_core", "irons_spellbooks:divine_pearl", "goety:howling_soul", "aquamirae:abyssal_tiara", "mowziesmobs:wrought_helmet", "tetra:pristine_amethyst", "minecraft:totem_of_undying"],
            result: "fiomcraft_engine:potion_darkness_2"
        },
        "darkness_1": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:phantom_membrane",
            ingredients: ["cataclysm:cursium_ingot", "tetra:modular_double", "iceandfire:dragon_skull_fire", "alexscaves:fissile_core", "irons_spellbooks:tarnished_helmet", "goety:dark_wand", "tetra:pristine_diamond", "minecraft:recovery_compass", "minecraft:dragon_breath", "minecraft:beacon"],
            result: "fiomcraft_engine:potion_darkness_1"
        },
        "darkness_0": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:phantom_membrane",
            ingredients: ["tetra:modular_double", "cataclysm:witherite_block", "tetra:modular_sword", "alexscaves:tremorzilla_egg", "irons_spellbooks:wayward_compass", "goety:nether_staff", "mowziesmobs:umvuthana_mask_rage", "minecraft:dragon_egg", "minecraft:end_crystal", "minecraft:enchanted_golden_apple", "minecraft:conduit"],
            result: "fiomcraft_engine:potion_darkness_0"
        },
        "tyrant_9": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:lapis_lazuli",
            ingredients: ["minecraft:nautilus_shell", "aquamirae:fin"],
            result: "fiomcraft_engine:potion_tyrant_9"
        },
        "tyrant_8": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:lapis_lazuli",
            ingredients: ["alexscaves:gazing_pearl", "irons_spellbooks:lightning_upgrade_orb", "minecraft:prismarine_shard"],
            result: "fiomcraft_engine:potion_tyrant_8"
        },
        "tyrant_7": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:lapis_lazuli",
            ingredients: ["tetra:modular_polearm", "irons_spellbooks:evocation_upgrade_orb", "goety:wind_staff", "tetra:modular_polearm"],
            result: "fiomcraft_engine:potion_tyrant_7"
        },
        "tyrant_6": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:lapis_lazuli",
            ingredients: ["iceandfire:sea_serpent_fang", "mowziesmobs:naga_fang", "irons_spellbooks:lightning_rune", "alexscaves:radgill_bucket", "minecraft:heart_of_the_sea"],
            result: "fiomcraft_engine:potion_tyrant_6"
        },
        "tyrant_5": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:lapis_lazuli",
            ingredients: ["cataclysm:abyssal_egg", "iceandfire:lightning_dragon_blood", "alexsmobs:cachalot_whale_tooth", "goety:magic_emerald", "tetra:pristine_diamond", "minecraft:sponge"],
            result: "fiomcraft_engine:potion_tyrant_5"
        },
        "tyrant_4": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:lapis_lazuli",
            ingredients: ["cataclysm:abyssal_egg", "irons_spellbooks:scroll_forge", "aquamirae:abyssal_tiara", "alexscaves:telecore", "goety:unholy_blood", "tetra:pristine_lapis", "minecraft:obsidian"],
            result: "fiomcraft_engine:potion_tyrant_4"
        },
        "tyrant_3": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:lapis_lazuli",
            ingredients: ["cataclysm:void_core", "iceandfire:dragonbone", "alexscaves:uranium", "irons_spellbooks:blank_rune", "goety:illager_wand", "tetra:pristine_emerald", "artifacts:super_magnet", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_tyrant_3"
        },
        "tyrant_2": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:lapis_lazuli",
            ingredients: ["cataclysm:wither_assault_shoulder_weapon", "iceandfire:dread_shard", "alexscaves:volcanic_core", "irons_spellbooks:divine_pearl", "goety:howling_soul", "aquamirae:abyssal_amethyst", "mowziesmobs:wrought_helmet", "tetra:pristine_amethyst", "minecraft:totem_of_undying"],
            result: "fiomcraft_engine:potion_tyrant_2"
        },
        "tyrant_1": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:lapis_lazuli",
            ingredients: ["cataclysm:cursium_ingot", "cataclysm:bulwark_of_the_flame", "iceandfire:dragon_skull_fire", "alexscaves:fissile_core", "irons_spellbooks:tarnished_helmet", "goety:dark_wand", "tetra:pristine_diamond", "minecraft:recovery_compass", "minecraft:dragon_breath", "minecraft:beacon"],
            result: "fiomcraft_engine:potion_tyrant_1"
        },
        "tyrant_0": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:lapis_lazuli",
            ingredients: ["tetra:modular_double", "cataclysm:ignitium_block", "tetra:modular_sword", "alexscaves:tremorzilla_egg", "irons_spellbooks:wayward_compass", "goety:nether_staff", "mowziesmobs:umvuthana_mask_rage", "minecraft:dragon_egg", "minecraft:end_crystal", "minecraft:enchanted_golden_apple", "minecraft:conduit"],
            result: "fiomcraft_engine:potion_tyrant_0"
        },
        "death_9": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:soul_sand",
            ingredients: ["minecraft:bone", "born_in_chaos_v1:monster_flesh"],
            result: "fiomcraft_engine:potion_death_9"
        },
        "death_8": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:soul_sand",
            ingredients: ["goety:unholy_blood", "irons_spellbooks:blood_upgrade_orb", "minecraft:soul_sand"],
            result: "fiomcraft_engine:potion_death_8"
        },
        "death_7": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:soul_sand",
            ingredients: ["born_in_chaos_v1:spiritual_dust", "iceandfire:ectoplasm", "goety:dark_wand", "minecraft:ghast_tear"],
            result: "fiomcraft_engine:potion_death_7"
        },
        "death_6": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:soul_sand",
            ingredients: ["born_in_chaos_v1:lifestealer_bone", "goety:cursed_knight_chestplate", "irons_spellbooks:blood_rune", "alexscaves:pure_darkness", "minecraft:wither_skeleton_skull"],
            result: "fiomcraft_engine:potion_death_6"
        },
        "death_5": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:soul_sand",
            ingredients: ["iceandfire:dread_shard", "goety:pine_wood", "cataclysm:witherite_ingot", "alexscaves:vesper_wing", "tetra:pristine_diamond", "minecraft:obsidian"],
            result: "fiomcraft_engine:potion_death_5"
        },
        "death_4": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:soul_sand",
            ingredients: ["cataclysm:remnant_skull", "irons_spellbooks:scroll_forge", "tetra:modular_sword", "born_in_chaos_v1:soul_strider", "goety:dark_wand", "tetra:pristine_lapis", "minecraft:totem_of_undying"],
            result: "fiomcraft_engine:potion_death_4"
        },
        "death_3": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:soul_sand",
            ingredients: ["cataclysm:void_core", "iceandfire:dragonbone", "alexscaves:uranium", "irons_spellbooks:blank_rune", "goety:illager_wand", "tetra:pristine_emerald", "artifacts:super_magnet", "minecraft:nether_star"],
            result: "fiomcraft_engine:potion_death_3"
        },
        "death_2": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:soul_sand",
            ingredients: ["cataclysm:wither_assault_shoulder_weapon", "iceandfire:gorgon_head", "alexscaves:volcanic_core", "irons_spellbooks:divine_pearl", "goety:howling_soul", "aquamirae:abyssal_amethyst", "mowziesmobs:wrought_helmet", "tetra:pristine_amethyst", "minecraft:enchanted_golden_apple"],
            result: "fiomcraft_engine:potion_death_2"
        },
        "death_1": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:soul_sand",
            ingredients: ["cataclysm:cursium_ingot", "tetra:modular_double", "iceandfire:dragon_skull_fire", "alexscaves:fissile_core", "irons_spellbooks:tarnished_helmet", "goety:dark_wand", "tetra:pristine_diamond", "minecraft:recovery_compass", "minecraft:dragon_breath", "minecraft:beacon"],
            result: "fiomcraft_engine:potion_death_1"
        },
        "death_0": {
            base: "irons_spellbooks:arcane_essence",
            catalyst: "minecraft:soul_sand",
            ingredients: ["tetra:modular_double", "cataclysm:witherite_block", "tetra:modular_sword", "alexscaves:tremorzilla_egg", "irons_spellbooks:wayward_compass", "goety:nether_staff", "mowziesmobs:umvuthana_mask_rage", "minecraft:dragon_egg", "minecraft:end_crystal", "minecraft:crying_obsidian", "minecraft:conduit"],
            result: "fiomcraft_engine:potion_death_0"
        }
};

// --- DYNAMIC PATHWAY VISUALS & SOUNDS ---
const PATHWAY_FX = {
    "twilight": { particle: 'minecraft:cloud', sound: 'minecraft:block.anvil.place', color: 'gold' },
    "chained": { particle: 'minecraft:crimson_spore', sound: 'minecraft:entity.warden.heartbeat', color: 'darkRed' },
    "red_priest": { particle: 'minecraft:flame', sound: 'minecraft:entity.blaze.shoot', color: 'red' },
    "abyss": { particle: 'minecraft:soul_fire_flame', sound: 'minecraft:entity.wither.shoot', color: 'darkGray' },
    "justiciar": { particle: 'minecraft:nautilus', sound: 'minecraft:block.bell.resonate', color: 'yellow' },
    "fool": { particle: 'minecraft:portal', sound: 'minecraft:entity.enderman.teleport', color: 'darkPurple' },
    "demoness": { particle: 'minecraft:witch', sound: 'minecraft:entity.illusioner.cast_spell', color: 'lightPurple' },
    "hanged_man": { particle: 'minecraft:squid_ink', sound: 'minecraft:entity.elder_guardian.curse', color: 'black' },
    "visionary": { particle: 'minecraft:enchantment_table', sound: 'minecraft:entity.evoker.cast_spell', color: 'aqua' },
    "white_tower": { particle: 'minecraft:end_rod', sound: 'minecraft:block.amethyst_block.chime', color: 'white' },
    "mother": { particle: 'minecraft:totem_of_undying', sound: 'minecraft:entity.player.levelup', color: 'green' },
    "sun": { particle: 'minecraft:glow', sound: 'minecraft:item.totem.use', color: 'gold' },
    "darkness": { particle: 'minecraft:sculk_soul', sound: 'minecraft:block.sculk_shrieker.shriek', color: 'darkBlue' },
    "tyrant": { particle: 'minecraft:electric_spark', sound: 'minecraft:entity.lightning_bolt.thunder', color: 'blue' },
    "death": { particle: 'minecraft:ash', sound: 'minecraft:entity.wither.spawn', color: 'darkGreen' }
};

let allValidItems = ['minecraft:glass_bottle', 'minecraft:stick', 'irons_spellbooks:arcane_essence'];
Object.keys(RECIPES).forEach(key => {
    let r = RECIPES[key];
    if (allValidItems.indexOf(r.base) === -1) allValidItems.push(r.base);
    if (allValidItems.indexOf(r.catalyst) === -1) allValidItems.push(r.catalyst);
    r.ingredients.forEach(i => {
        if (allValidItems.indexOf(i) === -1) allValidItems.push(i);
    });
});

BlockEvents.rightClicked('irons_spellbooks:alchemist_cauldron', event => {
    const { block, player, item, level, hand } = event;
    
    if (hand != 'MAIN_HAND' && hand != 'main_hand') return;

    let itemId = String(item.id);
    let isRitualItem = allValidItems.indexOf(itemId) !== -1;

    // ====================================================
    // CLIENT-SIDE INTERCEPTOR 
    // ====================================================
    if (level.isClientSide()) {
        if (isRitualItem || itemId === 'minecraft:air') event.success(); 
        return;
    }

    // ====================================================
    // SERVER-SIDE RITUAL ENGINE
    // ====================================================
    if (!block.entity) return;
    
    try {
        let pData = block.entity.persistentData;
        let isAwakened = pData.getBoolean("IsAscensionCauldron");
        
        // --- 0. THE AWAKENING MECHANIC ---
        if (!isAwakened && player.isCrouching() && itemId === 'irons_spellbooks:arcane_essence') {
            item.shrink(1);
            pData.putBoolean("IsAscensionCauldron", true);
            block.entity.setChanged();
            
            player.tell(Text.lightPurple("The cauldron absorbs the arcane essence and Awakens..."));
            player.playSound('minecraft:block.beacon.activate', 2.0, 1.0); 
            level.spawnParticles('minecraft:enchantment_table', false, block.x + 0.5, block.y + 0.8, block.z + 0.5, 0.5, 0.5, 0.5, 50, 0.1);
            
            event.success();
            return;
        }

        // If it's not awakened, ignore everything and let it function as a normal Iron's cauldron!
        if (!isAwakened) return;

        // --- CAULDRON HIJACK: BLOCK IRON'S SPELLS ---
        // If they click with an empty hand or a non-ritual item, intercept immediately!
        // This stops Iron's Spells from stealing or duplicating items.
        if (itemId === 'minecraft:air' || !isRitualItem) {
            event.success();
            return;
        }

        let baseAdded = String(pData.getString("AscensionBase") || "");
        let readyFor = String(pData.getString("AscensionReadyFor") || "");
        let activePathway = String(pData.getString("AscensionPathway") || "");
        let activeSeq = pData.getInt("AscensionSequence") || 9;
        let activeCatalyst = String(pData.getString("AscensionCatalyst") || "");
        
        let addedStr = String(pData.getString("AscensionIngredients") || "");
        let added = addedStr ? addedStr.split(',') : [];

        // --- 1. REFUND MECHANIC (Sneak + Stick) ---
        if (player.isCrouching() && itemId === 'minecraft:stick') {
            if (baseAdded !== "") {
                // Physically pop the items back into the world!
                block.popItem(baseAdded);
                added.forEach(ing => block.popItem(ing));
                if (activeCatalyst !== "") block.popItem(activeCatalyst);

                pData.putString("AscensionBase", "");
                pData.putString("AscensionIngredients", "");
                pData.putString("AscensionReadyFor", "");
                pData.putString("AscensionPathway", "");
                pData.putString("AscensionCatalyst", "");
                block.entity.setChanged(); 

                // Erase visual fluids
                block.mergeEntityData({ Results: [] });

                player.tell(Text.gray("You stirred the cauldron and broke the ritual. The materials spill out."));
                player.playSound('minecraft:block.fire.extinguish', 1.0, 1.0);
                level.spawnParticles('minecraft:smoke', false, block.x + 0.5, block.y + 0.8, block.z + 0.5, 0.3, 0.3, 0.3, 20, 0.05);
            } else {
                player.tell(Text.gray("The Ascension Cauldron is already empty."));
            }
            event.success();
            return;
        }

        // --- 2. ADDING THE FOUNDATION ---
        if (baseAdded === "") {
            let validRecipes = Object.keys(RECIPES).filter(k => String(RECIPES[k].base) === itemId);
            
            if (validRecipes.length > 0) {
                item.shrink(1); 
                pData.putString("AscensionBase", itemId);
                pData.putString("AscensionIngredients", "");
                pData.putString("AscensionReadyFor", "");
                pData.putString("AscensionCatalyst", "");
                block.entity.setChanged(); 
                
                // Inject the fluid visuals manually!
                block.mergeEntityData({ Results: [{ Amount: 1000, FluidName: itemId }] });
                
                player.tell(Text.aqua("The foundation dissolves. The cauldron begins to hum with potential."));
                player.playSound('minecraft:block.brewing_stand.brew', 2.0, 0.8);
                level.spawnParticles('minecraft:bubble', false, block.x + 0.5, block.y + 0.8, block.z + 0.5, 0.2, 0.2, 0.2, 10, 0.05);
                
                event.success(); 
                return;
            } else if (itemId !== 'irons_spellbooks:arcane_essence') {
                player.tell(Text.red(`[Ritual] The cauldron requires a Foundation Base first! (${itemId} is invalid).`));
                event.success();
                return;
            }
        }

        // --- 3. BOTTLING THE POTION ---
        if (itemId === 'minecraft:glass_bottle') {
            if (readyFor !== "") {
                item.shrink(1);
                player.give(readyFor);
                
                pData.putString("AscensionBase", "");
                pData.putString("AscensionIngredients", "");
                pData.putString("AscensionReadyFor", "");
                pData.putString("AscensionPathway", "");
                pData.putString("AscensionCatalyst", "");
                block.entity.setChanged(); 
                
                // Erase the fluid visually!
                block.mergeEntityData({ Results: [] });
                
                let pitch = 0.5 + (activeSeq / 18.0);
                
                player.tell(Text.gold(`✨ You have bottled the Sequence ${activeSeq} Ascension Potion! ✨`));
                player.playSound('minecraft:item.bottle.fill_dragonbreath', 2.0, 1.0);
                player.playSound('minecraft:ui.toast.challenge_complete', 1.0, pitch);
                level.spawnParticles('minecraft:end_rod', false, block.x + 0.5, block.y + 1.0, block.z + 0.5, 0.5, 0.5, 0.5, 40, 0.1);
            } else {
                player.tell(Text.red("The mixture is incomplete! It is not ready to be bottled."));
            }
            event.success();
            return;
        }

        if (readyFor !== "") {
            player.tell(Text.red("The potion is fully brewed! Extract it quickly with a Glass Bottle."));
            event.success();
            return;
        }

        // --- 4. IGNITING THE CATALYST ---
        let possibleCatalystRecipes = Object.keys(RECIPES).filter(k => String(RECIPES[k].base) === baseAdded && String(RECIPES[k].catalyst) === itemId);

        if (possibleCatalystRecipes.length > 0) {
            for (let i = 0; i < possibleCatalystRecipes.length; i++) {
                let rKey = possibleCatalystRecipes[i];
                let req = RECIPES[rKey].ingredients.map(s => String(s));
                
                let reqSorted = req.slice().sort();
                let addedSorted = added.slice().sort();

                if (reqSorted.length === addedSorted.length && reqSorted.every((val, index) => val === addedSorted[index])) {
                    
                    let parts = rKey.split('_');
                    let seq = parseInt(parts.pop());
                    let pathway = parts.join('_');
                    
                    item.shrink(1);
                    pData.putString("AscensionReadyFor", RECIPES[rKey].result);
                    pData.putString("AscensionPathway", pathway);
                    pData.putInt("AscensionSequence", seq);
                    pData.putString("AscensionCatalyst", itemId); 
                    block.entity.setChanged(); 
                    
                    let fx = PATHWAY_FX[pathway] || { particle: 'minecraft:witch', sound: 'minecraft:entity.evoker.prepare_summon', color: 'lightPurple' };
                    
                    player.tell(Text[fx.color](`The catalyst ignites! The Sequence ${seq} mixture violently binds together!`));
                    player.playSound(fx.sound, 2.0, 0.8 + (seq * 0.05));
                    level.spawnParticles(fx.particle, false, block.x + 0.5, block.y + 0.8, block.z + 0.5, 0.3, 0.5, 0.3, 60, 0.2);
                    
                    event.success();
                    return;
                }
            }
        }

        // --- 5. INFUSING INGREDIENTS ---
        let currentCount = added.filter(id => id === itemId).length;
        let maxNeeded = 0;
        
        let possibleR = Object.keys(RECIPES).filter(k => String(RECIPES[k].base) === baseAdded);
        for (let i = 0; i < possibleR.length; i++) {
            let neededInThisRecipe = RECIPES[possibleR[i]].ingredients.filter(id => String(id) === itemId).length;
            if (neededInThisRecipe > maxNeeded) maxNeeded = neededInThisRecipe;
        }

        if (maxNeeded > 0) {
            if (currentCount < maxNeeded) {
                item.shrink(1);
                added.push(itemId);
                
                pData.putString("AscensionIngredients", added.join(','));
                block.entity.setChanged(); 
                
                let itemName = itemId.split(':')[1].replace(/_/g, ' ');
                let ingredientPitch = 0.8 + (added.length * 0.05); 
                
                player.tell(Text.aqua(`Infused ${itemName} into the mixture. [${added.length} total]`));
                player.playSound('minecraft:block.end_portal_frame.fill', 2.0, ingredientPitch); 
                level.spawnParticles('minecraft:witch', false, block.x + 0.5, block.y + 0.8, block.z + 0.5, 0.2, 0.2, 0.2, 10, 0.05);
                
                event.success();
                return;
            } else {
                player.tell(Text.yellow(`The cauldron rejects the item. (You have reached the max of ${maxNeeded} for this ingredient).`));
                event.success();
                return;
            }
        } else {
            if (possibleCatalystRecipes.length > 0) {
                player.tell(Text.yellow("The catalyst fizzled out! You are missing necessary ingredients."));
            } else {
                player.tell(Text.red(`The cauldron violently spits out the item! (${itemId} is not needed).`));
                player.playSound('minecraft:block.lava.extinguish', 1.0, 1.0);
                level.spawnParticles('minecraft:smoke', false, block.x + 0.5, block.y + 0.8, block.z + 0.5, 0.2, 0.2, 0.2, 10, 0.05);
            }
            event.success();
            return;
        }

    } catch (e) {
        // --- 6. SILENT EVENT EXIT FILTER ---
        if (String(e).indexOf("EventExit") !== -1) return; 
        console.error(`[FioMCraft Ritual] SEVERE ERROR: ${e}`);
        player.tell(Text.darkRed(`Ritual Engine Malfunction: Check Server Log.`));
    }
});