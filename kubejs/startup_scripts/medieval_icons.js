StartupEvents.registry('item', event => {
    // List of all known Medieval Origins Revival classes/races
    const medievalIcons =[
        'alfiq', 'arachnae', 'banshee', 'dwarf', 'fae', 'goblin', 
        'gorgon', 'high_elf', 'incubus', 'kobold', 'leprechaun', 
        'merfolk', 'minotaur', 'moon_elf', 'nymph', 'ogre', 
        'paladin', 'pixie', 'revenant', 'siren', 'succubus', 
        'troll', 'valkyrie', 'vampire', 'werewolf', 'wood_elf'
    ];

    // Loop through the list and register a dummy item for each icon
    medievalIcons.forEach(iconName => {
        event.create(`medievalorigins:${iconName}_icon`)
             .displayName(iconName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + ' Icon'); 
             // Formats names nicely (e.g. "high_elf" -> "High Elf Icon") just in case someone cheats them in
    });
});