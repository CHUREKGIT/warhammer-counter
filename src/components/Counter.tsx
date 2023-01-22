import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/material/styles';
import './Counter.css'


function Counter (props:any) {

    const longText = props.mission 
        && props.mission.length > 22 ? true : false;

    const StyledButtonCounter = styled(Button)(({ theme }) => ({
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '#8D8DDA',
        },
    }));
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '.MuiBadge-badge': {
          backgroundColor: '#8D8DDA',
        },
    }));

    return <div>
            <Grid spacing={1} container direction="row" justifyContent="space-around" alignItems="center">
                <Grid item>
                    <StyledBadge color="secondary" badgeContent={props.count} id={`badge-counter-${props.player}-${props.mission ? props.mission :'Primary Score'}`} data-testid={`badge-counter-${props.player}-${props.mission ? props.mission :'Primary Score'}`}>
                        <p className={longText ? 'longText' : 'normalText'}>{props.player ? props.player : ''} {props.mission ? props.mission :'Primary Score'}</p>
                    </StyledBadge>
                </Grid>
                <Grid item>            
                    <ButtonGroup
                        sx={{
                            marginLeft: 2
                        }}>
                        <StyledButtonCounter
                            id={`button-reduce-${props.player}-${props.mission ? props.mission :'Primary Score'}`}
                            data-testid={`button-reduce-${props.player}-${props.mission ? props.mission :'Primary Score'}`}
                            aria-label="reduce"
                            onClick={() => {
                                if (!props.mission) {
                                    if (props.count > 0) {
                                        props.setCount(Math.max(props.count - 1, 0));
                                        props.playerScoreDecrese();
                                    }
                                } else if (props.mission && props.count > 0) {
                                    props.setCount(Math.max(props.count - 1, 0));
                                    props.playerScoreDecrese();
                                } else {
                                    return '';
                                }                                  
                            }}>
                            <RemoveIcon fontSize="small" />
                        </StyledButtonCounter>
                        <StyledButtonCounter
                            id={`button-increase-${props.player}-${props.mission ? props.mission :'Primary Score'}`}
                            data-testid={`button-increase-${props.player}-${props.mission ? props.mission :'Primary Score'}`}
                            aria-label="increase"
                            onClick={() => {
                                if (!props.mission) {
                                    if (props.count < 45){
                                        props.setCount(Math.max(props.count + 1, 0));
                                        props.playerScoreIncrease();
                                    }
                                } else if (props.mission && props.count < 15) {
                                    props.setCount(Math.max(props.count + 1, 0));
                                    props.playerScoreIncrease();
                                } else {
                                    return '';
                                }    
                            }}
                        >
                            <AddIcon fontSize="small" />
                        </StyledButtonCounter>
                        </ButtonGroup>
                    </Grid>
                </Grid>
                <div>{longText}</div>
                    </div>
}

export default Counter