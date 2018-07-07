module.exports = {
    run: function() {
        var minNumOfHarvesters = 2;
        var minNumOfBuilders = 6;
        var minNumOfUpgraders = 3;
        var minNumOfWorkers = 2;

        var numOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
        var numOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
        var numOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
        var numOfWorkers = _.sum(Game.creeps, (c) => c.memory.role == 'worker');

        var energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
        var spawn;
        if(numOfHarvesters < minNumOfHarvesters) {
            spawn = Game.spawns.Spawn1.createCustomCreep(energy, 'harvester', {memory: {role: 'harvester', working: false}});
            if (spawn == ERR_NOT_ENOUGH_ENERGY && numOfHarvesters == 0) {
                spawn = Game.spawns.Spawn1.createCustomCreep(200, 'harvester', {memory: {role: 'harvester', working: false}});
        }

        if(numOfBuilders < minNumOfBuilders) {
            spawn = Game.spawns.Spawn1.createCustomCreep(energy, 'builder', {memory: {role: 'builder', working: false}});	
        }

        if(numOfUpgraders < minNumOfUpgraders) {
            spawn = Game.spawns.Spawn1.createCustomCreep(energy, 'upgrader', {memory: {role: 'upgrader', working: false}});
        }

        if(numOfWorkers < minNumOfWorkers) {
            spawn = Game.spawns.Spawn1.createCustomCreep(energy, 'worker', {memory: {role: 'worker', working: false}});
        }

    }}
};