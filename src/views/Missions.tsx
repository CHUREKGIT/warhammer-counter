import Container from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { noMercyMissionsOrganizer} from './utils/noMercyMissionsOrganizer';
import { purgeTheEnemyMissionsOrganizer } from './utils/purgeTheEnemyMissionsOrganizer';
import { warpcraftOrganizer } from './utils/warpcraftOrganizer';
import { battlefieldSupremacyOrganizer } from './utils/battlefieldOrganizer';
import { shadowOperationOrganizer } from './utils/shadowOperationOrganizer';
import store from '../store/store';
import { usePlayer, useArmyPlayer } from '../store/selectors';


function MissionsPage () {

    const player1 = usePlayer("player1");
    const player1Army = useArmyPlayer('player1SelectedArmy');
    const noMercyPlayer1 =  noMercyMissionsOrganizer(player1Army)
    const warpcraftPlayer1 = warpcraftOrganizer(player1Army)
    const battlefieldSupremacyPlayer1 = battlefieldSupremacyOrganizer(player1Army)
    const shadowOperationPlayer1 = shadowOperationOrganizer(player1Army);
    
    const player2 = usePlayer("player2");
    const player2Army = useArmyPlayer('player2SelectedArmy');
    const noMercyPlayer2 =  noMercyMissionsOrganizer(player2Army);
    const warpcraftPlayer2 = warpcraftOrganizer(player2Army);
    const battlefieldSupremacyPlayer2 = battlefieldSupremacyOrganizer(player2Army);
    const shadowOperationPlayer2 = shadowOperationOrganizer(player2Army);

    const purgeTheEnemyPlayer1 = purgeTheEnemyMissionsOrganizer(player1Army) 
    const purgeTheEnemyPlayer2 = purgeTheEnemyMissionsOrganizer(player2Army);
    
    const dispatch = useDispatch();

    const setMissionPlayer1 = (value:string|null, pos:number) =>{
        const state = store.getState()
        const realMissionsPlayer1 = state.player1SelectedMissions.filter((mission:string) => mission !== 'placeholder')
        if ( realMissionsPlayer1.length <= 2){
            dispatch({ type: 'SET_MISSION_PLAYER1', selectedMission: value, pos:pos });
        } else if (value == null) {
            dispatch({type: 'DELETE_MISSION_PLAYER1', pos: pos})
            realMissionsPlayer1.splice(pos,1)
        }else {
            alert("You can't select more Missions!")
        }
    }

    const setMissionPlayer2 = (value:string|null, pos:number) =>{
        const state = store.getState();
        const realMissionsPlayer2 = state.player2SelectedMissions.filter((mission:string) => mission !== 'placeholder')
        if (realMissionsPlayer2.length <= 2){
            dispatch({ type: 'SET_MISSION_PLAYER2', selectedMission: value, pos:pos });
        } else if (value == null) {
            dispatch({type: 'DELETE_MISSION_PLAYER1', pos: pos})
            realMissionsPlayer2.splice(pos,1)
        } 
        else {
            alert ("You can't select more Missions!")
        }
        
    }


    return <Container maxWidth="xl">
                <Grid spacing={2} container direction="column" justifyContent="space-around" alignItems="center">
                    <Grid item>
                        <h1>Choose Your Mission!</h1>
                    </Grid>
                    <Grid item >
                        <Autocomplete
                            disablePortal
                            id="player1-purge-the-enemy"
                            data-testid='autocomplete-purge'
                            options={purgeTheEnemyPlayer1}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label={`${player1}'s Purge The Enemy`}
                            />}
                            onChange = {(event, value) => setMissionPlayer1(value, 0)}
                        />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            disablePortal
                            id="player1-nomercy-norespite"
                            data-testid='autocomplete-nomercy'
                            options={noMercyPlayer1}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label={`${player1}'s No Mercy no Respite`}
                            />}
                            onChange = {(event, value) => setMissionPlayer1(value, 1)}
                        />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            disablePortal
                            id="player1-warpcraft"
                            options={warpcraftPlayer1}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label={`${player1}'s Warpcraft`}
                            />}
                            onChange = {(event, value) => setMissionPlayer1(value, 2)}
                        />
                    </Grid>  
                    <Grid item> 
                        <Autocomplete
                            disablePortal
                            id="player1-battlefield-supremancy"
                            options={battlefieldSupremacyPlayer1}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label={`${player1}'s Battlefield Supremancy`}
                            />}
                            onChange = {(event, value) => setMissionPlayer1(value, 3)}
                        />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            disablePortal
                            id="player1-shadow-operation"
                            options={shadowOperationPlayer1}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label={`${player1}'s Shadow Operaration`}
                            />}
                            onChange = {(event, value) => setMissionPlayer1(value, 4)}
                            />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            disablePortal
                            id="player2-purge-the-enemy"
                            options={purgeTheEnemyPlayer2}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label={`${player2}'s Purge The Enemy`}
                            />}
                            onChange = {(event, value) => setMissionPlayer2(value, 0)}
                        />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            disablePortal
                            id="player2-nomercy-norespite"
                            options={noMercyPlayer2}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label={`${player2}'s No Mercy No Respite`}
                            />}
                            onChange = {(event, value) => setMissionPlayer2(value, 1)}
                        />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            disablePortal
                            id="player2-warpcraft"
                            options={warpcraftPlayer2}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label={`${player2}'s Warpcraft`}
                            />}
                            onChange = {(event, value) => setMissionPlayer2(value, 2)}
                        />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            disablePortal
                            id="player2-battlefield-supremancy"
                            options={battlefieldSupremacyPlayer2}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label={`${player2}'s Battlefield Supremancy`}
                            />}
                            onChange = {(event, value) => setMissionPlayer2(value, 3)}
                        />
                    </Grid>
                    <Grid item> 
                        <Autocomplete
                            disablePortal
                            id="player2-shadow-operation"
                            options={shadowOperationPlayer2}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label={`${player2}'s Shadow Opearation`}
                            />}
                            onChange = {(event, value) => setMissionPlayer2(value, 4)}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" href={`${process.env.PUBLIC_URL}/game`}>START GAME!</Button>
                    </Grid>
                </Grid>
            </Container>

}

export default MissionsPage;