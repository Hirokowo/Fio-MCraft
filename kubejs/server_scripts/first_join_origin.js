PlayerEvents.loggedIn(event => {
    const player = event.player;
    const server = event.server;

    // Check if the player's file is missing our custom "first_join" tag
    if (!player.persistentData.getBoolean('fio_first_join')) {
        
        // Immediately add the tag so this script never triggers for them again
        player.persistentData.putBoolean('fio_first_join', true);

        // Schedule a delay of 40 ticks (2 seconds) to let their loading screen fade
        server.scheduleInTicks(40, () => {
            
            // Force the server to run the command on the player
            server.runCommandSilent(`origin gui ${player.username}`);
            
            // Optional: Send a nice little welcome message!
            player.tell(Text.yellow("Welcome to Fio'MCraft! Please select your lineage..."));
        });
    }
});