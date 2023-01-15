import missions from "../../db/missions";

export function purgeTheEnemyMissionsOrganizer (playerArmySelected: string|string[]): string[] {

    let purgeTheEnemyWithArmy = []
    purgeTheEnemyWithArmy = [...missions.main.purgeTheEnemy]
    
    switch (playerArmySelected) {
        case 'Adeptus Custodes':
            if (!missions.main.purgeTheEnemy.includes(missions.custodes.purgeTheEnemy)){
                if (missions.custodes.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.custodes.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Adeptus Mechanicus':
            if (!missions.main.purgeTheEnemy.includes(missions.mechanicus.purgeTheEnemy)){
                if (missions.mechanicus.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.mechanicus.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Astra Militarum (Imperial Guard)': 
            if (!missions.main.purgeTheEnemy.includes(missions.militarum.purgeTheEnemy)){
                if (missions.militarum.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.militarum.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Chaos Knights': 
            if (!missions.main.purgeTheEnemy.includes(missions.ck.purgeTheEnemy)){
                if (missions.ck.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.ck.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Chaos Space Marines':
            if (!missions.main.purgeTheEnemy.includes(missions.csm.purgeTheEnemy)){
                if (missions.csm.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.csm.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Heretic Astartes: Thousand Sons':
            if (!missions.main.purgeTheEnemy.includes(missions.ts.purgeTheEnemy)){
                if (missions.ts.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.ts.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Orks': 
            if (!missions.main.purgeTheEnemy.includes(missions.ork.purgeTheEnemy)){
                if (missions.ork.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.ork.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Tyranids':
            if (!missions.main.purgeTheEnemy.includes(missions.tyranids.purgeTheEnemy)){
                if (missions.tyranids.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.tyranids.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Drukhari (Dark Eldar)':
            if (!missions.main.purgeTheEnemy.includes(missions.de.purgeTheEnemy)){
                if (missions.de.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.de.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Genestealer Cults':
            if (!missions.main.purgeTheEnemy.includes(missions.gc.purgeTheEnemy)){
                if (missions.gc.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.gc.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        }
    return missions.main.purgeTheEnemy
}