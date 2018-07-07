module.exports = {
    /** @param {Creep} creep **/
    run: function(creep) {

 /*       var doNext = creep.room.find(FIND_CONSTRUCTION_SITES);
        var target = creep.pos.findClosestByPath(doNext);
        if(doNext == undefined) {
    
        } */

        var sources = creep.room.find(FIND_SOURCES_ACTIVE);
        var source = creep.pos.findClosestByPath(sources);
        if(creep.memory.working && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        if(!creep.memory.working && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }
        if(creep.memory.working == false) {
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
                if(creep.energy == creep.energyCapacity) {
                    creep.memory.working = true;
                }
            }
        }
        if(creep.memory.working == true) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        if (creep.memory.working == false) {
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};