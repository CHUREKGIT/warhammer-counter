import Container from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import store from '../store/store';
import Counter from '../components/Counter';
import { useState } from 'react';
import { wtcConverter } from './utils/wtcConverter';

function GameCounter () {

    const state = store.getState()

    const [scorePlayer1, setScorePlayer1] = useState(10)
    const [scorePlayer2, setScorePlayer2] = useState(10)

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

    return <Container maxWidth="xl">
            <Grid spacing={1} container direction="row" justifyContent="space-around" alignItems="center">
                <Grid item>
                    <h2>{state.player1}</h2>
                    <Card>Score: {scorePlayer1}</Card>
                </Grid>
                <Grid item>
                    <h2>{state.player2}</h2>
                    <Card>Score: {scorePlayer2}</Card>
                </Grid>
            </Grid>
            <Grid sx={{marginTop:3}} alignItems="center" container direction="row" justifyContent="space-around">
                <Grid item>
                <h2>Score in WTC:</h2>
                </Grid>
                <Grid item>
                <h3>{wtcConverter(scorePlayer1, scorePlayer2)}</h3>
                </Grid>
            </Grid>
            <Grid spacing={2} container direction="column" justifyContent="space-around" alignItems="center" sx={{
                marginTop: 3,
            }}>
                <Grid item>
                    <Counter 
                        player={state.player1} 
                        playerScoreDecrese={handleDecreseScorePlayer1}
                        playerScoreIncrease={handleIncreaseScorePlayer1}
                        >
                    </Counter>
                </Grid>
                <Grid item>
                <Counter 
                        player={state.player2} 
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
                <h3>{state.player1} Secondary Missions</h3>
                {state.player1SelectedMissions.map((mission: string) => {
                    return (<Grid item>
                        <Counter
                            mission = {mission}
                            playerScoreDecrese={handleDecreseScorePlayer1}
                            playerScoreIncrease={handleIncreaseScorePlayer1}
                            >
                        </Counter>
                    </Grid>)
                    })}
            </Grid>
            <Grid spacing={2} container direction="column" justifyContent="space-around" alignItems="center"
            sx={{
                marginTop: 3,
            }}>
                <h3>{state.player2} Secondary Missions</h3>
                {state.player2SelectedMissions.map((mission: string) => {
                    return (<Grid item>
                        <Counter
                            mission = {mission}
                            playerScoreDecrese={handleDecreseScorePlayer2}
                            playerScoreIncrease={handleIncreaseScorePlayer2}
                            >
                        </Counter>
                    </Grid>)
                    })}
            </Grid>
        </Container>
}
export default GameCounter