import missions from "../../db/missions";

export function shadowOperationOrganizer (playerArmySelected: string): string[] {
    let shadowOperationWithArmy = []
    shadowOperationWithArmy = [...missions.main.shadowOperation]

    switch (playerArmySelected) {
        case 'Tau':
            if (!missions.main.shadowOperation.includes(missions.tau.shadowOperation)){
                if (missions.tau.shadowOperation){
                    shadowOperationWithArmy.push(missions.tau.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Adepta Sororitas':
            if (!missions.main.shadowOperation.includes(missions.sororitas.shadowOperation)){
                if (missions.sororitas.shadowOperation){
                    shadowOperationWithArmy.push(missions.sororitas.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Aeldari (Eldar)': 
            if (!missions.main.shadowOperation.includes(missions.elf.shadowOperation)){
                if (missions.elf.shadowOperation){
                    shadowOperationWithArmy.push(missions.elf.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Astra Militarum (Imperial Guard)': 
            if (!missions.main.shadowOperation.includes(missions.militarum.shadowOperation)){
                if (missions.militarum.shadowOperation){
                    shadowOperationWithArmy.push(missions.militarum.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Chaos Daemons': 
            if (!missions.main.shadowOperation.includes(missions.deamons.shadowOperation)){
                if (missions.deamons.shadowOperation){
                    shadowOperationWithArmy.push(missions.deamons.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Chaos Knights': 
            if (!missions.main.shadowOperation.includes(missions.ck.shadowOperation)){
                if (missions.ck.shadowOperation){
                    shadowOperationWithArmy.push(missions.ck.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Chaos Space Marines':
            if (!missions.main.shadowOperation.includes(missions.csm.shadowOperation)){
                if (missions.csm.shadowOperation){
                    shadowOperationWithArmy.push(missions.csm.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Death Guard': 
            if (!missions.main.shadowOperation.includes(missions.dg.shadowOperation)){
                if (missions.dg.shadowOperation){
                    shadowOperationWithArmy.push(missions.dg.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Heretic Astartes: Thousand Sons':
            if (!missions.main.shadowOperation.includes(missions.ts.shadowOperation)){
                if (missions.ts.shadowOperation){
                    shadowOperationWithArmy.push(missions.ts.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Imperial Knights':
            if (!missions.main.shadowOperation.includes(missions.ik.shadowOperation)){
                if (missions.ik.shadowOperation){
                    shadowOperationWithArmy.push(missions.ik.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Necrons':
            if (!missions.main.shadowOperation.includes(missions.necron.shadowOperation)){
                if (missions.necron.shadowOperation){
                    shadowOperationWithArmy.push(missions.necron.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Orks': 
            if (!missions.main.shadowOperation.includes(missions.ork.shadowOperation)){
                if (missions.ork.shadowOperation){
                    shadowOperationWithArmy.push(missions.ork.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        case 'Tyranids':
            if (!missions.main.shadowOperation.includes(missions.tyranids.shadowOperation)){
                if (missions.tyranids.shadowOperation){
                    shadowOperationWithArmy.push(missions.tyranids.shadowOperation)
                    return shadowOperationWithArmy;
                }
            }
            break;
        }
    return shadowOperationWithArmy
}