import { usePlayerMissions } from '../../store/selectors';
import { AlertMission } from './AlertMission'


type MissionDetailsProps = {
    position: number,
    player: string
}

export function MissionDetails (props: MissionDetailsProps) {
    const mission = usePlayerMissions(props.player)[props.position]

    switch(mission) {
        case 'Assasination':
            return( 
                <AlertMission details={'Score 3 victory points at the end of the battle for each enemy CHARACTER unit that is destroyed. At the end of the battle, if the enemy WARLORD is destroyed, score 1 extra victory point.'} />
                )
        case 'Bring it Down':
            return (
                <AlertMission details={'At the end of the battle, score victory points for each enemy MONSTER or VEHICLE model that is destroyed, as follows: 1)Score 1 victory point for each of those destroyed models with a Wounds characteristic of 9 or less. 2)Score 2 victory points for each of those destroyed models with a Wounds characteristic of 10-14. 3) Score 3 victory points for each of those destroyed models with a Wounds characteristic of 15-19. 4) Score 4 victory points for each of those destroyed models with a Wounds characteristic of 20 or more.'}/>
            )
        case 'Grind Them Down':
            return (
                <AlertMission details={'Score 3 victory points at the end of the battle round if more enemy units than friendly units were destroyed this battle round.'}/>
            )
        case 'No Prosioners':
            return (
                <AlertMission details={'If you select this objective, keep a Kill Points tally. Each time an enemy model is destroyed (excluding VEHICLE, MONSTER or CHARACTER models), add a number of marks to this tally equal to the Wounds characteristic of the destroyed model. At the end of the battle, divide your Kill Points tally by 10 and round down - the result is the number of victory points you score. In addition, if your Kill Points tally is between 50 and 99, you score 1 additional victory point, and if your tally is 100 or more, you score 2 additional victory points.'}/>
            )
        case 'Abhor The Witch':
            return (
                <AlertMission details={'You cannot select this secondary objective if your army includes any PSYKER units. Score 3 victory points at the end of the battle for each enemy PSYKER CHARACTER unit that is destroyed, and 2 victory points for every other enemy PSYKER unit that is destroyed.'}/>
            )
        case 'Psychic Integrogation':
            return (
                <AlertMission details={'Score 3 victory points each time you successfully complete the following psychic action: Psychic Interrogation (Psychic Action - Warp Charge 4): One PSYKER CHARACTER unit from your army can attempt to perform this psychic action in your Psychic phase if it is within 24" of any enemy CHARACTER units. In addition, if the result of the Psychic test is equal to or greater than the Leadership characteristic of any enemy CHARACTER models within 24" of the PSYKER unit that completed this psychic action, you gain 1 Command point at the end of the phase.'}/>
            )
        case 'Warp Ritual':
            return (
                <AlertMission details={'If you select this objective, keep a Ritual Points tally; add 1 to that tally each time a unit from your army completes the following psychic action during the battle: Warp Ritual (Psychic Action - Warp Charge 3): One PSYKER CHARACTER unit from your army can attempt to perform this psychic action in your Psychic phase if it is within 6" of the centre of the battlefield. At the end of the battle, score 3 victory points if your Ritual Points tally is 1, score 7 victory points if your tally is 2, or score 12 victory points if your tally is 3 or more.'}/>
            )
        case 'Behind enemy Lines':
            return (
                <AlertMission details={'Score 2 victory points at the end of your turn if one unit from your army (excluding AIRCRAFT units) is wholly within your opponent’s deployment zone. Score 4 victory points at the end of your turn instead if two or more units from your army (excluding AIRCRAFT units) are wholly within your opponent’s deployment zone.'}/>
            )
        case 'Engage On All Fronts':
            return (
                <AlertMission details={'Score 2 victory points at the end of your turn if you have one or more qualifying units (see below) from your army wholly within three different table quarters, and those units are all more than 6" away from any other table quarter. Score 3 victory points instead if you have one or more qualifying units from your army wholly within each table quarter, and those units are all more than 6" away from any other table quarter. A qualifying unit is one that has a Starting Strength of 3 or more models, or one that contains 1 or more VEHICLE or MONSTER models (excluding AIRCRAFT models).'}/>
            )
        case 'Raise the Banners high':
            return (
                <AlertMission details={'Raise Banners (Action): One or more INFANTRY units from your army can start to perform this action at the end of your Movement phase. Each unit from your army that starts to perform this action must be within range of a different objective marker you control and that does not have one of your banners raised on it (see below). The action is completed at the end of your turn. If completed, that objective marker is said to have one of your army’s banners raised on it (the banner is ‘removed’ if your opponent controls the objective marker at the start of any Command phase). /// Score 1 victory point at the end of each of your Command phases, and 1 victory point at the end of the battle, for each objective marker on the battlefield that has one of your banners raised on it.'}/>
            )
        case 'Retreive Nephilm Data':
            return (
                <AlertMission details={'If you select this objective, keep a Retrieved Data tally. In addition, units from your army can attempt the following action: /// Retrieve Data (Action): One INFANTRY or BIKER unit from your army can start to perform this action at the end of your Movement phase if it is wholly within a table quarter that has not had a servo-skull retrieved by your army (see below) and it is more than 6" away from any other table quarter. This action is completed at the end of your turn provided the unit performing it is still within the same table quarter. If completed, roll one D6, subtracting 1 from the result if the unit that completed the action has the Troops Battlefield Role: if the result is less than or equal to the number of models currently in that unit, that table quarter is said to have had a servo-skull retrieved by your army and you add 1 to your Retrieved Data tally. /// At the end of the battle, score 4 victory points if your Retrieved Data tally is 2, score 8 victory points if your tally is 3, or score 12 victory points if your tally is 4.'}/>
            )
        case 'HQL: A DEADLY PERFORMANCE':
            return (
                <AlertMission details={'At the end of your turn, score 3 victory points if two or more of the following conditions are satisfied: 1) You control an objective marker you did not control at the start of the turn and a HARLEQUINS unit from your army is within range of that objective marker. 2) A HARLEQUINS unit from your army is wholly within your opponent’s deployment zone. 3) Two or more enemy units were destroyed by an attack made with a ranged weapon by a HARLEQUINS model from your army this turn. 4) Two or more enemy units were destroyed by an attack made with a melee weapon by a HARLEQUINS model from your army this turn.'}/>
            )
        case 'HQL: WEAVE VEIL':
            return (
                <AlertMission details={'If you select this objective, SHADOWSEER units from your army can attempt the following psychic action: /// Weave Veil (Psychic Action - Warp Charge 3): One SHADOWSEER model from your army can attempt to perform this psychic action in your Psychic phase if it is within 18" of an enemy unit that has not yet been veiled by your army (see below). If this psychic action is completed, select one enemy unit that has not yet been veiled by your army and is within 18" of the SHADOWSEER model that completed this psychic action. That enemy unit is said to have been veiled by your army, and the warp charge value of this psychic action is increased by 1 for your army for the remainder of the battle. /// Score 3 victory points each time a unit from your army completes this psychic action.'}/>
            )
        case 'HQL: TAKE YOUR PLACES':
            return (
                <AlertMission details={'If you select this objective, during the Resolve Pre-battle Abilities step of the mission, set up one additional objective marker in your opponent’s deployment zone, then your opponent must set up one additional objective marker in your deployment zone and one additional objective marker within 6" of the centre of the battlefield. These objective markers cannot be set up within 9" of each other, within 6" of a battlefield edge or within 1" of another objective marker. These Take Your Places objective markers represent the positions your Harlequins must take up for their performance, but do not count as objective markers for any rules purposes other than for this secondary objective. // At the end of your turn, score 2 victory points if you control two of your Take Your Places objective markers and one or more HARLEQUINS units from your army are within range of each of those objective markers. // At the end of your turn, score 4 victory points instead if you control all three of your Take Your Places objective markers and one or more HARLEQUINS units from your army are within range of each of those objective markers.'}/>
            )
        case 'O: DA BIGGEST AND DA BEST':
            return (
                <AlertMission details={'At the end of the battle round, score 2 victory points for each of the following achieved by your ORKS WARLORD (to a maximum of 5 victory points per battle round):1) An enemy CHARACTER, MONSTER or VEHICLE unit lost any wounds as the result of a melee attack made by your WARLORD this battle round. 2) 5 or more models were destroyed as the result of attacks made by your WARLORD this battle round. 3) An enemy unit was destroyed as the result of an attack made by your WARLORD this battle round. 4) Your WARLORD is within range of an objective marker you control that is not within your deployment zone.'}/>
            )
        case 'O: STOMP EM GOOD':
            return (
                <AlertMission details={'At the end of the battle round: 1) Score 3 victory points if the number of enemy units destroyed by melee attacks made by ORKS units from your army this battle round is more than the number of non-GRETCHIN units from your army destroyed by melee attacks this battle round. 2) Score 1 additional victory point if the number of enemy units destroyed by melee attacks made by ORKS units from your army this battle round is at least 2 and is at least double the number of non-GRETCHIN units from your army destroyed by melee attacks this battle round.'}/>
            )
        case 'O: GREEN TIDE':
            return (
                <AlertMission details={'At the end of your turn, score 1 victory point for each table quarter that contains 10 or more ORK models from your army (excluding models that are within 6" of any other table quarter).'}/>
            )
        case 'O: GET DA GOOD BITZ':
            return (
                <AlertMission details={'If you select this secondary objective, ORKS CORE units from your army can attempt the following action: /// Get da Good Bitz (Action): At the end of your Movement phase, one or more ORKS CORE units from your army can start to perform this action. Each unit from your army that starts to perform this action must be within range of a different objective marker you control that is not in either player’s deployment zone. If a LOOTAS or GRETCHIN unit is performing this action, it is completed at the end of your turn; otherwise, it is completed at the start of your next Command phase or at the end of the battle (whichever comes first). In any case, the action is only completed if the unit performing it is still within range of the same objective marker. /// Score 3 victory points each time a unit from your army completes this action (to a maximum of 5 victory points per battle round).'}/>
            )
        case 'AS: SLAY THE HERETIC':
            return (
                <AlertMission details ={<div>At the end of the battle round:
                    <ol>
                        <li>Score 1 victory point for each enemy unit destroyed by an attack made with a bolt weapon by an ADEPTUS MINISTORUM unit from your army (to a maximum of 5 victory points per battle).</li>
                        <li>Score 1 victory point for each enemy unit destroyed by an attack made with a flame weapon by an ADEPTUS MINISTORUM unit from your army (to a maximum of 5 victory points per battle).</li>
                        <li> Score 1 victory point for each enemy unit destroyed by an attack made with a melta weapon by an ADEPTUS MINISTORUM unit from your army (to a maximum of 5 victory points per battle).</li>
                    </ol></div>} />)
        case 'AS: A LEAP OF FAITH':
            return (
                <AlertMission details ={'At the end of each players turn, if two Acts of Faith were performed by ADEPTA SORORITAS units from your army that turn, score 1 victory point if it is your turn, or 2 victory points if it is your opponent’s turn. If three or more Acts of Faith were performed by ADEPTA SORORITAS units from your army that turn, score 1 additional victory point. Note that Acts of Faith performed due to Cherub dice bestowed by incensor cherubs do not count towards this secondary objective. You can score a maximum of 12 victory points from this secondary objective per battle.'} />)
        
        case 'AS: DEFEND THE SHRINE':
            return (
                <AlertMission details ={<div>
                    If you select this objective, during the Resolve Pre-battle Abilities step of the mission, select one objective marker on the battlefield not in your deployment zone to be the Sacred Shrine objective marker (if the only objective marker on the battlefield is in your deployment zone, then this must be the Sacred Shrine objective marker).
                    <ul>
                        <li>At the end of your turn, score 3 victory points if you control the Sacred Shrine objective marker and an ADEPTUS MINISTORUM unit from your army is within range of that objective marker.</li>
                        <li>At the end of the battle, if your opponent controls the Sacred Shrine objective marker, reduce the number of victory points you have scored from this secondary objective by 3 (to a minimum of 0).</li>
                    </ul>
                </div>} />)
        case 'AS: SHADOW OPERATIONS':
            return (
                <AlertMission details ={<div>
                    <strong>Sacred Grounds (Action)</strong>: One or more ADEPTA SORORITAS INFANTRY or CULT IMPERIALIS PRIEST units from your army can start to perform this action at the end of your Movement phase. Each unit from your army that starts to perform this action must be within range of a different objective marker you control that has not been consecrated by your army (see below). The action is completed at the start of your next Command phase or at the end of the battle (whichever comes first). If completed, that objective marker is said to have been consecrated by your army, and until the end of the battle, that objective marker gains the Inspiring (ADEPTUS MINISTORUM) terrain trait (it is not considered to be a terrain feature for any other rules purposes). <br/><br/>
                    
                    Each time a unit from your army completes this action, if the objective marker that was consecrated by that action is wholly within your deployment zone, score 1 victory point; otherwise, score 5 victory points.
                </div>} />)
        case 'AC: AURIC MORTALIS':
            return (
                <AlertMission details ={<div>
                    If you select this objective, during the Resolve Pre-battle Abilities step of the mission, select one PRIMARCH or SUPREME COMMANDER unit from your opponent’s army to be marked for death (see below). If no such unit exists, select the unit from your opponent’s army with the highest points value (excluding AIRCRAFT units) to be marked for death. If two or more units are tied, you choose between them. A unit’s points value includes the points of all weapons, wargear and upgrades it has. <br/><br/>

                    At the end of the battle, score victory points as follows: <br/>
                        <ul>
                            <li>Score 5 victory points if the unit you selected to be marked for death is destroyed.</li>
                            <li>Score 5 victory points if the unit you selected to be marked for death was destroyed as a result of a melee attack made by an ADEPTUS CUSTODES or ANATHEMA PSYKANA unit from your army.</li>
                            <li>Score 5 victory points if both of the above are true and the unit you selected to be marked for death was not within your deployment zone when it was destroyed.</li>
                        </ul>
                </div>} />)
    }
    return <AlertMission details={'Nie znam tej misji'} />
}