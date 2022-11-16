import Container from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { noMercyMissionsOrganizer} from './utils/noMercyMissionsOrganizer';
import { purgeTheEnemyMissionsOrganizer } from './utils/purgeTheEnemyMissionsOrganizer';
import { warpcraftOrganizer } from './utils/warpcraftOrganizer';
import { battlefieldSupremacyOrganizer } from './utils/battlefieldOrganizer';
import { shadowOperationOrganizer } from './utils/shadowOperationOrganizer';
import store from '../store/store';
import { usePlayer, useArmyPlayer } from '../store/selectors';
import { MissionDetails } from './components/MissionDetails';


function MissionsPage () {

    const [renderButtonPlayer1, setRenderButtonPlayer1] = useState([
        false,
        false,
        false,
        false,
        false 
    ]); 
    
    const [renderMissionDetailsPlayer1, setRenderMissionDetailsPlayer1] = useState([
        false,
        false,
        false,
        false,
        false 
    ]);  
    
    const [renderButtonPlayer2, setRenderButtonPlayer2] = useState([
        false,
        false,
        false,
        false,
        false 
    ]);    
    const [renderMissionDetailsPlayer2, setRenderMissionDetailsPlayer2] = useState([
        false,
        false,
        false,
        false,
        false 
    ]);    

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
        if ( realMissionsPlayer1.length <= 2 && value != null){
            dispatch({ type: 'SET_MISSION_PLAYER1', selectedMission: value, pos:pos });
            renderButtonPlayer1.splice(pos, 1, true)
            setRenderButtonPlayer1([...renderButtonPlayer1])
        } else if (value == null) {
            dispatch({type: 'DELETE_MISSION_PLAYER1', pos: pos})
            realMissionsPlayer1.splice(pos,1)
            renderButtonPlayer1.splice(pos, 1, false)
            setRenderButtonPlayer1([...renderButtonPlayer1])
        }else {
            alert("You can't select more Missions!")
        }
    }

    const setMissionPlayer2 = (value:string|null, pos:number) =>{
        const state = store.getState();
        const realMissionsPlayer2 = state.player2SelectedMissions.filter((mission:string) => mission !== 'placeholder')
        if (realMissionsPlayer2.length <= 2){
            dispatch({ type: 'SET_MISSION_PLAYER2', selectedMission: value, pos:pos });
            renderButtonPlayer2.splice(pos, 1, true)
            setRenderButtonPlayer2([...renderButtonPlayer2])
        } else if (value == null) {
            dispatch({type: 'DELETE_MISSION_PLAYER1', pos: pos})
            realMissionsPlayer2.splice(pos,1)
            renderButtonPlayer2.splice(pos, 1, false)
            setRenderButtonPlayer2([...renderButtonPlayer2])
        } 
        else {
            alert ("You can't select more Missions!")
        }
        
    }

    const onClickButtonHandler = (position: number, player: string) => {
        if(player === 'player1'){
            if (renderMissionDetailsPlayer1[position]){
                renderMissionDetailsPlayer1.splice(position, 1, false)
                setRenderMissionDetailsPlayer1([...renderMissionDetailsPlayer1])
            } else {
                renderMissionDetailsPlayer1.splice(position, 1, true)
                setRenderMissionDetailsPlayer1([...renderMissionDetailsPlayer1])
            }
        }
        if(player === 'player2'){
            if (renderMissionDetailsPlayer2[position]){
                renderMissionDetailsPlayer2.splice(position, 1, false)
                setRenderMissionDetailsPlayer2([...renderMissionDetailsPlayer2])
            } else {
                renderMissionDetailsPlayer2.splice(position, 1, true)
                setRenderMissionDetailsPlayer2([...renderMissionDetailsPlayer2])
            }
        }
    }

    type ButtonProps = {
        missionPosition: number,
        player: string
    }

    const ButtonMissionDetails = (props: ButtonProps) => {
        return (
            <Grid item><Button variant="contained" onClick={() => onClickButtonHandler(props.missionPosition, props.player)}>Mission Details</Button></Grid> 
        )
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
                    {renderButtonPlayer1[0] ? <ButtonMissionDetails missionPosition={0} player={'player1'}></ButtonMissionDetails> : '' }
                    {renderMissionDetailsPlayer1[0] ? <MissionDetails position={0} player={'player1SelectedMissions'}></MissionDetails> : '' } 
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
                    {renderButtonPlayer1[1] ? <ButtonMissionDetails missionPosition={1} player={'player1'}></ButtonMissionDetails> : '' }
                    {renderMissionDetailsPlayer1[1] ? <MissionDetails position={1} player={'player1SelectedMissions'}></MissionDetails> : '' } 
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
                    {renderButtonPlayer1[2] ? <ButtonMissionDetails missionPosition={2} player={'player1'}></ButtonMissionDetails> : '' }
                    {renderMissionDetailsPlayer1[2] ? <MissionDetails position={2} player={'player1SelectedMissions'}></MissionDetails> : '' }   
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
                    {renderButtonPlayer1[3] ? <ButtonMissionDetails missionPosition={3} player={'player1'}></ButtonMissionDetails> : '' }
                    {renderMissionDetailsPlayer1[3] ? <MissionDetails position={3} player={'player1SelectedMissions'}></MissionDetails> : '' }   
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
                    {renderButtonPlayer1[4] ? <ButtonMissionDetails missionPosition={4} player={'player1'}></ButtonMissionDetails> : '' }
                    {renderMissionDetailsPlayer1[4] ? <MissionDetails position={4} player={'player1SelectedMissions'}></MissionDetails> : '' }   
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
                    {renderButtonPlayer2[0] ? <ButtonMissionDetails missionPosition={0} player={'player2'}></ButtonMissionDetails> : '' }
                    {renderMissionDetailsPlayer2[0] ? <MissionDetails position={0} player={'player2SelectedMissions'}></MissionDetails> : '' } 
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
                    {renderButtonPlayer2[1] ? <ButtonMissionDetails missionPosition={1} player={'player2'}></ButtonMissionDetails> : '' }
                    {renderMissionDetailsPlayer2[1] ? <MissionDetails position={1} player={'player2SelectedMissions'}></MissionDetails> : '' } 
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
                    {renderButtonPlayer2[2] ? <ButtonMissionDetails missionPosition={2} player={'player2'}></ButtonMissionDetails> : '' }
                    {renderMissionDetailsPlayer2[2] ? <MissionDetails position={2} player={'player2SelectedMissions'}></MissionDetails> : '' } 
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
                    {renderButtonPlayer2[3] ? <ButtonMissionDetails missionPosition={3} player={'player2'}></ButtonMissionDetails> : '' }
                    {renderMissionDetailsPlayer2[3] ? <MissionDetails position={3} player={'player2SelectedMissions'}></MissionDetails> : '' } 
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
                    {renderButtonPlayer2[4] ? <ButtonMissionDetails missionPosition={4} player={'player2'}></ButtonMissionDetails> : '' }
                    {renderMissionDetailsPlayer2[4] ? <MissionDetails position={4} player={'player2SelectedMissions'}></MissionDetails> : '' } 
                    <Grid item>
                        <Button variant="contained" href={`${process.env.PUBLIC_URL}/game`}>START GAME!</Button>
                    </Grid>
                </Grid>
            </Container>

}

export default MissionsPage;