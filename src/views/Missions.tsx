import Container from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { noMercyMissionsOrganizer} from './utils/noMercyMissionsOrganizer';
import { purgeTheEnemyMissionsOrganizer } from './utils/purgeTheEnemyMissionsOrganizer';
import { warpcraftOrganizer } from './utils/warpcraftOrganizer';
import { battlefieldSupremacyOrganizer } from './utils/battlefieldOrganizer';
import { shadowOperationOrganizer } from './utils/shadowOperationOrganizer';
import missions from '../db/missions';
import store from '../store/store';


function MissionsPage () {

    const mainMissionsPurgeTheEnemy = missions.main.purgeTheEnemy;
    const mainMissionsnoMercy = missions.main.noMercy;
    const mainMissionsWarpcraft = missions.main.warpcraft;
    const mainBattlefieldSupremacy = missions.main.battlefield;
    const mainShadowOperation = missions.main.shadowOperation;

    const player1 = useSelector((state: any) => state.player1);
    const player1Army = useSelector((state: any) => state.player1SelectedArmy)
    const purgeTheEnemyPlayer1 = purgeTheEnemyMissionsOrganizer(mainMissionsPurgeTheEnemy, player1Army) 
    const noMercyPlayer1 =  noMercyMissionsOrganizer(mainMissionsnoMercy, player1Army)
    const warpcraftPlayer1 = warpcraftOrganizer(mainMissionsWarpcraft, player1Army)
    const battlefieldSupremacyPlayer1 = battlefieldSupremacyOrganizer(mainBattlefieldSupremacy, player1Army)
    const shadowOperationPlayer1 = shadowOperationOrganizer(mainShadowOperation, player1Army);
    
    const player2 = useSelector((state: any) => state.player2);
    const player2Army = useSelector((state: any) => state.player2SelectedArmy)
    const purgeTheEnemyPlayer2 = purgeTheEnemyMissionsOrganizer(mainMissionsPurgeTheEnemy, player2Army) 
    const noMercyPlayer2 =  noMercyMissionsOrganizer(mainMissionsnoMercy, player2Army)
    const warpcraftPlayer2 = warpcraftOrganizer(mainMissionsWarpcraft, player2Army)
    const battlefieldSupremacyPlayer2 = battlefieldSupremacyOrganizer(mainBattlefieldSupremacy, player2Army)
    const shadowOperationPlayer2 = shadowOperationOrganizer(mainShadowOperation, player2Army);
    
    const dispatch = useDispatch();

    const setMissionPlayer1 = (value:any, pos:number) =>{
        const state = store.getState()
        if ( state.player1SelectedMissions.length <= 2){
            dispatch({ type: 'SET_MISSION_PLAYER1', selectedMission: value, pos:pos });
        } else if (value === null) {
            dispatch({type: 'DELETE_MISSION_PLAYER1', pos: pos})
        }else {
            alert("You can't select more Missions!")
        }
    }

    const setMissionPlayer2 = (value:any, pos:number) =>{
        const state = store.getState();
        if (state.player2SelectedMissions.length <= 2){
            dispatch({ type: 'SET_MISSION_PLAYER2', selectedMission: value, pos:pos });
        } else if (value === null ){
            dispatch({type: 'DELETE_MISSION_PLAYER2', pos: pos})
        } else {
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
            id="combo-box-demo"
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
                id="combo-box-demo"
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
            id="combo-box-demo"
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
            id="combo-box-demo"
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
            id="combo-box-demo"
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
            id="combo-box-demo"
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
                id="combo-box-demo"
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
            id="combo-box-demo"
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
            id="combo-box-demo"
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
            id="combo-box-demo"
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