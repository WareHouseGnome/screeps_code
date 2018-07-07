require('prototype.spawn')();
var scout = require('role.scout');
var roleSpawner = require('role.spawner');
var roleUpgrader = require('role.upgrader');
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleWorker = require('role.worker');


module.exports.loop = function () {

	for(let name in Memory.creeps) {
		if(Game.creeps[name] == undefined) {
			delete Memory.creeps[name];
		}
    }
    for(let name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'scout') {
            scout.run(creep);
        }
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'worker') {
            roleWorker.run(creep);
        }

    }
        roleSpawner.run(creep);

}
