LevelEvents.tick(event => {
    const level = event.level;
    
    // Only run on the Overworld
    if (level.dimension !== 'minecraft:overworld') return;
    
    // Check every 100 ticks (5 seconds)
    if (level.time % 100 !== 0) return; 

    // Calculate current day
    let currentDay = Math.floor(level.dayTime / 24000);
    let lastClearedDay = level.persistentData.getInt('LastWaveClearDay') || -1;

    // If the sun has risen on a new day
    if (currentDay > lastClearedDay) {
        level.persistentData.putInt('LastWaveClearDay', currentDay);

        // We only do wave clears between Day 10 and Day 200
        if (currentDay >= 10 && currentDay <= 200) {
            
            let cycleDay = currentDay % 15;
            
            // cycleDay 10 = Start of 5-day Surge
            // cycleDay 0 = Start of 10-day Normal period
            if (cycleDay === 10 || cycleDay === 0) {
                console.info(`[Wave System] Shift on Day ${currentDay}. Clearing standard hostile mobs!`);
                
                let clearCount = 0;
                
                // Mods whose mobs should NEVER be wiped by this script
                const protectedMods =['iceandfire', 'ars_nouveau', 'cataclysm', 'block_factorys_bosses', 'minecraft_121_update', 'mowzies_mobs', 'undergarden', 'irons_spellbooks'];
                
                level.getEntities().forEach(entity => {
                    // Only target Hostile Monsters
                    if (entity.isLiving() && entity.monster) {
                        
                        let modId = entity.type.split(':')[0];
                        let nbt = entity.nbt;
                        
                        // Check if the mob has been saved by vanilla mechanics (nametags, items, structures)
                        let isPersistent = nbt && nbt.getBoolean("PersistenceRequired") === true;
                        
                        // Exclude bosses just in case they don't have persistence
                        let isBoss = entity.type.includes("boss") || entity.type.includes("wither") || entity.type.includes("dragon");
                        
                        // Final strict check
                        if (!isPersistent && !isBoss && !entity.isPassenger() && !protectedMods.includes(modId)) {
                            entity.discard(); 
                            clearCount++;
                        }
                    }
                });
                
                console.info(`[Wave System] Successfully cleared ${clearCount} unprotected night-time spawns.`);
            }
        }
    }
});