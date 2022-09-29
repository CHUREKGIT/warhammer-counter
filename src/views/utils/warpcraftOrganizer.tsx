import missions from "../../db/missions";

export function warpcraftOrganizer (warpcraft: string[], playerArmySelected: string): string[] {
    let warpcraftWithArmy = warpcraft

    switch (playerArmySelected) {
        case 'Harlequins':
            if (!warpcraft.includes(missions.harlequins.warpcraft)){
                if (missions.harlequins.warpcraft){
                    warpcraftWithArmy.push(missions.harlequins.warpcraft)
                    return warpcraftWithArmy;
                }
            }
            break;
        case 'Heretic Astartes: Thousand Sons':
            if (!warpcraft.includes(missions.ts.warpcraft)){
                if (missions.ts.warpcraft){
                    warpcraftWithArmy.push(missions.ts.warpcraft)
                    return warpcraftWithArmy;
                }
            }
            break;
        case 'Aeldari (Eldar)': 
            if (!warpcraft.includes(missions.elf.warpcraft)){
                if (missions.elf.warpcraft){
                    warpcraftWithArmy.push(missions.elf.warpcraft)
                    return warpcraftWithArmy;
                }
            }
            break;
        }
    return warpcraftWithArmy
}