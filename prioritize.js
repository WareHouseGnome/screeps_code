// want to try and layout some kind of priority system.
// then I can assign multiple tasks to creeps

// priority levels 1 - 100  The higher the priority level number,
// the higher the priority is of whatever is attached to the number

// Priority level will dictate who gets spawned next,
// and which bldgs get built first, it will even change a creeps role if necessary.

// so I'm thinking like this:
//  all creeps spawn at priority level 1
// depending on which body parts they have will raise PL (priority Level)
//        Body Part           PL effect
//          ****                ****
//          WORK                +5
//          CARRY               +5
//          MOVE                +5
//          ATTACK              +10
//          HEAL                +25
//          TOUGH               +2
//          CLAIM               +25
//       RANGED_ATTACK          +20

// TICKS TO LIVE -- creep.ticksToLive(1500 to 1000) PL +25
//                                   (1000 to 500)  PL +50
//                                   ( < 500)       PL +100                            



























































































































