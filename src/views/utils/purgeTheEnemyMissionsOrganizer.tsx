import missions from "../../db/missions";

export function purgeTheEnemyMissionsOrganizer (purgeTheEnemy: string[], playerArmySelected: string): string[] {
    let purgeTheEnemyWithArmy = purgeTheEnemy

    switch (playerArmySelected) {
        case 'Adepta Sororitas':
            if (!purgeTheEnemy.includes(missions.sororitas.purgeTheEnemy)){
                if (missions.sororitas.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.sororitas.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Adeptus Custodes':
            if (!purgeTheEnemy.includes(missions.custodes.purgeTheEnemy)){
                if (missions.custodes.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.custodes.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Adeptus Mechanicus':
            if (!purgeTheEnemy.includes(missions.mechanicus.purgeTheEnemy)){
                if (missions.mechanicus.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.mechanicus.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Astra Militarum (Imperial Guard)': 
            if (!purgeTheEnemy.includes(missions.militarum.purgeTheEnemy)){
                if (missions.militarum.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.militarum.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Chaos Knights': 
            if (!purgeTheEnemy.includes(missions.ck.purgeTheEnemy)){
                if (missions.ck.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.ck.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Chaos Space Marines':
            if (!purgeTheEnemy.includes(missions.csm.purgeTheEnemy)){
                if (missions.csm.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.csm.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Heretic Astartes: Thousand Sons':
            if (!purgeTheEnemy.includes(missions.ts.purgeTheEnemy)){
                if (missions.ts.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.ts.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Imperial Knights':
            if (!purgeTheEnemy.includes(missions.ik.purgeTheEnemy)){
                if (missions.ik.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.ik.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Necrons':
            if (!purgeTheEnemy.includes(missions.necron.purgeTheEnemy)){
                if (missions.necron.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.necron.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Orks': 
            if (!purgeTheEnemy.includes(missions.ork.purgeTheEnemy)){
                if (missions.ork.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.ork.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'Tyranids':
            if (!purgeTheEnemy.includes(missions.tyranids.purgeTheEnemy)){
                if (missions.tyranids.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.tyranids.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        case 'SM: Blood Angels':
            if (!purgeTheEnemy.includes(missions.angles.purgeTheEnemy)){
                if (missions.angles.purgeTheEnemy){
                    purgeTheEnemyWithArmy.push(missions.angles.purgeTheEnemy)
                    return purgeTheEnemyWithArmy;
                }
            }
            break;
        }
    return purgeTheEnemyWithArmy
}