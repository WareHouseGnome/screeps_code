module.exports = {
    /** @param {Creep} creep **/
    run: function(creep) {
        
        var resources = creep.room.find(FIND_DROPPED_RESOURCES);
        var resource = creep.pos.findClosestByRange(resources);
        if(resource) {
            if(creep.pickup(resource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(resource);
            }
        }

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
            var target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if(creep.build(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        if(creep.memory.working == false) {
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};
