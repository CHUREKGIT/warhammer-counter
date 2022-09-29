import missions from "../../db/missions";

export function shadowOperationOrganizer (shadowOperationMissions: string[], playerArmySelected: string): string[] {
    let shadowOperationWithArmy = shadowOperationMissions

    switch (playerArmySelected) {
        case 'Tau':
            if (!shadowOperationMissions.includes(missions.tau.shadowOperation)){
                if (missions.tau.shadowOperation){
                    shadowOperationWithArmy.push(missions.tau.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Adepta Sororitas':
            if (!shadowOperationMissions.includes(missions.sororitas.shadowOperation)){
                if (missions.sororitas.shadowOperation){
                    shadowOperationWithArmy.push(missions.sororitas.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Aeldari (Eldar)': 
            if (!shadowOperationMissions.includes(missions.elf.shadowOperation)){
                if (missions.elf.shadowOperation){
                    shadowOperationWithArmy.push(missions.elf.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Astra Militarum (Imperial Guard)': 
            if (!shadowOperationMissions.includes(missions.militarum.shadowOperation)){
                if (missions.militarum.shadowOperation){
                    shadowOperationWithArmy.push(missions.militarum.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Chaos Daemons': 
            if (!shadowOperationMissions.includes(missions.deamons.shadowOperation)){
                if (missions.deamons.shadowOperation){
                    shadowOperationWithArmy.push(missions.deamons.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Chaos Knights': 
            if (!shadowOperationMissions.includes(missions.ck.shadowOperation)){
                if (missions.ck.shadowOperation){
                    shadowOperationWithArmy.push(missions.ck.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Chaos Space Marines':
            if (!shadowOperationMissions.includes(missions.csm.shadowOperation)){
                if (missions.csm.shadowOperation){
                    shadowOperationWithArmy.push(missions.csm.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Death Guard': 
            if (!shadowOperationMissions.includes(missions.dg.shadowOperation)){
                if (missions.dg.shadowOperation){
                    shadowOperationWithArmy.push(missions.dg.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Heretic Astartes: Thousand Sons':
            if (!shadowOperationMissions.includes(missions.ts.shadowOperation)){
                if (missions.ts.shadowOperation){
                    shadowOperationWithArmy.push(missions.ts.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Imperial Knights':
            if (!shadowOperationMissions.includes(missions.ik.shadowOperation)){
                if (missions.ik.shadowOperation){
                    shadowOperationWithArmy.push(missions.ik.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Necrons':
            if (!shadowOperationMissions.includes(missions.necron.shadowOperation)){
                if (missions.necron.shadowOperation){
                    shadowOperationWithArmy.push(missions.necron.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Orks': 
            if (!shadowOperationMissions.includes(missions.ork.shadowOperation)){
                if (missions.ork.shadowOperation){
                    shadowOperationWithArmy.push(missions.ork.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Tyranids':
            if (!shadowOperationMissions.includes(missions.tyranids.shadowOperation)){
                if (missions.tyranids.shadowOperation){
                    shadowOperationWithArmy.push(missions.tyranids.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        }
    return shadowOperationWithArmy
}