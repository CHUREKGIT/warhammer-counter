import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

type AlertMissionProps = {
    details: any
}

export function AlertMission (props: AlertMissionProps) {
    return (
        <Grid item sx={{ width: 300 }}>
            <Alert severity="info">{props.details}</Alert>
        </Grid>
    )
}