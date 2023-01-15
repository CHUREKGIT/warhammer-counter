import * as React from 'react';
import Container from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useArmies } from '../store/selectors';
import { ThemeProvider } from '@mui/material/styles';
import { theme, StartButton, SelectArmyStyledTextField } from './components/StyledComponents';
import { useAuth } from './context/AuthContext'

function MainPage () {

    const title = "Warhammer 40k Counter";
    const { currentUser } = useAuth();

    const dispatch = useDispatch();

    const setPlayer1 = (e:any) =>{
        e.preventDefault();
        dispatch({ type: 'ADD_PLAYER1', newPlayer1: e.target.value });
    }

    const setPlayer2 = (e:any) =>{
        e.preventDefault();
        dispatch({ type: 'ADD_PLAYER2', newPlayer2: e.target.value });
    }

    const setPlayer1Army = (value:string|null) =>{
        dispatch({ type: 'ADD_PLAYER1ARMY', player1Army: value });
    }

    const setPlayer2Army = (value:string|null) =>{
        dispatch({ type: 'ADD_PLAYER2ARMY', player2Army: value });
    }

    return <Container maxWidth="xl">
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid item sx={{mt: 3}}>
                        <div>
                            <img src="https://i.ibb.co/52ng0MT/Warhammer40k-logo-2020.webp" alt="Warhammer40k-logo-2020" style={{ width: '292px', }}></img>
                        </div>
                    </Grid>
                    <Grid item sx={{mt: 1}} justifyContent="center" alignItems="center">
                    <h2>{title}</h2>
                    </Grid>
                    <Grid item sx={{mt: 5}} justifyContent="center" alignItems="center">
                        <ThemeProvider theme={theme}>
                            <TextField sx={{ input: { color: 'white' } }} id="player-1" label="Player 1" variant="outlined" onChange={setPlayer1} color="neutral" focused />
                        </ThemeProvider>
                    </Grid>

                    <Grid item sx={{mt: 2}} justifyContent="center" alignItems="center">
                        <Autocomplete
                                disablePortal
                                id="army-player-1"
                                options={useArmies()}
                                sx={{ width: 300 }}
                                renderInput={(params) => <SelectArmyStyledTextField {...params} label="Select Army 1"
                                />}
                                onChange = {(event, value) => setPlayer1Army(value)}
                            />
                    </Grid>
                    <Grid item sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">  
                    <h2>VS</h2>
                    </Grid>
                    <Grid item sx={{mt: 1}} justifyContent="center" alignItems="center">    
                        <ThemeProvider theme={theme}>
                            <TextField sx={{ input: { color: 'white' } }} id="player-2" label="Player 2" variant="outlined" onChange={setPlayer2} 
                            color="neutral" focused />
                        </ThemeProvider>
                    </Grid>
                    <Grid item sx={{mt: 2}} justifyContent="center" alignItems="center">    
                        <Autocomplete
                            disablePortal
                            id="army-player-2"
                            options={useArmies()}
                            sx={{ width: 300 }}
                            renderInput={(params) => <SelectArmyStyledTextField {...params} label="Select Army 2"/>}
                            onChange = {(event, value) => setPlayer2Army(value)}
                        />
                    </Grid>
                    <Grid item sx={{mt: 5}} justifyContent="center" alignItems="center">    
                        <StartButton variant="contained" href={`${process.env.PUBLIC_URL}/missions`}>SELECT MISSIONS</StartButton>
                    </Grid>
                    {!currentUser && <Grid item sx={{mt: 2}} justifyContent="center" alignItems="center"><StartButton variant="contained" href={`${process.env.PUBLIC_URL}/login`}>LOGIN</StartButton></Grid>}
                    {!currentUser && <Grid item sx={{mt: 2}} justifyContent="center" alignItems="center"><StartButton variant="contained" href={`${process.env.PUBLIC_URL}/signup`}>REGISTER</StartButton></Grid>}
                </Grid>
            </Container>
}
export default MainPage;