import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

function Counter (props:any) {

    const [count, setCount] = useState(0);

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
                    <Badge color="secondary" badgeContent={count} id={`badge-counter-${props.player}-${props.mission ? props.mission :'Primary Score'}`}>
                        {props.player ? props.player : ''} {props.mission ? props.mission :'Primary Score'}
                    </Badge>
                        <ButtonGroup
                            sx={{
                                marginLeft: 2
                            }}>
                            <Button
                                id={`button-reduce-${props.player}-${props.mission ? props.mission :'Primary Score'}`}
                                data-testid={`button-reduce-${props.player}-${props.mission ? props.mission :'Primary Score'}`}
                                aria-label="reduce"
                                onClick={() => {
                                setCount(Math.max(count - 1, 0));
                                props.playerScoreDecrese();
                                }}>
                                <RemoveIcon fontSize="small" />
                            </Button>
                            <Button
                                id={`button-increase-${props.player}-${props.mission ? props.mission :'Primary Score'}`}
                                data-testid={`button-increase-${props.player}-${props.mission ? props.mission :'Primary Score'}`}
                                aria-label="increase"
                                onClick={() => {
                                setCount(count + 1);
                                props.playerScoreIncrease();
                                }}
                            >
                                <AddIcon fontSize="small" />
                            </Button>
                            </ButtonGroup>
                        </div>
                    </div>
}

export default Counter