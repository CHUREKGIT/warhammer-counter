import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/material/styles';


function Counter (props:any) {

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
             <Box 
                sx={{
                    color: 'action.active',
                    display: 'flex',
                    flexDirection: 'column',
                    '& > *': {
                    marginBottom: 2,
                    },
                    '& .MuiBadge-root': {
                    marginRight: 4,
                    },
                        }}/>
                    <div>
                    <StyledBadge color="secondary" badgeContent={props.count} id={`badge-counter-${props.player}-${props.mission ? props.mission :'Primary Score'}`} data-testid={`badge-counter-${props.player}-${props.mission ? props.mission :'Primary Score'}`}>
                        <p>{props.player ? props.player : ''} {props.mission ? props.mission :'Primary Score'}</p>
                    </StyledBadge>
                        <ButtonGroup
                            sx={{
                                marginLeft: 2
                            }}>
                            <StyledButtonCounter
                                id={`button-reduce-${props.player}-${props.mission ? props.mission :'Primary Score'}`}
                                data-testid={`button-reduce-${props.player}-${props.mission ? props.mission :'Primary Score'}`}
                                aria-label="reduce"
                                onClick={() => {
                                props.setCount(Math.max(props.count - 1, 0));
                                props.playerScoreDecrese();
                                }}>
                                <RemoveIcon fontSize="small" />
                            </StyledButtonCounter>
                            <StyledButtonCounter
                                id={`button-increase-${props.player}-${props.mission ? props.mission :'Primary Score'}`}
                                data-testid={`button-increase-${props.player}-${props.mission ? props.mission :'Primary Score'}`}
                                aria-label="increase"
                                onClick={() => {
                                props.setCount(props.count + 1);
                                props.playerScoreIncrease();
                                }}
                            >
                                <AddIcon fontSize="small" />
                            </StyledButtonCounter>
                            </ButtonGroup>
                        </div>
                    </div>
}

export default Counter