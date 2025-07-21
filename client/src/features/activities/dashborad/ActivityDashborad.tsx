import { Grid, Typography } from "@mui/material";
import ActivityLists from "./ActivityLists";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityFilter from "./ActivityFilter";

export default function ActivityDashborad() {
    const { activities, isPending } = useActivities();

    if (!activities || isPending) return <Typography>Loading....</Typography>

    return (
        <Grid container spacing={3}>
            <Grid size={8}>
                <ActivityLists
                ></ActivityLists>
            </Grid>
            <Grid size={4}>
                <ActivityFilter />
            </Grid>
        </Grid>
    )
}
