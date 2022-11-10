import { usePlayerMissions } from '../../store/selectors';
import Alert from '@mui/material/Alert';

type MissionDetailsProps = {
    position: number,
    player: string
}

export function MissionDetails (props: MissionDetailsProps) {
    const mission = usePlayerMissions(props.player)[props.position]

    switch(mission) {
        case 'Assasination':
            return (<Alert severity="info">
                Score 3 victory points at the end of the battle for each enemy CHARACTER unit that is destroyed. At the end of the battle, if the enemy WARLORD is destroyed, score 1 extra victory point.
            </Alert>)
    }
    return <Alert>Dupa</Alert>
}