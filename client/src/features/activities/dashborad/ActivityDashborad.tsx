import { Grid, Typography } from "@mui/material";
import ActivityLists from "./ActivityLists";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityDashborad() {
    const { activities, isPending } = useActivities();

    if (!activities || isPending) return <Typography>Loading....</Typography>

    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivityLists
                ></ActivityLists>
            </Grid>
            <Grid size={5}>
                Activity filters go here
            </Grid>
        </Grid>
    )
}
