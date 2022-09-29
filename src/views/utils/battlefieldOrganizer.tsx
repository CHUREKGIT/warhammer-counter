import missions from "../../db/missions";

export function battlefieldSupremacyOrganizer (battlefieldSupremacyMissions: string[], playerArmySelected: string): string[] {
    let battlefieldSupremacyWithArmy = battlefieldSupremacyMissions

    switch (playerArmySelected) {
        case 'Tau':
            if (!battlefieldSupremacyMissions.includes(missions.tau.battlefield)){
                if (missions.tau.battlefield){
                    battlefieldSupremacyWithArmy.push(missions.tau.battlefield)
                    return battlefieldSupremacyWithArmy;
                }
            }
            break;
        case 'Harlequins':
            if (!battlefieldSupremacyMissions.includes(missions.harlequins.battlefield)){
                if (missions.harlequins.battlefield){
                    battlefieldSupremacyWithArmy.push(missions.harlequins.battlefield)
                    return battlefieldSupremacyWithArmy;
                }
            }
            break;
        case 'Adepta Sororitas':
            if (!battlefieldSupremacyMissions.includes(missions.sororitas.battlefield)){
                if (missions.sororitas.battlefield){
                    battlefieldSupremacyWithArmy.push(missions.sororitas.battlefield)
                    return battlefieldSupremacyWithArmy;
                }
            }
            break;
        case 'Adeptus Custodes':
            if (!battlefieldSupremacyMissions.includes(missions.custodes.battlefield)){
                if (missions.custodes.battlefield){
                    battlefieldSupremacyWithArmy.push(missions.custodes.battlefield)
                    return battlefieldSupremacyWithArmy;
                }
            }
            break;
        case 'Aeldari (Eldar)': 
            if (!battlefieldSupremacyMissions.includes(missions.elf.battlefield)){
                if (missions.elf.battlefield){
                    battlefieldSupremacyWithArmy.push(missions.elf.battlefield)
                    return battlefieldSupremacyWithArmy;
                }
            }
            break;
        case 'Astra Militarum (Imperial Guard)': 
            if (!battlefieldSupremacyMissions.includes(missions.militarum.battlefield)){
                if (missions.militarum.battlefield){
                    battlefieldSupremacyWithArmy.push(missions.militarum.battlefield)
                    return battlefieldSupremacyWithArmy;
                }
            }
            break;
        case 'Chaos Daemons': 
            if (!battlefieldSupremacyMissions.includes(missions.deamons.battlefield)){
                if (missions.deamons.battlefield){
                    battlefieldSupremacyWithArmy.push(missions.deamons.battlefield)
                    return battlefieldSupremacyWithArmy;
                }
            }
            break;
        case 'Chaos Knights': 
            if (!battlefieldSupremacyMissions.includes(missions.ck.battlefield)){
                if (missions.ck.battlefield){
                    battlefieldSupremacyWithArmy.push(missions.ck.battlefield)
                    return battlefieldSupremacyWithArmy;
                }
            }
            break;
        case 'Drukhari (Dark Eldar)': 
            if (!battlefieldSupremacyMissions.includes(missions.de.battlefield)){
                if (missions.de.battlefield){
                    battlefieldSupremacyWithArmy.push(missions.de.battlefield)
                    return battlefieldSupremacyWithArmy;
                }
            }
            break;
        case 'Death Guard': 
            if (!battlefieldSupremacyMissions.includes(missions.dg.battlefield)){
                if (missions.dg.battlefield){
                    battlefieldSupremacyWithArmy.push(missions.dg.battlefield)
                    return battlefieldSupremacyWithArmy;
                }
            }
            break;
        case 'Imperial Knights':
            if (!battlefieldSupremacyMissions.includes(missions.ik.battlefield)){
                if (missions.ik.battlefield){
                    battlefieldSupremacyWithArmy.push(missions.ik.battlefield)
                    return battlefieldSupremacyWithArmy;
                }
            }
            break;
        case 'Necrons':
            if (!battlefieldSupremacyMissions.includes(missions.necron.battlefield)){
                if (missions.necron.battlefield){
                    battlefieldSupremacyWithArmy.push(missions.necron.battlefield)
                    return battlefieldSupremacyWithArmy;
                }
            }
            break;
        case 'Orks': 
            if (!battlefieldSupremacyMissions.includes(missions.ork.battlefield)){
                if (missions.ork.battlefield){
                    battlefieldSupremacyWithArmy.push(missions.ork.battlefield)
                    return battlefieldSupremacyWithArmy;
                }
            }
            break;
        }
    return battlefieldSupremacyWithArmy
}