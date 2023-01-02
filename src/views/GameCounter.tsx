import Container from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Counter from '../components/Counter';
import { useState } from 'react';
import { wtcConverter } from './utils/wtcConverter';
import { usePlayer, useArmyPlayer, usePlayerFilteredMissions} from '../store/selectors';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { MissionDetails } from './components/MissionDetails';
import { StyledButton } from './components/StyledComponents';
import { useAuth } from './context/AuthContext';
import { ref, update } from 'firebase/database';
import { db } from '../firebase';
import { Alert } from '@mui/material';


function GameCounter () {
    
    interface databaseData {
        [key: string]: any
    }

    const [scorePlayer1, setScorePlayer1] = useState(10)
    const [scorePlayer2, setScorePlayer2] = useState(10)
    const [scorePlayer1Primary, setScorePlayer1Primary] = useState(0);
    const [scorePlayer1Mission1, setScorePlayer1Mission1] = useState(0);
    const [scorePlayer1Mission2, setScorePlayer1Mission2] = useState(0);
    const [scorePlayer1Mission3, setScorePlayer1Mission3] = useState(0);
    const [scorePlayer2Primary, setScorePlayer2Primary] = useState(0);
    const [scorePlayer2Mission1, setScorePlayer2Mission1] = useState(0);
    const [scorePlayer2Mission2, setScorePlayer2Mission2] = useState(0);
    const [scorePlayer2Mission3, setScorePlayer2Mission3] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [firstPlayerInfoMission, setFirstPlayerInforMission] = useState([
        false, 
        false,
        false
    ])
    const [secondPlayerInfoMission, setSecondPlayerInforMission] = useState([
        false, 
        false,
        false
    ])
    const { currentUser } = useAuth();
    const player1 = usePlayer('player1');
    const player2 = usePlayer('player2');
    const player1Army = useArmyPlayer('player1SelectedArmy');
    const player2Army = useArmyPlayer('player2SelectedArmy');
    const player1Missions = usePlayerFilteredMissions('player1SelectedMissions')
    const player2Missions = usePlayerFilteredMissions('player2SelectedMissions')

    const handleIncreaseScorePlayer1 = () => {
        setScorePlayer1(scorePlayer1 + 1)
    };
    const handleDecreseScorePlayer1 = () => {
        setScorePlayer1((Math.max(scorePlayer1 - 1, 0)))
    }
    const handleIncreaseScorePlayer2 = () => {
        setScorePlayer2(scorePlayer2 + 1)
    };
    const handleDecreseScorePlayer2 = () => {
        setScorePlayer2((Math.max(scorePlayer2 - 1, 0)))
    }
    const clickHander = (index : number, player: string ) => {
        if (player === 'player1'){
            if (firstPlayerInfoMission[index]){
                firstPlayerInfoMission.splice(index, 1, false)
                setFirstPlayerInforMission([...firstPlayerInfoMission])
            } else {
                firstPlayerInfoMission.splice(index, 1, true)
                setFirstPlayerInforMission([...firstPlayerInfoMission])
            }
        } else {
            if (secondPlayerInfoMission[index]){
                secondPlayerInfoMission.splice(index, 1, false)
                setSecondPlayerInforMission([...secondPlayerInfoMission])
            } else {
                secondPlayerInfoMission.splice(index, 1, true)
                setSecondPlayerInforMission([...secondPlayerInfoMission])
            }
        }
    }
    const getDataBaseObject = () => {
        const dataBaseObject = {
            player1: player1,
            player1Score: scorePlayer1,
            army1: player1Army, 
            primaryScorePlayer1: scorePlayer1Primary,
            missionsPlayer1: {
                mision1Player1: player1Missions[0],
                mision1Player1Score: scorePlayer1Mission1,
                mision2Player1: player1Missions[1],
                mision2Player1Score: scorePlayer1Mission2,
                mision3Player1: player1Missions[2],
                mision3Player1Score: scorePlayer1Mission3,
            },
            player2: player2,
            player2Score: scorePlayer2,
            army2: player2Army, 
            primaryScorePlayer2: scorePlayer2Primary,
            missionsPlayer2: {
                mision1Player2: player2Missions[0],
                mision1Player2Score: scorePlayer2Mission1,
                mision2Player2: player2Missions[1],
                mision2Player2Score: scorePlayer2Mission2,
                mision3Player2: player2Missions[2],
                mision3Player2Score: scorePlayer2Mission3,
            },
            wtcScore: wtcConverter(scorePlayer1, scorePlayer2)   
        }

        return dataBaseObject
    }
    const handleWriteToDataBase = () => {
        const day = new Date ();
        const formatDay = day.toISOString().split('T')[0];
        const gameName = `${player1Army} vs. ${player2Army} on ${formatDay}`;
        const gameId = 'id' + (new Date()).getTime();
        const games:databaseData = {};
        games[gameId] = {
            game: gameName,
            gameStats: getDataBaseObject()
            };
        //try - catch change
        update(ref(db, `${currentUser.uid}`), {
            ...games
        })
        setShowAlert(true);
    }

    return <Container maxWidth="xl">
            <Grid spacing={1} container direction="row" justifyContent="space-around" alignItems="center">
                <Grid item>
                    <h2 id="player-1-name">{player1}</h2>
                    <Card id="score-player-1">Score: {scorePlayer1}</Card>
                </Grid>
                <Grid item>
                    <h2 id="player-2-name">{player2}</h2>
                    <Card id="score-player-2">Score: {scorePlayer2}</Card>
                </Grid>
            </Grid>
            <Grid sx={{marginTop:3}} alignItems="center" container direction="row" justifyContent="space-around">
                <Grid item>
                <h2>Score in WTC:</h2>
                </Grid>
                <Grid item>
                <h3 id="score-wtc">{wtcConverter(scorePlayer1, scorePlayer2)}</h3>
                </Grid>
            </Grid>
            <Grid spacing={2} container direction="column" justifyContent="space-around" alignItems="center" sx={{
                marginTop: 3,
            }}>
                <Grid item>
                    <Counter 
                        id="counter-player1-primary"
                        player={usePlayer('player1')} 
                        playerScoreDecrese={handleDecreseScorePlayer1}
                        playerScoreIncrease={handleIncreaseScorePlayer1}
                        count={scorePlayer1Primary}
                        setCount={setScorePlayer1Primary}
                        >
                    </Counter>
                </Grid>
                <Grid item>
                <Counter 
                        id="counter-player2-primary"
                        player={usePlayer('player2')} 
                        playerScoreDecrese={handleDecreseScorePlayer2}
                        playerScoreIncrease={handleIncreaseScorePlayer2}
                        count={scorePlayer2Primary}
                        setCount={setScorePlayer2Primary}
                        >
                </Counter>      
                </Grid>
            </Grid>
            <Grid spacing={2} container direction="column" justifyContent="space-around" alignItems="center"
            sx={{
                marginTop: 3,
            }}>
                <h3>{usePlayer('player1')} Secondary Missions</h3>
                {player1Missions.map((mission: string, index: number) => {
                    return (
                        <Grid item key={mission}>
                             <Grid spacing={1} container direction="row" justifyContent="space-around" alignItems="center">
                                <Grid item>
                                    <IconButton onClick = {() => clickHander(index, 'player1') }>
                                        <HelpIcon sx={{color: '#fff'}}></HelpIcon>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Counter
                                    mission = {mission}
                                    playerScoreDecrese={handleDecreseScorePlayer1}
                                    playerScoreIncrease={handleIncreaseScorePlayer1}
                                    key={mission}
                                    count={index === 0 ? scorePlayer1Mission1 
                                        : index === 1  ? scorePlayer1Mission2
                                        : scorePlayer1Mission3 }
                                    setCount={index === 0 ? setScorePlayer1Mission1 
                                            : index === 1  ? setScorePlayer1Mission2
                                            : setScorePlayer1Mission3 }
                                        />
                                </Grid>
                            </Grid>
                            <Grid item>
                                    {firstPlayerInfoMission[index] ? <MissionDetails position={index} player={'player1SelectedMissions'} mission={mission}/> : ''}
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid spacing={2} container direction="column" justifyContent="space-around" alignItems="center" key="grid-2-player"
            sx={{
                marginTop: 3,
            }}>
                <h3>{usePlayer('player2')} Secondary Missions</h3>
                {player2Missions.map((mission: string, index: number) => {
                    return (
                        <Grid item key={mission}>
                             <Grid spacing={1} container direction="row" justifyContent="space-around" alignItems="center">
                                <Grid item>
                                    <IconButton onClick = {() => clickHander(index, 'player2') }>
                                        <HelpIcon sx={{color: '#fff'}}></HelpIcon>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Counter
                                    mission = {mission}
                                    playerScoreDecrese={handleDecreseScorePlayer2}
                                    playerScoreIncrease={handleIncreaseScorePlayer2}
                                    key={mission}
                                    count={index === 0 ? scorePlayer2Mission1 
                                        : index === 1  ? scorePlayer2Mission2
                                        : scorePlayer2Mission3 }
                                    setCount={index === 0 ? setScorePlayer2Mission1 
                                            : index === 1  ? setScorePlayer2Mission2
                                            : setScorePlayer2Mission3 }
                                        />
                                </Grid>
                            </Grid>
                            <Grid item>
                                    {secondPlayerInfoMission[index] ? <MissionDetails position={index} player={'player2SelectedMissions'} mission={mission} /> : ''}
                            </Grid>
                        </Grid>
                    )
                })}
                {showAlert &&  <Grid item><Alert severity="success">Success! Game was saved into your account</Alert></Grid>}
                <Grid item>
                        <StyledButton variant="contained" onClick={handleWriteToDataBase} >Save Game in Account</StyledButton>
                </Grid>
            </Grid>
        </Container>
}
export default GameCounter