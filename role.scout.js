function getNextTarget(creep) {
    var targets = creep.room.find(FIND_MY_STRUCTURES, {
        filter: (structure) => (structure.energy < structure.energyCapacity || 
                                structure.store < structure.storeCapacity)
    })
    var target = creep.pos.findClosestByPath(targets);
    var nextTarget = target;
    return nextTarget;


}

exports.run = function(creep) {
        var sources = creep.room.find(FIND_SOURCES_ACTIVE);
        var source = creep.pos.findClosestByPath(sources);
        if(creep.memory.working && creep.carry.energy == 0) {
            creep.memory.working = false;
            }
        if(!creep.memory.working && creep.carry.energy != 0 && creep.carry.energy != creep.carryCapacity) {
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source)
                };
            }

        if(creep.carry.energy == creep.carryCapacity) {
            var target = getNextTarget(creep);
            creep.moveTo(target);
            if(target.energy <= target.energyCapacity/2) {
                creep.transfer(target, RESOURCE_ENERGY, 50)
                var target = getNextTarget(creep);
                return;
            };
            if(target.energy > target.energyCapacity/2 && target.energy !== target.energyCapacity) {
                creep.transfer(target, RESOURCE_ENERGY, 25);
                var target = getNextTarget(creep);
                return;
            }
            if(target.energy == target.energyCapacity) {
                creep.say('full energy');
                var target = getNextTarget(creep);
                return;
            }

        }
        if(creep.carry.energy > 50 && creep.carry.energy < (creep.carryCapacity - 50)) {

            creep.say('dumdee dum')
        }
        else {
            creep.say('dum');
            var oldTarget = Target;
            var Target = nextTarget;
            var nextTarget = getNextTarget(creep);
            return;
        }
        if(creep.carry.energy !== 0 && creep.carry.energy !== creep.carryCapacity || oldTarget ) {
            if(oldTarget == undefined) {
                oldTarget == Target;
            }
            if(oldTarget == Target) {
                creep.harvest(Target);
                if(creep.carry.energy == creep.carryCapacity) {
                    return;
                }
            }
        }
    }
