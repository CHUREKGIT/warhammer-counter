import Container from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Counter from '../components/Counter';
import { useState } from 'react';
import { wtcConverter } from './utils/wtcConverter';
import { usePlayer, usePlayerFilteredMissions} from '../store/selectors';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { MissionDetails } from './components/MissionDetails';


function GameCounter () {
    const [scorePlayer1, setScorePlayer1] = useState(10)
    const [scorePlayer2, setScorePlayer2] = useState(10)

    const [firstPlayerInfoMission, setFirstPlayerInforMission] = useState([
        false, 
        false,
        false
    ])

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

    const clickHander = (index : number ) => {
        firstPlayerInfoMission.splice(index, 1, true)
        setFirstPlayerInforMission([...firstPlayerInfoMission])
    }

    return <Container maxWidth="xl">
            <Grid spacing={1} container direction="row" justifyContent="space-around" alignItems="center">
                <Grid item>
                    <h2 id="player-1-name">{usePlayer('player1')}</h2>
                    <Card id="score-player-1">Score: {scorePlayer1}</Card>
                </Grid>
                <Grid item>
                    <h2 id="player-1-name">{usePlayer("player2")}</h2>
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
                        >
                    </Counter>
                </Grid>
                <Grid item>
                <Counter 
                        id="counter-player2-primary"
                        player={usePlayer('player2')} 
                        playerScoreDecrese={handleDecreseScorePlayer2}
                        playerScoreIncrease={handleIncreaseScorePlayer2}
                        >
                    </Counter>      
                </Grid>
            </Grid>
            <Grid spacing={2} container direction="column" justifyContent="space-around" alignItems="center"
            sx={{
                marginTop: 3,
            }}>
                <h3>{usePlayer('player1')} Secondary Missions</h3>
                {usePlayerFilteredMissions('player1SelectedMissions').map((mission: string, index: number) => {
                    return (
                        <Grid item key={mission}>
                             <Grid spacing={1} container direction="row" justifyContent="space-around" alignItems="center">
                                <Grid item>
                                    <IconButton onClick = {() => clickHander(index) }>
                                        <HelpIcon></HelpIcon>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Counter
                                    mission = {mission}
                                    playerScoreDecrese={handleDecreseScorePlayer1}
                                    playerScoreIncrease={handleIncreaseScorePlayer1}
                                    key={mission}
                                        />
                                </Grid>
                            </Grid>
                            <Grid item>
                                    {firstPlayerInfoMission[index] ? <MissionDetails position={index} player={'player1SelectedMissions'}/> : ''}
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
                {usePlayerFilteredMissions('player2SelectedMissions').map((mission: string) => {
                    return (<Grid item key={mission}>
                        <Counter
                            mission = {mission}
                            playerScoreDecrese={handleDecreseScorePlayer2}
                            playerScoreIncrease={handleIncreaseScorePlayer2}
                            key={mission}
                            >
                        </Counter>
                    </Grid>)
                })}
            </Grid>
        </Container>
}
export default GameCounter