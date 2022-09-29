import missions from "../../db/missions";

export function noMercyMissionsOrganizer (noMercyMissions: string[], playerArmySelected: string): string[] {
    let noMercyWithArmy = noMercyMissions

    switch (playerArmySelected) {
        case 'Tau':
            if (!noMercyMissions.includes(missions.tau.noMercy)){
                if (missions.tau.noMercy){
                    noMercyWithArmy.push(missions.tau.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Harlequins':
            if (!noMercyMissions.includes(missions.harlequins.noMercy)){
                if (missions.harlequins.noMercy){
                    noMercyWithArmy.push(missions.harlequins.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Adepta Sororitas':
            if (!noMercyMissions.includes(missions.sororitas.noMercy)){
                if (missions.sororitas.noMercy){
                    noMercyWithArmy.push(missions.sororitas.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Adeptus Custodes':
            if (!noMercyMissions.includes(missions.custodes.noMercy)){
                if (missions.custodes.noMercy){
                    noMercyWithArmy.push(missions.custodes.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Adeptus Mechanicus':
            if (!noMercyMissions.includes(missions.mechanicus.noMercy)){
                if (missions.mechanicus.noMercy){
                    noMercyWithArmy.push(missions.mechanicus.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Aeldari (Eldar)': 
            if (!noMercyMissions.includes(missions.elf.noMercy)){
                if (missions.elf.noMercy){
                    noMercyWithArmy.push(missions.elf.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Astra Militarum (Imperial Guard)': 
            if (!noMercyMissions.includes(missions.militarum.noMercy)){
                if (missions.militarum.noMercy){
                    noMercyWithArmy.push(missions.militarum.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Chaos Daemons': 
            if (!noMercyMissions.includes(missions.deamons.noMercy)){
                if (missions.deamons.noMercy){
                    noMercyWithArmy.push(missions.deamons.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Chaos Knights': 
            if (!noMercyMissions.includes(missions.ck.noMercy)){
                if (missions.ck.noMercy){
                    noMercyWithArmy.push(missions.ck.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Drukhari (Dark Eldar)': 
            if (!noMercyMissions.includes(missions.de.noMercy)){
                if (missions.de.noMercy){
                    noMercyWithArmy.push(missions.de.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Chaos Space Marines':
            if (!noMercyMissions.includes(missions.csm.noMercy)){
                if (missions.csm.noMercy){
                    noMercyWithArmy.push(missions.csm.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Death Guard': 
            if (!noMercyMissions.includes(missions.dg.noMercy)){
                if (missions.dg.noMercy){
                    noMercyWithArmy.push(missions.dg.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Heretic Astartes: Thousand Sons':
            if (!noMercyMissions.includes(missions.ts.noMercy)){
                if (missions.ts.noMercy){
                    noMercyWithArmy.push(missions.ts.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Imperial Knights':
            if (!noMercyMissions.includes(missions.ik.noMercy)){
                if (missions.ik.noMercy){
                    noMercyWithArmy.push(missions.ik.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Necrons':
            if (!noMercyMissions.includes(missions.necron.noMercy)){
                if (missions.necron.noMercy){
                    noMercyWithArmy.push(missions.necron.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Orks': 
            if (!noMercyMissions.includes(missions.ork.noMercy)){
                if (missions.ork.noMercy){
                    noMercyWithArmy.push(missions.ork.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'Tyranids':
            if (!noMercyMissions.includes(missions.tyranids.noMercy)){
                if (missions.tyranids.noMercy){
                    noMercyWithArmy.push(missions.tyranids.noMercy)
                    return noMercyWithArmy;
                }
            }
            break;
        case 'SM: Blood Angels':
            if (missions.angles.noMercy.every(value => !noMercyMissions.includes(value))){
                if (missions.angles.noMercy){
                    noMercyWithArmy.push(...missions.angles.noMercy)
                    if (missions.sm.noMercy){
                        noMercyWithArmy.push(missions.sm.noMercy) 
                    }
                    return noMercyWithArmy;
                }
            }
            break;
        }
    return noMercyWithArmy
}