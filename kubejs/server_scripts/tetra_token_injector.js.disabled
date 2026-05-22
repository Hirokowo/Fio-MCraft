LootJS.modifiers(event => {
    // Target ALL loot universally (Chests, Drops, Fishing, Gifts, everything)
    const modifier = event.addLootTypeModifier([LootType.CHEST, LootType.ENTITY, LootType.BLOCK, LootType.FISHING, LootType.GIFT]);

    // ==========================================
    // 1. COMMON WEAPONS (Wood, Stone, Iron, Gold, Copper, Silver, Flint)
    // ==========================================
    modifier.replaceLoot(/minecraft:(wooden|stone|iron|golden)_(sword|pickaxe|axe|shovel|hoe)/, 'tetragenerator:common_token', true);
    modifier.replaceLoot(/iceandfire:.*(copper|silver)_(sword|pickaxe|axe|shovel|hoe|dagger)/, 'tetragenerator:common_token', true);
    modifier.replaceLoot(/notreepunching:(flint|iron|gold)_.*(knife|saw|mattock)/, 'tetragenerator:common_token', true);

    // ==========================================
    // 2. RARE WEAPONS (Diamond)
    // ==========================================
    modifier.replaceLoot(/minecraft:diamond_(sword|pickaxe|axe|shovel|hoe)/, 'tetragenerator:rare_token', true);
    modifier.replaceLoot(/iceandfire:.*(dragonbone|myrmex)_(sword|pickaxe|axe|shovel|hoe|dagger)/, 'tetragenerator:rare_token', true);
    modifier.replaceLoot(/notreepunching:diamond_.*(knife|saw|mattock)/, 'tetragenerator:rare_token', true);

    // ==========================================
    // 3. EPIC WEAPONS (Netherite & Endgame)
    // ==========================================
    modifier.replaceLoot(/minecraft:netherite_(sword|pickaxe|axe|shovel|hoe)/, 'tetragenerator:epic_token', true);
    modifier.replaceLoot(/notreepunching:netherite_.*(knife|saw|mattock)/, 'tetragenerator:epic_token', true);

    // ==========================================
    // 4. PURGE UNWANTED RANGED WEAPONS
    // ==========================================
    modifier.removeLoot(['minecraft:bow', 'minecraft:crossbow', 'minecraft:shield', 'minecraft:trident']);
});