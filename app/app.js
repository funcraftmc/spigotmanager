var program = require('spigot_manager_program');
var config = require('spigot_manager_config');
var spigot_manager = require('./spigot_manager');
var linux_screen = require('linux_screen');
var screen = new linux_screen({
	name: config.get('screen_name')
});

program
		// Bind server handlers
		.on('start', spigot_manager.start)
		.on('stop', spigot_manager.stop)
		.on('restart', spigot_manager.restart)
		.on('status', spigot_manager.status)
		.on('switch', spigot_manager.switch);

// Parse arguments
program.parse(process.argv);

screen.exec('mc');