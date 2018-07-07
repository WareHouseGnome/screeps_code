module.exports = function() {
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createCustomCreep =
        function(energy, roleName) {
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 200);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            // create creep with the created body and the given role and named after role
			var name = roleName + Game.time;
            return this.createCreep(body, name, { role: roleName, working: false});
        };


    StructureSpawn.prototype.createCustomDiggerCreep =
        function (energy, roleName) {
            // create the biggest digger possible
            var numberOfParts = Math.floor(energy / 200);
            var body = [];
            for(let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for(let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            for(let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
           // create creep with the created body and the given role and named after role
           var name2 = Game.time;
           var name1 = roleName;
           var creepName = name1 + name2;
           var oddOrEven = name2 % 2
           return this.createCreep(body, creepName, { role: digger, working: false, sourceId: 1 , digger: no_spawn });
        };


    
    StructureSpawn.prototype.createLongDistanceHarvester =
        function (energy, numberOfWorkParts, home, target, sourceIndex) {
            var body = [];
            for (let i = 0; i < numberOfWorkParts; i++) {
                body.push(WORK);
            }
            
            energy -= 150 * numberOfWorkParts;

            var numberOfParts = Math.floor(energy /100);
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
                body.push(MOVE);
            }

                        // create creep with the created body and the given role and named after role
			var name = 'LongDistHarvester' + Game.time;
            return this.createCreep(body, name, { 
                role: 'longDistanceHarvester', 
                home: home, 
                target: target, 
                working: false, 
                sourceId: 1
            });
        };
};