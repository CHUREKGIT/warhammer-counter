import * as React from 'react';
import Container from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { State } from './state';


function MainPage () {

    const armies = useSelector((state: State) => state.armies);

    const title = "Warhammer 40k Counter";

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
                    <h1>{title}</h1>
                        <TextField id="standard-basic" label="Player 1" variant="standard" onChange={setPlayer1} />
                        <h2>Army Player 1:</h2>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={armies}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Army1" 
                            />}
                            onChange = {(event, value) => setPlayer1Army(value)}
                        />
                        <TextField id="standard-basic" label="Player 2" variant="standard" onChange={setPlayer2} />
                        <h2>Army Player 2:</h2>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={armies}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Army2"/>}
                            onChange = {(event, value) => setPlayer2Army(value)}
                        />
                        <Button variant="contained" href={`${process.env.PUBLIC_URL}/missions`}>SELECT MISSIONS</Button>
                </Grid>
            </Container>

}

export default MainPage;