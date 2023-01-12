import React, { useState, useEffect, useRef } from 'react'
import { Box } from '@mui/system'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledButton } from './components/StyledComponents';
import { useAuth } from './context/AuthContext';
import { db } from '../firebase';
import { onValue, ref } from 'firebase/database';
import { Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';

export default function Dashboard() {

  interface Missions {
    mision1Player1: string;
    mision1Player1Score: number;
    mision2Player1: string;
    mision2Player1Score: number;
    mision3Player1: string;
    mision3Player1Score: number;
    mision1Player2: string;
    mision1Player2Score: number;
    mision2Player2: string;
    mision2Player2Score: number;
    mision3Player2: string;
    mision3Player2Score: number;
  }

  interface GameStats {
    army1: string;
    army2: string;
    missionsPlayer1: Missions;
    missionsPlayer2: Missions;
    player1: string;
    player1Score: number;
    player2: string;
    player2Score: number;
    primaryScorePlayer1: number;
    primaryScorePlayer2: number;
    wtcScore: number;
  }

  interface Games {
    game: string;
    gameStats: GameStats
  }

  const dispatch = useDispatch();

  const handleStartGame = () => {
    localStorage.clear();
    dispatch({ type: 'RESET' });
  }

  const { currentUser } = useAuth();
  const [playerGames, setPlayerGames] = useState<Games[] | []>([])
  const shouldGetData = useRef(true);

  useEffect(() => {
    if (shouldGetData.current) {
      shouldGetData.current = false;
      if(currentUser) {
        onValue(ref(db, `${currentUser.uid}`), snapshot => {
          const data = snapshot.val();
          if (data !== null){
            Object.values(data).map((game:any) => {
              setPlayerGames((oldArray) => [...oldArray, game])
            })
          }
        })
      }
    }
  }, [])

  return (
    <div>
    <Box
      display="flex" 
      alignItems="center"
      justifyContent="center"
      >
      <StyledButton onClick={handleStartGame} variant='contained' href={`${process.env.PUBLIC_URL}/`} >Start New Game</StyledButton>
    </Box>
    <h2>Your Email: {currentUser.email}</h2>
    <h3>Your previous games</h3>
    {playerGames.reverse().map(game => {
      return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {game.game}
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ flexGrow: 1 }}>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
                      WTC SCORE: {game.gameStats.wtcScore}
                    </Typography>
                  </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Player: {game.gameStats.player1}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Army: {game.gameStats.army1}
                    </Typography>
                    <Typography variant="h5" component="div" sx= {{ mb: 1.5 }}>
                      Final Score: {game.gameStats.player1Score}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Primary Score: {game.gameStats.primaryScorePlayer1}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {game.gameStats.missionsPlayer1.mision1Player1}: {game.gameStats.missionsPlayer1.mision1Player1Score}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {game.gameStats.missionsPlayer1.mision2Player1}: {game.gameStats.missionsPlayer1.mision2Player1Score}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {game.gameStats.missionsPlayer1.mision3Player1}: {game.gameStats.missionsPlayer1.mision3Player1Score}
                    </Typography>
                    </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <CardContent>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Player {game.gameStats.player2}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Army: {game.gameStats.army2}
                    </Typography>
                    <Typography variant="h5" component="div" sx= {{ mb: 1.5 }}>
                      Final Score: {game.gameStats.player2Score}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Primary Score: {game.gameStats.primaryScorePlayer2}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {game.gameStats.missionsPlayer2.mision1Player2}: {game.gameStats.missionsPlayer2.mision1Player2Score}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {game.gameStats.missionsPlayer2.mision2Player2}: {game.gameStats.missionsPlayer2.mision2Player2Score}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {game.gameStats.missionsPlayer2.mision3Player2}: {game.gameStats.missionsPlayer2.mision3Player2Score}
                    </Typography>
                    </CardContent>
                </Card>
              </Grid> 
          </Grid>
        </Box>
        </AccordionDetails>
      </Accordion>
      )})
      }
    </div>
  )
}
